export const adaptDescription = (title: string, originalDesc: string, ageId: string | null) => {
  const isPrimaria = ['p1', 'p2', 'p3'].includes(ageId || '');
  const isSecundaria = ['e1', 'e2', 'b1'].includes(ageId || '');
  const isAdulto = ageId === 'a18';

  if (!ageId) return originalDesc;

  if (isPrimaria) {
    if (originalDesc.includes('Consiste en respirar utilizando el abdomen')) return 'En vez de usar el pecho, vamos a respirar usando la barriguita como si estuvieras inflando un globo mágico. Lo haremos poquito a poco, como un juego super divertido.';
    if (originalDesc.includes('Ayuda a disminuir activación')) return 'Con este truco mágico, tu cuerpo se relajará un montón y podrás descansar mucho mejor.';
    if (originalDesc.includes('Favorece concentración')) return 'Te ayudará a que sea más fácil prestar atención y sentirte genial por dentro.';
    if (originalDesc.includes('Técnica especialmente útil con niños')) return '¡Va a ser súper divertido! Vamos a imaginarnos que somos globos.';
    if (originalDesc.includes('Favorece el control de la intensidad')) return 'Aprenderemos a soplar despacito como si tuvieras una tarta de cumpleaños brillante delante.';
    if (originalDesc.includes('Útil para disminuir ansiedad')) return 'Un truco buenísimo para calmar todos esos nervios o enfados que a veces sentimos.';
    if (originalDesc.includes('Busca reducir impulsividad')) return 'Jugaremos a escondernos en nuestro caparazón para calmar el cuerpo cuando tenga ganas de ir súper rápido.';
    if (originalDesc.includes('moment presente')) return 'Jugaremos a darnos cuenta de lo que pasa ahora mismo, sin preocuparnos por nada más.';
    if (originalDesc.includes('Permite mantener la atención')) return 'Un juego corto: trabajamos un ratito pequeño y ganamos un premio de descanso rápido.';
    if (originalDesc.includes('Autoinstrucciones')) return 'Nos hablaremos a nosotros mismos en voz alta con frases cortitas, para acordarnos de lo que hay que hacer y hacer un trabajo genial.';
    if (originalDesc.includes('Organización y planificación')) return 'Antes de empezar, prepararemos muy bien los dibujitos y pasos para saber exactamente a qué jugar y qué hacer.';
    if (originalDesc.includes('Gestión del tiempo')) return 'Usaremos relojes de papás y colores para saber cuánto tiempo jugamos y arreglamos todo.';
    if (originalDesc.includes('Autoevaluación')) return 'Como detectives, comprobaremos cómo de bien lo hemos hecho y nos pondremos unas medallas imaginarias.';
    if (originalDesc.includes('Refuerzo positivo')) return 'Cada vez que hagamos una cosita bien, ¡chocaremos esos cinco y habrá cosas chulas!';
    if (originalDesc.includes('Organización del entorno')) return 'Antes de empezar, quitaremos todos los juguetes que nos despistan para tener una súper mesa lista.';
    if (originalDesc.includes('Evita la sobrecarga')) return 'Vamos a hacer solo una cosa. Acabamos con los lápices y luego pasamos a los colores.';
    if (originalDesc.includes('Externalización')) return 'Haremos unas marcas en un papel con nuestro progreso. ¡Cada palomita es un puntazo!';
    if (originalDesc.includes('Fragmentación')) return 'Como puzles, separaremos los trabajos gigantes en mini pasitos muy fáciles.';
    if (originalDesc.includes('Control del entorno')) return 'Apagaremos las pantallitas para que la mesa esté tranquila y silenciosa.';
    if (originalDesc.includes('Estimulación auditiva')) return 'Pondremos sonidos relajantes como si lloviera afuera para que sea más chulo aprender.';
    if (originalDesc.includes('Técnicas de inicio')) return 'Prometemos hacerlo solos 2 minutitos, y si nos mola la aventura, seguimos.';
    if (originalDesc.includes('Apoyos visuales')) return 'Pegatinas y esquemas grandes nos ayudarán un montón a saber cómo va todo.';
    if (originalDesc.includes('reducir la fatiga')) return 'Paramos muchas veces y jugamos con las manos; así tu mente nunca se cansa.';
    
    // Fallback
    return originalDesc + ' ¡Aprenderemos a hacerlo paso a paso, de forma fácil e increíble!';
  }

  if (isSecundaria) {
    if (originalDesc.includes('Consiste en respirar utilizando el abdomen')) return 'Usa tu abdomen para respirar en vez del pecho; te ayudará un montón a quitar tensiones y conseguir un estado de calma antes de tus clases o exámenes.';
    if (originalDesc.includes('Ayuda a disminuir activación')) return 'Genial para relajar todo tu cuerpo bajando revoluciones cuando notas que la cabeza te va a mil y te abrumas.';
    if (originalDesc.includes('Favorece concentración')) return 'Te servirá para concentrarte mejor en tus estudios y saber manejar las frustraciones típicas de la semana con algo más de autocontrol.';
    if (originalDesc.includes('Técnica especialmente útil con niños')) return 'A lo mejor suena un poco infantil, pero visualizar cómo inflas tu abdomen de manera profunda desconecta completamente los malos rollos de tu mente.';
    if (originalDesc.includes('Favorece el control de la intensidad')) return 'Controlar tu propia respiración sin brusquedad, de una manera constante, como manteniendo una pequeña llama.';
    if (originalDesc.includes('Útil para disminuir ansiedad')) return 'Un recurso de oro para quitar la ansiedad y la fobia, perfecto para momentos antes de algún examen o presentación oral en la ESO.';
    if (originalDesc.includes('Busca reducir impulsividad')) return 'El objetivo es frenar y calmarte en un segundito cuando sientas que un enfado domina tus respuestas, haciéndote reflexionar y tomarte un parón.';
    if (originalDesc.includes('moment presente')) return 'Se trata de aparcar los pensamientos del tipo "Y si no apruebo" y observar cómo estás hoy en tu cuerpo.';
    if (originalDesc.includes('Permite mantener la atención')) return 'Súper práctico para mantener la atención en tareas que consideres muy aburridas combinándolo con descansos merecidos que tú decidas.';
    if (originalDesc.includes('Autoinstrucciones')) return 'Aprende a hablarte y guiarte de forma interna; como el mister que orienta el siguiente movimiento. Ideal ante el aumento de la exigencia del instituto.';
    if (originalDesc.includes('Organización y planificación')) return 'Da el paso para intentar estructurar qué harás con tu agenda por primera vez y de forma visible antes de que todo se vuelva caótico el último día.';
    if (originalDesc.includes('Gestión del tiempo')) return 'Planifica en base a alarmas digitales cuánto debes gastar en los ejercicios o estudiar sin procrastinar indefinidamente en la pantalla del sofá.';
    if (originalDesc.includes('Autoevaluación')) return 'Revisa por tu propia cuenta si los objetivos han salido como te habías marcado antes de que llegue la bronca o el castigo.';
    if (originalDesc.includes('Refuerzo positivo')) return 'Premia tu dedicación pidiendo y consiguiendo metas razonables y motivadoras en cuanto acabes la peor parte del estudio diario.';
    if (originalDesc.includes('Organización del entorno')) return 'Limita tus propios distractores de forma individual: elimina notificaciones del grupo o deja el móvil fuera mientras termines esta primera ronda.';
    if (originalDesc.includes('Evita la sobrecarga')) return 'Saca solo los libros que vayas a estudiar y termina primero mates y luego inglés. Mezclar todo solo empeorará todo.';
    if (originalDesc.includes('Externalización')) return 'Apóyate escribiendo todos tus objetivos en una lista o agenda digital y ve tachándolas a tu ritmo.';
    if (originalDesc.includes('Fragmentación')) return 'Siente menos agobio al hacer pedacitos muy pequeños lo que tienes que estudiar (Ej. hoy solo estudio un punto fijo de sociales).';
    if (originalDesc.includes('Control del entorno')) return 'Fija tú mismo normas claras: teléfono dado la vuelta y ventanas del PC que no uses o no necesitas cerradas; menos ruido = menos estrés.';
    if (originalDesc.includes('Estimulación auditiva')) return 'Aplica ruido blanco o música de ondas que bloqueen conversaciones laterales mientras intentas prepararte un examen concentrado.';
    if (originalDesc.includes('Técnicas de inicio')) return 'Inicia algo sin motivación durante 5 minutitos solo para no postergar un largo documento de Word infinito lleno de nervios. Rompe la inercia.';
    if (originalDesc.includes('Apoyos visuales')) return 'Subrayados potentes y organizadores vistosos marcarán la diferencia de leer hojas densas y complejas por semanas de la ESO/Bachiller.';
    if (originalDesc.includes('reducir la fatiga')) return 'Dale su sitio al descanso en intervalos controlados. Oblígate a no pasarte y hacer estiramientos puntuales desde el final de las clases.';
    
    // Fallback
    return originalDesc + ' Toma un papel más activo en guiar tú mismo estas técnicas. Tus padres estarán solo como supervisores de vez en cuando.';
  }

  if (isAdulto) {
    if (originalDesc.includes('Consiste en respirar utilizando el abdomen')) return 'Fundamentada en utilizar el diafragma en lugar de la respiración torácica y superficial diaria, siendo el aliado perfecto a llevar donde interese relajar las constantes corporales en unos segundos.';
    if (originalDesc.includes('Ayuda a disminuir activación')) return 'Herramienta vital para rebajar picos fisiológicos producidos por rumiación adulta y agobio laboral prolongado.';
    if (originalDesc.includes('Favorece concentración')) return 'Estimula tu centrado atencional de forma consciente; excelente autorregulación ante retos densos intelectualmente hablando en la vida diaria.';
    if (originalDesc.includes('Técnica especialmente útil con niños')) return 'Un gran ejercicio adaptativo. Aunque la descripción parece infantil, visualizar en la respiración nos re-ancla de forma muy contundente en el cuerpo tras largas horas sedentarias.';
    if (originalDesc.includes('Favorece el control de la intensidad')) return 'Consiste en dominar exhalaciones extremadamente estables; perfecto para evitar estallar bajo presión familiar o del curro impidiéndote colapsos innecesarios.';
    if (originalDesc.includes('Útil para disminuir ansiedad')) return 'Una de las metodologías top para erradicar las subidas directas de taquicardias, pánico escénico y excesos de pensamientos ansiógenos generalizados en la cama.';
    if (originalDesc.includes('Busca reducir impulsividad')) return 'Trata de retraer absolutamente todos los inputs cuando exista fatiga mental o reactividad en tus círculos más cercanos; dándote la elección inteligente de reaccionar sin impulsión hiperactiva.';
    if (originalDesc.includes('moment presente')) return 'Orientada enteramente en localizar tus emociones presentes en los pensamientos actuales y rebajando considerablemente todos aquellos procesos tóxicos cognitivos que nos desvían sin control.';
    if (originalDesc.includes('Permite mantener la atención')) return 'Aísla las distracciones modernas implementando ventanas laborales cortas pero sumamente eficaces con Pomodoro, sin quemar dopamina por anticipado.';
    if (originalDesc.includes('Autoinstrucciones')) return 'Incorpora estrategias verbales o anotadoras propias altamente maduras dirigidas puramente a que te encamines proactivamente en todas tus metas adultas complejas sin la existencia de padres u orientadores que manden tu atención al centro.';
    if (originalDesc.includes('Organización y planificación')) return 'Lidia proactivamente con tu propio esquema laboral diario, creando jerarquías robustas, mapas o calendarios avanzados usando tu autonomía y madurez, minimizando improvisaciones o el temido caos impredecible.';
    if (originalDesc.includes('Gestión del tiempo')) return 'Optimización pura al aplicar metodologías para equilibrar el tiempo e integrar la jornada de una tarea pesada estimándote tu propia saturación a corto plazo y usando recordatorios automatizados digitalmente en tu calendario.';
    if (originalDesc.includes('Autoevaluación')) return 'Evalúa rigurosamente de manera pragmática qué funcionó la pasada semana y establece tus métricas para una retroalimentación y gratificación del todo eficiente evitando la continua insatisfacción de los que tenemos DA.';
    if (originalDesc.includes('Refuerzo positivo')) return 'Construye por ti mismo, pequeñas válvulas de logros e incentivos (algo lúdico o un capricho tras cumplir, por ejemplo, los pagos burocráticos y gestiones pesadas pendientes).';
    if (originalDesc.includes('Organización del entorno')) return 'Refina y bloquea el caos sensorial; tu propio puesto de trabajo o despacho es la trinchera clave donde deberás dejar lo inservible o aquellos teléfonos/mensajes lejos para generar espacios puros para resolver el quehacer diario.';
    if (originalDesc.includes('Evita la sobrecarga')) return 'Sustenta la monotorización extrema a una sola meta específica cerrando 10 pestañas mentales abiertas, para mitigar el agotamiento visual, fatiga atencional paralizante y evitar saltar entre frentes de diferentes índoles.';
    if (originalDesc.includes('Externalización')) return 'Apóyate en listas de To-Dos digitales para dejar en paz al córtex frontal, eludiendo la obligación biológicamente costosa de tratar de recordarlo y retenerlo exhaustivamente todo.';
    if (originalDesc.includes('Fragmentación')) return 'Rebaja la evasiva por montañas infinitas que produce la "gestión de Hacienda" o "Aseo integral de casa", dividiéndolas mecánicamente y acometiendo tareas minúsculas ridículamente viables por día (como enviar un simple mail o el lavado de los cubiertos).';
    if (originalDesc.includes('Control del entorno')) return 'Aplica bloqueadores informáticos (app-block) para webs dañinas al proceso de estudio o la sobre exposición. Tú eres el arquitecto soberano de todo lo que roba tu entorno de dopamina al cabo del día normal.';
    if (originalDesc.includes('Estimulación auditiva')) return 'Bloqueador puro con música funcional instrumental que promueva flujo dinámico, enmascarando cualquier ruido ajeno proveniente del transporte, pareja conviviente, etc., ayudándote al enfoque.';
    if (originalDesc.includes('Técnicas de inicio')) return 'Inicia lo irremediable superando barreras que impiden romper un estado atencional viciado. Solo siéntate y ejecuta una primera mini pauta para forzar ese arranque basal superando la procastintación de inmediato.';
    if (originalDesc.includes('Apoyos visuales')) return 'Exhibe visualmente en el escritorio todo calendario, postit estratégico grande y anotador vistoso o cronograma, sustituyendo la dependencia a la memoria rutinaria, un lastre típico adulto con TDAH.';
    if (originalDesc.includes('reducir la fatiga')) return 'Desconecta de manera tajante para que el descanso sirva realmente. Obliga al cerebro a pausar físicamente antes del desgaste neuronal inevitable si mantienes secuencias extenuantes, en hiperfoco sin levantarte.';
    
    // Fallback
    return originalDesc + ' Toma decisiones estratégicas totalmente individuales que combatan el caos. Tu autonomía es absoluta y se nutre del control deliberado.';
  }

  return originalDesc;
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

  return steps;
};
