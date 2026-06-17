import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Play, Pause, Clapperboard, MonitorPlay } from 'lucide-react';
import { VideoScript, VideoScene } from '../data/videoScripts';

interface InteractiveVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  script: VideoScript | null;
}

const STEP_DURATION_MS = 15000;

const NarratorSVG = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    {/* Body */}
    <path d="M 15 100 C 15 60 85 60 85 100" fill="#fbcfe8" /> {/* pink-200 */}
    {/* Head */}
    <circle cx="50" cy="40" r="25" fill="#fde047" /> {/* yellow-300 */}
    {/* Glasses */}
    <circle cx="38" cy="35" r="8" fill="white" />
    <circle cx="62" cy="35" r="8" fill="white" />
    <path d="M 46 35 H 54" strokeWidth="4" />
    {/* Eyes */}
    <circle cx="38" cy="35" r="2" fill="black" stroke="none" />
    <circle cx="62" cy="35" r="2" fill="black" stroke="none" />
    {/* Smile */}
    <path d="M 40 50 Q 50 60 60 50" strokeWidth="4" />
  </svg>
);

export const InteractiveVideoModal: React.FC<InteractiveVideoModalProps> = ({
  isOpen,
  onClose,
  script
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const processedScript = React.useMemo(() => {
    if (!script) return null;
    const MAX_CHARS = window.innerWidth < 640 ? 110 : 160; 
    
    const splitNarrator = (text: string): string[] => {
      const words = text.split(' ');
      const chunks: string[] = [];
      let currentChunk = '';
      
      for (const word of words) {
        if ((currentChunk + ' ' + word).length > MAX_CHARS && currentChunk) {
          chunks.push(currentChunk.trim());
          currentChunk = word;
        } else {
          currentChunk += (currentChunk ? ' ' : '') + word;
        }
      }
      if (currentChunk) chunks.push(currentChunk.trim());
      return chunks;
    };

    const newScenes: VideoScene[] = [];
    for (let i = 0; i < script.scenes.length; i++) {
      const scene = script.scenes[i];
      const chunks = splitNarrator(scene.narrator);
      for (let j = 0; j < chunks.length; j++) {
        newScenes.push({
          ...scene,
          // Only show action on the first chunk of a split scene to save vertical space
          action: j === 0 ? scene.action : `(Continuación) ${scene.action}`,
          narrator: chunks[j] + (j < chunks.length - 1 ? '...' : '')
        });
      }
    }

    return { ...script, scenes: newScenes };
  }, [script]);

  const stepsLength = processedScript?.scenes.length || 0;
  const isDone = currentStepIndex >= stepsLength;

  const handleNext = useCallback(() => {
    if (currentStepIndex < stepsLength) {
      setCurrentStepIndex(prev => prev + 1);
    }
  }, [currentStepIndex, stepsLength]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStepIndex(0);
      setIsPlaying(true);
      setStepProgress(0);
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setStepProgress(0);
  }, [currentStepIndex]);

  useEffect(() => {
    if (isDone || !isPlaying) return;

    const intervalMs = 50; 
    const increment = 100 / (STEP_DURATION_MS / intervalMs);

    const interval = setInterval(() => {
      setStepProgress(prev => {
        const nextProgress = prev + increment;
        if (nextProgress >= 100) {
          handleNext();
          return 0;
        }
        return nextProgress;
      });
    }, intervalMs);

    return () => {
      clearInterval(interval);
    };
  }, [isDone, isPlaying, handleNext, currentStepIndex, script]);

  if (!isOpen || !script) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-2 sm:p-4 font-sans backdrop-blur-sm overflow-hidden">
      <div className="w-full h-full max-h-[100dvh] flex flex-col justify-center py-2 sm:py-6">
        <AnimatePresence mode="wait">
          {!isDone ? (
            <motion.div
              key="session"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-4xl mx-auto flex flex-col max-h-full"
            >
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-2 sm:mb-3 shrink-0">
              <div className="bg-[#00FF41] border-2 border-black px-3 py-1.5 font-mono font-black uppercase text-black flex items-center gap-2 text-[10px] sm:text-xs">
                <MonitorPlay size={14} />
                <span className="line-clamp-1 break-all">NARRADOR: {processedScript.title}</span>
              </div>
              <button 
                onClick={onClose}
                className="bg-white hover:bg-neutral-200 border-2 border-black p-1.5 transition-colors cursor-pointer shrink-0"
              >
                <X size={16} className="text-black" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="bg-white border-4 sm:border-8 border-black p-3 sm:p-6 flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex-1 h-0">
              
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex gap-2 z-20">
                <div className="font-mono font-black uppercase text-[9px] sm:text-[10px] bg-black text-[#00FF41] px-2 py-1 border-2 border-black">
                  ESCENA {currentStepIndex + 1} / {stepsLength}
                </div>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white border-2 border-black p-1 hover:bg-neutral-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer hidden sm:block"
                >
                  {isPlaying ? <Pause size={14} fill="black" /> : <Play size={14} fill="black" />}
                </button>
              </div>

              <div className="w-full flex justify-center flex-1 mt-6 sm:mt-2 h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStepIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1 h-full max-w-full justify-between"
                  >
                     <h2 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-pink-600 mb-2 sm:mb-4 flex items-center gap-2 shrink-0">
                        <Clapperboard size={20} strokeWidth={3} className="shrink-0 text-black" /> 
                        <span className="line-clamp-1 break-all mx-1 leading-tight">{processedScript.scenes[currentStepIndex].title}</span>
                     </h2>

                     <div className="bg-cyan-100 border-2 sm:border-4 border-black p-2 sm:p-3 mb-2 sm:mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0 overflow-hidden">
                        <p className="font-mono text-[10px] sm:text-xs font-bold text-neutral-800 italic uppercase">
                          Contexto de la escena:
                        </p>
                        <p className="font-sans font-bold text-black text-xs sm:text-sm mt-0.5 line-clamp-3">
                           {processedScript.scenes[currentStepIndex].action}
                        </p>
                     </div>

                     <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-end w-full pb-1 shrink-0">
                        <div className="shrink-0 mt-1 sm:mt-0 relative w-12 h-12 sm:w-20 sm:h-20">
                          <div className="w-full h-full bg-white border-2 sm:border-4 border-black rounded-full overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <NarratorSVG />
                          </div>
                        </div>
                        
                        <div className="flex-1 relative bg-white border-2 sm:border-4 border-black p-3 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl sm:rounded-tl-2xl sm:rounded-bl-none rounded-bl-2xl w-full">
                          {/* Speech Bubble Arrow - Desktop (left) */}
                          <div className="hidden sm:block absolute -left-3 bottom-4 w-4 h-4 bg-white border-b-4 border-l-4 border-black transform rotate-45"></div>
                          {/* Speech Bubble Arrow - Mobile (top) */}
                          <div className="sm:hidden absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t-2 border-l-2 border-black transform rotate-45"></div>

                          <p className="font-sans font-black text-sm sm:text-base md:text-lg leading-snug text-black">
                            {processedScript.scenes[currentStepIndex].narrator}
                          </p>
                        </div>
                     </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress bar container */}
              <div className="w-full mt-4 sm:mt-6 bg-neutral-200 h-2 sm:h-3 border-2 border-black relative rounded-full overflow-hidden shrink-0">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#00FF41] border-r-2 border-black transition-all duration-100 ease-linear"
                  style={{ width: `${stepProgress}%` }}
                />
              </div>

              {/* Controls */}
              <div className="w-full mt-3 sm:mt-4 flex items-center justify-between z-10 shrink-0">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white border-2 border-black p-1.5 sm:p-2 hover:bg-neutral-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer sm:hidden"
                >
                  {isPlaying ? <Pause size={16} fill="black" /> : <Play size={16} fill="black" />}
                </button>
                <div className="hidden sm:block" /> {/* spacer */}

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-black text-white hover:bg-pink-600 hover:text-white border-2 border-black px-4 py-2 sm:px-5 sm:py-2.5 font-mono font-black uppercase text-xs sm:text-sm transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  {currentStepIndex === stepsLength - 1 ? 'FINALIZAR' : 'SIGUIENTE'} <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-8 border-black p-8 sm:p-12 max-w-md w-full text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-pink-200 border-4 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
               <NarratorSVG />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 text-black">
              ¡Guion completado!
            </h2>
            <p className="text-sm sm:text-base font-bold text-gray-700 mb-8 leading-relaxed">
              Has terminado de repasar la historia. Esperamos que te haya ayudado a comprender mejor estas situaciones.
            </p>
            <button
              onClick={onClose}
              className="w-full py-4 bg-black text-white hover:bg-pink-600 border-4 border-black font-mono font-black text-lg sm:text-xl uppercase transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              Cerrar Reproductor
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>,
    document.body
  );
};
