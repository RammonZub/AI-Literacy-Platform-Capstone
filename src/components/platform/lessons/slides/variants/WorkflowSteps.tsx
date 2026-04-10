/**
 * WorkflowSteps Component
 *
 * PURPOSE: Renders workflow step nodes with interactive detail cards
 *
 * CONTEXT: Used within WorkflowSlide to display the actual workflow steps.
 * Handles the layout and coordination of step nodes with arrow connectors.
 *
 * KEY RESPONSIBILITIES:
 * - Render step nodes using WorkflowStepNode component
 * - Render arrow connectors between steps
 * - Handle tap/click interactions to show/hide details
 * - Coordinate layout direction (horizontal or vertical)
 *
 * IMPLEMENTATION NOTES:
 * - Horizontal layout: Steps arranged left-to-right with right arrows
 * - Vertical layout: Steps arranged top-to-bottom with down arrows
 * - Active step state managed by parent component
 * - Arrow connectors between all steps except the last one
 *
 * DESIGN DECISIONS:
 * - Extracted WorkflowStepNode: Single responsibility for individual step
 * - Separate WorkflowArrow: Reusable arrow connector component
 * - Gap between elements: Provides visual separation
 *
 * DEPENDENCIES:
 * - React: Fragment for grouping elements
 * - @/lib/utils/cn: className utility
 * - ./WorkflowStepNode: Individual step node component
 * - ./WorkflowArrow: Arrow connector component
 *
 * @see WorkflowSlide - Parent component that uses this
 * @see WorkflowStepNode - Individual step node
 * @see WorkflowArrow - Arrow connector between steps
 * @created 2026-02-03
 * @modified 2026-02-03 - Split WorkflowStepNode into separate component
 */

import React from "react";
import { cn } from "@/lib/utils/cn";
import type { StepItem } from "@/types/content";
import { WorkflowArrow } from "./WorkflowArrow";
import { WorkflowStepNode } from "./WorkflowStepNode";

// ==========================================
// TYPES
// ==========================================

interface WorkflowStepsProps {
  /** Array of step items to display */
  steps: StepItem[];
  /** Currently active step index (null = none active) */
  activeStep: number | null;
  /** Callback when step is clicked */
  onStepClick: (index: number) => void;
  /** Layout direction (affects arrow direction and detail animation) */
  direction: "horizontal" | "vertical";
}

// ==========================================
// COMPONENT
// ==========================================

export const WorkflowSteps = React.memo(function WorkflowSteps({
  steps,
  activeStep,
  onStepClick,
  direction,
}: WorkflowStepsProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        "relative flex gap-2 sm:gap-4",
        isHorizontal ? "flex-row items-center" : "flex-col items-center",
      )}
    >
      {steps.map((step, idx) => {
        const isLastStep = idx === steps.length - 1;

        return (
          <React.Fragment key={`${step.label}-${idx}`}>
            {/* ==========================================
                STEP NODE
                ==========================================
                WHY: Extracted to WorkflowStepNode for:
                1. Single responsibility (one step)
                2. Easier testing of step interaction
                3. Cleaner code in parent component
            ========================================== */}
            <WorkflowStepNode
              step={step}
              isActive={activeStep === idx}
              index={idx}
              direction={direction}
              onClick={() => onStepClick(idx)}
            />

            {/* ==========================================
                ARROW CONNECTOR
                ==========================================
                WHY: Shows flow direction between steps.
                Not rendered after last step.
            ========================================== */}
            {!isLastStep && <WorkflowArrow direction={direction} delayIndex={idx} />}
          </React.Fragment>
        );
      })}
    </div>
  );
});
