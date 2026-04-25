"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WorkoutLibrary() {
  const protocols = [
    { title: "Functional Mobility", category: "Mobility", time: "45 MIN", intensity: "Moderate", intensityColor: "bg-cyan-400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL3wn2NeAvbsrhmWvEvybtFaTK7XSrO3E-U2KAwL53EUMD69gAsZwWZsMv6_H2YA4wmgQr0aLpY-Q2YG2lI6qHiHsa6mZRpdNEltdLa9cwwBsenANbJMLTQpKvMDxbZG6UDLmVorV0rZSAGJocm7bpIKzUqcqgSwSTDsik808pPncF6VRm_5U2ReDIcep1um-zzMofkMOppIdfNayZJ8DkUXGdmV7ZSDjqAj7nyWwjP_GVZAlFsH94etagoX-rkY5TWHmtw3KSopo", desc: "A sequence designed to improve joint range of motion and neuromuscular control through controlled eccentric loading." },
    { title: "Neuromuscular Activation", category: "Kinetic Training", time: "30 MIN", intensity: "High", intensityColor: "bg-red-400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl5Z56STKCWAo6H0RKoQphLn4pfugZ6mVM1lk4krRJ_OlOawUBzqh8EiIudSHyku569GnpqGRmvPDYmKNHVPQipjWhaBeWmTl4PDCIOnMzOhYNiEDhr_w7HSArCD64Eh1K2KyBo07hXWr15MwXfa2usg1iZ53XnINgI-4MPsetLTn1ymbY9DRV73lpO7-rtuyFs3ftHz7N6sVLSCfsU4BRQoxJ6FIXzNJ-rCZZ6KNSV7I_swhc1C9fyVWc0ZqdRhe9mkP2het8lhM", desc: "High-intensity functional movements to activate the nervous system and build core density." },
    { title: "Parasympathetic Recovery", category: "Active Recovery", time: "20 MIN", intensity: "Low", intensityColor: "bg-emerald-400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6Vjgf2GsHWZ3D4sskgOiU79cqPTGAS-RCSoUB9NYAcZzqZAL0K7pEL_-60jA2u0UQL1adefthfuK_ULSW9ak2voluue2aw4rpG5qU7i33t2NgUWaLxxjP1ieJotwVDaj4PNW6qIkrUtu4fcvEUWAhGllfEaHei7Jv2-ERosUH7qk-tpMaxh_0j_suWBGBrMIfg1Xb-_KA2aQ390ohQ2HMvNRxqJnR6AjBdey9gpJQg0mE2GDggs2bCmsyMEMyyckjptiSU7DPdzY", desc: "A restorative sequence of deep static holds and respiration techniques to facilitate metabolic clearance." },
    { title: "Metabolic Conditioning", category: "Kinetic Training", time: "60 MIN", intensity: "High", intensityColor: "bg-red-400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtNCLYVjFR-WX7wNrfpGO1AlOp8mBEEXX9sdpdpKKy2_IU256h8kGml88mY4a0sUDt7CTVbKlX7a5LgrDmG5PS3yWkPz9THSKuoNC0unoBhywNSZyVYxVLDZ0-hAUfHefU6s3Uol4RdNJOcqaqi3EbEOset6nbtMYN1cpYQqOU_ZvTXS3pkOCef-vx-1YCtIjuS1L0Y-dfcAG3qLShNcMwPm9ofo7_hkdoesVSZhw-dQxA-SXYnmOfgDWIGBAqgWgGgNgKfIsgmBQ", desc: "Metabolic conditioning through sustained rhythmic exertion and structural loading." },
    { title: "Proprioceptive Stability", category: "Mobility", time: "40 MIN", intensity: "Moderate", intensityColor: "bg-cyan-400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOJincX-ije7_r5fqmCSdINlzJeYLWr4Mr8do06s6OgdJBg2L_njEa9iZmH5lWMg4VmRJQy6JDgZdCpqjhlSPM3ex1mav2FTGSz5z3PNdxjYmZVE8sKdHIYg5nS13s7stH326NJnwX0CydXDw3MSBybd59MHE94qIpH8IWklv1bVocPN2SyGqdUgKWVcKslGmbAqZm4VsjhkBsY_LHbxlCeHEMLR-DmidYjUA3LlX_OaZX_Oj78_gL4yPrqKetU69mgPDsTGN7jkU", desc: "Proprioceptive training focused on stability, grounding, and vertical alignment." },
    { title: "Active Recovery Protocol", category: "Active Recovery", time: "15 MIN", intensity: "Low", intensityColor: "bg-emerald-400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOQMbtyJi5P1EQMszpleZ4E2-NL3Wd7I7Nor49psg1UgHnoEXExZQW-ngdUKW1RGM2R-yiWHy9-jNstj45HgfeL2gLHOCrkrj29kkvOYqy-oE1yTPJwshTWKhup9oigz58r79utFm5zH3dFVVxaYygF9WN12rUEgY7oByZl6HcmoOlAGkHeMjQNCNhq-S9cLNVqOMj2IfoWKbvGvc383GgA49tpo9Sl2yBJrjHJOzN6oS3FuYh6ISTggPkx_t78tMfYHe6kpfjc50", desc: "Gentle myofascial release and neural down-regulation to facilitate musculoskeletal repair." }
  ];

  return (
    <main className="pt-40 pb-20 max-w-[1440px] mx-auto px-20 flex-grow w-full">
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
        <h1 className="font-display-lg text-[64px] leading-tight text-on-surface mb-8 max-w-4xl mx-auto">Scientific Protocols for <br/><span className="italic font-light">Peak Adaptation.</span></h1>
        <p className="font-body-lg text-secondary max-w-2xl mx-auto opacity-70 italic">Data-driven methodologies designed to optimize neuromuscular coordination, metabolic efficiency, and recovery kinetics.</p>
      </motion.section>

      {/* Category Filter */}
      <div className="flex justify-center gap-6 mb-24">
        {["All Protocols", "Mobility", "Kinetic", "Recovery"].map((filter, idx) => (
            <button key={idx} className={`px-10 py-3 rounded-full font-label-caps text-[10px] tracking-widest transition-all duration-500 cursor-pointer ${idx === 0 ? 'bg-slate-900 text-white shadow-xl' : 'bg-white/50 backdrop-blur-md border border-slate-100 text-secondary hover:border-primary hover:text-primary'}`}>{filter}</button>
        ))}
      </div>

      {/* Workout Grid */}
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {protocols.map((workout, i) => (
          <motion.div 
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" }
            }}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }}
            className="group relative flex flex-col bg-white/40 backdrop-blur-[40px] border border-white/50 overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer rounded-[32px]"
          >
            <Link href="/contact" className="absolute inset-0 z-10" />
            <div className="aspect-[4/5] overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" src={workout.img} alt={workout.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[9px] font-label-caps tracking-widest text-slate-900 uppercase rounded-full">{workout.category}</span>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-h2 text-2xl leading-snug">{workout.title}</h3>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="font-label-caps text-[10px]">{workout.time}</span>
                </div>
              </div>
              <p className="font-body-md text-secondary mb-10 line-clamp-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">{workout.desc}</p>
              <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between relative z-20">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${workout.intensityColor} shadow-[0_0_10px_currentColor]`}></span>
                  <span className="font-label-caps text-[10px] text-slate-500 uppercase">{workout.intensity} Intensity</span>
                </div>
                <Link href="/contact" className="flex items-center gap-2 font-label-caps text-[10px] tracking-widest text-primary hover:text-on-surface transition-all duration-300">
                  View Data
                  <span className="material-symbols-outlined text-base">analytics</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
