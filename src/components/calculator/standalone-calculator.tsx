'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Users,
  TrendingDown,
  Server,
  Calculator,
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Database,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedCounter } from './animated-counter';

const VPS_MONTHLY_COST = 10;

// Popular SaaS presets
const POPULAR_PRESETS = [
  { name: 'Slack', price: 7.25, category: 'Communication' },
  { name: 'Notion', price: 10, category: 'Productivity' },
  { name: 'Asana', price: 10.99, category: 'Project Management' },
  { name: 'HubSpot', price: 45, category: 'CRM' },
  { name: 'Intercom', price: 74, category: 'Customer Support' },
  { name: 'GitHub', price: 4, category: 'Development' },
  { name: 'Zoom', price: 13.33, category: 'Video Conferencing' },
  { name: 'Shopify', price: 29, category: 'E-commerce' },
];

export function StandaloneCalculator() {
  const [userCount, setUserCount] = useState(10);
  const [saasMonthlyPrice, setSaasMonthlyPrice] = useState(10);
  const [migrationHours, setMigrationHours] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);

  const calculations = useMemo(() => {
    const saasAnnualCost = saasMonthlyPrice * userCount * 12;
    const saas3YearCost = saasAnnualCost * 3;
    const saas5YearCost = saasAnnualCost * 5;

    const selfHostedAnnualCost = VPS_MONTHLY_COST * 12;
    const selfHosted3YearCost = selfHostedAnnualCost * 3;
    const selfHosted5YearCost = selfHostedAnnualCost * 5;

    const migrationCost = migrationHours * hourlyRate;

    const annualSavings = saasAnnualCost - selfHostedAnnualCost;
    const savings3Year = saas3YearCost - (selfHosted3YearCost + migrationCost);
    const savings5Year = saas5YearCost - (selfHosted5YearCost + migrationCost);

    const breakEvenMonths = migrationCost > 0 ? Math.ceil(migrationCost / (annualSavings / 12)) : 0;

    const savingsPercentage = saasAnnualCost > 0
      ? ((annualSavings / saasAnnualCost) * 100).toFixed(0)
      : 0;

    return {
      saasAnnualCost,
      saas3YearCost,
      saas5YearCost,
      selfHostedAnnualCost,
      selfHosted3YearCost,
      selfHosted5YearCost,
      migrationCost,
      annualSavings,
      savings3Year,
      savings5Year,
      breakEvenMonths,
      savingsPercentage,
    };
  }, [userCount, saasMonthlyPrice, migrationHours, hourlyRate]);

  const applyPreset = (preset: typeof POPULAR_PRESETS[0]) => {
    setSaasMonthlyPrice(preset.price);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
        >
          <Calculator className="w-4 h-4" />
          <span className="text-sm font-medium">Free TCO Calculator</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
        >
          Calculate Your SaaS Savings
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground"
        >
          Discover how much you can save by switching from expensive SaaS subscriptions to open-source, self-hosted alternatives.
        </motion.p>
      </div>

      {/* Popular Presets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-sm font-medium text-muted-foreground mb-3 text-center">
          Popular SaaS Tools
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {POPULAR_PRESETS.map((preset) => (
            <Button
              key={preset.name}
              variant="outline"
              size="sm"
              onClick={() => applyPreset(preset)}
              className="hover:bg-primary/10 hover:border-primary"
            >
              {preset.name} (${preset.price}/mo)
            </Button>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="tco" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="tco">TCO Calculator</TabsTrigger>
          <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
          <TabsTrigger value="migration">Migration Cost</TabsTrigger>
        </TabsList>

        {/* TCO Calculator Tab */}
        <TabsContent value="tco" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card rounded-xl p-6 border border-border space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Your Current Setup
              </h3>

              {/* Number of Users */}
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

              {/* SaaS Monthly Price */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  SaaS Price per User/Month
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

              {/* Cost Breakdown */}
              <div className="pt-4 border-t border-border space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Monthly SaaS cost:</span>
                  <span className="font-medium">${(saasMonthlyPrice * userCount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Self-hosted VPS cost:</span>
                  <span className="font-medium">${VPS_MONTHLY_COST}/mo</span>
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Annual Savings */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 border border-primary/30">
                <div className="text-sm text-muted-foreground mb-2">
                  Annual Savings
                </div>
                <div className="text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={calculations.annualSavings} prefix="$" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">
                    Save {calculations.savingsPercentage}% annually
                  </span>
                </div>
              </div>

              {/* 3-Year Projection */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="text-sm text-muted-foreground mb-2">
                  3-Year Savings
                </div>
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={calculations.savings3Year} prefix="$" />
                </div>
              </div>

              {/* 5-Year Projection */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="text-sm text-muted-foreground mb-2">
                  5-Year Savings
                </div>
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={calculations.savings5Year} prefix="$" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Cost Comparison Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground">Period</th>
                    <th className="text-right py-3 px-2 font-medium text-muted-foreground">SaaS Cost</th>
                    <th className="text-right py-3 px-2 font-medium text-muted-foreground">Self-Hosted</th>
                    <th className="text-right py-3 px-2 font-medium text-primary">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 text-foreground">1 Year</td>
                    <td className="text-right py-3 px-2 text-destructive font-medium">
                      ${calculations.saasAnnualCost.toFixed(0)}
                    </td>
                    <td className="text-right py-3 px-2 text-primary font-medium">
                      ${calculations.selfHostedAnnualCost.toFixed(0)}
                    </td>
                    <td className="text-right py-3 px-2 text-primary font-bold">
                      ${calculations.annualSavings.toFixed(0)}
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 text-foreground">3 Years</td>
                    <td className="text-right py-3 px-2 text-destructive font-medium">
                      ${calculations.saas3YearCost.toFixed(0)}
                    </td>
                    <td className="text-right py-3 px-2 text-primary font-medium">
                      ${calculations.selfHosted3YearCost.toFixed(0)}
                    </td>
                    <td className="text-right py-3 px-2 text-primary font-bold">
                      ${calculations.savings3Year.toFixed(0)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-foreground">5 Years</td>
                    <td className="text-right py-3 px-2 text-destructive font-medium">
                      ${calculations.saas5YearCost.toFixed(0)}
                    </td>
                    <td className="text-right py-3 px-2 text-primary font-medium">
                      ${calculations.selfHosted5YearCost.toFixed(0)}
                    </td>
                    <td className="text-right py-3 px-2 text-primary font-bold">
                      ${calculations.savings5Year.toFixed(0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </TabsContent>

        {/* ROI Analysis Tab */}
        <TabsContent value="roi" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card rounded-xl p-6 border border-border space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Migration Details
              </h3>

              {/* Migration Hours */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">
                    Estimated Migration Hours
                  </label>
                  <span className="text-lg font-bold text-primary">{migrationHours}h</span>
                </div>
                <Slider
                  value={[migrationHours]}
                  onValueChange={([value]) => setMigrationHours(value)}
                  min={5}
                  max={200}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5h</span>
                  <span>200h</span>
                </div>
              </div>

              {/* Hourly Rate */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Developer Hourly Rate
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <Input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value) || 0)}
                    className="pl-8"
                    min={0}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Migration Cost:</span>
                  <span className="font-bold text-foreground">
                    ${calculations.migrationCost.toFixed(0)}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Break-Even Point */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-6 border border-primary/30">
                <div className="text-sm text-muted-foreground mb-2">
                  Break-Even Point
                </div>
                <div className="text-5xl font-bold gradient-text mb-2">
                  {calculations.breakEvenMonths}
                </div>
                <div className="text-sm text-primary font-medium">
                  months to recover migration costs
                </div>
              </div>

              {/* ROI Metrics */}
              <div className="bg-card rounded-xl p-6 border border-border space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Year 1 ROI (after migration)
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    ${(calculations.annualSavings - calculations.migrationCost).toFixed(0)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    3-Year Total ROI
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    ${calculations.savings3Year.toFixed(0)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>

        {/* Migration Cost Tab */}
        <TabsContent value="migration" className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Typical Migration Breakdown
            </h3>
            <div className="space-y-4">
              {[
                { task: 'Setup & Infrastructure', hours: '2-5 hours', cost: '$100-250' },
                { task: 'Data Migration', hours: '5-20 hours', cost: '$250-1,000' },
                { task: 'Configuration & Customization', hours: '3-10 hours', cost: '$150-500' },
                { task: 'Testing & QA', hours: '2-5 hours', cost: '$100-250' },
                { task: 'Team Training', hours: '2-5 hours', cost: '$100-250' },
                { task: 'Documentation', hours: '1-3 hours', cost: '$50-150' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.task}</div>
                      <div className="text-sm text-muted-foreground">{item.hours}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{item.cost}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">
                  Your Estimated Total:
                </span>
                <span className="text-xl font-bold text-primary">
                  ${calculations.migrationCost.toFixed(0)}
                </span>
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Beyond Cost Savings
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Data Ownership</h3>
            <p className="text-sm text-muted-foreground">
              Complete control over your data with no vendor lock-in
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Privacy & Security</h3>
            <p className="text-sm text-muted-foreground">
              Host on your infrastructure with full security control
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Customization</h3>
            <p className="text-sm text-muted-foreground">
              Modify and extend features to match your exact needs
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          Ready to Start Saving?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Explore our directory of {800}+ open-source alternatives and find the perfect tools for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <a href="/">
              Browse All Tools
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/alternative-to/slack">
              View Popular Alternatives
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Methodology Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 max-w-4xl mx-auto bg-muted/30 rounded-xl p-8"
      >
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Calculator Methodology
        </h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">SaaS Costs:</strong> Based on per-user monthly pricing from official vendor websites. We calculate annual costs by multiplying monthly price × users × 12 months.
          </p>
          <p>
            <strong className="text-foreground">Self-Hosted Costs:</strong> Estimated at $10/month for a basic VPS (DigitalOcean, Linode, etc.) capable of hosting most tools for small-to-medium teams. This covers infrastructure costs for unlimited users.
          </p>
          <p>
            <strong className="text-foreground">Migration Costs:</strong> Based on typical developer time required for setup, data migration, and configuration. Actual costs may vary based on complexity and team expertise.
          </p>
          <p>
            <strong className="text-foreground">Limitations:</strong> This calculator provides estimates. Actual costs may vary based on specific requirements, team size, infrastructure needs, and chosen deployment method.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
