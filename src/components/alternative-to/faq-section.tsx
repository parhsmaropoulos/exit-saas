import { SaasContent } from "@/lib/saas-content";

interface FaqSectionProps {
  saasName: string;
  saasContent: SaasContent;
  alternativeCount: number;
}

export function FaqSection({ saasName, saasContent, alternativeCount }: FaqSectionProps) {
  const faqs = [
    {
      question: `What are the best alternatives to ${saasContent.name}?`,
      answer: `We've curated ${alternativeCount} high-quality open-source alternatives to ${saasContent.name}. Each alternative offers similar functionality while giving you complete control over your data and infrastructure. Popular choices include tools with Docker support for easy deployment.`,
    },
    {
      question: `How much can I save by switching from ${saasContent.name}?`,
      answer: `Depending on your team size and usage, you can save anywhere from ${saasContent.pricing} per month on subscription fees. With self-hosted alternatives, you typically only pay for server hosting (starting at $10-20/month), regardless of the number of users.`,
    },
    {
      question: `Are open-source alternatives as good as ${saasContent.name}?`,
      answer: `Many open-source alternatives match or exceed ${saasContent.name}'s features. While ${saasContent.name} offers polish and convenience, open-source tools provide greater flexibility, customization, data ownership, and privacy. The best choice depends on your specific needs and technical capabilities.`,
    },
    {
      question: `How difficult is it to self-host an alternative to ${saasContent.name}?`,
      answer: `Difficulty varies by tool. Many alternatives offer Docker deployment, making setup possible in under 30 minutes. We rate each tool's self-hosting difficulty on a 1-10 scale. If you're not comfortable self-hosting, many tools also offer managed hosting options from third-party providers.`,
    },
    {
      question: `Can I migrate my data from ${saasContent.name}?`,
      answer: `Most open-source alternatives provide migration tools or import functionality for ${saasContent.name} data. The ease of migration depends on the specific tools involved. We recommend reviewing each alternative's documentation for migration guides and best practices.`,
    },
    {
      question: `Do these alternatives work for teams/enterprises?`,
      answer: `Yes! Many ${saasContent.name} alternatives are used by teams and enterprises worldwide. They often include features like SSO, RBAC, audit logs, and high availability configurations. Unlike ${saasContent.name}, there are typically no per-user pricing limits.`,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about switching from {saasContent.name}
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
