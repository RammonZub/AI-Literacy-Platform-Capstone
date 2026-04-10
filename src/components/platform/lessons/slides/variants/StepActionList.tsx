/**
 * StepActionList Component
 *
 * PURPOSE: Renders a list of sequential steps with connecting line and animation
 *
 * CONTEXT: Used within StepActionSlide to display the step items with their
 * labels, details, and visual indicators. Handles the layout and animation
 * of the step list.
 *
 * KEY RESPONSIBILITIES:
 * - Render all steps with staggered fade-in animation
 * - Draw vertical connecting line between steps
 * - Display step content (label, detail, icon) for each step
 * - Coordinate animation timing for sequential appearance
 *
 * IMPLEMENTATION NOTES:
 * - Uses Framer Motion variants for container and child animations
 * - Connecting line is absolutely positioned behind step circles
 * - StaggerChildren creates sequential reveal (0.15s per step)
 * - Each step fades in from the left (x: -20 to x: 0)
 * - Last step has no bottom margin
 *
 * DESIGN DECISIONS:
 * - Staggered animation: Guides attention sequentially, not overwhelming
 * - Vertical line: Visual connection shows relationship between steps
 * - Left-aligned indicator: Reading order (left-to-right) is natural
 * - Spacing (gap-5): Provides room for connecting line to be visible
 *
 * DEPENDENCIES:
 * - framer-motion: Animation variants and motion components
 * - @/types/content: StepItem type definition
 * - @/data/design/tokens: Design system colors
 *
 * @see StepActionSlide - Parent component
 * @see StepNumber - Circular indicator component used for each step
 * @created 2026-02-03
 */

import { motion, type Variants } from "framer-motion";
import React from "react";
import type { StepItem } from "@/types/content";
import { StepNumber } from "./StepNumber";

// ==========================================
// TYPES
// ==========================================

interface StepActionListProps {
  /** Array of step items to display */
  steps: StepItem[];
}

// ==========================================
// ANIMATION VARIANTS
// ==========================================

// Container variants for sequential step animation
// WHY: staggerChildren creates the cascading reveal effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual step animation variants
// WHY: Sliding in from left creates a sense of forward momentum
const stepVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ==========================================
// COMPONENT
// ==========================================

export const StepActionList = React.memo(function StepActionList({ steps }: StepActionListProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative"
    >
      {/* ==========================================
          VERTICAL CONNECTING LINE
          ==========================================
          WHY: Visual line connects steps, showing sequence.
          Positioned absolutely at left-[19px] (center of 10x10 circle).
          Starts after first circle (top-12), ends before last (bottom-12).
      ========================================== */}
      {steps.length > 1 && (
        <div className="absolute left-[19px] top-12 bottom-12 w-0.5 bg-border" aria-hidden="true" />
      )}

      {/* ==========================================
          INDIVIDUAL STEPS
          ========================================== */}
      {steps.map((step, index) => (
        <motion.div
          key={step.number || index}
          variants={stepVariants}
          className="relative flex gap-5 mb-8 last:mb-0"
        >
          {/* ==========================================
              STEP NUMBER INDICATOR
              ========================================== */}
          <StepNumber number={step.number || index + 1} completed={step.completed} />

          {/* ==========================================
              STEP CONTENT
              ========================================== */}
          <div className="flex-1 pt-1">
            {/* Step label (heading) */}
            {step.label && (
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.label}</h3>
            )}

            {/* Step detail (description) */}
            {step.detail && (
              <p className="text-base text-foreground/90 leading-relaxed whitespace-pre-line">
                {step.detail}
              </p>
            )}

            {/* Optional icon for visual context */}
            {step.icon && (
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">{step.icon}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
});
