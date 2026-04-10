/**
 * Module Progress Bar Component
 *
 * PURPOSE: Large, prominent progress display for module journey page
 *
 * CONTEXT: Part of the redesigned module journey view (Phase 2B). Displays
 * module completion percentage prominently at the top of the module page,
 * replacing the previous small progress indicators.
 *
 * KEY RESPONSIBILITIES:
 * - Display large percentage text (e.g., "85%")
 * - Show animated progress bar with iOS Blue fill
 * - Display lesson count (e.g., "12/15 lessons completed")
 * - Show certificate unlock progress indicator
 * - Provide motivational messaging at different progress levels
 *
 * IMPLEMENTATION NOTES:
 * - Uses iOS Blue (#007AFF) for progress color
 * - Smooth transition animation (300ms ease-out)
 * - Progress threshold messaging:
 *   - 0-79%: "Keep going!" with lock icon
 *   - 80-89%: "Almost there!" with lock icon
 *   - 90-99%: "So close!" with lock icon
 *   - 100%: "Certificate unlocked! 🏆" with trophy icon
 * - Card-based layout with shadow
 *
 * DESIGN RATIONALE:
 * - Large percentage (text-5xl) draws attention to progress
 * - Visual progress bar provides quick status scan
 * - Certificate messaging at 80%+ motivates completion
 * - Trophy icon at 100% gamifies the achievement
 *
 * @see /data/design/tokens.ts for color definitions
 * @see ChapterAccordion.tsx for lesson cards below progress bar
 */

"use client";

import { Lock, Trophy } from "lucide-react";
import React from "react";
import { colors } from "@/data/design/tokens";

// ==========================================
// TYPES
// ==========================================

/** Props for ModuleProgressBar component */
export interface ModuleProgressBarProps {
  /** Number of completed lessons */
  completedCount: number;
  /** Total number of lessons in module */
  totalCount: number;
  /** Optional module name for display */
  moduleName?: string;
}

// ==========================================
// COMPONENT
// ==========================================

/**
 * ModuleProgressBar Component
 *
 * Large progress display with percentage, animated bar, and certificate messaging.
 * Shows motivational messages based on progress level.
 */
export function ModuleProgressBar({
  completedCount,
  totalCount,
  moduleName,
}: ModuleProgressBarProps) {
  /**
   * Calculate progress percentage (0-100)
   */
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  /**
   * Get certificate progress messaging based on percentage
   */
  const getCertificateMessage = () => {
    if (percentage >= 100) {
      return {
        icon: <Trophy className="w-6 h-6 text-yellow-500" />,
        text: "Certificate unlocked! 🏆",
        textColor: "text-yellow-600",
        bgColor: "bg-yellow-50",
      };
    } else if (percentage >= 90) {
      return {
        icon: <Lock className="w-5 h-5 text-gray-400" />,
        text: "So close! Keep pushing!",
        textColor: "text-gray-600",
        bgColor: "bg-gray-50",
      };
    } else if (percentage >= 80) {
      return {
        icon: <Lock className="w-5 h-5 text-gray-400" />,
        text: "Almost there! Certificate incoming...",
        textColor: "text-gray-600",
        bgColor: "bg-gray-50",
      };
    } else {
      return {
        icon: <Lock className="w-5 h-5 text-gray-400" />,
        text: "Complete all lessons to earn your certificate",
        textColor: "text-gray-500",
        bgColor: "bg-gray-50",
      };
    }
  };

  const certMessage = getCertificateMessage();

  return (
    <div
      className="bg-white rounded-xl p-6 mb-6"
      style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)" }}
    >
      {/* Header: Percentage + Lesson Count */}
      <div className="flex items-end justify-between mb-4">
        {/* Large Percentage */}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-[#007AFF]" style={{ color: colors.primary }}>
              {percentage}%
            </span>
            <span className="text-lg text-gray-500 mb-2">Complete</span>
          </div>
        </div>

        {/* Lesson Count */}
        <div className="text-right">
          <p className="text-sm text-gray-500">
            {completedCount} / {totalCount} lessons
          </p>
          {moduleName && <p className="text-xs text-gray-400 mt-0.5">{moduleName}</p>}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: colors.primary,
          }}
        />
      </div>

      {/* Certificate Progress Indicator */}
      <div
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg
          ${certMessage.bgColor}
        `}
      >
        {certMessage.icon}
        <p className={`text-sm font-medium ${certMessage.textColor}`}>{certMessage.text}</p>
      </div>
    </div>
  );
}

export default ModuleProgressBar;
