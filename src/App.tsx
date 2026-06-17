import React, { useState } from 'react';
import { ProfileOption, AgeRangeOption } from './types';

// Components
import { ProfileModal } from './components/ProfileModal';
import { ControlPanel } from './components/ControlPanel';
import { BackgroundEffects } from './components/BackgroundEffects';
import { TopNav } from './components/TopNav';
import { IntroductionPanel } from './components/IntroductionPanel';
import { MainIndex } from './components/MainIndex';

// Sections
import { SectionQueEs } from './components/SectionQueEs';
import { SectionDiaADia } from './components/SectionDiaADia';
import { SectionBarreras } from './components/SectionBarreras';
import { SectionEstrategias } from './components/SectionEstrategias';
import { SectionFamilia } from './components/SectionFamilia';

// Hooks
import { useSimulator } from './hooks/useSimulator';
import { useMouseTracking } from './hooks/useMouseTracking';
import { useExpandedSections } from './hooks/useExpandedSections';

export default function App() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileOption>(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState<AgeRangeOption>(null);
  const [simulatorEnabled, setSimulatorEnabled] = useState(false);

  const { expandedSections, toggleSection } = useExpandedSections(selectedProfile);
  const { mousePos, ghostPos } = useMouseTracking();
  
  const { 
    isGlitching, 
    staticOpacity, 
    shakeIntensity, 
    currentFont 
  } = useSimulator(simulatorEnabled);

  const handleReset = () => {
    setSelectedProfile(null);
    setSelectedAgeRange(null);
    setSimulatorEnabled(false);
  };

  const handleToggleSimulator = (enabled: boolean) => {
    setSimulatorEnabled(enabled);
  };

  React.useEffect(() => {
    if (selectedProfile && selectedAgeRange) {
      if (!expandedSections['estrategias']) {
        toggleSection('estrategias');
      }
      setTimeout(() => {
        const el = document.getElementById('estrategias');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [selectedProfile, selectedAgeRange]);

  return (
    <div 
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 font-sans relative 
        ${simulatorEnabled ? 'bg-[#00FF41] text-black' : 'bg-white text-black'}`}
    >
      <ProfileModal
        selectedProfile={selectedProfile}
        selectedAgeRange={selectedAgeRange}
        onSelectProfile={setSelectedProfile}
        onSelectAgeRange={setSelectedAgeRange}
        setSimulatorEnabled={setSimulatorEnabled}
      />

      <ControlPanel
        simulatorEnabled={simulatorEnabled}
        selectedProfile={selectedProfile}
        selectedAgeRange={selectedAgeRange}
        onSetSimulator={handleToggleSimulator}
        onReset={handleReset}
      />

      <BackgroundEffects
        simulatorEnabled={simulatorEnabled}
        staticOpacity={staticOpacity}
        mousePos={mousePos}
        ghostPos={ghostPos}
      />

      <TopNav 
        simulatorEnabled={simulatorEnabled} 
        currentFont={currentFont} 
      />

      <div 
        className={`w-full relative z-10 transition-all duration-500 ${shakeIntensity && simulatorEnabled ? 'animate-[screen-shake_0.2s_infinite]' : ''} ${!simulatorEnabled ? 'grayscale' : ''}`}
        style={isGlitching && simulatorEnabled ? { filter: 'invert(1) hue-rotate(90deg)' } : {}}
      >
        <main className={`relative pt-40 px-6 pb-40 max-w-4xl mx-auto space-y-12 ${simulatorEnabled ? 'cursor-none' : ''}`}>
          <IntroductionPanel 
            selectedProfile={selectedProfile} 
            selectedAgeRange={selectedAgeRange}
            simulatorEnabled={simulatorEnabled} 
          />

          <MainIndex 
            selectedProfile={selectedProfile}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            simulatorEnabled={simulatorEnabled}
          />

          {expandedSections['que-es'] && (
            <SectionQueEs 
              isOpen={expandedSections['que-es']}
              onToggle={() => toggleSection('que-es')}
              simulatorEnabled={simulatorEnabled}
              selectedProfile={selectedProfile}
              selectedAgeRange={selectedAgeRange}
            />
          )}

          {selectedProfile !== 'usuario' && expandedSections['dia-a-dia'] && (
            <SectionDiaADia 
              isOpen={expandedSections['dia-a-dia']}
              onToggle={() => toggleSection('dia-a-dia')}
              simulatorEnabled={simulatorEnabled}
            />
          )}

          {selectedProfile !== 'usuario' && expandedSections['barreras'] && (
            <SectionBarreras 
              isOpen={expandedSections['barreras']}
              onToggle={() => toggleSection('barreras')}
              simulatorEnabled={simulatorEnabled}
              onJumpToEstrategias={() => {
                if (!expandedSections['estrategias']) {
                  toggleSection('estrategias');
                }
                const el = document.getElementById('estrategias');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          )}

          {expandedSections['estrategias'] && (
            <SectionEstrategias 
              isOpen={expandedSections['estrategias']}
              onToggle={() => toggleSection('estrategias')}
              simulatorEnabled={simulatorEnabled}
              selectedProfile={selectedProfile}
              selectedAgeRange={selectedAgeRange}
              setSelectedAgeRange={setSelectedAgeRange}
            />
          )}

          {selectedProfile !== 'usuario' && expandedSections['familia'] && (
            <SectionFamilia 
              isOpen={expandedSections['familia']}
              onToggle={() => toggleSection('familia')}
              simulatorEnabled={simulatorEnabled}
            />
          )}

        </main>
      </div>
    </div>
  );
}
