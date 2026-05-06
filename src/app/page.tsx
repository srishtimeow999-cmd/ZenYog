"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const containerRef = useRef<HTMLElement>(null);
  const methodologyRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToMethodology = () => {
    methodologyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main ref={containerRef} className="flex-grow">
      {/* Hero Section with Parallax */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex flex-col items-center justify-center pt-[140px] px-20 text-center relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[0.5px] border-primary/20 rounded-full"
            />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="inline-block mb-8">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.4em] uppercase text-[10px]">Biological Precision & Optimization</span>
          </div>
          <h1 className="font-display-lg text-[80px] leading-[1.1] text-on-surface mb-12">The Future of <br/><span className="italic font-light">Human Vitality.</span></h1>
          <div className="max-w-2xl mx-auto mb-16">
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed opacity-80">&quot;We translate clinical neuroscience and metabolic research into personalized daily protocols for peak performance and longevity.&quot;</p>
          </div>
          <div className="flex gap-8 justify-center">
             <Link href="/sign-up" className="px-10 py-4 bg-slate-900 text-white font-label-caps tracking-widest text-[11px] rounded-full hover:bg-primary transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,105,112,0.3)]">Begin Assessment</Link>
             <button onClick={scrollToMethodology} className="px-10 py-4 border border-slate-200 text-slate-900 font-label-caps tracking-widest text-[11px] rounded-full hover:bg-slate-50 transition-all duration-500">Methodology</button>
          </div>
        </motion.div>
      </motion.section>



      {/* Methodology Section (The Science) */}
      <section ref={methodologyRef} className="bg-white/50 backdrop-blur-[100px] py-48 mb-64 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                    <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full"></div>
                    <div className="relative aspect-square rounded-3xl overflow-hidden border-[0.5px] border-white shadow-2xl">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkNAx3LAdPPTxLmU1VeMjxjyJSxVoiQjG4RYnChOmrplfo-jcIeAs3RjI6UrlmmV7zblP6aueIFmHRxSFLeClfXrzKhdPE09Iqbjnw5eIWAkAjsQd6DQ85wukVdBrd8ysaXi0oQ_FVMf_lrSpx69ptvNSEVoZ1v9rjMozT0ArYC0o5FOy0acFPnFtZDk-jfylLLS-KRRpGR854q0-4hgRkCvOoChLq_QGmsF4I20oadYUXpV92QAXGcC3tdcybqnxaGeYKcICJeBg" alt="meditation" />
                    </div>
                </motion.div>
                <div className="space-y-16">
                    <div>
                        <span className="font-label-caps text-primary tracking-widest text-[10px] mb-4 block uppercase">Our Framework</span>
                        <h2 className="font-h1 text-[56px] leading-tight mb-8">The ZenYog <br/>Methodology.</h2>
                        <p className="font-body-lg text-secondary opacity-70 mb-12">We believe health is not a static state, but a dynamic frequency. Our framework unifies three core pillars of biological and cognitive optimization.</p>
                    </div>
                    <div className="grid gap-12">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="flex gap-8 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <span className="material-symbols-outlined text-2xl">neuroscience</span>
                            </div>
                            <div>
                                <h4 className="font-h2 text-xl mb-2">Neural Down-Regulation</h4>
                                <p className="font-body-md text-secondary opacity-60">Techniques to manage cortisol levels and enhance cognitive resilience through data-driven recovery.</p>
                            </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="flex gap-8 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <span className="material-symbols-outlined text-2xl">fitness_center</span>
                            </div>
                            <div>
                                <h4 className="font-h2 text-xl mb-2">Body Movement</h4>
                                <p className="font-body-md text-secondary opacity-60">Kinetic and mobility protocols engineered to accelerate tissue repair and mitochondrial function.</p>
                            </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="flex gap-8 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <span className="material-symbols-outlined text-2xl">genetics</span>
                            </div>
                            <div>
                                <h4 className="font-h2 text-xl mb-2">Metabolic Precision</h4>
                                <p className="font-body-md text-secondary opacity-60">Nutritional protocols aligned with your unique genetic markers and real-time biometric feedback.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Scientific Foundation (Staggered Grid) */}
      <section className="py-48 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-20">
          {/* Scientific Foundation heading removed per user request */}

          {/* Cards removed per user request */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1440px] mx-auto px-20 py-64">
        <div className="bg-slate-900 rounded-[60px] p-32 text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-[5000ms]">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4FPpH756QoMUpeN3DDRfQY19qwPjyHA4lzBKTcIT1KnY5aQ_plGnB1C5p8O4pidOshR3sR1FNzO3dLEsnpKVZYvuygQ_S8hlNDp6stnKWQnKfHaSxqnqbxOETVEi8gDb1_lnxjpeZLUmovFjxONClnZhd6RzY9GEf0YeI2t7TftMfyYNrocsXEbIQOhIU2AH__Puq3lzUme84eHaJhNmMsqYVOWszKjiw53lZhjnF_meZ4s9ltwewej2X-GzpPw0icPmzLigbZhY" alt="mountain night" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-[72px] leading-[1.1] text-white mb-16 max-w-4xl mx-auto">Build your <span className="italic font-light">goals.</span></h2>
            <Link href="/sign-up" className="inline-block px-16 py-6 bg-white text-slate-900 font-label-caps tracking-[0.3em] text-[12px] rounded-full hover:bg-primary hover:text-white transition-all duration-700 uppercase cursor-pointer hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">Sign Up</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
