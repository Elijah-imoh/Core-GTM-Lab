import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-8 flex justify-center">
      <div className="flex items-center gap-8 px-6 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
        <img src="/logo.avif" alt="Core GTM" className="h-4 w-auto opacity-80" />
        
        <div className="hidden md:flex items-center gap-1">
          <a href="#who-we-work-with" className="px-4 py-1.5 text-[11px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">Selection</a>
          <a href="#solution" className="px-4 py-1.5 text-[11px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">Protocol</a>
          <a href="#how-it-works" className="px-4 py-1.5 text-[11px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">Process</a>
        </div>

        <button className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-[11px] uppercase tracking-widest font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
          Book A Call
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </nav>
  );
}
