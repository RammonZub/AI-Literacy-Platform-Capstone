"use client";

/**
 * PromptDetailClient Component
 *
 * PURPOSE: Client-side component for displaying individual prompt details.
 *
 * FEATURES:
 * - Copy prompt to clipboard
 * - Quick action buttons to open AI tools
 * - Display example output and customization tips
 * - Highlight placeholders in prompt text
 *
 * @see src/app/platform/resources/prompts/p/[promptId]/page.tsx - Parent page
 */

import DOMPurify from "dompurify";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Copy,
  ExternalLink,
  Eye,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PlatformPageShell from "@/components/layout/PlatformPageShell";
import type { AIToolConfig } from "@/lib/ai-tools/urls";
import { resourceRoutes } from "@/lib/routes/resources";
import { cn } from "@/lib/utils";
import type {
  AITool,
  Prompt,
  PromptCategory,
  PromptDomain,
} from "@/types/resources";

interface PromptDetailClientProps {
  prompt: Prompt;
  domain: PromptDomain | undefined;
  category: PromptCategory | undefined;
  aiTools: AIToolConfig[];
}

/**
 * PromptDetailClient component
 *
 * Displays the full prompt with interactive features.
 */
export function PromptDetailClient({
  prompt,
  domain,
  category,
  aiTools,
}: PromptDetailClientProps) {
  const [copied, setCopied] = useState(false);
  const [openingTool, setOpeningTool] = useState<AITool | null>(null);

  /**
   * Copy prompt to clipboard
   */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  /**
   * Open AI tool with prompt (copy first, then open)
   */
  const handleOpenTool = async (tool: AIToolConfig) => {
    setOpeningTool(tool.id);
    try {
      await navigator.clipboard.writeText(prompt.promptText);
      if (tool.url !== "#") {
        window.open(tool.url, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.error("Failed to open tool:", err);
    } finally {
      setTimeout(() => setOpeningTool(null), 1000);
    }
  };

  /**
   * Format prompt text with highlighted placeholders and XSS protection
   */
  const formatPrompt = (text: string) => {
    if (!prompt.placeholders || prompt.placeholders.length === 0) {
      return text;
    }

    let formatted = text;
    prompt.placeholders.forEach((placeholder) => {
      // Escape the placeholder value to prevent XSS attacks
      // The placeholder itself could contain malicious content
      const escapedPlaceholder = DOMPurify.sanitize(placeholder, {
        ALLOWED_TAGS: [], // No HTML allowed in placeholder text
        ALLOWED_ATTR: [],
      });
      // Escape special regex characters in the placeholder for matching
      const escapedForRegex = placeholder.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&",
      );
      const regex = new RegExp(`\\[${escapedForRegex}\\]`, "g");
      formatted = formatted.replace(
        regex,
        `<span class="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded font-mono text-sm">[${escapedPlaceholder}]</span>`,
      );
    });
    return formatted;
  };

  /**
   * Get difficulty badge color
   */
  const getDifficultyColor = () => {
    switch (prompt.difficulty) {
      case "beginner":
        return "bg-green-100 text-green-700";
      case "intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "advanced":
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <PlatformPageShell railClassName="py-6">
        {/* Back Navigation */}
        <Link
          href={resourceRoutes.prompts}
          className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Prompts
        </Link>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-black mb-3">{prompt.title}</h1>

          {/* Breadcrumb / Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "text-xs px-2 py-1 rounded-full font-medium",
                getDifficultyColor(),
              )}
            >
              {prompt.difficulty.charAt(0).toUpperCase() +
                prompt.difficulty.slice(1)}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
              {prompt.bestTool === "any" ? "Any AI Tool" : prompt.bestTool}
            </span>
            {domain && (
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <span>{domain.icon}</span>
                <span>{domain.title}</span>
                {category && (
                  <>
                    <ChevronRight className="w-3 h-3" />
                    <span>{category.title}</span>
                  </>
                )}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            {prompt.description}
          </p>
        </div>

        {/* Prompt Block */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Prompt Template
            </span>
          </div>

          <div className="relative bg-gray-900 rounded-xl p-5 overflow-x-auto border border-gray-700/50">
            <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
              <span
                dangerouslySetInnerHTML={{
                  __html: formatPrompt(prompt.promptText),
                }}
              />
            </pre>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={cn(
                "absolute top-4 right-4 p-2.5 rounded-lg transition-all duration-200",
                copied
                  ? "bg-green-500/20 text-green-400"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white",
              )}
              aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
            >
              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Placeholder Hint */}
          {prompt.placeholders && prompt.placeholders.length > 0 && (
            <p className="text-xs text-gray-500 italic mt-2">
              Fill in the highlighted placeholders with your own values
            </p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleCopy}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all",
                copied
                  ? "bg-green-500 text-white"
                  : "bg-primary text-white hover:bg-primary/90",
              )}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Prompt
                </>
              )}
            </button>

            {aiTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleOpenTool(tool)}
                disabled={openingTool === tool.id}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <span>{tool.icon}</span>
                <span>Open {tool.name}</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Clicking &quot;Open&quot; copies the prompt and opens the tool in a
            new tab
          </p>
        </div>

        {/* What to Expect */}
        {prompt.exampleOutput && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-gray-500" />
              <h2 className="text-sm font-semibold text-gray-900">
                What to Expect
              </h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {prompt.exampleOutput}
            </p>
          </div>
        )}

        {/* Customization Tips */}
        {prompt.customizationNotes && prompt.customizationNotes.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              <h2 className="text-sm font-semibold text-gray-900">
                Customization Tips
              </h2>
            </div>
            <ul className="space-y-2">
              {prompt.customizationNotes.map((note, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        {prompt.tags && prompt.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {prompt.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
    </PlatformPageShell>
  );
}
