'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const GridScanLoader = ({ isLoading }: { isLoading: boolean }) => {
  const [scanLines, setScanLines] = useState<number[]>([]);

  useEffect(() => {
    if (isLoading) {
      // Generate random scan line positions
      const lines = Array.from({ length: 5 }, () => Math.random() * 100);
      setScanLines(lines);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(var(--primary), 0.05) 25%, rgba(var(--primary), 0.05) 26%, transparent 27%, transparent 74%, rgba(var(--primary), 0.05) 75%, rgba(var(--primary), 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(var(--primary), 0.05) 25%, rgba(var(--primary), 0.05) 26%, transparent 27%, transparent 74%, rgba(var(--primary), 0.05) 75%, rgba(var(--primary), 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridPulse 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* Scanning laser lines */}
      {scanLines.map((position, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-[2px]"
          style={{
            top: `${position}%`,
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary)) 50%, transparent)',
            boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))',
            animation: `scanLine ${2 + i * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 blur-sm bg-primary/50" />
        </div>
      ))}

      {/* Particle effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle ${1 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: '0 0 10px hsl(var(--primary))'
            }}
          />
        ))}
      </div>

      {/* Corner brackets - cyberpunk style */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary animate-pulse" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary animate-pulse" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary animate-pulse" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary animate-pulse" />

      {/* Center scanning text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-primary font-mono text-sm tracking-wider animate-pulse">
          <span className="inline-block animate-bounce">▸</span>
          {' '}SCANNING THE GRID
          {' '}<span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>◂</span>
        </div>
        <div className="mt-2 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              style={{
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scanLine {
          0%, 100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes particle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};