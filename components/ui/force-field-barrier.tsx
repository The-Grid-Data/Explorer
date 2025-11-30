'use client';

import { useEffect } from 'react';

interface ForceFieldBarrierProps {
  isActive: boolean;
  pushProgress: number; // 0-100
  onBreakthrough: () => void;
}

export const ForceFieldBarrier = ({
  isActive,
  pushProgress,
  onBreakthrough
}: ForceFieldBarrierProps) => {
  useEffect(() => {
    if (pushProgress >= 100) {
      onBreakthrough();
    }
  }, [pushProgress, onBreakthrough]);

  if (!isActive) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container py-4">
        <div className="space-y-2">
          {/* Progress text */}
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-primary">
              {pushProgress < 100 ? 'Keep scrolling to run scan' : 'Scanning!'}
            </span>
            <span className="text-muted-foreground">
              {Math.round(pushProgress)}%
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{
                width: `${pushProgress}%`,
                boxShadow: pushProgress > 0 ? '0 0 10px hsl(var(--primary))' : 'none'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};