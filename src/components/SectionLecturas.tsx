import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';
import { BookOpen, FileText, ExternalLink } from 'lucide-react';

interface SectionLecturasProps {
  isOpen: boolean;
  onToggle: () => void;
  simulatorEnabled: boolean;
}

export const SectionLecturas: React.FC<SectionLecturasProps> = ({ isOpen, onToggle, simulatorEnabled }) => {
  return (
    <CollapsibleSection
      id="lecturas"
      title="06. Lecturas recomendadas"
      isOpen={isOpen}
      onToggle={onToggle}
      simulatorEnabled={simulatorEnabled}
      bannerClass="bg-violet-400 text-black border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
    >
      <div className="p-6 sm:p-8 bg-white border-4 border-black font-medium space-y-8 text-lg leading-relaxed shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
        <div>
          <h3 className="font-black text-2xl flex items-center gap-2 text-black mb-2 uppercase tracking-tight">
            <span>📚</span> Libros recomendados sobre el TDAH
          </h3>
          <p className="text-sm font-bold text-neutral-600 uppercase font-mono">
            Selección de obras clave para profundizar y comprender mejor el trastorno.
          </p>
        </div>

        {/* Sección: Para Familias */}
        <div className="space-y-4 border-l-4 border-violet-400 pl-4 sm:pl-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">👨‍👩‍👧‍👦</span>
            <h4 className="font-extrabold text-xl text-black uppercase">Para familias</h4>
          </div>
          
          <div className="space-y-3">
            <h5 className="font-bold text-base text-violet-700 uppercase font-mono tracking-wider">
              Comprender el TDAH
            </h5>
            
            <ul className="space-y-4">
              <li className="bg-neutral-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-base block text-black">
                      Barkley, R. A. (2020). <span className="italic">Tomar el control del TDAH</span>.
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 font-mono">
                      Una de las obras de referencia más completas y accesibles.
                    </span>
                  </div>
                  <a 
                    href="https://es.scribd.com/document/847459729/Tomar-El-Control-Del-TDAH-en-La-Edad-Adulta-PDF"
                    target="_blank" 
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 border-2 border-black font-mono text-xs font-black uppercase hover:bg-violet-500 hover:text-black transition-colors"
                  >
                    <BookOpen size={14} /> Leer Online <ExternalLink size={12} />
                  </a>
                </div>
              </li>

              <li className="bg-neutral-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-base block text-black">
                      Orjales Villar, I. (2018). <span className="italic">Déficit de atención con hiperactividad. Manual para padres y educadores</span>.
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 font-mono">
                      Guía fundamental de Fundación CADAH con pautas prácticas de intervención educativa.
                    </span>
                  </div>
                  <a 
                    href="https://www.google.com/search?q=Orjales+Villar+Deficit+de+atencion+con+hiperactividad+Manual+para+padres+y+educadores+pdf"
                    target="_blank" 
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 border-2 border-black font-mono text-xs font-black uppercase hover:bg-violet-500 hover:text-black transition-colors"
                  >
                    <BookOpen size={14} /> Buscar PDF <ExternalLink size={12} />
                  </a>
                </div>
              </li>

              <li className="bg-neutral-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-base block text-black">
                      Hallowell, E. M., & Ratey, J. J. (2021). <span className="italic">TDAH: Una mente diferente</span>.
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 font-mono">
                      Perspectiva positiva y neurodiversa para entender el potencial detrás del TDAH.
                    </span>
                  </div>
                  <a 
                    href="https://es.scribd.com/document/863505902/TDAH-2-0-Spanish"
                    target="_blank" 
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 border-2 border-black font-mono text-xs font-black uppercase hover:bg-violet-500 hover:text-black transition-colors"
                  >
                    <BookOpen size={14} /> Leer Online <ExternalLink size={12} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección: Guías prácticas */}
        <div className="space-y-4 border-l-4 border-violet-400 pl-4 sm:pl-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">📋</span>
            <h4 className="font-extrabold text-xl text-black uppercase">Guías prácticas</h4>
          </div>

          <ul className="space-y-4">
            <li className="bg-neutral-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-base block text-black">
                    Grupo de Trabajo de la Guía de Práctica Clínica sobre el TDAH (2010). <span className="italic">Guía de práctica clínica sobre el trastorno por déficit de atención con hiperactividad en niños y adolescentes</span>.
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 font-mono">
                    Manual integral del Ministerio de Sanidad y GuíaSalud.
                  </span>
                </div>
                <a 
                  href="https://portal.guiasalud.es/wp-content/uploads/2018/12/GPC_477_TDAH_AIAQS_compl.pdf?utm_source=chatgpt.com"
                  target="_blank" 
                  rel="noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 border-2 border-black font-mono text-xs font-black uppercase hover:bg-violet-500 hover:text-black transition-colors"
                >
                  <FileText size={14} /> Ver GPC <ExternalLink size={12} />
                </a>
              </div>
            </li>

            <li className="bg-neutral-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-base block text-black">
                    American Psychiatric Association. <span className="italic">Guía para familias sobre el TDAH</span>.
                    </span>
                  <span className="text-xs font-semibold text-neutral-500 font-mono">
                    Información oficial de la APA para la toma de decisiones informadas sobre el tratamiento.
                  </span>
                </div>
                <a 
                  href="https://www.psychiatry.org/File%20Library/Psychiatrists/Practice/Professional-Topics/Child-Adolescent-Psychiatry/adhd-parents-medication-guide-spanish.pdf?utm_source=chatgpt.com"
                  target="_blank" 
                  rel="noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 border-2 border-black font-mono text-xs font-black uppercase hover:bg-violet-500 hover:text-black transition-colors"
                >
                  <FileText size={14} /> Descargar Guía <ExternalLink size={12} />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Botón: Más Lecturas */}
        <div className="pt-4 border-t-4 border-black border-dashed flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-black font-mono">
            ¿Buscas más referencias científicas o lecturas adaptadas?
          </p>
          <a 
            href="https://www.fundacioncadah.org/web/printPDF.php?idweb=1&account=j289eghfd7511986&contenido=tdah-lecturas-recomendadas-afectados-y-familias"
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto text-center bg-[#00FF41] text-black hover:bg-violet-400 hover:text-black border-4 border-black font-mono font-black uppercase px-6 py-3 transition-all active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            Ver más lecturas en CADAH
          </a>
        </div>
      </div>
    </CollapsibleSection>
  );
};
