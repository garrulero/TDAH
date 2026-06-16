import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';

interface SectionDiaADiaProps {
  isOpen: boolean;
  onToggle: () => void;
  simulatorEnabled: boolean;
}

export const SectionDiaADia: React.FC<SectionDiaADiaProps> = ({ isOpen, onToggle, simulatorEnabled }) => {
  return (
    <CollapsibleSection
      id="dia-a-dia"
      title="02. ¿Cómo afecta al día a día?"
      isOpen={isOpen}
      onToggle={onToggle}
      simulatorEnabled={simulatorEnabled}
      bannerClass="bg-blue-600 text-white border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
    >
      <div className="space-y-6 bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
        <p className="text-xl font-medium">
          El TDAH puede influir en diferentes áreas de la vida cotidiana del niño, niña o adolescente, afectando al ámbito académico, social, emocional y familiar (Frontiers in Psychiatry, 2024).
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border-4 border-black bg-amber-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-bold text-2xl mb-4 underline decoration-4 text-black">En el colegio</h3>
            <p className="mb-4">El alumnado con TDAH puede presentar dificultades para mantener la atención, seguir instrucciones, organizar tareas, gestionar el tiempo o finalizar actividades escolares (DuPaul & Stoner, 2020).</p>
            <p className="mb-4">Estas dificultades pueden repercutir en el rendimiento académico y generar sentimientos de frustración o desmotivación si no existen apoyos ajustados a sus necesidades (Grupo de Trabajo de la Guía de Práctica Clínica sobre TDAH, 2010).</p>
            <div className="mt-6 p-4 bg-white border-2 border-black">
              <h4 className="font-bold mb-2 text-black">¿Qué puede ayudar?</h4>
              <ul className="space-y-1 text-sm font-bold text-black">
                <li>✔ Tareas fragmentadas</li>
                <li>✔ Instrucciones claras y breves</li>
                <li>✔ Horarios visuales</li>
                <li>✔ Adaptaciones metodológicas</li>
                <li>✔ Refuerzo positivo</li>
              </ul>
              <p className="text-xs mt-2 opacity-70 text-black">(DuPaul & Stoner, 2020)</p>
            </div>
          </div>

          <div className="p-6 border-4 border-black bg-pink-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-bold text-2xl mb-4 underline decoration-4 text-black font-sans">En las relaciones sociales</h3>
            <p className="mb-4 text-black">Muchos niños y adolescentes con TDAH pueden encontrar dificultades para interpretar señales sociales, respetar turnos o regular su comportamiento en situaciones grupales debido a la impulsividad y a las dificultades en autorregulación (American Psychiatric Association, 2022; Barkley, 2015).</p>
            <p className="mb-4 text-black">Como consecuencia, algunos menores pueden experimentar conflictos con iguales, rechazo social o dificultades para mantener amistades estables (Miranda et al., 2014).</p>
            <p className="text-black">Estas experiencias pueden afectar negativamente a la autoestima y al bienestar emocional (Grupo de Trabajo de la Guía de Práctica Clínica sobre TDAH, 2010).</p>
          </div>

          <div className="p-6 md:col-span-2 border-4 border-black bg-cyan-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-bold text-2xl mb-4 underline decoration-4 text-black font-sans">En casa</h3>
            <p className="mb-4 text-black">El TDAH también influye en la dinámica familiar. Muchas familias deben aumentar la supervisión del menor, estructurar rutinas y ofrecer apoyo constante en tareas escolares, organización personal o gestión emocional (Centta, 2024).</p>
            <p className="text-black">Esta situación puede generar estrés parental, cansancio y sobrecarga emocional, especialmente cuando no existe suficiente apoyo o información (Current Psychology, 2024).</p>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
};
