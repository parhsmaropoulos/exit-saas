"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tool } from "@/types/database";

interface RepositoryPreviewProps {
  tool: Tool;
  previewUrl: string | null;
}

export function RepositoryPreview({
  tool,
  previewUrl,
}: RepositoryPreviewProps) {
  const [imageError, setImageError] = useState(false);

  if (!previewUrl || imageError) {
    return null; // Don't show anything if no preview is available
  }

  return (
    <Card className="bg-card border-border overflow-hidden group">
      <a
        href={tool.github_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-[1.91/1] w-full"
      >
        <Image
          src={previewUrl}
          alt={`${tool.name} GitHub repository preview`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
          priority
          unoptimized
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </a>
    </Card>
  );
}
