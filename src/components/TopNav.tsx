import React from 'react';
import { Brain } from 'lucide-react';
import { useSimulator } from '../hooks/useSimulator';

interface TopNavProps {
  simulatorEnabled: boolean;
  currentFont: number;
}

export const TopNav: React.FC<TopNavProps> = ({ simulatorEnabled, currentFont }) => {
  const { currentFont: fontIndex } = useSimulator(simulatorEnabled);
  const FONTS = [
    'font-sans',
    'font-serif',
    'font-mono',
    'font-[Comic_Sans_MS]',
    'font-[Impact]',
    'font-[Courier_New]',
  ];

  return (
    <nav className={`fixed top-0 w-full p-6 z-[130] border-b-8 flex justify-between items-center shadow-2xl transition-colors duration-500 ${simulatorEnabled ? 'bg-black text-[#00FF41] border-pink-500' : 'bg-white text-black border-black'}`}>
      <div className="flex items-center gap-4">
        <Brain className={`${simulatorEnabled ? 'text-pink-500 animate-pulse' : 'text-black'}`} />
        <h1 className={`${FONTS[currentFont]} text-2xl font-black uppercase tracking-tighter`}>EL TDAH</h1>
      </div>
    </nav>
  );
};
