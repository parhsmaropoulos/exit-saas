import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SubmitToolForm } from "@/components/submit/submit-tool-form";
import { Lightbulb, CheckCircle, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Submit a Tool | SaaS-Exit.io",
  description:
    "Submit an open-source, self-hosted tool to be featured on SaaS-Exit.io. Help others discover alternatives to expensive SaaS products.",
};

export default function SubmitToolPage() {
  const requirements = [
    "Must be open-source (GitHub repository required)",
    "Must be self-hostable",
    "Should have at least 100 GitHub stars",
    "Should be actively maintained",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Submit a Tool
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Know an open-source alternative that should be on our list? Submit
              it below and help others discover great self-hosted solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar - Requirements */}
            <div className="md:col-span-1 space-y-6">
              {/* Requirements Card */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Card */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Review Process
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center justify-center shrink-0">
                      1
                    </span>
                    <span>Submit your tool using the form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center justify-center shrink-0">
                      2
                    </span>
                    <span>Our team reviews the submission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center justify-center shrink-0">
                      3
                    </span>
                    <span>If approved, tool is added to the directory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center justify-center shrink-0">
                      4
                    </span>
                    <span>You receive an email confirmation</span>
                  </li>
                </ol>
              </div>

              {/* Contact */}
              <div className="bg-secondary/30 border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Questions?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Contact us at{" "}
                  <a
                    href="mailto:support@exit-saas.io"
                    className="text-primary hover:underline"
                  >
                    support@exit-saas.io
                  </a>
                </p>
              </div>
            </div>

            {/* Main Form */}
            <div className="md:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <SubmitToolForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
