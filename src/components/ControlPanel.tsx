import React, { useState } from 'react';
import { ProfileOption, AgeRangeOption } from '../types';
import { Settings2, X } from 'lucide-react';

interface ControlPanelProps {
  simulatorEnabled: boolean;
  selectedProfile: ProfileOption;
  selectedAgeRange: AgeRangeOption;
  onSetSimulator: (val: boolean) => void;
  onReset: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  simulatorEnabled,
  selectedProfile,
  selectedAgeRange,
  onSetSimulator,
  onReset
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const getStageLabel = (ageId: AgeRangeOption) => {
    switch(ageId) {
      case 'p1': return '1º CICLO PRIMARIA (6-8 AÑOS)';
      case 'p2': return '2º CICLO PRIMARIA (8-10 AÑOS)';
      case 'p3': return '3º CICLO PRIMARIA (10-12 AÑOS)';
      case 'e1': return '1ª ETAPA DE LA ESO (12-14 AÑOS)';
      case 'e2': return '2ª ETAPA DE LA ESO (14-16 AÑOS)';
      case 'b1': return 'ETAPA DE BACHILLER (16-18 AÑOS)';
      case 'a18': return 'DE 18 A 21 AÑOS';
      default: return '';
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-8 right-8 z-[500]">
        <button 
          onClick={() => setIsMinimized(false)}
          className={`p-3 border-4 font-mono text-xs font-black uppercase flex items-center gap-2 transition-colors duration-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer ${simulatorEnabled ? 'bg-black text-white border-pink-500 shadow-[6px_6px_0px_0px_rgba(236,72,153,1)] hover:-translate-y-1 active:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]' : 'bg-white text-black border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}`}
          title="Abrir Panel de Control"
        >
          <Settings2 size={20} className={simulatorEnabled ? 'text-pink-500' : 'text-black'} />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-[500] flex flex-col items-end gap-2">
      <div className={`p-4 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono text-[10px] uppercase space-y-2 transition-colors duration-500 ${simulatorEnabled ? 'bg-black text-white border-pink-500 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)]' : 'bg-white text-black border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'}`}>
        <div className="flex justify-between items-center pb-2 mb-2 border-b-2 border-current/30 gap-6">
          <span className="font-black text-xs">PANEL DE CONTROL</span>
          <button 
            onClick={() => setIsMinimized(true)}
            className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            title="Minimizar Panel"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-4">
            <span>MODO_SIMULACIÓN</span>
            <button 
              onClick={() => onSetSimulator(!simulatorEnabled)}
              className={`w-12 h-6 border-2 relative transition-all duration-300 ${simulatorEnabled ? 'bg-pink-500 border-white' : 'bg-black border-black'} cursor-pointer`}
            >
              <div className={`absolute top-0 w-5 h-5 transition-all duration-300 ${simulatorEnabled ? 'right-0 bg-white' : 'left-0 bg-white'}`} />
            </button>
        </div>
        {selectedProfile && (
          <div className="flex flex-col gap-1.5 pt-2 border-t border-dashed border-current/35">
              <div className="flex justify-between items-center gap-4">
                <span className="font-bold">PERFIL: {selectedProfile === 'padre' ? 'PADRE / TUTOR' : 'ALUMNO'}</span>
                <button 
                  onClick={onReset}
                  className={`px-1.5 py-0.5 border-2 text-[9px] uppercase font-black transition-colors ${simulatorEnabled ? 'bg-pink-500 text-white border-white hover:bg-white hover:text-black' : 'bg-black text-white hover:bg-neutral-800'} cursor-pointer`}
                >
                  Cambiar
                </button>
              </div>
              {selectedProfile === 'usuario' && selectedAgeRange && (
                <span className="text-[9px] font-mono opacity-80 block">
                  ETAPA: {getStageLabel(selectedAgeRange)}
                </span>
              )}
          </div>
        )}
        <p className="opacity-60">{simulatorEnabled ? 'ESTADO: CAOS_ACTIVO' : 'ESTADO: ESTATICO_BN'}</p>
      </div>
    </div>
  );
};
