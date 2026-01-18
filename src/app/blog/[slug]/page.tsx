import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HostingCallToAction } from "@/components/monetization/hosting-call-to-action";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | SaaS-Exit.io",
    };
  }

  return {
    title: `${post.title} | SaaS-Exit.io`,
    description: post.description,
    keywords: [
      "open source",
      "self-hosted",
      "SaaS alternatives",
      post.category,
      "privacy",
      "cost savings",
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${slug}`,
      publishedTime: post.date,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

// Custom MDX components for styling
const mdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      className="text-4xl md:text-5xl font-bold text-foreground mb-6 mt-8"
      {...props}
    />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-8"
      {...props}
    />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3
      className="text-2xl md:text-3xl font-semibold text-foreground mb-3 mt-6"
      {...props}
    />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="text-lg text-muted-foreground mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground" {...props} />
  ),
  ol: ({ type, ...props }: React.HTMLProps<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground" {...props} />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li className="text-lg text-muted-foreground" {...props} />
  ),
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong className="font-bold text-foreground" {...props} />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a
      className="text-primary hover:underline font-medium"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code
      className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground"
      {...props}
    />
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <pre
      className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 border border-border"
      {...props}
    />
  ),
  table: (props: React.HTMLProps<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border border-border rounded-lg" {...props} />
    </div>
  ),
  thead: (props: React.HTMLProps<HTMLTableSectionElement>) => (
    <thead className="bg-muted" {...props} />
  ),
  th: (props: React.HTMLProps<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border" {...props} />
  ),
  td: (props: React.HTMLProps<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-sm text-muted-foreground border-b border-border" {...props} />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4"
      {...props}
    />
  ),
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Format date for display
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {post.description}
            </p>
            <time className="text-sm text-muted-foreground" dateTime={post.date}>
              {formattedDate}
            </time>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Hosting CTA */}
          <div className="mt-12 mb-8">
            <HostingCallToAction toolName="Your Open-Source Stack" />
          </div>
        </article>

        {/* Schema.org JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              author: {
                "@type": "Organization",
                name: "SaaS-Exit",
              },
              publisher: {
                "@type": "Organization",
                name: "SaaS-Exit",
                logo: {
                  "@type": "ImageObject",
                  url: "https://exit-saas.io/logo.png",
                },
              },
            }),
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
