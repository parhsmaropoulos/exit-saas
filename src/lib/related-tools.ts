import { createServerSupabaseClient } from './supabase';
import { Tool } from '@/types/database';

/**
 * Get related tools based on category, SaaS equivalent, and difficulty
 * Used to show similar alternatives on tool detail pages
 */
export async function getRelatedTools(currentTool: Tool, limit: number = 6): Promise<Tool[]> {
  const supabase = createServerSupabaseClient();

  try {
    // Build a query that finds tools with:
    // 1. Same category (highest priority)
    // 2. Same SaaS equivalent (very relevant)
    // 3. Similar difficulty level (±2 levels)
    // Exclude the current tool
    const { data, error } = await supabase
      .from('tools')
      .select('*')
      .neq('id', currentTool.id)
      .or(`category.eq.${currentTool.category},saas_equivalent.eq.${currentTool.saas_equivalent}`)
      .order('stars', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching related tools:', error);
      return [];
    }

    // If we don't have enough results, get tools with similar difficulty
    if (!data || data.length < limit) {
      const minDifficulty = Math.max(1, currentTool.self_host_difficulty - 2);
      const maxDifficulty = Math.min(10, currentTool.self_host_difficulty + 2);

      const { data: difficultyData } = await supabase
        .from('tools')
        .select('*')
        .neq('id', currentTool.id)
        .gte('self_host_difficulty', minDifficulty)
        .lte('self_host_difficulty', maxDifficulty)
        .order('stars', { ascending: false })
        .limit(limit - (data?.length || 0));

      // Merge results, removing duplicates
      const typedData = (data || []) as Tool[];
      const typedDifficultyData = (difficultyData || []) as Tool[];
      const existingIds = new Set(typedData.map(t => t.id));
      const additionalTools = typedDifficultyData.filter(t => !existingIds.has(t.id));

      return [...typedData, ...additionalTools].slice(0, limit);
    }

    return data || [];
  } catch (error) {
    console.error('Error in getRelatedTools:', error);
    return [];
  }
}

/**
 * Get tools in the same category
 * Useful for category-specific recommendations
 */
export async function getToolsByCategory(category: string, limit: number = 10): Promise<Tool[]> {
  const supabase = createServerSupabaseClient();

  try {
    const { data, error } = await supabase
      .from('tools')
      .select('*')
      .ilike('category', `%${category}%`)
      .order('stars', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching tools by category:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getToolsByCategory:', error);
    return [];
  }
}

/**
 * Get tools that are alternatives to the same SaaS product
 * Useful for comparison pages
 */
export async function getAlternativesToSaaS(saasEquivalent: string, limit: number = 10): Promise<Tool[]> {
  const supabase = createServerSupabaseClient();

  try {
    const { data, error } = await supabase
      .from('tools')
      .select('*')
      .ilike('saas_equivalent', `%${saasEquivalent}%`)
      .order('stars', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching alternatives to SaaS:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAlternativesToSaaS:', error);
    return [];
  }
}
