import { SaasContent } from "@/lib/saas-content";
import { ArrowRight, DollarSign, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  saasName: string;
  saasContent: SaasContent;
  alternativeCount: number;
}

export function HeroSection({ saasName, saasContent, alternativeCount }: HeroSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            {alternativeCount} Open-Source Alternative{alternativeCount !== 1 ? 's' : ''}
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Best <span className="text-primary">{saasContent.name}</span> Alternatives
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Discover open-source, self-hosted alternatives to {saasContent.name}.
            Save money, own your data, and break free from vendor lock-in.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                <div className="text-2xl font-bold text-foreground">
                  {saasContent.pricing.includes('$') ? saasContent.pricing.split('-')[0].replace('$', '$') : 'Free'}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{saasContent.name} Pricing</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <div className="text-2xl font-bold text-foreground">{alternativeCount}</div>
              </div>
              <div className="text-sm text-muted-foreground">Alternatives</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <div className="text-2xl font-bold text-foreground">100%</div>
              </div>
              <div className="text-sm text-muted-foreground">Data Ownership</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#alternatives">
                Explore Alternatives
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/calculator">Calculate Savings</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
