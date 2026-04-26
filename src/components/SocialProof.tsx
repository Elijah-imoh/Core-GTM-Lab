import React from 'react';
import { motion } from 'motion/react';

const logos = [
  "Strategic Talent",
  "BlueChip Search",
  "Venture Hire",
  "Global Recruiters",
  "Elite Partners"
];

const SocialProof = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-12"
        >
          Trusted by top-tier recruitment firms globally
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-heading text-white whitespace-nowrap"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
