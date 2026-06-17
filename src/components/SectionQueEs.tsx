import React, { useState } from 'react';
import { CollapsibleSection } from './CollapsibleSection';
import { DynamicText } from './DynamicText';
import { Play } from 'lucide-react';
import { InteractiveVideoModal } from './InteractiveVideoModal';
import { VIDEO_SCRIPTS } from '../data/videoScripts';
import { ProfileOption, AgeRangeOption } from '../types';

interface SectionQueEsProps {
  isOpen: boolean;
  onToggle: () => void;
  simulatorEnabled: boolean;
  selectedProfile: ProfileOption;
  selectedAgeRange: AgeRangeOption;
}

export const SectionQueEs: React.FC<SectionQueEsProps> = ({ 
  isOpen, 
  onToggle, 
  simulatorEnabled,
  selectedProfile,
  selectedAgeRange
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  let scriptId = 'p1';
  if (selectedProfile === 'padre') {
    scriptId = 'padre';
  } else if (selectedAgeRange) {
    scriptId = selectedAgeRange;
  }

  const currentScript = VIDEO_SCRIPTS[scriptId] || VIDEO_SCRIPTS['p1'];

  const showOnlyVideo = selectedProfile === 'usuario' && selectedAgeRange === 'p1';

  return (
    <CollapsibleSection
      id="que-es"
      title="01. ¿Qué es el TDAH?"
      isOpen={isOpen}
      onToggle={onToggle}
      simulatorEnabled={simulatorEnabled}
      bannerClass="bg-black text-white border-pink-500 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] transform -rotate-1"
    >
      <div className={`p-8 font-medium space-y-6 text-lg leading-relaxed relative z-10 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black`}>
        {!showOnlyVideo && (
          <>
            <p>
              El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es un trastorno del neurodesarrollo caracterizado por dificultades persistentes relacionadas con la <DynamicText simulatorEnabled={simulatorEnabled} className={simulatorEnabled ? "bg-yellow-300 px-1 font-bold text-black" : "font-bold text-black"}>inatención, la hiperactividad y la impulsividad</DynamicText>, que interfieren en el funcionamiento diario y aparecen en diferentes contextos, como la escuela, el hogar o las relaciones sociales (American Psychiatric Association, 2022).
            </p>
            <p>
              El TDAH no afecta únicamente al rendimiento académico, sino también a la <DynamicText simulatorEnabled={simulatorEnabled} className={simulatorEnabled ? "bg-[#00FF41] px-1 font-bold text-black" : "font-bold text-black"}>regulación emocional, las habilidades sociales, la organización personal y el bienestar general</DynamicText> del alumnado (Barkley, 2015).
            </p>
            <div className={`p-6 mt-6 ${simulatorEnabled ? 'bg-pink-100 border-l-8 border-pink-500 border-2 border-black' : 'border-2 border-black bg-neutral-50'}`}>
              <h3 className="font-bold text-xl mb-4 text-black">El TDAH se manifiesta principalmente mediante:</h3>
              <ul className="space-y-3 font-bold text-base sm:text-lg text-black">
                <li className="flex gap-2"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Dificultad para mantener la atención de un modo prolongado</DynamicText></li>
                <li className="flex gap-2"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Problemas de secuenciación, organización y planificación de labores</DynamicText></li>
                <li className="flex gap-[11px]"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Impulsividad</DynamicText></li>
                <li className="flex gap-2"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Inquietud o hiperactividad motora constante</DynamicText></li>
                <li className="flex gap-2"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Dificultades relevantes en la gestión emocional y baja tolerancia a la frustración</DynamicText></li>
              </ul>
            </div>

            <div className="p-6 mt-6 border-2 border-black bg-yellow-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-black text-2xl mb-3 text-black uppercase tracking-tight">💡 El lado positivo: Fortalezas y Cualidades</h3>
              <p className="mb-4 text-lg font-medium text-black">
                Todos los cerebros son diferentes. El TDAH también viene acompañado de numerosas fortalezas y cualidades positivas que, bien canalizadas, resultan ser un gran potencial:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 font-bold text-base text-black">
                <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>✨</span> Alta creatividad e imaginación</li>
                <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>🧠</span> Pensamiento "fuera de la caja" o lateral</li>
                <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>🚀</span> Altos niveles de energía y entusiasmo</li>
                <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>❤️</span> Gran sensibilidad y empatía hacia otros</li>
                <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>🔍</span> Capacidad de "Hiperfoco" en temas de interés</li>
                <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>😄</span> Gran sentido del humor y espontaneidad</li>
              </ul>
            </div>

            <p className={`font-black p-4 mt-8 ${simulatorEnabled ? 'bg-black text-[#00FF41]' : 'border-4 border-black font-bold uppercase text-center bg-white text-black'}`}>
              El TDAH no es falta de esfuerzo, pereza o mala conducta, sino una condición de base neurobiológica y del desarrollo que requiere comprensión, empatía y apoyos adecuados (APA, 2022).
            </p>
          </>
        )}

        <div className={`${showOnlyVideo ? '' : 'mt-8'} border-4 border-black bg-cyan-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col sm:flex-row items-center justify-between gap-6`}>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🎬</span>
              <h3 className="font-black text-xl text-black uppercase tracking-tight">Ejemplo Práctico en Vídeo</h3>
            </div>
            <p className="text-sm font-bold text-black">
              Inicia el reproductor interactivo para ver cómo explicamos el TDAH en la etapa: <span className="underline">{currentScript.title}</span>.
            </p>
          </div>
          
          <button 
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto bg-black text-white hover:bg-pink-600 border-4 border-black font-mono font-black uppercase px-6 py-4 flex items-center justify-center gap-2 transition-transform active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <Play size={20} fill="white" /> Reproducir
          </button>
        </div>

      </div>

      <InteractiveVideoModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        script={currentScript} 
      />
    </CollapsibleSection>
  );
};
