import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';
import { TechniquesDictionary } from './InteractiveTechniques';
import { ProfileOption, AgeRangeOption } from '../types';

interface SectionEstrategiasProps {
  isOpen: boolean;
  onToggle: () => void;
  simulatorEnabled: boolean;
  selectedProfile: ProfileOption;
  selectedAgeRange: AgeRangeOption;
  setSelectedAgeRange: (ageRange: AgeRangeOption) => void;
}

export const SectionEstrategias: React.FC<SectionEstrategiasProps> = ({ 
  isOpen, 
  onToggle, 
  simulatorEnabled,
  selectedProfile,
  selectedAgeRange,
  setSelectedAgeRange
}) => {

  const renderStageSelector = () => (
    <div className="flex flex-wrap sm:grid sm:grid-cols-3 lg:grid-cols-6 border-4 border-black font-mono text-[10px] sm:text-xs bg-amber-100 p-2 sm:p-3 gap-2 sm:gap-3">
      {[
        { id: 'p1', label: '1º Ciclo Primaria (6-8)', color: 'bg-[#00FF41]' },
        { id: 'p2', label: '2º Ciclo Primaria (8-10)', color: 'bg-[#00FF41]' },
        { id: 'p3', label: '3º Ciclo Primaria (10-12)', color: 'bg-[#00FF41]' },
        { id: 'b1', label: '1º Ciclo Batxiller (16-17)', color: 'bg-[#FFFF00]' },
        { id: 'b2', label: '2º Ciclo Bachi (17-18)', color: 'bg-[#FFFF00]' },
        { id: 'a18', label: 'De 18 a 21 (18-21 años)', color: 'bg-pink-500', textColor: 'text-white' }
      ].map(stage => {
        const isSelected = selectedAgeRange === stage.id;
        const btnTextColor = stage.textColor || 'text-black';
        return (
          <button
            key={stage.id}
            type="button"
            onClick={() => setSelectedAgeRange(stage.id as AgeRangeOption)}
            className={`relative py-2.5 px-1 font-black text-center uppercase transition-all duration-150 cursor-pointer border-2 border-black flex-1 sm:flex-none flex items-center justify-center gap-1 min-w-[120px] sm:min-w-0 ${isSelected ? `${stage.color} ${btnTextColor} shadow-none translate-y-[2px] translate-x-[2px]` : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-100 hover:-translate-y-0.5 active:translate-y-[2px] active:translate-x-[2px] active:shadow-none'}`}
          >
            {isSelected && (
              <span className="absolute -left-1.5 -top-1.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
                <span className={`relative inline-flex h-3 w-3 ${stage.color} border border-black`}></span>
              </span>
            )}
            {stage.label}
          </button>
        );
      })}
    </div>
  );

  const isPrimaria = selectedAgeRange === 'p1' || selectedAgeRange === 'p2' || selectedAgeRange === 'p3';
  const isSecundaria = selectedAgeRange === 'b1' || selectedAgeRange === 'b2';
  const isAdulto = selectedAgeRange === 'a18';

  return (
    <CollapsibleSection
      id="estrategias"
      title={selectedProfile === 'usuario' ? "02. Estrategias de Autogestión" : "04. Estrategias de Autogestión"}
      isOpen={isOpen}
      onToggle={onToggle}
      simulatorEnabled={simulatorEnabled}
      bannerClass="bg-[#00FF41] text-black border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
    >
      <div className="space-y-6 bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
        <p className="text-xl font-medium">
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
                selectedAgeRange === 'p1' ? '👶 1º Ciclo Primaria (6-8 años)' : 
                selectedAgeRange === 'p2' ? '👶 2º Ciclo Primaria (8-10 años)' : 
                selectedAgeRange === 'p3' ? '👶 3º Ciclo Primaria (10-12 años)' : 
                selectedAgeRange === 'b1' ? '🎒 1º Ciclo Batxiller (16-17 años)' : 
                selectedAgeRange === 'b2' ? '🎒 2º Ciclo Bachi (17-18 años)' : 
                '🎓 De 18 a 21 años (18-21 años)'
              }
            </span>
          </div>
        </div>

        {renderStageSelector()}

        {/* Render Primaria Strategies */}
        {isPrimaria && (
          <div className="grid md:grid-cols-2 gap-8 relative z-10 animate-[fade-in_0.3s_ease]">
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
                <ul className="space-y-2 font-mono text-xs font-bold text-black">
                  <li className="flex items-center gap-2">✔ Agendas visuales</li>
                  <li className="flex items-center gap-2">✔ Horarios (con claves de color)</li>
                  <li className="flex items-center gap-2">✔ Dividir tareas largas en pasos pequeños</li>
                </ul>
              </div>
              <p className="text-[11px] italic text-gray-700 font-bold">Estas herramientas ayudan a anticipar actividades y organizar el tiempo de forma más eficiente (Understood.org, 2022).</p>
            </div>

            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-blue-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🗣️</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Autoinstrucciones</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Las autoinstrucciones consisten en enseñar al alumnado a verbalizar internamente los pasos de una tarea para favorecer el control cognitivo y reducir la impulsividad (Meichenbaum, 1977).</p>
              <div className="p-4 bg-amber-50 border-2 border-black font-bold font-mono text-black">
                  <p className="text-xs uppercase text-blue-700 mb-2 font-black">[ HABLA INTERNA GUIADA ]</p>
                  <ol className="list-decimal pl-4 space-y-2 text-xs">
                    <li>¿Qué tengo que hacer?</li>
                    <li>Lo hago paso a paso</li>
                    <li>Reviso mi trabajo</li>
                    <li>¿Lo he conseguido?</li>
                  </ol>
              </div>
            </div>

            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-green-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎈</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Regulación emocional</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Las técnicas de respiración y mindfulness favorecen la regulación emocional y ayudan a reducir la impulsividad y la ansiedad (Harvard Medical School, 2019).</p>
              <div className="p-4 bg-amber-50 border-2 border-black text-black">
                <h4 className="font-bold text-xs mb-2 uppercase text-green-700 font-mono">[ RESPIRACIÓN EN PRIMARIA ]</h4>
                <ul className="space-y-2 font-bold text-xs">
                  <li className="flex items-center gap-2">🎈 Respiración del globo (visualizar el vientre que se infla)</li>
                  <li className="flex items-center gap-2">🫁 Respiración diafragmática</li>
                </ul>
              </div>
              <p className="text-[11px] italic text-gray-700 font-bold">Estas prácticas contribuyen a mejorar la atención sostenida y el bienestar emocional (Greater Good Science Center; Mindful Schools).</p>
            </div>

            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-pink-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Técnicas de concentración</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Para favorecer la atención en la etapa de Primaria puede ser útil:</p>
              <div className="p-4 bg-amber-50 border-2 border-black text-black">
                <ul className="space-y-2 text-xs font-bold font-mono">
                  <li className="flex items-center gap-2">✔ Realizar una tarea cada vez</li>
                  <li className="flex items-center gap-2">✔ Reducir distractores complejos</li>
                  <li className="flex items-center gap-2">✔ Utilizar apoyos visuales</li>
                </ul>
              </div>
              <p className="text-[10px] opacity-70 font-bold mt-2 font-mono text-black">(Understood.org, 2022; Child Mind Institute, 2021)</p>
            </div>
          </div>
        )}

        {/* Render Secundaria/Bachillerato Strategies */}
        {isSecundaria && (
          <div className="grid md:grid-cols-2 gap-8 relative z-10 animate-[fade-in_0.3s_ease]">
            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-purple-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">📋</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Organización y planificación</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Las personas con TDAH suelen beneficiarse de herramientas externas que faciliten la organización y reduzcan la carga cognitiva (Centers for Disease Control and Prevention, 2023).</p>
              <div className="p-4 bg-amber-50 border-2 border-black text-black">
                <h4 className="font-bold text-xs mb-2 uppercase text-purple-700 font-mono">[ RECURSOS ÚTILES BACHILLERATO ]</h4>
                <ul className="space-y-2 font-mono text-xs font-bold">
                  <li className="flex items-center gap-2">✔ Listas de tareas (checklists)</li>
                  <li className="flex items-center gap-2">✔ Horarios estructurados</li>
                  <li className="flex items-center gap-2">✔ Agendas visuales</li>
                  <li className="flex items-center gap-2">✔ Dividir tareas largas en pasos pequeños</li>
                </ul>
              </div>
              <p className="text-[11px] italic text-gray-700 font-bold">Estas herramientas ayudan a anticipar actividades y organizar el tiempo de forma más eficiente (Understood.org, 2022).</p>
            </div>

            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-yellow-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⏱️</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Gestión del tiempo</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">El alumnado con TDAH puede presentar dificultades para estimar tiempos o iniciar tareas (Child Mind Institute, 2021).</p>
              <div className="p-4 bg-amber-50 border-2 border-black font-mono text-black">
                <h4 className="font-bold text-xs mb-2 uppercase text-yellow-600">[ TÉCNICA POMODORO ADAPTADA ]</h4>
                <ul className="space-y-2 text-xs font-bold">
                  <li className="flex items-center gap-2">⏱ 20–25 minutos de trabajo sostenido</li>
                  <li className="flex items-center gap-2">☕ Descanso breve (estirar / agua)</li>
                  <li className="flex items-center gap-2">🔁 Repetir ciclo</li>
                </ul>
              </div>
              <p className="text-[11px] italic text-gray-700 font-bold">Esta técnica ayuda a mejorar la atención sostenida y reducir la fatiga mental (Child Mind Institute, 2021).</p>
            </div>

            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-blue-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🗣️</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Autoinstrucciones</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Las autoinstrucciones consisten en enseñar al alumnado a verbalizar internamente los pasos de una tarea para favorecer el control cognitivo y reducir la impulsividad (Meichenbaum, 1977).</p>
              <div className="p-4 bg-amber-50 border-2 border-black font-bold font-mono text-black">
                  <p className="text-xs uppercase text-blue-700 mb-2 font-black">[ PASOS DE AUTOMONITOREO ]</p>
                  <ol className="list-decimal pl-4 space-y-1.5 text-xs">
                    <li>¿Qué tengo que hacer?</li>
                    <li>Lo hago paso a paso</li>
                    <li>Reviso mi trabajo</li>
                    <li>¿Lo he conseguido?</li>
                  </ol>
              </div>
            </div>

            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-green-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🧘</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Regulación emocional</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Las técnicas de respiración y mindfulness favorecen la regulación emocional y ayudan a reducir la impulsividad y la ansiedad (Harvard Medical School, 2019).</p>
              <div className="p-4 bg-amber-50 border-2 border-black text-black">
                <h4 className="font-bold text-xs mb-2 uppercase text-green-700 font-mono">[ PAUTAS EN SECUNDARIA ]</h4>
                <ul className="space-y-2 font-bold text-xs">
                  <li className="flex items-center gap-2">🧘 Respiración 4-4-6 (inhala 4s, retén 4s, exhala 6s)</li>
                  <li className="flex items-center gap-2">🫁 Respiración diafragmática</li>
                  <li className="flex items-center gap-2">🧠 Mindfulness breve antes de estudiar</li>
                </ul>
              </div>
              <p className="text-[11px] italic text-gray-700 font-bold">Estas prácticas contribuyen a mejorar la atención sostenida y el bienestar emocional (Greater Good Science Center; Mindful Schools).</p>
            </div>

            <div className={`p-6 md:col-span-2 space-y-4 ${simulatorEnabled ? 'bg-pink-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Técnicas de concentración</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Para favorecer la atención en tus sesiones escolares puede ser útil:</p>
              <div className="grid sm:grid-cols-2 gap-4 text-black">
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
              <p className="text-[10px] opacity-70 font-bold font-mono text-black">(Understood.org, 2022; Child Mind Institute, 2021)</p>
            </div>
          </div>
        )}

        {/* Render Adulto/18-21 Strategies */}
        {isAdulto && (
          <div className="grid md:grid-cols-2 gap-8 relative z-10 animate-[fade-in_0.3s_ease]">
            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-purple-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">✍️</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Planificación y Mitigación Cognitiva</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Las personas con TDAH suelen beneficiarse de herramientas externas que faciliten la organización y reduzcan la carga cognitiva (Centers for Disease Control and Prevention, 2023).</p>
              <div className="p-4 bg-amber-50 border-2 border-black text-black">
                <h4 className="font-bold text-xs mb-2 uppercase text-purple-700 font-mono">[ DIRECTRICES PARA LA EDAD ADULTA ]</h4>
                <ul className="space-y-2 font-mono text-xs font-bold">
                  <li className="flex items-center gap-2">✔ Listas de tareas (checklists) de alta prioridad</li>
                  <li className="flex items-center gap-2">✔ Dividir tareas largas en pasos pequeños (frenar parálisis)</li>
                  <li className="flex items-center gap-2">✔ Horarios explícitos de bloques de descompresión</li>
                </ul>
              </div>
              <p className="text-[11px] italic text-gray-700 font-bold">Estas herramientas ayudan a anticipar actividades y organizar el tiempo de forma más eficiente (Understood.org, 2022).</p>
            </div>

            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-yellow-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⏱️</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Gestión del tiempo y foco</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">El alumnado con TDAH puede presentar dificultades para estimar tiempos o iniciar tareas (Child Mind Institute, 2021).</p>
              <div className="p-4 bg-amber-50 border-2 border-black font-mono text-black">
                <h4 className="font-bold text-xs mb-2 uppercase text-yellow-600">[ CICLO POMODORO AUTÓNOMO ]</h4>
                <ul className="space-y-2 text-xs font-bold">
                  <li className="flex items-center gap-2">⏱ 20–25 minutos de labor de alta densidad</li>
                  <li className="flex items-center gap-2">☕ Descanso breve con movimiento activo o estiramiento</li>
                  <li className="flex items-center gap-2">🔁 Repetir ciclo</li>
                </ul>
              </div>
              <p className="text-[11px] italic text-gray-700 font-bold">Esta técnica ayuda a mejorar la atención sostenida y reducir la fatiga mental (Child Mind Institute, 2021).</p>
            </div>

            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-blue-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🗣️</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Autoinstrucciones avanzadas</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Las autoinstrucciones consisten en enseñar al alumnado a verbalizar internamente los pasos de una tarea para favorecer el control cognitivo y reducir la impulsividad (Meichenbaum, 1977).</p>
              <div className="p-4 bg-amber-50 border-2 border-black font-bold font-mono text-black">
                  <p className="text-xs uppercase text-blue-700 mb-2 font-black">[ PROTOCOLO DE CONDUCCIÓN COGNITIVA ]</p>
                  <ol className="list-decimal pl-4 space-y-2 text-xs">
                    <li>¿Qué tengo que hacer? (Definir el foco nuclear)</li>
                    <li>Lo hago paso a paso (Control de sobrecarga)</li>
                    <li>Reviso mi trabajo (Supervisar la deriva atencional)</li>
                    <li>¿Lo he conseguido? (Refuerzo metacognitivo positivo)</li>
                  </ol>
              </div>
            </div>

            <div className={`p-6 space-y-4 ${simulatorEnabled ? 'bg-green-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🧘</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Descompresión y Desactivación</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Las técnicas de respiración y mindfulness favorecen la regulación emocional y ayudan a reducir la impulsividad y la ansiedad (Harvard Medical School, 2019).</p>
              <div className="p-4 bg-amber-50 border-2 border-black text-black">
                <h4 className="font-bold text-xs mb-2 uppercase text-green-700 font-mono">[ REGULACIÓN FISIOLÓGICA ]</h4>
                <ul className="space-y-2 font-bold text-xs">
                  <li className="flex items-center gap-2">🧘 Respiración 4-4-6 (ideal para regular desbordes)</li>
                  <li className="flex items-center gap-2">🫁 Respiración diafragmática (control de cortisol)</li>
                  <li className="flex items-center gap-2">🧠 Mindfulness breve</li>
                </ul>
              </div>
              <p className="text-[11px] italic text-gray-700 font-bold">Estas prácticas contribuyen a mejorar la atención sostenida y el bienestar emocional (Greater Good Science Center; Mindful Schools).</p>
            </div>

            <div className={`p-6 md:col-span-2 space-y-4 ${simulatorEnabled ? 'bg-pink-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                <h3 className="font-extrabold text-2xl uppercase tracking-tight">Técnicas de concentración profunda</h3>
              </div>
              <p className="text-sm font-semibold text-gray-800">Para optimizar tu jornada y evitar la sobreestimulación mental:</p>
              <div className="grid sm:grid-cols-2 gap-4 text-black">
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
              <p className="text-[10px] opacity-70 font-bold font-mono text-black">(Understood.org, 2022; Child Mind Institute, 2021)</p>
            </div>
          </div>
        )}

        {selectedAgeRange && (
          <TechniquesDictionary selectedAgeRange={selectedAgeRange} />
        )}
      </div>
    </CollapsibleSection>
  );
};
