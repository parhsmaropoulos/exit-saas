"use client";

import { Filter, X } from "lucide-react";
import { useState } from "react";

interface ToolFiltersProps {
  // categories: Category[];
  // selectedCategory: Category | "All";
  // onCategoryChange: (category: Category | "All") => void;
  // selectedDifficulty: string;
  // onDifficultyChange: (difficulty: string) => void;
  dockerOnly: boolean;
  onDockerOnlyChange: (dockerOnly: boolean) => void;
  minStars: number;
  onMinStarsChange: (minStars: number) => void;
  totalTools: number;
  filteredCount: number;
}

export function ToolFilters({
  // categories,
  // selectedCategory,
  // onCategoryChange,
  // selectedDifficulty,
  // onDifficultyChange,
  dockerOnly,
  onDockerOnlyChange,
  minStars,
  onMinStarsChange,
  totalTools,
  filteredCount,
}: ToolFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const starOptions = [
    { value: 0, label: "Any" },
    { value: 100, label: "100+" },
    { value: 500, label: "500+" },
    { value: 1000, label: "1K+" },
    { value: 5000, label: "5K+" },
    { value: 10000, label: "10K+" },
  ];

  const hasActiveFilters =
    // selectedCategory !== "All" ||
    // selectedDifficulty !== "all" ||
    dockerOnly || minStars > 0;

  const clearFilters = () => {
    // onCategoryChange("All");
    // onDifficultyChange("all");
    onDockerOnlyChange(false);
    onMinStarsChange(0);
  };

  return (
    <div className="mb-8">
      {/* Filter Toggle Button (Mobile) */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-secondary transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="ml-2 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
              Active
            </span>
          )}
        </button>
      </div>

      {/* Filters Container */}
      <div
        className={`space-y-6 ${
          showFilters ? "block" : "hidden"
        } lg:block bg-card/50 rounded-lg p-6 border border-border`}
      >
        {/* Results Count */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="text-foreground font-semibold">
              {filteredCount}
            </span>{" "}
            of{" "}
            <span className="text-foreground font-semibold">{totalTools}</span>{" "}
            tools
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear all
            </button>
          )}
        </div>

        {/* Category Filter */}
        {/* <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange("All")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === "All"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div> */}

        {/* Difficulty Filter */}
        {/* <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Deployment Difficulty
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff.value}
                onClick={() => onDifficultyChange(diff.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedDifficulty === diff.value
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div> */}

        {/* Additional Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Docker Ready Filter */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={dockerOnly}
                  onChange={(e) => onDockerOnlyChange(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-11 h-6 bg-secondary rounded-full peer-checked:bg-primary transition-all" />
                <div className="absolute left-1 top-1 w-4 h-4 bg-background rounded-full transition-transform peer-checked:translate-x-5" />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Docker Ready Only
              </span>
            </label>
          </div>

          {/* Minimum Stars Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Minimum Stars
            </label>
            <select
              value={minStars}
              onChange={(e) => onMinStarsChange(Number(e.target.value))}
              className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            >
              {starOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
