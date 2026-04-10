/**
 * Lesson Card Component
 *
 * PURPOSE: Square lesson card with a tactile “pressed tile” interaction for the module journey
 *
 * CONTEXT: Part of the redesigned module journey view (Phase 2A). Replaces circular
 * lesson nodes with square cards for clear visual hierarchy.
 *
 * KEY RESPONSIBILITIES:
 * - Display lesson status (locked, unlocked, in_progress, completed) with visual distinction
 * - Show lesson number in format like "1.1", "1.2" (chapter.lesson)
 * - Provide 3D button press effect (translate-y on active)
 * - Use iOS Blue (#007AFF) for in-progress state with pulsing animation
 * - Use green (#5BA387) for completed state with checkmark
 * - Use gray for locked state with padlock icon
 *
 * IMPLEMENTATION NOTES:
 * - Square card with rounded-lg (8px) or rounded-xl (12px) corners
 * - 3D border effect using border-b-4px (4px bottom border)
 * - Active state: translate-y-1 and reduces bottom border to 2px for press effect
 * - Hover state: slight lift with translate-y-0.5
 * - Design tokens from @/data/design/tokens.ts for consistency
 *
 * DESIGN RATIONALE:
 * - Square cards allow better grid layout and more content space
 * - Thicker bottom border + translate provides tactile feedback
 * - iOS Blue for in-progress matches platform primary color
 * - Green only for completed (semantic success meaning)
 * - Gray for locked (muted appearance)
 *
 * @see /data/design/tokens.ts for color and shadow definitions
 * @see ChapterAccordion.tsx for parent component that uses LessonCard
 */

"use client";

import { Check, Info, Lock, Play } from "lucide-react";
import type React from "react";
import { useState } from "react";
import InfoModal from "@/components/ui/InfoModal";
import { colors, shadows } from "@/data/design/tokens";
import type { LessonStatus } from "@/types/progress";

// ==========================================
// TYPES
// ==========================================

/**
 * Props for LessonCard component
 */
export interface LessonCardProps {
  /** Lesson identifier in format "chapter.lesson" (e.g., "1.1", "2.3") */
  lessonNumber: string;
  /** Lesson title (truncated if needed) */
  title: string;
  /** Current completion status of the lesson */
  status: LessonStatus;
  /** Click handler (only for accessible lessons) */
  onClick?: () => void;
  /** Whether this is the active/current lesson (emphasized styling) */
  isActive?: boolean;
  /** Lesson duration in minutes (optional, for info modal) */
  duration?: number;
  /** XP reward for completing this lesson (optional, for info modal) */
  xpReward?: number;
  /** Lesson description (optional, for info modal) */
  description?: string;
}

// ==========================================
// COMPONENT
// ==========================================

/**
 * LessonCard Component
 *
 * Square lesson card with 3D border effect and status-based styling.
 * Displays lesson number, title, and status icon with pressable-card interactions.
 * Info icon in corner shows lesson details in a modal.
 */
export function LessonCard({
  lessonNumber,
  title,
  status,
  onClick,
  isActive = false,
  duration = 0,
  xpReward = 0,
  description,
}: LessonCardProps) {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Clickable if unlocked, in progress, or completed
  const isClickable = status === "unlocked" || status === "in_progress" || status === "completed";

  /**
   * Get card styles based on lesson status
   */
  const getCardStyles = () => {
    switch (status) {
      case "completed":
        return {
          bg: `linear-gradient(135deg, ${colors.completed.from} 0%, ${colors.completed.to} 100%)`,
          border: colors.completed.border,
          shadow: shadows.node3dGreen,
          textColor: "text-white",
          icon: <Check className="w-6 h-6" strokeWidth={3} />,
        };

      case "in_progress":
        return {
          bg: colors.primary,
          border: "#2563EB",
          shadow: `0 6px 0 0 #2563EB, 0 9px 20px rgba(0, 122, 255, 0.2)`,
          textColor: "text-white",
          icon: <Play className="w-5 h-5 fill-white animate-pulse" strokeWidth={3} />,
        };

      case "unlocked":
        return {
          bg: `linear-gradient(135deg, ${colors.unlocked.from} 0%, ${colors.unlocked.to} 100%)`,
          border: colors.unlocked.border,
          shadow: shadows.node3dGray,
          textColor: "text-gray-700",
          icon: <Play className="w-5 h-5" strokeWidth={2.5} />,
        };

      case "locked":
      default:
        return {
          bg: `linear-gradient(135deg, ${colors.locked.from} 0%, ${colors.locked.to} 100%)`,
          border: colors.locked.border,
          shadow: shadows.blockGray,
          textColor: "text-gray-500",
          icon: <Lock className="w-5 h-5" strokeWidth={2} />,
        };
    }
  };

  const styles = getCardStyles();

  return (
    <>
      <button
        onClick={isClickable ? onClick : undefined}
        disabled={!isClickable}
        className={`
          relative aspect-square w-full rounded-xl
          flex flex-col items-center justify-center
          border-b-4 transition-all duration-200
          ${
            isClickable
              ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-lg active:translate-y-1 active:border-b-2 active:shadow-md"
              : "cursor-not-allowed opacity-70"
          }
          ${isActive ? "ring-2 ring-offset-2 ring-primary" : ""}
        `}
        style={
          {
            background: styles.bg,
            borderColor: styles.border,
            boxShadow: styles.shadow,
          } as React.CSSProperties
        }
      >
        {/* Info Icon - Top Right - Subtle, no background */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsInfoModalOpen(true);
          }}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-md bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-all z-10"
          aria-label="More information"
        >
          <Info className="w-3 h-3 text-white/90 hover:text-white" strokeWidth={2} />
        </button>

        {/* Status Icon */}
        <div className={`mb-2 ${styles.textColor}`}>{styles.icon}</div>

        {/* Lesson Number */}
        <div className={`text-lg font-bold ${styles.textColor} mb-1`}>{lessonNumber}</div>

        {/* Lesson Title (truncated) */}
        <div
          className={`text-xs font-medium ${styles.textColor} text-center px-2 line-clamp-2 max-w-full`}
        >
          {title}
        </div>
      </button>

      {/* Info Modal */}
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title={`Lesson ${lessonNumber}: ${title}`}
        description={
          description || `In this lesson, you'll master key concepts through hands-on practice.`
        }
        details={
          duration > 0 || xpReward > 0
            ? ([
                duration > 0 ? `${duration} minutes` : undefined,
                xpReward > 0 ? `${xpReward} XP` : undefined,
                status === "completed" ? "Completed" : undefined,
                status === "in_progress" ? "In progress" : undefined,
                status === "locked" ? "Locked" : undefined,
              ].filter(Boolean) as string[])
            : undefined
        }
        footer={
          <div className="space-y-3 pt-2">
            {/* What You'll Learn */}
            <div>
                <h4 className="font-semibold text-foreground mb-2">What You&apos;ll Master</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span>Core concepts explained simply</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span>Step-by-step guided exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span>Real examples you can relate to</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span>Practical skills for immediate use</span>
                </li>
              </ul>
            </div>

            {/* Time Commitment */}
            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Time Investment</span>
                <span className="text-sm font-semibold text-foreground">{duration} minutes</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {xpReward} XP reward • Self-paced • Mobile-friendly
              </p>
            </div>
          </div>
        }
      />
    </>
  );
}

export default LessonCard;
