/**
 * Journey Header Component
 *
 * Sticky header for module journey page.
 * Shows back button and progress bar, hides on scroll down, shows on scroll up.
 */

"use client";

import React from "react";
import ProgressBar from "@/components/ui/ProgressBar";

interface JourneyHeaderProps {
  onBack: () => void;
  progress: {
    completed: number;
    total: number;
  };
  scrolled?: boolean;
  className?: string;
}

export default function JourneyHeader({
  onBack,
  progress,
  scrolled = false,
  className = "",
}: JourneyHeaderProps) {
  return (
    <div
      className={`sticky top-0 z-50 bg-card border-b border-border transition-all ${scrolled ? "shadow-sm" : ""} ${className}`}
    >
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Go back"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex-1">
            <ProgressBar value={progress.completed} max={progress.total} size="sm" color="black" />
          </div>

          <span className="text-sm font-medium text-muted-foreground min-w-[40px] text-right">
            {progress.completed}/{progress.total}
          </span>
        </div>
      </div>
    </div>
  );
}
