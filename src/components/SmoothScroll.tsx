"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Use borderBoxSize for the most accurate height including padding/borders
        const height = entry.borderBoxSize[0]?.blockSize || entry.contentRect.height;
        setContentHeight(height);
      }
    });

    resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, [children]);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping: 25, // Increased damping for a smoother, less "floaty" feel
    stiffness: 120,
    mass: 0.3,
  });

  const y = useTransform(smoothY, (value) => -value);

  return (
    <>
      <div 
        style={{ height: contentHeight }} 
        className="absolute top-0 left-0 w-full pointer-events-none" 
      />
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full flex flex-col will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
}
