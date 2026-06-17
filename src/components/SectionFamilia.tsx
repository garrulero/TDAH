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
          Tener un hijo o hija con TDAH no solo afecta al ámbito escolar: también influye en el día a día de toda la familia. Muchas veces aparecen rutinas más intensas, más necesidad de organización, recordatorios constantes y momentos de cansancio o frustración que pueden generar dudas sobre si se está haciendo “lo correcto”.
        </p>
        <p>
          Es normal sentir agotamiento en algunos momentos. El TDAH puede hacer que situaciones cotidianas —hacer los deberes, seguir horarios, gestionar emociones o afrontar cambios— requieran más tiempo, paciencia y acompañamiento. Pero también es importante recordar algo: no se trata de hacerlo perfecto, sino de encontrar estrategias que funcionen para vuestra familia.
        </p>
        <p>
          Cada hogar es diferente, y no existe una única forma de acompañar. Lo que suele marcar la diferencia no es la exigencia, sino la comprensión, la constancia y un entorno predecible y seguro, donde el menor se sienta entendido y acompañado.
        </p>
        
        <div className="mt-8 p-6 border-2 border-black bg-orange-50 font-sans">
          <h3 className="font-extrabold text-2xl mb-4 text-black">¿Qué puede ayudar a las familias?</h3>
          <ul className="space-y-4 font-bold text-base sm:text-lg text-black">
            <li>
              <span className="block font-black uppercase font-mono text-orange-600">✓ Rutinas claras y previsibles</span>
              Los horarios visuales y las pequeñas rutinas reducen discusiones y ayudan a anticipar lo que viene.
            </li>
            <li>
              <span className="block font-black uppercase font-mono text-orange-600">✓ Dar instrucciones breves y concretas</span>
              Frases cortas, una indicación cada vez y contacto visual antes de hablar suelen funcionar mejor.
            </li>
            <li>
              <span className="block font-black uppercase font-mono text-orange-600">✓ Reconocer los avances, aunque sean pequeños</span>
              El refuerzo positivo ayuda mucho más que centrarse constantemente en lo que falta por mejorar.
            </li>
            <li>
              <span className="block font-black uppercase font-mono text-orange-600">✓ Crear apoyos visuales en casa</span>
              Calendarios, listas, colores o recordatorios visibles ayudan a organizar el día a día.
            </li>
            <li>
              <span className="block font-black uppercase font-mono text-orange-600">✓ Cuidar también el bienestar familiar</span>
              Pedir ayuda, apoyarse en profesionales o compartir experiencias con otras familias también forma parte del proceso.
            </li>
          </ul>
        </div>

        <div className="p-4 bg-yellow-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-8">
          <p className="font-black text-center text-lg uppercase tracking-tight">
            💡 Un recordatorio importante: vuestro hijo o hija no os está dando un mal día; probablemente está teniendo un día difícil.
          </p>
        </div>
      </div>
    </CollapsibleSection>
  );
};
