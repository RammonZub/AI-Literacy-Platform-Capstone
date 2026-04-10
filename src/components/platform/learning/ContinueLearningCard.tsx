/**
 * Continue Learning Card Component
 *
 * Displays either a continue-state course or a recommended course.
 * Uses the same visual direction as the challenge hero card for consistency.
 */

import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import React from "react";
import type { Module } from "@/types/content";

interface ContinueLearningCardProps {
  module: Module;
  state?: "continue" | "recommended";
  progress: number; // 0-100
  onClick: () => void;
  className?: string;
}

export default function ContinueLearningCard({
  module,
  state = "recommended",
  progress,
  onClick,
  className = "",
}: ContinueLearningCardProps) {
  const safeProgress = Math.max(0, Math.min(100, progress));
  const isContinue = state === "continue";
  const lessonsCount =
    module.chapters?.reduce((acc, chapter) => acc + chapter.lessons.length, 0) || 0;
  const progressText = safeProgress >= 100 ? "Completed" : `${Math.round(safeProgress)}% Complete`;
  const actionText = isContinue ? "Resume Course" : "Start Course";
  const badgeText = isContinue ? "Continue Course" : "Recommended Course";

  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col rounded-xl overflow-hidden cursor-pointer bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300 min-h-[272px] ${className}`}
    >
      <div className="relative h-36 w-full shrink-0 overflow-hidden">
        {module.imageUrl ? (
          <Image
            src={module.imageUrl}
            alt={module.title}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${module.color.from}, ${module.color.to})`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-white/90" />
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      <div className="flex-1 flex flex-col p-5 bg-white relative">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase">
            {badgeText}
          </span>
          <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
            {actionText} <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="mb-auto">
          <h3 className="text-xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
            {module.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {module.description}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-border/50">
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden mb-2">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${safeProgress}%`,
                backgroundColor: module.color.to,
              }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-foreground">
              {isContinue && safeProgress === 0 ? "In Progress" : progressText}
            </span>
            <span className="text-muted-foreground">{lessonsCount} lessons</span>
          </div>
        </div>
      </div>
    </div>
  );
}
