import { useState, useCallback, useEffect, RefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useEvasiveButton(buttonRef: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<Position>({ x: 200, y: 100 });

  // Initialize position on mount
  useEffect(() => {
    const randomizePosition = () => {
      const padding = 60;
      const maxWidth = window.innerWidth - padding * 2;
      const maxHeight = 320 - padding * 2; // Container height
      
      setPosition({
        x: padding + Math.random() * maxWidth,
        y: padding + Math.random() * maxHeight,
      });
    };

    randomizePosition();
  }, []);

  const moveButton = useCallback(() => {
    const padding = 60;
    const buttonWidth = buttonRef.current?.offsetWidth || 80;
    const buttonHeight = buttonRef.current?.offsetHeight || 40;
    
    // Get container bounds (relative positioning)
    const maxWidth = window.innerWidth - padding * 2;
    const maxHeight = 320 - padding * 2; // Match container height
    
    let newX, newY;
    let attempts = 0;
    const minDistance = 150; // Minimum distance from current position
    
    do {
      newX = padding + Math.random() * (maxWidth - buttonWidth);
      newY = padding + Math.random() * (maxHeight - buttonHeight);
      attempts++;
      
      const distance = Math.sqrt(
        Math.pow(newX - position.x, 2) + Math.pow(newY - position.y, 2)
      );
      
      if (distance > minDistance || attempts > 10) {
        break;
      }
    } while (attempts < 20);
    
    setPosition({ x: newX, y: newY });
  }, [buttonRef, position]);

  const handlePointerEnter = useCallback(() => {
    moveButton();
  }, [moveButton]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  return {
    position,
    handlePointerEnter,
    handlePointerDown,
  };
}
