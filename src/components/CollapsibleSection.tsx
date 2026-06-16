import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CollapsibleSectionProps {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  simulatorEnabled: boolean;
  bannerClass: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  id,
  title,
  isOpen,
  onToggle,
  children,
  simulatorEnabled,
  bannerClass
}) => {
  return (
    <section id={id} className="space-y-4 w-full">
      <h2 
        onClick={onToggle}
        className={`text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter cursor-pointer select-none transition-all flex items-center justify-between gap-4 p-4 border-4 ${
          simulatorEnabled 
            ? `${bannerClass} text-white border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:rotate-0` 
            : 'bg-white text-black border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5'
        }`}
      >
        <span>{title}</span>
        <span className="text-xs sm:text-sm font-mono bg-white text-black border-2 border-black px-2 py-1 font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
          {isOpen ? 'Cerrar [-]' : 'Desplegar [+]'}
        </span>
      </h2>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
            animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
            transition={{ duration: 0.3 }}
            className="pt-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
