/**
 * AI Tool URL Helpers
 *
 * PURPOSE: Provides URL generators for quick action buttons that open AI tools.
 *
 * IMPLEMENTATION STRATEGY:
 * - Most AI tools don't reliably support URL pre-fill
 * - Primary action: Copy to clipboard
 * - Secondary action: Open tool in new tab (user pastes manually)
 * - Copy happens first for convenience
 *
 * Quick-action helpers for opening tools alongside copied prompts.
 */

import type { AITool } from "@/types/ai-tool";

/**
 * AI Tool display configuration
 */
export interface AIToolConfig {
  id: AITool;
  name: string;
  url: string;
  icon: string; // Emoji or icon identifier
  color: string; // Brand color for styling
}

/**
 * AI tool configurations
 */
export const aiToolConfigs: Record<AITool, AIToolConfig> = {
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chat.openai.com/",
    icon: "💬",
    color: "#10A37F", // OpenAI green
  },
  claude: {
    id: "claude",
    name: "Claude",
    url: "https://claude.ai/new",
    icon: "🤖",
    color: "#D97706", // Anthropic orange
  },
  gemini: {
    id: "gemini",
    name: "Gemini",
    url: "https://gemini.google.com/app",
    icon: "✨",
    color: "#4285F4", // Google blue
  },
  midjourney: {
    id: "midjourney",
    name: "Midjourney",
    url: "https://www.midjourney.com/",
    icon: "🎨",
    color: "#7C3AED",
  },
  any: {
    id: "any",
    name: "Any AI Tool",
    url: "#",
    icon: "🎯",
    color: "#6B7280", // Gray
  },
};

/**
 * Get URL for a specific AI tool
 */
export const getAIToolUrl = (tool: AITool): string => {
  return aiToolConfigs[tool]?.url || "#";
};

/**
 * Get config for a specific AI tool
 */
export const getAIToolConfig = (tool: AITool): AIToolConfig => {
  return aiToolConfigs[tool] || aiToolConfigs.any;
};

/**
 * Get all AI tool configs (for rendering buttons)
 */
export const getAllAIToolConfigs = (): AIToolConfig[] => {
  return [
    aiToolConfigs.chatgpt,
    aiToolConfigs.claude,
    aiToolConfigs.gemini,
    aiToolConfigs.midjourney,
  ];
};

/**
 * Open AI tool with prompt (copy first, then open)
 *
 * @param tool - The AI tool to open
 * @param promptText - The prompt to copy to clipboard
 * @returns Promise resolving to success status
 */
export const openInAITool = async (
  tool: AITool,
  promptText: string,
): Promise<{ success: boolean; method: "url" | "clipboard" }> => {
  try {
    // Copy prompt to clipboard first
    await navigator.clipboard.writeText(promptText);

    // Open tool in new tab
    const url = getAIToolUrl(tool);
    if (url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }

    return { success: true, method: "clipboard" };
  } catch (error) {
    console.error("Failed to open AI tool:", error);
    return { success: false, method: "clipboard" };
  }
};
