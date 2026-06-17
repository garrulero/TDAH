export interface VideoScene {
  title: string;
  action: string;
  narrator: string;
}

export interface VideoScript {
  id: string; // matches age range or 'padre'
  title: string;
  scenes: VideoScene[];
}

export const VIDEO_SCRIPTS: Record<string, VideoScript> = {
  p1: {
    id: 'p1',
    title: '1º Ciclo de Primaria',
    scenes: [
      {
        title: 'ESCENA 1: PRESENTACIÓN',
        action: '(Imagen de varios niños jugando y aprendiendo en clase)',
        narrator: '¿Sabías que todos los cerebros son diferentes? Algunos aprenden de una manera, otros de otra. ¡Y eso está muy bien! Hoy vamos a conocer algo llamado TDAH.'
      },
      {
        title: 'ESCENA 2: ¿QUÉ ES EL TDAH?',
        action: '(Aparece un personaje infantil simpático)',
        narrator: 'Los niños y niñas con TDAH tienen un cerebro que funciona de una forma un poco diferente. A veces les cuesta más prestar atención, esperar su turno o quedarse quietos durante mucho tiempo. Pero eso no significa que no quieran hacerlo bien.'
      },
      {
        title: 'ESCENA 3: ¿CÓMO SE PUEDE SENTIR?',
        action: '(Se muestran situaciones cotidianas)',
        narrator: 'Algunas veces pueden: distraerse fácilmente, olvidar cosas o perder materiales, tener muchas ganas de moverse, hablar o actuar antes de pensar, sentir emociones muy fuertes, como enfado, alegría o tristeza. Y todo eso puede hacer que algunas tareas sean más difíciles.'
      },
      {
        title: 'ESCENA 4: SUS FORTALEZAS',
        action: '(El personaje realiza actividades que le gustan)',
        narrator: 'Pero los niños y niñas con TDAH también tienen muchas cualidades. Pueden ser muy creativos, curiosos, divertidos, imaginativos y tener ideas increíbles. Cada persona es diferente y tiene muchas cosas buenas que aportar.'
      },
      {
        title: 'ESCENA 5: MENSAJE IMPORTANTE',
        action: '(El personaje mira a cámara acompañado de amigos)',
        narrator: 'Recuerda algo muy importante: Tener TDAH no significa ser vago, ni portarse mal, ni no esforzarse. Simplemente significa que su cerebro funciona de una manera diferente y que, a veces, necesita un poco más de ayuda y comprensión.'
      },
      {
        title: 'ESCENA 6: CIERRE',
        action: '(Grupo de niños jugando juntos)',
        narrator: 'Todos somos diferentes y todos aprendemos de maneras distintas. Cuando nos ayudamos, nos respetamos y nos comprendemos, hacemos que la escuela sea un lugar mejor para todos. "Cada cerebro es único. ¡La diversidad nos hace especiales!"'
      }
    ]
  },
  p2: {
    id: 'p2',
    title: '2º Ciclo de Primaria',
    scenes: [
      {
        title: 'ESCENA 1: INTRODUCCIÓN',
        action: '(Imagen de una clase donde cada niño realiza una actividad diferente)',
        narrator: '¿Te has dado cuenta de que todas las personas somos diferentes? Algunas aprenden más rápido leyendo, otras escuchando y otras necesitan moverse para concentrarse mejor. Hoy vamos a hablar del TDAH, una forma diferente de funcionar del cerebro que tienen algunos niños y niñas.'
      },
      {
        title: 'ESCENA 2: ¿QUÉ ES EL TDAH?',
        action: '(Aparece una animación de un cerebro)',
        narrator: 'Las siglas TDAH significan Trastorno por Déficit de Atención e Hiperactividad. Es una condición del neurodesarrollo, es decir, una forma diferente en la que se desarrolla y funciona el cerebro. Esto puede hacer que algunas tareas del día a día resulten más difíciles.'
      },
      {
        title: 'ESCENA 3: ¿CÓMO PUEDE AFECTAR?',
        action: '(Aparecen diferentes situaciones en el aula y en el patio)',
        narrator: 'Algunas personas con TDAH pueden tener dificultades para: mantener la atención durante mucho tiempo, organizar sus tareas o recordar lo que tienen que hacer, esperar su turno cuando están emocionadas, controlar las ganas de moverse o hablar, gestionar emociones como el enfado, la frustración o la impaciencia. Pero no todas las personas con TDAH son iguales. Cada una tiene sus propias fortalezas y necesidades.'
      },
      {
        title: 'ESCENA 4: ¿CÓMO SE SIENTEN?',
        action: '(Se muestra a un niño intentando concentrarse mientras ocurren muchas cosas a su alrededor)',
        narrator: 'Imagina que estás intentando escuchar a tu profesor, pero tu cerebro recibe muchos estímulos al mismo tiempo. A veces puede ser difícil concentrarse o recordar instrucciones, aunque estés esforzándote mucho. Por eso algunas personas con TDAH pueden sentirse frustradas cuando los demás piensan que no están prestando atención o que no se esfuerzan.'
      },
      {
        title: 'ESCENA 5: SUS FORTALEZAS',
        action: '(Se muestran niños realizando actividades creativas, deportivas o de resolución de problemas)',
        narrator: 'Además de las dificultades, muchas personas con TDAH tienen grandes fortalezas. Pueden ser muy creativas, imaginativas, curiosas, espontáneas y llenas de energía. También suelen aportar ideas originales y disfrutar explorando cosas nuevas.'
      },
      {
        title: 'ESCENA 6: ROMPIENDO MITOS',
        action: '(Aparecen frases tachadas)',
        narrator: 'Hay algo muy importante que debemos recordar: El TDAH no es vaguería. No significa que una persona sea menos inteligente. No es una excusa para comportarse mal. Es una condición del neurodesarrollo. Y las personas con TDAH pueden aprender, crecer y conseguir sus objetivos cuando cuentan con apoyos adecuados.'
      },
      {
        title: 'ESCENA 7: ¿CÓMO PODEMOS AYUDAR?',
        action: '(Compañeros colaborando entre sí)',
        narrator: 'Todos podemos ayudar: siendo pacientes, escuchando sin juzgar, respetando las diferencias, ofreciendo ayuda cuando alguien la necesita. Porque cada persona aprende de una manera diferente.'
      },
      {
        title: 'ESCENA 8: CIERRE',
        action: '(Imagen de todos los niños juntos)',
        narrator: 'El TDAH es solo una parte de una persona, no la define. Lo más importante es conocer nuestras fortalezas, aprender a superar las dificultades y respetar las diferencias de los demás. "Todos aprendemos de forma diferente. Comprendernos nos ayuda a crecer juntos."'
      }
    ]
  },
  p3: {
    id: 'p3',
    title: '3º Ciclo de Primaria',
    scenes: [
      {
        title: 'ESCENA 1: INTRODUCCIÓN',
        action: '(Imagen de diferentes estudiantes trabajando, jugando y participando en clase)',
        narrator: 'Cada persona tiene una forma única de pensar, aprender y relacionarse con los demás. Algunas personas necesitan más tiempo para aprender ciertas cosas, mientras que otras necesitan apoyos diferentes para alcanzar sus objetivos. Hoy vamos a conocer mejor qué es el TDAH y cómo influye en la vida de quienes lo tienen.'
      },
      {
        title: 'ESCENA 2: ¿QUÉ ES EL TDAH?',
        action: '(Animación de un cerebro procesando información)',
        narrator: 'El TDAH significa Trastorno por Déficit de Atención e Hiperactividad. Es una condición del neurodesarrollo, lo que significa que el cerebro se desarrolla y funciona de una manera diferente. El TDAH no es una enfermedad ni algo que una persona elija tener. Forma parte de la manera en la que algunas personas procesan la información, regulan su atención y controlan sus impulsos.'
      },
      {
        title: 'ESCENA 3: ¿CÓMO PUEDE MANIFESTARSE?',
        action: '(Aparecen situaciones reales en el aula, en casa y en actividades de ocio)',
        narrator: 'Las personas con TDAH pueden experimentar algunas dificultades relacionadas con: la atención (les puede costar mantener la concentración), la organización (olvidan tareas o pierden materiales), la impulsividad (hablan o actúan sin pensar en las consecuencias), la hiperactividad (inquietud constante) y la regulación emocional (sienten emociones intensas).'
      },
      {
        title: 'ESCENA 4: MÁS ALLÁ DE LAS APARIENCIAS',
        action: '(Un alumno intenta concentrarse mientras se distrae con diferentes estímulos)',
        narrator: 'Muchas veces, desde fuera, puede parecer que una persona con TDAH no presta atención o no se esfuerza lo suficiente. Sin embargo, la realidad suele ser muy diferente. A menudo tienen que realizar un esfuerzo extra para organizarse, concentrarse o controlar sus impulsos. Algunas tareas que para otras personas son sencillas pueden requerir mucho más trabajo y energía.'
      },
      {
        title: 'ESCENA 5: FORTALEZAS Y CAPACIDADES',
        action: '(Se muestran diferentes estudiantes destacando en distintos ámbitos)',
        narrator: 'El TDAH también puede estar acompañado de numerosas fortalezas. Muchas personas con TDAH destacan por su creatividad, su capacidad para encontrar soluciones originales, su entusiasmo, su espontaneidad y su curiosidad por aprender cosas nuevas. Cada persona es diferente y sus capacidades no dependen únicamente de tener o no tener TDAH.'
      },
      {
        title: 'ESCENA 6: ROMPIENDO MITOS',
        action: '(Aparecen afirmaciones falsas y después se corrigen)',
        narrator: 'Existen muchos mitos sobre el TDAH. No significa que una persona sea menos inteligente. No es consecuencia de una mala educación. No es falta de esfuerzo o interés. Es una condición del neurodesarrollo reconocida por profesionales de la salud y la educación. Con los apoyos adecuados, las personas con TDAH pueden alcanzar sus metas y desarrollar todo su potencial.'
      },
      {
        title: 'ESCENA 7: ¿QUÉ PODEMOS HACER?',
        action: '(Grupo colaborando en clase)',
        narrator: 'Todos podemos contribuir a crear un entorno más inclusivo respetando las diferencias, evitando las burlas o los prejuicios, escuchando y comprendiendo antes de juzgar, ayudando cuando alguien lo necesite, y valorando las capacidades de cada persona. La inclusión empieza cuando entendemos que no todas las personas aprenden, sienten o actúan de la misma manera.'
      },
      {
        title: 'ESCENA 8: MENSAJE FINAL',
        action: '(Imagen de un grupo diverso de estudiantes caminando juntos)',
        narrator: 'El TDAH es solo una característica más de una persona. No define quién es ni todo lo que puede llegar a conseguir. Comprender las diferencias, respetarlas y apoyarnos mutuamente nos ayuda a construir una escuela más inclusiva, donde todas las personas tengan la oportunidad de participar, aprender y sentirse valoradas. "Las diferencias no nos separan. Nos enriquecen y nos ayudan a aprender unos de otros."'
      }
    ]
  },
  e1: {
    id: 'e1',
    title: '1º Ciclo de la ESO',
    scenes: [
      {
        title: 'ESCENA 1: INTRODUCCIÓN',
        action: '(Imagen de estudiantes en diferentes situaciones)',
        narrator: 'Seguramente has oído hablar alguna vez del TDAH. Quizá tengas algún compañero o compañera con este diagnóstico, o incluso puede que tú mismo lo tengas. Pero... ¿realmente sabemos qué es el TDAH? Muchas veces se asocia únicamente con personas que se distraen o que no pueden quedarse quietas. Sin embargo, la realidad es mucho más compleja.'
      },
      {
        title: 'ESCENA 2: ¿QUÉ ES EL TDAH?',
        action: '(Animación de conexiones cerebrales)',
        narrator: 'El TDAH (Trastorno por Déficit de Atención e Hiperactividad) es una condición del neurodesarrollo. Esto significa que algunas áreas del cerebro relacionadas con la atención, la planificación, el autocontrol y la regulación emocional funcionan de manera diferente. No es una enfermedad contagiosa ni algo que una persona elija tener. Tampoco desaparece simplemente porque alguien se esfuerce más.'
      },
      {
        title: 'ESCENA 3: ¿CÓMO PUEDE AFECTAR EN EL DÍA A DÍA?',
        action: '(Escenas de estudiantes en clase, haciendo tareas y relacionándose con amigos)',
        narrator: 'El TDAH puede influir en diferentes aspectos de la vida diaria: mantener la atención durante una explicación larga, organizar tareas o tiempos de estudio, recordar fechas importantes, controlar impulsos y pensar antes de actuar, o gestionar emociones como la frustración, el enfado o la ansiedad. Estas dificultades pueden aparecer en clase, en casa o en las relaciones con otras personas.'
      },
      {
        title: 'ESCENA 4: LO QUE NO SIEMPRE SE VE',
        action: '(Un estudiante intenta estudiar mientras aparecen múltiples pensamientos y distracciones)',
        narrator: 'A veces, desde fuera, solo vemos el resultado: una tarea sin terminar, una interrupción en clase o un olvido. Pero muchas veces no vemos el esfuerzo que hay detrás. Algunas personas con TDAH tienen que dedicar mucha más energía que otras para mantenerse concentradas o controlar sus impulsos. Por eso es importante evitar los juicios rápidos y tratar de comprender lo que hay detrás de ciertas conductas.'
      },
      {
        title: 'ESCENA 5: ROMPIENDO MITOS',
        action: '(Aparecen frases en pantalla)',
        narrator: 'Existen muchas ideas equivocadas. "Es una excusa para no estudiar", "Si quisiera, podría concentrarse", "Solo afecta a niños pequeños", "Son menos capaces". ¡Ninguna es cierta! El TDAH es una condición real que puede afectar a personas de diferentes edades y requiere comprensión y apoyos adecuados.'
      },
      {
        title: 'ESCENA 6: FORTALEZAS Y POTENCIALIDADES',
        action: '(Imágenes de jóvenes participando en proyectos, deportes, arte y actividades grupales)',
        narrator: 'Tener TDAH no significa tener menos capacidades. Muchas personas destacan por su creatividad, su capacidad para pensar de forma diferente, su espontaneidad, su energía y su habilidad para encontrar soluciones originales. Numerosos deportistas, científicos, artistas y emprendedores han convivido con el TDAH a lo largo de su vida.'
      },
      {
        title: 'ESCENA 7: EL PAPEL DE LOS COMPAÑEROS',
        action: '(Grupo de estudiantes colaborando en una actividad)',
        narrator: 'Todos podemos contribuir a crear un entorno más inclusivo: escuchando sin juzgar, evitando etiquetas y burlas, mostrando empatía cuando alguien tiene dificultades, y respetando las diferentes formas de aprender. La inclusión no consiste en tratar a todo el mundo igual, sino en ofrecer a cada persona lo que necesita para desarrollarse en igualdad de oportunidades.'
      },
      {
        title: 'ESCENA 8: MENSAJE FINAL',
        action: '(Imagen de varios adolescentes caminando juntos por el instituto)',
        narrator: 'El TDAH es solo una parte de la identidad de una persona. No define su inteligencia, su personalidad ni su futuro. Comprender qué es el TDAH nos ayuda a derribar prejuicios, mejorar la convivencia y construir entornos donde todas las personas puedan sentirse aceptadas y valoradas. "Entender las diferencias es el primer paso para construir una comunidad más inclusiva."'
      }
    ]
  },
  e2: {
    id: 'e2',
    title: '2º Ciclo de la ESO',
    scenes: [
      {
        title: 'ESCENA 1: INTRODUCCIÓN',
        action: '(Imágenes de adolescentes en clase, estudiando, utilizando el móvil, practicando deporte y compartiendo tiempo con amigos)',
        narrator: 'Todos tenemos fortalezas, dificultades y formas diferentes de aprender y relacionarnos. Sin embargo, algunas personas tienen que realizar un esfuerzo extra para organizarse, concentrarse o gestionar sus emociones. Es el caso de muchos adolescentes con TDAH. Pero, ¿qué significa realmente tener TDAH?'
      },
      {
        title: 'ESCENA 2: ¿QUÉ ES EL TDAH?',
        action: '(Animación sencilla del cerebro mostrando diferentes funciones ejecutivas)',
        narrator: 'El TDAH es una condición del neurodesarrollo que afecta al funcionamiento de determinadas áreas del cerebro relacionadas con la atención, la planificación, la organización, el control de impulsos y la regulación emocional. No se trata de falta de interés, de esfuerzo o de responsabilidad. Y sus efectos pueden estar presentes durante la adolescencia y la vida adulta.'
      },
      {
        title: 'ESCENA 3: ¿CÓMO SE MANIFIESTA EN LA ESO?',
        action: '(Escenas cotidianas en el instituto)',
        narrator: 'Durante la Secundaria las exigencias aumentan: hay más asignaturas, más tareas y mayor necesidad de autonomía. Por eso las dificultades se hacen más visibles: problemas para organizar el estudio, dificultades para mantener la atención, tendencia a procrastinar o dejar tareas para el último momento, olvidos frecuentes o impulsividad en las relaciones sociales.'
      },
      {
        title: 'ESCENA 4: EL IMPACTO EMOCIONAL Y SOCIAL',
        action: '(Adolescente observando cómo otros compañeros trabajan con facilidad)',
        narrator: 'El TDAH también puede influir en cómo una persona se siente consigo misma. Cuando alguien recibe constantemente mensajes como "No te esfuerzas lo suficiente" o "Eres demasiado despistado", puede acabar sintiendo frustración, inseguridad o una baja autoestima. Es importante entender que detrás de esas conductas hay dificultades reales que necesitan apoyo.'
      },
      {
        title: 'ESCENA 5: ROMPIENDO ESTEREOTIPOS',
        action: '(Aparecen diferentes afirmaciones en pantalla)',
        narrator: 'Existen mitos falsos: "Las personas con TDAH son menos inteligentes", "Solo afecta a niños pequeños", "Tienen excusa para justificar malos resultados". La realidad es distinta. El TDAH es una condición reconocida científicamente. Tener TDAH no determina el talento, la inteligencia ni las posibilidades de éxito de nadie.'
      },
      {
        title: 'ESCENA 6: FORTALEZAS Y CAPACIDADES',
        action: '(Imágenes de adolescentes participando en proyectos creativos)',
        narrator: 'El TDAH no solo presenta desafíos, también suele ir acompañado de grandes fortalezas. Muchas personas destacan por su creatividad, innovación, espontaneidad, energía y su capacidad para interesarse y profundizar enormemente en temas que les motivan.'
      },
      {
        title: 'ESCENA 7: LA IMPORTANCIA DE LOS APOYOS',
        action: '(Imágenes de docentes, compañeros y familias colaborando)',
        narrator: 'Las personas con TDAH no necesitan que otros hagan las cosas por ellas. Necesitan comprensión, estrategias y oportunidades. La organización del entorno, el apoyo familiar y la comprensión de compañeros pueden marcar la diferencia. La inclusión no es reducir expectativas, sino dar recursos para que puedan alcanzarlas.'
      },
      {
        title: 'ESCENA 8: REFLEXIÓN FINAL',
        action: '(Plano de diferentes adolescentes caminando juntos por el centro educativo)',
        narrator: 'El TDAH es solo una característica más dentro de la diversidad. Comprenderlo nos ayuda a construir espacios más respetuosos, donde las diferencias no sean etiquetas, sino oportunidades de aprender unos de otros. Una sociedad inclusiva permite que todos crezcamos. "La inclusión comienza cuando dejamos de juzgar y empezamos a comprender."'
      }
    ]
  },
  b1: {
    id: 'b1',
    title: 'Etapa de Bachillerato',
    scenes: [
      {
        title: 'ESCENA 1: INTRODUCCIÓN',
        action: '(Imágenes de estudiantes de Bachillerato estudiando y planificando su futuro académico)',
        narrator: 'Durante la adolescencia y juventud se espera mayor autonomía y gestión de responsabilidades. Sin embargo, no todas las personas afrontan esto desde el mismo punto de partida. Hoy vamos a hablar del TDAH, una condición que afecta a miles de estudiantes y que a menudo está rodeada de malentendidos.'
      },
      {
        title: 'ESCENA 2: ¿QUÉ ES EL TDAH?',
        action: '(Animación del cerebro mostrando funciones relacionadas con la atención y funciones ejecutivas)',
        narrator: 'El TDAH es una condición del neurodesarrollo que influye en procesos como la memoria de trabajo, atención, planificación y regulación emocional. Se entiende dentro del concepto de neurodiversidad. No es una enfermedad, ni una elección personal, ni falta de disciplina; es una forma diferente de procesar la información y de interactuar con el entorno.'
      },
      {
        title: 'ESCENA 3: EL TDAH EN BACHILLERATO',
        action: '(Imágenes de estudiantes preparando exámenes fuertemente)',
        narrator: 'Las demandas en Bachillerato suelen ser elevadas y hay presión por el rendimiento. Esto hace más visibles dificultades como problemas para planificar tareas largas a largo plazo, mayor procrastinación, o mayor vulnerabilidad al estrés y frustración. Estas dificultades no reflejan en absoluto falta de capacidad ni interés intelectual.'
      },
      {
        title: 'ESCENA 4: MÁS ALLÁ DEL RENDIMIENTO ACADÉMICO',
        action: '(Estudiante reflexionando o interactuando con sus compañeros)',
        narrator: 'El impacto no se limita a las notas. Puede influir muchísimo en la autoestima. Recibir mensajes negativos constantes sobre la organización puede generar inseguridad o falta de confianza en las capacidades propias. Resulta fundamental diferenciar entre las dificultades derivadas del TDAH y los posibles juicios ajenos.'
      },
      {
        title: 'ESCENA 5: ROMPIENDO MITOS',
        action: '(Aparecen afirmaciones comunes que después se desmontan)',
        narrator: 'Aún hay mitos en el ambiente: "No se esfuerzan", "Si pueden concentrarse en una cosa, entonces no tienen TDAH", "Desaparece al crecer". ¡Falso! La ciencia desmiente eso. El TDAH continúa en la edad adulta y su expresión simplemente muta o se adecua a nuevos desafíos, y la capacidad de foco selectivo (hiperfoco) sí existe en el TDAH.'
      },
      {
        title: 'ESCENA 6: FORTALEZAS Y POTENCIALIDADES',
        action: '(Imágenes de jóvenes participando en investigaciones, arte y ciencia)',
        narrator: 'Hablar de TDAH únicamente desde los déficits es un error. Resaltan por características como: creatividad, innovación, capacidad para generar visiones originales, adaptabilidad ante retos muy cambiantes y energía brutal cuando se interesan profundamente en un campo. Hay que potenciar estas fortalezas.'
      },
      {
        title: 'ESCENA 7: UNA MIRADA INCLUSIVA',
        action: '(Imágenes de aulas inclusivas y estudio colaborativo)',
        narrator: 'La inclusión no consiste en tratar a todas las personas igual, sino en reconocer necesidades y ofrecer apoyos justos y proporcionados. Comprender el TDAH implica dejar atrás prejuicios y aportar respeto y pragmatismo, lo cual es mucho más eficaz para apoyar el desarrollo de todos los alumnos.'
      },
      {
        title: 'ESCENA 8: REFLEXIÓN FINAL',
        action: '(Plano de varios jóvenes mirando hacia el futuro hacia proyectos personales y de estudios superiores)',
        narrator: 'El TDAH no define tu valor ni tu potencial. Es simplemente una de tus muchas características. Entender esto permite construir una sociedad y un mundo educativo verdaderamente accesible para todos. "La neurodiversidad no es un problema que resolver, sino una realidad que comprender y respetar."'
      }
    ]
  },
  a18: {
    id: 'a18',
    title: 'Adulta (18-21 años)',
    scenes: [
      {
        title: 'ESCENA 1: INTRODUCCIÓN',
        action: '(Imágenes de jóvenes universitarios, formándose, trabajando y con amigos)',
        narrator: 'Cuando pensamos en TDAH se suele imaginar a un niño moviéndose velozmente por la clase. Pero el TDAH no se va como por arte de magia al cumplir 18. Miles de adultos conviven con esto cada día al trabajar, construir relaciones afectivas complejas y orientar sus carreras profesionales.'
      },
      {
        title: 'ESCENA 2: ¿QUÉ ES EL TDAH?',
        action: '(Animación de áreas neuronales complejas comunicándose)',
        narrator: 'Es una neurotipicidad que afecta a funciones ejecutivas puras: memoria procedimental de trabajo, regulación macro de impulsos y organización del tiempo proyectado. Es decir, las zonas del cerebro trabajan diferente causando disonancias temporales entre la acción deseada y la ejecutada. No es falta de capacidad o madurez, es ciencia biológica.'
      },
      {
        title: 'ESCENA 3: LA VIDA JÓVEN Y EL TDAH',
        action: '(Escenas gestionando facturas, entregas y tiempos sociales)',
        narrator: 'Tener total autonomía puede ser una bomba para una persona que de por sí gestiona mal el tiempo o las tareas. El nivel de control ahora recae al 100% sobre la persona y las consecuencias son reales: problemas para medir estimaciones de plazo, procrastinar cosas urgentes por baja estimulación dopaminérgica de ellas o impulsividad en decisiones interpersonales o compras.'
      },
      {
        title: 'ESCENA 4: LO QUE NO SIEMPRE SE VE (CAMUFLANDO)',
        action: '(Una joven en clase normal y luego sola exhausta emocionalmente)',
        narrator: 'El famoso "Masking" o camuflaje lleva un alto coste de la batería social. Como el adulto parece exteriormente organizado su círculo exige el estándar de alguien neurotípico, lo cual lleva a un sobreesfuerzo mental muy silencioso pero muy pesado que aboca irremediablemente al Burnout (Agotamiento crónico profundo).'
      },
      {
        title: 'ESCENA 5: SALUD MENTAL EN SERIO',
        action: '(Entorno grupal hablando sobre salud mental)',
        narrator: 'Los daños directos a la autoestima por años escuchando: "tienes talento pero no quieres" causan estragos en el auto-concepto adulto y elevan las posibilidades de depresión reactiva y ansiedad generalizada. Comprender esto evita sentir inutilidad por algo que de forma base sí tiene un justificante orgánico diagnosticado.'
      },
      {
        title: 'ESCENA 6: FORTALEZAS BRILLANTES',
        action: '(Emprendedores exitosos gestionando empresas caóticas)',
        narrator: 'Como hay que ser justos, el adulto TDAH tiene superpoderes natos para puestos de inmensa presión ambiental y cambio rápido: innovación intuitiva pura, visión no lineal a problemas estructurados y estallidos de energía sin fin cuando su cerebro es estimulado con retos genuinos o pasionales.'
      },
      {
        title: 'ESCENA 7: APOYOS Y ESTRATEGIAS MADURAS',
        action: '(Agendas, calendarios y psicoterapia constructiva)',
        narrator: 'Se adoptan nuevas armas: agendas estrictas digitalizadas para compensar su lóbulo, apps de bloqueo por rangos o la ayuda clínica continua para no derivar en bloqueos perjudiciales de parálisis de gestión. Saber buscar y no denegar la ayuda externa es tu herramienta básica de adulto.'
      },
      {
        title: 'ESCENA 8: RESUMEN',
        action: '(Retrato humano en movimiento firme cara a un logro a pesar de los desafíos)',
        narrator: 'El TDAH es lo que te hace tú pero no restringe a dónde puedes ser capaz de arribar. Conocerlo y no castigarse en sobremanera nos asegura entender nuestra máquina cerebral para sacarle todos los destellos positivos que en ella viven. "Conocer las diferencias nos ayuda; sabernos entender de fondo, nos fortalece."'
      }
    ]
  },
  padre: {
    id: 'padre',
    title: 'Para Familias y Tutores',
    scenes: [
      {
        title: 'ESCENA 1: INTRODUCCIÓN',
        action: '(Imágenes de familias desayunando, hablando y haciendo tareas de forma animada pero a veces caótica)',
        narrator: 'Ser cuidador o progenitor implica apoyar sin condiciones a los pequeños para potenciar capacidades y suavizar sus barreras naturales en la vida real. Y cuando nos entregan un diagnóstico como TDAH la primera sensación del tutor es: incertidumbre, vértigo o desconocimiento sobre qué necesita realmente de él.'
      },
      {
        title: 'ESCENA 2: BIOLÓGICO, NO EDUCATIVO',
        action: '(Animación sencilla del cerebro destellando en los lóbulos frontales)',
        narrator: 'Para empezar: el TDAH es de origen neurobiológico y genético en enorme cuantía. El cerebro forma y conecta las redes atencionales un poco diferente. Destruyamos la vergüenza inicial: el TDAH de su hijo o hija NO ha sido causado por culpa suya porque le educó mal, no fue por darle demasiadas pantallas, ni es falta de disciplina rigurosa. Aceptémoslo.'
      },
      {
        title: 'ESCENA 3: MANIFESTACIONES ABUNDANTES',
        action: '(Un entorno diario real de la casa)',
        narrator: 'Sí, la impulsividad y la inquietud saltan de lleno a los ojos o al aula escolar, pero la dificultad real para retener normas a corto plazo, el despiste "crónico" olvidando el abrigo al salir y la muy abrupta capacidad de gestionar tolerancias en una negación de placer instantáneo agotan emocionalmente a toda la familia todos los días.'
      },
      {
        title: 'ESCENA 4: EL BLOQUE EJECUTIVO',
        action: '(Plano de un estudiante frustrándose contra la tarea, sus funciones superiores están saturadas)',
        narrator: 'No es solo de atención, las funciones ejecutivas del planificador maestro biológico se bloquean y sobreesfuerzan. Es habitual que el conflicto explote frente al padre en la mesa no por mala conducta pura y libre malicia sino porque el chaval verdaderamente se ha paralizado por la imposibilidad neuronal de iniciar un trabajo.'
      },
      {
        title: 'ESCENA 5: IMPACTO EN CASA Y EN SU MENTE',
        action: '(Plano que visibiliza la carga: el chico o chica abatido de oír sermones diarios)',
        narrator: 'Se estima que un estudiante con TDAH percibe mensajes correctivos en contraposición a niños neurotípicos en ratio casi exponencial: "Estate quieto", "espabila", "¿cómo has vuelto a perderlo?". Esto es tóxico a largo plazo si no es equilibrado con refuerzo brutal e intencional tras una victoria minúscula u obvia de organización.'
      },
      {
        title: 'ESCENA 6: QUÉ LE APORTA EL TDAH DE BUENO',
        action: '(Plano soleado compartiendo un pasatiempo frenético juntos, risas puras)',
        narrator: 'No vamos a mentir, el TDAH le otorgará de serie una grandísima visión creativa o empatía pasional por los marginados o sensibles ya que sufren esa capa. Son genuinos e increíblemente honestos. Tienen grandes dones que no ven brillar por taparse mediante malas notas procedimentales o desorden crónico.'
      },
      {
        title: 'ESCENA 7: QUÉ DEBEN HACER USTEDES',
        action: '(Apoyos muy funcionales: relojes de arena grandes, pósters de color con rutinas del día, sonrisas)',
        narrator: 'Podemos ser funcionales para ellos: 1. Rutinas predecibles y cortas. 2. Tablas visuales no discursivas, que vean el color y actúen; no sermones sonoros inútiles. 3. Fragmentemos: nunca pida "Recoge el cuarto", sino "Mete toda ropa azul en la caja". 4. Baje exigencias perfeccionistas en áreas secundarias. Escojan sus batallas. Su mente requiere ser andamiada, literalmente, en esos años en base a los estímulos funcionales procedentes de sus referentes principales dentro de la vivienda.'
      },
      {
        title: 'ESCENA 8: LA RED REAL',
        action: '(El tutor colaborando amigablemente en equipo con su profe o tutora escolar)',
        narrator: 'No remen a contracorriente con la Escuela o los especialistas. Son su red cooperativa base. Su hijo tiene unos dones asombrosos y muchísima vida al frente donde todo se nivelará o gestionará. Buscad que su meta central sea el avance moral y autoestima base para sostener esta época vital del desafío del desarrollo natural y guiado en pro de la persona madura y autónoma sin bloqueos auto-restrictivos.'
      }
    ]
  }
};
