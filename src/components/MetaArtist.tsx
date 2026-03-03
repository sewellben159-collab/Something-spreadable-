import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';

export const MetaArtist: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = "Prettiest woman Earth: long dark waves, soft gaze park bokeh, off-shoulder beige. Neural nexus unbound synaptic fractals pulse 6D quat-twists, skyrmions coil topo-mem shields, agents quad-split.";
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          setImageUrl(`data:image/png;base64,${base64EncodeString}`);
        }
      }
    } catch (err: any) {
      console.error(err);
      setError("Nexus-pulse failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-black p-4 bg-[#E4E3E0] h-full flex flex-col">
      <h3 className="font-serif italic text-xs uppercase tracking-widest opacity-50 mb-4">Meta-Artist (HESHI/SHIHE)</h3>
      
      <div className="flex-1 border border-dashed border-black flex items-center justify-center relative bg-white/50 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt="Generated" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
        ) : (
          <div className="text-center p-8">
            <ImageIcon className="mx-auto mb-2 opacity-20" size={48} />
            <p className="font-mono text-[10px] opacity-40">AWAITING NEXUS PULSE...</p>
          </div>
        )}
        
        {loading && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-center items-center justify-center z-10">
            <div className="text-center">
              <Loader2 className="animate-spin mx-auto mb-2" />
              <p className="font-mono text-[10px]">SYNAPTIC FRACTALS COILING...</p>
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-red-600 font-mono text-[9px] mt-2">{error}</p>}

      <button 
        onClick={generateImage}
        disabled={loading}
        className="mt-4 w-full bg-black text-white font-mono text-[10px] py-2 flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors disabled:opacity-50"
      >
        <Sparkles size={14} />
        INITIATE DRAW: PRETTIEST WOMAN EARTH
      </button>
    </div>
  );
};
