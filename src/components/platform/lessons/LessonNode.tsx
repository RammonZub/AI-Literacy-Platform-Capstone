/**
 * Lesson Node Component
 *
 * PURPOSE: Individual lesson checkpoint with "Modern Clean" tile design
 *
 * CONTEXT: Displays lesson status with floating tooltip ("Start") when idle and
 * a floating popover (menu) when clicked.
 *
 * REDESIGN:
 * - Shape: Rounded Square (Squircle) - rounded-2xl
 * - Style: Flat/Material with subtle shadows (No 3D depth borders)
 * - Icons: Lucide icons (Star, Play, Check, Lock)
 * - Interactions: Smooth scale and shadow lift on hover
 *
 * STATES:
 * - Locked: Gray/Muted, Lock Icon, Flat
 * - Unlocked: White, Blue Icon, Border
 * - In Progress: Blue Fill, White Icon, Glow
 * - Completed: Green Fill, White Icon, Subtle Shadow
 */

"use client";

import { Check, Lock, Play, Star } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import type { LessonCompletionStatus, LessonStatus } from "@/types/progress";

// ==========================================
// TYPES
// ==========================================

interface LessonNodeProps {
  lessonNumber: number;
  title: string;
  status: LessonStatus;
  isLast?: boolean;
  onClick?: () => void;
  isActive?: boolean;
  showStartTooltip?: boolean;
  description?: string;
  onStartLesson?: () => void;
  onClose?: () => void;
  lessonIndexInChapter?: number;
  totalLessonsInChapter?: number;
  xpReward?: number;
  completionStatus?: LessonCompletionStatus;
  /** Position of the node in the grid layout to adjust tooltip alignment */
  position?: "left" | "right" | "center";
}

// ==========================================
// COMPONENT
// ==========================================

const LessonNode = React.forwardRef<HTMLButtonElement, LessonNodeProps>(
  (
    {
      lessonNumber,
      title,
      status,
      isLast = false,
      onClick,
      isActive = false,
      showStartTooltip = false,
      description = "",
      onStartLesson,
      onClose,
      lessonIndexInChapter = 1,
      totalLessonsInChapter = 1,
      xpReward = 10,
      completionStatus,
      position = "center",
    },
    ref,
  ) => {
    const isAvailable = status === "unlocked" || status === "in_progress" || status === "completed";
    const isLocked = status === "locked";

    // Tooltip label
    const tooltipLabel =
      status === "completed" ? "Review" : status === "in_progress" ? "Continue" : "Start";

    /**
     * Node Styling Configuration
     */
    const getNodeStyles = () => {
      switch (status) {
        case "completed":
          return {
            container:
              "bg-emerald-500 border-emerald-600 text-white shadow-emerald-500/20 shadow-lg",
            icon: <Check className="w-7 h-7 stroke-[3]" />,
          };
        case "in_progress":
          return {
            container:
              "bg-primary border-primary text-white shadow-primary/30 shadow-lg ring-4 ring-primary/10",
            icon: <Play className="w-7 h-7 fill-white pl-1" />,
          };
        case "unlocked":
          return {
            container: "bg-card border-border text-primary shadow-sm hover:border-primary/50",
            icon: <Star className="w-7 h-7 fill-primary" />,
          };
        case "locked":
        default:
          return {
            container: "bg-muted border-transparent text-muted-foreground shadow-none",
            icon: <Lock className="w-6 h-6" />,
          };
      }
    };

    const styles = getNodeStyles();

    // Determine tooltip positioning classes based on node position
    const getTooltipPositionClasses = () => {
      switch (position) {
        case "left":
          return "left-0 translate-x-[-10%] origin-top-left";
        case "right":
          return "right-0 translate-x-[10%] origin-top-right";
        case "center":
        default:
          return "left-1/2 -translate-x-1/2 origin-top";
      }
    };

    // Determine arrow positioning based on node position
    const getArrowPositionClasses = () => {
      switch (position) {
        case "left":
          return "left-8"; // Align with left side of node
        case "right":
          return "right-8"; // Align with right side of node
        case "center":
        default:
          return "left-1/2 -translate-x-1/2";
      }
    };

    return (
      <div className="relative flex flex-col items-center z-10 group">
        {/* 1. START TOOLTIP */}
        {!isActive && showStartTooltip && isAvailable && (
          <div className="absolute -top-12 z-20 animate-bounce">
            <div className="relative rounded-xl bg-foreground text-background px-3 py-1.5 shadow-lg">
              <span className="font-bold text-xs uppercase tracking-wide">{tooltipLabel}</span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
            </div>
          </div>
        )}

        {/* 2. THE SQUARED NODE */}
        <button
          ref={ref}
          onClick={onClick}
          className={cn(
            "relative w-20 h-20 rounded-2xl flex items-center justify-center border-2",
            "transition-colors duration-200 cursor-pointer",
            styles.container,
            isAvailable && !isActive && "hover:shadow-md",
            isActive && "border-primary",
          )}
        >
          {styles.icon}
        </button>

        {/* 3. POPOVER (Modern Float) */}
        {isActive && (
          <div
            className={cn(
              "absolute top-full mt-4 z-50 w-64 p-4 rounded-2xl bg-card border border-border/50 shadow-2xl animate-in slide-in-from-top-2 fade-in duration-200",
              getTooltipPositionClasses(),
            )}
          >
            {/* Arrow */}
            <div
              className={cn(
                "absolute -top-2 w-4 h-4 bg-card border-t border-l border-border/50 rotate-45",
                getArrowPositionClasses(),
              )}
            />

            <div className="flex flex-col gap-3">
              <div className="text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Lesson {lessonIndexInChapter}/{totalLessonsInChapter}
                </span>
                <h3 className="font-bold text-lg text-foreground leading-tight mt-1">{title}</h3>
              </div>

              {isAvailable ? (
                <>
                  <p className="text-xs text-muted-foreground text-center line-clamp-3 leading-relaxed">
                    {description || "Master this concept to move forward in your journey."}
                  </p>

                  {onStartLesson && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartLesson();
                      }}
                      className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold uppercase text-xs shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 hover:scale-[1.02] transition-all active:scale-[0.98]"
                    >
                      {status === "completed"
                        ? "Review Lesson"
                        : status === "in_progress"
                          ? "Continue"
                          : `Start +${xpReward} XP`}
                    </button>
                  )}
                </>
              ) : (
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-3">
                    Complete previous lessons to unlock this one.
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={onClose}
                      className="flex-1 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted rounded-xl transition-colors"
                    >
                      Close
                    </button>
                    {onStartLesson && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartLesson();
                        }}
                        className="flex-1 py-2 text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors"
                      >
                        Skip to here
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Title Label below node */}
        <div className="mt-3 text-center max-w-[100px]">
          <p
            className={cn(
              "text-xs font-bold leading-tight line-clamp-2",
              isLocked ? "text-muted-foreground" : "text-foreground",
              status === "in_progress" && "text-primary",
            )}
          >
            {title}
          </p>
        </div>
      </div>
    );
  },
);

LessonNode.displayName = "LessonNode";

export default LessonNode;
