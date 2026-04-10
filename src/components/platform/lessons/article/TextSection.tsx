/**
 * TextSection
 *
 * PURPOSE: Render text-only article sections in article-style lessons
 *
 * CONTEXT: Used for simple content sections that contain only a heading
 * and paragraph text. This is the most common section type in Coursiv-style
 * article lessons.
 *
 * KEY RESPONSIBILITIES:
 * - Render optional heading/title
 * - Render 1-3 short paragraphs with Markdown parsing
 * - Maintain proper spacing and readability
 * - Handle empty content gracefully
 *
 * IMPLEMENTATION NOTES:
 * - Uses clean sans-serif typography
 * - Generous vertical spacing between elements
 * - Mobile-first responsive design
 * - Left-aligned text for better readability
 * - MarkdownRenderer parses Markdown syntax (bold, headings, lists, etc.)
 *
 * DEPENDENCIES:
 * - MarkdownRenderer: Parses and renders Markdown content
 *
 * @see ArticleSection.tsx - Router component that renders this
 * @see MarkdownRenderer.tsx - Markdown parsing component
 * @see docs/coursiv-analysis.md - Content format reference
 */

import { clsx } from "clsx";
import { MarkdownRenderer } from "./MarkdownRenderer";

export interface TextSectionContent {
  /**
   * Optional section heading/title
   * Appears at the top, bold, larger font
   */
  title?: string;

  /**
   * Array of paragraph strings (1-3 paragraphs typical)
   * Each paragraph is rendered as a separate <p> element
   * with spacing between them
   */
  paragraphs: string[];
}

interface TextSectionProps {
  /** Section content object */
  content: TextSectionContent;

  /** Optional additional CSS classes */
  className?: "";
}

/**
 * TextSection component for article-style lessons
 *
 * Renders a heading (optional) followed by paragraph text.
 * This is the simplest section type, used for introductory
 * and explanatory content.
 *
 * Paragraphs support Markdown syntax:
 * - **Bold** with double asterisks
 * - *Italic* with single asterisks
 * - ## Headings with hash symbols
 * - `code` with backticks
 * - - Lists with dashes
 *
 * @example
 * const content = {
 *   title: "What is AI?",
 *   paragraphs: [
 *     "AI stands for **Artificial Intelligence**.",
 *     "It enables machines to learn from experience."
 *   ]
 * }
 * <TextSection content={content} />
 */
export function TextSection({ content, className }: TextSectionProps) {
  const { title, paragraphs } = content;

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
        {paragraphs
          .filter((p) => p.trim().length > 0) // Skip empty strings
          .map((paragraph, index) => (
            <MarkdownRenderer key={index} className="text-lg text-gray-700 leading-relaxed">
              {paragraph}
            </MarkdownRenderer>
          ))}
      </div>
    </section>
  );
}
