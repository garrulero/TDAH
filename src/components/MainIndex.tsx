import React from 'react';

interface MainIndexProps {
  selectedProfile: 'padre' | 'usuario' | null;
  expandedSections: Record<string, boolean>;
  toggleSection: (id: string) => void;
  simulatorEnabled: boolean;
}

export const MainIndex: React.FC<MainIndexProps> = ({
  selectedProfile,
  expandedSections,
  toggleSection,
  simulatorEnabled
}) => {
  return (
    <div className={`p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6 bg-white transition-all duration-300 ${simulatorEnabled ? 'border-pink-500 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)]' : 'border-black'}`}>
      <div className="border-b-4 border-black pb-3">
        <h3 className="text-2xl font-black uppercase tracking-tight flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-black">
          <span>📑 Índice de contenidos</span>
          <span className="text-xs font-mono bg-[#00FF41] text-black px-2.5 py-1 border-2 border-black font-black uppercase shrink-0">
            [ CLICA CAPÍTULO PARA DESPLEGAR ]
          </span>
        </h3>
        <p className="text-xs mt-1 font-bold text-neutral-600 uppercase">
          Utiliza este índice interactivo para ir descubriendo y abriendo los apartados del informe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Index 01: ¿Qué es el TDAH? */}
        <button 
          onClick={() => toggleSection('que-es')}
          className={`p-4 border-4 border-black text-left transition-all active:translate-y-1 active:shadow-none min-h-[90px] flex items-center justify-between cursor-pointer ${
            expandedSections['que-es'] 
              ? 'bg-[#00FF41] text-black shadow-none' 
              : 'bg-white text-black hover:bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
          }`}
        >
          <div>
            <span className="block font-mono text-[10px] font-bold uppercase opacity-60">Sección 01</span>
            <span className="text-base sm:text-lg font-black uppercase leading-tight block mt-1">¿Qué es el TDAH?</span>
          </div>
          <span className="font-mono text-[10.5px] font-black shrink-0 border-2 border-black p-1.5 ml-3 bg-white text-black uppercase">
            {expandedSections['que-es'] ? 'CERRAR [-]' : 'DESPLEGAR [+]'}
          </span>
        </button>

        {/* Index 02: ¿Cómo afecta el TDAH al día a día? (Only parents) */}
        {selectedProfile !== 'usuario' ? (
          <button 
            onClick={() => toggleSection('dia-a-dia')}
            className={`p-4 border-4 border-black text-left transition-all active:translate-y-1 active:shadow-none min-h-[90px] flex items-center justify-between cursor-pointer ${
              expandedSections['dia-a-dia'] 
                ? 'bg-blue-400 text-white shadow-none font-black border-black' 
                : 'bg-white text-black hover:bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            <div>
              <span className="block font-mono text-[10px] font-bold uppercase opacity-60">Sección 02</span>
              <span className="text-base sm:text-lg font-black uppercase leading-tight block mt-1">El día a día</span>
            </div>
            <span className="font-mono text-[10.5px] font-black shrink-0 border-2 border-black p-1.5 ml-3 bg-white text-black uppercase">
              {expandedSections['dia-a-dia'] ? 'CERRAR [-]' : 'DESPLEGAR [+]'}
            </span>
          </button>
        ) : (
          <div className="border-4 border-dashed border-gray-300 p-4 flex items-center justify-center text-center select-none bg-gray-50/50">
            <p className="font-mono text-[10px] text-gray-400 uppercase font-black">
              [ Sección no aplicable a Alumno ]
            </p>
          </div>
        )}

        {/* Index 03: Barreras (Only parents) */}
        {selectedProfile !== 'usuario' ? (
          <button 
            onClick={() => toggleSection('barreras')}
            className={`p-4 border-4 border-black text-left transition-all active:translate-y-1 active:shadow-none min-h-[90px] flex items-center justify-between cursor-pointer ${
              expandedSections['barreras'] 
                ? 'bg-red-500 text-white shadow-none font-black border-black' 
                : 'bg-white text-black hover:bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            <div>
              <span className="block font-mono text-[10px] font-bold uppercase opacity-60">Sección 03</span>
              <span className="text-base sm:text-lg font-black uppercase leading-tight block mt-1">Barreras y Entorno</span>
            </div>
            <span className="font-mono text-[10.5px] font-black shrink-0 border-2 border-black p-1.5 ml-3 bg-white text-black uppercase">
              {expandedSections['barreras'] ? 'CERRAR [-]' : 'DESPLEGAR [+]'}
            </span>
          </button>
        ) : (
          <div className="border-4 border-dashed border-gray-300 p-4 flex items-center justify-center text-center select-none bg-gray-50/50">
            <p className="font-mono text-[10px] text-gray-400 uppercase font-black">
              [ Sección no aplicable a Alumno ]
            </p>
          </div>
        )}

        {/* Index 04: Estrategias de autogestión */}
        <button 
          onClick={() => toggleSection('estrategias')}
          className={`p-4 border-4 border-black text-left transition-all active:translate-y-1 active:shadow-none min-h-[90px] flex items-center justify-between cursor-pointer ${
            expandedSections['estrategias'] 
              ? 'bg-yellow-300 text-black shadow-none' 
              : 'bg-white text-black hover:bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
          }`}
        >
          <div>
            <span className="block font-mono text-[10px] font-bold uppercase opacity-60">
              {selectedProfile === 'usuario' ? 'Sección 02' : 'Sección 04'}
            </span>
            <span className="text-base sm:text-lg font-black uppercase leading-tight block mt-1 font-sans">Estrategias Autogestión</span>
          </div>
          <span className="font-mono text-[10.5px] font-black shrink-0 border-2 border-black p-1.5 ml-3 bg-white text-black uppercase">
            {expandedSections['estrategias'] ? 'CERRAR [-]' : 'DESPLEGAR [+]'}
          </span>
        </button>

        {/* Index 05: Impacto en la familia (Only parents) */}
        {selectedProfile !== 'usuario' ? (
          <button 
            onClick={() => toggleSection('familia')}
            className={`p-4 border-4 border-black text-left transition-all active:translate-y-1 active:shadow-none min-h-[90px] flex items-center justify-between cursor-pointer sm:col-span-2 ${
              expandedSections['familia'] 
                ? 'bg-orange-400 text-black shadow-none' 
                : 'bg-white text-black hover:bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            <div>
              <span className="block font-mono text-[10px] font-bold uppercase opacity-60">Sección 05</span>
              <span className="text-base sm:text-lg font-black uppercase leading-tight block mt-1">Impacto en la Familia</span>
            </div>
            <span className="font-mono text-[10.5px] font-black shrink-0 border-2 border-black p-1.5 ml-3 bg-white text-black uppercase">
              {expandedSections['familia'] ? 'CERRAR [-]' : 'DESPLEGAR [+]'}
            </span>
          </button>
        ) : null}

      </div>
    </div>
  );
};
