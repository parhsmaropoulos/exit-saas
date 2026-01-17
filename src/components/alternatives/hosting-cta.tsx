'use client';

import { motion } from 'framer-motion';
import { Server, Zap, Shield, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tool } from '@/types/database';

interface HostingCTAProps {
  tool: Tool;
  annualSavings: number;
}

// Affiliate link - replace with your actual affiliate URL
const DIGITALOCEAN_AFFILIATE_URL = 'https://m.do.co/c/your-affiliate-code';

export function HostingCTA({ tool, annualSavings }: HostingCTAProps) {
  const monthlyHostingCost = 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="bg-gradient-to-br from-[#0080FF]/10 to-[#0080FF]/5 border-[#0080FF]/30 overflow-hidden relative">
        {/* Recommended Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-[#0080FF] text-white border-0">
            Recommended
          </Badge>
        </div>

        <CardContent className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0080FF]/20 flex items-center justify-center shrink-0">
              <Server className="w-6 h-6 text-[#0080FF]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Deploy {tool.name} in Minutes
              </h3>
              <p className="text-muted-foreground mt-1">
                Host on a ${monthlyHostingCost}/mo DigitalOcean Droplet and save{' '}
                <span className="text-primary font-semibold">
                  ${annualSavings.toLocaleString()}
                </span>{' '}
                per year
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-[#0080FF]" />
              <span>1-Click Deploy</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-[#0080FF]" />
              <span>Free SSL Certificate</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-[#0080FF]" />
              <span>99.99% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Server className="w-4 h-4 text-[#0080FF]" />
              <span>Automatic Backups</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="w-full bg-[#0080FF] hover:bg-[#0066CC] text-white font-semibold text-lg h-14"
            onClick={() => window.open(DIGITALOCEAN_AFFILIATE_URL, '_blank')}
          >
            Get Started with $200 Credit
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center">
            New users get $200 in free credits for 60 days.
            <span className="opacity-60"> Affiliate link.</span>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
