import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

function Step({ number, title, description, delay = 0 }: { number: string; title: string; description: string; delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative flex flex-col md:flex-row gap-8 md:gap-24 items-start py-20 border-b border-white/5 last:border-none group"
    >
      <div className="flex-shrink-0">
        <span className="text-8xl md:text-9xl font-heading text-white opacity-5 group-hover:opacity-10 transition-opacity duration-700">
          {number}
        </span>
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <h3 className="text-4xl md:text-5xl font-heading text-white">{title}</h3>
        <p className="text-white/40 font-body font-light text-xl md:text-2xl max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-black relative overflow-hidden" id="how-it-works">
      <div className="max-w-6xl mx-auto flex flex-col">
        <div className="flex flex-col gap-6 mb-12">
           <div className="px-4 py-1.5 self-start rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
              The Engine
           </div>
           <h2 className="text-6xl md:text-8xl text-white font-heading leading-tight tracking-tighter">
              The 3-Step Core <br />
              <span className="text-white/40">GTM Protocol.</span>
           </h2>
        </div>

        <div className="flex flex-col">
          <Step 
            number="01" 
            title="Discovery & Mapping" 
            description="We dive deep into your firm's DNA and map out your entire total addressable market (TAM). No blind outreach, only laser-targeted precision." 
          />
          <Step 
            number="02" 
            title="Infrastructure Build" 
            description="We build your full-stack outbound engine—from cold email infrastructure to premium LinkedIn authority and conversion-optimized landing assets." 
          />
          <Step 
            number="03" 
            title="Scale & Acquisition" 
            description="We activate the system, generating 8–12 qualified hiring partner meetings every month while you focus purely on closing and candidate delivery." 
          />
        </div>
      </div>
    </section>
  );
}
