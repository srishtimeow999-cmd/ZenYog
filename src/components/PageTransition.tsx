"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext, useRef, useState, useEffect } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRoute({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayPathname, setDisplayPathname] = useState(pathname);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (pathname !== displayPathname && !isNavigating) {
      setIsNavigating(true);

      const handleNavigation = async () => {
        // Step 1: Scroll up first (requested sequence)
        if (window.scrollY > 100) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          await new Promise((resolve) => setTimeout(resolve, 600));
        }

        setDisplayPathname(pathname);
        setIsNavigating(false);
      };

      handleNavigation();
    }
  }, [pathname, displayPathname, isNavigating]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayPathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: { opacity: 0 },
          enter: { 
            opacity: 1, 
            transition: {
              duration: 1,
              delay: 0.4, // Delay fade-in until curtain is revealing
              ease: "easeOut"
            }
          },
          exit: { 
            opacity: 0,
            transition: {
              duration: 0.4,
              ease: "easeIn"
            }
          },
        }}
        className="flex-grow flex flex-col relative"
      >
        {/* The Transition Curtain (Happens first) */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "0%" }}
          transition={{ 
            duration: 0.8, 
            ease: [0.45, 0, 0.55, 1],
            // Exit happens first to cover the screen
          }}
          className="fixed inset-0 bg-gradient-to-t from-primary via-cyan-900 to-primary z-[100] pointer-events-none"
        />

        <motion.div 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-grow flex flex-col"
        >
          <FrozenRoute>{children}</FrozenRoute>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
