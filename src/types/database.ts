export type Category =
  | 'CRM'
  | 'Analytics'
  | 'DevTools'
  | 'Communication'
  | 'Project Management'
  | 'Marketing'
  | 'Finance'
  | 'Storage'
  | 'Security'
  | 'Other';

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
}

export interface Database {
  public: {
    Tables: {
      tools: {
        Row: Tool;
        Insert: Omit<Tool, 'id' | 'created_at'>;
        Update: Partial<Omit<Tool, 'id' | 'created_at'>>;
      };
    };
  };
}
