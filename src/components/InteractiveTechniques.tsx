import React, { useState } from "react";
import { AgeRangeOption } from "../types";
import { TechniqueSessionModal } from "./TechniqueSessionModal";

export const generalesParams = [
  {
    title: "Autoinstrucciones",
    desc: "Enseñar a la persona a guiar su propio comportamiento mediante mensajes internos o verbalizaciones que le ayuden a organizar la acción y controlar impulsos. Se aplican enseñando una secuencia de frases breves que orientan la tarea.",
    steps: [
      "El adulto modela el proceso verbalizando los pasos (“Primero leo la actividad, después pienso qué tengo que hacer…”).",
      "La persona realiza la tarea siguiendo instrucciones externas.",
      "Posteriormente verbaliza en voz alta las instrucciones.",
      "Finalmente interioriza el lenguaje hasta hacerlo de manera mental.",
    ],
    example: "“Paro – pienso – hago – reviso”.",
  },
  {
    title: "Organización y planificación",
    desc: "Anticipar y estructurar las tareas para reducir la improvisación y aumentar el control sobre las actividades.",
    steps: [
      "Identificar las tareas o responsabilidades.",
      "Ordenar según prioridad o dificultad.",
      "Establecer pasos concretos para realizarlas.",
      "Utilizar agendas, horarios o listas visuales.",
    ],
    example:
      "Dividir una tarde de estudio en bloques concretos de actividades.",
  },
  {
    title: "Gestión del tiempo",
    desc: "Permite aprender a distribuir adecuadamente el tiempo disponible para evitar saturación o procrastinación.",
    steps: [
      "Estimar cuánto tiempo requiere cada tarea.",
      "Establecer tiempos limitados.",
      "Alternar trabajo y pausas.",
      "Usar relojes, temporizadores o alarmas visuales.",
    ],
    example: "Trabajar 20 minutos y descansar 5.",
  },
  {
    title: "Autoevaluación",
    desc: "Consiste en enseñar a valorar el propio desempeño para aumentar la conciencia sobre el trabajo realizado.",
    steps: [
      "Establecer objetivos claros.",
      "Tras la actividad se revisa el resultado.",
      "Analizar errores y logros.",
      "Proponer mejoras.",
    ],
    example:
      "Preguntas guía: ¿He terminado la tarea? ¿Qué he hecho bien? ¿Qué puedo mejorar?",
  },
  {
    title: "Refuerzo positivo",
    desc: "Aumentar la probabilidad de una conducta adecuada ofreciendo una consecuencia agradable tras realizarla.",
    steps: [
      "Identificar la conducta deseada.",
      "Reforzar inmediatamente cuando aparece.",
      "Utilizar elogios, privilegios o recompensas significativas.",
      "Reducir progresivamente la frecuencia del refuerzo.",
    ],
    example: "“Has empezado la tarea enseguida, ¡muy bien!”",
  },
  {
    title: "Organización del entorno",
    desc: "Busca minimizar distractores y favorecer un espacio adecuado para la tarea.",
    steps: [
      "Mantener el espacio ordenado.",
      "Eliminar objetos distractores.",
      "Tener solo el material necesario.",
      "Elegir un lugar con iluminación y ruido adecuados.",
    ],
  },
];

export const relajacionParams = [
  {
    title: "Respiración diafragmática",
    desc: "Consiste en respirar utilizando el abdomen en lugar del pecho para favorecer la relajación.",
    steps: [
      "Colocar una mano en el pecho y otra en el abdomen.",
      "Inspirar lentamente por la nariz inflando el abdomen.",
      "Mantener unos segundos.",
      "Expulsar el aire lentamente por la boca.",
    ],
    durations: [3, 4, 3, 5],
    repetitions: 3,
  },
  {
    title: "Respiración 4-4-6",
    desc: "Ayuda a disminuir activación fisiológica.",
    steps: [
      "Inspirar durante 4 segundos.",
      "Mantener el aire 4 segundos.",
      "Expulsarlo lentamente durante 6 segundos.",
      "Repetir varias veces.",
    ],
    durations: [4, 4, 6, 2],
    repetitions: 3,
  },
  {
    title: "Respiración cuadrada",
    desc: "Favorece concentración y regulación emocional.",
    steps: [
      "Inspirar 4 segundos.",
      "Mantener 4 segundos.",
      "Expulsar 4 segundos.",
      "Esperar 4 segundos antes de volver a empezar.",
    ],
    durations: [4, 4, 4, 4],
    repetitions: 3,
    example: "Se visualiza imaginando un cuadrado.",
  },
  {
    title: "Respiración del globo",
    desc: "Técnica especialmente útil con niños.",
    steps: [
      "Imaginar que el abdomen es un globo.",
      "Inspirar “hinchando el globo”.",
      "Soltar el aire lentamente “desinflándolo”.",
    ],
    durations: [3, 4, 5],
    repetitions: 3,
  },
  {
    title: "Respiración de la vela",
    desc: "Favorece el control de la intensidad respiratoria.",
    steps: [
      "Imaginar una vela delante.",
      "Inspirar profundamente.",
      "Soplar lentamente sin apagarla de golpe.",
    ],
    durations: [3, 4, 5],
    repetitions: 3,
  },
  {
    title: "Respiración 4-7-8",
    desc: "Útil para disminuir ansiedad.",
    steps: [
      "Inspirar durante 4 segundos.",
      "Mantener la respiración 7 segundos.",
      "Expulsar lentamente el aire durante 8 segundos.",
    ],
    durations: [4, 7, 8],
    repetitions: 3,
  },
  {
    title: "Respiración tortuga",
    desc: "Busca reducir impulsividad.",
    steps: [
      "Imaginar que la tortuga entra en su caparazón.",
      "Parar el movimiento corporal.",
      "Respirar profundamente varias veces.",
      "Salir cuando el cuerpo esté calmado.",
    ],
    durations: [4, 3, 6, 3],
    repetitions: 3,
  },
  {
    title: "Mindfulness",
    desc: "Consiste en focalizar la atención en el momento presente sin juzgar.",
    steps: [
      "Buscar un lugar tranquilo.",
      "Concentrarse en la respiración.",
      "Observar pensamientos o sensaciones sin reaccionar.",
      "Volver a centrar la atención cuando aparezcan distracciones.",
    ],
    example:
      "Prestar atención durante unos minutos únicamente a cómo entra y sale el aire.",
    durations: [5, 10, 10, 10],
  },
];

export const concentracionParams = [
  {
    title: "Trabajo por intervalos cortos (Pomodoro)",
    desc: "Permite mantener la atención durante tiempos breves.",
    steps: [
      "Elegir una tarea.",
      "Trabajar 20–25 minutos.",
      "Descansar 5 minutos.",
      "Repetir ciclos.",
    ],
  },
  {
    title: "Una tarea a la vez",
    desc: "Evita la sobrecarga atencional.",
    steps: [
      "Elegir solo una actividad.",
      "Retirar tareas secundarias.",
      "Finalizar antes de comenzar otra.",
    ],
  },
  {
    title: "Externalización de la atención (Checklist)",
    desc: "Ayuda a mantener el foco usando apoyos externos.",
    steps: [
      "Elaborar una lista de pasos.",
      "Ir marcando cada tarea completada.",
      "Revisar el progreso.",
    ],
  },
  {
    title: "Fragmentación de tareas",
    desc: "Reduce sensación de dificultad.",
    steps: [
      "Dividir la tarea en pasos pequeños.",
      "Completar un paso cada vez.",
      "Reforzar avances parciales.",
    ],
    example: "Trabajo → buscar información → escribir introducción → revisar.",
  },
  {
    title: "Control del entorno",
    desc: "Reduce distractores externos.",
    steps: [
      "Apagar notificaciones.",
      "Limitar pantallas innecesarias.",
      "Trabajar en un lugar tranquilo.",
    ],
  },
  {
    title: "Estimulación auditiva controlada",
    desc: "Ayuda a bloquear distracciones sonoras usando ruidos blancos.",
    steps: [
      "Usar sonidos constantes (lluvia, ventilador, ruido blanco).",
      "Mantener volumen bajo.",
      "Comprobar si mejora la concentración.",
    ],
  },
  {
    title: "Técnicas de inicio rápido",
    desc: "Buscan reducir la evitación de tareas.",
    steps: [
      "Comprometerse a trabajar solo 2–5 minutos.",
      "Empezar sin pensar en terminar.",
      "Mantener el trabajo si aumenta la motivación.",
    ],
  },
  {
    title: "Apoyos visuales",
    desc: "Facilitan organización y comprensión.",
    steps: [
      "Utilizar esquemas, pictogramas o listas.",
      "Colocar recordatorios visibles.",
      "Señalar pasos o tiempos.",
    ],
  },
  {
    title: "Alternar tarea con descanso",
    desc: "Reduce la fatiga mental.",
    steps: [
      "Establecer periodos breves de trabajo.",
      "Introducir descansos cortos.",
      "Realizar actividades reguladoras durante la pausa (Ejemplo: estirarse, beber agua o caminar).",
    ],
  },
  {
    title: "Respiración antes de iniciar una tarea",
    desc: "Ayuda a preparar el cerebro para concentrarse.",
    steps: [
      "Detenerse un momento antes de empezar.",
      "Realizar 3–5 respiraciones profundas.",
      "Repetir mentalmente qué se va a hacer.",
      "Iniciar la actividad.",
    ],
  },
];

interface TechniquesDictionaryProps {
  selectedAgeRange: AgeRangeOption;
}

export const TechniquesDictionary: React.FC<TechniquesDictionaryProps> = ({
  selectedAgeRange,
}) => {
  const [activeTab, setActiveTab] = useState<
    "generales" | "relajacion" | "concentracion"
  >("relajacion");
  const [sessionModalOpen, setSessionModalOpen] = useState(false);
  const [selectedTechnique, setSelectedTechnique] = useState<any | null>(null);

  const tabs = [
    { id: "generales", label: "Técnicas Generales", icon: "🧠" },
    { id: "relajacion", label: "Técnicas de Relajación", icon: "🧘" },
    { id: "concentracion", label: "Técnicas de Concentración", icon: "🎯" },
  ];

  const getAdaptationModifierText = () => {
    if (['p1', 'p2', 'p3'].includes(selectedAgeRange || '')) {
      return "(ADAPTACIÓN PRIMARIA: Instrucciones cortas, uso de apoyos visuales muy claros y mantener tareas breves en forma de juego. El adulto guía gran parte del proceso).";
    } else if (['e1', 'e2', 'b1'].includes(selectedAgeRange || '')) {
      return "(ADAPTACIÓN SECUNDARIA/BACHILLER OBLIGATORIO: Fomentar que el adolescente tome la iniciativa en la planificación, usar herramientas digitales y calendarios con el adulto como supervisor distante).";
    } else if (selectedAgeRange === 'a18') {
      return "(ADAPTACIÓN ADULTO: Enfoque 100% en autonomía. Uso proactivo de bloqueadores de sitios web, agendas complejas y alarmas personales de prevención de hiperfoco).";
    }
    return "";
  };

  const adaptItem = (item: any) => ({
    ...item,
    desc: `${item.desc} ${getAdaptationModifierText()}`
  });

  const getData = () => {
    if (activeTab === "generales") return generalesParams.map(adaptItem);
    if (activeTab === "relajacion") return relajacionParams.map(adaptItem);
    return concentracionParams.map(adaptItem);
  };

  const getAdaptationText = () => {
    switch (selectedAgeRange) {
      case "p1":
        return "Adaptado para el 1º Ciclo (6-8 años): Fomentar el componente lúdico, las metáforas visuales (como el globo o la vela) y mantener los pasos muy cortos y guiados por el adulto.";
      case "p2":
        return "Adaptado para el 2º Ciclo (8-10 años): Reafirmar la autonomía apoyándose en registros visuales, comenzar a nombrar las emociones de forma directa e internalizar las autoinstrucciones.";
      case "p3":
        return "Adaptado para el 3º Ciclo (10-12 años): Mayor independencia en la ejecución de las técnicas de estudio, delegar el control del Pomodoro al alumno.";
      case "b1":
        return 'Adaptado para Bachiller: Aumentar la responsabilidad del estudiante, integrar mindfulness en el estudio intenso y usar "Checklists" digitales.';
      case "e1":
      case "e2":
        return "Adaptado para Secundaria: Transicionar hacia el autoconocimiento, enseñándoles a gestionar su propio tiempo y reconocer emociones.";
      case "a18":
        return 'Adaptado para Adultos (18-21 años): Orientado al autoconocimiento, prevención del "Burnout" académico, limitación proactiva del entorno digital y autorregulación activa.';
      default:
        return "Recursos adaptativos en base a la edad.";
    }
  };

  return (
    <div className="mt-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
      <div className="p-4 sm:p-6 border-b-4 border-black bg-amber-50">
        <h3 className="font-black text-2xl uppercase tracking-tight mb-2">
          📒 Diccionario de Técnicas y Recursos
        </h3>
        <p className="text-base font-semibold leading-relaxed max-w-2xl text-neutral-800">
          A continuación se presenta un repositorio práctico con todas las
          técnicas clave necesarias.
        </p>
        <div className="mt-4 p-3 bg-[#00FF41]/20 border-2 border-black inline-block font-mono text-[10px] sm:text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {getAdaptationText()}
        </div>
      </div>

      <div className="flex border-b-4 border-black overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() =>
              setActiveTab(
                tab.id as "generales" | "relajacion" | "concentracion",
              )
            }
            className={`flex-1 min-w-[150px] p-3 sm:p-4 text-xs sm:text-sm font-black uppercase text-center border-r-4 border-black last:border-r-0 transition-colors ${activeTab === tab.id ? "bg-black text-[#00FF41]" : "bg-white text-black hover:bg-neutral-100"}`}
          >
            <span className="block text-xl mb-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-6 bg-white space-y-6 max-h-[600px] overflow-y-auto">
        {getData().map((item, index) => (
          <div
            key={index}
            className="p-5 border-4 border-black bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row justify-between gap-6"
          >
            <div className="flex-1">
              <h4 className="text-xl font-black uppercase text-black mb-2">
                {item.title}
              </h4>
              <p className="text-sm font-bold text-gray-700 mb-4">
                {item.desc}
              </p>

              <div className="bg-white border-2 border-black p-4 mb-3">
                <h5 className="font-mono text-xs font-black uppercase mb-2 text-blue-700">
                  [ CÓMO SE REALIZA ]
                </h5>
                <ol className="list-decimal pl-5 space-y-1">
                  {item.steps.map((step, idx) => (
                    <li key={idx} className="text-[13px] font-bold">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {item.example && (
                <div className="bg-yellow-100 border-2 border-black p-3 font-mono text-xs font-bold text-black flex gap-2">
                  <span className="shrink-0 uppercase text-yellow-700">
                    Ejemplo:
                  </span>
                  <span>{item.example}</span>
                </div>
              )}
            </div>

            <div className="shrink-0 flex items-center justify-center lg:items-start lg:border-l-4 lg:border-black lg:pl-6">
              <button
                onClick={() => {
                  setSelectedTechnique(item);
                  setSessionModalOpen(true);
                }}
                className="bg-black text-[#00FF41] hover:bg-neutral-800 border-4 border-black px-6 py-4 uppercase tracking-wider font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex xl:flex-col items-center gap-2 lg:gap-4 w-full lg:w-40"
              >
                <span className="text-2xl mt-1 lg:mt-4">▶</span>
                <span className="text-center text-sm lg:text-base">
                  INICIAR
                  <br className="hidden xl:block" /> SESIÓN
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <TechniqueSessionModal
        isOpen={sessionModalOpen}
        onClose={() => setSessionModalOpen(false)}
        technique={selectedTechnique}
        category={activeTab}
        selectedAgeRange={selectedAgeRange}
      />
    </div>
  );
};
