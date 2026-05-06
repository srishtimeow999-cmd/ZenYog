"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock Authentication: Set cookie and redirect
    document.cookie = "zenyog_auth=1; path=/; max-age=86400"; // 1 day
    
    setTimeout(() => {
      router.push("/workout-library");
      router.refresh(); // Force a refresh to ensure middleware picks up the cookie on the client side nav if necessary
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-[160px] pb-32 flex items-center justify-center relative w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[500px] px-8"
      >
        <div className="bg-white/60 backdrop-blur-3xl border border-slate-100 p-12 sm:p-16 rounded-[40px] shadow-2xl">
          <div className="text-center mb-12">
            <span className="font-label-caps text-primary tracking-[0.4em] uppercase text-[10px] mb-4 block">Initialization</span>
            <h1 className="font-display-lg text-4xl mb-4">Establish <span className="italic font-light">Connection.</span></h1>
            <p className="font-body-sm text-secondary opacity-70 Fazli-gradient-text">Register to access customized biological protocols and the complete ZenYog framework.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative group">
              <label className="font-label-caps text-[9px] text-secondary tracking-widest block mb-2 uppercase opacity-50 group-focus-within:text-primary group-focus-within:opacity-100 transition-all">Full Identity</label>
              <input required type="text" className="w-full bg-transparent border-b border-slate-200 focus:border-primary py-3 font-body-md text-on-surface transition-all outline-none" placeholder="Enter your full name" />
            </div>
            
            <div className="relative group">
              <label className="font-label-caps text-[9px] text-secondary tracking-widest block mb-2 uppercase opacity-50 group-focus-within:text-primary group-focus-within:opacity-100 transition-all">Communication Vector</label>
              <input required type="email" className="w-full bg-transparent border-b border-slate-200 focus:border-primary py-3 font-body-md text-on-surface transition-all outline-none" placeholder="Enter your email" />
            </div>

            <button 
              disabled={isSubmitting}
              type="submit" 
              className="w-full mt-12 bg-slate-900 text-white py-5 rounded-full font-label-caps tracking-widest uppercase text-[11px] hover:bg-primary transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,105,112,0.3)] disabled:opacity-70 flex justify-center items-center gap-4 group/btn cursor-pointer"
            >
              {isSubmitting ? 'Synchronizing...' : 'Sign Up'}
              {!isSubmitting && <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>}
            </button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
             <p className="font-body-xs text-xs text-secondary opacity-50">By joining, you agree to our terms of biological data processing.</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
