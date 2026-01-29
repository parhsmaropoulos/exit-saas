'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ToolCard } from '@/components/tools/tool-card';
import { Tool } from '@/types/database';

interface RelatedToolsProps {
  tools: Tool[];
  currentToolName: string;
}

export function RelatedTools({ tools, currentToolName }: RelatedToolsProps) {
  if (!tools || tools.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t border-border">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-2"
        >
          Similar Alternatives to {currentToolName}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          Explore other open-source tools in the same category or with similar features
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ToolCard
              tool={tool}
              index={index}
              onSelect={() => {
                // Navigation will be handled by the link in ToolCard
              }}
            />
          </motion.div>
        ))}
      </div>

      {tools.length >= 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Browse all {800}+ tools
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </section>
  );
}
