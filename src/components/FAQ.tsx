import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "How long before we see results?",
    answer: "Setup takes 2 weeks. Meetings start coming in week 3–4."
  },
  {
    question: "Do you guarantee results?",
    answer: "Yes. 8–12 meetings/month or we work for free until achieved."
  },
  {
    question: "What makes you different?",
    answer: "We combine outbound + branding specifically for recruiting firms. Most agencies only do one or the other poorly."
  },
  {
    question: "How many clients do you take?",
    answer: "Maximum of 5 at a time to ensure each partner gets our full focus and high-quality outbound infrastructure."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex items-center justify-between text-left group"
      >
        <span className="text-2xl md:text-3xl font-heading text-white group-hover:text-white/60 transition-colors tracking-tight">{question}</span>
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-45 text-white' : 'text-white/20'}`}>
          <Plus className="w-8 h-8" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-10 text-xl font-body font-light text-white/40 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-black" id="faq">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-24 text-left">
           <div className="px-4 py-1.5 self-start rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
              Assurance
           </div>
           <h2 className="text-6xl md:text-8xl text-white font-heading leading-tight tracking-tighter">
              Commonly asked, <br />
              <span className="text-white/40">clarified.</span>
           </h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {faqs.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
