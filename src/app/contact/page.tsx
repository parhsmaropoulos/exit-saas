"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const contactMethods = [
    {
      title: "General Inquiries",
      email: "support@exit-saas.io",
      description:
        "Questions about the directory, tool submissions, or general feedback",
      icon: "💬",
    },
    // {
    //   title: "Privacy & Data",
    //   email: "privacy@exit-saas.io",
    //   description: "Privacy concerns, data requests, GDPR/CCPA inquiries",
    //   icon: "🔒",
    // },
    // {
    //   title: "Affiliate Partnerships",
    //   email: "affiliates@exit-saas.io",
    //   description: "Partnership opportunities, affiliate program inquiries",
    //   icon: "🤝",
    // },
    // {
    //   title: "Legal & Terms",
    //   email: "legal@exit-saas.io",
    //   description:
    //     "Legal matters, copyright issues, terms of service questions",
    //   icon: "⚖️",
    // },
    // {
    //   title: "Advertising & Sponsorships",
    //   email: "ads@exit-saas.io",
    //   description:
    //     "Advertising opportunities, sponsored listings, brand partnerships",
    //   icon: "📢",
    // },
  ];

  const copyToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you. Choose
            the contact method that best fits your inquiry.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            We typically respond within 24-48 hours during business days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.email}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{method.icon}</span>
                  <h2 className="text-xl font-semibold text-foreground">
                    {method.title}
                  </h2>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {method.description}
              </p>

              <div className="bg-muted rounded-md p-3 mb-3">
                <code className="text-sm text-foreground font-mono">
                  {method.email}
                </code>
              </div>

              <div className="flex gap-2">
                <a
                  href={`mailto:${method.email}`}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Send Email
                </a>
                <button
                  onClick={() => copyToClipboard(method.email)}
                  className="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors text-sm font-medium"
                  title="Copy email address"
                >
                  {copiedEmail === method.email ? (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How do I submit a new tool to the directory?
              </h3>
              <p className="text-muted-foreground">
                Use our{" "}
                <a href="/submit" className="text-primary hover:underline">
                  tool submission form
                </a>{" "}
                to suggest open-source alternatives. We review all submissions
                and add quality tools that meet our criteria.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do you offer consulting or implementation services?
              </h3>
              <p className="text-muted-foreground">
                Currently, we focus on providing information and resources
                through our directory. For implementation help, check the
                documentation links for each tool or explore our affiliate
                hosting partners who offer managed services.
              </p>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Can I advertise on Exit-Saas.io?
              </h3>
              <p className="text-muted-foreground">
                Yes! We offer advertising and sponsored listing opportunities. Contact us at{' '}
                <a
                  href="mailto:ads@exit-saas.io"
                  className="text-primary hover:underline"
                >
                  ads@exit-saas.io
                </a>{' '}
                with details about your product or service.
              </p>
            </div> */}

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How can I support the project?
              </h3>
              <p className="text-muted-foreground">
                Using our affiliate links when you sign up for hosting services
                helps support the directory at no cost to you. You can also
                contribute by sharing the site with others looking for SaaS
                alternatives.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
