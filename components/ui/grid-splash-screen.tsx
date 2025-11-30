'use client';

import { useEffect, useState } from 'react';

interface GridSplashScreenProps {
  onComplete: () => void;
  isLoading?: boolean;
  loadingMessage?: string;
}

export const GridSplashScreen = ({
  onComplete,
  isLoading = true,
  loadingMessage = 'Initializing systems...'
}: GridSplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // If not loading, complete immediately
    if (!isLoading && progress >= 90) {
      setProgress(100);
      setTimeout(onComplete, 300);
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        // Don't go past 90% until isLoading is false
        if (isLoading && prev >= 90) {
          return 90;
        }
        
        if (!isLoading && prev >= 90) {
          clearInterval(interval);
          return 100;
        }
        
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isLoading, onComplete, progress]);

  useEffect(() => {
    if (progress < 30) setStage(0);
    else if (progress < 60) setStage(1);
    else if (progress < 90) setStage(2);
    else setStage(3);
  }, [progress]);

  const stages = [
    'Initializing systems...',
    'Loading filter options...',
    loadingMessage,
    'Ready to explore'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridPulse 3s ease-in-out infinite'
        }} />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Logo/Title */}
        <div className="text-center">
          <h1 className="mb-2 text-5xl font-bold tracking-tight md:text-7xl">
            THE GRID
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Loading the Grid...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md">
          <div className="relative h-2 overflow-hidden rounded-full bg-secondary">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Scanning effect */}
            <div 
              className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              style={{
                left: `${progress}%`,
                transform: 'translateX(-50%)',
                animation: 'shimmer 1s ease-in-out infinite'
              }}
            />
          </div>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {stages[stage]}
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-md text-center text-sm text-muted-foreground">
          Filter for projects interesting to you
        </p>
      </div>

      <style jsx>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};