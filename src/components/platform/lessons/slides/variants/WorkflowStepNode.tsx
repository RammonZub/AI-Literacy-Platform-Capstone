/**
 * WorkflowStepNode Component
 *
 * PURPOSE: Individual workflow step node with circular button, label, and detail card
 *
 * CONTEXT: Used within WorkflowSteps to render a single step in the workflow.
 * Handles the interactive tap-to-reveal functionality for step details.
 *
 * KEY RESPONSIBILITIES:
 * - Render circular button with step number or icon
 * - Display step label below the button
 * - Show detail card when active (tapped)
 * - Handle click interaction to toggle active state
 * - Animate entrance and detail card appearance
 *
 * IMPLEMENTATION NOTES:
 * - Active step gets primary color background and scale effect (110%)
 * - Inactive steps use card background with hover state
 * - Detail card positioned absolutely to prevent layout shift
 * - Clicking active step again closes the detail card
 * - z-20 ensures detail card appears above other elements
 *
 * DESIGN DECISIONS:
 * - Scale on active: Visual feedback for current selection
 * - 200px max width: Keeps detail card compact and readable
 * - Rounded corners: Soft, modern appearance
 * - Absolute positioning: Prevents layout shift when card appears
 *
 * DEPENDENCIES:
 * - framer-motion: Animations for entrance and detail reveal
 * - @/lib/utils/cn: className utility
 *
 * @see WorkflowSteps - Container component that renders multiple nodes
 * @see WorkflowSlide - Parent component
 * @created 2026-02-03
 */

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils/cn";
import type { StepItem } from "@/types/content";

// ==========================================
// TYPES
// ==========================================

interface WorkflowStepNodeProps {
  /** The step data to display */
  step: StepItem;
  /** Whether this step is currently active (showing detail) */
  isActive: boolean;
  /** The index of this step (for aria-labels) */
  index: number;
  /** Layout direction (affects detail card animation) */
  direction: "horizontal" | "vertical";
  /** Callback when this step is clicked */
  onClick: () => void;
}

// ==========================================
// COMPONENT
// ==========================================

export const WorkflowStepNode = React.memo(function WorkflowStepNode({
  step,
  isActive,
  index,
  direction,
  onClick,
}: WorkflowStepNodeProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.1,
        duration: 0.3,
        ease: "easeOut",
      }}
      className="relative flex flex-col items-center"
    >
      {/* ==========================================
          NUMBERED CIRCLE BUTTON
          ==========================================
          WHY: Button element for accessibility.
          Scale effect provides visual feedback.
      ========================================== */}
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-4 border-background shadow-md transition-all duration-200",
          "font-bold font-mono text-base sm:text-lg",
          isActive
            ? "bg-primary text-primary-foreground scale-110 shadow-lg"
            : "bg-card text-foreground hover:bg-muted hover:scale-105",
        )}
        aria-label={`Step ${step.number || index + 1}: ${step.label}`}
      >
        {step.icon || step.number || index + 1}
      </button>

      {/* ==========================================
          STEP LABEL
          ==========================================
          WHY: Shows step name below the circle.
          line-clamp-2 prevents overflow on long labels.
      ========================================== */}
      <div
        className={cn(
          "mt-2 sm:mt-3 text-center max-w-[80px] sm:max-w-[100px]",
          isActive ? "opacity-100" : "opacity-70",
        )}
      >
        <p className="text-xs sm:text-sm font-semibold text-foreground line-clamp-2">
          {step.label}
        </p>
      </div>

      {/* ==========================================
          DETAIL CARD (Revealed on Tap)
          ==========================================
          WHY: Absolute positioning prevents layout shift.
          AnimatePresence provides smooth exit animation.
          z-20 ensures it appears above other elements.
      ========================================== */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: isHorizontal ? 10 : 0 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{
              opacity: 0,
              height: 0,
              y: isHorizontal ? 10 : 0,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "absolute top-full z-20 mt-2 sm:mt-3 w-[180px] sm:w-[200px]",
              "bg-card border border-primary/30 rounded-lg shadow-lg",
              "p-3 sm:p-4 text-left",
            )}
          >
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {step.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
