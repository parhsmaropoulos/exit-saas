"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface RelatedPostsClientProps {
  currentSlug: string;
  relatedPosts: BlogPost[];
}

export function RelatedPostsClient({
  currentSlug,
  relatedPosts,
}: RelatedPostsClientProps) {
  const handlePostClick = (post: BlogPost) => {
    // Track related post click for analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "related_post_click", {
        from_post: currentSlug,
        to_post: post.slug,
        category: post.category,
      });
    }
  };

  return (
    <section className="mt-12 mb-8 border-t border-border pt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
            onClick={() => handlePostClick(post)}
          >
            <Card className="h-full p-6 hover:border-primary transition-colors duration-200">
              <div className="mb-3">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {post.description}
              </p>
              <div className="mt-4 text-sm text-primary font-medium group-hover:underline">
                Read more →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
