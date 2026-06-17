import React, { useState } from "react";
import { CollapsibleSection } from "./CollapsibleSection";
import { ProfileOption, AgeRangeOption } from "../types";
import {
  generalesParams,
  relajacionParams,
  concentracionParams,
} from "./InteractiveTechniques";
import { TechniqueSessionModal } from "./TechniqueSessionModal";

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
          label: "Adultivo (18-21)",
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

  const allStrategies = [
    ...generalesParams.map((item) => ({ ...item, isGroup: false })),
    { title: "Técnicas de relajación", isGroup: true, items: relajacionParams },
    {
      title: "Técnicas de concentración",
      isGroup: true,
      items: concentracionParams,
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
                onClick={() => toggleStrategy(strategy.title)}
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
                <div className="p-6 border-t-4 border-black bg-neutral-50 animate-[fade-in_0.2s_ease]">
                  {!strategy.isGroup ? (
                    <div>
                      <p className="text-base sm:text-lg font-bold mb-4">
                        {strategy.desc}
                      </p>
                      {selectedProfile === "padre" ? (
                        <div className="bg-white p-4 border-2 border-black mb-4">
                          <h4 className="font-black uppercase text-orange-600 mb-2">
                            ¿Cómo ayudar desde casa?
                          </h4>
                          <p className="font-medium text-sm sm:text-base">
                            Guía el proceso haciéndolo tú primero (modelado) y
                            luego deja que lo intenten ellos. Reduce tu ayuda
                            progresivamente, ofreciendo apoyo visual en lugar de
                            recordarlo todo verbalmente.
                          </p>
                        </div>
                      ) : null}
                      <h4 className="font-black font-mono text-sm uppercase mb-2">
                        Pasos a seguir:
                      </h4>
                      <ul className="list-disc pl-5 font-bold space-y-2 mb-4">
                        {(strategy as any).steps?.map(
                          (step: string, sIdx: number) => (
                            <li key={sIdx}>{step}</li>
                          ),
                        )}
                      </ul>
                      {(strategy as any).example && (
                        <div className="bg-yellow-100 p-3 border-2 border-black font-mono text-sm font-bold">
                          💡 Ejemplo: {(strategy as any).example}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <p className="font-medium text-lg">
                        Haz clic en "Iniciar Sesión" para abrir el reproductor y
                        guiar tu práctica paso a paso.
                      </p>
                      <div className="grid gap-4">
                        {(strategy as any).items.map(
                          (subItem: any, subIdx: number) => (
                            <div
                              key={subIdx}
                              className="bg-white border-2 border-black p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                            >
                              <div>
                                <h5 className="font-black uppercase text-lg">
                                  {subItem.title}
                                </h5>
                                <p className="text-sm font-bold opacity-80 mt-1">
                                  {subItem.desc}
                                </p>
                              </div>
                              <button
                                onClick={() => {
                                  setSelectedTechnique(subItem);
                                  setSessionModalOpen(true);
                                }}
                                className="bg-black text-[#00FF41] hover:bg-neutral-800 border-2 border-black px-4 py-2 uppercase font-black shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all cursor-pointer w-full sm:w-auto"
                              >
                                ▶ Iniciar sesión
                              </button>
                            </div>
                          ),
                        )}
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
