-- Create the tools table for Exit-Saas.io
CREATE TABLE IF NOT EXISTS tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  github_url TEXT NOT NULL,
  website_url TEXT,
  saas_alternative VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN (
    'CRM',
    'Analytics',
    'DevTools',
    'Communication',
    'Project Management',
    'Marketing',
    'Finance',
    'Storage',
    'Security',
    'Other'
  )),
  stars INTEGER NOT NULL DEFAULT 0,
  last_commit TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  self_host_difficulty INTEGER NOT NULL CHECK (self_host_difficulty >= 1 AND self_host_difficulty <= 10),
  logo_url TEXT,
  monthly_saas_price DECIMAL(10, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on category for faster filtering
CREATE INDEX IF NOT EXISTS idx_tools_category ON tools(category);

-- Create an index on stars for sorting
CREATE INDEX IF NOT EXISTS idx_tools_stars ON tools(stars DESC);

-- Create index on saas_alternative for search
CREATE INDEX IF NOT EXISTS idx_tools_saas_alternative ON tools(saas_alternative);

-- Enable Row Level Security
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read tools
CREATE POLICY "Allow public read access" ON tools
  FOR SELECT
  USING (true);

-- Create a policy for authenticated users to insert/update (for admin)
CREATE POLICY "Allow authenticated insert" ON tools
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON tools
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to call the function before update
CREATE TRIGGER update_tools_updated_at
  BEFORE UPDATE ON tools
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO tools (name, description, github_url, website_url, saas_alternative, category, stars, last_commit, self_host_difficulty, monthly_saas_price) VALUES
('Mattermost', 'Open source platform for secure collaboration across the entire software development lifecycle.', 'https://github.com/mattermost/mattermost', 'https://mattermost.com', 'Slack', 'Communication', 28000, NOW() - INTERVAL '2 days', 4, 15),
('Plane', 'Open source project planning tool for tracking issues, epics, and product roadmaps.', 'https://github.com/makeplane/plane', 'https://plane.so', 'Jira', 'Project Management', 26000, NOW() - INTERVAL '1 day', 5, 10),
('Plausible', 'Simple, open source, lightweight and privacy-friendly web analytics alternative to Google Analytics.', 'https://github.com/plausible/analytics', 'https://plausible.io', 'Google Analytics', 'Analytics', 19000, NOW() - INTERVAL '3 days', 3, 9),
('Twenty', 'Modern CRM offering the flexibility of open-source, advanced features, and a sleek design.', 'https://github.com/twentyhq/twenty', 'https://twenty.com', 'Salesforce', 'CRM', 15000, NOW() - INTERVAL '1 day', 6, 25),
('Lago', 'Open source metering and usage-based billing platform for product-led SaaS.', 'https://github.com/getlago/lago', 'https://getlago.com', 'Stripe Billing', 'Finance', 6500, NOW() - INTERVAL '2 days', 5, 50),
('Chatwoot', 'Open-source customer engagement suite, an alternative to Intercom, Zendesk, and Salesforce Service Cloud.', 'https://github.com/chatwoot/chatwoot', 'https://chatwoot.com', 'Intercom', 'Communication', 20000, NOW() - INTERVAL '1 day', 4, 39),
('Listmonk', 'High performance, self-hosted, newsletter and mailing list manager with a modern dashboard.', 'https://github.com/knadh/listmonk', 'https://listmonk.app', 'Mailchimp', 'Marketing', 14000, NOW() - INTERVAL '5 days', 2, 20),
('Gitea', 'Painless self-hosted all-in-one software development service including Git hosting, code review, and CI/CD.', 'https://github.com/go-gitea/gitea', 'https://gitea.io', 'GitHub', 'DevTools', 43000, NOW() - INTERVAL '1 day', 3, 21),
('MinIO', 'High-performance, S3 compatible object storage. Built for AI/ML, data lakes, and high-performance applications.', 'https://github.com/minio/minio', 'https://min.io', 'AWS S3', 'Storage', 45000, NOW() - INTERVAL '1 day', 4, 23),
('Vaultwarden', 'Unofficial Bitwarden compatible server written in Rust. Lightweight and perfect for self-hosting.', 'https://github.com/dani-garcia/vaultwarden', 'https://github.com/dani-garcia/vaultwarden', 'Bitwarden', 'Security', 35000, NOW() - INTERVAL '7 days', 2, 5),
('AFFiNE', 'The next-gen knowledge base that brings planning, sorting, and creating together. Privacy-focused and local-first.', 'https://github.com/toeverything/AFFiNE', 'https://affine.pro', 'Notion', 'Project Management', 36000, NOW() - INTERVAL '1 day', 5, 10),
('Umami', 'Simple, fast, privacy-focused alternative to Google Analytics that respects visitor privacy.', 'https://github.com/umami-software/umami', 'https://umami.is', 'Google Analytics', 'Analytics', 21000, NOW() - INTERVAL '2 days', 2, 9);
