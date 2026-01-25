/**
 * Get GitHub preview URL from database or fallback
 * No API calls - uses preview_url from database
 */
export function getGitHubPreviewUrl(
  previewUrl: string | null | undefined,
  githubUrl: string,
): string {
  // Use preview_url from database if available
  if (previewUrl) {
    return previewUrl;
  }

  // Otherwise use fallback
  return getFallbackPreviewUrl(githubUrl);
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
