import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';
import { DynamicText } from './DynamicText';

interface SectionBarrerasProps {
  isOpen: boolean;
  onToggle: () => void;
  simulatorEnabled: boolean;
  onJumpToEstrategias?: () => void;
}

export const SectionBarreras: React.FC<SectionBarrerasProps> = ({ isOpen, onToggle, simulatorEnabled, onJumpToEstrategias }) => {
  return (
    <CollapsibleSection
      id="barreras"
      title="03. Barreras para la participación"
      isOpen={isOpen}
      onToggle={onToggle}
      simulatorEnabled={simulatorEnabled}
      bannerClass="bg-red-500 text-white border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1"
    >
      <div className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black relative">
          <p className="text-lg font-medium leading-relaxed">Las dificultades asociadas al TDAH no dependen únicamente del menor, sino también de las características físicas y sociales del entorno y de la disponibilidad de apoyos significativos (World Health Organization, 2023).</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 border-2 border-black bg-red-50">
                <h3 className="font-bold text-xl mb-4 text-red-600">Barreras frecuentes en el colegio</h3>
                <ul className="space-y-2 text-sm font-bold text-red-900">
                  <li>❌ Clases muy largas o rígidas</li>
                  <li>❌ Falta de adaptaciones</li>
                  <li>❌ Exceso de exigencias atencionales</li>
                  <li>❌ Interpretaciones erróneas del comportamiento</li>
                </ul>
                <p className="text-xs mt-4 text-red-900">La falta de estrategias inclusivas puede favorecer el bajo rendimiento, la frustración y la desmotivación escolar (DuPaul & Stoner, 2020).</p>
            </div>
            
            <div className="p-4 border-2 border-black bg-blue-50">
                <h3 className="font-bold text-xl mb-4 text-blue-600 font-sans">Barreras sociales</h3>
                <p className="text-sm font-semibold text-blue-900">La impulsividad y las dificultades de regulación emocional pueden generar conflictos con iguales o favorecer de manera colateral situaciones de rechazo social involuntario (Hoza, 2007).</p>
            </div>

            <div className="p-4 border-2 border-black bg-purple-50">
                <h3 className="font-bold text-xl mb-4 text-purple-600 font-sans">Barreras familiares</h3>
                <p className="text-sm font-semibold text-purple-900">La elevada necesidad de supervisión y organización puede aumentar el estrés familiar, el clima y afectar al clima emocional del hogar (Chronis-Tuscano et al., 2016).</p>
            </div>
          </div>

          <div className="p-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-black border-4 border-black text-base bg-yellow-50">
            <DynamicText simulatorEnabled={simulatorEnabled} className="text-black flex-1 text-center md:text-left">
              Comprender el TDAH desde un enfoque inclusivo implica adaptar el entorno y reducir barreras estructuradas, no solo centrarse en las dificultades individuales (World Health Organization, 2023).
            </DynamicText>
            {onJumpToEstrategias && (
              <button 
                onClick={onJumpToEstrategias}
                className="shrink-0 bg-black text-[#00FF41] hover:bg-neutral-800 border-2 border-black px-6 py-3 uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 active:shadow-none transition-all cursor-pointer"
              >
                Ir a Estrategias →
              </button>
            )}
          </div>
      </div>
    </CollapsibleSection>
  );
};
