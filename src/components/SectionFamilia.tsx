import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';

interface SectionFamiliaProps {
  isOpen: boolean;
  onToggle: () => void;
  simulatorEnabled: boolean;
}

export const SectionFamilia: React.FC<SectionFamiliaProps> = ({ isOpen, onToggle, simulatorEnabled }) => {
  return (
    <CollapsibleSection
      id="familia"
      title="05. El impacto del TDAH en la familia"
      isOpen={isOpen}
      onToggle={onToggle}
      simulatorEnabled={simulatorEnabled}
      bannerClass="bg-orange-400 text-black border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1"
    >
      <div className="p-8 bg-white border-4 border-black font-medium space-y-6 text-lg leading-relaxed shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
        <p>
          El TDAH no afecta únicamente al menor, sino al conjunto del sistema familiar, influyendo en la organización, la comunicación y la gestión emocional del hogar (Centta, 2024).
        </p>
        <p>
          Las familias suelen asumir mayores niveles de supervisión, anticipación de dificultades y acompañamiento constante, lo que puede aumentar la sensación de agotamiento o estrés parental (Current Psychology, 2024).
        </p>
        <p>
          Además, la calidad de las dinámicas familiares puede influir en la manifestación de los síntomas, generándose una relación bidireccional entre el comportamiento del menor y las respuestas del entorno familiar (González Monzón, 2025).
        </p>
        
        <div className="mt-8 p-6 border-2 border-black bg-orange-50 font-sans">
          <h3 className="font-extrabold text-2xl mb-4 text-black">¿Qué puede ayudar a las familias?</h3>
          <ul className="space-y-2 font-bold font-mono text-base sm:text-lg text-black">
            <li>✔ Establecer rutinas claras y predecibles</li>
            <li>✔ Comunicación breve, asertiva y directa</li>
            <li>✔ Refuerzo positivo inmediato ante conductas adaptativas</li>
            <li>✔ Organización visual del entorno y los calendarios</li>
            <li>✔ Apoyo profesional cuando sea necesario</li>
          </ul>
        </div>
      </div>
    </CollapsibleSection>
  );
};
