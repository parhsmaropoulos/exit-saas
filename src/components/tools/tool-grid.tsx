"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { ToolCard } from "./tool-card";
import { Tool, Category } from "@/types/database";

interface ToolGridProps {
  tools: Tool[];
  searchQuery: string;
  onSelectTool: (tool: Tool) => void;
}

export function ToolGrid({
  tools,
  searchQuery: initialSearchQuery,
  onSelectTool,
}: ToolGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );
  const [localSearch, setLocalSearch] = useState(initialSearchQuery);

  useEffect(() => {
    setLocalSearch(initialSearchQuery);
  }, [initialSearchQuery]);

  // Filter tools based on search query and category
  const filteredTools = tools.filter((tool) => {
    console.log(localSearch);
    // Always use localSearch - it's initialized from initialSearchQuery and clearing it should show all results
    const matchesSearch =
      localSearch === "" ||
      tool.name.toLowerCase().includes(localSearch.toLowerCase()) ||
      tool.saas_equivalent.toLowerCase().includes(localSearch.toLowerCase()) ||
      tool.description.toLowerCase().includes(localSearch.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Get unique categories from tools
  const categories = Array.from(
    new Set(tools.map((t) => t.category))
  ) as Category[];
  const displayCategories = categories.slice(0, 5);
  const remainingCount = categories.length - 5;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Open Source Alternatives
          </h2>
          <p className="text-muted-foreground">
            {filteredTools.length} quality tools across{" "}
            <span className="text-foreground font-medium">
              {displayCategories.join(", ")}
            </span>
            {remainingCount > 0 && (
              <span className="text-primary"> +{remainingCount} more</span>
            )}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search tools, categories, or SaaS names..."
                className="w-full pl-12 pr-12 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              {localSearch && (
                <button
                  onClick={() => setLocalSearch("")}
                  className="absolute right-4 p-1 hover:bg-secondary rounded-md transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredTools.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No tools found matching your criteria.
            </p>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                index={index}
                onSelect={onSelectTool}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
