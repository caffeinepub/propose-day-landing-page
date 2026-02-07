import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useEvasiveButton } from '../hooks/useEvasiveButton';

interface ProposalButtonsProps {
  onAccept: () => void;
}

export default function ProposalButtons({ onAccept }: ProposalButtonsProps) {
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const { position, handlePointerEnter, handlePointerDown } = useEvasiveButton(noButtonRef);

  return (
    <div className="relative w-full h-64 sm:h-80">
      {/* No Button - Evasive */}
      <button
        ref={noButtonRef}
        onPointerEnter={handlePointerEnter}
        onPointerDown={handlePointerDown}
        className="absolute px-6 py-2 text-sm font-medium rounded-full bg-[oklch(0.90_0.04_340)] text-[oklch(0.35_0.05_350)] hover:bg-[oklch(0.88_0.05_340)] transition-colors shadow-md"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        No
      </button>

      {/* Yes Button - Big and Glowing */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Button
          onClick={onAccept}
          size="lg"
          className="glow-button px-12 py-8 text-xl sm:text-2xl font-bold rounded-full bg-[oklch(0.75_0.15_350)] hover:bg-[oklch(0.70_0.18_350)] text-white shadow-2xl transition-all hover:scale-105"
        >
          Yessss miss madam baby ji
        </Button>
      </div>
    </div>
  );
}
