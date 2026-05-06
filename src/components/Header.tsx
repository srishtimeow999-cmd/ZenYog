"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "Science" },
    { href: "/workout-library", label: "Training" },
    { href: "/meal-planner", label: "Nutrition" },
    { href: "/connect", label: "Connect" },
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    document.cookie = "zenyog_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsDropdownOpen(false);
    router.push("/");
    router.refresh();
  };

  const submitFeedback = (type: string) => {
    // Mock submission
    console.log(`Submitted ${type}:`, feedbackText);
    setFeedbackText("");
    setIsFeedbackOpen(false);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-2xl border-b-[0.5px] border-white/50 shadow-sm transition-all duration-500 ease-out"
      >
        <div className="flex justify-between items-center w-full px-20 py-8 max-w-[1440px] mx-auto">
          <Link href="/" className="text-2xl font-light tracking-[0.3em] text-slate-900 font-h1 hover:opacity-70 transition-opacity duration-300">
            ZenYog
          </Link>
          <nav className="hidden md:flex gap-12">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-serif tracking-widest uppercase text-xs transition-colors duration-500 group ${
                    isActive
                      ? "text-cyan-600"
                      : "text-slate-500 hover:text-cyan-500"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-cyan-400/60 transition-all duration-500 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center gap-8 relative" ref={dropdownRef}>
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow-sm cursor-pointer hover:shadow-md hover:border-cyan-200 transition-all duration-300"
            >
              <img
                alt="User profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG_WIPiS3cRzDi65WsqBY7KFM-4tZGQ9duw6Y-KoyB1C08JjGQ6ANEK3nWnzdoBxUQ-h3ON69yNBWutHZSrY_dZlLjbKia65kZYE9vOlxG-v3K0X3iZDNLpNmkeRZYZsljpd153RnelEqdICGnEVYmkaWqGlq2f_vEvr23U7vOPczJwiC1TsOsngww-fBzJwLLufZY4R49G7vLHhQyW2RLtX8HiyXOGSJYhhLRNlSWTZMZAJ8lPi1AlVf9X9ni_-FZP4cUh6Qhhc8"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-14 right-0 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden py-2 z-50"
                >
                  <button 
                    onClick={() => {
                      setIsDropdownOpen(false);
                      router.push("/connect");
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors w-full text-left"
                  >
                    <span className="material-symbols-outlined text-[18px]">person</span>
                    User Details
                  </button>
                  <button 
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsFeedbackOpen(true);
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors w-full text-left"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                    Feedback
                  </button>
                  <div className="h-px w-full bg-slate-100 my-1"></div>
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                  >
                    <span className="material-symbols-outlined text-[18px]">logout</span>
                    Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Feedback Modal */}
      <AnimatePresence>
        {isFeedbackOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsFeedbackOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-h2 text-2xl text-slate-900">Communication Link</h3>
                <button 
                  onClick={() => setIsFeedbackOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
              
              <textarea 
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 font-body-md text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none mb-6"
                placeholder="Type your transmission here..."
                rows={5}
              ></textarea>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => submitFeedback("Feedback")}
                  disabled={!feedbackText.trim()}
                  className="flex-1 bg-slate-900 text-white py-3 rounded-full font-label-caps text-[10px] tracking-widest uppercase hover:bg-slate-800 disabled:opacity-50 transition-colors"
                >
                  Send Feedback
                </button>
                <button 
                  onClick={() => submitFeedback("Issue")}
                  disabled={!feedbackText.trim()}
                  className="flex-1 bg-red-50 text-red-600 border border-red-200 py-3 rounded-full font-label-caps text-[10px] tracking-widest uppercase hover:bg-red-100 disabled:opacity-50 transition-colors"
                >
                  Report Issue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
