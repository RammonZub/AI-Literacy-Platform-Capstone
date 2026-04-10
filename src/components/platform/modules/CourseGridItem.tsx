/**
 * Course Grid Item Component
 *
 * Grid item for displaying courses in the library.
 * Shows module image, title, and lesson count.
 */

import React from "react";
import { shadows } from "@/data/design/tokens";
import type { Module } from "@/types/content";

interface CourseGridItemProps {
  module: Module;
  onClick: () => void;
  className?: string;
}

export default function CourseGridItem({ module, onClick, className = "" }: CourseGridItemProps) {
  const totalLessons = module.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden cursor-pointer active:scale-[0.98] transition-all ${className}`}
      style={{ aspectRatio: "1", boxShadow: shadows.md }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${module.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-base mb-1">{module.title}</h3>
        <p className="text-white text-xs">{totalLessons} lessons</p>
      </div>
    </div>
  );
}
