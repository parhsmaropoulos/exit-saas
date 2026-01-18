import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | SaaS-Exit.io",
  description:
    "Privacy Policy for SaaS-Exit.io - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 17, 2026";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Introduction
            </h2>
            <p className="text-muted-foreground">
              SaaS-Exit.io (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website exit-saas.io (the
              &quot;Site&quot;).
            </p>
            <p className="text-muted-foreground mt-4">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              Site.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              Log Files and Automatically Collected Data
            </h3>
            <p className="text-muted-foreground">
              Like many websites, we collect certain information automatically
              when you visit our Site. This information may include:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Date and time of your visit</li>
              <li>Device information</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              Cookies and Web Beacons
            </h3>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to track activity
              on our Site and hold certain information. Cookies are files with a
              small amount of data which may include an anonymous unique
              identifier.
            </p>
            <p className="text-muted-foreground mt-4">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground">
              We may use the information we collect for various purposes,
              including to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>Provide, operate, and maintain our Site</li>
              <li>Improve, personalize, and expand our Site</li>
              <li>Understand and analyze how you use our Site</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>Monitor and analyze usage and trends</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          {/* Third-Party Advertising */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Third-Party Advertising Partners
            </h2>
            <p className="text-muted-foreground">
              We may use third-party advertising companies to serve ads when you
              visit our Site. These companies may use information about your
              visits to this and other websites in order to provide
              advertisements about goods and services of interest to you.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              Google AdSense
            </h3>
            <p className="text-muted-foreground">
              We use Google AdSense to display advertisements on our Site.
              Google AdSense uses cookies to serve ads based on your prior
              visits to our Site or other websites. Google&apos;s use of
              advertising cookies enables it and its partners to serve ads based
              on your visit to our Site and/or other sites on the Internet.
            </p>
            <p className="text-muted-foreground mt-4">
              You may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Ads Settings
              </a>
              .
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
              Google Analytics
            </h3>
            <p className="text-muted-foreground">
              We use Google Analytics to analyze the use of our Site. Google
              Analytics gathers information about website use by means of
              cookies. The information gathered is used to create reports about
              the use of our Site.
            </p>
            <p className="text-muted-foreground mt-4">
              Google&apos;s privacy policy is available at:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </section>

          {/* Affiliate Links */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Affiliate Links and Partnerships
            </h2>
            <p className="text-muted-foreground">
              Our Site contains affiliate links to third-party products and
              services. When you click on these links and make a purchase, we
              may earn a commission at no additional cost to you.
            </p>
            <p className="text-muted-foreground mt-4">
              For more information about our affiliate relationships, please see
              our{" "}
              <Link
                href="/affiliate-disclosure"
                className="text-primary hover:underline"
              >
                Affiliate Disclosure
              </Link>
              .
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Retention
            </h2>
            <p className="text-muted-foreground">
              We will retain your information only for as long as is necessary
              for the purposes set out in this Privacy Policy. We will retain
              and use your information to the extent necessary to comply with
              our legal obligations, resolve disputes, and enforce our policies.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-muted-foreground">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>
                The right to access the personal information we hold about you
              </li>
              <li>
                The right to request correction of inaccurate personal
                information
              </li>
              <li>
                The right to request deletion of your personal information
              </li>
              <li>
                The right to opt-out of certain data processing activities
              </li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise any of these rights, please contact us using the
              information provided below.
            </p>
          </section>

          {/* GDPR */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              GDPR Compliance (For EU Users)
            </h2>
            <p className="text-muted-foreground">
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights. We aim to take reasonable
              steps to allow you to correct, amend, delete, or limit the use of
              your personal information.
            </p>
            <p className="text-muted-foreground mt-4">
              The legal basis for collecting and using your personal information
              depends on the specific context in which we collect it. We will
              only use your personal information where we have your consent to
              do so, or where we have a legitimate interest to process your
              data.
            </p>
          </section>

          {/* CCPA */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              CCPA Privacy Rights (For California Residents)
            </h2>
            <p className="text-muted-foreground">
              Under the California Consumer Privacy Act (CCPA), California
              residents have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-2">
              <li>
                Request disclosure of the categories and specific pieces of
                personal information collected
              </li>
              <li>Request deletion of personal information</li>
              <li>
                Opt-out of the sale of personal information (we do not sell
                personal information)
              </li>
              <li>Not be discriminated against for exercising CCPA rights</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-muted-foreground">
              Our Site is not intended for children under 13 years of age. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date.
            </p>
            <p className="text-muted-foreground mt-4">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              Email: support@exit-saas.io
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
