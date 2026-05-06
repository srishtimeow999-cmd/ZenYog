"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Connect() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  const socials = [
    { name: "Instagram", url: "#", icon: "photo_camera" },
    { name: "Twitter / X", url: "#", icon: "chat_bubble" },
    { name: "LinkedIn", url: "#", icon: "work" },
    { name: "YouTube", url: "#", icon: "play_circle" }
  ];

  return (
    <main className="pt-[160px] pb-32 flex-grow w-full relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-50/50 via-white to-white -z-10" />
      
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-32 text-center relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -z-10 animate-liquid" />
        <span className="font-label-caps text-primary tracking-[0.4em] uppercase text-[10px] mb-6 block">Ecosystem Sync</span>
        <h1 className="font-display-lg text-[64px] leading-tight text-on-surface mb-8">Connect With <br/><span className="italic font-light">The Network.</span></h1>
        <p className="font-body-lg text-secondary opacity-70 italic max-w-2xl mx-auto">
            Stay synchronized with the latest protocols, scientific breakthroughs, and community updates.
        </p>
      </motion.header>

      <section className="max-w-[1000px] mx-auto px-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Newsletter Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-[40px] border border-white/50 rounded-[40px] p-12 shadow-xl"
        >
          <span className="material-symbols-outlined text-4xl text-primary mb-6 block">mail</span>
          <h2 className="font-h1 text-3xl mb-4">User Details</h2>
          <p className="font-body-md text-secondary opacity-70 mb-10">Subscribe to our newsletter for exclusive biological insights and platform enhancements.</p>
          
          {status === "success" ? (
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">check_circle</span>
              <p className="font-body-md text-primary font-medium">Synchronization complete.</p>
              <p className="font-body-sm text-primary/70">Welcome to the network.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative group/field">
                <label className="font-label-caps text-[9px] text-secondary tracking-widest block mb-2 uppercase opacity-50 group-focus-within/field:text-primary transition-all">Communication Vector</label>
                <input 
                  required 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-slate-200 focus:border-primary py-3 font-body-md text-on-surface outline-none transition-colors" 
                  placeholder="name@domain.com" 
                />
              </div>
              <button 
                disabled={status === 'submitting'}
                type="submit"
                className="bg-slate-900 text-white px-8 py-5 rounded-full font-label-caps tracking-[0.2em] uppercase text-[11px] hover:bg-primary transition-all duration-500 flex items-center gap-4 w-full justify-center disabled:opacity-50 hover:shadow-lg"
              >
                {status === 'submitting' ? 'Transmitting...' : 'Subscribe'}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-[40px] p-12 shadow-xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-[5000ms]">
              <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Network" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-4xl text-primary mb-6 block">public</span>
            <h2 className="font-h1 text-3xl mb-4">Digital Outposts</h2>
            <p className="font-body-md text-slate-400 opacity-80 mb-10">Follow our continuous research and visual philosophy across global channels.</p>
            
            <div className="grid grid-cols-1 gap-4">
              {socials.map((social) => (
                <a key={social.name} href={social.url} className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md">
                  <span className="material-symbols-outlined text-primary">{social.icon}</span>
                  <span className="font-label-caps text-xs tracking-widest uppercase">{social.name}</span>
                  <span className="material-symbols-outlined ml-auto text-slate-500 text-sm">arrow_outward</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
