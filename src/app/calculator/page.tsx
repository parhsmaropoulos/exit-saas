import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StandaloneCalculator } from '@/components/calculator/standalone-calculator';

export const metadata: Metadata = {
  title: 'SaaS Cost Calculator - Calculate Your Self-Hosting Savings | Exit-Saas',
  description: 'Calculate how much you can save by switching from expensive SaaS subscriptions to open-source alternatives. Free TCO calculator with ROI analysis.',
  keywords: 'saas calculator, tco calculator, cost savings calculator, self-hosting calculator, roi calculator, saas vs self-hosted',
  openGraph: {
    title: 'SaaS Cost Calculator - Calculate Your Self-Hosting Savings',
    description: 'Calculate how much you can save by switching from expensive SaaS subscriptions to open-source alternatives.',
    type: 'website',
    url: 'https://exit-saas.io/calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Cost Calculator - Calculate Your Self-Hosting Savings',
    description: 'Calculate how much you can save by switching from expensive SaaS subscriptions to open-source alternatives.',
  },
  alternates: {
    canonical: 'https://exit-saas.io/calculator',
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "SaaS Cost Calculator",
            "applicationCategory": "BusinessApplication",
            "description": "Calculate total cost of ownership and savings when switching from SaaS to self-hosted alternatives",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "TCO Calculator",
              "ROI Calculator",
              "Savings Projections",
              "Cost Breakdown Analysis"
            ]
          })
        }}
      />

      <Header />

      <main>
        <StandaloneCalculator />
      </main>

      <Footer />
    </div>
  );
}
