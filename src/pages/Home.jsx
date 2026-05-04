import React from 'react';
import { Train, ChevronRight } from 'lucide-react'; // Added ChevronRight here
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-sb-dark text-zinc-100 min-h-screen font-ui selection:bg-sb-orange bg-carbon-pattern">
      <Navbar />

      {/* HERO SECTION */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden border-b-4 border-sb-gold/20">
        <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center">
          <img src="/logo2.png" alt="" className="w-full h-full object-contain scale-110 grayscale" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-sb-dark/40 via-transparent to-sb-dark" />

        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="font-header text-[55px] md:text-[110px] leading-[0.9] uppercase tracking-tight text-white mb-4">
            STONE<span className="text-sb-orange drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">BRIDGE</span>
          </h1>
          
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-[1px] w-16 bg-sb-gold/40" />
            <p className="font-ui text-xs md:text-sm font-bold tracking-ultra-widest text-sb-gold uppercase">
              UK Themed // Faction Centric
            </p>
            <div className="h-[1px] w-16 bg-sb-gold/40" />
          </div>

          <button className="group relative font-header bg-gradient-to-b from-sb-orange to-sb-orange-dark text-white px-12 py-5 text-2xl uppercase italic transition-all hover:brightness-110 border-b-4 border-black/40 active:border-0 active:translate-y-1 shadow-glow">
             <span className="relative z-10">Initialize Session</span>
          </button>
        </div>
      </header>

      {/* LORE SECTION */}
      <section id="lore" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
             <h2 className="font-header text-5xl md:text-7xl uppercase leading-none italic">
               A City <br /> <span className="text-sb-orange">Reborn.</span>
             </h2>
             <p className="font-typewriter text-xl text-zinc-400 leading-relaxed">
               "The billion-pound promise of the 2000s turned Stonebridge into a blueprint for the future. Glass towers for the elite, high-speed connectivity for 'The Circuit,' and a skyline that never sleeps."
             </p>
             <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center gap-4 text-sb-gold font-ui text-xs uppercase tracking-widest">
                   <Train size={18} />
                   <span>Transit Note: Underground Expansion [Line 4] remains under SMC structural review.</span>
                </div>
                <p className="text-zinc-500 text-sm italic font-medium">
                  "Regeneration didn't erase the city's history; it just built over it."
                </p>
             </div>
          </div>

          <div className="grid gap-4">
             <ObjectiveCard 
               title="The Financial Hub" 
               status="Operational" 
               desc="A Special Economic Zone designed for global trade. Luxury riverside living for those who drive the city's heartbeat."
             />
             <ObjectiveCard 
               title="The Circuit" 
               status="Accelerated" 
               desc="A digital fortress. High-speed tech infrastructure that now serves as the battleground for the next generation of crime."
             />
             <ObjectiveCard 
               title="Public Order" 
               status="Contained" 
               desc="The Stonebridge Metropolitan Constabulary (SMC) maintains a 'Zero Tolerance' mandate to protect the city's regeneration investments."
             />
          </div>
        </div>
      </section>

      {/* FACTIONS SECTION - Matching your screenshot */}
      <section id="factions" className="py-32 bg-sb-orange text-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="font-header text-center text-6xl md:text-8xl uppercase mb-20 tracking-tighter italic drop-shadow-sm">
            Power <span className="text-white">Players</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <FactionItem 
              name="Harrow Syndicate" 
              role="Old Money // Influence"
              slug="harrow"
              desc="Generational wealth meets ruthless corporate influence. The architects behind the glass walls." 
            />
            <FactionItem 
              name="Dockside Order" 
              role="The Roots // Smuggling"
              slug="dockside"
              desc="Deeply rooted in the city's industrial past. Loyalty is the only currency that matters in the Docks." 
            />
            <FactionItem 
              name="Circuit Runners" 
              role="New Money // Cybercrime"
              slug="circuit-runners"
              desc="Digital ghosts living in the cracks of the city's tech hub. If it's connected, they own it." 
            />
          </div>
        </div>
      </section>

      <footer className="py-20 text-center opacity-50">
        <img src="/logo.png" className="h-10 mx-auto mb-6 grayscale" alt="" />
        <p className="font-ui text-[10px] tracking-ultra-widest uppercase text-sb-gold">
          Stonebridge RP - Copyright 2026
        </p>
      </footer>
    </div>
  );
};

const ObjectiveCard = ({ title, status, desc }) => (
  <div className="p-8 bg-sb-grey/50 border border-white/5 hover:border-sb-gold/30 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-header text-xl uppercase tracking-tighter text-white group-hover:text-sb-orange transition-colors">{title}</h3>
      <span className="font-ui text-[9px] px-2 py-1 bg-sb-gold/10 text-sb-gold border border-sb-gold/20 uppercase tracking-widest">{status}</span>
    </div>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FactionItem = ({ name, role, desc, slug }) => (
  <Link to={`/factions/${slug}`} className="block border-t-4 border-black pt-8 group hover:bg-black/5 transition-all">
    <h4 className="font-header text-3xl uppercase italic mb-1 group-hover:text-white transition-colors">
      {name}
    </h4>
    <p className="font-ui text-[10px] font-black uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
      {role}
    </p>
    <p className="font-medium text-sm leading-relaxed text-black/80 group-hover:text-black">
      {desc}
    </p>
    <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
      <span>View Intelligence File</span>
      <ChevronRight size={12} />
    </div>
  </Link>
);

export default Home;