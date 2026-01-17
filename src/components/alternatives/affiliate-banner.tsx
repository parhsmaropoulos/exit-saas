'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Info, X } from 'lucide-react';

export function AffiliateBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-secondary/50 border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="w-4 h-4 shrink-0" />
            <p>
              <span className="font-medium text-foreground">Transparency:</span>{' '}
              This site is reader-supported. When you buy hosting through our links, we may earn a commission.{' '}
              <Link
                href="/affiliate-disclosure"
                className="text-primary hover:underline"
              >
                Learn more
              </Link>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-secondary rounded transition-colors shrink-0"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
