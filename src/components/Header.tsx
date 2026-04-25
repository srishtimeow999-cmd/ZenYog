"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Science" },
    { href: "/workout-library", label: "Protocols" },
    { href: "/meal-planner", label: "Nutrition" },
    { href: "/contact", label: "Specialists" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b-[0.5px] border-white/50 shadow-sm transition-all duration-500 ease-out"
    >
      <div className="flex justify-between items-center w-full px-20 py-8 max-w-[1440px] mx-auto">
        <Link href="/" className="text-2xl font-light tracking-[0.3em] text-slate-900 font-h1 hover:opacity-70 transition-opacity duration-300">
          Aether Wellness
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
        <div className="flex items-center gap-8">
          <button className="font-serif tracking-widest uppercase text-xs text-cyan-600 transition-all duration-500 hover:text-cyan-400 hover:tracking-[0.15em] active:scale-95">
            Connect
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow-sm cursor-pointer hover:shadow-md hover:border-cyan-200 transition-all duration-300">
            <img
              alt="User profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG_WIPiS3cRzDi65WsqBY7KFM-4tZGQ9duw6Y-KoyB1C08JjGQ6ANEK3nWnzdoBxUQ-h3ON69yNBWutHZSrY_dZlLjbKia65kZYE9vOlxG-v3K0X3iZDNLpNmkeRZYZsljpd153RnelEqdICGnEVYmkaWqGlq2f_vEvr23U7vOPczJwiC1TsOsngww-fBzJwLLufZY4R49G7vLHhQyW2RLtX8HiyXOGSJYhhLRNlSWTZMZAJ8lPi1AlVf9X9ni_-FZP4cUh6Qhhc8"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
