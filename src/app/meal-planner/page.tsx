"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MealPlanner() {
  return (
    <main className="pt-40 pb-24 px-20 max-w-[1440px] mx-auto flex-grow w-full">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-32 max-w-3xl mx-auto relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-400/5 blur-[80px] rounded-full -z-10 animate-liquid" />
        <span className="font-label-caps text-primary tracking-[0.4em] uppercase text-[10px] mb-6 block">Nutritional Synthesis</span>
        <h1 className="font-display-lg text-[64px] leading-tight text-on-surface mb-12">Evidence-Based <br/><span className="italic font-light">Metabolic Fuel.</span></h1>
        <p className="font-body-lg text-secondary opacity-70 italic">
          A precision-engineered framework designed to optimize bio-availability, mitochondrial function, and glycogen restoration.
        </p>
      </motion.header>

      {/* Weekly Bento Grid */}
      <div className="grid grid-cols-12 gap-8 mb-32">
        {/* Summary Stats */}
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="col-span-12 lg:col-span-4 bg-white/40 backdrop-blur-[40px] border border-white/50 p-12 flex flex-col justify-between rounded-[40px] hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group"
        >
          <div>
            <h3 className="font-h2 text-3xl mb-12">Weekly Metrics</h3>
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="font-label-caps text-[10px] tracking-widest text-secondary uppercase">Energy Balance</span>
                  <span className="font-body-md text-on-surface font-semibold">1,850 kcal</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "88%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-primary shadow-[0_0_15px_rgba(0,105,112,0.5)]"
                  ></motion.div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {[
                    { label: "Protein", val: "120g" },
                    { label: "Carbs", val: "210g" },
                    { label: "Lipids", val: "65g" }
                ].map((stat, i) => (
                    <div key={i} className="text-center group-hover:scale-110 transition-transform duration-500">
                      <span className="font-label-caps text-[9px] tracking-widest text-secondary block mb-3 uppercase">{stat.label}</span>
                      <span className="font-h2 text-2xl text-primary">{stat.val}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 pt-10 border-t border-slate-100">
            <p className="font-body-md text-sm italic text-secondary opacity-60 group-hover:opacity-100 transition-opacity">&quot;Precision in nutrition is the foundation of cognitive clarity.&quot;</p>
          </div>
        </motion.div>

        {/* Featured Recipe (Large) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="col-span-12 lg:col-span-8 relative group overflow-hidden bg-slate-100 h-[600px] rounded-[40px] hover:shadow-2xl transition-all duration-700 cursor-pointer"
        >
          <Link href="/contact" className="absolute inset-0 z-10" />
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAenF3dv6RD7rL0DVk3l4Ffq7mwEZ9Kgwhq8_Untjp1Wx_IP1TkmvvJNExzL28Nuwbd3R2mwZ09rGK2yg4Srjo9A-XQ2yUQmGqsuaySlcHOijTw34TV-15AWc_jfE53lsThDlPSI1vRkDq0Gp6CCd5gLaVsjKt0LUhcBn2UkleVGQnabZ4i4DbDwLDR0lu7NmYo5I4jpVS3PSToyzV4s1FJV-ZBJ2dcCiBnVyAcdurNvqtLnXl7yZlyoQsPao7cQ09zJC9uPk06DZI" alt="Recipe" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms] ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 p-16 text-white w-full">
            <span className="font-label-caps text-primary tracking-widest text-[10px] mb-6 block uppercase">Biological Highlight</span>
            <h2 className="font-display-lg text-[48px] leading-tight mb-8">Nutrient-Dense <br/>Adaptogenic Recovery Bowl</h2>
            <div className="flex gap-12 items-center font-label-caps text-[11px] tracking-widest relative z-20">
              <span className="flex items-center gap-3"><span className="material-symbols-outlined text-lg">schedule</span> 15 MINS</span>
              <span className="flex items-center gap-3"><span className="material-symbols-outlined text-lg">local_fire_department</span> 420 KCAL</span>
              <Link href="/contact" className="ml-auto bg-white text-slate-900 px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-700 uppercase">View Protocol</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Weekly Nutritional Cycles */}
      <section className="mb-32">
          <div className="flex justify-between items-end mb-16 px-4">
            <div>
                <span className="font-label-caps text-primary tracking-widest text-[10px] mb-4 block uppercase">The Cycle</span>
                <h3 className="font-h1 text-[40px]">Weekly Phase Calibration.</h3>
            </div>
            <div className="flex gap-6">
              <button className="w-14 h-14 flex items-center justify-center border border-slate-200 hover:border-primary hover:text-primary rounded-full transition-all duration-500 cursor-pointer">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="w-14 h-14 flex items-center justify-center border border-slate-200 hover:border-primary hover:text-primary rounded-full transition-all duration-500 cursor-pointer">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
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
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-7 gap-6"
          >
            {[
              { day: "MON", active: true },
              { day: "TUE" },
              { day: "WED" },
              { day: "THU" },
              { day: "FRI" },
              { day: "SAT" },
              { day: "SUN" }
            ].map((d, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)" }
                }}
                className={`${d.active ? 'bg-white border-primary/20 shadow-2xl ring-1 ring-primary/5' : 'bg-white/40 border-white/50 opacity-60 hover:opacity-100'} backdrop-blur-[40px] p-8 rounded-[32px] cursor-pointer group transition-all duration-700 hover:-translate-y-2`}
              >
                <Link href="/workout-library" className="absolute inset-0 z-10" />
                <span className={`font-label-caps text-[11px] tracking-widest ${d.active ? 'text-primary font-bold' : 'text-slate-400'} mb-8 block`}>{d.day}</span>
                <div className="space-y-8">
                  {[
                      { label: "Phase 1", val: i === 0 ? "Nutrient Bowl" : "Smoothie" },
                      { label: "Phase 2", val: i === 0 ? "Quinoa Salad" : "Lean Protein" },
                      { label: "Phase 3", val: i === 0 ? "Omega Fish" : "Veggie Stew" }
                  ].map((p, j) => (
                    <div key={j}>
                        <p className="text-[8px] uppercase tracking-[0.2em] text-slate-400 mb-2">{p.label}</p>
                        <p className="font-body-md text-xs text-on-surface group-hover:text-primary transition-colors leading-relaxed">{p.val}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
      </section>

      {/* Nutritional Wisdom */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-16">
          <h3 className="font-h1 text-[48px] leading-tight">Functional <br/>Micronutrients.</h3>
          <div className="space-y-12">
            {[
                { icon: "biotech", title: "Bio-Availability", desc: "Our protocols use enzymatic activation to ensure maximum nutrient absorption and metabolic efficiency." },
                { icon: "water_drop", title: "Osmotic Balance", desc: "Strategic hydration matrices aligned with mineral density for optimal cellular performance." }
            ].map((item, i) => (
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    key={i} 
                    className="flex gap-8 group"
                >
                  <div className="w-16 h-16 flex-shrink-0 bg-white border border-slate-100 flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-h2 text-xl mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="font-body-md text-secondary opacity-60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-white/40 backdrop-blur-[40px] border border-white/50 aspect-square rounded-[48px] overflow-hidden group hover:shadow-2xl transition-all duration-1000"
        >
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrw8qX0ytb5ZjX_oRBvI-raxh6d7O7XQbYDj65M6RWcFGgw2m9c9ZEo1dUq6s-_tnOCaNGgGPBUMvbwYRL_kDmc8gF-GsAaV-WUsW9rNAWekoxSOmtWHcWX4HYUYgwWVulM4x0IJc96rzX28zp07nAUAXKvuLaxnD3pXMHt-W0Iih3BC8I5QfCmrpdvoNqV48zf5MZ3jAEMOj1WrOElsyh29IOiRII21vB4CN5qNtAGU_HFoShfrqBCOQ-b07R7kckFo9UWWxexAE" alt="Visual" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4000ms]" />
          <div className="absolute inset-0 bg-slate-900/10" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="bg-white/80 backdrop-blur-2xl border border-white/50 p-12 text-center rounded-[32px] shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                <span className="font-label-caps text-primary tracking-[0.2em] text-[10px] mb-4 block uppercase">Current Focus</span>
                <h4 className="font-h2 text-2xl mb-4">Metabolic Phase Transition</h4>
                <p className="font-body-md text-sm text-secondary opacity-70 italic leading-relaxed">Prioritizing high-density amino acids and anti-inflammatory lipids for structural restoration.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
