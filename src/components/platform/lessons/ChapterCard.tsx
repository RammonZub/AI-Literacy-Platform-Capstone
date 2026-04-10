/**
 * Chapter Card Component
 *
 * PURPOSE: Unit separator between lessons in module journey with 3D shadow effect
 *
 * CONTEXT: Displays chapter/unit information to break up the lesson list
 * and provide context about the current section of the course.
 *
 * KEY RESPONSIBILITIES:
 * - Display unit number (order)
 * - Show chapter title
 * - Use beige/cream theme colors
 * - iOS Blue 3D shadow effect with hover lift
 * - Minimal, clean design
 *
 * IMPLEMENTATION NOTES:
 * - Updated to use beige/cream theme colors
 * - iOS Blue accent for unit label (#007AFF)
 * - iOS Blue hard offset shadow (3px 3px 0px 0px) for consistency
 * - Border uses iOS blue tint for brand alignment
 * - Hover lift effect (-translate-y-0.5) with shadow expansion
 * - Serif font for title
 */

import React from "react";
import { shadows } from "@/data/design/tokens";

/**
 * Chapter interface matching API response structure
 * May have optional order if provided by API
 */
interface Chapter {
  id: string;
  title: string;
  order?: number;
}

interface ChapterCardProps {
  chapter: Chapter;
  chapterIndex?: number; // Fallback for order if not provided
  className?: string;
}

export default function ChapterCard({ chapter, chapterIndex, className = "" }: ChapterCardProps) {
  // Use chapter.order if available, otherwise use chapterIndex + 1
  const order = chapter.order ?? (chapterIndex !== undefined ? chapterIndex + 1 : 1);

  return (
    <div
      className={`
        relative bg-card rounded-xl px-6 py-3 border border-gray-200
        max-w-xs mx-auto my-6
        border-b-[6px]
        transition-all duration-200 ease-out
        ${className}
      `}
      style={{
        borderBottomColor: "#A0A0A8",
        boxShadow: "3px 3px 0px 0px rgba(0, 0, 0, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderBottomColor = "#808088";
        e.currentTarget.style.boxShadow = "4px 4px 0px 0px rgba(0, 0, 0, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderBottomColor = "#A0A0A8";
        e.currentTarget.style.boxShadow = "3px 3px 0px 0px rgba(0, 0, 0, 0.08)";
      }}
    >
      <div className="text-center">
        {/* Unit Label - iOS Blue Accent */}
        <div className="text-[10px] font-bold text-[#007AFF] uppercase tracking-wider mb-0.5">
          UNIT {order}
        </div>
        {/* Chapter Title - Serif */}
        <h3 className="text-base font-bold font-serif text-foreground">{chapter.title}</h3>
      </div>
    </div>
  );
}
