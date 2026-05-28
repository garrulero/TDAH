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
  const [simulatorEnabled, setSimulatorEnabled] = useState(true);
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
      {/* Control Panel Toggle */}
      <div className="fixed bottom-8 right-8 z-[500] flex flex-col items-end gap-2">
         <div className={`p-4 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono text-[10px] uppercase space-y-2 transition-colors duration-500 ${simulatorEnabled ? 'bg-black text-white border-pink-500 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)]' : 'bg-white text-black border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'}`}>
            <div className="flex justify-between items-center gap-4">
               <span>MODO_SIMULACIÓN</span>
               <button 
                 onClick={() => setSimulatorEnabled(!simulatorEnabled)}
                 className={`w-12 h-6 border-2 relative transition-all duration-300 ${simulatorEnabled ? 'bg-pink-500 border-white' : 'bg-black border-black'}`}
               >
                 <div className={`absolute top-0 w-5 h-5 transition-all duration-300 ${simulatorEnabled ? 'right-0 bg-white' : 'left-0 bg-white'}`} />
               </button>
            </div>
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

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-purple-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border-2 border-black'}`}>
                <h3 className="font-bold text-2xl">Organización y planificación</h3>
                <p>Las personas con TDAH suelen beneficiarse de herramientas externas que faciliten la organización y reduzcan la carga cognitiva (Centers for Disease Control and Prevention, 2023).</p>
                <div className={`p-4 ${simulatorEnabled ? 'bg-white border-2 border-black' : 'border-t border-black'}`}>
                  <h4 className="font-bold text-sm mb-2 uppercase">Recursos útiles</h4>
                  <ul className="space-y-1 font-mono text-sm font-bold">
                    <li>✔ Agendas visuales</li>
                    <li>✔ Horarios</li>
                    <li>✔ Listas de tareas (checklists)</li>
                    <li>✔ Dividir tareas largas en pasos pequeños</li>
                  </ul>
                </div>
                <p className="text-sm italic">Estas herramientas ayudan a anticipar actividades y organizar el tiempo de forma más eficiente (Understood.org, 2022).</p>
              </div>

              <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-yellow-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border-2 border-black'}`}>
                <h3 className="font-bold text-2xl">Gestión del tiempo</h3>
                <p>El alumnado con TDAH puede presentar dificultades para estimar tiempos o iniciar tareas (Child Mind Institute, 2021).</p>
                <div className={`p-4 font-mono ${simulatorEnabled ? 'bg-black text-white border-2 border-black' : 'border-t border-black'}`}>
                  <h4 className={`font-bold text-sm mb-2 uppercase ${simulatorEnabled ? 'text-yellow-300' : ''}`}>Técnica Pomodoro adaptada</h4>
                  <ul className="space-y-2">
                    <li>⏱ 20–25 minutos de trabajo</li>
                    <li>☕ Descanso breve</li>
                    <li>🔁 Repetir</li>
                  </ul>
                </div>
                <p className="text-sm italic">Esta técnica ayuda a mejorar la atención sostenida y reducir la fatiga mental (Child Mind Institute, 2021).</p>
              </div>

              <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-blue-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border-2 border-black'}`}>
                <h3 className="font-bold text-2xl">Autoinstrucciones</h3>
                <p>Las autoinstrucciones consisten en enseñar al alumnado a verbalizar internamente los pasos de una tarea para favorecer el control cognitivo y reducir la impulsividad (Meichenbaum, 1977).</p>
                <div className={`p-4 ${simulatorEnabled ? 'bg-white border-2 border-black font-bold font-mono' : 'border-t border-black'}`}>
                   <p className="text-xs uppercase opacity-70 mb-2">Ejemplo:</p>
                   <ol className="list-decimal pl-4 space-y-1">
                     <li>¿Qué tengo que hacer?</li>
                     <li>Lo hago paso a paso</li>
                     <li>Reviso mi trabajo</li>
                     <li>¿Lo he conseguido?</li>
                   </ol>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`p-6 ${simulatorEnabled ? 'bg-green-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border-2 border-black'}`}>
                  <h3 className="font-bold text-xl mb-2">Regulación emocional</h3>
                  <p className="text-sm mb-4">Las técnicas de respiración y mindfulness favorecen la regulación emocional y ayudan a reducir la impulsividad y la ansiedad (Harvard Medical School, 2019).</p>
                  <ul className="text-sm space-y-1 font-bold">
                    <li>🫁 Respiración diafragmática</li>
                    <li>🫁 Respiración 4-4-6</li>
                    <li>🫁 Respiración del globo</li>
                    <li>🧠 Mindfulness breve</li>
                  </ul>
                  <p className="text-xs mt-3 opacity-70">(Greater Good Science Center; Mindful Schools)</p>
                </div>

                <div className={`p-6 ${simulatorEnabled ? 'bg-pink-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border-2 border-black'}`}>
                  <h3 className="font-bold text-xl mb-2">Técnicas de concentración</h3>
                  <p className="text-sm mb-4">Para favorecer la atención puede ser útil:</p>
                  <ul className="text-sm space-y-1 font-bold">
                    <li>✔ Realizar una tarea cada vez</li>
                    <li>✔ Reducir distractores</li>
                    <li>✔ Mantener espacios organizados</li>
                    <li>✔ Alternar tiempos de trabajo y descanso</li>
                    <li>✔ Utilizar apoyos visuales</li>
                  </ul>
                  <p className="text-xs mt-3 opacity-70">(Understood.org, 2022; Child Mind Institute, 2021)</p>
                </div>
              </div>
            </div>
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
