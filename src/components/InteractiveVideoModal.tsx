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

const STEP_DURATION_MS = 12000;

export const InteractiveVideoModal: React.FC<InteractiveVideoModalProps> = ({
  isOpen,
  onClose,
  script
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const stepsLength = script?.scenes.length || 0;
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
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 font-sans backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {!isDone ? (
          <motion.div
            key="session"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-4xl max-h-[90vh] flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-4">
              <div className="bg-[#00FF41] border-2 border-black px-4 py-2 font-mono font-black uppercase text-black flex items-center gap-2 text-sm sm:text-base">
                <MonitorPlay size={20} />
                <span>REPRODUCTOR DE GUION: {script.title}</span>
              </div>
              <button 
                onClick={onClose}
                className="bg-white hover:bg-neutral-200 border-2 border-black p-2 transition-colors cursor-pointer"
              >
                <X size={24} className="text-black" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="flex-1 bg-white border-8 border-black p-4 sm:p-8 flex flex-col items-center justify-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden min-h-[50vh]">
              
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="font-mono font-black uppercase text-xs sm:text-sm bg-black text-[#00FF41] px-3 py-1 border-2 border-black">
                  ESCENA {currentStepIndex + 1} / {stepsLength}
                </div>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white border-2 border-black p-1 hover:bg-neutral-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer hidden sm:block"
                >
                  {isPlaying ? <Pause size={18} fill="black" /> : <Play size={18} fill="black" />}
                </button>
              </div>

              <div className="w-full max-w-3xl flex flex-col h-full overflow-y-auto custom-scrollbar pt-8 pb-4 pr-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStepIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col flex-1"
                  >
                     <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-pink-600 mb-6 flex items-center gap-3">
                        <Clapperboard size={32} strokeWidth={3} className="shrink-0" /> 
                        {script.scenes[currentStepIndex].title}
                     </h2>

                     <div className="bg-yellow-50 border-4 border-black p-4 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <p className="font-mono text-sm sm:text-base font-bold text-neutral-800 italic">
                          🎬 Visualización en pantalla:
                        </p>
                        <p className="font-mono font-black text-black">
                           {script.scenes[currentStepIndex].action}
                        </p>
                     </div>

                     <div className="flex-1">
                       <p className="font-sans font-medium text-lg sm:text-2xl leading-relaxed text-black border-l-4 border-black pl-4">
                         <span className="font-black block text-sm sm:text-base uppercase text-blue-700 mb-2 font-mono tracking-widest">AUDIO NARRADOR:</span>
                         {script.scenes[currentStepIndex].narrator}
                       </p>
                     </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress bar container */}
              <div className="w-full mt-6 bg-neutral-200 h-3 sm:h-4 border-2 border-black relative rounded-full overflow-hidden shrink-0">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#00FF41] border-r-2 border-black transition-all duration-100 ease-linear"
                  style={{ width: `${stepProgress}%` }}
                />
              </div>

              {/* Controls */}
              <div className="w-full mt-4 flex items-center justify-between z-10 shrink-0">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white border-2 border-black p-2 hover:bg-neutral-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer sm:hidden"
                >
                  {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" />}
                </button>
                <div className="hidden sm:block" /> {/* spacer */}

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-black text-white hover:bg-pink-600 hover:text-white border-2 border-black px-4 py-2 sm:px-6 sm:py-3 font-mono font-black uppercase text-sm sm:text-base transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  {currentStepIndex === stepsLength - 1 ? 'FINALIZAR' : 'SIGUIENTE'} <ArrowRight size={20} />
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
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-[#00FF41] border-4 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Clapperboard size={40} className="text-black" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 text-black">
              Vídeo Finalizado
            </h2>
            <p className="text-sm sm:text-base font-bold text-gray-700 mb-8 leading-relaxed">
              Has visionado el guion completo explicativo adaptado a este perfil.
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
    </div>,
    document.body
  );
};
