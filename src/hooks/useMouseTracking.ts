import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface MouseTrackerState {
  mousePos: Position;
  ghostPos: Position;
}

export const useMouseTracking = (): MouseTrackerState => {
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [ghostPos, setGhostPos] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Delay tracking for the "ghost" cursor
      timeoutId = setTimeout(() => {
        setGhostPos({ 
          x: e.clientX + (Math.random() * 40 - 20), 
          y: e.clientY + (Math.random() * 40 - 20) 
        });
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return { mousePos, ghostPos };
};
