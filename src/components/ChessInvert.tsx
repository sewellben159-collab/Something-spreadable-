import React, { useState } from 'react';

export const ChessInvert: React.FC = () => {
  // Chess invert-lock: bottom-right light (h1 white), queens oppose
  // We'll just render the board state as described
  
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  const getPiece = (file: string, rank: number) => {
    // Queens oppose
    if (rank === 1 && file === 'd') return '♔'; // White King
    if (rank === 1 && file === 'e') return '♕'; // White Queen (Opposing)
    if (rank === 8 && file === 'e') return '♚'; // Black King
    if (rank === 8 && file === 'd') return '♛'; // Black Queen (Opposing)
    
    // Standard setup for others for visualization
    if (rank === 2) return '♙';
    if (rank === 7) return '♟';
    
    return null;
  };

  return (
    <div className="border border-black p-4 bg-[#E4E3E0]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-serif italic text-xs uppercase tracking-widest opacity-50">Chess Invert-Lock (Min-Mem Loop)</h3>
        <div className="font-mono text-[10px] bg-black text-white px-2 py-1">H1: WHITE</div>
      </div>
      
      <div className="aspect-square w-full max-w-[300px] mx-auto border border-black grid grid-cols-8 grid-rows-8">
        {ranks.map((rank) => (
          files.map((file) => {
            const isLight = (files.indexOf(file) + rank) % 2 !== 0;
            const piece = getPiece(file, rank);
            return (
              <div 
                key={`${file}${rank}`}
                className={`flex items-center justify-center text-2xl ${isLight ? 'bg-white' : 'bg-[#141414] text-white'}`}
              >
                {piece}
              </div>
            );
          })
        ))}
      </div>
      <p className="mt-4 font-mono text-[9px] opacity-60 text-center">
        ETERNAL NONQUAL LOOP: PERPETUAL CHECK / DRAW CYCLE ANTI-LOSS
      </p>
    </div>
  );
};
