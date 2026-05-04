import React from 'react';
import { Trophy, Briefcase, ChevronLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Harrow = () => {
  return (
    <div className="bg-sb-dark text-zinc-100 min-h-screen font-ui selection:bg-[#a37e2c]">
      <Navbar />

      {/* FACTION HEADER */}
      <div className="relative h-[60vh] flex items-end bg-[#0a0a0c]">
        {/* Background Overlay - Deep Red Gradient & Leather Texture */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-red-950/20 to-transparent" />
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20">
          <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 uppercase text-[10px] font-bold tracking-widest">
            <ChevronLeft size={14} /> Back to Sector Map
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* The Logo you added to your public folder */}
            <img 
              src="/harrowlogo.png" 
              alt="Harrow" 
              className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(163,126,44,0.4)]" 
            />
            <div className="text-center md:text-left">
              <h1 className="font-header text-6xl md:text-8xl uppercase italic leading-none mb-4">
                Harrow <span className="text-[#a37e2c]">Syndicate</span>
              </h1>
              <p className="font-header text-[#a37e2c] text-2xl tracking-[0.3em] uppercase italic">
                “Power. Wealth. Legacy.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INTELLIGENCE CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT SIDE: STATS & THREAT LEVEL */}
          <div className="space-y-6">
            <div className="p-8 bg-zinc-900/40 border border-[#a37e2c]/20">
              <h3 className="font-header text-white uppercase mb-6 border-b border-white/5 pb-4 tracking-tighter">Intelligence Brief</h3>
              <div className="space-y-4">
                <StatRow label="Visual Identity" value="Lions & Old Money" />
                <StatRow label="Primary Asset" value="Crystal Blue" />
                <StatRow label="Operations" value="Financial Crimes" />
                <StatRow label="Territory" value="Mansion District / Northwest City" />
              </div>
            </div>
            
            <div className="p-8 border-l-4 border-red-800 bg-red-950/5 flex items-start gap-4">
              <Lock className="text-red-800 shrink-0" size={20} />
              <div>
                <p className="font-typewriter text-red-700 uppercase text-xs font-bold mb-2">Threat Level: SEVERE</p>
                <p className="text-zinc-500 text-sm italic">
                  "Do not approach without tactical backup. The Syndicate owns the streets and the courts."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FULL BACKGROUND */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-header text-4xl uppercase mb-6 text-white italic">Background</h2>
              <div className="space-y-6 font-typewriter text-zinc-400 text-lg leading-relaxed">
                <p>
                  Born from the blood of the city's founders, the Harrow Syndicate is not a gang—it is an institution. While others fight for scraps in the docks, the Syndicate sits behind mahogany desks, deciding which skyscrapers rise and which politicians fall. 
                </p>
                <p>
                  They deal in high-end leverage, corporate sabotage, and the distribution of <span className="text-[#a37e2c] font-bold">Crystal Blue</span>, the city's most refined and dangerous export.
                </p>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<Briefcase className="text-[#a37e2c]" />} 
                title="Financial Dominion" 
                desc="Laundering dirty capital through Stonebridge's new regeneration projects."
              />
              <FeatureCard 
                icon={<Trophy className="text-[#a37e2c]" />} 
                title="Legacy" 
                desc="Generational influence that spans from the docks to the High Court."
              />
            </div>
          </div>

        </div>
      </main>

      <footer className="py-20 text-center opacity-30">
        <p className="font-ui text-[10px] tracking-widest uppercase">End of Dossier // SMC-SECURE-FILE-082</p>
      </footer>
    </div>
  );
};

/* Helper Components to keep the main code clean */
const StatRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-white/5 group/row">
    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 group-hover/row:text-zinc-300 transition-colors">
      {label}
    </span>
    <span className="text-[11px] uppercase tracking-widest text-[#a37e2c] font-black text-right ml-4">
      {value}
    </span>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-6 bg-zinc-900/20 border border-white/5 group hover:border-[#a37e2c]/50 transition-colors">
    <div className="mb-4">{icon}</div>
    <h4 className="font-header text-xl uppercase mb-2 text-white">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Harrow;