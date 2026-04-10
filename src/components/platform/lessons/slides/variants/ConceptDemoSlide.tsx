/**
 * Concept Demo Slide Component
 *
 * PURPOSE: Simple before/after demonstrations of AI concepts in action
 *
 * WHY THIS DESIGN:
 * - Shows, not tells - demonstrates the difference through real examples
 * - Minimal chrome - no borders, cards, or UI decorations
 * - Side-by-side comparison makes the contrast immediately obvious
 * - Content-first approach like conversation slides
 * - Relatable examples make concepts concrete
 *
 * KEY RESPONSIBILITIES:
 * - Display before/after examples of AI prompts or concepts
 * - Clean, minimal layout - no borders or decorative elements
 * - Clear visual separation between before (bad/wrong) and after (good/right)
 * - Supports optional commentary explaining the difference
 * - Mobile-responsive with vertical stacking on small screens
 *
 * IMPLEMENTATION NOTES:
 * - Uses a simple split layout (left: before, right: after)
 * - No card borders or shadows - just subtle backgrounds
 * - Bad/Before: muted gray background
 * - Good/After: subtle green/blue tint to indicate improvement
 * - No badges, icons, or decorative elements - pure content
 * - Commentaries appear as simple text below each example
 *
 * DESIGN PRINCIPLES:
 * - Content over chrome: All focus on the examples, not the container
 * - Anti-template: No "click to reveal", no expandable cards
 * - Show the difference: Before/after speaks for itself
 * - Real examples: Uses actual prompts/output, not abstract descriptions
 *
 * DEPENDENCIES:
 * - framer-motion: Subtle fade-in animations
 * - @/types/content: LessonSlide interface
 * - @/lib/utils/cn: className utility
 *
 * @see ConversationSlide - Similar minimal approach
 * @see ComparisonSlide - Alternative comparison style with cards
 * @created 2026-02-03
 */

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface ConceptDemoSlideProps {
  slide: LessonSlide;
}

interface Example {
  label?: string; // Optional label (e.g., "Before", "After")
  content: string; // The actual example content
  commentary?: string; // Optional explanation below the example
}

export default function ConceptDemoSlide({ slide }: ConceptDemoSlideProps) {
  const { content } = slide;
  const { title, before, after, subtitle } = content;

  // Type guard for before/after examples
  const beforeExample: Example | null =
    before && typeof before === "object"
      ? {
          label: before.label || "Before",
          content: before.content || "",
          commentary: before.commentary,
        }
      : null;

  const afterExample: Example | null =
    after && typeof after === "object"
      ? {
          label: after.label || "After",
          content: after.content || "",
          commentary: after.commentary,
        }
      : null;

  if (!beforeExample || !afterExample) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-background p-8">
        <p className="text-muted-foreground">
          Concept demo requires both before and after examples
        </p>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-background overflow-hidden">
      {/* =====================================================
          OPTIONAL HEADER - Title and subtitle
          ===================================================== */}
      {title && (
        <div className="flex-shrink-0 px-6 pt-8 pb-4 md:pt-10 md:pb-6">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-serif font-bold text-foreground text-center"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}

      {/* =====================================================
          MAIN CONTENT - Side-by-side comparison
          ===================================================== */}
      <div className="flex-1 px-4 md:px-6 pb-6 md:pb-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto h-full flex flex-col md:flex-row gap-4 md:gap-6">
          {/* =====================================================
              BEFORE EXAMPLE - Left side
              ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col"
          >
            {/* Optional label */}
            {beforeExample.label && (
              <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                {beforeExample.label}
              </p>
            )}

            {/* Example content box */}
            <div className="flex-1 bg-gray-50 dark:bg-gray-900/30 rounded-lg p-4 md:p-6">
              {/* Main content - preserve line breaks */}
              <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap text-foreground">
                {beforeExample.content}
              </p>

              {/* Optional commentary - appears below example */}
              {beforeExample.commentary && (
                <p className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 text-xs md:text-sm text-muted-foreground italic">
                  {beforeExample.commentary}
                </p>
              )}
            </div>
          </motion.div>

          {/* =====================================================
              AFTER EXAMPLE - Right side
              ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex-1 flex flex-col"
          >
            {/* Optional label */}
            {afterExample.label && (
              <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                {afterExample.label}
              </p>
            )}

            {/* Example content box */}
            <div className="flex-1 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg p-4 md:p-6">
              {/* Main content - preserve line breaks */}
              <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap text-foreground">
                {afterExample.content}
              </p>

              {/* Optional commentary - appears below example */}
              {afterExample.commentary && (
                <p className="mt-4 pt-4 border-t border-blue-200/50 dark:border-blue-800/30 text-xs md:text-sm text-muted-foreground italic">
                  {afterExample.commentary}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          OPTIONAL: Bottom gradient fade
          ===================================================== */}
      <div className="flex-shrink-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
