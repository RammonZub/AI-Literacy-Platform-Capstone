/**
 * MarkdownRenderer
 *
 * PURPOSE: Render Markdown content as formatted HTML in article lessons
 *
 * CONTEXT: Lesson content contains Markdown syntax (bold, italic, headings, lists, etc.)
 * This component parses and renders that Markdown with consistent styling.
 *
 * KEY RESPONSIBILITIES:
 * - Parse Markdown strings into formatted HTML
 * - Apply consistent typography styling
 * - Support GitHub Flavored Markdown (GFM) features
 * - Handle inline and block elements properly
 *
 * IMPLEMENTATION NOTES:
 * - Uses react-markdown for parsing (lightweight, secure)
 * - Uses remark-gfm for GitHub Flavored Markdown support (tables, strikethrough, etc.)
 * - Custom components override for consistent styling
 * - Headings (h1-h6) use Tailwind typography classes
 * - Inline elements (strong, em) inherit text color
 * - Lists use standard Tailwind spacing
 *
 * DEPENDENCIES:
 * - react-markdown: Markdown parser
 * - remark-gfm: GitHub Flavored Markdown plugin
 *
 * DESIGN DECISIONS:
 * - Inline mode (no <p> wrapper for single-line content): Set via `inline` prop
 * - Custom heading styles to match design system
 * - Hard wraps disabled (Markdown standard soft wraps)
 * - Skip HTML sanitization for trusted content (lesson content is controlled)
 *
 * @see TextSection.tsx - Primary consumer
 * @see TextWithBulletsSection.tsx - Also uses this renderer
 */

"use client";

import type { ComponentPropsWithoutRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  /** Markdown string to render */
  children: string;

  /** Optional additional CSS classes */
  className?: string;

  /**
   * Whether to render inline (no <p> wrapper)
   * Use true for single-line content like bullet points
   */
  inline?: boolean;
}

type CodeRendererProps = ComponentPropsWithoutRef<"code"> & {
  inline?: boolean;
};

/**
 * MarkdownRenderer component
 *
 * Parses and renders Markdown content with consistent styling.
 *
 * @example
 * // Inline rendering (for bullet points, single lines)
 * <MarkdownRenderer inline>
 *   {"**Bold text** and *italic text*"}
 * </MarkdownRenderer>
 *
 * @example
 * // Block rendering (for paragraphs, headings)
 * <MarkdownRenderer>
 *   {`## Heading
 *
 *   This is a paragraph with **bold** text.`}
 * </MarkdownRenderer>
 */
export function MarkdownRenderer({ children, className = "" }: MarkdownRendererProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings: Match our section heading style
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mt-8 mb-6" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold text-gray-900 leading-tight mt-6 mb-4" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-bold text-gray-900 leading-tight mt-5 mb-3" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-lg font-bold text-gray-900 leading-tight mt-4 mb-2" {...props} />
          ),

          // Paragraphs: Base text styling
          p: ({ node, ...props }) => (
            <p className="text-lg text-gray-800 leading-relaxed my-4" {...props} />
          ),

          // Inline text formatting
          strong: ({ node, ...props }) => <strong className="font-bold text-gray-900" {...props} />,
          em: ({ node, ...props }) => <em className="italic text-gray-900" {...props} />,

          // Code: Inline and block
          code: ({ inline, children, ...props }: CodeRendererProps) =>
            inline ? (
              <code
                className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code
                className="block bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono my-4 overflow-x-auto"
                {...props}
              >
                {children}
              </code>
            ),

          // Lists: Standard styling with spacing
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside space-y-2 my-4 text-gray-800" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside space-y-2 my-4 text-gray-800" {...props} />
          ),
          li: ({ node, ...props }) => <li className="text-lg leading-relaxed" {...props} />,

          // Blockquotes: Emphasized text
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-blue-200 bg-blue-50/50 pl-4 py-3 my-6 italic text-gray-700 rounded-r-lg"
              {...props}
            />
          ),

          // Horizontal rule: Divider
          hr: ({ node, ...props }) => <hr className="border-gray-200 my-8" {...props} />,

          // Links: Standard link styling
          a: ({ node, ...props }) => (
            <a
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

/**
 * InlineMarkdownRenderer variant
 *
 * Convenience component for inline rendering (no <p> wrapper).
 * Use this for bullet points and other single-line content.
 *
 * @example
 * <InlineMarkdownRenderer>
 *   {"**Bold** and *italic* text"}
 * </InlineMarkdownRenderer>
 */
export function InlineMarkdownRenderer({
  children,
  className = "",
}: Omit<MarkdownRendererProps, "inline">) {
  return (
    <span className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // CRITICAL: Override p tag to render as span to prevent nested <p> hydration errors
          // When used inside a <p> tag, ReactMarkdown's default <p> would create invalid nested <p> tags
          p: ({ node, ...props }) => <span {...props} />,

          // Inline elements only
          strong: ({ node, ...props }) => <strong className="font-bold text-black" {...props} />,
          em: ({ node, ...props }) => <em className="italic text-black" {...props} />,
          code: ({ inline, children, ...props }: CodeRendererProps) =>
            inline ? (
              <code
                className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code
                className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            ),
          a: ({ node, ...props }) => (
            <a
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </span>
  );
}
