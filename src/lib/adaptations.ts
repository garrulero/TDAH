export const adaptDescription = (title: string, originalDesc: string, ageId: string | null, profile?: string) => {
  const isPrimaria = ['p1', 'p2', 'p3'].includes(ageId || '');
  const isEso = ['e1', 'e2'].includes(ageId || '');
  const isBachi = ageId === 'b1';
  const isSecundaria = ['e1', 'e2', 'b1'].includes(ageId || '');
  const isAdulto = ageId === 'a18';

  if (!ageId) return originalDesc;

  if (profile === 'padre') {
    if (isPrimaria) {
      if (title.includes('Autoinstrucciones') || originalDesc.includes('mensajes internos')) return 'Enseña a tu hijo a usar pequeñas frases en voz alta que funcionen como "pistas mágicas" para guiar sus pasos. Fomenta que te imite al principio, diciendo juntos qué hacer a continuación para que no se pierda en la actividad y frene la impulsividad. Conviértelo en un juego de detectives donde tú marcas el camino inicialmente.';
      return originalDesc + ' Ayúdale y guíale paso a paso, haciéndolo tú primero como un juego.';
    } else if (isEso) {
      if (title.includes('Autoinstrucciones') || originalDesc.includes('mensajes internos')) return 'Muestra a tu adolescente cómo las autoverbalizaciones pueden ser su mejor aliado para planificar el estudio y contener los arrebatos. Invítale a crear su propio guion interno que le marque el rumbo de las tareas. Adopta una postura de acompañante distante, interviniendo sólo cuando veas que se atasca o pierde el foco.';
      return originalDesc + ' Sugiérele herramientas y asume un rol de supervisor de vez en cuando, dándole autonomía.';
    } else if (isBachi) {
      if (title.includes('Autoinstrucciones') || originalDesc.includes('mensajes internos')) return 'Anímale a consolidar un sistema de diálogos internos maduros que le permitan enfrentarse a la alta exigencia académica por sí solo. El objetivo es que logre organizar su mente y regular la ansiedad pre-examen de manera autónoma. Tu intervención debe ser mínima, sirviendo únicamente como red de seguridad afectiva y apoyo moral.';
      return originalDesc + ' Fomenta su total autonomía y acompáñale en sus decisiones sin fiscalizar.';
    } else if (isAdulto) {
      if (title.includes('Autoinstrucciones') || originalDesc.includes('mensajes internos')) return 'Comprende que el adulto con TDAH necesita sus propios anclajes verbales para navegar las responsabilidades del día a día sin abrumarse. Estas instrucciones personales son su brújula para mantener el control ejecutivo y mitigar el caos. Muestra un respeto absoluto por sus tiempos, rutinas y las herramientas cognitivas que decida implementar por su cuenta.';
      return originalDesc + ' Tu rol es de acompañamiento y respeto a sus propios métodos y autonomía.';
    }
  }

  if (isPrimaria) {
    if (title.includes('Autoinstrucciones') || originalDesc.includes('Autoinstrucciones')) return 'Nos hablaremos a nosotros mismos en voz alta usando frases muy cortitas que sirvan de recordatorio. Esto nos ayudará a no despistarnos con otras cosas y lograr un trabajo espectacular paso a paso.';
    if (originalDesc.includes('Consiste en respirar utilizando el abdomen')) return 'En vez de usar el pecho, vamos a respirar usando la barriguita como si estuvieras inflando un globo mágico. Lo haremos poquito a poco, como un juego super divertido.';
    if (originalDesc.includes('Ayuda a disminuir activación')) return 'Con este truco mágico, tu cuerpo se relajará un montón y podrás descansar mucho mejor.';
    if (originalDesc.includes('Favorece concentración')) return 'Te ayudará a que sea más fácil prestar atención y sentirte genial por dentro.';
    if (originalDesc.includes('Técnica especialmente útil con niños')) return '¡Va a ser súper divertido! Vamos a imaginarnos que somos globos.';
    if (originalDesc.includes('Favorece el control de la intensidad')) return 'Aprenderemos a soplar despacito como si tuvieras una tarta de cumpleaños brillante delante.';
    if (originalDesc.includes('Útil para disminuir ansiedad')) return 'Un truco buenísimo para calmar todos esos nervios o enfados que a veces sentimos.';
    if (originalDesc.includes('Busca reducir impulsividad')) return 'Jugaremos a escondernos en nuestro caparazón para calmar el cuerpo cuando tenga ganas de ir súper rápido.';
    if (originalDesc.includes('moment presente')) return 'Jugaremos a darnos cuenta de lo que pasa ahora mismo, sin preocuparnos por nada más.';
    if (originalDesc.includes('Permite mantener la atención')) return 'Un juego corto: trabajamos un ratito pequeño y ganamos un premio de descanso rápido.';
    if (title.includes('Organización y planificación') || originalDesc.includes('Organización y planificación')) return 'Antes de empezar, prepararemos muy bien los dibujitos y pasos para saber exactamente a qué jugar y qué hacer.';
    if (title.includes('Gestión del tiempo') || originalDesc.includes('Gestión del tiempo')) return 'Usaremos relojes de papás y colores para saber cuánto tiempo jugamos y arreglamos todo.';
    if (title.includes('Autoevaluación') || originalDesc.includes('Autoevaluación')) return 'Como detectives, comprobaremos cómo de bien lo hemos hecho y nos pondremos unas medallas imaginarias.';
    if (title.includes('Refuerzo positivo') || originalDesc.includes('Refuerzo positivo')) return 'Cada vez que hagamos una cosita bien, ¡chocaremos esos cinco y habrá cosas chulas!';
    if (title.includes('Organización del entorno') || originalDesc.includes('Organización del entorno')) return 'Antes de empezar, quitaremos todos los juguetes que nos despistan para tener una súper mesa lista.';
    if (originalDesc.includes('Evita la sobrecarga')) return 'Vamos a hacer solo una cosa. Acabamos con los lápices y luego pasamos a los colores.';
    if (title.includes('Externalización') || originalDesc.includes('Externalización')) return 'Haremos unas marcas en un papel con nuestro progreso. ¡Cada palomita es un puntazo!';
    if (title.includes('Fragmentación') || originalDesc.includes('Fragmentación')) return 'Como puzles, separaremos los trabajos gigantes en mini pasitos muy fáciles.';
    if (title.includes('Control del entorno') || originalDesc.includes('Control del entorno')) return 'Apagaremos las pantallitas para que la mesa esté tranquila y silenciosa.';
    if (title.includes('Estimulación auditiva') || originalDesc.includes('Estimulación auditiva')) return 'Pondremos sonidos relajantes como si lloviera afuera para que sea más chulo aprender.';
    if (title.includes('Técnicas de inicio') || originalDesc.includes('Técnicas de inicio')) return 'Prometemos hacerlo solos 2 minutitos, y si nos mola la aventura, seguimos.';
    if (title.includes('Apoyos visuales') || originalDesc.includes('Apoyos visuales')) return 'Pegatinas y esquemas grandes nos ayudarán un montón a saber cómo va todo.';
    if (originalDesc.includes('reducir la fatiga')) return 'Paramos muchas veces y jugamos con las manos; así tu mente nunca se cansa.';
    
    // Fallback
    return originalDesc + ' ¡Aprenderemos a hacerlo paso a paso, de forma fácil e increíble!';
  }

  if (isSecundaria) {
    if (title.includes('Autoinstrucciones') || originalDesc.includes('Autoinstrucciones')) {
      if (isEso) return 'Aprende a hablarte y guiarte de forma interna; como un entrenador personal que orienta tu siguiente movimiento. Esta táctica te vendrá increíble para no perderte entre tantas asignaturas nuevas del instituto.';
      if (isBachi) return 'Desarrolla tus propios guiones mentales para sobrevivir al estrés y volumen de estudio previos a la universidad. Utiliza verbalizaciones directas para enfocar tu concentración, frenando la ansiedad cuando sientas que no llegas a todo.';
    }
    if (originalDesc.includes('Consiste en respirar utilizando el abdomen')) return 'Usa tu abdomen para respirar en vez del pecho; te ayudará un montón a quitar tensiones y conseguir un estado de calma antes de tus clases o exámenes.';
    if (originalDesc.includes('Ayuda a disminuir activación')) return 'Genial para relajar todo tu cuerpo bajando revoluciones cuando notas que la cabeza te va a mil y te abrumas.';
    if (originalDesc.includes('Favorece concentración')) return 'Te servirá para concentrarte mejor en tus estudios y saber manejar las frustraciones típicas de la semana con algo más de autocontrol.';
    if (originalDesc.includes('Técnica especialmente útil con niños')) return 'A lo mejor suena un poco infantil, pero visualizar cómo inflas tu abdomen de manera profunda desconecta completamente los malos rollos de tu mente.';
    if (originalDesc.includes('Favorece el control de la intensidad')) return 'Controlar tu propia respiración sin brusquedad, de una manera constante, como manteniendo una pequeña llama.';
    if (originalDesc.includes('Útil para disminuir ansiedad')) return 'Un recurso de oro para quitar la ansiedad y la fobia, perfecto para momentos antes de algún examen o presentación oral en la ESO.';
    if (originalDesc.includes('Busca reducir impulsividad')) return 'El objetivo es frenar y calmarte en un segundito cuando sientas que un enfado domina tus respuestas, haciéndote reflexionar y tomarte un parón.';
    if (originalDesc.includes('moment presente')) return 'Se trata de aparcar los pensamientos del tipo "Y si no apruebo" y observar cómo estás hoy en tu cuerpo.';
    if (originalDesc.includes('Permite mantener la atención')) return 'Súper práctico para mantener la atención en tareas que consideres muy aburridas combinándolo con descansos merecidos que tú decidas.';
    if (title.includes('Organización y planificación') || originalDesc.includes('Organización y planificación')) return 'Da el paso para intentar estructurar qué harás con tu agenda por primera vez y de forma visible antes de que todo se vuelva caótico el último día.';
    if (title.includes('Gestión del tiempo') || originalDesc.includes('Gestión del tiempo')) return 'Planifica en base a alarmas digitales cuánto debes gastar en los ejercicios o estudiar sin procrastinar indefinidamente en la pantalla del sofá.';
    if (title.includes('Autoevaluación') || originalDesc.includes('Autoevaluación')) return 'Revisa por tu propia cuenta si los objetivos han salido como te habías marcado antes de que llegue la bronca o el castigo.';
    if (title.includes('Refuerzo positivo') || originalDesc.includes('Refuerzo positivo')) return 'Premia tu dedicación pidiendo y consiguiendo metas razonables y motivadoras en cuanto acabes la peor parte del estudio diario.';
    if (title.includes('Organización del entorno') || originalDesc.includes('Organización del entorno')) return 'Limita tus propios distractores de forma individual: elimina notificaciones del grupo o deja el móvil fuera mientras termines esta primera ronda.';
    if (originalDesc.includes('Evita la sobrecarga')) return 'Saca solo los libros que vayas a estudiar y termina primero mates y luego inglés. Mezclar todo solo empeorará todo.';
    if (title.includes('Externalización') || originalDesc.includes('Externalización')) return 'Apóyate escribiendo todos tus objetivos en una lista o agenda digital y ve tachándolas a tu ritmo.';
    if (title.includes('Fragmentación') || originalDesc.includes('Fragmentación')) return 'Siente menos agobio al hacer pedacitos muy pequeños lo que tienes que estudiar (Ej. hoy solo estudio un punto fijo de sociales).';
    if (title.includes('Control del entorno') || originalDesc.includes('Control del entorno')) return 'Fija tú mismo normas claras: teléfono dado la vuelta y ventanas del PC que no uses o no necesitas cerradas; menos ruido = menos estrés.';
    if (title.includes('Estimulación auditiva') || originalDesc.includes('Estimulación auditiva')) return 'Aplica ruido blanco o música de ondas que bloqueen conversaciones laterales mientras intentas prepararte un examen concentrado.';
    if (title.includes('Técnicas de inicio') || originalDesc.includes('Técnicas de inicio')) return 'Inicia algo sin motivación durante 5 minutitos solo para no postergar un largo documento de Word infinito lleno de nervios. Rompe la inercia.';
    if (title.includes('Apoyos visuales') || originalDesc.includes('Apoyos visuales')) return 'Subrayados potentes y organizadores vistosos marcarán la diferencia de leer hojas densas y complejas por semanas de la ESO/Bachiller.';
    if (originalDesc.includes('reducir la fatiga')) return 'Dale su sitio al descanso en intervalos controlados. Oblígate a no pasarte y hacer estiramientos puntuales desde el final de las clases.';
    
    // Fallback
    return originalDesc + ' Toma un papel más activo en guiar tú mismo estas técnicas. Tus padres estarán solo como supervisores de vez en cuando.';
  }

  if (isAdulto) {
    if (title.includes('Autoinstrucciones') || originalDesc.includes('Autoinstrucciones')) return 'Aplica sistemas de autodiálogo consciente diseñados para estructurar responsabilidades complejas en tu rutina diaria. Estos marcadores cognitivos te servirán para retomar el hilo conductor de tus tareas sin depender de supervisión externa.';
    if (originalDesc.includes('Consiste en respirar utilizando el abdomen')) return 'Fundamentada en utilizar el diafragma en lugar de la respiración torácica y superficial diaria, siendo el aliado perfecto a llevar donde interese relajar las constantes corporales en unos segundos.';
    if (originalDesc.includes('Ayuda a disminuir activación')) return 'Herramienta vital para rebajar picos fisiológicos producidos por rumiación adulta y agobio laboral prolongado.';
    if (originalDesc.includes('Favorece concentración')) return 'Estimula tu centrado atencional de forma consciente; excelente autorregulación ante retos densos intelectualmente hablando en la vida diaria.';
    if (originalDesc.includes('Técnica especialmente útil con niños')) return 'Un gran ejercicio adaptativo. Aunque la descripción parece infantil, visualizar en la respiración nos re-ancla de forma muy contundente en el cuerpo tras largas horas sedentarias.';
    if (originalDesc.includes('Favorece el control de la intensidad')) return 'Consiste en dominar exhalaciones extremadamente estables; perfecto para evitar estallar bajo presión familiar o del curro impidiéndote colapsos innecesarios.';
    if (originalDesc.includes('Útil para disminuir ansiedad')) return 'Una de las metodologías top para erradicar las subidas directas de taquicardias, pánico escénico y excesos de pensamientos ansiógenos generalizados en la cama.';
    if (originalDesc.includes('Busca reducir impulsividad')) return 'Trata de retraer absolutamente todos los inputs cuando exista fatiga mental o reactividad en tus círculos más cercanos; dándote la elección inteligente de reaccionar sin impulsión hiperactiva.';
    if (originalDesc.includes('moment presente')) return 'Orientada enteramente en localizar tus emociones presentes en los pensamientos actuales y rebajando considerablemente todos aquellos procesos tóxicos cognitivos que nos desvían sin control.';
    if (originalDesc.includes('Permite mantener la atención')) return 'Aísla las distracciones modernas implementando ventanas laborales cortas pero sumamente eficaces con Pomodoro, sin quemar dopamina por anticipado.';
    if (title.includes('Organización y planificación') || originalDesc.includes('Organización y planificación')) return 'Lidia proactivamente con tu propio esquema laboral diario, creando jerarquías robustas, mapas o calendarios avanzados usando tu autonomía y madurez, minimizando improvisaciones o el temido caos impredecible.';
    if (title.includes('Gestión del tiempo') || originalDesc.includes('Gestión del tiempo')) return 'Optimización pura al aplicar metodologías para equilibrar el tiempo e integrar la jornada de una tarea pesada estimándote tu propia saturación a corto plazo y usando recordatorios automatizados digitalmente en tu calendario.';
    if (title.includes('Autoevaluación') || originalDesc.includes('Autoevaluación')) return 'Evalúa rigurosamente de manera pragmática qué funcionó la pasada semana y establece tus métricas para una retroalimentación y gratificación del todo eficiente evitando la continua insatisfacción de los que tenemos DA.';
    if (title.includes('Refuerzo positivo') || originalDesc.includes('Refuerzo positivo')) return 'Construye por ti mismo, pequeñas válvulas de logros e incentivos (algo lúdico o un capricho tras cumplir, por ejemplo, los pagos burocráticos y gestiones pesadas pendientes).';
    if (title.includes('Organización del entorno') || originalDesc.includes('Organización del entorno')) return 'Refina y bloquea el caos sensorial; tu propio puesto de trabajo o despacho es la trinchera clave donde deberás dejar lo inservible o aquellos teléfonos/mensajes lejos para generar espacios puros para resolver el quehacer diario.';
    if (originalDesc.includes('Evita la sobrecarga')) return 'Sustenta la monotorización extrema a una sola meta específica cerrando 10 pestañas mentales abiertas, para mitigar el agotamiento visual, fatiga atencional paralizante y evitar saltar entre frentes de diferentes índoles.';
    if (title.includes('Externalización') || originalDesc.includes('Externalización')) return 'Apóyate en listas de To-Dos digitales para dejar en paz al córtex frontal, eludiendo la obligación biológicamente costosa de tratar de recordarlo y retenerlo exhaustivamente todo.';
    if (title.includes('Fragmentación') || originalDesc.includes('Fragmentación')) return 'Rebaja la evasiva por montañas infinitas que produce la "gestión de Hacienda" o "Aseo integral de casa", dividiéndolas mecánicamente y acometiendo tareas minúsculas ridículamente viables por día (como enviar un simple mail o el lavado de los cubiertos).';
    if (title.includes('Control del entorno') || originalDesc.includes('Control del entorno')) return 'Aplica bloqueadores informáticos (app-block) para webs dañinas al proceso de estudio o la sobre exposición. Tú eres el arquitecto soberano de todo lo que roba tu entorno de dopamina al cabo del día normal.';
    if (title.includes('Estimulación auditiva') || originalDesc.includes('Estimulación auditiva')) return 'Bloqueador puro con música funcional instrumental que promueva flujo dinámico, enmascarando cualquier ruido ajeno proveniente del transporte, pareja conviviente, etc., ayudándote al enfoque.';
    if (title.includes('Técnicas de inicio') || originalDesc.includes('Técnicas de inicio')) return 'Inicia lo irremediable superando barreras que impiden romper un estado atencional viciado. Solo siéntate y ejecuta una primera mini pauta para forzar ese arranque basal superando la procastintación de inmediato.';
    if (title.includes('Apoyos visuales') || originalDesc.includes('Apoyos visuales')) return 'Exhibe visualmente en el escritorio todo calendario, postit estratégico grande y anotador vistoso o cronograma, sustituyendo la dependencia a la memoria rutinaria, un lastre típico adulto con TDAH.';
    if (originalDesc.includes('reducir la fatiga')) return 'Desconecta de manera tajante para que el descanso sirva realmente. Obliga al cerebro a pausar físicamente antes del desgaste neuronal inevitable si mantienes secuencias extenuantes, en hiperfoco sin levantarte.';
    
    // Fallback
    return originalDesc + ' Toma decisiones estratégicas totalmente individuales que combatan el caos. Tu autonomía es absoluta y se nutre del control deliberado.';
  }

  return originalDesc;
};

export const adaptParentInstructions = (ageId: string | null) => {
  const isPrimaria = ['p1', 'p2', 'p3'].includes(ageId || '');
  const isSecundaria = ['e1', 'e2', 'b1'].includes(ageId || '');
  const isAdulto = ageId === 'a18';

  if (!ageId) {
    return 'Guía el proceso haciéndolo tú primero (modelado) y luego deja que lo intenten ellos. Reduce tu ayuda progresivamente, ofreciendo apoyo visual en lugar de recordarlo todo verbalmente.';
  }

  if (isPrimaria) {
    return 'En estas edades, los niños necesitan mucho modelado. Haz la técnica tú primero como si fuera un juego para que te imiten. Felicítalo mucho en cada pequeño logro y usa muchos apoyos visuales (dibujos, relojes de arena, pegatinas) para que lo entienda sin que tengas que darle tantas explicaciones largas que le aburran.';
  }

  if (isSecundaria) {
    return 'En esta etapa tu rol es de supervisor en la sombra. Deja que intente organizarse o aplicar la técnica a su ritmo, cometiendo errores si hace falta. No se lo hagas tú. En lugar de recordarle las cosas hablando (que probablemente le moleste), ofrécele opciones y herramientas (apps, calendarios) y negocia acuerdos sobre cuándo revisar juntos los progresos.';
  }

  if (isAdulto) {
    return 'En la etapa adulta no es necesaria tu intervención directa. Como adulto cercano, el mejor apoyo es el respeto a su espacio y a sus mecanismos de concentración. Puedes ayudar reduciendo el ruido ambiental, respetando los "bloqueos de tiempo" para trabajar que te indique y animando a buscar entornos y sistemas que funcionen, sin fiscalizar su manera particular de planificarse.';
  }

  return 'Guía el proceso progresivamente, ofreciendo el apoyo adecuado que necesiten.';
};

export const adaptSteps = (steps: string[] | undefined, ageId: string | null) => {
  if (!steps) return [];
  const isPrimaria = ['p1', 'p2', 'p3'].includes(ageId || '');
  if (isPrimaria) {
    return steps.map(s => s
      .replace(/El adulto/i, 'Mamá, papá o el profe')
      .replace(/La persona/i, 'Tú')
      .replace(/Inspirar/i, 'Coge aire por la nariz')
      .replace(/Expulsar/i, 'Sopla por la boca')
      .replace(/Mantener/i, 'Aguanta despacito')
      .replace(/el abdomen/i, 'la barriga')
      .replace(/Elaborar/i, 'Hacer juntos un dibujo o')
      .replace(/Identificar/i, 'Busca con cuidado')
      .replace(/Analizar/i, 'Piensa con papá/mamá en')
      .replace(/Estimar/i, 'Adivina con cronómetro divertido')
      .replace(/Establecer /i, 'Inventar ')
      .replace(/Revisar/i, 'Mirar si está guay')
      .replace(/Elegir/i, 'Escoger')
      .replace(/Prestar atención/i, 'Mirar muy atento')
      );
  }

  const isSecundaria = ['e1', 'e2', 'b1'].includes(ageId || '');
  if (isSecundaria) {
    return steps.map(s => s
      .replace(/El adulto/i, 'El tutor o adulto de casa')
      .replace(/La persona/i, 'Tú mismo')
      .replace(/Inspirar/i, 'Inspira')
      .replace(/Expulsar/i, 'Expulsa todo el aire')
      .replace(/Elaborar/i, 'Crea y diseña')
      .replace(/Identificar/i, 'Detecta tú mismo')
      .replace(/Analizar/i, 'Chequea en tu móvil')
      .replace(/Estimar/i, 'Calcula')
    );
  }

  const isAdulto = ageId === 'a18';
  if (isAdulto) {
    return steps.map(s => s
      .replace(/^El adulto modela el proceso verbalizando los pasos/i, 'Modela tu propio proceso estructurando primero las tareas')
      .replace(/La persona/i, 'Tú mismo')
      .replace(/Inspirar/i, 'Inspira profundamente')
      .replace(/Expulsar/i, 'Expulsa todo el aire')
      .replace(/Elaborar/i, 'Crea y diseña')
      .replace(/Identificar/i, 'Detecta')
      .replace(/Analizar/i, 'Analiza de forma pragmática')
      .replace(/Estimar/i, 'Calcula')
    );
  }

  return steps;
};

export const adaptParentSteps = (steps: string[] | undefined, ageId: string | null) => {
  if (!steps) return [];
  
  const isPrimaria = ['p1', 'p2', 'p3'].includes(ageId || '');
  const isEso = ['e1', 'e2'].includes(ageId || '');
  const isBachi = ageId === 'b1';
  const isAdulto = ageId === 'a18';
  
  return steps.map(s => {
    let adapted = s;

    if (isPrimaria) {
      adapted = adapted
        .replace(/^El adulto modela/i, 'Modela tú primero')
        .replace(/^La persona realiza/i, 'Pídele que realice')
        .replace(/^Posteriormente verbaliza/i, 'Anímale a que verbalice')
        .replace(/^Finalmente interioriza/i, 'Ayúdale a interiorizar')
        .replace(/^Identificar /i, 'Ayúdale paso a paso a identificar ')
        .replace(/^Ordenar /i, 'Ordenad juntos ')
        .replace(/^Establecer /i, 'Fija con él/ella de forma visual ')
        .replace(/^Utilizar /i, 'Enséñale jugando a utilizar ')
        .replace(/^Estimar /i, 'Jugad a estimar ')
        .replace(/^Alternar /i, 'Asegúrate de que alterna ')
        .replace(/^Usar /i, 'Proporciónale y enséñale a usar ')
        .replace(/^Tras la actividad se revisa/i, 'Revisad juntos tras la actividad con un premio o refuerzo')
        .replace(/^Analizar /i, 'Analizad juntos de forma sencilla ')
        .replace(/^Proponer /i, 'Pídele que proponga ')
        .replace(/^Reforzar /i, 'Elogia y refuerza mucho ')
        .replace(/^Reducir /i, 'Ve reduciendo la ayuda ')
        .replace(/^Retirar /i, 'Ve retirando el apoyo visual ')
        .replace(/^Elegir /i, 'Ayúdale a elegir ')
        .replace(/^Inspirar /i, 'Dile "Coge aire como oliendo una flor" ')
        .replace(/^Mantener /i, 'Dile "Aguanta el aire" ')
        .replace(/^Expulsar /i, 'Dile "Sopla como apagando una vela" ')
        .replace(/^Tensar /i, 'Jugad a tensar ')
        .replace(/^Relajar /i, 'Jugad a relajar ')
        .replace(/^Concentrarse /i, 'Ayúdale a concentrarse ')
        .replace(/^Prestar atención /i, 'Pídele que preste atención ')
        .replace(/^Dividir /i, 'Ayúdale a dividir ');
    } else if (isEso) {
      adapted = adapted
        .replace(/^El adulto modela el proceso verbalizando los pasos /i, 'Sugiérele que empiece verbalizando los pasos ')
        .replace(/^La persona realiza/i, 'Supervisa cómo realiza')
        .replace(/^Posteriormente verbaliza/i, 'Anímale a que lo verbalice')
        .replace(/^Finalmente interioriza/i, 'Sugiérele que interiorice')
        .replace(/^Identificar /i, 'Supervisa que identifique ')
        .replace(/^Ordenar /i, 'Supervisa cómo ordena ')
        .replace(/^Establecer /i, 'Acordad juntos ')
        .replace(/^Utilizar /i, 'Recuérdale utilizar ')
        .replace(/^Estimar /i, 'Anímale a estimar ')
        .replace(/^Alternar /i, 'Recuérdale que alterne ')
        .replace(/^Usar /i, 'Sugiérele usar ')
        .replace(/^Tras la actividad se revisa/i, 'Revisad juntos tras la actividad')
        .replace(/^Analizar /i, 'Analizad juntos ')
        .replace(/^Proponer /i, 'Anímale a proponer ')
        .replace(/^Reforzar /i, 'Valora y refuerza ')
        .replace(/^Reducir /i, 'Ve reduciendo tu supervisión ')
        .replace(/^Retirar /i, 'Ve retirando la ayuda externa ')
        .replace(/^Elegir /i, 'Supervisa su elección de ')
        .replace(/^Inspirar /i, 'Pídele que inspire ')
        .replace(/^Mantener /i, 'Indícale que mantenga ')
        .replace(/^Expulsar /i, 'Pídele que expulse ')
        .replace(/^Tensar /i, 'Indícale que tense ')
        .replace(/^Relajar /i, 'Indícale que relaje ')
        .replace(/^Concentrarse /i, 'Anímale a concentrarse ')
        .replace(/^Prestar atención /i, 'Recuérdale prestar atención ')
        .replace(/^Dividir /i, 'Aconséjale dividir ');
    } else if (isBachi) {
      adapted = adapted
        .replace(/^El adulto modela el proceso verbalizando los pasos /i, 'Anímale a que planifique los pasos verbalmente ')
        .replace(/^La persona realiza/i, 'Respeta que realice')
        .replace(/^Posteriormente verbaliza/i, 'Fomenta que organice en voz alta')
        .replace(/^Finalmente interioriza/i, 'Apoya que interiorice')
        .replace(/^Identificar /i, 'Comprueba que logre identificar ')
        .replace(/^Ordenar /i, 'Anímale a ordenar ')
        .replace(/^Establecer /i, 'Anímale a establecer ')
        .replace(/^Utilizar /i, 'Fomenta que utilice ')
        .replace(/^Estimar /i, 'Sugiérele estimar ')
        .replace(/^Alternar /i, 'Sugiérele alternar ')
        .replace(/^Usar /i, 'Fomenta el uso de ')
        .replace(/^Tras la actividad se revisa/i, 'Interésate por revisar tras la actividad')
        .replace(/^Analizar /i, 'Dialogad para analizar ')
        .replace(/^Proponer /i, 'Motívale a proponer ')
        .replace(/^Reforzar /i, 'Muestra tu orgullo y refuerza ')
        .replace(/^Reducir /i, 'Reduce al mínimo tu intervención al ')
        .replace(/^Retirar /i, 'Retira tu intervención al ')
        .replace(/^Elegir /i, 'Respeta que elija ')
        .replace(/^Inspirar /i, 'Sugiérele que inspire ')
        .replace(/^Mantener /i, 'Sugiérele que mantenga ')
        .replace(/^Expulsar /i, 'Sugiérele que expulse ')
        .replace(/^Tensar /i, 'Sugiérele tensar ')
        .replace(/^Relajar /i, 'Sugiérele relajar ')
        .replace(/^Concentrarse /i, 'Sugiérele concentrarse ')
        .replace(/^Prestar atención /i, 'Sugiérele prestar atención ')
        .replace(/^Dividir /i, 'Sugiérele dividir ');
    } else if (isAdulto) {
      adapted = adapted
        .replace(/^El adulto modela el proceso verbalizando los pasos /i, 'Apoya que planifique sus propios pasos ')
        .replace(/^La persona realiza/i, 'Respeta que realice')
        .replace(/^Posteriormente verbaliza/i, 'Respeta cómo organiza en voz alta')
        .replace(/^Finalmente interioriza/i, 'Comprende que interiorice')
        .replace(/^Identificar /i, 'Respeta su forma de identificar ')
        .replace(/^Ordenar /i, 'Respeta cómo ordena ')
        .replace(/^Establecer /i, 'Apoya cómo decide establecer ')
        .replace(/^Utilizar /i, 'Apóyale al utilizar ')
        .replace(/^Estimar /i, 'Comentad cómo suele estimar ')
        .replace(/^Alternar /i, 'Comentad cómo alterna ')
        .replace(/^Usar /i, 'Respeta el uso de ')
        .replace(/^Tras la actividad se revisa/i, 'Pregúntale qué tal fue tras la actividad')
        .replace(/^Analizar /i, 'Pregúntale si quiere analizar ')
        .replace(/^Proponer /i, 'Escucha lo que tiene que proponer ')
        .replace(/^Reforzar /i, 'Comparte tu orgullo por ')
        .replace(/^Reducir /i, 'Mantente al margen y permite ')
        .replace(/^Retirar /i, 'Mantente al margen y permite ')
        .replace(/^Elegir /i, 'Apoya sus elecciones al ')
        .replace(/^Inspirar /i, 'Si le ayuda, acompáñale a inspirar ')
        .replace(/^Mantener /i, 'Si le ayuda, acompáñale a mantener ')
        .replace(/^Expulsar /i, 'Si le ayuda, acompáñale a expulsar ')
        .replace(/^Tensar /i, 'Si le ayuda, acompáñale a tensar ')
        .replace(/^Relajar /i, 'Si le ayuda, acompáñale a relajar ')
        .replace(/^Concentrarse /i, 'Dale espacio para concentrarse ')
        .replace(/^Prestar atención /i, 'Dale espacio para prestar atención ')
        .replace(/^Dividir /i, 'Interésate en cómo decide dividir ');
    } else {
      adapted = adapted
        .replace(/^Identificar /i, 'Ayúdale a identificar ')
        .replace(/^Ordenar /i, 'Guiarle para ordenar ')
        .replace(/^Establecer /i, 'Definid juntos o ayúdale a establecer ')
        .replace(/^Utilizar /i, 'Acompáñale en el uso de ')
        .replace(/^Estimar /i, 'Animarle a estimar ')
        .replace(/^Alternar /i, 'Asegúrate de que alterna ')
        .replace(/^Usar /i, 'Proporciónale y enséñale a usar ')
        .replace(/^Tras la actividad se revisa/i, 'Revisad juntos tras la actividad')
        .replace(/^Analizar /i, 'Analizad juntos ')
        .replace(/^Proponer /i, 'Animarle a proponer ')
        .replace(/^Reforzar /i, 'Refuerza tú ')
        .replace(/^Reducir /i, 'Ve reduciendo ')
        .replace(/^Retirar /i, 'Ve retirando ')
        .replace(/^Elegir /i, 'Ayúdale a elegir ')
        .replace(/^Inspirar /i, 'Pídele que inspire ')
        .replace(/^Mantener /i, 'Indícale que mantenga ')
        .replace(/^Expulsar /i, 'Pídele que expulse ')
        .replace(/^Tensar /i, 'Guíale para que tense ')
        .replace(/^Relajar /i, 'Indícale que relaje ')
        .replace(/^Concentrarse /i, 'Ayúdale a concentrarse ')
        .replace(/^Prestar atención /i, 'Anímale a prestar atención ')
        .replace(/^Dividir /i, 'Ayúdale a dividir ');
    }

    return adapted;
  });
};
