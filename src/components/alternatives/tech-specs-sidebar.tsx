'use client';

import { Star, GitCommit, Box, ExternalLink, Github, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DifficultyGauge } from '@/components/tools/difficulty-gauge';
import { Tool } from '@/types/database';
import { formatDistanceToNow } from '@/lib/format';

interface TechSpecsSidebarProps {
  tool: Tool;
}

export function TechSpecsSidebar({ tool }: TechSpecsSidebarProps) {
  const formattedStars = tool.stars >= 1000
    ? `${(tool.stars / 1000).toFixed(1)}k`
    : tool.stars.toString();

  return (
    <Card className="bg-card border-border sticky top-24">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg flex items-center gap-2">
          Technical Specs
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* GitHub Stats */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              GitHub Stars
            </span>
            <span className="font-semibold text-foreground">{formattedStars}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <GitCommit className="w-4 h-4" />
              Last Updated
            </span>
            <span className="font-medium text-foreground">
              {formatDistanceToNow(tool.last_commit)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Box className="w-4 h-4" />
              Docker Ready
            </span>
            {tool.docker_ready ? (
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Yes
              </Badge>
            ) : (
              <Badge variant="secondary">Manual Setup</Badge>
            )}
          </div>
        </div>

        {/* Difficulty Gauge */}
        <div className="pt-2 border-t border-border">
          <DifficultyGauge level={tool.self_host_difficulty} />
        </div>

        {/* Category */}
        <div className="pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Category</span>
            <Badge variant="outline">{tool.category}</Badge>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-border space-y-3">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open(tool.github_url, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View on GitHub
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open(`${tool.github_url}#installation`, '_blank')}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Deployment Guide
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
