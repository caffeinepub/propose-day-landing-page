import { useEffect, useRef } from 'react';

interface Confetti {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  size: number;
  gravity: number;
}

export default function ConfettiBurst() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Pastel colors matching theme
    const colors = [
      'oklch(0.75 0.15 350)', // pink
      'oklch(0.88 0.08 30)',  // yellow
      'oklch(0.92 0.05 50)',  // cream
      'oklch(0.82 0.12 340)', // light pink
      'oklch(0.85 0.10 20)',  // peach
    ];

    // Create confetti particles
    const confettiCount = 150;
    const confetti: Confetti[] = [];

    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15 - 5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 8,
        gravity: 0.3 + Math.random() * 0.2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.rotation += particle.rotationSpeed;

        // Draw confetti
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        ctx.restore();
      });

      // Continue animation if particles are still visible
      if (confetti.some(p => p.y < canvas.height)) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
}
