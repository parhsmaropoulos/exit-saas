'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbProps {
  toolName: string;
}

export function Breadcrumb({ toolName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link
        href="/#tools"
        className="hover:text-foreground transition-colors"
      >
        Alternatives
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-foreground font-medium">{toolName}</span>
    </nav>
  );
}
