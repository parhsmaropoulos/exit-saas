import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Shield, Globe, Code, Heart, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | SaaS-Exit.io',
  description: 'Learn about SaaS-Exit.io - Our mission to help developers and businesses achieve Digital Sovereignty through open-source software.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Helping You Achieve{' '}
            <span className="gradient-text">Digital Sovereignty</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SaaS-Exit.io was built to help developers and businesses take back control
            of their software stack by discovering and adopting open-source alternatives.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Mission</h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that businesses and individuals should have the freedom to own their data,
              customize their tools, and operate independently of any single vendor. The rising
              costs of SaaS subscriptions and growing concerns about data privacy have made
              self-hosted, open-source software more relevant than ever.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our mission is simple: <strong className="text-foreground">make it easy for everyone
              to find, compare, and adopt open-source alternatives</strong> to the expensive SaaS
              tools they use every day.
            </p>
          </div>
        </section>

        {/* Why We Built This */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why We Built SaaS-Exit.io</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Data Privacy</h3>
              <p className="text-muted-foreground text-sm">
                Your data is your most valuable asset. Self-hosted solutions keep your data
                on your own servers, away from third-party access and data mining.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Vendor Independence</h3>
              <p className="text-muted-foreground text-sm">
                No more surprise price hikes or feature removals. Open-source software gives
                you the freedom to migrate, fork, or modify as your needs evolve.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Full Customization</h3>
              <p className="text-muted-foreground text-sm">
                Access to source code means you can customize every aspect of your tools.
                Build exactly what your team needs without artificial limitations.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cost Savings</h3>
              <p className="text-muted-foreground text-sm">
                Per-user SaaS pricing adds up quickly. Self-hosted solutions typically cost
                a flat hosting fee regardless of how many users you have.
              </p>
            </div>
          </div>
        </section>

        {/* What is Digital Sovereignty */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">What is Digital Sovereignty?</h2>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Digital Sovereignty</strong> is the ability of
              individuals and organizations to have control over their own digital infrastructure,
              data, and technology choices. It means:
            </p>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#x2713;</span>
                <span>Owning and controlling your data, not renting access to it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#x2713;</span>
                <span>Being able to migrate your systems without vendor lock-in</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#x2713;</span>
                <span>Having the freedom to audit, modify, and extend your tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#x2713;</span>
                <span>Not being subject to unilateral pricing or policy changes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#x2713;</span>
                <span>Ensuring business continuity regardless of external factors</span>
              </li>
            </ul>
          </div>
        </section>

        {/* How We Help */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">How SaaS-Exit.io Helps</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Discover Alternatives</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Browse our curated database of open-source alternatives organized by the
                  SaaS tools they replace. Find the perfect fit for your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Calculate Savings</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Use our TCO Calculator to see exactly how much you could save by switching
                  from per-user SaaS pricing to self-hosted solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Evaluate Complexity</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Check our &quot;Self-Host Difficulty&quot; ratings and Docker readiness indicators
                  to understand what it takes to deploy and maintain each tool.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Make the Switch</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Access deployment guides, Docker configurations, and hosting recommendations
                  to make your transition as smooth as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Built for the Community</h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Open Source Spirit</h3>
                <p className="text-sm text-muted-foreground">Giving back to the community</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              SaaS-Exit.io is built by developers, for developers. We&apos;re passionate about
              open-source software and believe in the power of community-driven development.
              If you&apos;d like to contribute, suggest tools, or report issues, we&apos;d love to
              hear from you.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Made with love for the open-source community</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-4">
            Have questions, suggestions, or want to submit a tool? We&apos;d love to hear from you.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              Email: <span className="text-primary">hello@saas-exit.io</span>
            </li>
            <li>
              Twitter:{' '}
              <a
                href="https://twitter.com/saasexit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @saasexit
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a
                href="https://github.com/your-repo/saas-exit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/your-repo/saas-exit
              </a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
