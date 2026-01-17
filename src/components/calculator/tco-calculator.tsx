'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Star,
  GitCommit,
  Server,
  DollarSign,
  Users,
  TrendingDown,
  CheckCircle2,
  Box,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { DifficultyGauge } from '@/components/tools/difficulty-gauge';
import { AnimatedCounter } from './animated-counter';
import { Tool } from '@/types/database';
import { formatDistanceToNow } from '@/lib/format';

interface TCOCalculatorProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

const VPS_MONTHLY_COST = 10; // Base VPS cost per month
const DEFAULT_SAAS_PRICE = 15; // Default price if not specified

export function TCOCalculator({ tool, isOpen, onClose }: TCOCalculatorProps) {
  const [userCount, setUserCount] = useState(10);
  const [saasMonthlyPrice, setSaasMonthlyPrice] = useState(DEFAULT_SAAS_PRICE);

  const calculations = useMemo(() => {
    const saasAnnualCost = saasMonthlyPrice * userCount * 12;
    const selfHostedAnnualCost = VPS_MONTHLY_COST * 12;
    const annualSavings = saasAnnualCost - selfHostedAnnualCost;
    const savingsPercentage = saasAnnualCost > 0
      ? ((annualSavings / saasAnnualCost) * 100).toFixed(0)
      : 0;

    return {
      saasAnnualCost,
      selfHostedAnnualCost,
      annualSavings,
      savingsPercentage,
    };
  }, [userCount, saasMonthlyPrice]);

  if (!tool) return null;

  const formattedStars = tool.stars >= 1000
    ? `${(tool.stars / 1000).toFixed(1)}k`
    : tool.stars.toString();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {tool.name.charAt(0)}
                </span>
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {tool.name}
                </DialogTitle>
                <Badge variant="secondary" className="mt-1">
                  Alternative to {tool.saas_equivalent}
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Tool stats */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">{formattedStars} stars</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <GitCommit className="w-4 h-4" />
              <span>Updated {formatDistanceToNow(tool.last_commit)}</span>
            </div>
            {tool.docker_ready && (
              <div className="flex items-center gap-2 text-primary">
                <Box className="w-4 h-4" />
                <span>Docker Ready</span>
              </div>
            )}
          </div>

          <p className="text-muted-foreground">{tool.description}</p>

          <DifficultyGauge level={tool.self_host_difficulty} />

          {/* Calculator Section */}
          <div className="bg-secondary/50 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-primary" />
              TCO Calculator
            </h3>

            {/* Input: Number of Users */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  Number of Users
                </label>
                <span className="text-lg font-bold text-primary">{userCount}</span>
              </div>
              <Slider
                value={[userCount]}
                onValueChange={([value]) => setUserCount(value)}
                min={1}
                max={500}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1</span>
                <span>500</span>
              </div>
            </div>

            {/* Input: SaaS Monthly Price */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-muted-foreground" />
                Current SaaS Monthly Price (per user)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  value={saasMonthlyPrice}
                  onChange={(e) => setSaasMonthlyPrice(Number(e.target.value) || 0)}
                  className="pl-8"
                  min={0}
                />
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {/* SaaS Annual Cost */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-destructive/10 rounded-lg p-4 border border-destructive/20"
              >
                <div className="text-sm text-muted-foreground mb-1">
                  {tool.saas_equivalent} Annual Cost
                </div>
                <div className="text-2xl font-bold text-destructive">
                  <AnimatedCounter
                    value={calculations.saasAnnualCost}
                    prefix="$"
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  ${saasMonthlyPrice} x {userCount} users x 12 months
                </div>
              </motion.div>

              {/* Self-Hosted Cost */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-primary/10 rounded-lg p-4 border border-primary/20"
              >
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                  <Server className="w-3 h-3" />
                  Self-Hosted Annual Cost
                </div>
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter
                    value={calculations.selfHostedAnnualCost}
                    prefix="$"
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  ~${VPS_MONTHLY_COST}/mo VPS (unlimited users)
                </div>
              </motion.div>
            </div>

            {/* Annual Savings - The Hero Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 border border-primary/30 text-center emerald-glow"
            >
              <div className="text-sm text-muted-foreground mb-2">
                Your Annual Savings
              </div>
              <div className="text-5xl md:text-6xl font-bold gradient-text">
                <AnimatedCounter
                  value={calculations.annualSavings}
                  prefix="$"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-lg text-primary font-medium">
                  Save {calculations.savingsPercentage}% annually
                </span>
              </div>
            </motion.div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => window.open(tool.github_url, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                window.open(tool.github_url + '#installation', '_blank');
              }}
            >
              Start Self-Hosting
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
