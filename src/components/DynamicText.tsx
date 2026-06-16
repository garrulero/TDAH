import React, { useState } from 'react';
import { FONTS } from '../constants/theme';

interface DynamicTextProps {
  children: React.ReactNode;
  className?: string;
  simulatorEnabled: boolean;
}

export const DynamicText: React.FC<DynamicTextProps> = ({ 
  children, 
  className = "", 
  simulatorEnabled 
}) => {
  const [localFont, setLocalFont] = useState(0);

  const handleMouseEnter = () => {
    if (simulatorEnabled) {
      setLocalFont(prev => (prev + 1) % FONTS.length);
    }
  };

  const dynamicClassNames = simulatorEnabled 
    ? `${FONTS[localFont]} hover:text-pink-500 hover:translate-x-2` 
    : FONTS[0];

  return (
    <span 
      onMouseEnter={handleMouseEnter}
      className={`transition-all duration-75 select-all inline-block ${dynamicClassNames} ${className}`}
    >
      {children}
    </span>
  );
};
