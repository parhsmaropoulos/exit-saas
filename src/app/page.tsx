import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ToolsDirectory } from '@/components/tools/tools-directory';
import { mockTools } from '@/lib/mock-data';
import { createServerSupabaseClient } from '@/lib/supabase';

// Server-side data fetching for SEO
async function getTools() {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .order('stars', { ascending: false });

  if (error) {
    console.error('Error fetching tools:', error);
    return mockTools;
  }

  return data || mockTools;
}

export default async function Home() {
  const tools = await getTools();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <ToolsDirectory initialTools={tools} />
      </main>

      <Footer />
    </div>
  );
}
