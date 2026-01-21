"use client";

import { GitFork, Code2, Users, Scale, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageIcon } from "@/components/ui/language-icon";
import { Tool } from "@/types/database";
import {
  getTopContributors,
  getTopLanguages,
  formatForkCount,
  getLanguageColor,
} from "@/lib/repository-utils";
import { cn } from "@/lib/utils";

interface RepositoryInsightsProps {
  tool: Tool;
}

export function RepositoryInsights({ tool }: RepositoryInsightsProps) {
  const topLanguages = getTopLanguages(tool.languages || [], 3);
  const topContributors = getTopContributors(tool.top_contributors || [], 3);

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Code2 className="w-6 h-6 text-primary" />
          Repository Insights
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Community activity and technical details from the {tool.name}{" "}
          repository
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats Grid */}
        {(tool.license_type || tool.fork_count !== undefined) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* License Card */}
            {tool.license_type && (
              <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">License</h3>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {tool.license_type}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Open source license for commercial use
                </p>
              </div>
            )}

            {/* Fork Count Card */}
            {tool.fork_count !== undefined && (
              <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <GitFork className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Forks</h3>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {formatForkCount(tool.fork_count)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Community-maintained copies
                </p>
              </div>
            )}
          </div>
        )}

        {/* Programming Languages */}
        {topLanguages.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">
                Primary Languages
              </h3>
            </div>
            <div className="space-y-3">
              {topLanguages.map((lang) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <LanguageIcon language={lang.name} className="w-4 h-4" />
                      <Badge
                        variant="outline"
                        className={cn("text-xs", getLanguageColor(lang.name))}
                      >
                        {lang.name}
                      </Badge>
                    </div>
                    <span className="font-medium text-foreground">
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full transition-all duration-500",
                        getLanguageColor(lang.name)
                          .split(" ")[0]
                          .replace("/20", ""),
                      )}
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
              {/* {topLanguages.length < (tool.languages?.length || 0) && (
                <p className="text-xs text-muted-foreground italic">
                  + {(tool.languages?.length || 0) - topLanguages.length} more
                  languages
                </p>
              )} */}
            </div>
          </div>
        )}

        {/* Top Contributors */}
        {topContributors.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">
                Top Contributors
              </h3>
            </div>
            <div className="space-y-2">
              {topContributors.map((contributor, idx) => (
                <div
                  key={contributor.name}
                  className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        #{idx + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {contributor.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {contributor.commits.toLocaleString()} commits
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://github.com/${contributor.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
              {/* {topContributors.length <
                (tool.top_contributors?.length || 0) && (
                <p className="text-xs text-muted-foreground italic text-center pt-2">
                  +{" "}
                  {(tool.top_contributors?.length || 0) -
                    topContributors.length}{" "}
                  more contributors
                </p>
              )} */}
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="pt-4 border-t border-border">
          <a
            href={tool.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            View full repository details on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
