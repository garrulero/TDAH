import React, { useState } from "react";
import { CollapsibleSection } from "./CollapsibleSection";
import { ProfileOption, AgeRangeOption } from "../types";
import {
  generalesParams,
  relajacionParams,
  concentracionParams,
} from "./InteractiveTechniques";
import { TechniqueSessionModal } from "./TechniqueSessionModal";
import { adaptDescription, adaptSteps } from "../lib/adaptations";

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
  setSelectedAgeRange,
}) => {
  const [openStrategy, setOpenStrategy] = useState<string | null>(null);
  const [sessionModalOpen, setSessionModalOpen] = useState(false);
  const [selectedTechnique, setSelectedTechnique] = useState<any | null>(null);

  const renderStageSelector = () => (
    <div className="flex flex-wrap sm:grid sm:grid-cols-3 lg:grid-cols-6 border-4 border-black font-mono text-[10px] sm:text-xs bg-amber-100 p-2 sm:p-3 gap-2 sm:gap-3">
      {[
        { id: "p1", label: "1º Ciclo Primaria (6-8)", color: "bg-[#00FF41]" },
        { id: "p2", label: "2º Ciclo Primaria (8-10)", color: "bg-[#00FF41]" },
        { id: "p3", label: "3º Ciclo Primaria (10-12)", color: "bg-[#00FF41]" },
        { id: "e1", label: "1ª Etapa ESO (12-14)", color: "bg-[#FFFF00]" },
        { id: "e2", label: "2ª Etapa ESO (14-16)", color: "bg-[#FFFF00]" },
        { id: "b1", label: "Bachiller (16-18)", color: "bg-[rgb(56,189,248)]" },
        {
          id: "a18",
          label: "Adulto (18+)",
          color: "bg-pink-500",
          textColor: "text-white",
        },
      ].map((stage) => {
        const isSelected = selectedAgeRange === stage.id;
        const btnTextColor = stage.textColor || "text-black";
        return (
          <button
            key={stage.id}
            type="button"
            onClick={() => setSelectedAgeRange(stage.id as AgeRangeOption)}
            className={`relative py-2.5 px-1 font-black text-center uppercase transition-all duration-150 cursor-pointer border-2 border-black flex-1 sm:flex-none flex items-center justify-center gap-1 min-w-[120px] sm:min-w-0 ${isSelected ? `${stage.color} ${btnTextColor} shadow-none translate-y-[2px] translate-x-[2px]` : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-100 hover:-translate-y-0.5 active:translate-y-[2px] active:translate-x-[2px] active:shadow-none"}`}
          >
            {isSelected && (
              <span className="absolute -left-1.5 -top-1.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
                <span
                  className={`relative inline-flex h-3 w-3 ${stage.color} border border-black`}
                ></span>
              </span>
            )}
            {stage.label}
          </button>
        );
      })}
    </div>
  );

  const toggleStrategy = (title: string) => {
    setOpenStrategy((prev) => (prev === title ? null : title));
  };

  const getAdaptationText = () => {
    switch (selectedAgeRange) {
      case "p1":
        return "Adaptado para niños de 6 a 8 años: Fomentar el componente lúdico, hacerlo divertido y mantener las pausas muy cortas.";
      case "p2":
        return "Adaptado para niños de 8 a 10 años: Reforzar la autonomía y empezar a nombrar las emociones de forma directa.";
      case "p3":
        return "Adaptado para niños de 10 a 12 años: Mayor independencia y control sobre sus propios tiempos y tareas.";
      case "e1":
        return "Adaptado para 12 a 14 años: Apoyar el autoconocimiento y la gestión de la agenda escolar activa.";
      case "e2":
        return "Adaptado para 14 a 16 años: Delegar la responsabilidad del entorno, fomentando herramientas digitales.";
      case "b1":
        return "Adaptado para Bachillerato (16-18 años): Orientado al estudio intenso y uso de descansos estratégicos reales.";
      case "a18":
        return "Adaptado para Adultos (18-21 años): Orientado al autoconocimiento, control de estrés y autonomía total.";
      default:
        return "Selecciona una etapa para adaptar el lenguaje.";
    }
  };

  const getAdaptationModifierText = () => {
    return ""; // handled natively
  };

  const adaptItem = (item: any) => ({
    ...item,
    desc: adaptDescription(item.title, item.desc, selectedAgeRange),
    steps: adaptSteps(item.steps, selectedAgeRange)
  });

  const allStrategies = [
    ...generalesParams.map(adaptItem).map((item) => ({ ...item, isGroup: false })),
    { title: "Técnicas de relajación", isGroup: true, items: relajacionParams.map(adaptItem) },
    {
      title: "Técnicas de concentración",
      isGroup: true,
      items: concentracionParams.map(adaptItem),
    },
  ];

  return (
    <CollapsibleSection
      id="estrategias"
      title={
        selectedProfile === "usuario"
          ? "02. Estrategias de Autogestión"
          : "04. Estrategias de Autogestión"
      }
      isOpen={isOpen}
      onToggle={onToggle}
      simulatorEnabled={simulatorEnabled}
      bannerClass="bg-[#00FF41] text-black border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
    >
      <div className="space-y-6 bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
        <p className="text-xl font-medium">
          Las estrategias de autogestión ayudan a desarrollar habilidades de
          organización, atención y regulación emocional, favoreciendo una mayor
          autonomía en el día a día.
        </p>

        {selectedProfile === "padre" && (
          <div className="p-4 bg-orange-100 border-2 border-black font-semibold text-lg mb-6">
            Como familia, vuestro rol no es ser los directores de cada tarea,
            sino los guías que facilitan el entorno. Ayudar a implementar estas
            estrategias en casa fomenta la autonomía de vuestro hijo o hija y
            reduce los conflictos diarios. Revisad juntos estas opciones y
            comprobad cuáles os funcionan mejor.
          </div>
        )}

        {selectedProfile === "usuario" && (
          <div className="p-4 bg-amber-50 border-2 border-black text-sm font-bold font-mono">
            {getAdaptationText()}
          </div>
        )}

        {renderStageSelector()}

        <div className="mt-8 space-y-4">
          {allStrategies.map((strategy, idx) => (
            <div key={idx} className="border-4 border-black bg-white">
              <button
                onClick={() => setOpenStrategy(openStrategy === strategy.title ? null : strategy.title)}
                className="w-full p-4 flex items-center justify-between hover:bg-neutral-100 transition-colors text-left font-black uppercase text-lg sm:text-xl tracking-tight cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-pink-600">{idx + 1}.</span>{" "}
                  {strategy.title}
                </div>
                <span className="font-mono text-sm bg-black text-[#00FF41] px-2 py-1 shrink-0">
                  {openStrategy === strategy.title ? "CERRAR [-]" : "VER [+]"}
                </span>
              </button>

              {openStrategy === strategy.title && (
                <div className="p-4 sm:p-6 md:p-8 border-t-4 border-black bg-neutral-50 animate-[fade-in_0.2s_ease]">
                  {!strategy.isGroup ? (
                    <div>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-6">
                        {strategy.desc}
                      </p>
                      
                      {selectedProfile === "padre" && (
                        <div className="bg-orange-100 p-4 sm:p-6 border-4 border-black mb-8">
                          <h4 className="font-black uppercase text-xl text-orange-700 mb-3">
                            ¿Cómo ayudar desde casa?
                          </h4>
                          <p className="font-medium text-base sm:text-lg">
                            Guía el proceso haciéndolo tú primero (modelado) y
                            luego deja que lo intenten ellos. Reduce tu ayuda
                            progresivamente, ofreciendo apoyo visual en lugar de
                            recordarlo todo verbalmente.
                          </p>
                        </div>
                      )}
                      
                      <div className="bg-neutral-50 border-4 border-black p-4 sm:p-8 mb-8">
                        <h4 className="font-black font-mono text-lg sm:text-xl uppercase mb-6 bg-black text-[#00FF41] inline-block px-4 py-2">
                          Pasos a seguir:
                        </h4>
                        <ul className="list-decimal pl-6 font-bold text-base sm:text-lg space-y-4">
                          {(strategy as any).steps?.map((step: string, sIdx: number) => (
                            <li key={sIdx} className="pl-2">{step}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {(strategy as any).example && (
                        <div className="bg-yellow-100 p-4 sm:p-6 border-4 border-black font-mono text-base sm:text-lg font-bold">
                          <span className="text-xl mr-2">💡</span> EJEMPLO: {(strategy as any).example}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <p className="font-medium text-lg sm:text-xl bg-cyan-100 border-4 border-black p-4">
                        Haz clic en "Iniciar Sesión" para abrir el reproductor y
                        guiar tu práctica paso a paso.
                      </p>
                      <div className="grid gap-6">
                        {(strategy as any).items.map((subItem: any, subIdx: number) => (
                          <div
                            key={subIdx}
                            className="bg-white border-4 border-black p-4 sm:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                          >
                            <div className="flex-1">
                              <h5 className="font-black uppercase text-xl sm:text-2xl mb-2 text-pink-600">
                                {subItem.title}
                              </h5>
                              <p className="text-base sm:text-lg font-bold leading-tight">
                                {subItem.desc}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setSelectedTechnique(subItem);
                                setSessionModalOpen(true);
                              }}
                              className="bg-black text-[#00FF41] border-4 border-black px-6 py-4 uppercase font-black shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all cursor-pointer w-full md:w-auto text-lg"
                            >
                              ▶ Iniciar sesión
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <TechniqueSessionModal
        isOpen={sessionModalOpen}
        onClose={() => setSessionModalOpen(false)}
        technique={selectedTechnique}
        category={
          selectedTechnique &&
          relajacionParams.some((r) => r.title === selectedTechnique.title)
            ? "relajacion"
            : "concentracion"
        }
        selectedAgeRange={selectedAgeRange}
      />
    </CollapsibleSection>
  );
};
