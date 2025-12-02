'use client';

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

// The Grid media assets (for "powered by" section)
const GRID_LOGO_LIGHT = 'https://media.thegrid.id/254/7/1007/id1761223238-EgaOPgNrT5ysUewsKDXo3Q/image-1762946655.svg';
const GRID_LOGO_DARK = 'https://media.thegrid.id/254/7/1007/id1761223238-EgaOPgNrT5ysUewsKDXo3Q/image-1764533531.svg';

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
  const facts = siteConfig.loadingFacts;
  const headerLogo = siteConfig.header.logoSrc;
  
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // Pick a random starting index
  const randomStartIndex = useMemo(() => Math.floor(Math.random() * facts.length), [facts.length]);
  const [currentFactIndex, setCurrentFactIndex] = useState(randomStartIndex);
  const [factOpacity, setFactOpacity] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rotate facts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFactOpacity(0);
      setTimeout(() => {
        // Pick a random next fact (different from current)
        setCurrentFactIndex((prev) => {
          let next = Math.floor(Math.random() * facts.length);
          // Ensure we don't show the same fact twice in a row
          while (next === prev && facts.length > 1) {
            next = Math.floor(Math.random() * facts.length);
          }
          return next;
        });
        setFactOpacity(1);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [facts.length]);

  useEffect(() => {
    if (!isLoading && progress >= 90) {
      setProgress(100);
      setTimeout(onComplete, 500);
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (isLoading && prev >= 90) {
          return 90;
        }
        
        if (!isLoading && prev >= 90) {
          clearInterval(interval);
          return 100;
        }
        
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isLoading, onComplete, progress]);

  useEffect(() => {
    if (progress < 25) setStage(0);
    else if (progress < 50) setStage(1);
    else if (progress < 75) setStage(2);
    else if (progress < 90) setStage(3);
    else setStage(4);
  }, [progress]);

  const stages = [
    'Connecting to The Grid...',
    'Loading data streams...',
    'Preparing filters...',
    loadingMessage,
    'Ready to explore!'
  ];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Scanning line effect */}
        <div 
          className="absolute inset-x-0 h-32 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent"
          style={{
            top: `${(progress / 100) * 100}%`,
            transform: 'translateY(-50%)',
            transition: 'top 0.3s ease-out'
          }}
        />
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/30" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/30" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 max-w-lg">
        {/* Main Logo from config with glow effect */}
        <div className="relative">
          <div 
            className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-150"
            style={{
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
          <div className="relative h-24 md:h-32 w-64 md:w-80">
            <Image
              src={headerLogo.light}
              alt="Logo"
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src={headerLogo.dark}
              alt="Logo"
              fill
              className="object-contain hidden dark:block"
              priority
            />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            Data Explorer
          </p>
        </div>

        {/* Fun fact section */}
        <div className="w-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 space-y-2">
          <p className="text-xs font-medium text-primary uppercase tracking-wider text-center">
            Did you know?
          </p>
          <p 
            className="text-sm md:text-base text-foreground/80 text-center leading-relaxed transition-opacity duration-300 min-h-[3rem] flex items-center justify-center"
            style={{ opacity: factOpacity }}
          >
            {facts[currentFactIndex]}
          </p>
        </div>

        {/* Progress section */}
        <div className="w-full space-y-3">
          {/* Progress bar with glow */}
          <div className="relative">
            <div className="h-1.5 overflow-hidden rounded-full bg-secondary/50 backdrop-blur">
              <div 
                className="h-full bg-gradient-to-r from-primary via-primary to-primary/80 transition-all duration-300 ease-out"
                style={{ 
                  width: `${progress}%`,
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
                }}
              />
            </div>
            {/* Scanning dot */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg"
              style={{
                left: `${progress}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)'
              }}
            />
          </div>
          
          {/* Progress text */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-mono">
              {stages[stage]}
            </span>
            <span className="text-primary font-mono font-bold">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Powered by The Grid section */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground/60 mt-2">
          <span>powered by</span>
          <div className="relative h-4 w-20">
            <Image
              src={GRID_LOGO_LIGHT}
              alt="The Grid"
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src={GRID_LOGO_DARK}
              alt="The Grid"
              fill
              className="object-contain hidden dark:block"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.8;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1.5); }
          50% { opacity: 0.4; transform: scale(1.8); }
        }
        @keyframes shimmerText {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};