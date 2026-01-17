'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Users,
  TrendingDown,
  CheckCircle2,
  Server,
  Calculator,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { AnimatedCounter } from '@/components/calculator/animated-counter';
import { Tool } from '@/types/database';
import { getSaasPrice } from '@/lib/saas-pricing';

interface SwitchCalculatorProps {
  tool: Tool;
}

const VPS_MONTHLY_COST = 5; // DigitalOcean basic droplet

export function SwitchCalculator({ tool }: SwitchCalculatorProps) {
  const defaultSaasPrice = getSaasPrice(tool.saas_equivalent);
  const [userCount, setUserCount] = useState(25);
  const [saasMonthlyPrice, setSaasMonthlyPrice] = useState(defaultSaasPrice);

  const calculations = useMemo(() => {
    const saasAnnualCost = saasMonthlyPrice * userCount * 12;
    const selfHostedAnnualCost = VPS_MONTHLY_COST * 12;
    const annualSavings = saasAnnualCost - selfHostedAnnualCost;
    const savingsPercentage = saasAnnualCost > 0
      ? ((annualSavings / saasAnnualCost) * 100).toFixed(0)
      : 0;
    const fiveYearSavings = annualSavings * 5;

    return {
      saasAnnualCost,
      selfHostedAnnualCost,
      annualSavings,
      savingsPercentage,
      fiveYearSavings,
    };
  }, [userCount, saasMonthlyPrice]);

  return (
    <Card className="bg-card border-border overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="w-5 h-5 text-primary" />
          Calculate Your Savings
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          See how much you could save by switching from {tool.saas_equivalent} to {tool.name}
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Input: Number of Users */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              Team Size
            </label>
            <span className="text-xl font-bold text-primary">{userCount} users</span>
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
            <span>1 user</span>
            <span>500 users</span>
          </div>
        </div>

        {/* Input: SaaS Monthly Price */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            {tool.saas_equivalent} Price (per user/month)
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
              step={0.01}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Average {tool.saas_equivalent} pricing is ~${defaultSaasPrice}/user/month
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {/* Current SaaS Cost */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-destructive/10 rounded-lg p-4 border border-destructive/20"
          >
            <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
              {tool.saas_equivalent} Annual
            </div>
            <div className="text-2xl font-bold text-destructive">
              <AnimatedCounter value={calculations.saasAnnualCost} prefix="$" />
            </div>
          </motion.div>

          {/* Self-Hosted Cost */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-primary/10 rounded-lg p-4 border border-primary/20"
          >
            <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide flex items-center gap-1">
              <Server className="w-3 h-3" />
              Self-Hosted Annual
            </div>
            <div className="text-2xl font-bold text-primary">
              <AnimatedCounter value={calculations.selfHostedAnnualCost} prefix="$" />
            </div>
          </motion.div>
        </div>

        {/* Annual Savings - Hero Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 border border-primary/30 text-center emerald-glow"
        >
          <div className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-2">
            <TrendingDown className="w-4 h-4" />
            Your Annual Savings
          </div>
          <div className="text-4xl md:text-5xl font-bold gradient-text">
            <AnimatedCounter value={calculations.annualSavings} prefix="$" />
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              Save {calculations.savingsPercentage}% annually
            </span>
          </div>
        </motion.div>

        {/* 5-Year Projection */}
        <div className="text-center p-4 bg-secondary/30 rounded-lg">
          <p className="text-sm text-muted-foreground">5-Year Projected Savings</p>
          <p className="text-2xl font-bold text-foreground">
            <AnimatedCounter value={calculations.fiveYearSavings} prefix="$" />
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
