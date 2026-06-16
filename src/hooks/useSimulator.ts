import { useState, useEffect } from 'react';
import { FONTS } from '../constants/theme';

interface SimulatorState {
  isGlitching: boolean;
  staticOpacity: number;
  shakeIntensity: number;
  currentFont: number;
}

export const useSimulator = (simulatorEnabled: boolean): SimulatorState => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [staticOpacity, setStaticOpacity] = useState(0);
  const [shakeIntensity, setShakeIntensity] = useState(0);
  const [currentFont, setCurrentFont] = useState(0);

  // Aggressive Interruptions Loop
  useEffect(() => {
    if (!simulatorEnabled) {
      setIsGlitching(false);
      setStaticOpacity(0);
      setShakeIntensity(0);
      return;
    }

    const intervals = [
      setInterval(() => {
        if (Math.random() > 0.8) {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 300);
        }
      }, 4000),
      setInterval(() => {
        setStaticOpacity(Math.random() * 0.1);
      }, 200),
      setInterval(() => {
        if (Math.random() > 0.7) {
          setShakeIntensity(1);
          setTimeout(() => setShakeIntensity(0), 1000);
        }
      }, 9000),
    ];

    return () => intervals.forEach(clearInterval);
  }, [simulatorEnabled]);

  // Chaotic Font Swap
  useEffect(() => {
    if (!simulatorEnabled) {
      setCurrentFont(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentFont(prev => (prev + 1) % FONTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [simulatorEnabled]);

  return {
    isGlitching,
    staticOpacity,
    shakeIntensity,
    currentFont,
  };
};
