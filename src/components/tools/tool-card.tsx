"use client";

import Link from "next/link";
import { Star, Github, Box, ArrowRight, GitFork, Code2, Users, Scale } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DifficultyGauge } from "./difficulty-gauge";
import { LanguageIcon } from "@/components/ui/language-icon";
import { Tool } from "@/types/database";
import { generateSlug } from "@/lib/slug";
import { getTopContributors, getTopLanguages, formatForkCount, getLanguageColor } from "@/lib/repository-utils";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  index: number;
  onSelect: (tool: Tool) => void;
}

export function ToolCard({ tool, index, onSelect }: ToolCardProps) {
  const formattedStars =
    tool.stars >= 1000
      ? `${(tool.stars / 1000).toFixed(1)}k`
      : tool.stars.toString();

  const slug = generateSlug(tool.name);

  // Compute v2 fields once
  const topLanguages = getTopLanguages(tool.languages || [], 3);
  const topContributors = getTopContributors(tool.top_contributors || [], 3);

  return (
    <div>
      <Card
        className="group cursor-pointer card-hover bg-card border-border h-full transition-all duration-200 hover:border-primary/50"
        onClick={() => onSelect(tool)}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">
                  {tool.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <Badge variant="secondary" className="mt-1 text-xs">
                  Alternative to {tool.saas_equivalent}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {tool.description}
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">{formattedStars}</span>
            </div>
            {/* <div className="flex items-center gap-1.5 text-muted-foreground">
              <GitCommit className="w-4 h-4" />
              <span>{formatDistanceToNow(tool.last_commit)}</span>
            </div> */}
            {tool.docker_ready && (
              <div className="flex items-center gap-1.5 text-primary">
                <Box className="w-4 h-4" />
                <span className="text-xs">Docker</span>
              </div>
            )}
          </div>

          {/* V2 Repository Insights - Compact row layout */}
          {(tool.license_type || tool.fork_count !== undefined || tool.languages?.length || tool.top_contributors?.length) && (
            <div className="space-y-2 pt-2 border-t border-border/50">
              {/* License and Forks row */}
              {(tool.license_type || tool.fork_count !== undefined) && (
                <div className="flex items-center gap-3 text-xs">
                  {tool.license_type && (
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Scale className="w-3.5 h-3.5" />
                      <span className="font-medium">{tool.license_type}</span>
                    </div>
                  )}
                  {tool.fork_count !== undefined && (
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <GitFork className="w-3.5 h-3.5" />
                      <span className="font-medium">{formatForkCount(tool.fork_count)}</span>
                    </div>
                  )}
                </div>
              )}

            {/* Languages row */}
            {topLanguages.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <Code2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                {topLanguages.map((lang) => (
                  <Badge
                    key={lang.name}
                    variant="outline"
                    className={cn("text-xs px-1.5 py-0.5 flex items-center gap-1", getLanguageColor(lang.name))}
                  >
                    <LanguageIcon language={lang.name} className="w-3 h-3" />
                    <span>{lang.name} {lang.percentage}%</span>
                  </Badge>
                ))}
              </div>
            )}

              {/* Contributors row */}
              {topContributors.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <div className="flex items-center gap-1 text-xs text-muted-foreground flex-wrap">
                    {topContributors.map((contributor, idx) => (
                      <span key={contributor.name} className="flex items-center">
                        <span className="font-medium text-foreground">{contributor.name}</span>
                        <span className="ml-0.5">({contributor.commits})</span>
                        {idx < 2 && idx < topContributors.length - 1 && (
                          <span className="mx-1">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Difficulty gauge */}
          <DifficultyGauge level={tool.self_host_difficulty} />

          {/* Action buttons */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(tool.github_url, "_blank");
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Link
              href={`/alternatives/${slug}`}
              onClick={(e) => e.stopPropagation()}
              className="flex-1"
            >
              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
