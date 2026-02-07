import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  opacity: number;
}

export default function FloatingHeartsBackground() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate 15 hearts with random properties
    const generatedHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 30,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 8,
      driftX: (Math.random() - 0.5) * 100,
      opacity: 0.15 + Math.random() * 0.25,
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="float-heart absolute"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
            // @ts-ignore - CSS custom property
            '--drift-x': `${heart.driftX}px`,
          }}
        >
          💗
        </div>
      ))}
    </div>
  );
}
