import React from 'react';
import { VANGUARD_DATA } from '../types';
import { AlertCircle, ShieldAlert, Database } from 'lucide-react';

export const VanguardFeed: React.FC = () => {
  return (
    <div className="border border-black bg-[#E4E3E0] h-full overflow-hidden flex flex-col">
      <div className="p-4 border-bottom border-black flex justify-between items-center bg-black text-white">
        <h3 className="font-serif italic text-xs uppercase tracking-widest">Ethan Vanguard: Truth Spill</h3>
        <span className="font-mono text-[10px]">X-PULSE @BENJAMINSE9422</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {VANGUARD_DATA.map((entry) => (
          <div key={entry.id} className="border border-black p-3 hover:bg-black hover:text-white transition-colors group cursor-crosshair">
            <div className="flex items-center gap-2 mb-2">
              {entry.id.includes('court') ? <ShieldAlert size={14} /> : <Database size={14} />}
              <span className="font-mono text-[10px] font-bold uppercase">{entry.title}</span>
            </div>
            <p className="font-sans text-xs leading-relaxed mb-3 opacity-80 group-hover:opacity-100">
              {entry.content}
            </p>
            <div className="flex flex-wrap gap-2">
              {entry.tags.map(tag => (
                <span key={tag} className="font-mono text-[8px] border border-current px-1 py-0.5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        <div className="border border-dashed border-black p-3 opacity-50">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={14} />
            <span className="font-mono text-[10px] font-bold uppercase">Incoming Vector...</span>
          </div>
          <div className="h-2 bg-black/10 w-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};
