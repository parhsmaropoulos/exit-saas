'use client';

import { motion } from 'framer-motion';
import {
  LayoutGrid,
  Users,
  BarChart3,
  Wrench,
  MessageSquare,
  FolderKanban,
  Megaphone,
  Wallet,
  HardDrive,
  Shield,
  MoreHorizontal,
} from 'lucide-react';
import { Category } from '@/types/database';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: Category[];
  selected: Category | 'All';
  onSelect: (category: Category | 'All') => void;
}

const categoryIcons: Record<Category | 'All', React.ComponentType<{ className?: string }>> = {
  All: LayoutGrid,
  CRM: Users,
  Analytics: BarChart3,
  DevTools: Wrench,
  Communication: MessageSquare,
  'Project Management': FolderKanban,
  Marketing: Megaphone,
  Finance: Wallet,
  Storage: HardDrive,
  Security: Shield,
  Other: MoreHorizontal,
};

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  const allCategories: (Category | 'All')[] = ['All', ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map((category) => {
        const Icon = categoryIcons[category] || MoreHorizontal;
        const isSelected = selected === category;

        return (
          <motion.button
            key={category}
            onClick={() => onSelect(category)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              isSelected
                ? 'text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSelected && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-primary rounded-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              <Icon className="w-4 h-4" />
              {category}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
