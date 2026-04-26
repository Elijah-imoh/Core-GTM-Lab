import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import BlurText from './BlurText';

  export default function Hero() {
    return (
      <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center pt-20 px-8 lg:px-16" id="home">
        <div className="absolute inset-0 z-0 glow-mesh opacity-50" />
        
        {/* Animated Radial Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-white/3 blur-[100px] rounded-full animate-bounce" />
        </div>

        <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10 py-4 md:py-12">
          {/* Main Content */}
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="flex flex-col gap-6 md:gap-8 max-w-5xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-[10rem] font-heading text-white leading-[0.85] tracking-tighter"
              >
                Scale Your <br className="hidden md:block" /> 
                <span className="text-gradient">Recruiting Firm</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/50 font-body font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              >
                We build the outbound infrastructure and premium brand positioning that 
                guarantees 8–12 new hiring partner meetings every single month.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6"
            >
              <button className="rounded-full px-8 py-3.5 flex items-center gap-2.5 text-base font-bold bg-primary text-primary-foreground border-none hover:scale-[1.02] transition-all shadow-[0_10px_40px_-10px_rgba(99,102,241,0.5)] cursor-pointer">
                Book A Call
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
