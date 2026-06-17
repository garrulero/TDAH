import React from 'react';

interface IntroductionPanelProps {
  selectedProfile: 'padre' | 'usuario' | null;
  selectedAgeRange: string | null;
  simulatorEnabled: boolean;
}

export const IntroductionPanel: React.FC<IntroductionPanelProps> = ({
  selectedProfile,
  selectedAgeRange,
  simulatorEnabled
}) => {
  const renderStudentIntro = () => {
    switch (selectedAgeRange) {
      case 'p1': return (
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
          <span className="block font-black text-xl mb-2">💛 ¡Hola! Bienvenido/a a tu espacio</span>
          Nos alegra mucho que estés aquí ✨<br/><br/>
          Este es un lugar pensado para acompañarte en tu día a día en el cole y en casa.<br/>
          Sabemos que cada niño y niña es único/a: tienes energía, imaginación, curiosidad y muchas ganas de descubrir el mundo.<br/>
          Aquí vas a aprender qué es el TDAH de una forma muy sencilla, y también encontrarás pequeñas ideas que te ayudarán a concentrarte mejor, organizarte poco a poco y entender lo que sientes.<br/><br/>
          <span className="font-bold">Recuerda: no tienes que hacerlo perfecto/a, solo avanzar a tu ritmo 💛</span>
        </p>
      );
      case 'p2': return (
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
          <span className="block font-black text-xl mb-2">💛 ¡Bienvenido/a a tu espacio personal de aprendizaje</span>
          Este espacio es para ti ✨<br/><br/>
          Aquí creemos que todas las personas aprendemos de forma diferente, y eso está bien. La tuya es única: llena de creatividad, energía e ideas.<br/>
          Vas a descubrir qué es el TDAH de forma sencilla y encontrarás estrategias que te ayudarán en tu día a día: para concentrarte mejor, organizarte en clase, gestionar tus emociones y confiar más en ti mismo/a.<br/><br/>
          <span className="font-bold">Eres capaz de mucho más de lo que a veces crees 💛</span>
        </p>
      );
      case 'p3': return (
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
          <span className="block font-black text-xl mb-2">💛 Bienvenido/a a este espacio pensado para ti</span>
          Estás creciendo, aprendiendo y descubriendo muchas cosas sobre ti mismo/a ✨<br/><br/>
          Aquí vas a entender qué es el TDAH y cómo puede influir en la forma en la que aprendes, piensas o sientes.<br/>
          También encontrarás estrategias adaptadas a ti que te ayudarán a concentrarte mejor, organizarte, gestionar lo que sientes y creer más en ti y en tus capacidades.<br/><br/>
          <span className="font-bold">No tienes que compararte con nadie. Tu camino es único/a 💛</span>
        </p>
      );
      case 'e1': return (
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
          <span className="block font-black text-xl mb-2">💛 Este espacio es para ti, tal y como eres</span>
          Estás en una etapa de cambios, retos y descubrimientos ✨<br/><br/>
          El TDAH forma parte de la forma en la que algunas personas piensan, sienten y se organizan. Si es tu caso, queremos que sepas algo importante: no estás solo/a.<br/>
          Aquí podrás entender mejor cómo funciona tu manera de aprender y descubrir herramientas que te ayuden en tu día a día: en clase, en casa y contigo mismo/a.<br/><br/>
          <span className="font-bold">Paso a paso, irás encontrando lo que mejor funciona para ti 💛</span>
        </p>
      );
      case 'e2': return (
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
          <span className="block font-black text-xl mb-2">💛 Bienvenido/a a un espacio para entenderte mejor</span>
          Estás en una etapa intensa, llena de cambios, decisiones y nuevas responsabilidades ✨<br/><br/>
          A veces puede parecer difícil organizarlo todo o mantener el ritmo, pero queremos recordarte algo importante: tu valor no depende de lo rápido que hagas las cosas ni de hacerlo todo perfecto.<br/>
          Aquí vas a encontrar comprensión, calma y herramientas que te ayudarán a organizarte, gestionar lo que sientes y avanzar con más seguridad en ti mismo/a.<br/><br/>
          <span className="font-bold">No tienes que hacerlo solo/a 💛</span>
        </p>
      );
      case 'b1': return (
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
          <span className="block font-black text-xl mb-2">💛 Este espacio es para acompañarte en tu camino</span>
          Estás construyendo tu futuro, tomando decisiones importantes y viviendo una etapa de mucha exigencia ✨<br/><br/>
          El TDAH puede hacer que algunas cosas cuesten más, especialmente cuando hay presión, pero queremos recordarte algo esencial: tienes mucho potencial, incluso en los días en los que te cuesta verlo.<br/>
          Aquí encontrarás comprensión, estrategias reales y apoyo para ayudarte a organizarte, estudiar con más calma y avanzar hacia tus metas a tu propio ritmo.<br/><br/>
          <span className="font-bold">Confía en tu proceso. Estás avanzando 💛</span>
        </p>
      );
      case 'a18': return (
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
          <span className="block font-black text-xl mb-2">💛 Bienvenido/a a tu espacio de crecimiento</span>
          Estás dando pasos hacia tu vida adulta, con nuevos retos, decisiones y oportunidades ✨<br/><br/>
          Sabemos que el TDAH puede influir en la organización, el tiempo o la motivación, pero no define quién eres ni todo lo que puedes llegar a ser.<br/>
          Este espacio está aquí para acompañarte, ayudarte a conocerte mejor y ofrecerte herramientas reales, adaptadas a tu vida, a tu ritmo y a tu forma de funcionar.<br/><br/>
          <span className="font-bold">No se trata de encajar, sino de construir tu propio camino 💛</span>
        </p>
      );
      default: return (
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
          Este espacio ha sido diseñado especialmente para acompañarte en tu día a día escolar y personal. Sabemos que tu cerebro funciona a su propio ritmo —lleno de energía, creatividad y curiosidad—. Aquí aprenderás de forma sencilla qué es el TDAH, y sobre todo, descubrirás trucos prácticos e ideas adaptadas para ti.
        </p>
      );
    }
  };

  return (
    <div className={`p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transition-all duration-300 ${simulatorEnabled ? 'bg-amber-100 text-black border-pink-500 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)]' : 'bg-white text-black border-black'}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl sm:text-4xl">{selectedProfile === 'padre' ? '👨‍👩‍👧‍👦' : '🎒'}</span>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
          {selectedProfile === 'padre' ? 'Bienvenido, Madre, Padre o Docente' : '¡Hola! Bienvenido a tu espacio'}
        </h2>
      </div>
      
      {selectedProfile === 'padre' ? (
        <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
          Si has llegado hasta aquí, probablemente quieras entender mejor cómo acompañar a tu hijo o hija con TDAH. Este espacio está pensado para ayudarte, resolver dudas y ofrecerte herramientas útiles para el día a día. Porque entender lo que hay detrás de ciertas conductas, conocer estrategias prácticas y sentirse acompañado también marca la diferencia. Aquí encontrarás recursos, orientación y una forma cercana de comprender mejor el TDAH y todo lo que implica para vuestro día a día en familia.
        </p>
      ) : renderStudentIntro()}

      <div className={`text-xs font-bold font-mono uppercase p-2 inline-block border-2 ${simulatorEnabled ? 'bg-pink-500 text-white border-white' : 'bg-black text-white border-black'}`}>
        VISTA ACTUAL: {selectedProfile === 'padre' ? 'PADRES Y EDUCADORES' : 'ALUMNO (LECTURA LIMPIA)'}
      </div>
    </div>
  );
};
