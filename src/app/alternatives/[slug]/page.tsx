import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/alternatives/breadcrumb";
import { SwitchCalculator } from "@/components/alternatives/switch-calculator";
import { ComparisonTable } from "@/components/alternatives/comparison-table";
import { TechSpecsSidebar } from "@/components/alternatives/tech-specs-sidebar";
import { AffiliateBanner } from "@/components/alternatives/affiliate-banner";
import { HostingCallToAction } from "@/components/monetization/hosting-call-to-action";
import { SidebarAd } from "@/components/monetization/sidebar-ad";
import { createServerSupabaseClient } from "@/lib/supabase";
import { generateSlug } from "@/lib/slug";
import { getSaasPrice } from "@/lib/saas-pricing";
import { mockTools } from "@/lib/mock-data";
import { Tool } from "@/types/database";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fetch tool by slug
async function getToolBySlug(slug: string): Promise<Tool | null> {
  const supabase = createServerSupabaseClient();
  const { data: tools, error } = await supabase.from("tools").select("*");

  if (error || !tools || tools.length === 0) {
    // Fallback to mock data
    const mockTool = mockTools.find((t) => generateSlug(t.name) === slug);
    return mockTool || null;
  }

  const typedTools = tools as Tool[];
  const tool = typedTools.find((t) => generateSlug(t.name) === slug);
  return tool || null;
}

// Fetch all tools for static generation
async function getAllTools(): Promise<Tool[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.from("tools").select("*");

  if (error || !data || data.length === 0) {
    return mockTools;
  }

  return data as Tool[];
}

// Generate static params for all tools
export async function generateStaticParams() {
  const tools = await getAllTools();

  return tools.map((tool) => ({
    slug: generateSlug(tool.name),
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found | SaaS-Exit.io",
    };
  }

  const title = `${tool.name}: Best ${tool.saas_equivalent} Alternative (Open Source) | SaaS-Exit.io`;
  const description = `Looking for a ${tool.saas_equivalent} alternative? ${tool.name} is an open-source, self-hosted solution. Calculate your savings and learn how to deploy ${tool.name} today.`;

  return {
    title,
    description,
    keywords: [
      `${tool.saas_equivalent} alternative`,
      `${tool.name}`,
      "open source",
      "self-hosted",
      tool.category,
      "free",
      "privacy",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url: `/alternatives/${slug}`,
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    // },
    alternates: {
      canonical: `/alternatives/${slug}`,
    },
  };
}

export default async function AlternativePage({ params }: PageProps) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const saasPrice = getSaasPrice(tool.saas_equivalent);
  // Calculate default savings for hosting CTA (25 users)
  const defaultAnnualSavings = saasPrice * 25 * 12 - 5 * 12;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AffiliateBanner />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb toolName={tool.name} />

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Looking for a{" "}
            <span className="text-primary">{tool.saas_equivalent}</span>{" "}
            Alternative?
            <br />
            Meet <span className="gradient-text">{tool.name}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {tool.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content (2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Switch Calculator */}
            <section id="calculator">
              <SwitchCalculator tool={tool} />
            </section>

            {/* Hosting CTA - High Conversion */}
            <section>
              <HostingCallToAction toolName={tool.name} />
            </section>

            {/* Comparison Table */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {tool.saas_equivalent} vs {tool.name}: Feature Comparison
              </h2>
              <ComparisonTable tool={tool} />
            </section>

            {/* Why Switch Section */}
            <section className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Why Switch from {tool.saas_equivalent} to {tool.name}?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Complete Data Ownership
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Your data stays on your servers. No third-party access, no
                    data mining, and full compliance with privacy regulations
                    like GDPR and HIPAA.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No Per-User Pricing
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Pay only for hosting (~$5-20/month), regardless of team
                    size. Add unlimited users without increasing your costs.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Full Customization
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Access the source code and customize {tool.name} to fit your
                    exact workflow. No feature limitations or paywalls.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No Vendor Lock-in
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Export your data anytime. Move between hosting providers
                    freely. Your business isn&apos;t dependent on a single
                    vendor.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar (1 column) */}
          <div className="lg:col-span-1 space-y-6">
            <TechSpecsSidebar tool={tool} />
            <SidebarAd toolName={tool.name} />
          </div>
        </div>

        {/* Schema.org JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: tool.name,
              description: tool.description,
              applicationCategory: tool.category,
              operatingSystem: "Linux, Docker",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                ratingCount: Math.floor(tool.stars / 100),
              },
            }),
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
