import { SaasContent } from "@/lib/saas-content";
import { XCircle, CheckCircle } from "lucide-react";

interface WhySwitchSectionProps {
  saasName: string;
  saasContent: SaasContent;
}

export function WhySwitchSection({ saasName, saasContent }: WhySwitchSectionProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Switch from {saasContent.name}?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While {saasContent.name} is popular, open-source alternatives offer significant advantages
              in cost, privacy, and control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Limitations */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <XCircle className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-semibold text-foreground">
                  {saasContent.name} Limitations
                </h3>
              </div>
              <ul className="space-y-3">
                {saasContent.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-card border border-primary/20 rounded-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold text-foreground">
                  Open-Source Benefits
                </h3>
              </div>
              <ul className="space-y-3">
                {saasContent.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Popular with section */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{saasContent.name}</span> is popular with:{" "}
              {saasContent.popularWith.join(", ")}
              {saasContent.estimatedUsers && (
                <span className="block mt-2 text-sm">
                  {saasContent.estimatedUsers}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
