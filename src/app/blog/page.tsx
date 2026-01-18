import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Exit-Saas.io - Open Source & Self-Hosting Guides",
  description:
    "Expert guides on self-hosting, open-source alternatives, and escaping vendor lock-in. Learn how to save money and take control of your infrastructure.",
  keywords: [
    "self-hosting guides",
    "open source tutorials",
    "SaaS alternatives",
    "cost savings",
    "data sovereignty",
  ],
  openGraph: {
    title: "Exit-Saas Blog - Self-Hosting & Open Source Guides",
    description:
      "Expert guides on self-hosting, open-source alternatives, and escaping vendor lock-in.",
    type: "website",
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Exit-Saas Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Expert guides on self-hosting, open-source alternatives, and
            breaking free from subscription lock-in. Learn how to save thousands
            while maintaining full control of your data.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const formattedDate = new Date(post.date).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-200 hover:shadow-lg"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Date */}
                  <time
                    className="text-xs text-muted-foreground"
                    dateTime={post.date}
                  >
                    {formattedDate}
                  </time>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No blog posts available yet. Check back soon!
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
