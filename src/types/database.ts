import { number } from "framer-motion";

export type Category =
  | "CRM"
  | "Analytics"
  | "DevTools"
  | "Communication"
  | "Project Management"
  | "Marketing"
  | "Finance"
  | "Storage"
  | "Security"
  | "Other";

export interface Tool {
  id: string;
  name: string;
  description: string;
  github_url: string;
  category: Category;
  saas_equivalent: string; // e.g., "Slack", "Jira", "Stripe"
  stars: number;
  last_commit: string; // ISO date string
  self_host_difficulty: number; // 1-10 scale
  docker_ready: boolean;
  created_at: string;
  // v2
  license_type?: string; // e.g., "MIT", "GPL", "Apache"
  fork_count?: number; // number (optional for backwards compatibility)
  top_contributors?: string[] | string; // e.g. ["alice:150", "bob:100"] or JSON string from DB
  languages?: string[] | string; // e.g. ['JavaScript:10000', 'TypeScript:40'] or JSON string from DB
}

export interface ToolSubmission {
  id: string;
  tool_name: string;
  description: string;
  github_url: string;
  category: Category;
  saas_equivalent: string; // e.g., "Slack", "Jira", "Stripe"
  github_stars: number;
  submitter_email: string; // ISO date string
  reviewer_notes: string; // 1-10 scale
  created_at: string;
}
export interface Database {
  public: {
    Tables: {
      tools: {
        Row: Tool;
        Insert: Omit<Tool, "id" | "created_at">;
        Update: Partial<Omit<Tool, "id" | "created_at">>;
      };
      tool_submissions: {
        Row: ToolSubmission;
        Insert: Omit<ToolSubmission, "id" | "created_at" | "reviewer_notes">;
        Update: Partial<Omit<ToolSubmission, "id" | "created_at">>;
      };
    };
  };
}
