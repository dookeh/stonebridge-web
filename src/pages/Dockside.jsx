import React from 'react';
import { Anchor, Users, ChevronLeft, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Dockside = () => {
  return (
    <div className="bg-[#0b0e14] text-zinc-300 min-h-screen font-ui selection:bg-[#3b82f6]">
      <Navbar />

      {/* FACTION HEADER */}
      <div className="relative h-[60vh] flex items-end bg-[#05070a]">
        {/* Background Overlay - Navy and Deep Sea Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0b0e14] via-[#1e3a8a]/20 to-transparent" />
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20">
          <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-[#3b82f6] transition-colors mb-8 uppercase text-[10px] font-bold tracking-widest">
            <ChevronLeft size={14} /> Back to Sector Map
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img 
              src="/docksidelogo.png" 
              alt="Dockside Order" 
              className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" 
            />
            <div className="text-center md:text-left">
              <h1 className="font-header text-6xl md:text-8xl uppercase italic leading-none mb-4 text-white">
                Dockside <span className="text-[#3b82f6]">Order</span>
              </h1>
              <p className="font-header text-[#3b82f6] text-2xl tracking-[0.3em] uppercase italic">
                “Loyalty. Honour. Hustle.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INTELLIGENCE CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* STATS COLUMN */}
          <div className="space-y-6">
            <div className="p-8 bg-[#111827]/40 border border-white/5">
              <h3 className="font-header text-white uppercase mb-6 border-b border-white/5 pb-4 tracking-tighter italic">Dossier: DS-COLLECTIVE</h3>
              <div className="space-y-1">
                <StatRow label="Visual Identity" value="Anchors & Skull" />
                <StatRow label="Primary Asset" value="Brown Sugar" />
                <StatRow label="Operations" value="Import / Export" />
                <StatRow label="Territory" value="The Docks / South Side" />
              </div>
            </div>
            
            <div className="p-8 border-l-4 border-[#3b82f6] bg-blue-950/5 flex items-start gap-4">
              <ShieldAlert className="text-[#3b82f6] shrink-0" size={20} />
              <div>
                <p className="font-typewriter text-[#3b82f6] uppercase text-xs font-bold mb-2">Notice: Civilian Presence High</p>
                <p className="text-zinc-500 text-sm italic">
                  "Deeply embedded in the community. Information is impossible to extract from the locals."
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-header text-4xl uppercase mb-6 text-white italic">The Brotherhood</h2>
              <div className="space-y-6 font-typewriter text-zinc-400 text-lg leading-relaxed">
                <p>
                  While the suits uptown play with digital numbers, the Dockside Order controls the physical reality of Stonebridge. If it comes into the city by sea, road, or rail, they have seen it, taxed it, or stolen it.
                </p>
                <p>
                  They are the backbone of the city's working class—smuggling contraband like <span className="text-[#3b82f6] font-bold">Brown Sugar</span> under the noses of the SMC, while maintaining a strict code of silence that the police have failed to break for decades.
                </p>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<Anchor className="text-[#3b82f6]" />} 
                title="Maritime Grit" 
                desc="Utilizing the abandoned shipyards and river tunnels for untraceable movement."
              />
              <FeatureCard 
                icon={<Users className="text-[#3b82f6]" />} 
                title="Street Honour" 
                desc="A faction built on handshake deals and familial loyalty. Betrayal is a death sentence."
              />
            </div>
          </div>

        </div>
      </main>

      <footer className="py-20 text-center opacity-30">
        <p className="font-ui text-[10px] tracking-widest uppercase text-blue-900">End of Dossier // SMC-SECURE-FILE-044</p>
      </footer>
    </div>
  );
};

const StatRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-white/5 group/row">
    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 group-hover/row:text-zinc-300 transition-colors">
      {label}
    </span>
    <span className="text-[11px] uppercase tracking-widest text-[#3b82f6] font-black text-right ml-4">
      {value}
    </span>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-6 bg-zinc-900/20 border border-white/5 group hover:border-[#3b82f6]/50 transition-colors">
    <div className="mb-4">{icon}</div>
    <h4 className="font-header text-xl uppercase mb-2 text-white">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Dockside;