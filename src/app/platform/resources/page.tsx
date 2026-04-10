"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import PlatformPageShell from "@/components/layout/PlatformPageShell";
import ModuleCard from "@/components/platform/modules/ModuleCard";
import { modules } from "@/data/content";
import { platformPaths } from "@/lib/routes/platform";
import { resourceRoutes } from "@/lib/routes/resources";

export default function ResourcesPage() {
  const router = useRouter();
  const defaultImage = "/images/module-placeholder.jpg";

  return (
    <PlatformPageShell>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Resources</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Explore our courses and learning materials.
        </p>
      </header>

      {/* Featured Courses */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Featured Courses</h2>
        <div className="grid grid-cols-2 gap-4">
          {modules.slice(0, 4).map((module) => (
            <ModuleCard
              key={module.id}
              id={module.id}
              title={module.title}
              description={module.description || ""}
              imageUrl={module.imageUrl || defaultImage}
              onClick={() => router.push(platformPaths.module(module.id))}
              lessonCount={
                module.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0) || 0
              }
              duration={
                module.chapters.reduce(
                  (acc, ch) =>
                    acc +
                    ch.lessons.reduce(
                      (lessonAcc, lesson) =>
                        lessonAcc + (lesson.estimatedMinutes || 0),
                      0,
                    ),
                  0,
                ) || 0
              }
              xpReward={
                module.chapters.reduce(
                  (acc, ch) =>
                    acc +
                    ch.lessons.reduce(
                      (lessonAcc, lesson) => lessonAcc + (lesson.xpReward || 0),
                      0,
                    ),
                  0,
                ) || 0
              }
              chapters={module.chapters}
            />
          ))}
        </div>
      </section>

      {/* Prompt Library */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-3">
          Prompt Library
        </h2>
        <Link
          href={resourceRoutes.prompts}
          className="block rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-all"
        >
          <p className="text-sm font-semibold text-foreground">
            Browse AI Prompts
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Access the full prompt library for reusable templates.
          </p>
        </Link>
      </section>
    </PlatformPageShell>
  );
}
