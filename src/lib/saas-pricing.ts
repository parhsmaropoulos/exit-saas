// Average monthly per-user pricing for popular SaaS tools
// Used to pre-fill the calculator with realistic competitor pricing

export const saasPricing: Record<string, { price: number; features: string[] }> = {
  'Slack': {
    price: 7.25,
    features: ['Unlimited message history', 'Unlimited integrations', 'Group video calls', 'Screen sharing'],
  },
  'Jira': {
    price: 7.75,
    features: ['Advanced roadmaps', 'Unlimited storage', 'Audit logs', 'IP allowlisting'],
  },
  'Google Analytics': {
    price: 12.50, // GA360 equivalent per-user estimate
    features: ['Custom funnels', 'Unsampled reports', 'Data-driven attribution', 'BigQuery export'],
  },
  'Salesforce': {
    price: 25.00,
    features: ['Contact management', 'Opportunity tracking', 'Email integration', 'Mobile app'],
  },
  'Stripe Billing': {
    price: 0.50, // percentage-based, estimated per-user cost
    features: ['Recurring billing', 'Usage-based billing', 'Revenue recognition', 'Tax automation'],
  },
  'Intercom': {
    price: 39.00,
    features: ['Live chat', 'Help center', 'Chatbots', 'Product tours'],
  },
  'Mailchimp': {
    price: 13.00, // Standard plan divided by typical team size
    features: ['Email campaigns', 'Automation', 'A/B testing', 'Analytics'],
  },
  'GitHub': {
    price: 4.00, // Team plan
    features: ['Private repos', 'Code review', 'Actions CI/CD', 'Packages'],
  },
  'AWS S3': {
    price: 23.00, // Typical monthly storage cost estimate
    features: ['Object storage', 'CDN integration', 'Versioning', 'Lifecycle policies'],
  },
  'Bitwarden': {
    price: 5.00, // Teams plan
    features: ['Password vault', 'Secure sharing', '2FA', 'Directory sync'],
  },
  'Notion': {
    price: 8.00,
    features: ['Unlimited blocks', 'Collaborative workspace', 'API access', 'Admin tools'],
  },
  'Zendesk': {
    price: 19.00,
    features: ['Ticketing system', 'Help center', 'Chat', 'Analytics'],
  },
  'HubSpot': {
    price: 45.00,
    features: ['CRM', 'Marketing automation', 'Sales tools', 'Service hub'],
  },
  'Asana': {
    price: 10.99,
    features: ['Timeline view', 'Custom fields', 'Forms', 'Milestones'],
  },
  'Monday.com': {
    price: 10.00,
    features: ['Workload management', 'Time tracking', 'Automations', 'Integrations'],
  },
};

export function getSaasPrice(saasEquivalent: string): number {
  return saasPricing[saasEquivalent]?.price || 15.00;
}

export function getSaasFeatures(saasEquivalent: string): string[] {
  return saasPricing[saasEquivalent]?.features || ['Cloud hosting', 'Automatic updates', 'Support', 'Integrations'];
}
