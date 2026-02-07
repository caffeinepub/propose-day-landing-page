export default function HeartRevealCard() {
  return (
    <div className="heart-reveal flex items-center justify-center px-4">
      <div className="relative">
        {/* Heart shape background */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          {/* Two circles for top of heart */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[oklch(0.75_0.15_350)] rounded-full transform -translate-x-1/2" />
          <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-[oklch(0.75_0.15_350)] rounded-full transform translate-x-1/2" />
          {/* Triangle for bottom of heart */}
          <div className="absolute top-1/4 left-1/2 w-full h-3/4 bg-[oklch(0.75_0.15_350)] transform -translate-x-1/2 rotate-45 origin-top" 
               style={{ clipPath: 'polygon(50% 0%, 0% 0%, 50% 100%)' }} />
          <div className="absolute top-1/4 left-1/2 w-full h-3/4 bg-[oklch(0.75_0.15_350)] transform -translate-x-1/2 -rotate-45 origin-top" 
               style={{ clipPath: 'polygon(50% 0%, 100% 0%, 50% 100%)' }} />
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
            <div className="text-center text-white z-10">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg">
                CONGRATULATIONS you are officially my laado now!!! I LOVE YOUUU❤️
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative hearts around */}
        <div className="absolute -top-8 -left-8 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>💕</div>
        <div className="absolute -top-8 -right-8 text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>💖</div>
        <div className="absolute -bottom-8 -left-8 text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>💗</div>
        <div className="absolute -bottom-8 -right-8 text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>💝</div>
      </div>
    </div>
  );
}
