/**
 * ToolReferenceSection
 *
 * PURPOSE: Display tool-specific information with logo, URL, and quick access
 *
 * CONTEXT: Interactive component that shows users WHERE to complete exercises.
 * Provides direct links to AI tools (ChatGPT, Claude, Gemini, Midjourney, Make, …) with
 * copy-to-clipboard functionality and clear action instructions.
 *
 * KEY RESPONSIBILITIES:
 * - Display tool logo/name with distinctive branding
 * - Show tool URL prominently with copy button
 * - Provide clear action instruction (what to do in the tool)
 * - Optional feature highlight and usage tip
 * - Copy-to-clipboard with visual feedback
 *
 * IMPLEMENTATION NOTES:
 * - Each tool has unique color scheme for visual distinction
 * - URL copy button changes to "Copied!" temporarily
 * - Card design with tool-specific accent colors
 * - Mobile-first responsive design
 *
 * DEPENDENCIES:
 * - React: useState for copy feedback
 * - lucide-react: Icons for external link and copy button
 *
 * @see LessonSection.tsx - Router that calls this component
 * @see QuickPromptSection.tsx - Similar copy functionality
 */

import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * Supported AI tool identifiers
 */
export type ToolName =
  | "chatgpt"
  | "claude"
  | "gemini"
  | "midjourney"
  | "notebooklm"
  | "general"
  | "make";

/**
 * Tool metadata configuration
 */
interface ToolConfig {
  name: string;
  url: string;
  displayUrl: string;
  colors: {
    bg: string;
    border: string;
    accent: string;
    text: string;
    badge: string;
  };
}

/**
 * Tool-specific branding and URLs
 */
const TOOL_CONFIGS: Record<ToolName, ToolConfig> = {
  chatgpt: {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    displayUrl: "chat.openai.com",
    colors: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      accent: "text-emerald-600",
      text: "text-emerald-900",
      badge: "bg-emerald-100 text-emerald-700",
    },
  },
  claude: {
    name: "Claude",
    url: "https://claude.ai",
    displayUrl: "claude.ai",
    colors: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      accent: "text-orange-600",
      text: "text-orange-900",
      badge: "bg-orange-100 text-orange-700",
    },
  },
  gemini: {
    name: "Gemini",
    url: "https://gemini.google.com",
    displayUrl: "gemini.google.com",
    colors: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      accent: "text-blue-600",
      text: "text-blue-900",
      badge: "bg-blue-100 text-blue-700",
    },
  },
  midjourney: {
    name: "Midjourney",
    url: "https://midjourney.com",
    displayUrl: "midjourney.com",
    colors: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      accent: "text-purple-600",
      text: "text-purple-900",
      badge: "bg-purple-100 text-purple-700",
    },
  },
  notebooklm: {
    name: "NotebookLM",
    url: "https://notebooklm.google.com",
    displayUrl: "notebooklm.google.com",
    colors: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      accent: "text-amber-600",
      text: "text-amber-900",
      badge: "bg-amber-100 text-amber-700",
    },
  },
  general: {
    name: "Any AI Tool",
    url: "#",
    displayUrl: "your preferred AI",
    colors: {
      bg: "bg-gray-50",
      border: "border-gray-200",
      accent: "text-gray-600",
      text: "text-gray-900",
      badge: "bg-gray-100 text-gray-700",
    },
  },
  make: {
    name: "Make (Integromat)",
    url: "https://make.com",
    displayUrl: "make.com",
    colors: {
      bg: "bg-violet-50",
      border: "border-violet-200",
      accent: "text-violet-600",
      text: "text-violet-900",
      badge: "bg-violet-100 text-violet-700",
    },
  },
};

export interface ToolReferenceSectionContent {
  /**
   * Which AI tool to use
   */
  tool: ToolName;

  /**
   * Action phrase: "For this exercise" or "You'll need"
   */
  action: string;

  /**
   * What to do in the tool
   */
  task: string;

  /**
   * Specific feature to use (optional)
   */
  feature?: string;

  /**
   * Quick tip for using the tool (optional)
   */
  tip?: string;
}

interface ToolReferenceSectionProps {
  content: ToolReferenceSectionContent;
  className?: string;
}

/**
 * ToolReferenceSection component
 *
 * @example
 * const content = {
 *   tool: 'claude',
 *   action: 'For this exercise',
 *   task: 'Open Claude and paste the prompt above',
 *   feature: 'New conversation',
 *   tip: 'Use Projects to keep related chats organized'
 * }
 * <ToolReferenceSection content={content} />
 */
export function ToolReferenceSection({ content, className = "" }: ToolReferenceSectionProps) {
  const { tool, action, task, feature, tip } = content;
  const [copied, setCopied] = useState(false);

  const toolConfig = TOOL_CONFIGS[tool];
  const { name, url, displayUrl, colors } = toolConfig;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleOpenUrl = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`w-full py-4 ${className}`}>
      <div className={`${colors.bg} ${colors.border} border-2 rounded-xl p-5 space-y-4`}>
        {/* Header: Tool name and URL */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            {/* Action phrase */}
            <p className="text-sm text-gray-600 font-medium">{action}</p>
            {/* Tool name */}
            <h3 className={`text-xl font-bold ${colors.text}`}>{name}</h3>
          </div>

          {/* URL with copy and open buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm
                transition-all duration-200 border
                ${
                  copied
                    ? "bg-green-100 border-green-300 text-green-700"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800"
                }
              `}
              aria-label={copied ? "Copied to clipboard" : "Copy URL"}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="hidden sm:inline">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="hidden sm:inline">{displayUrl}</span>
                </>
              )}
            </button>

            <button
              onClick={handleOpenUrl}
              className={`
                p-1.5 rounded-lg transition-all duration-200
                ${colors.accent} hover:bg-white/50
              `}
              aria-label={`Open ${name} in new tab`}
            >
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Task instruction */}
        <p className={`${colors.text} text-base leading-relaxed`}>{task}</p>

        {/* Feature badge (optional) */}
        {feature && (
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.badge}`}>
              {feature}
            </span>
          </div>
        )}

        {/* Tip (optional) */}
        {tip && (
          <div className="pt-2 border-t border-gray-200/50">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Tip:</span> {tip}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
