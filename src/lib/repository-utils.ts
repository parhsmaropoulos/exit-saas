// Utility functions for parsing and formatting v2 repository data

export interface Contributor {
  name: string;
  commits: number;
}

export interface Language {
  name: string;
  bytes: number;
  percentage?: number;
}

/**
 * Parse contributor string "alice:150" -> { name: "alice", commits: 150 }
 */
export function parseContributor(
  contributorString: string,
): Contributor | null {
  const parts = contributorString.split(":");
  if (parts.length !== 2) return null;
  const commits = parseInt(parts[1], 10);
  if (isNaN(commits)) return null;
  return { name: parts[0], commits };
}

/**
 * Get top N contributors from array
 */
export function getTopContributors(
  contributors: string[] | string | undefined | null,
  limit: number = 3,
): Contributor[] {
  // Handle undefined, null, or empty cases
  if (!contributors) return [];

  // If contributors is a string, parse it (could be JSON or PostgreSQL array format)
  let contributorsArray: string[];
  if (typeof contributors === "string") {
    try {
      // Try JSON parse first
      contributorsArray = JSON.parse(contributors);
    } catch {
      // Handle PostgreSQL array format: {item1,item2} or ['item1','item2']
      const cleaned = contributors
        .replace(/^\{/, '[')
        .replace(/\}$/, ']')
        .replace(/'/g, '"');
      try {
        contributorsArray = JSON.parse(cleaned);
      } catch {
        // If still fails, treat as single contributor
        contributorsArray = [contributors];
      }
    }
  } else if (Array.isArray(contributors)) {
    contributorsArray = contributors;
  } else {
    return [];
  }

  return contributorsArray
    .map(parseContributor)
    .filter((c): c is Contributor => c !== null)
    .slice(0, limit);
}

/**
 * Parse language string "JavaScript:10000" -> { name: "JavaScript", bytes: 10000 }
 */
export function parseLanguage(languageString: string): Language | null {
  const parts = languageString.split(":");
  if (parts.length !== 2) return null;
  const bytes = parseInt(parts[1], 10);
  if (isNaN(bytes)) return null;
  return { name: parts[0], bytes };
}

/**
 * Get top N languages with percentages
 */
export function getTopLanguages(
  languages: string[] | string | undefined | null,
  limit: number = 3,
): Language[] {
  // Handle undefined, null, or empty cases
  if (!languages) return [];

  // If languages is a string, parse it (could be JSON or PostgreSQL array format)
  let languagesArray: string[];
  if (typeof languages === "string") {
    try {
      // Try JSON parse first
      languagesArray = JSON.parse(languages);
    } catch {
      // Handle PostgreSQL array format: {item1,item2} or ['item1','item2']
      const cleaned = languages
        .replace(/^\{/, '[')
        .replace(/\}$/, ']')
        .replace(/'/g, '"');
      try {
        languagesArray = JSON.parse(cleaned);
      } catch {
        // If still fails, treat as single language
        languagesArray = [languages];
      }
    }
  } else if (Array.isArray(languages)) {
    languagesArray = languages;
  } else {
    return [];
  }

  const parsed = languagesArray
    .map((lang) => parseLanguage(lang))
    .filter((l): l is Language => l !== null);

  const totalBytes = parsed.reduce((sum, lang) => sum + lang.bytes, 0);

  return parsed.slice(0, limit).map((lang) => ({
    ...lang,
    percentage:
      totalBytes > 0 ? Math.round((lang.bytes / totalBytes) * 100) : 0,
  }));
}

/**
 * Format fork count (similar to stars formatting)
 */
export function formatForkCount(count: number | undefined): string {
  if (!count && count !== 0) return "0";
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

/**
 * Get color classes for language badge (common language colors)
 */
export function getLanguageColor(languageName: string): string {
  const colors: Record<string, string> = {
    JavaScript: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
    TypeScript: "bg-blue-500/20 text-blue-500 border-blue-500/30",
    Python: "bg-green-500/20 text-green-500 border-green-500/30",
    Go: "bg-cyan-500/20 text-cyan-500 border-cyan-500/30",
    Rust: "bg-orange-500/20 text-orange-500 border-orange-500/30",
    Java: "bg-red-500/20 text-red-500 border-red-500/30",
    Ruby: "bg-red-600/20 text-red-600 border-red-600/30",
    PHP: "bg-purple-500/20 text-purple-500 border-purple-500/30",
    HTML: "bg-orange-600/20 text-orange-600 border-orange-600/30",
    CSS: "bg-blue-600/20 text-blue-600 border-blue-600/30",
    Shell: "bg-gray-500/20 text-gray-500 border-gray-500/30",
    C: "bg-gray-600/20 text-gray-600 border-gray-600/30",
    "C++": "bg-pink-500/20 text-pink-500 border-pink-500/30",
    Vue: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
    React: "bg-sky-500/20 text-sky-500 border-sky-500/30",
  };
  return (
    colors[languageName] || "bg-muted/20 text-muted-foreground border-muted/30"
  );
}
