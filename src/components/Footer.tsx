import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t-[0.5px] border-slate-100 mt-auto">
      <div className="flex flex-col items-center gap-12 py-20 px-20 max-w-7xl mx-auto">
        <div className="text-2xl font-light tracking-[0.4em] text-slate-900 font-h1">
          AETHER
        </div>
        <div className="flex gap-16">
          <Link
            href="/"
            className="font-label-caps text-[10px] tracking-[0.2em] text-slate-400 hover:text-primary transition-all duration-300 uppercase"
          >
            Science
          </Link>
          <Link
            href="/workout-library"
            className="font-label-caps text-[10px] tracking-[0.2em] text-slate-400 hover:text-primary transition-all duration-300 uppercase"
          >
            Protocols
          </Link>
          <Link
            href="/meal-planner"
            className="font-label-caps text-[10px] tracking-[0.2em] text-slate-400 hover:text-primary transition-all duration-300 uppercase"
          >
            Nutrition
          </Link>
          <Link
            href="/contact"
            className="font-label-caps text-[10px] tracking-[0.2em] text-slate-400 hover:text-primary transition-all duration-300 uppercase"
          >
            Specialists
          </Link>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8"></div>
        <div className="text-center">
            <p className="font-body-md text-xs text-slate-300 italic tracking-wide">&copy; 2026 Aether Wellness. All biological protocols are subject to clinical validation.</p>
        </div>
      </div>
    </footer>
  );
}
