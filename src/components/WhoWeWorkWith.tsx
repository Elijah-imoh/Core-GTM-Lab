import { CheckCircle2, XCircle } from 'lucide-react';

const criteria = [
  "You make at least $20,000/month",
  "You focus on 1–3 industries",
  "You have at least 10 recruiters",
  "You have strong case studies",
  "You hire offshore talent",
  "You spend $5,000+/month on ads",
  "You have a sales system in place",
  "You source candidates via social media"
];

  export default function WhoWeWorkWith() {
    return (
      <section className="py-32 px-8 lg:px-16 bg-black border-t border-white/5 relative overflow-hidden" id="who-we-work-with">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center text-center gap-6 mb-24">
             <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                The Standard
             </div>
             <h2 className="text-6xl md:text-8xl text-white font-heading leading-tight tracking-tighter">
                Most agencies hope. <br />
                <span className="text-white/40">We guarantee.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-32">
            {/* Problem */}
            <div className="p-10 rounded-[3rem] bg-zinc-900/50 border border-white/5 backdrop-blur-xl">
              <h3 className="text-3xl font-heading text-white mb-8">The Average Firm</h3>
              <ul className="space-y-6">
                {[
                  "Inconsistent outbound volume",
                  "Weak personal brand visibility",
                  "Low-quality intake meetings",
                  "Manual, unscalable processes",
                  "Struggling to stand out in a noisy market"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/40 font-body font-light">
                    <XCircle className="w-5 h-5 shrink-0 mt-0.5 opacity-20" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="p-10 rounded-[3rem] bg-primary/20 border border-primary/20 text-white shadow-2xl shadow-primary/5">
              <h3 className="text-3xl font-heading mb-8 text-white">The Core GTM Partner</h3>
              <ul className="space-y-6">
                {[
                  "Automated, high-scale outbound systems",
                  "Premium brand authority established",
                  "8–12 verified meetings every month",
                  "Predictable client acquisition engine",
                  "Dominant market position and higher fees"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-body font-medium text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-12 pt-20 border-t border-white/5 w-full">
            <h3 className="text-2xl font-heading text-white/60">Who We Work With</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {criteria.map((item, i) => (
                <div key={i} className="px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] text-xs uppercase tracking-widest font-bold text-white/40 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
