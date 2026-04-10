/**
 * ScenarioCardSection
 *
 * PURPOSE: Display real-world scenarios that users can relate to
 *
 * CONTEXT: Unlike HighlightCardSection (which shows insights), this component
 * presents situations and challenges that users might encounter in their own
 * work. Creates relatability and context for learning.
 *
 * KEY RESPONSIBILITIES:
 * - Display a scenario with situation and challenge
 * - Show optional context for additional background
 * - Support optional reveal functionality for outcomes
 * - Create emotional connection through relatable stories
 *
 * IMPLEMENTATION NOTES:
 * - Card with subtle border/shadow similar to HighlightCardSection
 * - Situation text is prominent (main content)
 * - Challenge text styled differently (italic or distinct)
 * - Outcome hidden behind reveal button when present
 * - Uses InlineMarkdownRenderer for Markdown support
 *
 * DEPENDENCIES:
 * - React: useState for reveal state
 * - lucide-react: Icons for scenario and reveal
 * - InlineMarkdownRenderer: Parses Markdown in text
 *
 * @see LessonSection.tsx - Router that calls this component
 * @see HighlightCardSection.tsx - Similar card styling patterns
 */

import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { InlineMarkdownRenderer } from "./MarkdownRenderer";

export interface ScenarioCardSectionContent {
  /**
   * Section heading, typically "Scenario" or "Real-World Example"
   */
  title: string;

  /**
   * The scenario description - the situation the person is in
   */
  situation: string;

  /**
   * What the person is facing - the problem or challenge
   */
  challenge: string;

  /**
   * Optional additional background information
   */
  context?: string;

  /**
   * Optional outcome - what happened (hidden behind reveal when present)
   */
  outcome?: string;
}

interface ScenarioCardSectionProps {
  content: ScenarioCardSectionContent;
  className?: string;
}

/**
 * ScenarioCardSection component
 *
 * @example
 * const content = {
 *   title: "Real-World Scenario",
 *   situation: "Sarah is a marketing manager at a startup. She needs to write 20 product descriptions for a new launch.",
 *   challenge: "She's never written product copy before and only has 2 hours before the deadline.",
 *   context: "This is her first major project since joining the company.",
 *   outcome: "Using AI, Sarah drafted all 20 descriptions in 45 minutes, then spent the remaining time refining the best ones."
 * }
 * <ScenarioCardSection content={content} />
 */
export function ScenarioCardSection({ content, className = "" }: ScenarioCardSectionProps) {
  const { title, situation, challenge, context, outcome } = content;
  const [isOutcomeRevealed, setIsOutcomeRevealed] = useState(false);

  const hasOutcome = outcome && outcome.trim().length > 0;

  return (
    <section className={`w-full space-y-3 py-4 ${className}`}>
      {/* Section heading with icon */}
      <h2 className="text-xl font-bold text-black flex items-center gap-2">
        <BookOpen className="w-5 h-5" />
        {title}
      </h2>

      {/* Scenario card */}
      <div className="p-5 rounded-xl border-2 border-gray-200 bg-white shadow-sm hover:border-gray-300 transition-all duration-200">
        {/* Situation - the main scenario description */}
        <div className="space-y-4">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Situation
            </span>
            <div className="mt-1.5 text-base text-black leading-relaxed">
              <InlineMarkdownRenderer>{situation}</InlineMarkdownRenderer>
            </div>
          </div>

          {/* Challenge - styled distinctly */}
          <div className="pt-3 border-t border-gray-100">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Challenge
            </span>
            <div className="mt-1.5 text-base text-gray-700 italic leading-relaxed">
              <InlineMarkdownRenderer>{challenge}</InlineMarkdownRenderer>
            </div>
          </div>

          {/* Context - optional additional background */}
          {context && context.trim().length > 0 && (
            <div className="pt-3 border-t border-gray-100">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Context
              </span>
              <div className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                <InlineMarkdownRenderer>{context}</InlineMarkdownRenderer>
              </div>
            </div>
          )}

          {/* Outcome - optional reveal section */}
          {hasOutcome && (
            <div className="pt-3 border-t border-gray-100">
              <button
                onClick={() => setIsOutcomeRevealed(!isOutcomeRevealed)}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
                aria-expanded={isOutcomeRevealed}
                aria-controls="scenario-outcome"
              >
                {isOutcomeRevealed ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Hide outcome
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    See what happened
                  </>
                )}
              </button>

              {isOutcomeRevealed && (
                <div
                  id="scenario-outcome"
                  className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Outcome
                  </span>
                  <div className="mt-1.5 text-base text-black leading-relaxed">
                    <InlineMarkdownRenderer>{outcome}</InlineMarkdownRenderer>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
