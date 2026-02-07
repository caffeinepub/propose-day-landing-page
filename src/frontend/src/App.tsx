import { useState } from 'react';
import FloatingHeartsBackground from './components/FloatingHeartsBackground';
import ProposalButtons from './components/ProposalButtons';
import HeartRevealCard from './components/HeartRevealCard';
import ConfettiBurst from './components/ConfettiBurst';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setShowConfetti(true);
    // Stop confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[oklch(0.97_0.02_15)] via-[oklch(0.95_0.03_340)] to-[oklch(0.92_0.05_50)]">
      <FloatingHeartsBackground />
      
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl">
          {!accepted ? (
            <div className="flex flex-col items-center justify-center">
              <ProposalButtons onAccept={handleAccept} />
            </div>
          ) : (
            <HeartRevealCard />
          )}
        </div>
      </main>

      {showConfetti && <ConfettiBurst />}

      <footer className="fixed bottom-4 left-0 right-0 z-20 text-center text-sm text-[oklch(0.55_0.04_340)]">
        © 2026. Built with ❤️ using{' '}
        <a
          href="https://caffeine.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[oklch(0.75_0.15_350)] transition-colors"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

export default App;
