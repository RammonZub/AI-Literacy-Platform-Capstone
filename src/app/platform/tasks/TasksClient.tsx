/**
 * Tasks Client Component
 *
 * PURPOSE: Client component for task portfolio with Course-based navigation
 *
 * REDESIGN:
 * - View 1: Grid of Courses (Modules) that have completed tasks
 * - View 2: List of tasks for a selected course
 * - Cleaner UI, less emojis, better hierarchy
 * - Search filter for tasks
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import PlatformPageShell from "@/components/layout/PlatformPageShell";

/**
 * Task card data with lesson details
 */
export interface TaskCardData {
  id: string;
  lessonId: string;
  moduleId: string;
  title: string;
  purpose: string;
  estimatedTime: string;
  completedAt: string;
  notes?: string | null;
  xpReward?: number;
  moduleTitle?: string;
  moduleDescription?: string;
  moduleImageUrl?: string;
  lessonTitle?: string;
}

interface TasksClientProps {
  tasks: TaskCardData[];
  totalCompleted: number;
  totalXP: number;
}

export default function TasksClient({
  tasks,
  totalCompleted,
  totalXP,
}: TasksClientProps) {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Derived: Unique Modules
  const modules = useMemo(() => {
    const map = new Map<
      string,
      {
        id: string;
        title: string;
        description?: string;
        imageUrl?: string;
        taskCount: number;
        lastCompletedAt: string;
      }
    >();

    tasks.forEach((task) => {
      if (!task.moduleId || !task.moduleTitle) return;

      if (!map.has(task.moduleId)) {
        map.set(task.moduleId, {
          id: task.moduleId,
          title: task.moduleTitle,
          description: task.moduleDescription,
          imageUrl: task.moduleImageUrl,
          taskCount: 0,
          lastCompletedAt: task.completedAt,
        });
      }

      const mod = map.get(task.moduleId)!;
      mod.taskCount++;
      if (new Date(task.completedAt) > new Date(mod.lastCompletedAt)) {
        mod.lastCompletedAt = task.completedAt;
      }
    });

    return Array.from(map.values()).sort(
      (a, b) =>
        new Date(b.lastCompletedAt).getTime() -
        new Date(a.lastCompletedAt).getTime(),
    );
  }, [tasks]);

  // Derived: Tasks for selected module
  const moduleTasks = useMemo(() => {
    if (!selectedModuleId) return [];
    return tasks
      .filter((t) => t.moduleId === selectedModuleId)
      .filter((t) => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return (
          t.title.toLowerCase().includes(q) ||
          t.purpose.toLowerCase().includes(q) ||
          t.lessonTitle?.toLowerCase().includes(q)
        );
      })
      .sort(
        (a, b) =>
          new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime(),
      );
  }, [tasks, selectedModuleId, searchQuery]);

  const selectedModule = modules.find((m) => m.id === selectedModuleId);

  // Format completion date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <PlatformPageShell>
      {/* View Switcher */}
      <AnimatePresence mode="wait">
        {!selectedModuleId ? (
          /* MODULES GRID VIEW */
          <motion.div
            key="modules"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-foreground">
                Task Portfolio
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Your completed work organized by course
              </p>
            </header>

            {/* Global Stats - Cleaner */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 p-4 bg-card border border-border rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                <span className="text-3xl font-bold text-primary">
                  {totalCompleted}
                </span>
                <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                  Completed
                </span>
              </div>
              <div className="flex-1 p-4 bg-card border border-border rounded-xl shadow-sm flex flex-col items-center justify-center gap-1">
                <span className="text-3xl font-bold text-emerald-600">
                  {totalXP}
                </span>
                <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                  Total XP
                </span>
              </div>
            </div>

            {modules.length === 0 ? (
              <div className="text-center py-12 bg-muted/30 rounded-2xl border border-dashed border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">
                  No tasks completed yet
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Start a course to build your portfolio
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setSelectedModuleId(module.id)}
                    className="group relative w-full text-left bg-card hover:bg-muted/30 border border-border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md hover:border-primary/30"
                  >
                    <div className="flex">
                      {/* Image Strip */}
                      <div className="w-24 bg-muted relative shrink-0">
                        {module.imageUrl ? (
                          <Image
                            src={module.imageUrl}
                            alt={module.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                              {module.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                              {module.description || "View completed tasks"}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>

                        <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                            <CheckCircle2 className="w-3 h-3" />
                            {module.taskCount} Tasks
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(module.lastCompletedAt)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          /* TASKS LIST VIEW */
          <motion.div
            key="tasks"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 pb-4 pt-2">
              <button
                onClick={() => {
                  setSelectedModuleId(null);
                  setSearchQuery("");
                }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Courses
              </button>

              <div className="flex items-center gap-4 mb-4">
                {selectedModule?.imageUrl && (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-border">
                    <Image
                      src={selectedModule.imageUrl}
                      alt={selectedModule.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-xl font-bold text-foreground leading-tight">
                    {selectedModule?.title}
                  </h1>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {moduleTasks.length} Completed Tasks
                  </p>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-secondary rounded-xl text-sm border-transparent focus:bg-background focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                />
              </div>
            </div>

            {/* Task List */}
            <div className="space-y-4 pb-8">
              {moduleTasks.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No tasks match your search.</p>
                </div>
              ) : (
                moduleTasks.map((task) => (
                  <Link
                    key={`${task.lessonId}-${task.id}`}
                    href={`/platform/module/${task.moduleId}/lesson/${task.lessonId}/task`}
                    className="block group"
                  >
                    <div className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-md transition-all duration-200">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          {task.lessonTitle && (
                            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                              {task.lessonTitle}
                            </div>
                          )}
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {task.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {task.purpose}
                          </p>
                        </div>
                        {task.xpReward && (
                          <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md shrink-0">
                            +{task.xpReward} XP
                          </div>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/50">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {task.estimatedTime}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(task.completedAt)}
                          </span>
                        </div>
                        {task.notes && (
                          <div className="flex items-center gap-1 text-xs font-medium text-primary">
                            <FileText className="w-3.5 h-3.5" />
                            Notes
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PlatformPageShell>
  );
}
