'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/hero/hero-section';
import { ToolGrid } from '@/components/tools/tool-grid';
import { TCOCalculator } from '@/components/calculator/tco-calculator';
import { Tool } from '@/types/database';

interface ToolsDirectoryProps {
  initialTools: Tool[];
}

export function ToolsDirectory({ initialTools }: ToolsDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTool = (tool: Tool) => {
    setSelectedTool(tool);
    setIsCalculatorOpen(true);
  };

  const handleCloseCalculator = () => {
    setIsCalculatorOpen(false);
    setTimeout(() => setSelectedTool(null), 300);
  };

  return (
    <>
      <HeroSection onSearch={handleSearch} />

      <div id="tools">
        <ToolGrid
          tools={initialTools}
          searchQuery={searchQuery}
          onSelectTool={handleSelectTool}
        />
      </div>

      <TCOCalculator
        tool={selectedTool}
        isOpen={isCalculatorOpen}
        onClose={handleCloseCalculator}
      />
    </>
  );
}
