import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#a37e2c]/20 px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img src="/logo.png" alt="SMC Logo" className="w-10 h-10 object-contain" />
          <span className="font-black tracking-tighter text-xl uppercase italic text-white">
            Stonebridge<span className="text-[#d97706]">RP</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
        <Link to="/" className="text-zinc-400 hover:text-sb-orange transition-colors">The City</Link>
        <Link to="/lore" className="text-zinc-400 hover:text-sb-orange transition-colors">Lore</Link>
        <Link to="/rules" className="text-zinc-400 hover:text-sb-orange transition-colors">Rules</Link>
      </div>

      <div className="flex gap-4">
        <button className="bg-[#d97706] hover:bg-[#b45309] text-white px-6 py-2 text-xs font-black uppercase transition-all shadow-[0_0_15px_rgba(217,119,6,0.3)]">
          Join Now
        </button>
      </div>
    </nav>
  );
};

// CRITICAL: This line must be here!
export default Navbar;