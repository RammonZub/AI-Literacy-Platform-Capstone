/**
 * QuickPromptSection
 *
 * PURPOSE: Interactive prompt builder with copy-to-clipboard functionality
 *
 * CONTEXT: Interactive component that lets users copy a pre-written prompt template.
 * Provides practical value by giving users ready-to-use prompts.
 *
 * KEY RESPONSIBILITIES:
 * - Display prompt template in styled code block
 * - Highlight placeholders (if any) with visual distinction
 * - Provide copy-to-clipboard button with feedback
 * - Show description of prompt usage
 *
 * IMPLEMENTATION NOTES:
 * - Code block styling similar to Notion/GitHub
 * - Copy button changes to "Copied!" temporarily
 * - Placeholders shown in gray/brackets for clarity
 * - Uses Clipboard API for copying
 *
 * DEPENDENCIES:
 * - React: useState for copy feedback
 *
 * @see ArticleLesson.tsx - Parent component
 * @see data/design/tokens.ts - Color definitions
 */

import DOMPurify from "dompurify";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export interface QuickPromptSectionContent {
  /**
   * Section heading
   */
  heading: string;

  /**
   * Brief explanation of the prompt
   */
  description: string;

  /**
   * The prompt template to copy
   */
  promptText: string;

  /**
   * Optional: list of placeholders that user should fill in
   */
  placeholders?: string[];
}

interface QuickPromptSectionProps {
  content: QuickPromptSectionContent;
  className?: string;
}

/**
 * QuickPromptSection component
 *
 * @example
 * const content = {
 *   heading: "Try This Prompt",
 *   description: "Copy this prompt and fill in your specific topic",
 *   promptText: "Explain [topic] to me like I'm a beginner",
 *   placeholders: ["topic"]
 * }
 * <QuickPromptSection content={content} />
 */
export function QuickPromptSection({ content, className = "" }: QuickPromptSectionProps) {
  const { heading, description, promptText, placeholders } = content;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Highlight placeholders in the prompt text with XSS protection
  const formatPrompt = (text: string) => {
    if (!placeholders || placeholders.length === 0) return text;

    let formatted = text;
    placeholders.forEach((placeholder) => {
      // Escape the placeholder value to prevent XSS attacks
      // The placeholder itself could contain malicious content
      const escapedPlaceholder = DOMPurify.sanitize(placeholder, {
        ALLOWED_TAGS: [], // No HTML allowed in placeholder text
        ALLOWED_ATTR: [],
      });
      // Escape special regex characters in the placeholder for matching
      const escapedForRegex = placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\[${escapedForRegex}\\]`, "g");
      formatted = formatted.replace(
        regex,
        `<span class="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">[${escapedPlaceholder}]</span>`,
      );
    });
    return formatted;
  };

  return (
    <section className={`w-full space-y-3 py-4 ${className}`}>
      {/* Section heading */}
      <h2 className="text-xl font-bold text-black">{heading}</h2>

      {/* Description */}
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>

      {/* Prompt code block */}
      <div className="relative">
        {/* Label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Try this prompt
          </span>
        </div>

        {/* Prompt container */}
        <div className="relative bg-gray-900 rounded-xl p-6 overflow-x-auto border border-gray-700/50">
          <pre className="text-base text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatPrompt(promptText) }} />
          </pre>

          {/* Icon-only copy button */}
          <button
            onClick={handleCopy}
            className={`
              absolute top-4 right-4 p-2.5 rounded-lg
              transition-all duration-200
              ${
                copied
                  ? "bg-green-500/20 text-green-400"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }
            `}
            aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Placeholder hint */}
      {placeholders && placeholders.length > 0 && (
        <p className="text-sm text-gray-500 italic">
          Fill in the highlighted placeholders with your own values
        </p>
      )}
    </section>
  );
}
