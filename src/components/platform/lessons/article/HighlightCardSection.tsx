/**
 * HighlightCardSection
 *
 * PURPOSE: Display key insights in highlighted cards with subtle hover effect
 *
 * CONTEXT: Interactive component to differentiate from Coursiv while keeping
 * clean aesthetic. Displays important concepts in cards that respond to hover.
 *
 * KEY RESPONSIBILITIES:
 * - Render 1-3 insight cards with subtle hover animation
 * - Display optional icon for visual interest
 * - Use black/gray scale design with subtle borders
 * - Provide tactile feedback on interaction
 * - Support Markdown parsing in insight text
 *
 * IMPLEMENTATION NOTES:
 * - Cards have slight lift on hover (shadow + transform)
 * - Subtle border that highlights on hover
 * - Clean typography with proper spacing
 * - Mobile-first responsive design
 * - Uses InlineMarkdownRenderer for Markdown support
 *
 * DEPENDENCIES:
 * - React: useState for hover state
 * - MarkdownRenderer: Parses Markdown in insight text
 *
 * @see ArticleLesson.tsx - Parent component
 * @see data/design/tokens.ts - Color definitions
 */

import { useState } from "react";
import { InlineMarkdownRenderer } from "./MarkdownRenderer";

export interface HighlightCardSectionContent {
  /**
   * Card heading
   */
  heading: string;

  /**
   * Array of key insights (1-3)
   */
  insights: string[];

  /**
   * Optional emoji icon for visual interest
   */
  icon?: string;
}

interface HighlightCardSectionProps {
  content: HighlightCardSectionContent;
  className?: string;
}

/**
 * HighlightCardSection component
 *
 * @example
 * const content = {
 *   heading: "Key Takeaways",
 *   insights: [
 *     "Claude remembers context throughout conversations",
 *     "Be specific and provide clear instructions"
 *   ],
 *   icon: "💡"
 * }
 * <HighlightCardSection content={content} />
 */
export function HighlightCardSection({ content, className = "" }: HighlightCardSectionProps) {
  const { heading, insights, icon } = content;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={`w-full py-4 ${className}`}>
      {/* Section heading with icon */}
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">
            {icon}
          </div>
        )}
        <h2 className="text-xl font-bold text-gray-900">{heading}</h2>
      </div>

      {/* Insight cards */}
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              relative p-6 rounded-2xl border transition-all duration-300 ease-out
              ${
                hoveredIndex === index
                  ? "border-blue-200 bg-blue-50/50 shadow-lg shadow-blue-500/5 -translate-y-1"
                  : "border-gray-100 bg-white shadow-sm hover:shadow-md"
              }
            `}
          >
            {/* Insight text with Markdown support */}
            <div className="flex gap-4">
              <div
                className={`
                flex-shrink-0 w-1.5 rounded-full self-stretch
                ${hoveredIndex === index ? "bg-blue-500" : "bg-gray-200"}
                transition-colors duration-300
              `}
              />

              <div className="text-base text-gray-700 leading-relaxed flex-1">
                <InlineMarkdownRenderer>{insight}</InlineMarkdownRenderer>
              </div>
            </div>

            {/* Subtle indicator dot replaced by side bar above */}
          </div>
        ))}
      </div>
    </section>
  );
}
