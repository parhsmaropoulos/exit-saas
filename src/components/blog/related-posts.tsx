import { getBlogPostBySlug } from "@/lib/blog";
import { RelatedPostsClient } from "./related-posts-client";

interface RelatedPostsProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export function RelatedPosts({ currentSlug, relatedSlugs }: RelatedPostsProps) {
  // Fetch the related posts on the server
  const relatedPosts = relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter(
      (post): post is NonNullable<typeof post> =>
        post !== null && post.slug !== currentSlug
    )
    .slice(0, 5); // Limit to 5 posts

  if (relatedPosts.length === 0) {
    return null;
  }

  // Pass the data to the client component
  return (
    <RelatedPostsClient currentSlug={currentSlug} relatedPosts={relatedPosts} />
  );
}
