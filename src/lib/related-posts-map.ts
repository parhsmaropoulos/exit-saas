/**
 * Related Posts Mapping
 * Defines 3-5 related posts for each blog article based on content clusters
 * See docs/internal-linking-map.md for detailed cluster analysis
 */

export const relatedPostsMap: Record<string, string[]> = {
  // Cluster 1: Getting Started with Self-Hosting
  "docker-101-self-hosting-beginners-guide": [
    "deploy-own-analytics-suite-under-10-minutes",
    "self-hosting-gitlab-complete-cicd-setup",
    "nextcloud-google-workspace-replacement-guide",
    "startup-tech-stack-under-100-monthly",
    "should-you-self-host-tco-calculator",
  ],

  "should-you-self-host-tco-calculator": [
    "hidden-costs-saas-subscriptions-killing-profit-margins",
    "why-self-hosting-best-financial-move-startups-2026",
    "when-not-to-self-host-honest-assessment",
    "managed-vs-self-hosted-which-right-for-business",
    "startup-tech-stack-under-100-monthly",
  ],

  "when-not-to-self-host-honest-assessment": [
    "should-you-self-host-tco-calculator",
    "managed-vs-self-hosted-which-right-for-business",
    "security-audit-saas-vs-self-hosted",
    "docker-101-self-hosting-beginners-guide",
    "startup-tech-stack-under-100-monthly",
  ],

  "managed-vs-self-hosted-which-right-for-business": [
    "should-you-self-host-tco-calculator",
    "when-not-to-self-host-honest-assessment",
    "security-audit-saas-vs-self-hosted",
    "hidden-costs-saas-subscriptions-killing-profit-margins",
    "great-saas-exodus-companies-self-hosting",
  ],

  // Cluster 2: Financial & Business Case
  "hidden-costs-saas-subscriptions-killing-profit-margins": [
    "should-you-self-host-tco-calculator",
    "why-self-hosting-best-financial-move-startups-2026",
    "startup-tech-stack-under-100-monthly",
    "great-saas-exodus-companies-self-hosting",
    "managed-vs-self-hosted-which-right-for-business",
  ],

  "why-self-hosting-best-financial-move-startups-2026": [
    "should-you-self-host-tco-calculator",
    "hidden-costs-saas-subscriptions-killing-profit-margins",
    "startup-tech-stack-under-100-monthly",
    "great-saas-exodus-companies-self-hosting",
    "docker-101-self-hosting-beginners-guide",
  ],

  "startup-tech-stack-under-100-monthly": [
    "should-you-self-host-tco-calculator",
    "why-self-hosting-best-financial-move-startups-2026",
    "docker-101-self-hosting-beginners-guide",
    "deploy-own-analytics-suite-under-10-minutes",
    "true-cost-of-free-open-source-sustainability",
  ],

  // Cluster 3: Security & Compliance
  "security-audit-saas-vs-self-hosted": [
    "gdpr-compliance-self-hosted-tools",
    "when-not-to-self-host-honest-assessment",
    "managed-vs-self-hosted-which-right-for-business",
    "top-5-open-source-slack-alternatives-high-security-teams",
    "should-you-self-host-tco-calculator",
  ],

  "gdpr-compliance-self-hosted-tools": [
    "security-audit-saas-vs-self-hosted",
    "plausible-vs-google-analytics-privacy-first",
    "nextcloud-google-workspace-replacement-guide",
    "top-5-open-source-slack-alternatives-high-security-teams",
    "great-saas-exodus-companies-self-hosting",
  ],

  "top-5-open-source-slack-alternatives-high-security-teams": [
    "migrate-slack-to-mattermost-one-weekend",
    "security-audit-saas-vs-self-hosted",
    "gdpr-compliance-self-hosted-tools",
    "docker-101-self-hosting-beginners-guide",
    "startup-tech-stack-under-100-monthly",
  ],

  // Cluster 4: Tool Comparisons & Migrations
  "n8n-vs-zapier-workflow-automation-comparison": [
    "startup-tech-stack-under-100-monthly",
    "should-you-self-host-tco-calculator",
    "docker-101-self-hosting-beginners-guide",
    "hidden-costs-saas-subscriptions-killing-profit-margins",
    "deploy-own-analytics-suite-under-10-minutes",
  ],

  "plausible-vs-google-analytics-privacy-first": [
    "deploy-own-analytics-suite-under-10-minutes",
    "gdpr-compliance-self-hosted-tools",
    "should-you-self-host-tco-calculator",
    "docker-101-self-hosting-beginners-guide",
    "startup-tech-stack-under-100-monthly",
  ],

  "crm-comparison-hubspot-vs-self-hosted": [
    "should-you-self-host-tco-calculator",
    "hidden-costs-saas-subscriptions-killing-profit-margins",
    "startup-tech-stack-under-100-monthly",
    "docker-101-self-hosting-beginners-guide",
    "managed-vs-self-hosted-which-right-for-business",
  ],

  "migrate-slack-to-mattermost-one-weekend": [
    "top-5-open-source-slack-alternatives-high-security-teams",
    "docker-101-self-hosting-beginners-guide",
    "should-you-self-host-tco-calculator",
    "startup-tech-stack-under-100-monthly",
    "great-saas-exodus-companies-self-hosting",
  ],

  // Cluster 5: Technical Deployment Guides
  "deploy-own-analytics-suite-under-10-minutes": [
    "plausible-vs-google-analytics-privacy-first",
    "docker-101-self-hosting-beginners-guide",
    "startup-tech-stack-under-100-monthly",
    "gdpr-compliance-self-hosted-tools",
    "should-you-self-host-tco-calculator",
  ],

  "self-hosting-gitlab-complete-cicd-setup": [
    "docker-101-self-hosting-beginners-guide",
    "startup-tech-stack-under-100-monthly",
    "should-you-self-host-tco-calculator",
    "security-audit-saas-vs-self-hosted",
    "true-cost-of-free-open-source-sustainability",
  ],

  "nextcloud-google-workspace-replacement-guide": [
    "docker-101-self-hosting-beginners-guide",
    "gdpr-compliance-self-hosted-tools",
    "should-you-self-host-tco-calculator",
    "startup-tech-stack-under-100-monthly",
    "security-audit-saas-vs-self-hosted",
  ],

  // Cluster 6: Industry Trends & Philosophy
  "great-saas-exodus-companies-self-hosting": [
    "why-self-hosting-best-financial-move-startups-2026",
    "hidden-costs-saas-subscriptions-killing-profit-margins",
    "gdpr-compliance-self-hosted-tools",
    "security-audit-saas-vs-self-hosted",
    "managed-vs-self-hosted-which-right-for-business",
  ],

  "true-cost-of-free-open-source-sustainability": [
    "should-you-self-host-tco-calculator",
    "startup-tech-stack-under-100-monthly",
    "great-saas-exodus-companies-self-hosting",
    "when-not-to-self-host-honest-assessment",
    "hidden-costs-saas-subscriptions-killing-profit-margins",
  ],

  "best-self-hosted-ai-tools-chatgpt-alternatives": [
    "docker-101-self-hosting-beginners-guide",
    "startup-tech-stack-under-100-monthly",
    "should-you-self-host-tco-calculator",
    "gdpr-compliance-self-hosted-tools",
    "great-saas-exodus-companies-self-hosting",
  ],
};

/**
 * Get related posts for a given blog post slug
 * @param slug - The current post's slug
 * @returns Array of related post slugs (3-5 posts)
 */
export function getRelatedPosts(slug: string): string[] {
  return relatedPostsMap[slug] || [];
}
