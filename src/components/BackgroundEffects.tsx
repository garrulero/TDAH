import React from 'react';
import { Ghost, MousePointer2 } from 'lucide-react';
import { COLORS } from '../constants/theme';

interface Position {
  x: number;
  y: number;
}

interface BackgroundEffectsProps {
  simulatorEnabled: boolean;
  staticOpacity: number;
  mousePos: Position;
  ghostPos: Position;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  simulatorEnabled,
  staticOpacity,
  mousePos,
  ghostPos,
}) => {
  return (
    <>
      {/* Visual static noise */}
      <div 
        className="fixed inset-0 pointer-events-none z-[190] bg-[url('https://media.giphy.com/media/oEI9uWUicls8pqY1Q4/giphy.gif')] bg-repeat mix-blend-overlay"
        style={{ opacity: simulatorEnabled ? staticOpacity : 0 }}
      />

      {/* Ghost Cursor */}
      {simulatorEnabled && (
        <div 
          className="fixed pointer-events-none z-[210] text-pink-500 transition-none"
          style={{ left: ghostPos.x, top: ghostPos.y }}
        >
          <Ghost size={24} />
        </div>
      )}
      <div 
        className="fixed pointer-events-none z-[211] text-black transition-none"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
        <MousePointer2 size={32} fill={simulatorEnabled ? "white" : "black"} />
      </div>

      {/* Immersive UI Overlays */}
      {simulatorEnabled && <div className="fixed inset-0 opacity-20 pointer-events-none z-[60] scanline-overlay" />}
      {simulatorEnabled && <div className="fixed inset-0 pointer-events-none z-[100] border-[20px] border-black/10 mix-blend-difference" />}
      
      {/* Background Floaters */}
      {simulatorEnabled && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute opacity-30 floating-hazard mix-blend-multiply"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                width: `${Math.random() * 100}px`,
                height: `${Math.random() * 100}px`,
                backgroundColor: COLORS[i % COLORS.length],
                borderRadius: i % 2 === 0 ? '0' : '999px',
                border: '4px solid black'
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};
