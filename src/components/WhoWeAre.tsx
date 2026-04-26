import { motion } from 'motion/react';

interface ProfileProps {
  name: string;
  role: string;
  bio: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

function Profile({ name, role, bio, description, imageUrl, reverse }: ProfileProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
      <div className="flex-1 relative w-full">
         <div className="liquid-glass rounded-3xl p-3 border border-white/10 shadow-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
            <img 
               src={imageUrl} 
               alt={name} 
               className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-700"
            />
         </div>
         {/* Abstract shape */}
         <div className={`absolute -z-10 ${reverse ? '-top-10 -right-10' : '-bottom-10 -left-10'} w-48 h-48 bg-indigo-500/10 blur-[80px] rounded-full`} />
      </div>
      
      <div className="flex-1 flex flex-col items-start">
         <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-4xl md:text-5xl font-heading text-white tracking-tight leading-none">{name} — {role}</h3>
         </div>
         <p className="text-lg md:text-xl font-body font-medium text-indigo-400 mb-2">
            {bio}
         </p>
         <p className="text-white/60 font-body font-light text-base md:text-lg leading-relaxed max-w-lg">
            {description}
         </p>
      </div>
    </div>
  );
}

  export default function Solution() {
    return (
      <section className="py-32 px-8 lg:px-16 bg-black border-t border-white/5" id="solution">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-20">
             <div className="px-4 py-1.5 self-start rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                The GTM Solution
             </div>
             <h2 className="text-6xl md:text-8xl text-white font-heading leading-tight tracking-tighter max-w-4xl">
                A high-performance <br />
                <span className="text-white/40">client acquisition machine.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Premium Branding",
                desc: "We transform your firm's visual identity into a premium authority that commands higher fees and instant trust."
              },
              {
                title: "Automated Outbound",
                desc: "Laser-targeted cold email and LinkedIn systems that work 24/7 to fill your calendar with verified decision-makers."
              },
              {
                title: "GTM Architecture",
                desc: "End-to-end strategy from market mapping to conversion tracking. We build the engine, you drive the results."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                <h4 className="text-2xl font-heading text-white mb-4 group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                <p className="text-white/40 font-body font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Execution Layer (The Team) */}
          <div className="flex flex-col items-center text-center gap-6 mb-20">
             <h3 className="text-4xl md:text-5xl font-heading text-white">The Execution Layer</h3>
             <p className="text-white/40 font-body font-light text-xl max-w-2xl">
                The experts building your systems from the ground up.
             </p>
          </div>

          <div className="flex flex-col gap-24">
             <Profile 
                name="Efon"
                role="Outbound & GTM"
                bio="Sales professional with a software engineering background."
                description="Efon is a sales professional with a software engineering background, bringing a systems-driven approach to outbound growth. He built the entire outbound engine for Steinn Labs from the ground up generating $246,000 in qualified pipeline in just 2 months. He focuses on building predictable, scalable outbound systems that consistently generate high-quality opportunities not just activity."
                imageUrl="/Efon.webp"
             />
             
             <Profile 
                name="Elijah"
                role="Brand & Design"
                bio="Design lead with international agency experience."
                description="Elijah brings 8+ years of design experience across Product Design, branding, and motion Design, He has worked as part of the team at Neue World, a leading design agency in the Middle East and also with other brands worldwide. Delivering everything from Graphics and motion design to landing pages and full brand systems."
                imageUrl="/my_photo_4.jpeg"
                reverse
             />
          </div>
        </div>
      </section>
    );
  }
