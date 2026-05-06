"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const GifAthlete = ({ stepTitle }: { stepTitle: string }) => {
  const getGifUrl = (title: string) => {
    // Specific exercise mappings requested by the user
    if (title.includes("Neural Prep")) return "https://www.docteur-fitness.com/wp-content/uploads/2022/09/jump-box.gif";
    if (title.includes("Complex Kinetic Lifts")) return "https://modusx.de/wp-content/uploads/kettlebell-swing.gif";
    if (title.includes("Metabolic Conditioning")) return "https://i.pinimg.com/originals/fc/5d/cd/fc5dcd6551c0bc325dd678d7f2977f8d.gif";
    if (title.includes("Down-Regulation")) return "https://fitnessprogramer.com/wp-content/uploads/2022/02/Riding-Outdoor-Bicycle.gif";
    if (title.includes("Dynamic Joint Articulation")) return "https://fitnessprogramer.com/wp-content/uploads/2021/06/Dynamic-Chest-Stretch.gif";
    if (title.includes("Parasympathetic Breathing")) return "https://images.squarespace-cdn.com/content/v1/604bcef10181dc1c49e8a88b/1629249867431-3ZME3YDNU7167741YSX2/478BreathingS%26B.gif";
    if (title.includes("Myofascial Release")) return "https://app.aspira-fitness.com/api/media/644ed898-858a-49aa-88c7-e98902862803";
    if (title.includes("Static Elongation")) return "https://liftmanual.com/wp-content/uploads/2023/04/leg-up-hamstring-stretch.gif";
    
    // Default high-quality 3D style for other exercises
    return "https://media.tenor.com/Pfj8vy41k-0AAAAM/gym.gif";
  };

  const getFilter = (title: string) => {
    // Tone down filters for specific exercise GIFs to maintain realism, 
    // while keeping distinct signatures for the default 3D style.
    const isSpecific = title.includes("Neural Prep") || 
                       title.includes("Complex Kinetic") || 
                       title.includes("Metabolic") || 
                       title.includes("Down-Regulation") ||
                       title.includes("Articulation") ||
                       title.includes("Breathing") ||
                       title.includes("Myofascial") ||
                       title.includes("Elongation");
    
    if (isSpecific) return "brightness(1.1) contrast(1.1)";

    if (title.includes("Eccentric")) return "hue-rotate(45deg) brightness(1.1) contrast(1.1)";
    if (title.includes("Isometric")) return "hue-rotate(90deg) brightness(1.1) contrast(1.1)";
    if (title.includes("Flow")) return "hue-rotate(135deg) brightness(1.1) contrast(1.1)";
    if (title.includes("Plyometrics")) return "hue-rotate(180deg) brightness(1.1) contrast(1.1)";
    if (title.includes("Lifts")) return "hue-rotate(225deg) brightness(1.1) contrast(1.1)";
    return "none";
  };

  return (
    <div className="w-full h-full relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black flex items-center justify-center group/gif">
       <img 
         src={getGifUrl(stepTitle)} 
         alt={stepTitle}
         className="w-full h-full object-cover opacity-80 transition-all duration-[2000ms] group-hover/gif:scale-110"
         style={{ filter: getFilter(stepTitle) }}
         onError={(e) => {
           // If a specific GIF link breaks, fallback to the 3D style
           e.currentTarget.src = "https://media.tenor.com/Pfj8vy41k-0AAAAM/gym.gif";
         }}
       />
       
       {/* High-Tech HUD Overlays */}
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
       
       {/* Scanning Line Animation */}
       <motion.div 
         animate={{ top: ["0%", "100%", "0%"] }}
         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
         className="absolute left-0 right-0 h-[1px] bg-white/20 blur-[1px] z-10 pointer-events-none"
       />

       {/* Corner Brackets */}
       <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 rounded-tl-sm pointer-events-none"></div>
       <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20 rounded-tr-sm pointer-events-none"></div>
       <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20 rounded-bl-sm pointer-events-none"></div>
       <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 rounded-br-sm pointer-events-none"></div>

       {/* Status Indicator */}
       <div className="absolute bottom-4 left-8 flex items-center gap-3 z-20">
         <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
         <span className="text-[9px] font-label-caps tracking-[0.2em] text-white/40 uppercase">ZenYog Motion Analytics</span>
       </div>

       {/* Grid Overlay */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
    </div>
  );
};

export default function WorkoutLibrary() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [expandedStepIndex, setExpandedStepIndex] = useState<number | null>(null);

  useEffect(() => {
    if (expandedIndex === null) {
      setExpandedStepIndex(null);
    }
  }, [expandedIndex]);

  const protocols = [
    { 
      title: "Functional Mobility", 
      category: "Mobility", 
      time: "45 MIN", 
      intensity: "Moderate", 
      intensityColor: "bg-cyan-400", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL3wn2NeAvbsrhmWvEvybtFaTK7XSrO3E-U2KAwL53EUMD69gAsZwWZsMv6_H2YA4wmgQr0aLpY-Q2YG2lI6qHiHsa6mZRpdNEltdLa9cwwBsenANbJMLTQpKvMDxbZG6UDLmVorV0rZSAGJocm7bpIKzUqcqgSwSTDsik808pPncF6VRm_5U2ReDIcep1um-zzMofkMOppIdfNayZJ8DkUXGdmV7ZSDjqAj7nyWwjP_GVZAlFsH94etagoX-rkY5TWHmtw3KSopo", 
      desc: "A sequence designed to improve joint range of motion and neuromuscular control through controlled eccentric loading.",
      details: "This protocol targets the deep fascial lines to restore baseline mobility and increase movement efficiency. Focus on breath integration throughout each phase, ensuring oxygen delivery to deep muscle tissues.",
      detailsImg: "/images/mobility_step.png",
      steps: [
        { title: "Dynamic Joint Articulation", duration: "5 min", text: "Begin with light rotational movements for all major joints to stimulate synovial fluid production." },
        { title: "Eccentric Loading Drills", duration: "20 min", text: "Slowly move through a full range of motion under tension, taking 4-5 seconds during the eccentric phase of each movement." },
        { title: "End-Range Isometric Holds", duration: "15 min", text: "Hold the most challenging positions at the end of your mobility range for 30-45 seconds to build structural strength." },
        { title: "Integrative Flow", duration: "5 min", text: "Combine the movements into a seamless, continuous flow to integrate the newly acquired mobility into your nervous system." }
      ]
    },
    { 
      title: "Kinetic Training", 
      category: "Kinetic Training", 
      time: "45 MIN", 
      intensity: "High", 
      intensityColor: "bg-red-400", 
      img: "/images/kinetic_rope.png", 
      desc: "High-intensity functional movements to activate the nervous system and build core density. Covers both neuromuscular activation and metabolic conditioning.",
      details: "This session is designed to maximize fast-twitch fiber recruitment and push metabolic boundaries. Ensure proper hydration and focus on explosive but controlled execution to avoid central nervous system burnout.",
      detailsImg: "/images/kinetic_step.png",
      steps: [
        { title: "Neural Prep & Plyometrics", duration: "10 min", text: "Prime the nervous system with rapid, explosive movements like box jumps and med-ball slams to engage fast-twitch fibers." },
        { title: "Complex Kinetic Lifts", duration: "15 min", text: "Perform compound exercises (e.g., cleans, snatches, or heavy kettlebell swings) focusing on power output and form." },
        { title: "Metabolic Conditioning", duration: "15 min", text: "Transition into high-intensity interval training (HIIT) with minimal rest periods to maximize caloric burn and cardiovascular stress." },
        { title: "Down-Regulation", duration: "5 min", text: "Gradually reduce heart rate with light cycling or walking, followed by deep nasal breathing to begin the recovery process." }
      ]
    },
    { 
      title: "Active Recovery", 
      category: "Active Recovery", 
      time: "20 MIN", 
      intensity: "Low", 
      intensityColor: "bg-emerald-400", 
      img: "/images/recovery_meditation.png", 
      desc: "A restorative sequence of deep static holds and respiration techniques to facilitate metabolic clearance.",
      details: "Prioritize this protocol post-kinetic training to down-regulate the nervous system, clear metabolic waste, and accelerate tissue repair. The goal is parasympathetic dominance.",
      detailsImg: "/images/recovery_details.png",
      steps: [
        { title: "Parasympathetic Breathing", duration: "5 min", text: "Utilize the 4-7-8 breathing technique (inhale for 4s, hold for 7s, exhale for 8s) to shift the autonomic nervous system into a state of rest." },
        { title: "Myofascial Release", duration: "10 min", text: "Use foam rollers and lacrosse balls on major muscle groups (quads, glutes, lats) to release fascial tension and improve blood flow." },
        { title: "Static Elongation", duration: "5 min", text: "Hold passive, gravity-assisted stretches for 60 seconds each, allowing the muscles to fully lengthen without resistance." }
      ]
    }
  ];

  return (
    <main className="pt-40 pb-20 max-w-[1440px] mx-auto px-20 flex-grow w-full relative">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-32 text-center relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -z-10 animate-liquid" />
        <span className="font-label-caps text-primary tracking-[0.4em] uppercase text-[10px] mb-6 block">The Performance Index</span>
        <h1 className="font-display-lg text-[64px] leading-tight text-on-surface mb-8 max-w-4xl mx-auto">Scientific Training Protocols for <br/><span className="italic font-light">Peak Adaptation.</span></h1>
        <p className="font-body-lg text-secondary max-w-2xl mx-auto opacity-70 italic">Data-driven methodologies designed to optimize neuromuscular coordination, metabolic efficiency, and recovery kinetics.</p>
      </motion.section>

      {/* Category Filter */}
      <div className="flex justify-center gap-6 mb-24">
        {["All Protocols", "Mobility", "Kinetic", "Recovery"].map((filter, idx) => (
            <button key={idx} className={`px-10 py-3 rounded-full font-label-caps text-[10px] tracking-widest transition-all duration-500 cursor-pointer ${idx === 0 ? 'bg-slate-900 text-white shadow-xl' : 'bg-white/50 backdrop-blur-md border border-slate-100 text-secondary hover:border-primary hover:text-primary'}`}>{filter}</button>
        ))}
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative z-10">
        {protocols.map((workout, i) => (
          <motion.div 
            key={i}
            layoutId={`card-container-${i}`}
            onClick={() => setExpandedIndex(i)}
            className="group flex flex-col bg-white/40 backdrop-blur-[40px] border border-white/50 overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer rounded-[32px] transition-shadow duration-500"
          >
            <motion.div layoutId={`image-container-${i}`} className="aspect-[4/5] overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105" src={workout.img} alt={workout.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[9px] font-label-caps tracking-widest text-slate-900 uppercase rounded-full">{workout.category}</span>
              </div>
            </motion.div>
            <motion.div layoutId={`text-container-${i}`} className="p-10 flex flex-col flex-grow bg-white">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-h2 text-2xl leading-snug">{workout.title}</h3>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="font-label-caps text-[10px]">{workout.time}</span>
                </div>
              </div>
              <p className="font-body-md text-secondary opacity-60 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">{workout.desc}</p>
              
              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between relative z-20">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${workout.intensityColor} shadow-[0_0_10px_currentColor]`}></span>
                  <span className="font-label-caps text-[10px] text-slate-500 uppercase">{workout.intensity} Intensity</span>
                </div>
                <div className="flex items-center gap-2 font-label-caps text-[10px] tracking-widest text-primary transition-all duration-300">
                  View Data
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedIndex(null)}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 pointer-events-none">
              <motion.div
                layoutId={`card-container-${expandedIndex}`}
                className="bg-white rounded-[40px] overflow-hidden shadow-2xl max-w-[1200px] w-full max-h-[90vh] flex flex-col md:flex-row relative pointer-events-auto"
              >
                {/* Close button */}
                <button 
                  onClick={() => setExpandedIndex(null)}
                  className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white md:text-slate-800 hover:bg-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>

                {/* Left: Image */}
                <motion.div 
                  layoutId={`image-container-${expandedIndex}`}
                  className="w-full md:w-[45%] h-[40vh] md:h-auto relative shrink-0"
                >
                  <img className="w-full h-full object-cover" src={protocols[expandedIndex].img} alt={protocols[expandedIndex].title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-[9px] font-label-caps tracking-widest text-white uppercase rounded-full mb-6 inline-block">
                      {protocols[expandedIndex].category}
                    </span>
                    <h3 className="font-h1 text-5xl text-white leading-tight mb-4">{protocols[expandedIndex].title}</h3>
                    <p className="font-body-md text-white/80">{protocols[expandedIndex].desc}</p>
                  </div>
                </motion.div>

                {/* Right: Scrollable Content */}
                <motion.div 
                  layoutId={`text-container-${expandedIndex}`}
                  className="flex-1 overflow-y-auto p-12 md:p-20 bg-white"
                >
                  <div className="flex items-center gap-8 mb-12">
                    <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full">
                      <span className="material-symbols-outlined text-lg text-primary">schedule</span>
                      <span className="font-label-caps text-[11px] tracking-widest">{protocols[expandedIndex].time}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full">
                      <span className={`w-3 h-3 rounded-full ${protocols[expandedIndex].intensityColor} shadow-[0_0_10px_currentColor]`}></span>
                      <span className="font-label-caps text-[11px] tracking-widest text-slate-800 uppercase">{protocols[expandedIndex].intensity} Intensity</span>
                    </div>
                  </div>

                  <p className="font-body-lg text-secondary mb-16 opacity-80 leading-relaxed text-lg">
                    {protocols[expandedIndex].details}
                  </p>

                  <h4 className="font-label-caps text-xs tracking-[0.3em] uppercase mb-10 text-primary border-b border-slate-100 pb-6">Protocol Execution</h4>
                  
                  <div className="space-y-6 mb-16">
                    {protocols[expandedIndex].steps.map((step, stepIdx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * stepIdx + 0.3, duration: 0.5 }}
                        key={stepIdx} 
                        onClick={() => setExpandedStepIndex(expandedStepIndex === stepIdx ? null : stepIdx)}
                        className="flex flex-col border border-slate-100 rounded-3xl p-6 group cursor-pointer hover:border-primary/30 transition-colors duration-300 bg-white"
                      >
                        <div className="flex gap-6 items-start w-full">
                          <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-display-sm shrink-0 transition-colors duration-500 ${expandedStepIndex === stepIdx ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'border-primary/20 text-primary group-hover:bg-primary/5'}`}>
                            0{stepIdx + 1}
                          </div>
                          <div className="flex-1 pt-1">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-4">
                                <h5 className="font-h2 text-xl">{step.title}</h5>
                                <span className="font-label-caps text-[9px] tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{step.duration}</span>
                              </div>
                              <span className={`material-symbols-outlined text-slate-300 transition-transform duration-500 ${expandedStepIndex === stepIdx ? 'rotate-180 text-primary' : ''}`}>expand_more</span>
                            </div>
                            <p className="font-body-md text-secondary opacity-60 leading-relaxed">
                              {step.text}
                            </p>
                          </div>
                        </div>
                        
                        {/* Expandable Animation Box */}
                        <AnimatePresence>
                          {expandedStepIndex === stepIdx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-8 lg:ml-18 h-[320px] relative">
                                <GifAthlete stepTitle={step.title} />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  {protocols[expandedIndex].detailsImg && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="mt-8 rounded-[24px] overflow-hidden aspect-[21/9] border border-slate-100 shadow-lg relative group"
                    >
                      <img src={protocols[expandedIndex].detailsImg} alt="Step Details" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
