-- Fix RLS policies for admin operations

-- ============================================
-- OPTION A: Add permissive policies (recommended for development)
-- ============================================

-- Allow inserts into tools table (for admin approval workflow)
CREATE POLICY IF NOT EXISTS "Allow public inserts" ON tools
  FOR INSERT
  WITH CHECK (true);

-- Allow updates on tool_submissions (for status changes)
CREATE POLICY IF NOT EXISTS "Allow public updates" ON tool_submissions
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Allow all operations on tools table for public (anon) access
CREATE POLICY IF NOT EXISTS "Allow public select" ON tools
  FOR SELECT
  USING (true);

CREATE POLICY IF NOT EXISTS "Allow public update" ON tools
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow public delete" ON tools
  FOR DELETE
  USING (true);

-- ============================================
-- OPTION B: Alternative - Just disable RLS entirely (simplest)
-- Uncomment these lines if you prefer no RLS
-- ============================================

-- ALTER TABLE tools DISABLE ROW LEVEL SECURITY;
-- ALTER TABLE tool_submissions DISABLE ROW LEVEL SECURITY;
