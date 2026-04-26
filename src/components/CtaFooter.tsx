import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function CtaFooter() {
  return (
    <section className="relative pt-10 pb-32 px-8 lg:px-16" id="cta">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[4rem] bg-white text-black p-12 md:p-32 flex flex-col items-center text-center gap-12 group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 relative z-10">
            Limited Availability
          </div>
          
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-heading leading-[0.8] tracking-tighter relative z-10">
            Let's build your <br />
            <span className="text-black/40">acquisition engine.</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-body font-light max-w-2xl text-black/60 relative z-10 leading-relaxed">
            Stop hoping for referrals. Start generating 8–12 verified meetings every month on autopilot.
          </p>

          <div className="mb-20 relative z-10 flex flex-col items-center gap-12">
            <img src="/logo.avif" alt="Steinn Labs Logo" className="h-6 md:h-8 w-auto grayscale opacity-40" referrerPolicy="no-referrer" />
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-full bg-primary text-primary-foreground text-xl font-bold relative z-10 shadow-2xl shadow-primary/30 flex items-center gap-4"
          >
            Book A Call
            <ArrowUpRight className="w-6 h-6" />
          </motion.button>
          
          <div className="flex flex-col items-center gap-4 relative z-10 pt-10">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/30">Current Queue: 48 Hours</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <img src="/logo.avif" alt="Core GTM" className="h-4 w-auto grayscale opacity-50" />
            <p className="text-white/20 text-xs max-w-xs font-body leading-relaxed">
              The premium GTM protocol for established recruitment firms looking to dominate their market through automated systems and authority branding.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-24 gap-y-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Navigation</span>
              <a href="#who-we-work-with" className="text-sm text-white/60 hover:text-white transition-colors">Selection</a>
              <a href="#solution" className="text-sm text-white/60 hover:text-white transition-colors">Protocol</a>
              <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">Process</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Legal</span>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-white/10">
          <span>Core GTM Lab © 2026</span>
          <span>SaaS Agency Protocol 1.0</span>
        </div>
      </div>
    </section>
  );
}
