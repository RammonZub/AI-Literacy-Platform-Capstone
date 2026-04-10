/**
 * Mastery Path Section Component
 *
 * PURPOSE: Display tools-mastery modules on the home page
 *
 * CONTEXT: Part of the platform home page redesign. Shows a horizontal scrollable list of
 * mastery path modules with a section header and "See All" link to the library.
 *
 * KEY RESPONSIBILITIES:
 * - Filter and display modules with courseType 'tools-mastery'
 * - Show progress indicators for each module
 * - Provide navigation to individual modules
 * - Link to full library view
 */

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import ModuleCard from "@/components/platform/modules/ModuleCard";
import { getMasteryModules } from "@/data/content";
import { platformPaths, platformRoutes } from "@/lib/routes/platform";

interface MasteryPathSectionProps {
  /** Progress lookup table mapping moduleId to percentage complete (0-100) */
  progress?: Record<string, number>;
}

/**
 * Mastery Path Section
 *
 * Displays tools-mastery modules in a horizontal scrollable list
 *
 * @param progress - Optional progress mapping for showing completion status
 */
export default function MasteryPathSection({ progress }: MasteryPathSectionProps) {
  const router = useRouter();
  const masteryModules = useMemo(() => getMasteryModules(), []);
  const defaultImage = "/images/module-placeholder.jpg";

  // Early return if no mastery modules exist
  if (masteryModules.length === 0) {
    return null;
  }

  return (
    <section className="mb-8">
      {/* Section Header with See All */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Mastery Path</h2>
        <Link
          href={platformRoutes.library}
          className="text-sm font-medium text-primary hover:underline"
        >
          See All
        </Link>
      </div>

      {/* Horizontal Scrollable Modules */}
      <div className="flex gap-4 overflow-x-auto overflow-y-visible pb-4 pt-2 scrollbar-hide -mx-4 px-4">
        {masteryModules.map((module) => (
          <div key={module.id} className="shrink-0 w-40">
            <ModuleCard
              id={module.id}
              title={module.title}
              description={module.description || ""}
              imageUrl={module.imageUrl || defaultImage}
              onClick={() => router.push(platformPaths.module(module.id))}
              lessonCount={module.chapters?.reduce((acc, ch) => acc + ch.lessons.length, 0) || 0}
              duration={
                module.chapters?.reduce(
                  (acc, ch) => acc + ch.lessons.reduce((a, l) => a + (l.estimatedMinutes || 0), 0),
                  0,
                ) || 0
              }
              xpReward={
                module.chapters?.reduce(
                  (acc, ch) => acc + ch.lessons.reduce((a, l) => a + (l.xpReward || 0), 0),
                  0,
                ) || 0
              }
              chapters={module.chapters}
              progress={progress?.[module.id]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
