/**
 * TextWithBulletsSection
 *
 * PURPOSE: Render article sections with text and bullet points
 *
 * CONTEXT: Used for content sections that include a list of key points,
 * features, or steps. The bullet points provide visual emphasis and
 * break up the text for better readability.
 *
 * KEY RESPONSIBILITIES:
 * - Render optional heading/title
 * - Render paragraph text (1-3 paragraphs) with Markdown parsing
 * - Render bullet points as a styled list with Markdown support
 * - Maintain proper spacing between elements
 * - Handle missing/undefined bullets gracefully
 *
 * IMPLEMENTATION NOTES:
 * - Bullets are rendered as a custom styled list (not default <ul>)
 * - Each bullet supports Markdown syntax (bold, code, etc.)
 * - Generous spacing between text and bullets
 * - Clean sans-serif typography
 * - Uses MarkdownRenderer for consistent Markdown parsing
 *
 * DEPENDENCIES:
 * - MarkdownRenderer: Parses and renders Markdown content in paragraphs and bullets
 *
 * @see ArticleSection.tsx - Router component that renders this
 * @see MarkdownRenderer.tsx - Markdown parsing component
 * @see docs/coursiv-analysis.md - Content format reference
 */

import { clsx } from "clsx";
import { InlineMarkdownRenderer } from "./MarkdownRenderer";

export interface TextWithBulletsSectionContent {
  /**
   * Optional section heading/title
   */
  title?: string;

  /**
   * Array of paragraph strings (1-3 paragraphs typical)
   */
  paragraphs: string[];

  /**
   * Array of bullet point strings (3-5 bullets typical)
   * Each bullet is displayed as a bold list item
   */
  bullets: string[];
}

interface TextWithBulletsSectionProps {
  /** Section content object */
  content: TextWithBulletsSectionContent;

  /** Optional additional CSS classes */
  className?: "";
}

/**
 * TextWithBulletsSection component for article-style lessons
 *
 * Renders heading, paragraphs, and a bulleted list.
 * Used for sections that need to highlight key points or features.
 *
 * Both paragraphs and bullets support Markdown syntax:
 * - **Bold** with double asterisks
 * - *Italic* with single asterisks
 * - `code` with backticks
 *
 * @example
 * const content = {
 *   title: "What Artifacts Change",
 *   paragraphs: [
 *     "Artifacts transform how you interact with Claude's output."
 *   ],
 *   bullets: [
 *     "**Rendered UI**",
 *     "**Formatted documents**",
 *     "**Live previews** of code"
 *   ]
 * }
 * <TextWithBulletsSection content={content} />
 */
export function TextWithBulletsSection({ content, className }: TextWithBulletsSectionProps) {
  const { title, paragraphs, bullets } = content;

  return (
    <section
      className={clsx(
        // Base spacing - tighter for article feel
        "space-y-3",
        // Width is controlled by the outer lesson rail.
        "w-full",
        "py-2",
        className,
      )}
    >
      {/* Optional heading */}
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
          {title}
        </h2>
      )}

      {/* Paragraphs with Markdown parsing */}
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="text-lg text-gray-700 leading-relaxed">
            <InlineMarkdownRenderer>{paragraph}</InlineMarkdownRenderer>
          </div>
        ))}
      </div>

      {/* Bullet points with Markdown parsing */}
      {bullets && bullets.length > 0 && (
        <ul className="space-y-3 mt-6">
          {bullets
            .filter((bullet) => bullet.trim().length > 0) // Skip empty strings
            .map((bullet, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 leading-relaxed flex items-start group"
              >
                <span className="mt-2.5 mr-3 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="flex-1">
                  <InlineMarkdownRenderer>{bullet}</InlineMarkdownRenderer>
                </span>
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
