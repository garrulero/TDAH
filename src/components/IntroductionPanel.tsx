import React from 'react';

interface IntroductionPanelProps {
  selectedProfile: 'padre' | 'usuario' | null;
  simulatorEnabled: boolean;
}

export const IntroductionPanel: React.FC<IntroductionPanelProps> = ({
  selectedProfile,
  simulatorEnabled
}) => {
  return (
    <div className={`p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transition-all duration-300 ${simulatorEnabled ? 'bg-amber-100 text-black border-pink-500 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)]' : 'bg-white text-black border-black'}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl sm:text-4xl">{selectedProfile === 'padre' ? '👨‍👩‍👧‍👦' : '🎒'}</span>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
          {selectedProfile === 'padre' ? 'Bienvenido, Madre, Padre o Docente' : '¡Hola! Bienvenido a tu espacio'}
        </h2>
      </div>
      <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
        {selectedProfile === 'padre' 
          ? 'Esta guía interactiva ha sido diseñada especialmente para ti, con el fin de ayudarte a comprender los desafíos diarios y el funcionamiento del TDAH desde un enfoque empático e inclusivo. Podrás descubrir cómo influye en el día a día académico y social, cuáles son las barreras del entorno en las escuelas, qué estrategias prácticas potencian la autonomía de los menores según su edad escolar y la importancia de un entorno familiar cohesionado. Si deseas una experiencia más profunda, puedes activar el simulador visual para empatizar de primera mano con la fatiga atencional.'
          : 'Este espacio ha sido diseñado especialmente para acompañarte en tu día a día escolar y personal. Sabemos que tu cerebro funciona a su propio ritmo —lleno de energía, creatividad y curiosidad—. Aquí aprenderás de forma sencilla qué es el TDAH, y sobre todo, descubrirás trucos prácticos e ideas adaptadas para tu edad que te ayudarán a organizarte mejor en clase, concentrarte con facilidad, regular tus emociones y ganar total confianza en todo lo que te propongas.'
        }
      </p>
      <div className={`text-xs font-bold font-mono uppercase p-2 inline-block border-2 ${simulatorEnabled ? 'bg-pink-500 text-white border-white' : 'bg-black text-white border-black'}`}>
        VISTA ACTUAL: {selectedProfile === 'padre' ? 'PADRES Y EDUCADORES' : 'ALUMNO (LECTURA LIMPIA)'}
      </div>
    </div>
  );
};
