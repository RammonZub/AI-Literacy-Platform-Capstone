/**
 * ConceptPanel Component
 *
 * PURPOSE: Renders a single panel (before or after) in a concept demo comparison
 *
 * CONTEXT: Used within ConceptDemoSlide to display one side of a before/after
 * comparison. Each panel shows an example with optional label and commentary.
 *
 * KEY RESPONSIBILITIES:
 * - Display example content in a styled panel
 * - Show optional label (e.g., "Before", "After")
 * - Show optional commentary below the example
 * - Apply appropriate background color based on panel type
 * - Animate entrance with slide effect
 *
 * IMPLEMENTATION NOTES:
 * - Before panel: Muted gray background signals "not ideal"
 * - After panel: Subtle blue tint signals "improved"
 * - No borders or heavy shadows - just subtle backgrounds
 * - Content preserves line breaks (whitespace-pre-wrap)
 * - Commentary has top border to separate from main content
 *
 * DESIGN DECISIONS:
 * - Minimal chrome: Content-first approach, no decorative elements
 * - Color differentiation: Background tint conveys meaning without badges
 * - Rounded corners: Soft, modern appearance
 * - Full height: Panel fills available space
 *
 * DEPENDENCIES:
 * - framer-motion: Fade and slide animations
 * - @/lib/utils/cn: className utility
 *
 * @see ConceptDemoSlide - Parent component that uses this
 * @created 2026-02-03
 */

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils/cn";

// ==========================================
// TYPES
// ==========================================

interface Example {
  /** Optional label (e.g., "Before", "After") */
  label?: string;
  /** The actual example content */
  content: string;
  /** Optional explanation below the example */
  commentary?: string;
}

interface ConceptPanelProps {
  /** The example data to display */
  example: Example;
  /** Whether this is the "after" panel (affects styling) */
  isAfter?: boolean;
  /** Animation delay in seconds */
  delay?: number;
}

// ==========================================
// COMPONENT
// ==========================================

export const ConceptPanel = React.memo(function ConceptPanel({
  example,
  isAfter = false,
  delay = 0,
}: ConceptPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isAfter ? 10 : -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex-1 flex flex-col"
    >
      {/* ==========================================
          OPTIONAL LABEL
          ==========================================
          WHY: Identifies the panel as "Before" or "After".
          Uppercase tracking creates visual hierarchy.
      ========================================== */}
      {example.label && (
        <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
          {example.label}
        </p>
      )}

      {/* ==========================================
          EXAMPLE CONTENT BOX
          ==========================================
          WHY: Subtle background differentiates panels without borders.
          - Before: Gray signals "not ideal"
          - After: Blue tint signals "improved"
      ========================================== */}
      <div
        className={cn(
          "flex-1 rounded-lg p-4 md:p-6",
          isAfter ? "bg-blue-50/50 dark:bg-blue-900/10" : "bg-gray-50 dark:bg-gray-900/30",
        )}
      >
        {/* Main content - preserve line breaks */}
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap text-foreground">
          {example.content}
        </p>

        {/* Optional commentary - appears below example */}
        {example.commentary && (
          <p
            className={cn(
              "mt-4 pt-4 border-t text-xs md:text-sm text-muted-foreground italic",
              isAfter
                ? "border-blue-200/50 dark:border-blue-800/30"
                : "border-gray-200 dark:border-gray-800",
            )}
          >
            {example.commentary}
          </p>
        )}
      </div>
    </motion.div>
  );
});
