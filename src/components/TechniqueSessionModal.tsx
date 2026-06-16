import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Heart, Sparkles, Zap, Pause, Play } from 'lucide-react';

interface Technique {
  title: string;
  desc: string;
  steps: string[];
  example?: string;
}

interface TechniqueSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  technique: Technique | null;
  category: 'generales' | 'relajacion' | 'concentracion';
}

const MOTIVATIONAL_PHRASES = [
  "¡Tómate tu tiempo, lo estás haciendo genial!",
  "Un paso cada vez. Todo suma.",
  "Respira. Estás tomando el control.",
  "La constancia es tu mayor superpoder.",
  "Tu cerebro es único, dale las herramientas que necesita.",
  "¡Sigue así! Estás entrenando tu atención."
];

const STEP_DURATION_MS = 8000;

export const TechniqueSessionModal: React.FC<TechniqueSessionModalProps> = ({
  isOpen,
  onClose,
  technique,
  category
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [randomPhrase, setRandomPhrase] = useState("");
  const [stepProgress, setStepProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const stepsLength = technique?.steps.length || 0;
  const isDone = currentStepIndex === stepsLength;

  const handleNext = useCallback(() => {
    if (currentStepIndex < stepsLength) {
      setCurrentStepIndex(prev => prev + 1);
    }
  }, [currentStepIndex, stepsLength]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStepIndex(0);
      setRandomPhrase(MOTIVATIONAL_PHRASES[Math.floor(Math.random() * MOTIVATIONAL_PHRASES.length)]);
      setIsPlaying(true);
      setStepProgress(0);
      document.body.style.overflow = 'hidden';
      // Mueve la ventana arriba para que en moviles no se quede bugeado el scroll
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    setRandomPhrase(MOTIVATIONAL_PHRASES[Math.floor(Math.random() * MOTIVATIONAL_PHRASES.length)]);
    setStepProgress(0);
  }, [currentStepIndex]);

  useEffect(() => {
    if (isDone || !isPlaying) return;

    const interval = setInterval(() => {
      setStepProgress(prev => {
        const nextProgress = prev + (100 / (STEP_DURATION_MS / 100)); // 100ms interval
        if (nextProgress >= 100) {
          handleNext();
          return 0;
        }
        return nextProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isDone, isPlaying, handleNext]);

  if (!isOpen || !technique) return null;

  const getThemeColors = () => {
    switch (category) {
      case 'relajacion': return 'bg-cyan-500 text-white border-cyan-700';
      case 'concentracion': return 'bg-yellow-400 text-black border-yellow-600';
      default: return 'bg-pink-500 text-white border-pink-700';
    }
  };

  const getThemeBg = () => {
    switch (category) {
      case 'relajacion': return 'bg-cyan-500';
      case 'concentracion': return 'bg-yellow-400';
      default: return 'bg-pink-500';
    }
  };

  const getIcon = () => {
    switch (category) {
      case 'relajacion': return <Heart size={24} className="animate-pulse" />;
      case 'concentracion': return <Zap size={24} className="animate-bounce" />;
      default: return <Sparkles size={24} className="animate-pulse" />;
    }
  }

  const content = (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <div className={`p-4 border-b-8 border-black flex justify-between items-center ${getThemeBg()} ${category === 'concentracion' ? 'text-black' : 'text-white'}`}>
        <div className="font-black uppercase tracking-tight text-xl sm:text-2xl flex items-center gap-3">
           {getIcon()}
           <span>{technique.title}</span>
        </div>
        <button onClick={onClose} className="p-2 border-2 border-current hover:bg-black hover:text-white transition-colors cursor-pointer">
          <X size={24} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] flex flex-col justify-center items-center p-4 sm:p-6 text-center overflow-hidden">
        <AnimatePresence mode="wait">
          {!isDone && (
            <motion.div
              key={`step-${currentStepIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl w-full flex flex-col items-center justify-center h-full max-h-[80vh]"
            >
              <div className="w-full flex justify-between items-end mb-2 px-2">
                 <div className="font-mono font-black uppercase text-xs sm:text-sm bg-black text-[#00FF41] px-3 py-1 border-2 border-black">
                  PASO {currentStepIndex + 1} / {stepsLength}
                </div>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white border-2 border-black p-2 hover:bg-neutral-100 active:bg-neutral-200 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                  title={isPlaying ? "Pausar avance automático" : "Reanudar avance automático"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
              </div>

              <div className="bg-white border-8 border-black p-6 sm:p-12 md:p-16 w-full shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[50vh] overflow-hidden">
                <div className="flex-1 flex flex-col items-center w-full overflow-y-auto custom-scrollbar pb-6 pr-2">
                  <div className="my-auto w-full">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight sm:leading-snug text-center mx-auto max-w-3xl">
                      <span className="text-pink-500 mr-4">{currentStepIndex + 1}.</span>
                      {technique.steps[currentStepIndex]}
                    </h3>

                    {currentStepIndex === stepsLength - 1 && technique.example && (
                       <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-yellow-100 border-4 border-black text-center shrink-0 w-full max-w-2xl mx-auto">
                         <p className="font-black uppercase text-sm sm:text-base mb-2 text-yellow-800">EJEMPLO:</p>
                         <p className="font-bold font-mono text-base sm:text-xl leading-snug">{technique.example}</p>
                       </div>
                    )}
                  </div>
                </div>
                
                {/* Auto-advance progress bar overlay at the bottom of the card */}
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-neutral-200 border-t-4 border-black">
                   <div 
                    className={`h-full ${getThemeBg()} transition-all ease-linear`} 
                    style={{ width: `${stepProgress}%`, transitionDuration: isPlaying ? '100ms' : '0ms' }}
                   />
                </div>
              </div>
            </motion.div>
          )}

          {isDone && (
             <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="max-w-2xl w-full bg-[#00FF41] border-8 border-black p-6 sm:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-black"
            >
              <CheckCircle2 size={64} className="mx-auto mb-6 sm:size-80" />
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">¡LO HAS CONSEGUIDO!</h2>
              <p className="text-lg sm:text-xl font-bold mb-8">Has completado todos los pasos de la técnica con éxito. Quédate con esta sensación.</p>
              
              <button 
                onClick={onClose}
                className="w-full py-4 text-xl sm:text-2xl bg-white border-4 border-black font-black uppercase tracking-wide hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                CERRAR SESIÓN
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="p-4 sm:p-6 border-t-8 border-black bg-white flex flex-col-reverse md:flex-row justify-between items-center gap-4 shrink-0">
        <div className="flex gap-4 w-full md:w-auto mt-2 md:mt-0">
          {!isDone && (
             <button 
              onClick={() => {
                handleNext();
                setStepProgress(0); // Reset immediately on manual next
              }}
              className={`flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border-4 border-black font-black uppercase w-full md:w-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none cursor-pointer ${getThemeColors()}`}
            >
              {currentStepIndex === stepsLength - 1 ? 'FINALIZAR' : 'PASAR AHORA'} <ArrowRight size={20} />
            </button>
          )}
        </div>
        
        {/* Motivational Phrase */}
        {!isDone && (
          <div className="font-mono text-xs sm:text-sm font-bold text-gray-600 bg-neutral-100 p-2 sm:p-3 border-2 border-gray-300 w-full md:flex-1 md:ml-4 overflow-hidden relative min-h-[40px] md:min-h-[56px] flex items-center justify-center md:justify-end text-center md:text-right">
             <AnimatePresence mode="wait">
                <motion.div
                  key={randomPhrase}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="px-2"
                >
                  » {randomPhrase}
                </motion.div>
             </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};
