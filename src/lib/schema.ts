/**
 * Schema.org JSON-LD generation utilities for SEO
 * Provides helper functions to generate structured data markup
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPostData {
  title: string;
  description: string;
  date: string;
}

/**
 * Generate BreadcrumbList schema
 * Used for navigation hierarchy on blog and tool pages
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQPage schema
 * Standalone FAQ page schema (rarely used - prefer embedded FAQs in BlogPosting)
 */
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BlogPosting schema with optional embedded FAQs
 * Use this for blog posts - embeds FAQ schema within article if FAQs provided
 */
export function generateBlogPostingSchema(
  post: BlogPostData,
  faqs?: FAQ[]
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Exit-Saas",
    },
    publisher: {
      "@type": "Organization",
      name: "Exit-Saas",
      logo: {
        "@type": "ImageObject",
        url: "https://exit-saas.io/logo.png",
      },
    },
  };

  // Add FAQs as mainEntity if provided
  // This embeds FAQ schema within the BlogPosting for better semantic markup
  if (faqs && faqs.length > 0) {
    schema.mainEntity = faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }));
  }

  return schema;
}

/**
 * Generate tool breadcrumbs for alternatives pages
 * Home → Alternatives → [Tool Name]
 */
export function generateToolBreadcrumbs(toolName: string, toolSlug: string): BreadcrumbItem[] {
  return [
    {
      name: "Home",
      url: "https://exit-saas.io",
    },
    {
      name: "Alternatives",
      url: "https://exit-saas.io/#tools",
    },
    {
      name: toolName,
      url: `https://exit-saas.io/alternatives/${toolSlug}`,
    },
  ];
}

/**
 * Generate blog post breadcrumbs
 * Home → Blog → [Category] → [Post Title]
 */
export function generateBlogBreadcrumbs(
  category: string,
  title: string,
  slug: string
): BreadcrumbItem[] {
  return [
    {
      name: "Home",
      url: "https://exit-saas.io",
    },
    {
      name: "Blog",
      url: "https://exit-saas.io/blog",
    },
    {
      name: category,
      url: `https://exit-saas.io/blog?category=${encodeURIComponent(category)}`,
    },
    {
      name: title,
      url: `https://exit-saas.io/blog/${slug}`,
    },
  ];
}
