import React from 'react';
import { Cpu, Terminal, Laptop, ChevronLeft, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CircuitRunners = () => {
  return (
    <div className="bg-[#020617] text-cyan-400 min-h-screen font-ui selection:bg-purple-600">
      <Navbar />

      {/* FACTION HEADER */}
      <div className="relative h-[60vh] flex items-end bg-black">
        {/* Background Overlay - Cyberpunk Gradients */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#020617] via-purple-950/20 to-transparent" />
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-30" />
        
        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20">
          <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors mb-8 uppercase text-[10px] font-bold tracking-widest">
            <ChevronLeft size={14} /> Back to Sector Map
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img 
              src="/runnerslogo.png" 
              alt="Circuit Runners" 
              className="w-48 h-48 object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]" 
            />
            <div className="text-center md:text-left">
              <h1 className="font-header text-6xl md:text-8xl uppercase italic leading-none mb-4 text-white">
                Circuit <span className="text-purple-500">Runners</span>
              </h1>
              <p className="font-header text-cyan-400 text-2xl tracking-[0.3em] uppercase italic">
                “Hack. Scam. Profit.”
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
            <div className="p-8 bg-black/60 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <h3 className="font-header text-white uppercase mb-6 border-b border-cyan-500/20 pb-4 tracking-tighter italic">SYS.ACCESS: GRANTED</h3>
              <div className="space-y-1">
                <StatRow label="Visual Identity" value="Circuit Board Skyline" />
                <StatRow label="Primary Asset" value="Snow" />
                <StatRow label="Operations" value="Digital Theft" />
                <StatRow label="Territory" value="The Circuit / Tech Hub" />
              </div>
            </div>
            
            <div className="p-8 border-l-4 border-purple-600 bg-purple-950/10 flex items-start gap-4">
              <Activity className="text-purple-500 shrink-0" size={20} />
              <div>
                <p className="font-typewriter text-purple-400 uppercase text-xs font-bold mb-2">Network Status: Compromised</p>
                <p className="text-zinc-500 text-sm italic">
                  "If it has an IP address, the Runners have a backdoor. Their footprint is everywhere, but they are nowhere."
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-header text-4xl uppercase mb-6 text-white italic">Neon Chaos</h2>
              <div className="space-y-6 font-typewriter text-zinc-400 text-lg leading-relaxed">
                <p>
                  The Circuit Runners are the ghosts in the machine of the new Stonebridge. While the old families fight over territory, the Runners are siphoning millions through crypto-scams and high-stakes digital heists.
                </p>
                <p>
                  They dominate the underworld of "The Circuit," trading in encrypted data and their signature high-purity synthetic, <span className="text-cyan-400 font-bold">Snow</span>. In a city built on regeneration, they are the glitch that the SMC can't patch.
                </p>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<Terminal className="text-purple-500" />} 
                title="Ghost Protocol" 
                desc="Untraceable digital presence utilizing decentralized nodes across the city."
              />
              <FeatureCard 
                icon={<Laptop className="text-cyan-500" />} 
                title="Crypto-Syndicate" 
                desc="Managing the city's black market through secure, blockchain-based exchanges."
              />
            </div>
          </div>

        </div>
      </main>

      <footer className="py-20 text-center opacity-30">
        <p className="font-ui text-[10px] tracking-widest uppercase text-purple-400">Connection Terminated // SMC-VIRTUAL-SEC</p>
      </footer>
    </div>
  );
};

const StatRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-cyan-950 group/row">
    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 group-hover/row:text-cyan-400/50 transition-colors">
      {label}
    </span>
    <span className="text-[11px] uppercase tracking-widest text-cyan-400 font-black text-right ml-4">
      {value}
    </span>
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-6 bg-black/40 border border-white/5 group hover:border-cyan-500/50 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
    <div className="mb-4">{icon}</div>
    <h4 className="font-header text-xl uppercase mb-2 text-white">{title}</h4>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default CircuitRunners;