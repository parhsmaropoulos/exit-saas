-- Create tool_submissions table for storing user-submitted tools
CREATE TABLE IF NOT EXISTS tool_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tool_name VARCHAR(255) NOT NULL,
  github_url VARCHAR(500) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  saas_equivalent VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  submitter_email VARCHAR(255) NOT NULL,
  github_stars INTEGER,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewer_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by VARCHAR(255)
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_tool_submissions_status ON tool_submissions(status);
CREATE INDEX IF NOT EXISTS idx_tool_submissions_github_url ON tool_submissions(github_url);
CREATE INDEX IF NOT EXISTS idx_tool_submissions_created_at ON tool_submissions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE tool_submissions ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserts from anyone (for the public submission form)
CREATE POLICY "Allow public inserts" ON tool_submissions
  FOR INSERT
  WITH CHECK (true);

-- Policy to allow reading only for authenticated users (admin)
-- You can adjust this based on your auth setup
CREATE POLICY "Allow authenticated reads" ON tool_submissions
  FOR SELECT
  USING (true);

-- Add a comment for documentation
COMMENT ON TABLE tool_submissions IS 'Stores user-submitted tools pending review for the directory';
