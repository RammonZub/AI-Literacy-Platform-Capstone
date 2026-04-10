/**
 * AI Skills Building Section Component
 *
 * PURPOSE: Displays the core AI Skills Building modules on the home page
 *
 * Shows the first 4 standard modules (Foundations, Productivity, Prompt Engineering, Content Creation)
 * in a horizontally scrollable layout with a "See All" link to the library.
 *
 * KEY RESPONSIBILITIES:
 * - Display skill-building modules with progress indicators
 * - Horizontal scroll layout for mobile-friendly browsing
 * - Link to full library for complete module listing
 * - Follow same design patterns as other home page sections
 */

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import ModuleCard from "@/components/platform/modules/ModuleCard";
import { getSkillModules } from "@/data/content";
import { useAllProgress } from "@/lib/hooks/useProgress";
import { useUser } from "@/lib/hooks/useUser";
import { platformPaths, platformRoutes } from "@/lib/routes/platform";

/**
 * AISkillsSection Props
 */
interface AISkillsSectionProps {
  /** Optional className for additional styling */
  className?: string;
}

/**
 * AI Skills Building Section Component
 *
 * Displays the 4 core skill-building modules (standard course type)
 * in a horizontally scrollable card grid.
 */
export default function AISkillsSection({ className }: AISkillsSectionProps) {
  const router = useRouter();
  const { user } = useUser();
  const { allModuleProgress } = useAllProgress(user?.id);

  // Default image for modules without one
  const defaultImage = "/images/module-placeholder.jpg";

  /**
   * Lookup table for module progress to drive card indicators.
   */
  const progressByModuleId = React.useMemo(() => {
    const map: Record<string, number> = {};
    for (const progress of allModuleProgress || []) {
      map[progress.moduleId] = progress.percentComplete;
    }
    return map;
  }, [allModuleProgress]);

  // Get the first 4 standard modules (skill-building)
  const skillModules = getSkillModules();

  return (
    <section className={className}>
      {/* Section Header with Title and See All Link */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">AI Skills Building</h2>
        <Link
          href={platformRoutes.library}
          className="text-sm font-medium text-primary hover:underline"
        >
          See All
        </Link>
      </div>

      {/* Horizontal Scrollable Module Cards */}
      <div className="flex gap-4 overflow-x-auto overflow-y-visible pb-4 pt-2 scrollbar-hide -mx-4 px-4">
        {skillModules.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground w-full">
            <p className="text-sm">No skill modules available yet</p>
          </div>
        ) : (
          skillModules.map((module) => (
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
                    (acc, ch) =>
                      acc + ch.lessons.reduce((a, l) => a + (l.estimatedMinutes || 0), 0),
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
                progress={progressByModuleId[module.id]}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
