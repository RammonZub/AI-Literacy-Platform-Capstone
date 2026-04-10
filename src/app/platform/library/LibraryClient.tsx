"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import ModuleCard from "@/components/platform/modules/ModuleCard";
import { modules } from "@/data/content";
import { useAllProgress } from "@/lib/hooks/useProgress";
import { useUser } from "@/lib/hooks/useUser";
import { platformPaths } from "@/lib/routes/platform";
import { cn } from "@/lib/utils";
import type { Module } from "@/types/content";

interface LibraryClientProps {
  defaultImage: string;
}

export default function LibraryClient({ defaultImage }: LibraryClientProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useUser();
  const { allModuleProgress } = useAllProgress(user?.id);

  const progressByModuleId = useMemo(() => {
    const map: Record<string, number> = {};
    for (const progress of allModuleProgress || []) {
      map[progress.moduleId] = progress.percentComplete;
    }
    return map;
  }, [allModuleProgress]);

  const filteredModules = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return modules;

    return modules.filter(
      (module) =>
        module.title.toLowerCase().includes(query) ||
        (module.description?.toLowerCase().includes(query) ?? false),
    );
  }, [searchQuery]);

  return (
    <>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder="Search modules..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={cn(
            "w-full pl-10 pr-4 py-3 rounded-xl",
            "bg-card text-foreground placeholder:text-muted-foreground",
            "border border-border shadow-sm",
            "focus:ring-2 focus:ring-primary/20 focus:border-primary",
            "transition-all duration-200 outline-none",
          )}
        />
      </div>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          {searchQuery.trim().length > 0 ? "Search results" : "All modules"}
        </h2>

        {filteredModules.length === 0 ? (
          <div className="text-center py-16 bg-muted/30 rounded-2xl border border-dashed border-border">
            <p className="text-lg font-medium text-foreground">No modules found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Try a different search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredModules.map((module: Module) => (
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
                progress={progressByModuleId[module.id]}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
