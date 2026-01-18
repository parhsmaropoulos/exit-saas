import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Info, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Exit-Saas.io",
  description:
    "Affiliate Disclosure for Exit-Saas.io - Transparency about our affiliate partnerships and how we earn commissions.",
};

export default function AffiliateDisclosurePage() {
  const lastUpdated = "January 17, 2026";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Affiliate Disclosure
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {lastUpdated}
        </p>

        {/* Summary Box */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                In Plain English
              </h2>
              <p className="text-muted-foreground">
                Some links on Exit-Saas.io are affiliate links. This means if
                you click on a link and sign up for a service (like hosting), we
                may earn a small commission at
                <strong className="text-foreground">
                  {" "}
                  no extra cost to you
                </strong>
                . This helps us keep the site running and continue providing
                free, high-quality content.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Full Disclosure */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Full Disclosure Statement
            </h2>
            <p className="text-muted-foreground">
              Exit-Saas.io is a participant in various affiliate advertising
              programs designed to provide a means for sites to earn advertising
              fees by advertising and linking to third-party websites and
              services.
            </p>
            <p className="text-muted-foreground mt-4">
              This means that when you click on certain links on our website and
              make a purchase or sign up for a service, we may receive a
              commission. This commission comes at no additional cost to you
              and, in many cases, you may even receive exclusive discounts or
              credits through our affiliate partnerships.
            </p>
          </section>

          {/* Our Affiliate Partners */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Affiliate Partners
            </h2>
            <p className="text-muted-foreground mb-4">
              We currently participate in affiliate programs with the following
              companies:
            </p>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                  DigitalOcean
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  DigitalOcean is a cloud infrastructure provider. When you sign
                  up through our referral links, you receive $200 in free
                  credits, and we earn a commission when you become a paying
                  customer.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                  Hetzner
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Hetzner is a European hosting provider known for affordable
                  dedicated servers and cloud services. We may earn a commission
                  when you sign up through our links.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                  Other Partners
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  We may partner with additional hosting providers, software
                  tools, and services in the future. This page will be updated
                  to reflect any new partnerships.
                </p>
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Commitment to You
            </h2>
            <p className="text-muted-foreground">
              We want to be completely transparent about how we operate. Here
              are our commitments:
            </p>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-3">
              <li>
                <strong className="text-foreground">
                  Honest Recommendations:
                </strong>{" "}
                We only recommend products and services that we believe provide
                genuine value. Our recommendations are based on quality, not
                commission rates.
              </li>
              <li>
                <strong className="text-foreground">No Extra Cost:</strong>{" "}
                Using our affiliate links never costs you extra. In most cases,
                you&apos;ll receive the same price or better discounts than
                going directly to the provider.
              </li>
              <li>
                <strong className="text-foreground">
                  Editorial Independence:
                </strong>{" "}
                Our content and tool recommendations are not influenced by
                affiliate relationships. We evaluate all open-source
                alternatives based on their merits.
              </li>
              <li>
                <strong className="text-foreground">Clear Labeling:</strong> We
                strive to clearly indicate when content contains affiliate links
                through disclosure banners and statements.
              </li>
            </ul>
          </section>

          {/* How Affiliates Work */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How Affiliate Links Work
            </h2>
            <p className="text-muted-foreground">
              When you click an affiliate link on our site:
            </p>
            <ol className="list-decimal pl-6 mt-4 text-muted-foreground space-y-2">
              <li>
                A cookie is placed in your browser (typically lasting 30-90
                days)
              </li>
              <li>You&apos;re redirected to the partner&apos;s website</li>
              <li>
                If you make a purchase or sign up, we receive a commission
              </li>
              <li>
                The commission is paid by the partner, not added to your cost
              </li>
            </ol>
          </section>

          {/* Why We Use Affiliates */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Why We Use Affiliate Links
            </h2>
            <p className="text-muted-foreground">
              Running Exit-Saas.io requires time and resources. Affiliate
              commissions help us:
            </p>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li>Keep the website free and accessible to everyone</li>
              <li>Maintain and update our database of open-source tools</li>
              <li>Research and review new self-hosted alternatives</li>
              <li>Pay for hosting, development, and operational costs</li>
              <li>Continue improving the calculator and comparison features</li>
            </ul>
          </section>

          {/* FTC Compliance */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              FTC Compliance
            </h2>
            <p className="text-muted-foreground">
              In accordance with the Federal Trade Commission&apos;s 16 CFR Part
              255 guidelines concerning the use of endorsements and testimonials
              in advertising, we want to make it clear that we may receive
              compensation for links, posts, and product reviews on this
              website.
            </p>
            <p className="text-muted-foreground mt-4">
              Our opinions and reviews are our own and are not influenced by any
              compensation we may receive. We always aim to provide accurate and
              honest information to our readers.
            </p>
          </section>

          {/* Questions */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Questions?
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about our affiliate relationships or
              this disclosure, please don&apos;t hesitate to contact us at{" "}
              <span className="text-primary">support@exit-saas.io</span>.
            </p>
            <p className="text-muted-foreground mt-4">
              You can also review our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              for more information about how we handle your data.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
