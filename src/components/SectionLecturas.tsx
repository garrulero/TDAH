import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';
import { BookOpen, FileText, ExternalLink, Video } from 'lucide-react';
import { ProfileOption, AgeRangeOption } from '../types';

interface SectionLecturasProps {
  isOpen: boolean;
  onToggle: () => void;
  simulatorEnabled: boolean;
  selectedProfile: ProfileOption;
  selectedAgeRange: AgeRangeOption;
}

export const SectionLecturas: React.FC<SectionLecturasProps> = ({ 
  isOpen, 
  onToggle, 
  simulatorEnabled, 
  selectedProfile, 
  selectedAgeRange 
}) => {
  const renderPadresContent = () => (
    <>
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
    </>
  );

  const renderUsuarioContent = () => {
    const isPrimaria = ['p1', 'p2', 'p3'].includes(selectedAgeRange || '');
    const isEso = ['e1', 'e2'].includes(selectedAgeRange || '');
    const isAdulto = ['b1', 'a18'].includes(selectedAgeRange || '');

    return (
      <div className="space-y-4 border-l-4 border-violet-400 pl-4 sm:pl-6">
        {isPrimaria && (
          <>
            <div className="flex items-center gap-2">
              <span className="text-xl">🧒</span>
              <h4 className="font-extrabold text-xl text-black uppercase">Lecturas destinadas a niños con TDAH (6 a 9 años)</h4>
            </div>
            <ul className="space-y-4">
              {[
                { title: "Trasto, un campeón en la familia", link: "https://www.youtube.com/watch?v=2VpzCD2wLIE", isVideo: true },
                { title: "Pincho se va de vacaciones", link: "https://www.youtube.com/watch?v=ZwK03uFyQ50", isVideo: true },
                { title: "Luna destaca en el colegio", link: "https://www.youtube.com/watch?v=ZxIdBEIg8HE", isVideo: true },
                { title: "Fosforete, un amigo muy especial", link: "https://www.youtube.com/watch?v=ZwK03uFyQ50", isVideo: true },
                { title: "Julieta, ¡estate quieta!. (2008). Autor: Rosemary Wells. Editorial: Alfaguara." },
                { title: "Una palabra olvidada. Edita: Fundación CADAH." },
                { title: "Rubén, el Niño Hiperactivo. (1997). Autor: E.M. García Pérez. Editorial: Bilbao: COHS. Consultores." },
                { title: "Cuentos para aprender a comportarse. (2007). Autores: Juan Carlos Arriaza Mayas y Leonor Guerrero Ruiz. Editoral: CEPE." },
                { title: 'Había una vez... una Abeja. Cuentos para ayudar a mejorar la conducta en los niños, "el autocontrol". (2005). Autores: Nazaret Cantero Muñoz, Angeles Páez López. Editoral: CEPE.' },
                { title: "Había una vez... Una Liebre. Cuentos para ayudar a mejorar la conducta de los niños. (2005). Autores: Nazaret Cantero Muñoz, Angeles Páez López. Editoral: CEPE." },
                { title: "Había una vez... Un Gatito. Cuentos para ayudar a mejorar la conducta de los niños. (2005). Autores: Nazaret Cantero Muñoz, Angeles Páez López. Editoral: CEPE." },
                { title: "Había una vez... Una osita. Cuentos para ayudar a mejorar la conducta de los niños. (2005). Autores: Nazaret Cantero Muñoz, Angeles Páez López. Editoral: CEPE." },
                { title: "Había una vez... Una Tortuga. Cuentos para ayudar a mejorar la conducta de los niños. (2005). Autores: Nazaret Cantero Muñoz, Angeles Páez López. Editoral: CEPE." },
                { title: "Había una vez... Un perrito. Cuentos para ayudar a mejorar la conducta de los niños. (2005). Autores: Nazaret Cantero Muñoz, Angeles Páez López. Editoral: CEPE." },
                { title: "Dani Bocafuego (4 libros). (2011). Autora: Ursula Vernon. Colección Novela gráfica. Editorial: La Galera." },
                { title: "El ratoncito Fernandito no para quieto ni un poquito. Terapicuentos. Editorial: Ediciones FORTUNA." },
                { title: "La Leona Maripilista en el colegio se despista. Terapicuentos. Editorial: Ediciones FORTUNA." },
                { title: "El Perrito Antón se comporta como un matón. Terapicuentos. Editorial: Ediciones FORTUNA." },
                { title: "El Caballo Pocaspecas hace muchas muecas. Terapicuentos. Editorial: Ediciones FORTUNA." },
                { title: "Las rabietas. Autora: Catherine Dolto. Editorial: Picarona." }
              ].map((item, idx) => (
                <li key={idx} className="bg-neutral-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-bold text-base block text-black">{item.title}</span>
                    {item.link && (
                      <a 
                        href={item.link}
                        target="_blank" 
                        rel="noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 border-2 border-black font-mono text-xs font-black uppercase hover:bg-violet-500 hover:text-black transition-colors"
                      >
                        {item.isVideo ? <Video size={14} /> : <BookOpen size={14} />} 
                        {item.isVideo ? "Ver Vídeo" : "Leer Online"} 
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {isEso && (
          <>
            <div className="flex items-center gap-2">
              <span className="text-xl">🧑‍🎓</span>
              <h4 className="font-extrabold text-xl text-black uppercase">Lecturas destinadas a adolescentes con TDAH (11 a 16 años)</h4>
            </div>
            <ul className="space-y-4">
              {[
                { title: "¡Soy Hiperactivo/a! ¿Qué Puedo Hacer?. (1997). Autor: E.M. García Pérez. Editorial: Bilbao: COHS. Consultores." },
                { title: "M. Non Stop - El Héroe hiperactivo. (2008). Autores: J. A Hormaechea, A. Uribarri y J. Ubierna. Edita: Hobari Fundazioa." },
                { title: "La Prueba. (2009). Autores: J. A Hormaechea, A. Uribarri y R. Garay." },
                { title: "ATENTA: Buscando el camino. (2010). Autores: Roberto Bergado y Antonio Hormaechea (Prólogo: Luis Prieto.)" },
                { title: "Juanito y su TDAH. Ser feliz es posible. (2012). Autor: Francisco Javier Lozano Soriano. Editoral: UNIV. DE SAN JORGE," },
                { title: "Yo, Elvis Riboldi y Boris el superdotado. (2012). Autor: Bono Bidari. Editoral: LA GALERA, S.A. EDITORIAL." },
                { title: "Yo, Elvis Riboldi y El Restaurante Chino. (2012). Autor: Bono Bidari. Editoral: LA GALERA, S.A. EDITORIAL." },
                { title: "Yo, Elvis Riboldi y el falso culpable. (2013). Autor: Bono Bidari. Editoral: LA GALERA, S.A. EDITORIAL." },
                { title: "Yo, Elvis Riboldi, Tú, Emma Foster: El musical. (2013). Autor: Bono Bidari. Editoral: LA GALERA, S.A. EDITORIAL." },
                { title: "Yo, Elvis Riboldi, y la máquina del tiempo. (2014). Autor: Bono Bidari. Editoral: LA GALERA, S.A. EDITORIAL." },
                { title: "Yo, Elvis Riboldi y la familia Blood. (2014). Autor: Bono Bidari. Editoral: LA GALERA, S.A. EDITORIAL." },
                { title: "Yo, Elvis Riboldi, y Murfi el extraterrestre. (2014). Autor: Bono Bidari. Editoral: LA GALERA, S.A. EDITORIAL." },
                { title: "Los peores años de mi vida (Libros 1, 2, 3, 4). (2013). Autores: James patterson y Chris Tebbetts. Ilustraciones: Laura Park. Colección Novela gráfica. Editorial: La Galera." }
              ].map((item, idx) => (
                <li key={idx} className="bg-neutral-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-bold text-base block text-black">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {isAdulto && (
          <>
            <div className="flex items-center gap-2">
              <span className="text-xl">👩‍💼</span>
              <h4 className="font-extrabold text-xl text-black uppercase">Lecturas destinadas a adultos con TDAH</h4>
            </div>
            <p className="text-sm font-bold text-neutral-600 uppercase font-mono mb-4">
              Para que los adultos con TDAH profundicen en su autoconomiento, ayudarles a resolver dificultades y problemas del día a día y el manejo de los recursos de apoyo de su alrededor.
            </p>
            <ul className="space-y-4">
              {[
                { title: "¿Eres tú, soy yo o el TDAH en adultos? (2017) Gina Pera. Prólogo de R. Blarkley. Editorial: TDAH Vallès." },
                { title: "La vida con TDAH A vista de pájaro. Consejos para jóvenes supervivientes. (2017) Chris A. Zeigler Dendy; Alex Zeigler. Editorial: TDAH Vallès." },
                { title: "What Does Everybody Else Know That I Don`t?: Social Skills Help for Adults with Attention Deficit/Hyperactivity Disorder. (1999). Autores: Michele Novotni y Randy Petersen. Editorial: Paperback." },
                { title: "You, Your Relationship, and Your ADD. (2002). Autor: Michael T. Bell. Editorial: New Harbinger Publications Incorporated." },
                { title: "ADD-Friendly Ways to Organize Your Life. (2002). Autores: Judith Kolberg y Kathleen Nadeau. Editorial: Paperback." },
                { title: "Comprender el TDAH en Adultos. (2009). Autor: Josep Antoni Ramos Quiroga. Editorial: AMAT." },
                { title: "Un día en la vida de un adulto con TDAH (Trastorno por Déficit de Atención/Hiperactividad). (2009). Autores: Vera Joffe y Monica Iachan. Prólogo de Russell A. Barkley. Ilustraciones: Margaret Scott. Traducción: Antonio Díez Herranz. Editorial: J&C EDICIONES MEDICAS, S.L." },
                { title: "Tú Tampoco Estás Solo. TDAH en adultos. (2011). Autores: María Jesús Ordoñez y Roberto Álvarez-Higuera. Editorial: LIBROS CÚPULA." },
                { title: "Tomar el control del TDAH en la edad adulta. (2013). Autor: Russell A. Barkley. Editorial: Octaedro." }
              ].map((item, idx) => (
                <li key={idx} className="bg-neutral-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-bold text-base block text-black">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };

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

        {selectedProfile === 'usuario' ? renderUsuarioContent() : renderPadresContent()}
      </div>
    </CollapsibleSection>
  );
};
