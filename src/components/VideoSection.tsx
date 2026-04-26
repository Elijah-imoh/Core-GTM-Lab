import HlsVideo from './HlsVideo';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="relative py-24 px-8 lg:px-16 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-6xl mx-auto w-full relative">
         <div className="flex flex-col items-center text-center gap-6 mb-12">
            <h3 className="text-2xl md:text-3xl font-heading text-white/80">See how the system works</h3>
         </div>
         
         <div className="liquid-glass rounded-[2.5rem] p-4 md:p-6 border border-white/10 shadow-3xl bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-indigo-500/5 filter blur-3xl pointer-events-none opacity-50" />
            
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-inner border border-white/5">
               <HlsVideo 
                  src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
                  className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
               
               <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                     <Play className="w-8 h-8 md:w-10 md:h-10 fill-white text-white" />
                  </button>
               </div>
            </div>
         </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full translate-x-1/3" />
    </section>
  );
}
