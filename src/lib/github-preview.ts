/**
 * Fetch GitHub repository Open Graph image URL
 * This function extracts the og:image meta tag from GitHub's HTML
 */
export async function getGitHubPreviewImage(
  githubUrl: string,
): Promise<string | null> {
  try {
    // Validate GitHub URL
    if (!githubUrl.includes("github.com")) return null;

    // Fetch the HTML page
    const response = await fetch(githubUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Exit-Saas/1.0)",
      },
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) return null;

    const html = await response.text();

    // Extract og:image using regex
    const ogImageMatch = html.match(
      /<meta property="og:image" content="([^"]+)"/,
    );

    if (ogImageMatch && ogImageMatch[1]) {
      return ogImageMatch[1];
    }

    // If no og:image found, return null (fallback will be used)
    return null;
  } catch (error) {
    console.error("Error fetching GitHub preview:", error);
    return null;
  }
}

/**
 * Generate a fallback preview URL (GitHub's default card)
 */
export function getFallbackPreviewUrl(githubUrl: string): string {
  // Extract owner and repo from URL
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return "";

  const [, owner, repo] = match;
  // Remove .git if present
  const cleanRepo = repo.replace(/\.git$/, "");

  // Use GitHub's card image endpoint (this may redirect)
  return `https://opengraph.githubassets.com/1/${owner}/${cleanRepo}`;
}
