import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2, Ghost, Brain } from 'lucide-react';

const FONTS = [
  'font-sans',
  'font-serif',
  'font-mono',
  'font-[Comic_Sans_MS]',
  'font-[Impact]',
  'font-[Courier_New]',
];

const COLORS = [
  '#FF00FF', '#00FFFF', '#FFFF00', '#FF0000', '#00FF00', '#0000FF'
];

export default function App() {
  const [selectedProfile, setSelectedProfile] = useState<'padre' | 'usuario' | null>(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState<'p1' | 'p2' | 'p3' | 'b1' | 'b2' | 'a18' | null>(null);
  const [simulatorEnabled, setSimulatorEnabled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ghostPos, setGhostPos] = useState({ x: 0, y: 0 });
  const [currentFont, setCurrentFont] = useState(0);
  
  const [isGlitching, setIsGlitching] = useState(false);
  const [staticOpacity, setStaticOpacity] = useState(0);
  const [shakeIntensity, setShakeIntensity] = useState(0);

  // Mouse tracker for visual fatigue and ghost cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setGhostPos({ 
          x: e.clientX + (Math.random() * 40 - 20), 
          y: e.clientY + (Math.random() * 40 - 20) 
        });
      }, 100);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Aggressive Interruptions Loop
  useEffect(() => {
    if (!simulatorEnabled) {
      setIsGlitching(false);
      setStaticOpacity(0);
      setShakeIntensity(0);
      return;
    }
    const intervals = [
      setInterval(() => { if(Math.random() > 0.8) { setIsGlitching(true); setTimeout(() => setIsGlitching(false), 300); } }, 4000),
      setInterval(() => { setStaticOpacity(Math.random() * 0.1); }, 200),
      setInterval(() => { if(Math.random() > 0.7) { setShakeIntensity(1); setTimeout(() => setShakeIntensity(0), 1000); } }, 9000),
    ];
    return () => intervals.forEach(clearInterval);
  }, [simulatorEnabled]);

  // Chaotic Font Swap
  useEffect(() => {
    if (!simulatorEnabled) {
      setCurrentFont(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentFont(prev => (prev + 1) % FONTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [simulatorEnabled]);

  const DynamicText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const [localFont, setLocalFont] = useState(0);
    return (
      <span 
        onMouseEnter={() => {
          if (simulatorEnabled) setLocalFont(prev => (prev + 1) % FONTS.length);
        }}
        className={`${simulatorEnabled ? FONTS[localFont] : FONTS[0]} transition-all duration-75 select-all ${simulatorEnabled ? 'hover:text-pink-500 hover:translate-x-2' : ''} inline-block ${className}`}
      >
        {children}
      </span>
    );
  };

  return (
    <div 
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 font-sans relative 
        ${simulatorEnabled ? 'bg-[#00FF41] text-black' : 'bg-white text-black'}`}
    >
      {/* Questionnaire / Profile Modal Overlay at Load */}
      {(selectedProfile === null || (selectedProfile === 'usuario' && selectedAgeRange === null)) && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white border-4 sm:border-8 border-black shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] sm:shadow-[16px_16px_0px_0px_rgba(236,72,153,1)] overflow-hidden scale-100 transition-all duration-300 my-auto">
            
            {/* Header Banner */}
            <div className="bg-black text-[#00FF41] border-b-4 sm:border-b-8 border-black p-4 sm:p-6 font-mono flex items-center gap-3 sm:gap-4">
              <Brain className="text-pink-500 animate-pulse shrink-0 w-8 h-8 sm:w-9 sm:h-9" />
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight font-sans">
                  PERFIL DE USUARIO
                </h2>
                <p className="text-[10px] sm:text-xs text-white uppercase opacity-70">
                  configuración inicial del simulador de tdah
                </p>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 md:space-y-8 bg-amber-50">
              {selectedProfile === null ? (
                // Step 1: Select Profile
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase text-black font-sans leading-tight">
                      ¿Cómo deseas experimentar este sitio web?
                    </h3>
                    <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-semibold">
                      Esta plataforma incluye un simulador interactivo de estímulos visuales complejos que recrea desafíos y distractores para empatizar con el alumnado con TDAH. Selecciona tu perfil:
                    </p>
                  </div>

                  {/* Profiles Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    
                    {/* Padre / Madre */}
                    <button
                      onClick={() => {
                        setSelectedProfile('padre');
                        setSimulatorEnabled(true);
                        // Default to 'b1' for exploring in Section 4, but let them change
                        setSelectedAgeRange('b1');
                      }}
                      className="group relative bg-[#00FF41] text-black border-4 border-black p-4 sm:p-5 md:p-6 hover:bg-black hover:text-white transition-all duration-200 text-left flex flex-col justify-between items-start gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(236,72,153,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                    >
                      <div className="space-y-2">
                        <span className="inline-block bg-black text-[#00FF41] text-[9px] sm:text-[10px] font-mono font-black uppercase px-2 py-0.5 border-2 border-black group-hover:bg-[#00FF41] group-hover:text-black">
                          RECOMENDADO
                        </span>
                        <h4 className="text-base sm:text-lg font-black uppercase tracking-tight block">
                          Soy Madre / Padre / Docente
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-bold leading-relaxed opacity-90">
                          Activa por defecto el simulador. Experimenta el caos sensorial extremo (distracciones fantasmas, fuentes oscilantes y ruidos visuales) para comprender sus desafíos de primera mano.
                        </p>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase mt-2 group-hover:underline">
                        [ VER SIMULADOR ACTIVO ] →
                      </span>
                    </button>

                    {/* Alumno / Usuario */}
                    <button
                      onClick={() => {
                        setSelectedProfile('usuario');
                        setSimulatorEnabled(false);
                      }}
                      className="group relative bg-white text-black border-4 border-black p-4 sm:p-5 md:p-6 hover:bg-pink-500 hover:text-white transition-all duration-200 text-left flex flex-col justify-between items-start gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(236,72,153,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                    >
                      <div className="space-y-2">
                        <span className="inline-block bg-neutral-200 text-black text-[9px] sm:text-[10px] font-mono font-black uppercase px-2 py-0.5 border-2 border-black group-hover:bg-black group-hover:text-white">
                          LECTURA LIMPIA
                        </span>
                        <h4 className="text-base sm:text-lg font-black uppercase tracking-tight block">
                          Soy Alumno / Usuario general
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-bold leading-relaxed opacity-90">
                          Mantiene el simulador desactivado. Los textos se verán claros y estables en blanco y negro para consultar directamente los informes y guías de autogestión sin agobios visuales.
                        </p>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase mt-2 group-hover:underline">
                        [ CON CONSULTA LIMPIA ] →
                      </span>
                    </button>

                  </div>
                </div>
              ) : (
                // Step 2: Select Age Group (Only for 'usuario' is mandatory)
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        setSelectedProfile(null);
                        setSelectedAgeRange(null);
                      }}
                      className="group inline-flex items-center gap-1.5 text-black bg-white hover:bg-black hover:text-white border-2 border-black px-2.5 py-1 text-xs font-mono font-black uppercase transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] active:translate-y-0.5 cursor-pointer"
                    >
                      ← Volver a Perfiles
                    </button>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-black uppercase bg-pink-100 px-2.5 py-1 border-2 border-black">
                      Paso 2 de 2: Tu Edad
                    </span>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase text-black font-sans leading-tight">
                      ¿Cuál es tu edad / etapa académica?
                    </h3>
                    <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-semibold">
                      Las estrategias de autogestión de este informe se adaptarán a la etapa académica seleccionada para ofrecerte los recursos recomendados que mejor se ajustan a ti:
                    </p>
                  </div>

                  {/* Age options list */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    
                    {/* Primaria 1 */}
                    <button
                      onClick={() => setSelectedAgeRange('p1')}
                      className="group relative bg-[#00FF41] text-black border-4 border-black p-4 hover:bg-black hover:text-[#00FF41] transition-all duration-200 text-left flex items-start justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(236,72,153,1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight block">
                          🎒 1 Ciclo Primaria
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-bold opacity-90">Estrategias de autogestión adaptadas para el primer tramo escolar.</p>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase mt-1 shrink-0 group-hover:underline">[ ELEGIR ] →</span>
                    </button>

                    {/* Primaria 2 */}
                    <button
                      onClick={() => setSelectedAgeRange('p2')}
                      className="group relative bg-[#00FF41] text-black border-4 border-black p-4 hover:bg-black hover:text-[#00FF41] transition-all duration-200 text-left flex items-start justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(236,72,153,1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight block">
                          🎒 2 Ciclo Primaria
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-bold opacity-90">Recursos visuales y organizativos para el alumnado de ciclo medio.</p>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase mt-1 shrink-0 group-hover:underline">[ ELEGIR ] →</span>
                    </button>

                    {/* Primaria 3 */}
                    <button
                      onClick={() => setSelectedAgeRange('p3')}
                      className="group relative bg-[#00FF41] text-black border-4 border-black p-4 hover:bg-black hover:text-[#00FF41] transition-all duration-200 text-left flex items-start justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(236,72,153,1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight block">
                          🎒 3 Ciclo Primaria
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-bold opacity-90">Preparación para la transición con técnicas de autonomía avanzada.</p>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase mt-1 shrink-0 group-hover:underline">[ ELEGIR ] →</span>
                    </button>

                    {/* Bachillerato 1 */}
                    <button
                      onClick={() => setSelectedAgeRange('b1')}
                      className="group relative bg-[#FFFF00] text-black border-4 border-black p-4 hover:bg-black hover:text-[#FFFF00] transition-all duration-200 text-left flex items-start justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(236,72,153,1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight block">
                          🏫 1 Ciclo Batxiller
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-bold opacity-90">Gestión del tiempo y foco para la alta exigencia académica.</p>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase mt-1 shrink-0 group-hover:underline">[ ELEGIR ] →</span>
                    </button>

                    {/* Bachillerato 2 */}
                    <button
                      onClick={() => setSelectedAgeRange('b2')}
                      className="group relative bg-[#FFFF00] text-black border-4 border-black p-4 hover:bg-black hover:text-[#FFFF00] transition-all duration-200 text-left flex items-start justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(236,72,153,1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight block">
                          🏫 2 Ciclo Bachi
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-bold opacity-90">Técnicas de autoinstrucción para el éxito en el tramo final universitario.</p>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase mt-1 shrink-0 group-hover:underline">[ ELEGIR ] →</span>
                    </button>

                    {/* 18 a 21 */}
                    <button
                      onClick={() => setSelectedAgeRange('a18')}
                      className="group relative bg-pink-500 text-white border-4 border-black p-4 hover:bg-black hover:text-white transition-all duration-200 text-left flex items-start justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(236,72,153,1)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight block">
                          🎓 De 18 a 21 años
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-bold opacity-90">Planificación madura y mitigación del caos sensorial en la vida adulta.</p>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase mt-1 shrink-0 group-hover:underline">[ ELEGIR ] →</span>
                    </button>

                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Control Panel Toggle */}
      <div className="fixed bottom-8 right-8 z-[500] flex flex-col items-end gap-2">
         <div className={`p-4 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono text-[10px] uppercase space-y-2 transition-colors duration-500 ${simulatorEnabled ? 'bg-black text-white border-pink-500 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)]' : 'bg-white text-black border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'}`}>
            <div className="flex justify-between items-center gap-4">
               <span>MODO_SIMULACIÓN</span>
               <button 
                 onClick={() => {
                   const nextVal = !simulatorEnabled;
                   setSimulatorEnabled(nextVal);
                   setSelectedProfile(nextVal ? 'padre' : 'usuario');
                   if (!nextVal && selectedAgeRange === null) {
                     setSelectedAgeRange('b1'); // Fallback default
                   }
                 }}
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
                      onClick={() => {
                        setSelectedProfile(null);
                        setSelectedAgeRange(null);
                        setSimulatorEnabled(false);
                      }}
                      className={`px-1.5 py-0.5 border-2 text-[9px] uppercase font-black transition-colors ${simulatorEnabled ? 'bg-pink-500 text-white border-white hover:bg-white hover:text-black' : 'bg-black text-white hover:bg-neutral-800'} cursor-pointer`}
                    >
                      Cambiar
                    </button>
                 </div>
                 {selectedProfile === 'usuario' && selectedAgeRange && (
                   <span className="text-[9px] font-mono opacity-80 block">
                     ETAPA: {
                       selectedAgeRange === 'p1' ? '1 CICLO PRIMARIA' : 
                       selectedAgeRange === 'p2' ? '2 CICLO PRIMARIA' : 
                       selectedAgeRange === 'p3' ? '3 CICLO PRIMARIA' : 
                       selectedAgeRange === 'b1' ? '1 CICLO BATXILLER' : 
                       selectedAgeRange === 'b2' ? '2 CICLO BACHI' : 
                       'DE 18 A 21'
                     }
                   </span>
                 )}
              </div>
            )}
            <p className="opacity-60">{simulatorEnabled ? 'ESTADO: CAOS_ACTIVO' : 'ESTADO: ESTATICO_BN'}</p>
         </div>
      </div>

      {/* Visual static noise */}
      <div 
        className="fixed inset-0 pointer-events-none z-[190] bg-[url('https://media.giphy.com/media/oEI9uWUicls8pqY1Q4/giphy.gif')] bg-repeat mix-blend-overlay"
        style={{ opacity: simulatorEnabled ? staticOpacity : 0 }}
      />

      {/* Ghost Cursor */}
      {simulatorEnabled && (
        <div 
          className="fixed pointer-events-none z-[210] text-pink-500 transition-none"
          style={{ left: ghostPos.x, top: ghostPos.y }}
        >
          <Ghost size={24} />
        </div>
      )}
      <div 
        className="fixed pointer-events-none z-[211] text-black transition-none"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
        <MousePointer2 size={32} fill={simulatorEnabled ? "white" : "black"} />
      </div>

      {/* Immersive UI Overlays */}
      {simulatorEnabled && <div className="fixed inset-0 opacity-20 pointer-events-none z-[60] scanline-overlay" />}
      {simulatorEnabled && <div className="fixed inset-0 pointer-events-none z-[100] border-[20px] border-black/10 mix-blend-difference" />}
      
      {/* Background Floaters */}
      {simulatorEnabled && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute opacity-30 floating-hazard mix-blend-multiply"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                width: `${Math.random() * 100}px`,
                height: `${Math.random() * 100}px`,
                backgroundColor: COLORS[i % COLORS.length],
                borderRadius: i % 2 === 0 ? '0' : '999px',
                border: '4px solid black'
              }}
            />
          ))}
        </div>
      )}

      {/* Top Nav */}
      <nav className={`fixed top-0 w-full p-6 z-[130] border-b-8 flex justify-between items-center shadow-2xl transition-colors duration-500 ${simulatorEnabled ? 'bg-black text-[#00FF41] border-pink-500' : 'bg-white text-black border-black'}`}>
        <div className="flex items-center gap-4">
          <Brain className={`${simulatorEnabled ? 'text-pink-500 animate-pulse' : 'text-black'}`} />
          <h1 className={`${FONTS[currentFont]} text-2xl font-black uppercase tracking-tighter`}>EL TDAH</h1>
        </div>
      </nav>

      <div 
        className={`w-full relative z-10 transition-all duration-500 ${shakeIntensity && simulatorEnabled ? 'animate-[screen-shake_0.2s_infinite]' : ''} ${!simulatorEnabled ? 'grayscale' : ''}`}
        style={isGlitching && simulatorEnabled ? { filter: 'invert(1) hue-rotate(90deg)' } : {}}
      >
        {/* Main Content Area */}
        <main className={`relative pt-40 px-6 pb-40 max-w-4xl mx-auto space-y-32 ${simulatorEnabled ? 'cursor-none' : ''}`}>
        
        {/* Section 1: ¿Qué es el TDAH? */}
        <section id="que-es" className="space-y-8 relative">
          {simulatorEnabled && <div className="absolute -left-12 -top-12 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply animate-pulse" />}
          <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${simulatorEnabled ? 'bg-black text-white p-4 border-4 border-pink-500 shadow-[12px_12px_0px_0px_rgba(236,72,153,1)] transform -rotate-1 relative z-10' : 'border-b-4 border-black pb-4'}`}>
            ¿Qué es el TDAH?
          </h2>
          <div className={`p-8 font-medium space-y-6 text-lg leading-relaxed relative z-10 ${simulatorEnabled ? 'bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : ''}`}>
            <p>
              El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es un trastorno del neurodesarrollo caracterizado por dificultades persistentes relacionadas con la <DynamicText className={simulatorEnabled ? "bg-yellow-300 px-1 font-bold" : "font-bold"}>inatención, la hiperactividad y la impulsividad</DynamicText>, que interfieren en el funcionamiento diario y aparecen en diferentes contextos, como la escuela, el hogar o las relaciones sociales (American Psychiatric Association, 2022).
            </p>
            <p>
              El TDAH no afecta únicamente al rendimiento académico, sino también a la <DynamicText className={simulatorEnabled ? "bg-[#00FF41] px-1 font-bold" : "font-bold"}>regulación emocional, las habilidades sociales, la organización personal y el bienestar general</DynamicText> del alumnado (Barkley, 2015).
            </p>
            <div className={`p-6 mt-6 ${simulatorEnabled ? 'bg-pink-100 border-l-8 border-pink-500' : 'border-2 border-black'}`}>
              <h3 className="font-bold text-xl mb-4">El TDAH puede manifestarse mediante:</h3>
              <ul className="space-y-3 font-bold">
                <li className="flex gap-2"><span>✔</span> <DynamicText>Dificultad para mantener la atención</DynamicText></li>
                <li className="flex gap-2"><span>✔</span> <DynamicText>Problemas de organización y planificación</DynamicText></li>
                <li className="flex gap-2"><span>✔</span> <DynamicText>Impulsividad</DynamicText></li>
                <li className="flex gap-2"><span>✔</span> <DynamicText>Inquietud o hiperactividad</DynamicText></li>
                <li className="flex gap-2"><span>✔</span> <DynamicText>Dificultades en la gestión emocional</DynamicText></li>
              </ul>
            </div>
            <p className={`font-black p-4 mt-8 ${simulatorEnabled ? 'bg-black text-[#00FF41]' : 'border-4 border-black font-bold uppercase'}`}>
              El TDAH no es falta de esfuerzo, pereza o mala conducta, sino una condición del neurodesarrollo que requiere comprensión y apoyos adecuados (American Psychiatric Association, 2022).
            </p>
          </div>
        </section>

        {/* Section 2: ¿Cómo afecta el TDAH al día a día? */}
        <section id="dia-a-dia" className="space-y-8">
           <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter ${simulatorEnabled ? 'bg-blue-600 text-white p-4 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1' : 'border-b-4 border-black pb-4'}`}>
            ¿Cómo afecta el TDAH al día a día?
          </h2>
          <div className="space-y-6">
            <p className={`text-xl font-medium ${simulatorEnabled ? 'bg-white border-2 border-black p-4' : ''}`}>
              El TDAH puede influir en diferentes áreas de la vida cotidiana del niño, niña o adolescente,
              afectando al ámbito académico, social, emocional y familiar (Frontiers in Psychiatry, 2024).
            </p>

            <div className={`grid md:grid-cols-2 gap-8 ${simulatorEnabled ? '' : 'grid-cols-1 md:grid-cols-1'}`}>
              <div className={`p-6 ${simulatorEnabled ? 'bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'border-2 border-black'}`}>
                <h3 className="font-bold text-2xl mb-4 underline decoration-4">En el colegio</h3>
                <p className="mb-4">El alumnado con TDAH puede presentar dificultades para mantener la atención, seguir instrucciones, organizar tareas, gestionar el tiempo o finalizar actividades escolares (DuPaul & Stoner, 2020).</p>
                <p className="mb-4">Estas dificultades pueden repercutir en el rendimiento académico y generar sentimientos de frustración o desmotivación si no existen apoyos ajustados a sus necesidades (Grupo de Trabajo de la Guía de Práctica Clínica sobre TDAH, 2010).</p>
                <div className={`mt-6 p-4 ${simulatorEnabled ? 'bg-white border-2 border-black' : 'border-t-2 border-black mt-4'}`}>
                  <h4 className="font-bold mb-2">¿Qué puede ayudar?</h4>
                  <ul className="space-y-1 text-sm font-bold">
                    <li>✔ Tareas fragmentadas</li>
                    <li>✔ Instrucciones claras y breves</li>
                    <li>✔ Horarios visuales</li>
                    <li>✔ Adaptaciones metodológicas</li>
                    <li>✔ Refuerzo positivo</li>
                  </ul>
                  <p className="text-xs mt-2 opacity-70">(DuPaul & Stoner, 2020)</p>
                </div>
              </div>

              <div className={`p-6 ${simulatorEnabled ? 'bg-pink-400 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'border-2 border-black'}`}>
                <h3 className="font-bold text-2xl mb-4 underline decoration-4">En las relaciones sociales</h3>
                <p className="mb-4">Muchos niños y adolescentes con TDAH pueden encontrar dificultades para interpretar señales sociales, respetar turnos o regular su comportamiento en situaciones grupales debido a la impulsividad y a las dificultades en autorregulación (American Psychiatric Association, 2022; Barkley, 2015).</p>
                <p className="mb-4">Como consecuencia, algunos menores pueden experimentar conflictos con iguales, rechazo social o dificultades para mantener amistades estables (Miranda et al., 2014).</p>
                <p>Estas experiencias pueden afectar negativamente a la autoestima y al bienestar emocional (Grupo de Trabajo de la Guía de Práctica Clínica sobre TDAH, 2010).</p>
              </div>

              <div className={`p-6 md:col-span-2 ${simulatorEnabled ? 'bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'border-2 border-black'}`}>
                <h3 className="font-bold text-2xl mb-4 underline decoration-4">En casa</h3>
                <p className="mb-4">El TDAH también influye en la dinámica familiar. Muchas familias deben aumentar la supervisión del menor, estructurar rutinas y ofrecer apoyo constante en tareas escolares, organización personal o gestión emocional (Centta, 2024).</p>
                <p>Esta situación puede generar estrés parental, cansancio y sobrecarga emocional, especialmente cuando no existe suficiente apoyo o información (Current Psychology, 2024).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Barreras */}
        <section id="barreras" className="space-y-8">
          <h2 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter ${simulatorEnabled ? 'bg-red-500 text-white p-4 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1' : 'border-b-4 border-black pb-4'}`}>
            Barreras para la participación y el bienestar
          </h2>
          <div className={`p-8 font-medium space-y-6 text-lg leading-relaxed ${simulatorEnabled ? 'bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative' : ''}`}>
             {simulatorEnabled && <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 border-4 border-black transform translate-x-1/2 -translate-y-1/2 rotate-12" />}
             <p>Las dificultades asociadas al TDAH no dependen únicamente del trastorno, sino también de las características del entorno y de la disponibilidad de apoyos adecuados (World Health Organization, 2023).</p>
             
             <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className={`p-4 ${simulatorEnabled ? 'border-2 border-red-500 bg-red-50' : 'border-t-2 border-black'}`}>
                   <h3 className="font-bold text-xl mb-4 text-red-600">Barreras frecuentes en el colegio</h3>
                   <ul className="space-y-2 text-sm font-bold">
                     <li>❌ Clases muy largas o rígidas</li>
                     <li>❌ Falta de adaptaciones</li>
                     <li>❌ Exceso de exigencias atencionales</li>
                     <li>❌ Interpretaciones erróneas del comportamiento</li>
                   </ul>
                   <p className="text-xs mt-4">La falta de estrategias inclusivas puede favorecer el bajo rendimiento, la frustración y la desmotivación escolar (DuPaul & Stoner, 2020).</p>
                </div>
                
                <div className={`p-4 ${simulatorEnabled ? 'border-2 border-blue-500 bg-blue-50' : 'border-t-2 border-black'}`}>
                   <h3 className="font-bold text-xl mb-4 text-blue-600">Barreras sociales</h3>
                   <p className="text-sm">La impulsividad y las dificultades de regulación emocional pueden generar conflictos con iguales o favorecer situaciones de rechazo social (Hoza, 2007).</p>
                </div>

                <div className={`p-4 ${simulatorEnabled ? 'border-2 border-purple-500 bg-purple-50' : 'border-t-2 border-black'}`}>
                   <h3 className="font-bold text-xl mb-4 text-purple-600">Barreras familiares</h3>
                   <p className="text-sm">La elevada necesidad de supervisión y organización puede aumentar el estrés familiar y afectar al clima emocional del hogar (Chronis-Tuscano et al., 2016).</p>
                </div>
             </div>

             <div className={`p-6 mt-8 font-black text-center ${simulatorEnabled ? 'bg-black text-white transform rotate-1' : 'border-4 border-black uppercase'}`}>
               <DynamicText>Comprender el TDAH desde un enfoque inclusivo implica adaptar el entorno y reducir barreras, no solo centrarse en las dificultades individuales (World Health Organization, 2023).</DynamicText>
             </div>
          </div>
        </section>

        {/* Section 4: Estrategias */}
        <section id="estrategias" className="space-y-8 relative">
           {simulatorEnabled && <div className="absolute right-0 top-1/2 w-64 h-64 bg-[#00FF41]/20 rounded-full blur-3xl z-[-1]" />}
           <h2 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter ${simulatorEnabled ? 'bg-[#00FF41] text-black p-4 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1' : 'border-b-4 border-black pb-4'}`}>
            Estrategias de autogestión para el alumnado con TDAH
          </h2>
          <div className="space-y-6">
            <p className={`text-xl font-medium ${simulatorEnabled ? 'bg-white border-2 border-black p-4' : ''}`}>
              Las estrategias de autogestión ayudan al alumnado con TDAH a desarrollar habilidades de organización, atención y regulación emocional, favoreciendo una mayor autonomía (Barkley, 2015).
            </p>

            {/* Active Profile Info Banner */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-4 border-black bg-amber-50 p-4 gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div>
                <p className="font-mono text-xs uppercase font-black text-black">
                  🎯 Perfil navegador: <span className="underline">{selectedProfile === 'padre' ? 'Madre / Padre / Docente' : 'Alumno / Usuario General'}</span>
                </p>
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black mt-1">
                  Estrategias de Autogestión Personalizadas
                </h3>
              </div>
              
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-black border-2 border-black bg-black text-[#00FF41] px-2.5 py-1.5 uppercase shrink-0">
                  {
                    selectedAgeRange === 'p1' ? '👶 1 Ciclo Primaria' : 
                    selectedAgeRange === 'p2' ? '👶 2 Ciclo Primaria' : 
                    selectedAgeRange === 'p3' ? '👶 3 Ciclo Primaria' : 
                    selectedAgeRange === 'b1' ? '🎒 1 Ciclo Batxiller' : 
                    selectedAgeRange === 'b2' ? '🎒 2 Ciclo Bachi' : 
                    '🎓 De 18 a 21'
                  }
                </span>
              </div>
            </div>

            {/* Stage Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-4 border-black font-mono text-[10px] sm:text-xs bg-black p-1 gap-1">
              <button
                type="button"
                onClick={() => setSelectedAgeRange('p1')}
                className={`py-2 px-1 font-black text-center uppercase transition-all duration-150 cursor-pointer ${selectedAgeRange === 'p1' ? 'bg-[#00FF41] text-black shadow-[inset_0_-4px_0_0_#000]' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
              >
                1 Primaria
              </button>
              <button
                type="button"
                onClick={() => setSelectedAgeRange('p2')}
                className={`py-2 px-1 font-black text-center uppercase transition-all duration-150 cursor-pointer ${selectedAgeRange === 'p2' ? 'bg-[#00FF41] text-black shadow-[inset_0_-4px_0_0_#000]' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
              >
                2 Primaria
              </button>
              <button
                type="button"
                onClick={() => setSelectedAgeRange('p3')}
                className={`py-2 px-1 font-black text-center uppercase transition-all duration-150 cursor-pointer ${selectedAgeRange === 'p3' ? 'bg-[#00FF41] text-black shadow-[inset_0_-4px_0_0_#000]' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
              >
                3 Primaria
              </button>
              <button
                type="button"
                onClick={() => setSelectedAgeRange('b1')}
                className={`py-2 px-1 font-black text-center uppercase transition-all duration-150 cursor-pointer ${selectedAgeRange === 'b1' ? 'bg-[#FFFF00] text-black shadow-[inset_0_-4px_0_0_#000]' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
              >
                1 Bachi
              </button>
              <button
                type="button"
                onClick={() => setSelectedAgeRange('b2')}
                className={`py-2 px-1 font-black text-center uppercase transition-all duration-150 cursor-pointer ${selectedAgeRange === 'b2' ? 'bg-[#FFFF00] text-black shadow-[inset_0_-4px_0_0_#000]' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
              >
                2 Bachi
              </button>
              <button
                type="button"
                onClick={() => setSelectedAgeRange('a18')}
                className={`py-2 px-1 font-black text-center uppercase transition-all duration-150 cursor-pointer ${selectedAgeRange === 'a18' ? 'bg-pink-500 text-white shadow-[inset_0_-4px_0_0_#000]' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
              >
                18 - 21
              </button>
            </div>

            {/* Render Primaria Strategies */}
            {(selectedAgeRange === 'p1' || selectedAgeRange === 'p2' || selectedAgeRange === 'p3') && (
              <div className="grid md:grid-cols-2 gap-8 relative z-10 animate-[fade-in_0.3s_ease]">
                
                {/* 1. Organización y planificación */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-purple-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🗓️</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Organización y planificación</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Las personas con TDAH suelen beneficiarse de herramientas externas que faciliten la organización y reduzcan la carga cognitiva (Centers for Disease Control and Prevention, 2023).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black">
                    <h4 className="font-bold text-xs mb-2 uppercase text-purple-700 font-mono">[ RECURSOS ÚTILES INFANTILES ]</h4>
                    <ul className="space-y-2 font-mono text-xs font-bold">
                      <li className="flex items-center gap-2">✔ Agendas visuales</li>
                      <li className="flex items-center gap-2">✔ Horarios (con claves de color)</li>
                      <li className="flex items-center gap-2">✔ Dividir tareas largas en pasos pequeños</li>
                    </ul>
                  </div>
                  <p className="text-[11px] italic text-gray-700 font-bold">
                    Estas herramientas ayudan a anticipar actividades y organizar el tiempo de forma más eficiente (Understood.org, 2022).
                  </p>
                </div>

                {/* 2. Autoinstrucciones */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-blue-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🗣️</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Autoinstrucciones</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Las autoinstrucciones consisten en enseñar al alumnado a verbalizar internamente los pasos de una tarea para favorecer el control cognitivo y reducir la impulsividad (Meichenbaum, 1977).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black font-bold font-mono">
                     <p className="text-xs uppercase text-blue-700 mb-2 font-black">[ HABLA INTERNA GUIADA ]</p>
                     <ol className="list-decimal pl-4 space-y-2 text-xs">
                       <li>¿Qué tengo que hacer?</li>
                       <li>Lo hago paso a paso</li>
                       <li>Reviso mi trabajo</li>
                       <li>¿Lo he conseguido?</li>
                     </ol>
                  </div>
                </div>

                {/* 3. Regulación emocional */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-green-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🎈</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Regulación emocional</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Las técnicas de respiración y mindfulness favorecen la regulación emocional y ayudan a reducir la impulsividad y la ansiedad (Harvard Medical School, 2019).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black">
                    <h4 className="font-bold text-xs mb-2 uppercase text-green-700 font-mono">[ RESPIRACIÓN EN PRIMARIA ]</h4>
                    <ul className="space-y-2 font-bold text-xs">
                      <li className="flex items-center gap-2">🎈 Respiración del globo (visualizar el vientre que se infla)</li>
                      <li className="flex items-center gap-2">🫁 Respiración diafragmática</li>
                    </ul>
                  </div>
                  <p className="text-[11px] italic text-gray-700 font-bold">
                    Estas prácticas contribuyen a mejorar la atención sostenida y el bienestar emocional (Greater Good Science Center; Mindful Schools).
                  </p>
                </div>

                {/* 4. Técnicas de concentración */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-pink-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🎯</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Técnicas de concentración</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Para favorecer la atención en la etapa de Primaria puede ser útil:
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black">
                    <ul className="space-y-2 text-xs font-bold font-mono">
                      <li className="flex items-center gap-2">✔ Realizar una tarea cada vez</li>
                      <li className="flex items-center gap-2">✔ Reducir distractores complejos</li>
                      <li className="flex items-center gap-2">✔ Utilizar apoyos visuales</li>
                    </ul>
                  </div>
                  <p className="text-[10px] opacity-70 font-bold mt-2 font-mono">(Understood.org, 2022; Child Mind Institute, 2021)</p>
                </div>

              </div>
            )}

            {/* Render Secundaria/Bachillerato Strategies */}
            {(selectedAgeRange === 'b1' || selectedAgeRange === 'b2') && (
              <div className="grid md:grid-cols-2 gap-8 relative z-10 animate-[fade-in_0.3s_ease]">
                
                {/* 1. Organización y planificación */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-purple-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">📋</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Organización y planificación</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Las personas con TDAH suelen beneficiarse de herramientas externas que faciliten la organización y reduzcan la carga cognitiva (Centers for Disease Control and Prevention, 2023).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black">
                    <h4 className="font-bold text-xs mb-2 uppercase text-purple-700 font-mono">[ RECURSOS ÚTILES BACHILLERATO ]</h4>
                    <ul className="space-y-2 font-mono text-xs font-bold">
                      <li className="flex items-center gap-2">✔ Listas de tareas (checklists)</li>
                      <li className="flex items-center gap-2">✔ Horarios estructurados</li>
                      <li className="flex items-center gap-2">✔ Agendas visuales</li>
                      <li className="flex items-center gap-2">✔ Dividir tareas largas en pasos pequeños</li>
                    </ul>
                  </div>
                  <p className="text-[11px] italic text-gray-700 font-bold">
                    Estas herramientas ayudan a anticipar actividades y organizar el tiempo de forma más eficiente (Understood.org, 2022).
                  </p>
                </div>

                {/* 2. Gestión del tiempo */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-yellow-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">⏱️</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Gestión del tiempo</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    El alumnado con TDAH puede presentar dificultades para estimar tiempos o iniciar tareas (Child Mind Institute, 2021).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black font-mono">
                    <h4 className="font-bold text-xs mb-2 uppercase text-yellow-600">[ TÉCNICA POMODORO ADAPTADA ]</h4>
                    <ul className="space-y-2 text-xs font-bold">
                      <li className="flex items-center gap-2">⏱ 20–25 minutos de trabajo sostenido</li>
                      <li className="flex items-center gap-2">☕ Descanso breve (estirar / agua)</li>
                      <li className="flex items-center gap-2">🔁 Repetir ciclo</li>
                    </ul>
                  </div>
                  <p className="text-[11px] italic text-gray-700 font-bold">
                    Esta técnica ayuda a mejorar la atención sostenida y reducir la fatiga mental (Child Mind Institute, 2021).
                  </p>
                </div>

                {/* 3. Autoinstrucciones */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-blue-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🗣️</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Autoinstrucciones</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Las autoinstrucciones consisten en enseñar al alumnado a verbalizar internamente los pasos de una tarea para favorecer el control cognitivo y reducir la impulsividad (Meichenbaum, 1977).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black font-bold font-mono">
                     <p className="text-xs uppercase text-blue-700 mb-2 font-black">[ PASOS DE AUTOMONITOREO ]</p>
                     <ol className="list-decimal pl-4 space-y-1.5 text-xs">
                       <li>¿Qué tengo que hacer?</li>
                       <li>Lo hago paso a paso</li>
                       <li>Reviso mi trabajo</li>
                       <li>¿Lo he conseguido?</li>
                     </ol>
                  </div>
                </div>

                {/* 4. Regulación emocional */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-green-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🧘</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Regulación emocional</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Las técnicas de respiración y mindfulness favorecen la regulación emocional y ayudan a reducir la impulsividad y la ansiedad (Harvard Medical School, 2019).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black">
                    <h4 className="font-bold text-xs mb-2 uppercase text-green-700 font-mono">[ PAUTAS EN SECUNDARIA ]</h4>
                    <ul className="space-y-2 font-bold text-xs">
                      <li className="flex items-center gap-2">🧘 Respiración 4-4-6 (inhala 4s, retén 4s, exhala 6s)</li>
                      <li className="flex items-center gap-2">🫁 Respiración diafragmática</li>
                      <li className="flex items-center gap-2">🧠 Mindfulness breve antes de estudiar</li>
                    </ul>
                  </div>
                  <p className="text-[11px] italic text-gray-700 font-bold">
                    Estas prácticas contribuyen a mejorar la atención sostenida y el bienestar emocional (Greater Good Science Center; Mindful Schools).
                  </p>
                </div>

                {/* 5. Técnicas de concentración */}
                <div className={`p-6 md:col-span-2 space-y-4 ${simulatorEnabled ? 'bg-pink-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🎯</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Técnicas de concentración</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Para favorecer la atención en tus sesiones escolares puede ser útil:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-amber-50 border-2 border-black">
                      <ul className="space-y-1.5 text-xs font-bold font-mono">
                        <li>✔ Realizar una tarea cada vez</li>
                        <li>✔ Reducir distractores (móvil silbado lejos)</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-amber-50 border-2 border-black">
                      <ul className="space-y-1.5 text-xs font-bold font-mono">
                        <li>✔ Alternar tiempos de trabajo y descanso</li>
                        <li>✔ Mantener espacios de estudio organizados</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-[10px] opacity-70 font-bold font-mono">(Understood.org, 2022; Child Mind Institute, 2021)</p>
                </div>

              </div>
            )}

            {/* Render Adulto/18-21 Strategies */}
            {(selectedAgeRange === 'a18') && (
              <div className="grid md:grid-cols-2 gap-8 relative z-10 animate-[fade-in_0.3s_ease]">
                
                {/* 1. Organización y planificación */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-purple-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">✍️</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Planificación y Mitigación Cognitiva</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Las personas con TDAH suelen beneficiarse de herramientas externas que faciliten la organización y reduzcan la carga cognitiva (Centers for Disease Control and Prevention, 2023).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black">
                    <h4 className="font-bold text-xs mb-2 uppercase text-purple-700 font-mono">[ DIRECTRICES PARA LA EDAD ADULTA ]</h4>
                    <ul className="space-y-2 font-mono text-xs font-bold">
                      <li className="flex items-center gap-2">✔ Listas de tareas (checklists) de alta prioridad</li>
                      <li className="flex items-center gap-2">✔ Dividir tareas largas en pasos pequeños (frenar parálisis)</li>
                      <li className="flex items-center gap-2">✔ Horarios explícitos de bloques de descompresión</li>
                    </ul>
                  </div>
                  <p className="text-[11px] italic text-gray-700 font-bold">
                    Estas herramientas ayudan a anticipar actividades y organizar el tiempo de forma más eficiente (Understood.org, 2022).
                  </p>
                </div>

                {/* 2. Gestión del tiempo */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-yellow-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">⏱️</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Gestión del tiempo y foco</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    El alumnado con TDAH puede presentar dificultades para estimar tiempos o iniciar tareas (Child Mind Institute, 2021).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black font-mono">
                    <h4 className="font-bold text-xs mb-2 uppercase text-yellow-600">[ CICLO POMODORO AUTÓNOMO ]</h4>
                    <ul className="space-y-2 text-xs font-bold">
                      <li className="flex items-center gap-2">⏱ 20–25 minutos de labor de alta densidad</li>
                      <li className="flex items-center gap-2">☕ Descanso breve con movimiento activo o estiramiento</li>
                      <li className="flex items-center gap-2">🔁 Repetir ciclo</li>
                    </ul>
                  </div>
                  <p className="text-[11px] italic text-gray-700 font-bold">
                    Esta técnica ayuda a mejorar la atención sostenida y reducir la fatiga mental (Child Mind Institute, 2021).
                  </p>
                </div>

                {/* 3. Autoinstrucciones */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-blue-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🗣️</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Autoinstrucciones avanzadas</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Las autoinstrucciones consisten en enseñar al alumnado a verbalizar internamente los pasos de una tarea para favorecer el control cognitivo y reducir la impulsividad (Meichenbaum, 1977).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black font-bold font-mono">
                     <p className="text-xs uppercase text-blue-700 mb-2 font-black">[ PROTOCOLO DE CONDUCCIÓN COGNITIVA ]</p>
                     <ol className="list-decimal pl-4 space-y-2 text-xs">
                       <li>¿Qué tengo que hacer? (Definir el foco nuclear)</li>
                       <li>Lo hago paso a paso (Control de sobrecarga)</li>
                       <li>Reviso mi trabajo (Supervisar la deriva atencional)</li>
                       <li>¿Lo he conseguido? (Refuerzo metacognitivo positivo)</li>
                     </ol>
                  </div>
                </div>

                {/* 4. Regulación emocional */}
                <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-green-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🧘</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Descompresión y Desactivación</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Las técnicas de respiración y mindfulness favorecen la regulación emocional y ayudan a reducir la impulsividad y la ansiedad (Harvard Medical School, 2019).
                  </p>
                  <div className="p-4 bg-amber-50 border-2 border-black">
                    <h4 className="font-bold text-xs mb-2 uppercase text-green-700 font-mono">[ REGULACIÓN FISIOLÓGICA ]</h4>
                    <ul className="space-y-2 font-bold text-xs">
                      <li className="flex items-center gap-2">🧘 Respiración 4-4-6 (ideal para regular desbordes)</li>
                      <li className="flex items-center gap-2">🫁 Respiración diafragmática (control de cortisol)</li>
                      <li className="flex items-center gap-2">🧠 Mindfulness breve</li>
                    </ul>
                  </div>
                  <p className="text-[11px] italic text-gray-700 font-bold">
                    Estas prácticas contribuyen a mejorar la atención sostenida y el bienestar emocional (Greater Good Science Center; Mindful Schools).
                  </p>
                </div>

                {/* 5. Técnicas de concentración */}
                <div className={`p-6 md:col-span-2 space-y-4 ${simulatorEnabled ? 'bg-pink-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">🎯</span>
                    <h3 className="font-extrabold text-2xl uppercase tracking-tight">Técnicas de concentración profunda</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    Para optimizar tu jornada y evitar la sobreestimulación mental:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-amber-50 border-2 border-black">
                      <ul className="space-y-1.5 text-xs font-bold font-mono">
                        <li>✔ Reducir distractores complejos (bloquear feeds, web blockers)</li>
                        <li>✔ Realizar una tarea cada vez (apagar por completo la multitarea)</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-amber-50 border-2 border-black">
                      <ul className="space-y-1.5 text-xs font-bold font-mono">
                        <li>✔ Alternar tiempos de trabajo y descanso activo</li>
                        <li>✔ Mantener espacios físicos organizados para rebajar ruido visual</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-[10px] opacity-70 font-bold font-mono">(Understood.org, 2022; Child Mind Institute, 2021)</p>
                </div>

              </div>
            )}

          </div>
        </section>

        {/* Section 5: Impacto en familia */}
        <section id="familia" className="space-y-8">
          <h2 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter ${simulatorEnabled ? 'bg-orange-400 text-black p-4 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1' : 'border-b-4 border-black pb-4'}`}>
            El impacto del TDAH en la familia
          </h2>
          <div className={`p-8 font-medium space-y-6 text-lg leading-relaxed ${simulatorEnabled ? 'bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : ''}`}>
            <p>
              El TDAH no afecta únicamente al menor, sino al conjunto del sistema familiar, influyendo en la organización, la comunicación y la gestión emocional del hogar (Centta, 2024).
            </p>
            <p>
              Las familias suelen asumir mayores niveles de supervisión, anticipación de dificultades y acompañamiento constante, lo que puede aumentar la sensación de agotamiento o estrés parental (Current Psychology, 2024).
            </p>
            <p>
              Además, la calidad de las dinámicas familiares puede influir en la manifestación de los síntomas, generándose una relación bidireccional entre el comportamiento del menor y las respuestas del entorno familiar (González Monzón, 2025).
            </p>
            
            <div className={`mt-8 p-6 ${simulatorEnabled ? 'bg-orange-100 border-l-8 border-orange-500' : 'border-t-2 border-black mt-4'}`}>
              <h3 className="font-bold text-2xl mb-4">¿Qué puede ayudar a las familias?</h3>
              <ul className="space-y-2 font-bold font-mono text-lg">
                <li>✔ Rutinas claras</li>
                <li>✔ Comunicación breve y positiva</li>
                <li>✔ Refuerzo positivo inmediato</li>
                <li>✔ Organización del entorno</li>
                <li>✔ Apoyo profesional cuando sea necesario</li>
              </ul>
            </div>
          </div>
        </section>

        </main>
      </div>

    </div>
  );
}
