import React from 'react';
import { Brain, Rocket, BookOpen } from 'lucide-react';
import { ProfileOption, AgeRangeOption } from '../types';

interface ProfileModalProps {
  selectedProfile: ProfileOption;
  selectedAgeRange: AgeRangeOption;
  onSelectProfile: (profile: ProfileOption) => void;
  onSelectAgeRange: (ageRange: AgeRangeOption) => void;
  setSimulatorEnabled: (enabled: boolean) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  selectedProfile,
  selectedAgeRange,
  onSelectProfile,
  onSelectAgeRange,
  setSimulatorEnabled,
}) => {
  // Solo mostrar el modal inicial si no hay perfil seleccionado 
  // o si el perfil de alumno requiere edad y no se ha seleccionado.
  const isVisible = selectedProfile === null || (selectedProfile === 'usuario' && selectedAgeRange === null);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-2xl bg-white border-4 sm:border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden scale-100 transition-all duration-300 my-auto">
        
        {/* Header Banner */}
        <div className="bg-black text-white border-b-4 sm:border-b-8 border-black p-4 font-mono flex items-center gap-3">
          <Brain className="shrink-0 w-8 h-8 md:w-10 md:h-10" />
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight font-sans">
              PERFIL DE USUARIO
            </h2>
            <p className="text-[10px] sm:text-xs text-white uppercase opacity-70 font-mono tracking-wider">
              configuración inicial del sitio web
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 bg-white">
          {selectedProfile === null ? (
            // Step 1: Select Profile
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-black font-sans leading-tight">
                ¿CÓMO DESEAS EXPERIMENTAR ESTE SITIO WEB?
              </h3>
              
              <div className="space-y-2 text-sm sm:text-base font-medium text-black">
                <p>Si tienes TDAH, <strong>este puede ser tu sitio</strong>.</p>
                <p>Aquí encontrarás herramientas que te ayudan en el día a día para concentrarte, organizarte y reducir las distracciones.</p>
                <p>Y si conoces a alguien con TDAH, también puedes <strong>acompañarle</strong> desde aquí.</p>
                <p className="font-bold pt-2">Elige la opción que mejor se adapte a ti:</p>
              </div>

              {/* Profiles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Padre / Madre */}
                <button
                  onClick={() => {
                    onSelectProfile('padre');
                    setSimulatorEnabled(true);
                    onSelectAgeRange('b1'); // Default fallback that can be changed
                  }}
                  className="group relative bg-black text-white border-4 border-black p-4 sm:p-6 transition-all duration-200 text-left flex flex-col items-start gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer h-full"
                >
                  <span className="inline-flex items-center gap-1.5 bg-white text-black text-[10px] sm:text-xs font-mono font-bold uppercase px-3 py-1 rounded-md">
                    <Rocket size={14} strokeWidth={2.5} /> MODO EXPERIMENTAL
                  </span>
                  
                  <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight mt-2 leading-none">
                    SOY MADRE / PADRE / DOCENTE
                  </h4>
                  
                  <p className="text-[11px] sm:text-xs font-medium leading-relaxed opacity-90 my-3 flex-1">
                    Activa el simulador para vivir en primera persona los desafíos que enfrentan las personas con TDAH. Te ayudará a entender mejor sus dificultades atencionales y a empatizar desde la experiencia.
                  </p>
                  
                  <div className="mt-auto">
                    <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-[2px] after:bg-white pb-1.5">
                      [ PROBAR EL SIMULADOR ] →
                    </span>
                  </div>
                </button>

                {/* Alumno / Usuario */}
                <button
                  onClick={() => {
                    onSelectProfile('usuario');
                    setSimulatorEnabled(false);
                  }}
                  className="group relative bg-white text-black border-4 border-black p-4 sm:p-6 transition-all duration-200 text-left flex flex-col items-start gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer h-full"
                >
                  <span className="inline-flex items-center gap-1.5 bg-neutral-200 text-black text-[10px] sm:text-xs font-mono font-bold uppercase px-3 py-1 rounded-md">
                    <BookOpen size={14} strokeWidth={2.5} /> LECTURA LIMPIA
                  </span>
                  
                  <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight mt-2 leading-none">
                    SOY ALUMNO / USUARIO GENERAL
                  </h4>
                  
                  <p className="text-[11px] sm:text-xs font-medium leading-relaxed opacity-90 my-3 flex-1">
                    Accede al sitio con una vista clara y sin distracciones. Ideal para leer, informarte y usar las herramientas de apoyo de forma sencilla.
                  </p>
                  
                  <div className="mt-auto">
                    <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-3/4 after:h-[2px] after:bg-black pb-1.5">
                      [ ENTRAR EN MODO LECTURA ] →
                    </span>
                  </div>
                </button>

              </div>
            </div>
          ) : (
            // Step 2: Select Age Group
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    onSelectProfile(null);
                    onSelectAgeRange(null);
                  }}
                  className="group inline-flex items-center gap-1.5 text-black bg-white hover:bg-black hover:text-white border-2 border-black px-2.5 py-1.5 text-[10px] sm:text-xs font-mono font-black uppercase transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] active:translate-y-0.5 cursor-pointer"
                >
                  ← Volver a Perfiles
                </button>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-white uppercase bg-black px-2.5 py-1.5 border-2 border-black">
                  Paso 2 de 2: Tu Edad
                </span>
              </div>

              <div className="space-y-2 lg:space-y-3">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-black font-sans leading-tight tracking-tight">
                  ¿Cuál es tu edad / etapa académica?
                </h3>
                <p className="text-black text-sm sm:text-base leading-relaxed font-medium">
                  Las estrategias de autogestión de este informe se adaptarán a la etapa académica seleccionada para ofrecerte los recursos recomendados que mejor se ajustan a ti:
                </p>
              </div>

              {/* Age options list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { id: 'p1', label: '🎒 1º Ciclo Primaria (6-8 años)', desc: 'Estrategias de autogestión adaptadas para el primer tramo escolar.' },
                  { id: 'p2', label: '🎒 2º Ciclo Primaria (8-10 años)', desc: 'Recursos visuales y organizativos para el alumnado de ciclo medio.' },
                  { id: 'p3', label: '🎒 3º Ciclo Primaria (10-12 años)', desc: 'Preparación para la transición con técnicas de autonomía avanzada.' },
                  { id: 'e1', label: '🏫 1ª Etapa de la ESO (12-14 años)', desc: 'Gestión del tiempo y foco en el inicio de la secundaria.' },
                  { id: 'e2', label: '🏫 2ª Etapa de la ESO (14-16 años)', desc: 'Estrategias de concentración para el tramo final de la secundaria.' },
                  { id: 'b1', label: '🎓 Etapa de Bachiller (16-18 años)', desc: 'Técnicas de autoinstrucción para la alta exigencia académica.' },
                  { id: 'a18', label: '🎓 De 18 a 21 años (18-21 años)', desc: 'Planificación madura y mitigación del caos sensorial.' }
                ].map(option => (
                  <button
                    key={option.id}
                    onClick={() => onSelectAgeRange(option.id as AgeRangeOption)}
                    className="group relative bg-white text-black border-4 border-black p-3 sm:p-4 hover:bg-black hover:text-white transition-all duration-200 text-left flex flex-col justify-between gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-black uppercase tracking-tighter">
                        {option.label}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium opacity-90 leading-tight">{option.desc}</p>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs font-black uppercase mt-1 shrink-0 group-hover:underline">
                      [ ELEGIR ] →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

