import { useState, useEffect } from 'react';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

type LandingPageProps = {
  onEnter: () => void;
}

const LandingPage = ({ onEnter }: LandingPageProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hello Hertility, I'm";

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }, 100);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* Text that writes across */}
      {displayedText && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <span className="text-7xl md:text-9xl text-text-primary font-serif italic transform whitespace-nowrap">
            {displayedText}
          </span>
        </div>
      )}
      <div className="text-center">        
        {/* Clickable centre image */}
        <div 
          onClick={onEnter}
          className="cursor-pointer group mb-8"
        >
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-portfolio/70 to-portfolio rounded-full flex items-center justify-center transform transition-transform group-hover:scale-105">
            {/* Enter */}
            <ArrowRightEndOnRectangleIcon className="size-24 text-text-primary"/>
          </div>
        </div>
        
        {/* Below centre image text */}
        <h1 className="text-9xl font-bold text-text-primary mb-8">
            JESSICA SHIELDS
        </h1>
      </div>
    </div>
  );
};

export default LandingPage