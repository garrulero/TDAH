import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';
import { DynamicText } from './DynamicText';

interface SectionQueEsProps {
  isOpen: boolean;
  onToggle: () => void;
  simulatorEnabled: boolean;
}

export const SectionQueEs: React.FC<SectionQueEsProps> = ({ isOpen, onToggle, simulatorEnabled }) => {
  return (
    <CollapsibleSection
      id="que-es"
      title="01. ¿Qué es el TDAH?"
      isOpen={isOpen}
      onToggle={onToggle}
      simulatorEnabled={simulatorEnabled}
      bannerClass="bg-black text-white border-pink-500 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] transform -rotate-1"
    >
      <div className={`p-8 font-medium space-y-6 text-lg leading-relaxed relative z-10 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black`}>
        <p>
          El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es un trastorno del neurodesarrollo caracterizado por dificultades persistentes relacionadas con la <DynamicText simulatorEnabled={simulatorEnabled} className={simulatorEnabled ? "bg-yellow-300 px-1 font-bold text-black" : "font-bold text-black"}>inatención, la hiperactividad y la impulsividad</DynamicText>, que interfieren en el funcionamiento diario y aparecen en diferentes contextos, como la escuela, el hogar o las relaciones sociales (American Psychiatric Association, 2022).
        </p>
        <p>
          El TDAH no afecta únicamente al rendimiento académico, sino también a la <DynamicText simulatorEnabled={simulatorEnabled} className={simulatorEnabled ? "bg-[#00FF41] px-1 font-bold text-black" : "font-bold text-black"}>regulación emocional, las habilidades sociales, la organización personal y el bienestar general</DynamicText> del alumnado (Barkley, 2015).
        </p>
        <div className={`p-6 mt-6 ${simulatorEnabled ? 'bg-pink-100 border-l-8 border-pink-500 border-2 border-black' : 'border-2 border-black bg-neutral-50'}`}>
          <h3 className="font-bold text-xl mb-4 text-black">El TDAH se manifiesta principalmente mediante:</h3>
          <ul className="space-y-3 font-bold text-base sm:text-lg text-black">
            <li className="flex gap-2"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Dificultad para mantener la atención de un modo prolongado</DynamicText></li>
            <li className="flex gap-2"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Problemas de secuenciación, organización y planificación de labores</DynamicText></li>
            <li className="flex gap-[11px]"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Impulsividad</DynamicText></li>
            <li className="flex gap-2"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Inquietud o hiperactividad motora constante</DynamicText></li>
            <li className="flex gap-2"><span>✔</span> <DynamicText simulatorEnabled={simulatorEnabled}>Dificultades relevantes en la gestión emocional y baja tolerancia a la frustración</DynamicText></li>
          </ul>
        </div>

        <div className="p-6 mt-6 border-2 border-black bg-yellow-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-black text-2xl mb-3 text-black uppercase tracking-tight">💡 El lado positivo: Fortalezas y Cualidades</h3>
          <p className="mb-4 text-lg font-medium text-black">
            Todos los cerebros son diferentes. El TDAH también viene acompañado de numerosas fortalezas y cualidades positivas que, bien canalizadas, resultan ser un gran potencial:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 font-bold text-base text-black">
            <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>✨</span> Alta creatividad e imaginación</li>
            <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>🧠</span> Pensamiento "fuera de la caja" o lateral</li>
            <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>🚀</span> Altos niveles de energía y entusiasmo</li>
            <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>❤️</span> Gran sensibilidad y empatía hacia otros</li>
            <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>🔍</span> Capacidad de "Hiperfoco" en temas de interés</li>
            <li className="flex items-center gap-2 p-3 bg-white border-2 border-black"><span>😄</span> Gran sentido del humor y espontaneidad</li>
          </ul>
        </div>

        <p className={`font-black p-4 mt-8 ${simulatorEnabled ? 'bg-black text-[#00FF41]' : 'border-4 border-black font-bold uppercase text-center bg-white text-black'}`}>
          El TDAH no es falta de esfuerzo, pereza o mala conducta, sino una condición de base neurobiológica y del desarrollo que requiere comprensión, empatía y apoyos adecuados (APA, 2022).
        </p>

        <div className="mt-8 border-4 border-black bg-cyan-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎬</span>
            <h3 className="font-black text-xl text-black uppercase tracking-tight">Ejemplo Práctico: Guion de Vídeo Explicativo (1º Ciclo)</h3>
          </div>
          <p className="mb-4 text-sm font-semibold text-black italic">
            ¿Cómo le explicamos el TDAH a un niño o niña de entre 6 y 8 años? A continuación puedes leer el guion adaptado de nuestro vídeo educativo:
          </p>

          <div className="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar bg-white p-4 border-2 border-black">
            <div className="p-3 bg-neutral-50 mb-2 border-2 border-dashed border-black">
              <h4 className="font-bold text-sm uppercase text-blue-800">ESCENA 1: PRESENTACIÓN</h4>
              <p className="text-xs text-neutral-600 mb-1">(Imagen de varios niños jugando y aprendiendo en clase)</p>
              <p className="text-[13px] font-bold text-black border-l-4 border-blue-500 pl-3">
                Narrador/a: ¿Sabías que todos los cerebros son diferentes? Algunos aprenden de una manera, otros de otra. ¡Y eso está muy bien! Hoy vamos a conocer algo llamado TDAH.
              </p>
            </div>

            <div className="p-3 bg-neutral-50 mb-2 border-2 border-dashed border-black">
              <h4 className="font-bold text-sm uppercase text-blue-800">ESCENA 2: ¿QUÉ ES EL TDAH?</h4>
              <p className="text-xs text-neutral-600 mb-1">(Aparece un personaje infantil simpático)</p>
              <p className="text-[13px] font-bold text-black border-l-4 border-blue-500 pl-3">
                Narrador/a: Los niños y niñas con TDAH tienen un cerebro que funciona de una forma un poco diferente. A veces les cuesta más prestar atención, esperar su turno o quedarse quietos durante mucho tiempo. Pero eso no significa que no quieran hacerlo bien.
              </p>
            </div>

            <div className="p-3 bg-neutral-50 mb-2 border-2 border-dashed border-black">
              <h4 className="font-bold text-sm uppercase text-blue-800">ESCENA 3: ¿CÓMO SE PUEDE SENTIR UN NIÑO O NIÑA CON TDAH?</h4>
              <p className="text-xs text-neutral-600 mb-1">(Se muestran situaciones cotidianas)</p>
              <div className="text-[13px] font-bold text-black border-l-4 border-blue-500 pl-3">
                Narrador/a: Algunas veces pueden:
                <ul className="list-disc ml-5 mt-1">
                  <li>Distraerse fácilmente.</li>
                  <li>Olvidar cosas o perder materiales.</li>
                  <li>Tener muchas ganas de moverse.</li>
                  <li>Hablar o actuar antes de pensar.</li>
                  <li>Sentir emociones muy fuertes, como enfado, alegría o tristeza.</li>
                </ul>
                Y todo eso puede hacer que algunas tareas sean más difíciles.
              </div>
            </div>

            <div className="p-3 bg-neutral-50 mb-2 border-2 border-dashed border-black">
              <h4 className="font-bold text-sm uppercase text-blue-800">ESCENA 4: SUS FORTALEZAS</h4>
              <p className="text-xs text-neutral-600 mb-1">(El personaje realiza actividades que le gustan)</p>
              <p className="text-[13px] font-bold text-black border-l-4 border-blue-500 pl-3">
                Narrador/a: Pero los niños y niñas con TDAH también tienen muchas cualidades. Pueden ser muy creativos, curiosos, divertidos, imaginativos y tener ideas increíbles. Cada persona es diferente y tiene muchas cosas buenas que aportar.
              </p>
            </div>

             <div className="p-3 bg-neutral-50 mb-2 border-2 border-dashed border-black">
              <h4 className="font-bold text-sm uppercase text-blue-800">ESCENA 5: MENSAJE IMPORTANTE</h4>
              <p className="text-xs text-neutral-600 mb-1">(El personaje mira a cámara acompañado de amigos)</p>
              <p className="text-[13px] font-bold text-black border-l-4 border-blue-500 pl-3">
                Narrador/a: Recuerda algo muy importante: Tener TDAH no significa ser vago, ni portarse mal, ni no esforzarse. Simplemente significa que su cerebro funciona de una manera diferente y que, a veces, necesita un poco más de ayuda y comprensión.
              </p>
            </div>

            <div className="p-3 bg-neutral-50 mb-2 border-2 border-dashed border-black">
              <h4 className="font-bold text-sm uppercase text-blue-800">ESCENA 6: CIERRE</h4>
              <p className="text-xs text-neutral-600 mb-1">(Grupo de niños jugando juntos)</p>
              <p className="text-[13px] font-bold text-black border-l-4 border-blue-500 pl-3">
                Narrador/a: Todos somos diferentes y todos aprendemos de maneras distintas. Cuando nos ayudamos, nos respetamos y nos comprendemos, hacemos que la escuela sea un lugar mejor para todos.<br/><br/>
                <span className="font-black italic block text-center uppercase text-pink-600 bg-pink-50 p-2 mt-2">"Cada cerebro es único. ¡La diversidad nos hace especiales!"</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </CollapsibleSection>
  );
};
