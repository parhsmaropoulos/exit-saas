// Google Analytics 4 helper functions
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Check if GA is loaded and ready
export const isGAReady = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag !== 'undefined';
};

// Track page views
export const pageview = (url: string) => {
  if (!isGAReady() || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!isGAReady()) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined event tracking functions for common actions

export const trackToolView = (toolName: string, category: string) => {
  event({
    action: 'view_tool',
    category: 'Tool Engagement',
    label: `${toolName} (${category})`,
  });
};

export const trackGitHubClick = (toolName: string) => {
  event({
    action: 'click_github',
    category: 'Tool Engagement',
    label: toolName,
  });
};

export const trackDeploymentGuideClick = (toolName: string) => {
  event({
    action: 'click_deployment_guide',
    category: 'Tool Engagement',
    label: toolName,
  });
};

export const trackAffiliateClick = (provider: string, toolName: string, location: string) => {
  event({
    action: 'click_affiliate',
    category: 'Affiliate',
    label: `${provider} - ${toolName} (${location})`,
  });
};

export const trackCalculatorUse = (toolName: string, monthlySavings: number) => {
  event({
    action: 'use_calculator',
    category: 'Tool Engagement',
    label: toolName,
    value: Math.round(monthlySavings),
  });
};

export const trackBlogRead = (postTitle: string, scrollDepth: number) => {
  event({
    action: 'blog_read',
    category: 'Content Engagement',
    label: postTitle,
    value: scrollDepth,
  });
};

export const trackSearch = (query: string) => {
  event({
    action: 'search',
    category: 'Site Navigation',
    label: query,
  });
};

export const trackCategoryFilter = (category: string) => {
  event({
    action: 'filter_category',
    category: 'Site Navigation',
    label: category,
  });
};

export const trackToolSubmission = (toolName: string) => {
  event({
    action: 'submit_tool',
    category: 'User Contribution',
    label: toolName,
  });
};

export const trackNewsletterSignup = (location: string) => {
  event({
    action: 'newsletter_signup',
    category: 'Conversion',
    label: location,
  });
};

export const trackSocialShare = (platform: string, url: string) => {
  event({
    action: 'social_share',
    category: 'Content Engagement',
    label: `${platform} - ${url}`,
  });
};
