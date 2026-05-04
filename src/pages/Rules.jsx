import React, { useState } from 'react';
import { ShieldAlert, Scale, Zap, ChevronRight, FileSearch, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Rules = () => {
  const [activeTab, setActiveTab] = useState('conduct');

  const categories = [
    { id: 'conduct', label: 'Code of Conduct', icon: <Scale size={18}/> },
    { id: 'deathmatch', label: 'RDM & VDM', icon: <Zap size={18}/> },
    { id: 'illegal', label: 'Criminal Protocols', icon: <ShieldAlert size={18}/> },
    { id: 'meta', label: 'Meta & Power', icon: <AlertCircle size={18}/> },
  ];

  return (
    <div className="bg-[#0a0a0c] text-zinc-100 min-h-screen font-sans selection:bg-[#d97706]">
      <Navbar />
      {/* SMC TOP BAR */}
      <div className="bg-black border-b-2 border-[#d97706] p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/logo.png" alt="SMC Logo" className="w-12 h-12" />
            </Link>
            <div>
              <h1 className="text-white font-black uppercase italic text-2xl leading-none tracking-tighter">
                SMC <span className="text-[#d97706]">Database</span>
              </h1>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.2em]">
                  Steelbourne Metropolitan Constabulary // Secure Terminal
                </p>
              </div>
            </div>
          </div>
          <Link to="/" className="border border-zinc-800 hover:border-[#d97706] text-zinc-500 hover:text-[#d97706] px-4 py-1 text-[10px] font-black uppercase transition-all">
            Terminate Session
          </Link>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-6">
        
        {/* HEADER */}
        <div className="mb-12 border-l-4 border-[#a37e2c] pl-6 py-2">
          <h2 className="text-4xl font-black uppercase italic mb-2 tracking-tighter">Penal Code & Conduct</h2>
          <p className="text-zinc-500 max-w-2xl text-sm leading-relaxed">
            Steelbourne thrives on solid roleplay. By entering the Special Economic Regeneration Zone, 
            you agree to the following statutes. Failure to comply will result in citizenship revocation.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* SIDEBAR NAVIGATION */}
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center justify-between px-5 py-4 font-black uppercase italic tracking-tighter transition-all group ${
                  activeTab === cat.id 
                  ? 'bg-[#d97706] text-black translate-x-2' 
                  : 'bg-zinc-900/50 text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  {cat.icon}
                  {cat.label}
                </div>
                {activeTab === cat.id && <ChevronRight size={16} />}
              </button>
            ))}

            <div className="mt-8 p-4 bg-zinc-900/20 border border-white/5 rounded-sm">
              <div className="flex items-center gap-2 text-[#a37e2c] mb-2">
                <FileSearch size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Legal Notice</span>
              </div>
              <p className="text-[10px] text-zinc-600 leading-tight italic">
                Steelbourne RP is a free service. We reserve the right to ban any individual not helping the community move forward.
              </p>
            </div>
          </div>

          {/* RULES CONTENT */}
          <div className="lg:col-span-3 bg-zinc-900/30 border border-white/5 p-8 md:p-12 relative min-h-[600px]">
            <div className="relative z-10">

              {/* CATEGORY: CONDUCT */}
              {activeTab === 'conduct' && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <header className="mb-10">
                    <span className="text-[#d97706] font-bold text-xs uppercase tracking-widest">Section 01</span>
                    <h3 className="text-3xl font-black uppercase italic mt-1">Solid Roleplay Standards</h3>
                  </header>
                  <div className="space-y-8">
                    <RuleItem title="RP over Gunplay" desc="Your weapon should be the last option to escape a scenario. Habital violence (Robbing, Killing, Shooting) with little to no narrative build-up will face disciplinary action." />
                    <RuleItem title="Age Requirement" desc="Character age must be a minimum of 18. Underaged players or roleplay involving minors/intimate relationships is strictly prohibited." />
                    <RuleItem title="Out of Character (OOC)" desc="Remain in character at all times. Do not use OOC chat to attack others, taunt, or 'RP Check.' Terms like 'City Official' or 'Architect' are forbidden." />
                    <RuleItem title="Restricted Roleplay" desc="No slurs (racism, homophobia, gender-offensive language). No Sexual RP of any kind. No roleplay mimicking mental health issues, self-harm, or trauma." />
                  </div>
                </div>
              )}

              {/* CATEGORY: DEATHMATCH */}
              {activeTab === 'deathmatch' && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <header className="mb-10">
                    <span className="text-red-600 font-bold text-xs uppercase tracking-widest">Section 02</span>
                    <h3 className="text-3xl font-black uppercase italic mt-1 text-red-500">Violent Engagement</h3>
                  </header>
                  <div className="space-y-8">
                    <RuleItem title="Random Deathmatch (RDM)" desc="Killing a player with little to no interaction is prohibited. Initiation requires shout voice range and allowing the other person to respond." />
                    <RuleItem title="Vehicle Deathmatch (VDM)" desc="Driving over someone with intent to do violence is prohibited. Exceptions: Fleeing a dangerous scene where an attacker blocks your path." />
                    <RuleItem title="Combat Logging" desc="Exiting the server to avoid legal charges, robbery, or during an active scene is a ban-level offense." />
                    <RuleItem title="New Life Rule (NLR)" desc="If you are incapacitated, you forget the events leading to your 'death.' Do not return to the scene for 15 minutes." />
                  </div>
                </div>
              )}

              {/* CATEGORY: ILLEGAL */}
              {activeTab === 'illegal' && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <header className="mb-10">
                    <span className="text-[#d97706] font-bold text-xs uppercase tracking-widest">Section 03</span>
                    <h3 className="text-3xl font-black uppercase italic mt-1">Criminal Protocols</h3>
                  </header>
                  <div className="space-y-8">
                    <RuleItem title="Group Limitations" desc="Criminal activity is limited to no more than 6 in a group (including lookouts). Exception: Gang Wars or defending a legal activity." />
                    <RuleItem title="SMC Interactions" desc="Do not cop-bait or disrupt crime scenes. We require players to treat incarceration realistically and avoid it at all costs." />
                    <RuleItem title="Scamming Cap" desc="Scamming another player or group of an amount valued at or above $50,000 is not allowed. This includes raffles or lotteries." />
                    <RuleItem title="Blacklisted Assets" desc="Civilian use of LEO/SMC/Medical clothing or vehicles is prohibited. Stealing AI aircraft or entering the Military Base is forbidden." />
                  </div>
                </div>
              )}

              {/* CATEGORY: META */}
              {activeTab === 'meta' && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <header className="mb-10">
                    <span className="text-[#a37e2c] font-bold text-xs uppercase tracking-widest">Section 04</span>
                    <h3 className="text-3xl font-black uppercase italic mt-1 text-[#a37e2c]">Meta & System Integrity</h3>
                  </header>
                  <div className="space-y-8">
                    <RuleItem title="Powergaming" desc="Forcing RP on others without giving them an option to dictate their fate (e.g. taking comms without handcuffs or theft of non-monetary items)." />
                    <RuleItem title="Metagaming" desc="Using OOC info for IC advantage. This includes Stream Sniping or transferring items between your own characters." />
                    <RuleItem title="Griefing" desc="Constant stalking, harassment, or camping job sites to rob workers is prohibited. This includes revenge reporting." />
                    <RuleItem title="Exploiting" desc="Duplicating items, AFK grinding, or using mods for an advantage will result in a no-appeal permanent ban." />
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center px-6">
        <p className="text-zinc-600 text-[9px] uppercase tracking-[0.5em]">
          Steelbourne Metropolitan Constabulary // Code of Conduct Revision 2026.04
        </p>
      </footer>
    </div>
  );
};

const RuleItem = ({ title, desc }) => (
  <div className="group space-y-2">
    <div className="flex items-center gap-3">
      <div className="w-1 h-1 bg-[#d97706]"></div>
      <h4 className="font-black uppercase tracking-tighter text-lg text-zinc-100 group-hover:text-[#d97706] transition-colors">{title}</h4>
    </div>
    <p className="text-zinc-500 text-sm pl-4 border-l border-zinc-800 leading-relaxed">{desc}</p>
  </div>
);

export default Rules;