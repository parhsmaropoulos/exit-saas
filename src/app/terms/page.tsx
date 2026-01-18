import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Exit-Saas.io",
  description:
    "Terms of Service for Exit-Saas.io - Read our terms and conditions for using our open-source software directory.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "January 18, 2026";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              Welcome to Exit-Saas.io (&quot;Site,&quot; &quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;). By accessing or using our
              website at exit-saas.io, you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you do not agree to all of these
              Terms, do not use this Site.
            </p>
            <p className="text-muted-foreground mt-4">
              We reserve the right to modify these Terms at any time. We will
              post any changes on this page and indicate the date of the latest
              revision. Your continued use of the Site after any changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Description of Service
            </h2>
            <p className="text-muted-foreground">
              Exit-Saas.io is a directory and informational resource that helps
              users discover open-source, self-hosted alternatives to popular
              SaaS (Software as a Service) products. Our Site provides:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>Directory listings of open-source software tools</li>
              <li>
                Comparison information between SaaS and self-hosted alternatives
              </li>
              <li>
                Educational content about self-hosting and open-source software
              </li>
              <li>
                Links to third-party resources, including GitHub repositories
                and hosting providers
              </li>
              <li>Affiliate links to hosting and infrastructure services</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              The Site is provided for informational purposes only. We do not
              develop, maintain, or provide support for the third-party software
              listed in our directory.
            </p>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. User Conduct and Responsibilities
            </h2>
            <p className="text-muted-foreground">
              By using our Site, you agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>
                Use the Site only for lawful purposes and in accordance with
                these Terms
              </li>
              <li>
                Not use the Site to transmit any harmful, offensive, or illegal
                content
              </li>
              <li>
                Not attempt to gain unauthorized access to any portion of the
                Site or any systems or networks connected to the Site
              </li>
              <li>
                Not use automated systems (bots, scrapers, etc.) to access the
                Site without our prior written permission
              </li>
              <li>
                Not interfere with or disrupt the Site or servers or networks
                connected to the Site
              </li>
              <li>
                Not impersonate any person or entity or falsely state or
                misrepresent your affiliation with a person or entity
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We reserve the right to terminate or suspend your access to the
              Site immediately, without prior notice or liability, for any
              reason, including if you breach these Terms.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="text-muted-foreground">
              The Site and its original content, features, and functionality are
              owned by Exit-Saas.io and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
            <p className="text-muted-foreground mt-4">
              The directory listings, tool descriptions, comparison tables, and
              educational content on this Site are our proprietary property. You
              may not reproduce, distribute, modify, create derivative works of,
              publicly display, or commercially exploit our content without our
              express written permission.
            </p>
            <p className="text-muted-foreground mt-4">
              Third-party trademarks, service marks, and logos referenced on the
              Site are the property of their respective owners. The display of
              these trademarks does not imply endorsement or affiliation with
              Exit-Saas.io.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Third-Party Links and Resources
            </h2>
            <p className="text-muted-foreground">
              Our Site contains links to third-party websites, services, and
              resources, including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>GitHub repositories of open-source projects</li>
              <li>Official websites of open-source software</li>
              <li>
                Hosting providers and infrastructure services (may include
                affiliate links)
              </li>
              <li>Documentation and deployment guides</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              These third-party links are provided for your convenience only. We
              do not control, endorse, or assume responsibility for the content,
              privacy policies, or practices of any third-party websites or
              services. You acknowledge and agree that we shall not be
              responsible or liable, directly or indirectly, for any damage or
              loss caused by your use of any third-party content, goods, or
              services.
            </p>
            <p className="text-muted-foreground mt-4">
              We strongly advise you to read the terms and conditions and
              privacy policies of any third-party websites or services that you
              visit.
            </p>
          </section>

          {/* Affiliate Relationships */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Affiliate Relationships and Disclosure
            </h2>
            <p className="text-muted-foreground">
              Exit-Saas.io participates in affiliate marketing programs. When
              you click on certain links on our Site and make a purchase, we may
              receive a commission at no additional cost to you. These affiliate
              relationships help us maintain and improve our free directory
              service.
            </p>
            <p className="text-muted-foreground mt-4">
              Our affiliate relationships do not influence our editorial content
              or directory listings. We list open-source tools based on their
              merit, community adoption, and relevance to users seeking SaaS
              alternatives.
            </p>
            <p className="text-muted-foreground mt-4">
              For full transparency about our affiliate relationships, please
              see our{" "}
              <Link
                href="/affiliate-disclosure"
                className="text-primary hover:underline"
              >
                Affiliate Disclosure
              </Link>{" "}
              page.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-muted-foreground">
              THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, AND SERVICES
              INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE
              ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
              BASIS, UNLESS OTHERWISE SPECIFIED IN WRITING.
            </p>
            <p className="text-muted-foreground mt-4">
              WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR
              IMPLIED, AS TO:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>
                The accuracy, completeness, or reliability of information on the
                Site
              </li>
              <li>
                The availability, functionality, or performance of any
                third-party software listed
              </li>
              <li>
                The security, stability, or suitability of open-source tools for
                your specific needs
              </li>
              <li>
                The compatibility of self-hosted solutions with your
                infrastructure
              </li>
              <li>
                The continuation of development or support for any listed
                open-source project
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We disclaim all warranties, express or implied, including but not
              limited to implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL Exit-Saas.IO, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR
              AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>Loss of profits, data, use, or goodwill</li>
              <li>
                Service interruption or system failures resulting from
                self-hosted software
              </li>
              <li>Security breaches or data loss from third-party software</li>
              <li>Costs of procurement of substitute goods or services</li>
              <li>
                Any damages arising from your use of the Site or any linked
                third-party resources
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              This limitation applies whether the alleged liability is based on
              contract, tort, negligence, strict liability, or any other basis,
              even if we have been advised of the possibility of such damage.
            </p>
            <p className="text-muted-foreground mt-4">
              Some jurisdictions do not allow the exclusion or limitation of
              incidental or consequential damages, so the above limitations may
              not apply to you.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Indemnification
            </h2>
            <p className="text-muted-foreground">
              You agree to indemnify, defend, and hold harmless Exit-Saas.io,
              its affiliates, officers, directors, employees, and agents from
              and against any and all claims, damages, obligations, losses,
              liabilities, costs, and expenses (including attorney&apos;s fees)
              arising from:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>Your use of and access to the Site</li>
              <li>Your violation of any term of these Terms</li>
              <li>
                Your violation of any third-party right, including intellectual
                property or privacy rights
              </li>
              <li>
                Your deployment or use of any third-party software listed on the
                Site
              </li>
              <li>
                Any claim that your use of the Site caused damage to a third
                party
              </li>
            </ul>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Governing Law and Jurisdiction
            </h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Exit-Saas.io operates,
              without regard to its conflict of law provisions.
            </p>
            <p className="text-muted-foreground mt-4">
              Any disputes arising from or relating to these Terms or your use
              of the Site shall be resolved through binding arbitration in
              accordance with the rules of the American Arbitration Association,
              except where prohibited by law.
            </p>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Data Protection and Privacy
            </h2>
            <p className="text-muted-foreground">
              Your use of the Site is also governed by our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your personal
              information.
            </p>
            <p className="text-muted-foreground mt-4">
              By using the Site, you consent to the collection and use of
              information as described in our Privacy Policy.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. Severability
            </h2>
            <p className="text-muted-foreground">
              If any provision of these Terms is found to be unenforceable or
              invalid under any applicable law, such unenforceability or
              invalidity shall not render these Terms unenforceable or invalid
              as a whole. Such provisions shall be deleted without affecting the
              remaining provisions herein.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              13. Entire Agreement
            </h2>
            <p className="text-muted-foreground">
              These Terms, together with our Privacy Policy and Affiliate
              Disclosure, constitute the entire agreement between you and
              Exit-Saas.io regarding your use of the Site and supersede all
              prior and contemporaneous written or oral agreements.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              14. Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              Email: support@exit-saas.io
            </p>
            <p className="text-muted-foreground mt-4">
              For general inquiries, visit our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
