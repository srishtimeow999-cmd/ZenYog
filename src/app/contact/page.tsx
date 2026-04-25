"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <main className="pt-[160px] pb-32 flex-grow w-full">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-32 text-center relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -z-10 animate-liquid" />
        <span className="font-label-caps text-primary tracking-[0.4em] uppercase text-[10px] mb-6 block">Direct Consultation</span>
        <h1 className="font-display-lg text-[64px] leading-tight text-on-surface mb-8">Access Our <br/><span className="italic font-light">Global Network.</span></h1>
        <p className="font-body-lg text-secondary opacity-70 italic max-w-2xl mx-auto">
            Secure communication for clinical inquiries, facility access, and partnership development.
        </p>
      </motion.header>

      {/* Main Content Grid */}
      <section className="max-w-[1440px] mx-auto px-20 grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Direct Inquiry Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="bg-white/40 backdrop-blur-[40px] border border-white/50 rounded-[40px] p-16 shadow-2xl group transition-all duration-1000 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
            <h2 className="font-h1 text-3xl mb-16">Portal Inquiry</h2>
            {formState === 'success' ? (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                >
                    <span className="material-symbols-outlined text-6xl text-primary mb-8">check_circle</span>
                    <h3 className="font-h2 text-2xl mb-4">Inquiry Transmitted</h3>
                    <p className="font-body-md text-secondary opacity-60">Your clinical request has been queued for specialist review. Expect a response within 12 biological hours.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="relative group/field">
                      <label className="font-label-caps text-[9px] text-secondary tracking-widest block mb-4 uppercase opacity-50 group-focus-within/field:text-primary group-focus-within/field:opacity-100 transition-all">Full Identity</label>
                      <input required className="w-full bg-transparent border-b border-slate-200 focus:border-primary py-4 font-body-md text-on-surface transition-all outline-none" placeholder="E.g. Dr. Julian Vane" type="text" />
                    </div>
                    <div className="relative group/field">
                      <label className="font-label-caps text-[9px] text-secondary tracking-widest block mb-4 uppercase opacity-50 group-focus-within/field:text-primary group-focus-within/field:opacity-100 transition-all">Communication Channel</label>
                      <input required className="w-full bg-transparent border-b border-slate-200 focus:border-primary py-4 font-body-md text-on-surface transition-all outline-none" placeholder="contact@aether.com" type="email" />
                    </div>
                  </div>
                  <div className="relative group/field">
                    <label className="font-label-caps text-[9px] text-secondary tracking-widest block mb-4 uppercase opacity-50 group-focus-within/field:text-primary group-focus-within/field:opacity-100 transition-all">Inquiry Vector</label>
                    <select className="w-full bg-transparent border-b border-slate-200 focus:border-primary py-4 font-body-md text-on-surface transition-all outline-none appearance-none cursor-pointer">
                      <option>Diagnostic Guidance</option>
                      <option>Facility Integration</option>
                      <option>Strategic Partnership</option>
                      <option>Data Correction</option>
                    </select>
                  </div>
                  <div className="relative group/field">
                    <label className="font-label-caps text-[9px] text-secondary tracking-widest block mb-4 uppercase opacity-50 group-focus-within/field:text-primary group-focus-within/field:opacity-100 transition-all">Technical Details</label>
                    <textarea required className="w-full bg-transparent border-b border-slate-200 focus:border-primary py-4 font-body-md text-on-surface transition-all outline-none resize-none" placeholder="Describe your requirement with precision..." rows={4}></textarea>
                  </div>
                  <div className="pt-8">
                    <button 
                        disabled={formState === 'submitting'}
                        className="bg-slate-900 text-white px-16 py-6 rounded-full font-label-caps tracking-[0.3em] uppercase text-[11px] hover:bg-primary hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,105,112,0.4)] transition-all duration-700 flex items-center gap-6 group/btn cursor-pointer active:scale-95 disabled:opacity-50" 
                        type="submit"
                    >
                      {formState === 'submitting' ? 'Transmitting...' : 'Transmit Inquiry'}
                      <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-2">send</span>
                    </button>
                  </div>
                </form>
            )}
          </div>
        </motion.div>

        {/* Global Network Section */}
        <div className="lg:col-span-5 space-y-20">
          <div className="space-y-6">
            <span className="font-label-caps text-primary tracking-widest text-[10px] mb-4 block uppercase">Global Architecture</span>
            <h2 className="font-h1 text-[40px] leading-tight">Our Physical <br/>Sanctuaries.</h2>
            <p className="font-body-md text-secondary opacity-60 leading-relaxed">Integrated facilities optimized for biological assessment and metabolic calibration.</p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            className="space-y-12"
          >
            {[
                { 
                    region: "Far East", 
                    name: "Kyoto Sanctuary", 
                    address: "42 Arashiyama Walk, Kyoto, JP", 
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuItLqB0_JGyQu05WQVetR4RRGMmx0Hk3wIeMOlsAGCPp7NkqL6g1q1ikjP8iIVPedwrIheEzu45H6TbrrpNkisTrIRoJOb5zqZZqr1AKhH2zR6CHLX0eKWm-tsC5MdHJIkdnHFZpCT0U1Jo0TvtClzGtqYzlU8YlbEAcbThRVPYv7cgWTUGwVn4Uugx2hkg4-MBRjXMfEUDFQLKsQLrqTMOvCIeTwQkxTchWm2ACj33CCp-HU-T3MVLJNlTL1VyI_O8RqxaCAlbQ" 
                },
                { 
                    region: "Central Europe", 
                    name: "Swiss Alpine Lab", 
                    address: "Via Serlas 23, St. Moritz, CH", 
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASCS0oPhygV1txZaiENyoGOxWAfhdsG8g9xAlKsOjkGwJzyAd48HZ6hcMZbZCaBF7oRIgCb8dw1mIeL69amFvzrybHujd-d4NfV2S_S6Ci4TzhYGo5CNLqfbo0MTPlX4UUO3oe2OW9SEM3T-v-KE6rRYS10hZHqxjwra01Zz_bmgOdYbQl4P3el-4dNFviWyzPnBtHPfYFX9Njz4t1rfspYpHJt0PJj1P6JRQnidyqFgXAHU-UGGrubq-Uq2lYk8mDDlXd3O6HNN4" 
                }
            ].map((loc, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20, filter: "blur(10px)" },
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" }
                  }}
                  className="flex gap-8 group cursor-pointer"
                >
                  <div className="w-32 h-44 overflow-hidden rounded-[24px] flex-shrink-0 border border-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-xl group-hover:-translate-y-2">
                    <img src={loc.img} alt={loc.name} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-label-caps text-[9px] text-primary tracking-widest uppercase mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{loc.region}</span>
                    <h3 className="font-h2 text-2xl mb-3 group-hover:text-primary transition-colors">{loc.name}</h3>
                    <p className="font-body-md text-secondary text-sm opacity-60 group-hover:opacity-100 transition-opacity">{loc.address}</p>
                    <div className="mt-6 flex items-center gap-2 text-on-surface font-label-caps text-[9px] tracking-widest hover:text-primary transition-colors">
                        Synchronize <span className="material-symbols-outlined text-sm">north_east</span>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Access */}
      <section className="mt-64 max-w-[1440px] mx-auto px-20">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[60px] p-24 text-white relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-[5000ms]">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8LAM2cIKd44Ru4qFnoMNyCH69KX_myfbCcIoFmfl8Q_JGz3GMbSdFawGdf0o21s25Xm7Fuwt0kbnfxsXcGtm_z3wxYov0UWi1eDTWhQMCrVl296jUsh5pvjl-OnR462BZiV-7h8Dpa108uqeJcVQluUB9_4lzK2CTo_TUPBEz-LTt9jzeN1vGtPbyjTXsnGdhLwQHMFcCYRKA_mq5aUYGleGNPaLv5zWXF9gtM0W3RI8bjaRhq4Vx611Q5WiGwflYrbzh2hLnsqk" alt="Expert Discussion" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="p-12">
              <span className="font-label-caps text-primary tracking-widest text-[10px] mb-6 block uppercase">Collaboration</span>
              <h2 className="font-display-lg text-[48px] leading-tight mb-8">Clinical Peer <br/>Advisory Board.</h2>
              <p className="font-body-md text-slate-400 mb-12 leading-relaxed opacity-70">Engage with our research community to discuss the latest advancements in metabolic health and functional medicine.</p>
              <button className="px-12 py-5 bg-white text-slate-900 font-label-caps tracking-[0.3em] text-[11px] rounded-full hover:bg-primary hover:text-white transition-all duration-700 uppercase">Enter Collective</button>
            </div>
            <div className="relative h-[400px] rounded-[48px] overflow-hidden border border-white/10 group-hover:border-primary/40 transition-colors duration-700">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
