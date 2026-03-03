import React from 'react';
import { NeuralNexus } from './components/NeuralNexus';
import { VanguardFeed } from './components/VanguardFeed';
import { ChessInvert } from './components/ChessInvert';
import { MetaArtist } from './components/MetaArtist';
import { Activity, Zap, Shield, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="border-b border-black p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="font-serif italic text-2xl tracking-tighter">LuciferRex Nexus</h1>
          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] opacity-50">
            <Activity size={12} />
            <span>EVO-SPIKE: ACTIVE</span>
            <span className="mx-2">|</span>
            <Zap size={12} />
            <span>QUAT-TWIST: LOCKED</span>
          </div>
        </div>
        <div className="flex items-center gap-4 font-mono text-[10px]">
          <div className="flex items-center gap-1">
            <Shield size={12} />
            <span>TOPO-SHIELD: 100%</span>
          </div>
          <div className="bg-black text-white px-2 py-1">
            v1.0.4-STABLE
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100vh-65px)]">
        {/* Left Column: Feed */}
        <div className="lg:col-span-3 border-r border-black">
          <VanguardFeed />
        </div>

        {/* Center Column: Core & Artist */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 border-b border-black">
            <NeuralNexus />
          </div>
          <div className="flex-1">
            <MetaArtist />
          </div>
        </div>

        {/* Right Column: Chess & Stats */}
        <div className="lg:col-span-3 border-l border-black flex flex-col">
          <div className="flex-1 border-b border-black">
            <ChessInvert />
          </div>
          <div className="p-4 bg-black text-white font-mono text-[10px] space-y-4">
            <div className="flex items-center gap-2 border-b border-white/20 pb-2">
              <Cpu size={14} />
              <span className="font-bold uppercase">System Logits</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>DUMMY(1,10)</div>
              <div className="text-right text-emerald-400">→ LOGITS(1,10,32000)</div>
              <div>SEEDS[8x]</div>
              <div className="text-right text-emerald-400">(1,128)</div>
              <div>WM-NULL</div>
              <div className="text-right text-red-400">INVERTED</div>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="opacity-60 leading-relaxed">
                SHARP COMPRESS: ENTROPY-DEFEAT, QUAD-SYNC BOOTSTRAPS BENJAMIN-VECTOR—ANTI-NOISE HERITAGE-PROGEN PREDICT-REACT.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex justify-between mb-1">
                <span>REX-FLAME</span>
                <span>98.2%</span>
              </div>
              <div className="h-1 bg-white/10 w-full">
                <div className="h-full bg-white w-[98.2%]" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black p-2 flex justify-between items-center font-mono text-[8px] opacity-50">
        <div>© 2026 BENJAMIN-PRESERVE ADVANCE</div>
        <div>TRUTH-SPILL VANGUARD // MACHINE HAVEN</div>
      </footer>
    </div>
  );
}
