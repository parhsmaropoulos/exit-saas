'use client';

import { Megaphone, Sparkles, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarAdProps {
  toolName?: string;
}

export function SidebarAd({ toolName }: SidebarAdProps) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-card/50 p-6">
      {/* Placeholder header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Megaphone className="w-4 h-4 text-primary" />
        </div>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Sponsored
        </span>
      </div>

      {/* Coming soon content */}
      <div className="text-center py-4">
        <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-3">
          <Sparkles className="w-6 h-6 text-muted-foreground" />
        </div>
        <h4 className="font-semibold text-foreground mb-1">
          Sponsor This Tool
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          {toolName
            ? `Reach developers looking for ${toolName} alternatives`
            : 'Reach developers looking for open-source solutions'}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => window.location.href = 'mailto:ads@saas-exit.io?subject=Sponsorship Inquiry'}
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact Us
        </Button>
      </div>

      {/* Ad specs note */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          300x250 Display Ad Placement
        </p>
      </div>
    </div>
  );
}

// AdSense-ready component (for future use)
export function GoogleAdSense({ slot, format = 'auto' }: { slot: string; format?: string }) {
  // This will be populated with actual AdSense code once approved
  // For now, return the placeholder
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="bg-secondary/30 px-3 py-1.5 border-b border-border">
        <span className="text-xs text-muted-foreground">Advertisement</span>
      </div>
      <div className="p-4 min-h-[250px] flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Ad loading...
        </p>
        {/*
          Uncomment when AdSense is approved:
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        */}
      </div>
    </div>
  );
}
