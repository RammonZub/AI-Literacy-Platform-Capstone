/**
 * SEO keyword constants for the AI Literacy Platform marketing site
 */

// Primary keywords for the platform
export const PRIMARY_KEYWORDS = [
  "best AI learning app",
  "best app to learn AI",
  "AI courses for beginners",
  "AI literacy platform",
  "learn AI online",
] as const;

// Tool-specific keywords
export const TOOL_KEYWORDS = {
  chatgpt: ["ChatGPT course", "ChatGPT tutorial", "learn ChatGPT", "ChatGPT for beginners"],
  claude: ["Claude AI tutorial", "Claude AI course", "learn Claude AI"],
  gemini: ["Gemini AI training", "Google Gemini course", "learn Gemini"],
  midjourney: ["Midjourney course", "AI image generation course", "learn Midjourney"],
} as const;

// Skill-specific keywords
export const SKILL_KEYWORDS = {
  prompting: ["prompt engineering course", "AI prompting tutorial", "prompt writing"],
  productivity: ["AI productivity training", "AI for productivity", "work smarter with AI"],
  writing: ["AI email writing", "AI content creation", "AI writing assistant"],
  automation: ["AI automation", "workflow automation AI"],
  research: ["AI research assistant", "AI for research"],
} as const;

// All keywords combined
export const ALL_KEYWORDS = [
  ...PRIMARY_KEYWORDS,
  ...Object.values(TOOL_KEYWORDS).flat(),
  ...Object.values(SKILL_KEYWORDS).flat(),
] as const;

/**
 * Get keywords for a specific tool
 */
export function getToolKeywords(tool: keyof typeof TOOL_KEYWORDS): readonly string[] {
  return TOOL_KEYWORDS[tool] || [];
}

/**
 * Get keywords for a specific skill
 */
export function getSkillKeywords(skill: keyof typeof SKILL_KEYWORDS): readonly string[] {
  return SKILL_KEYWORDS[skill] || [];
}

/**
 * Get combined keywords for a tool + skill combination
 */
export function getCombinedKeywords(
  tool?: keyof typeof TOOL_KEYWORDS,
  skill?: keyof typeof SKILL_KEYWORDS,
): string[] {
  const keywords: string[] = [...PRIMARY_KEYWORDS];

  if (tool) {
    keywords.push(...getToolKeywords(tool));
  }

  if (skill) {
    keywords.push(...getSkillKeywords(skill));
  }

  return keywords;
}
