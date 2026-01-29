/**
 * Content and metadata for popular SaaS tools
 * Used in /alternative-to/[saas] pages
 */

export interface SaasContent {
  name: string;
  description: string;
  pricing: string;
  limitations: string[];
  benefits: string[]; // Benefits of switching from this SaaS
  popularWith: string[];
  estimatedUsers?: string;
}

export const saasContent: Record<string, SaasContent> = {
  slack: {
    name: "Slack",
    description: "Popular team communication and collaboration platform used by millions of businesses worldwide.",
    pricing: "$7.25-12.50/user/month (paid plans)",
    limitations: [
      "Limited message history on free plan (90 days)",
      "10 integrations limit on free tier",
      "Expensive for large teams ($12.50/user/month for Business+)",
      "Data stored on Slack's servers",
      "No self-hosting option",
    ],
    benefits: [
      "100% data ownership and privacy",
      "Unlimited message history",
      "No per-user pricing limits",
      "Save $200-500/month for teams of 20+",
      "Full control over data location and security",
    ],
    popularWith: ["Startups", "Remote teams", "Tech companies", "Enterprises"],
    estimatedUsers: "20M+ daily active users",
  },
  notion: {
    name: "Notion",
    description: "All-in-one workspace for notes, docs, wikis, and project management.",
    pricing: "$8-15/user/month (paid plans)",
    limitations: [
      "Requires internet connection for most features",
      "Performance issues with large workspaces",
      "Limited offline capabilities",
      "Data locked in proprietary format",
      "Privacy concerns with data storage",
    ],
    benefits: [
      "Full offline access to your data",
      "Better performance with local storage",
      "Complete data portability",
      "No vendor lock-in",
      "Save $96-180/user/year",
    ],
    popularWith: ["Knowledge workers", "Students", "Small teams", "Content creators"],
    estimatedUsers: "30M+ users",
  },
  "google-analytics": {
    name: "Google Analytics",
    description: "Web analytics service that tracks and reports website traffic.",
    pricing: "Free (GA4), $150k+/year (GA360)",
    limitations: [
      "Privacy concerns (data shared with Google)",
      "Cookie consent requirements (GDPR)",
      "Data sampling on free tier",
      "Complex interface and setup",
      "Potential ad-blocker issues",
    ],
    benefits: [
      "100% GDPR compliant by default",
      "No cookie consent required",
      "Complete data ownership",
      "Lightweight scripts (better performance)",
      "No data sampling or limits",
    ],
    popularWith: ["Websites", "SaaS products", "E-commerce", "Publishers"],
    estimatedUsers: "50M+ websites",
  },
  hubspot: {
    name: "HubSpot",
    description: "All-in-one CRM, marketing, sales, and customer service platform.",
    pricing: "$45-3,600/month (depending on features)",
    limitations: [
      "Expensive for small businesses",
      "Feature creep and complexity",
      "Vendor lock-in with proprietary data",
      "Limited customization options",
      "Costs scale rapidly with contacts",
    ],
    benefits: [
      "Save $500-3,000/month on subscription fees",
      "Complete customization freedom",
      "No contact limits or artificial tiers",
      "Own your customer data forever",
      "Integrate with any tool",
    ],
    popularWith: ["Marketing teams", "Sales teams", "Small businesses", "Agencies"],
    estimatedUsers: "184,000+ customers",
  },
  asana: {
    name: "Asana",
    description: "Project management and team collaboration tool.",
    pricing: "$10.99-24.99/user/month",
    limitations: [
      "Free plan limited to 15 users",
      "Expensive for larger teams",
      "Limited customization",
      "Data stored on Asana servers",
      "Complex pricing tiers",
    ],
    benefits: [
      "Unlimited users at no extra cost",
      "Save $220-500/month for teams of 20+",
      "Full control over workflows",
      "Host on your infrastructure",
      "Customize to fit your process",
    ],
    popularWith: ["Product teams", "Marketing teams", "Agencies", "Remote teams"],
    estimatedUsers: "139,000+ paying customers",
  },
  trello: {
    name: "Trello",
    description: "Visual project management tool using boards, lists, and cards.",
    pricing: "$5-17.50/user/month",
    limitations: [
      "Limited automation on free plan",
      "10 board limit per workspace (free)",
      "Limited power-ups on lower tiers",
      "Basic reporting capabilities",
      "No advanced security features on free tier",
    ],
    benefits: [
      "Unlimited boards and workspaces",
      "No artificial feature limitations",
      "Save $60-210/user/year",
      "Better performance and control",
      "Enhanced security options",
    ],
    popularWith: ["Small teams", "Freelancers", "Personal projects", "Agile teams"],
    estimatedUsers: "50M+ users",
  },
  mailchimp: {
    name: "Mailchimp",
    description: "Email marketing and automation platform.",
    pricing: "$13-350+/month (scales with contacts)",
    limitations: [
      "Expensive as list grows",
      "Limited features on free tier (500 contacts)",
      "Deliverability issues reported",
      "Complex pricing structure",
      "Limited automation on lower tiers",
    ],
    benefits: [
      "No per-contact pricing",
      "Save $156-4,200/year",
      "Better email deliverability control",
      "Own your subscriber data",
      "Unlimited sending (server capacity)",
    ],
    popularWith: ["E-commerce", "Publishers", "Agencies", "Small businesses"],
    estimatedUsers: "13M+ users",
  },
  zoom: {
    name: "Zoom",
    description: "Video conferencing and online meeting platform.",
    pricing: "$149.90-240/year per license",
    limitations: [
      "40-minute limit on free meetings (3+ people)",
      "Privacy and security concerns",
      "Data stored on Zoom servers",
      "Expensive for regular use",
      "Feature restrictions on lower tiers",
    ],
    benefits: [
      "No time limits on meetings",
      "Complete privacy and security control",
      "Save $150-240/user/year",
      "Host on your infrastructure",
      "Full recording ownership",
    ],
    popularWith: ["Remote teams", "Education", "Webinars", "Enterprise"],
    estimatedUsers: "300M+ daily participants (peak)",
  },
  figma: {
    name: "Figma",
    description: "Collaborative interface design and prototyping tool.",
    pricing: "$12-45/editor/month",
    limitations: [
      "Requires constant internet connection",
      "Expensive for teams ($45/editor/month for Org plan)",
      "Limited offline capabilities",
      "Files stored on Figma's servers",
      "Performance issues with large files",
    ],
    benefits: [
      "Full offline design capabilities",
      "Save $144-540/editor/year",
      "Better performance with local files",
      "Complete data ownership",
      "No file size limitations",
    ],
    popularWith: ["Designers", "Product teams", "Agencies", "UX teams"],
    estimatedUsers: "4M+ users",
  },
  shopify: {
    name: "Shopify",
    description: "E-commerce platform for online stores and retail point-of-sale systems.",
    pricing: "$29-299/month + transaction fees",
    limitations: [
      "Monthly fees + transaction fees (0.5-2%)",
      "Limited customization without apps",
      "App costs add up quickly",
      "Vendor lock-in with theme/data",
      "Extra fees for advanced features",
    ],
    benefits: [
      "No monthly fees or transaction fees",
      "Save $350-3,600/year on subscriptions",
      "Complete customization freedom",
      "Own your store data and customer info",
      "No revenue-based pricing",
    ],
    popularWith: ["E-commerce stores", "Direct-to-consumer brands", "Retail", "Dropshipping"],
    estimatedUsers: "4.4M+ websites",
  },
  github: {
    name: "GitHub",
    description: "Web-based Git repository hosting and collaboration platform.",
    pricing: "$4-21/user/month (paid plans)",
    limitations: [
      "Public code visible to all",
      "Limited private repos on free tier",
      "Expensive for large teams",
      "Microsoft-owned (privacy concerns)",
      "Rate limits on API",
    ],
    benefits: [
      "Complete code privacy",
      "Unlimited private repositories",
      "Save $48-252/user/year",
      "Full control over CI/CD",
      "No rate limits",
    ],
    popularWith: ["Developers", "Open source projects", "Enterprises", "Teams"],
    estimatedUsers: "100M+ developers",
  },
  "google-workspace": {
    name: "Google Workspace",
    description: "Suite of productivity tools including Gmail, Drive, Docs, Sheets, and more.",
    pricing: "$6-18/user/month",
    limitations: [
      "Privacy concerns with Google",
      "Data stored on Google servers",
      "Limited storage on lower tiers",
      "Expensive for large organizations",
      "Feature changes beyond your control",
    ],
    benefits: [
      "Complete data privacy and ownership",
      "Save $72-216/user/year",
      "Unlimited storage (hardware dependent)",
      "No vendor lock-in",
      "Full customization control",
    ],
    popularWith: ["Businesses", "Schools", "Nonprofits", "Teams"],
    estimatedUsers: "9M+ paying businesses",
  },
  intercom: {
    name: "Intercom",
    description: "Customer messaging platform for support, marketing, and engagement.",
    pricing: "$39-99/month base + $9-19/user",
    limitations: [
      "Expensive pricing structure",
      "Per-seat pricing adds up",
      "Limited features on lower tiers",
      "Data stored on Intercom servers",
      "Complex pricing calculator",
    ],
    benefits: [
      "Save $500-2,000/month",
      "Unlimited team members",
      "Complete data ownership",
      "No artificial feature limitations",
      "Integrate with your existing tools",
    ],
    popularWith: ["SaaS companies", "E-commerce", "Support teams", "Sales teams"],
    estimatedUsers: "25,000+ businesses",
  },
  airtable: {
    name: "Airtable",
    description: "Spreadsheet-database hybrid for organizing work and projects.",
    pricing: "$10-20/user/month",
    limitations: [
      "Limited records on free plan (1,000)",
      "Expensive for teams",
      "Performance issues with large bases",
      "Limited automation on lower tiers",
      "Data locked in proprietary format",
    ],
    benefits: [
      "Unlimited records and bases",
      "Save $120-240/user/year",
      "Better performance with local databases",
      "Standard database formats (PostgreSQL)",
      "Full API control",
    ],
    popularWith: ["Project managers", "Marketers", "Content teams", "Small businesses"],
    estimatedUsers: "300,000+ organizations",
  },
  calendly: {
    name: "Calendly",
    description: "Scheduling automation platform for meetings and appointments.",
    pricing: "$8-16/user/month",
    limitations: [
      "Limited event types on free plan (1)",
      "Calendly branding on lower tiers",
      "Per-user pricing for teams",
      "Limited customization",
      "Integration restrictions",
    ],
    benefits: [
      "Unlimited event types and users",
      "Save $96-192/user/year",
      "Complete branding control",
      "Own your scheduling data",
      "Self-hosted privacy",
    ],
    popularWith: ["Sales teams", "Consultants", "Recruiters", "Service businesses"],
    estimatedUsers: "20M+ users",
  },
};

/**
 * Get SaaS content by slug
 */
export function getSaasContent(slug: string): SaasContent | null {
  return saasContent[slug] || null;
}

/**
 * Get all available SaaS slugs
 */
export function getAllSaasSlugs(): string[] {
  return Object.keys(saasContent);
}
