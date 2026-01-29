import { createServerSupabaseClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/alternative-to/hero-section';
import { WhySwitchSection } from '@/components/alternative-to/why-switch-section';
import { FaqSection } from '@/components/alternative-to/faq-section';
import { ToolsDirectory } from '@/components/tools/tools-directory';
import { getAllSaasSlugs, getSaasContent } from '@/lib/saas-content';
import { deslugify, slugify } from '@/lib/utils';
import { Tool } from '@/types/database';
import { Metadata } from 'next';

interface PageProps {
  params: {
    saas: string;
  };
}

// Generate static paths for all SaaS alternatives
export async function generateStaticParams() {
  // Get from our predefined SaaS content
  const saasSlugs = getAllSaasSlugs();

  return saasSlugs.map(saas => ({
    saas: saas,
  }));
}

// Fetch all alternatives for a specific SaaS
async function getAlternatives(saasSlug: string): Promise<Tool[]> {
  const supabase = createServerSupabaseClient();

  // Convert slug to possible SaaS names (handle variations)
  const saasName = deslugify(saasSlug);

  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .or(`saas_equivalent.ilike.%${saasName}%,saas_equivalent.ilike.%${saasSlug}%`)
    .order('stars', { ascending: false });

  if (error) {
    console.error('Error fetching alternatives:', error);
    return [];
  }

  return data || [];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { saas } = await params;
  const saasContent = getSaasContent(saas);

  if (!saasContent) {
    return {
      title: 'SaaS Alternative Not Found',
    };
  }

  const saasName = saasContent.name;
  const title = `Best ${saasName} Alternatives - Open Source & Self-Hosted [2026]`;
  const description = `Discover ${saasContent.name} alternatives that are open-source and self-hosted. Save ${saasContent.pricing} with tools that give you complete data ownership and privacy.`;

  return {
    title,
    description,
    keywords: [
      `${saasName} alternative`,
      `${saasName} alternatives`,
      `open source ${saasName}`,
      `self-hosted ${saasName}`,
      `${saasName} replacement`,
      'open source alternatives',
      'self-hosting',
      'data privacy',
      'cost savings',
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://exit-saas.io/alternative-to/${saas}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://exit-saas.io/alternative-to/${saas}`,
    },
  };
}

export default async function AlternativeToPage({ params }: PageProps) {
  const { saas } = await params;
  const saasContent = getSaasContent(saas);

  if (!saasContent) {
    notFound();
  }

  const alternatives = await getAlternatives(saas);

  if (alternatives.length === 0) {
    // If no alternatives found in database, show message
    // but still render the page for SEO purposes
  }

  const saasName = saasContent.name;

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data - WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${saasName} Alternatives`,
            "description": `Open-source and self-hosted alternatives to ${saasName}`,
            "url": `https://exit-saas.io/alternative-to/${saas}`,
          })
        }}
      />

      {/* Structured Data - FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `What are the best alternatives to ${saasName}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `We've curated ${alternatives.length} high-quality open-source alternatives to ${saasName}. Each alternative offers similar functionality while giving you complete control over your data and infrastructure.`
                }
              },
              {
                "@type": "Question",
                "name": `How much can I save by switching from ${saasName}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Depending on your team size and usage, you can save ${saasContent.pricing} per month on subscription fees. With self-hosted alternatives, you typically only pay for server hosting (starting at $10-20/month).`
                }
              },
              {
                "@type": "Question",
                "name": `Are open-source alternatives as good as ${saasName}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Many open-source alternatives match or exceed ${saasName}'s features. While ${saasName} offers polish and convenience, open-source tools provide greater flexibility, customization, data ownership, and privacy.`
                }
              }
            ]
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://exit-saas.io"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Alternatives",
                "item": "https://exit-saas.io/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": `${saasName} Alternatives`,
                "item": `https://exit-saas.io/alternative-to/${saas}`
              }
            ]
          })
        }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection
          saasName={saasName}
          saasContent={saasContent}
          alternativeCount={alternatives.length}
        />

        {/* Why Switch Section */}
        <WhySwitchSection
          saasName={saasName}
          saasContent={saasContent}
        />

        {/* Alternatives Grid */}
        <section id="alternatives" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {alternatives.length} Open-Source Alternative{alternatives.length !== 1 ? 's' : ''} to {saasName}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                All alternatives are actively maintained, open-source, and ready to self-host.
                Compare features, GitHub stars, and deployment difficulty.
              </p>
            </div>

            {alternatives.length > 0 ? (
              <ToolsDirectory initialTools={alternatives} />
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  We're currently curating alternatives to {saasName}.
                </p>
                <p className="text-muted-foreground">
                  Check back soon or{' '}
                  <a href="/submit" className="text-primary hover:underline">
                    submit a tool
                  </a>
                  {' '}you'd like to see listed.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection
          saasName={saasName}
          saasContent={saasContent}
          alternativeCount={alternatives.length}
        />

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Break Free from {saasName}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Use our calculator to see how much you could save by switching to open-source alternatives.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/calculator"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Calculate Your Savings
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Explore All Tools
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
