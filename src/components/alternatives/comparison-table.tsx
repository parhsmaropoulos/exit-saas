'use client';

import { Check, X, Cloud, Server } from 'lucide-react';
import { Tool } from '@/types/database';

interface ComparisonTableProps {
  tool: Tool;
}

interface ComparisonRow {
  feature: string;
  saas: boolean | string;
  openSource: boolean | string;
}

export function ComparisonTable({ tool }: ComparisonTableProps) {
  const comparisons: ComparisonRow[] = [
    { feature: 'Monthly Cost', saas: 'Per-user pricing', openSource: 'Free (hosting only)' },
    { feature: 'Data Ownership', saas: false, openSource: true },
    { feature: 'Privacy Control', saas: false, openSource: true },
    { feature: 'Self-Hosted Option', saas: false, openSource: true },
    { feature: 'No Vendor Lock-in', saas: false, openSource: true },
    { feature: 'Source Code Access', saas: false, openSource: true },
    { feature: 'Customizable', saas: 'Limited', openSource: 'Fully' },
    { feature: 'Automatic Updates', saas: true, openSource: 'Manual' },
    { feature: 'Managed Infrastructure', saas: true, openSource: false },
    { feature: 'Official Support', saas: true, openSource: 'Community' },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-primary mx-auto" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-secondary/50">
            <th className="text-left p-4 font-medium text-foreground">Feature</th>
            <th className="text-center p-4 font-medium text-foreground">
              <div className="flex items-center justify-center gap-2">
                <Cloud className="w-4 h-4 text-muted-foreground" />
                {tool.saas_equivalent}
              </div>
              <span className="text-xs text-muted-foreground font-normal">Paid SaaS</span>
            </th>
            <th className="text-center p-4 font-medium text-primary">
              <div className="flex items-center justify-center gap-2">
                <Server className="w-4 h-4" />
                {tool.name}
              </div>
              <span className="text-xs text-muted-foreground font-normal">Open Source</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((row, index) => (
            <tr
              key={row.feature}
              className={index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}
            >
              <td className="p-4 text-sm text-foreground">{row.feature}</td>
              <td className="p-4 text-center text-muted-foreground">
                {renderValue(row.saas)}
              </td>
              <td className="p-4 text-center text-foreground">
                {renderValue(row.openSource)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
