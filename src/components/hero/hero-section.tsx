'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AnimatedPlaceholder } from './animated-placeholder';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Floating orbs for visual interest */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Stop paying for SaaS you can self-host
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Exit the</span>{' '}
            <span className="gradient-text">SaaS Tax</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover open-source alternatives to expensive SaaS tools.
            Calculate your savings and take control of your software stack.
          </p>

          {/* Search form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="relative">
              <motion.div
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  isFocused ? 'emerald-glow' : ''
                }`}
              />
              <div className="relative flex items-center gap-2 p-2 rounded-xl bg-card border border-border">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="pl-12 pr-4 h-14 text-lg bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder=""
                  />
                  {!searchQuery && !isFocused && (
                    <div className="absolute left-12 top-1/2 -translate-y-1/2 pointer-events-none">
                      <AnimatedPlaceholder />
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <span className="hidden sm:inline">Find Alternatives</span>
                  <ArrowRight className="w-5 h-5 sm:ml-2" />
                </Button>
              </div>
            </div>
          </form>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground mt-1">Open Source Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">$50K+</div>
              <div className="text-sm text-muted-foreground mt-1">Avg. Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Teams Switched</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
