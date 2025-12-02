'use client';

import { useEffect, useState, useMemo } from 'react';
import { siteConfig } from '@/lib/site-config';

interface GridScanLoaderProps {
  isLoading: boolean;
  onScrollToResults?: boolean;
}

export const GridScanLoader = ({ isLoading, onScrollToResults = true }: GridScanLoaderProps) => {
  const facts = siteConfig.loadingFacts;
  
  // Pick a random starting index
  const randomStartIndex = useMemo(() => Math.floor(Math.random() * facts.length), [facts.length]);
  
  const [currentFactIndex, setCurrentFactIndex] = useState(randomStartIndex);
  const [factOpacity, setFactOpacity] = useState(1);

  // Scroll to results section when loading starts
  useEffect(() => {
    if (isLoading && onScrollToResults) {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [isLoading, onScrollToResults]);

  useEffect(() => {
    if (!isLoading) return;

    // Rotate facts every 2.5 seconds with fade transition
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
    }, 2500);

    return () => clearInterval(interval);
  }, [isLoading, facts.length]);

  if (!isLoading) return null;

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/60 backdrop-blur-[2px] rounded-lg">
      {/* Scanning line animation */}
      <div
        className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary)) 50%, transparent)',
          boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)',
          animation: 'scanDown 1.5s ease-in-out infinite',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto px-6 py-8 text-center">
        {/* Scanning indicator */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/90 border border-primary/30 shadow-lg">
            <div className="relative w-4 h-4">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
              <div 
                className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent"
                style={{ animation: 'spin 1s linear infinite' }}
              />
            </div>
            <span className="text-primary font-semibold tracking-wide text-sm">
              SCANNING THE GRID
            </span>
          </div>
        </div>

        {/* Fun fact */}
        <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl px-6 py-4 shadow-lg">
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
            Did you know?
          </p>
          <p 
            className="text-sm text-foreground/90 leading-relaxed transition-opacity duration-300"
            style={{ opacity: factOpacity }}
          >
            {facts[currentFactIndex]}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanDown {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};