/**
 * Module Card Component
 *
 * PURPOSE: Square module card with background image, minimal text overlay, and info modal
 *
 * CONTEXT: Part of the module grid on homepage. Displays module with background
 * image, title, description, and info icon that triggers a modal with more details.
 *
 * KEY RESPONSIBILITIES:
 * - Display module title and description
 * - Show background image with gradient overlay
 * - Info icon in top-right corner triggers modal
 * - Info modal shows module details (lesson count, duration, XP potential)
 * - iOS-inspired design with subtle shadows and borders
 *
 * IMPLEMENTATION NOTES:
 * - Info icon: 20x20px, rounded background, iOS Blue (#007AFF)
 * - Modal shows module information before user commits
 * - Stops propagation on info icon click to prevent card navigation
 */

"use client";

import { Info } from "lucide-react";
import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import InfoModal from "@/components/ui/InfoModal";
import type { Chapter } from "@/types/content";

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
  /** Number of lessons in this module (optional) */
  lessonCount?: number;
  /** Estimated duration in minutes (optional) */
  duration?: number;
  /** Total XP available in this module (optional) */
  xpReward?: number;
  /** Chapter data for dynamic content display */
  chapters?: Chapter[];
  /** Optional overall progress percentage (0-100) for this module */
  progress?: number;
}

export default function ModuleCard({
  id,
  title,
  description,
  imageUrl,
  onClick,
  lessonCount = 0,
  duration = 0,
  xpReward = 0,
  chapters,
  progress,
}: ModuleCardProps) {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const safeProgress =
    typeof progress === "number" ? Math.max(0, Math.min(100, progress)) : undefined;
  const isCompleted = typeof safeProgress === "number" && safeProgress >= 99;

  return (
    <>
      <div
        onClick={onClick}
        className="group relative flex flex-col rounded-lg overflow-hidden cursor-pointer bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200"
        style={{
          height: "240px", // Increased height to accommodate split layout
        }}
      >
        {/* Top Section: Image (1/3 height approx) */}
        <div className="relative h-24 w-full shrink-0 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Subtle overlay for image depth */}
          <div className="absolute inset-0 bg-black/5" />

          {/* Info Icon - Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsInfoModalOpen(true);
            }}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all z-20"
            aria-label="More information"
          >
            <Info className="w-3.5 h-3.5 text-white" strokeWidth={2} />
          </button>
        </div>

        {/* Bottom Section: Content (White background, black text) */}
        <div className="flex flex-col flex-1 p-3 bg-white">
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-tight mb-1">
            {title}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-2 mb-auto">{description}</p>

          {/* Progress Section */}
          <div className="mt-3 pt-3 border-t border-border/50">
            {typeof safeProgress === "number" ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-medium text-muted-foreground">
                  <span>Progress</span>
                  <span>{Math.round(safeProgress)}%</span>
                </div>
                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${isCompleted ? "bg-emerald-500" : "bg-blue-600"}`}
                    style={{ width: `${safeProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{lessonCount} lessons</span>
                <span>{Math.round(duration / 60)}h</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title={title}
        coverImage={imageUrl}
        coverTitle={title}
        description={description}
        details={
          [
            lessonCount > 0 ? `${lessonCount} lessons` : undefined,
            duration > 0 ? `${Math.round(duration / 60)} hours total` : undefined,
            xpReward > 0 ? `${xpReward} XP available` : undefined,
          ].filter(Boolean) as string[]
        }
        footer={
          <div className="space-y-4 pt-2">
            {/* Module Overview */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">About This Module</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>

            {/* What You'll Learn - Dynamic from chapters */}
            {chapters && chapters.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">What You&apos;ll Learn</h4>
                <div className="space-y-2">
                  {chapters.slice(0, 3).map((chapter) => (
                    <div key={chapter.id} className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-0.5">•</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{chapter.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {chapter.lessons.length} lessons •{" "}
                          {chapter.lessons.reduce((acc, l) => acc + (l.estimatedMinutes || 0), 0)}{" "}
                          min
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats - Clean, no colors */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">{lessonCount}</p>
                <p className="text-xs text-muted-foreground">Lessons</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  {Math.round((duration || 0) / 60)}h
                </p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">{xpReward}</p>
                <p className="text-xs text-muted-foreground">XP</p>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}
