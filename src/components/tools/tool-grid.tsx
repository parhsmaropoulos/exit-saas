'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToolCard } from './tool-card';
import { CategoryFilter } from './category-filter';
import { Tool, Category } from '@/types/database';

interface ToolGridProps {
  tools: Tool[];
  searchQuery: string;
  onSelectTool: (tool: Tool) => void;
}

export function ToolGrid({ tools, searchQuery, onSelectTool }: ToolGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  // Filter tools based on search query and category
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      searchQuery === '' ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.saas_equivalent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Get unique categories from tools
  const categories = Array.from(new Set(tools.map((t) => t.category))) as Category[];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Open Source Alternatives
            </h2>
            <p className="text-muted-foreground mt-1">
              {filteredTools.length} tools available
            </p>
          </div>
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        <AnimatePresence mode="wait">
          {filteredTools.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No tools found matching your criteria.
              </p>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search or filters.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredTools.map((tool, index) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  index={index}
                  onSelect={onSelectTool}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
