import React from 'react';
import { History, Target, Zap, Shield, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';

const Lore = () => {
  return (
    <div className="bg-sb-dark text-zinc-100 min-h-screen font-ui selection:bg-sb-orange bg-carbon-pattern">
      <Navbar />

      <main className="max-w-5xl mx-auto py-32 px-6">
        {/* HEADER */}
        <div className="border-l-4 border-sb-orange pl-8 mb-20">
          <h1 className="font-header text-6xl md:text-8xl uppercase italic leading-none mb-4">
            The <span className="text-sb-orange">Archive</span>
          </h1>
          <p className="font-typewriter text-xl text-zinc-500 tracking-tight">
            Stonebridge Metropolitan Sector // Historical Record 1882-2026
          </p>
        </div>

        {/* ORIGINS SECTION */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <History className="text-sb-gold" size={32} />
            <h2 className="font-header text-4xl uppercase tracking-tighter">Origins: The Industrial Jewel</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-6 font-typewriter text-lg text-zinc-400">
              <p>
                Stonebridge began as a Victorian industrial powerhouse—coal, steel, shipbuilding, and textile mills lined the riverbanks. The city was founded by <span className="text-white font-bold italic">Lord Edwin Harrow</span>, a ruthless industrialist who built an empire on cheap labour and political manipulation.
              </p>
              <p className="border-y border-white/10 py-6 text-sb-gold italic text-2xl text-center">
                “Strength Through Industry”
              </p>
              <p>
                By the 1950s, Stonebridge was booming. Immigrants from across the Commonwealth settled here, creating a diverse, working‑class culture with a proud identity and a sharp tongue.
              </p>
            </div>
            <div className="bg-sb-grey/30 border border-white/5 p-6 rounded-sm">
              <span className="text-[10px] text-sb-gold font-bold uppercase tracking-widest block mb-4">SMC Intelligence Note</span>
              <p className="text-xs text-zinc-500 leading-relaxed italic">
                Descendants of the Harrow family still hold significant land rights in the North District.
              </p>
            </div>
          </div>
        </section>

        {/* THE DECLINE */}
        <section className="mb-24 p-12 bg-zinc-900/20 border-x border-sb-gold/20">
          <div className="flex items-center gap-4 mb-8">
            <Target className="text-red-700" size={32} />
            <h2 className="font-header text-4xl uppercase tracking-tighter text-red-700">The Rustbelt Era (1960-1990)</h2>
          </div>
          <div className="columns-1 md:columns-2 gap-12 font-typewriter text-zinc-500 space-y-6">
            <p>As industry collapsed across the UK, Stonebridge was hit brutally hard. Factories closed, unemployment soared, and crime syndicates filled the power vacuum left by the decaying local council.</p>
            <div className="bg-black/40 p-4 border-l-2 border-red-900">
               <h4 className="font-header text-white mb-2">The Rise of the Syndicate</h4>
               <p className="text-sm">The Harrow family transitioned from industrial titans to construction moguls, using union muscle to control the city's redevelopment.</p>
            </div>
          </div>
        </section>

        {/* MODERN DAY */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <Zap className="text-sb-orange" size={32} />
            <h2 className="font-header text-4xl uppercase tracking-tighter italic">Rebirth... On Paper</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 font-typewriter text-zinc-400">
              <p>The UK government declared Stonebridge a <span className="text-white">Special Economic Regeneration Zone</span>. Billions flowed into luxury riverside apartments and the tech hub known as <span className="text-sb-orange underline underline-offset-4">"The Circuit"</span>.</p>
              <ul className="space-y-3 text-sm italic">
                <li className="flex gap-2 text-red-800"><AlertTriangle size={14}/> Tram system connectivity remains erratic.</li>
                <li className="flex gap-2 text-zinc-600"><AlertTriangle size={14}/> Gentrification riots reported in Sector 4.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-header text-sb-gold uppercase">Current Power Balance</h3>
              {[
                { name: "SMC Force", status: "Split / Unstable" },
                { name: "Harrow Syndicate", status: "Dominant" },
                { name: "Dockside Collective", status: "Entrenched" },
                { name: "The Circuit Runners", status: "Emergent" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-white/5 pb-2 font-ui text-[10px] uppercase tracking-widest">
                  <span>{item.name}</span>
                  <span className="text-sb-orange">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SMC DIVISIONS TABLE */}
        <section className="mt-32 pt-20 border-t border-white/10">
          <div className="flex items-center gap-4 mb-12">
            <Shield className="text-sb-gold" size={32} />
            <h2 className="font-header text-4xl uppercase tracking-tighter">SMC Command Structure</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-header text-sb-orange text-lg">Field Ops</h4>
              <p className="font-ui text-[10px] text-zinc-500 uppercase">Constable // Sergeant</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-header text-sb-orange text-lg">Management</h4>
              <p className="font-ui text-[10px] text-zinc-500 uppercase">Inspector // Chief Inspector</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-header text-sb-orange text-lg">High Command</h4>
              <p className="font-ui text-[10px] text-zinc-500 uppercase">Superintendent // Commissioner</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center opacity-30">
        <p className="font-ui text-[10px] tracking-widest uppercase">Archive Concluded // SMC-SECURE</p>
      </footer>
    </div>
  );
};

export default Lore;