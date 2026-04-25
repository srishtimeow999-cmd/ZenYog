"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const initVanta = () => {
      if (window.VANTA && window.VANTA.WAVES && vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x868686,
          shininess: 23.00,
          waveHeight: 12.50,
          waveSpeed: 0.15,
          zoom: 0.65,
        });
      }
    };

    const interval = setInterval(() => {
      if (window.VANTA && window.VANTA.WAVES && window.THREE) {
        initVanta();
        clearInterval(interval);
      }
    }, 100);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      clearInterval(interval);
    };
  }, []);

  // Resize on route change to ensure canvas matches new page height/state if needed
  useEffect(() => {
    if (vantaEffect.current) {
      // Force a subtle resize or update if possible, 
      // but usually fixed background doesn't need this.
      // However, it helps with some Vanta edge cases.
    }
  }, [pathname]);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      <div 
        ref={vantaRef} 
        className="w-full h-full opacity-40 relative"
        style={{ filter: 'contrast(1.1) brightness(1.1)', position: 'relative' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-surface/80" />
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] animate-liquid" />
    </div>
  );
}
