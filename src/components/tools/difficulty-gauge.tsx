'use client';

import { cn } from '@/lib/utils';

interface DifficultyGaugeProps {
  level: number; // 1-10
  className?: string;
}

export function DifficultyGauge({ level, className }: DifficultyGaugeProps) {
  const segments = 10;
  const filledSegments = Math.min(Math.max(level, 1), 10);

  const getColor = (index: number) => {
    if (index >= filledSegments) return 'bg-muted';
    if (filledSegments <= 3) return 'bg-green-500';
    if (filledSegments <= 6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getDifficultyLabel = () => {
    if (level <= 3) return 'Easy';
    if (level <= 6) return 'Medium';
    return 'Hard';
  };
  return null;
  return (
    <div className={cn('space-y-1', className)}>
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Self-Host Difficulty</span>
        <span
          className={cn(
            'font-medium',
            level <= 3 && 'text-green-500',
            level > 3 && level <= 6 && 'text-yellow-500',
            level > 6 && 'text-red-500'
          )}
        >
          {getDifficultyLabel()} ({level}/10)
        </span>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-1.5 flex-1 rounded-full transition-all duration-300',
              getColor(i)
            )}
          />
        ))}
      </div>
    </div>
  );
}
