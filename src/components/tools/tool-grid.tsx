"use client";

import { useEffect, useState } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { ToolCard } from "./tool-card";
import { ToolFilters } from "./tool-filters";
import { Tool, Category } from "@/types/database";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";

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
    "All",
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [dockerOnly, setDockerOnly] = useState(false);
  const [minStars, setMinStars] = useState(0);
  const [localSearch, setLocalSearch] = useState(initialSearchQuery);

  useEffect(() => {
    setLocalSearch(initialSearchQuery);
  }, [initialSearchQuery]);

  // Filter tools based on all criteria
  const filteredTools = tools.filter((tool) => {
    // Search filter
    const matchesSearch =
      localSearch === "" ||
      tool.name.toLowerCase().includes(localSearch.toLowerCase()) ||
      tool.saas_equivalent.toLowerCase().includes(localSearch.toLowerCase()) ||
      tool.description.toLowerCase().includes(localSearch.toLowerCase());

    // Category filter
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;

    // Difficulty filter
    let matchesDifficulty = true;
    if (selectedDifficulty !== "all") {
      const [min, max] = selectedDifficulty.split("-").map(Number);
      matchesDifficulty =
        tool.self_host_difficulty >= min && tool.self_host_difficulty <= max;
    }

    // Docker filter
    const matchesDocker = !dockerOnly || tool.docker_ready;

    // Stars filter
    const matchesStars = tool.stars >= minStars;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDifficulty &&
      matchesDocker &&
      matchesStars
    );
  });

  // Infinite scroll with 24 items per page
  const { displayedItems, hasMore, observerTarget } = useInfiniteScroll(
    filteredTools,
    24,
  );

  // Get unique categories from tools
  const categories = Array.from(
    new Set(tools.map((t) => t.category)),
  ).sort() as Category[];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Browse 800+ Open Source Alternatives
          </h2>
          <p className="text-muted-foreground">
            Find the perfect self-hosted alternative to your expensive SaaS
            subscriptions
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
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filters */}
        <ToolFilters
          // categories={categories}
          // selectedCategory={selectedCategory}
          // onCategoryChange={setSelectedCategory}
          // selectedDifficulty={selectedDifficulty}
          // onDifficultyChange={setSelectedDifficulty}
          dockerOnly={dockerOnly}
          onDockerOnlyChange={setDockerOnly}
          minStars={minStars}
          onMinStarsChange={setMinStars}
          totalTools={tools.length}
          filteredCount={filteredTools.length}
        />

        {/* Results */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No tools found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search query or filters to find what you're
                looking for.
              </p>
              <button
                onClick={() => {
                  setLocalSearch("");
                  setSelectedCategory("All");
                  setSelectedDifficulty("all");
                  setDockerOnly(false);
                  setMinStars(0);
                }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Tool Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedItems.map((tool, index) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  index={index}
                  onSelect={onSelectTool}
                />
              ))}
            </div>

            {/* Infinite Scroll Trigger */}
            {hasMore && (
              <div
                ref={observerTarget}
                className="flex justify-center items-center py-12"
              >
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <p className="text-sm text-muted-foreground">
                    Loading more tools...
                  </p>
                </div>
              </div>
            )}

            {/* End of Results */}
            {!hasMore && displayedItems.length > 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  You've reached the end of the results
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Showing all {filteredTools.length} tools
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
