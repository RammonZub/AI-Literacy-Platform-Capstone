"use client";

/**
 * Task Page Route
 *
 * PURPOSE: Dedicated page for lesson tasks with completion tracking
 *
 * CONTEXT: Part of the unified task system. Tasks were previously called
 * "challenges" but have been renamed to better reflect their purpose.
 *
 * KEY RESPONSIBILITIES:
 * - Fetch lesson data from TypeScript content files
 * - Extract task data from lesson sections (actionableTask type)
 * - Check user's task completion status
 * - Render TaskView component with all data
 * - Handle completion state
 *
 * IMPLEMENTATION NOTES:
 * - Client component that handles routing and data fetching
 * - Converts ActionableTaskSectionContent to TaskData format
 * - Uses getTaskProgress to check completion status
 * - Task ID is derived from lessonId for uniqueness
 *
 * DEPENDENCIES:
 * - next/navigation: Routing + params
 * - @/types/content: TypeScript interfaces for Lesson, LessonSection
 * - @/data/content: TypeScript lesson content
 * - @/app/platform/progress/task-actions: Progress tracking
 * - @/components/platform/lessons/task: TaskView component
 *
 * @module app/platform/module/[moduleId]/lesson/[lessonId]/task
 * @created 2026-02-23
 */

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { completeLesson, completeTask, getTaskProgress } from "@/app/platform/progress/actions";
import type { TaskData } from "@/components/platform/lessons/task";
import { TaskView } from "@/components/platform/lessons/task";
import { getModuleById } from "@/data/content";
import { getNextLessonId } from "@/lib/utils/lesson-navigation";
import type { Lesson, LessonSection } from "@/types/content";

/**
 * Find a lesson + its chapterId within a module
 */
function locateLesson(
  moduleId: string,
  lessonId: string,
): { lesson: Lesson; chapterId: string } | null {
  const courseModule = getModuleById(moduleId);
  if (!courseModule) return null;

  for (const chapter of courseModule.chapters) {
    const lesson = chapter.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, chapterId: chapter.id };
  }

  return null;
}

/**
 * Extract task data from lesson
 *
 * Looks for task data in this order:
 * 1. lesson.task field (new unified task system)
 * 2. lesson.challenge field
 * 3. actionableTask section in lesson.sections
 */
function extractTaskFromLesson(lesson: Lesson): TaskData | null {
  // Check for new unified task field
  if (lesson.task) {
    return {
      id: lesson.task.id,
      title: lesson.task.title,
      purpose: lesson.task.purpose,
      instructions: lesson.task.instructions,
      deliverable: lesson.task.deliverable,
      estimatedTime: lesson.task.estimatedTime,
      starterPrompt: lesson.task.starterPrompt,
      successCriteria: lesson.task.successCriteria,
      xpReward: lesson.task.xpReward,
      level: lesson.task.level,
      skill: lesson.task.skill,
      focus: lesson.task.focus,
    };
  }

  // Check for challenge field
  if (lesson.challenge) {
    return {
      id: lesson.challenge.id,
      title: lesson.challenge.title,
      purpose: lesson.challenge.purpose,
      instructions: lesson.challenge.instructions,
      deliverable: lesson.challenge.deliverable,
      estimatedTime: lesson.challenge.estimatedTime,
      starterPrompt: lesson.challenge.starterPrompt,
      successCriteria: lesson.challenge.successCriteria,
      xpReward: lesson.challenge.xpReward,
      level: lesson.challenge.level,
      skill: lesson.challenge.skill,
      focus: lesson.challenge.focus,
    };
  }

  // Check for actionableTask section in lesson.sections
  if (lesson.sections && lesson.sections.length > 0) {
    const taskSection = lesson.sections.find(
      (
        section,
      ): section is LessonSection & {
        content: {
          title: string;
          purpose: string;
          instructions: string[];
          deliverable: string;
          estimatedTime: string;
          starterPrompt?: string;
          successCriteria?: string[];
        };
      } => section.type === "actionableTask" || section.type === "actionableChallenge",
    );

    if (taskSection) {
      const content = taskSection.content as {
        title: string;
        purpose: string;
        instructions: string[];
        deliverable: string;
        estimatedTime: string;
        starterPrompt?: string;
        successCriteria?: string[];
      };

      return {
        id: `task-${lesson.id}`,
        title: content.title,
        purpose: content.purpose,
        instructions: content.instructions,
        deliverable: content.deliverable,
        estimatedTime: content.estimatedTime,
        starterPrompt: content.starterPrompt,
        successCriteria: content.successCriteria || [],
        xpReward: lesson.xpReward || 50,
      };
    }
  }

  return null;
}

/**
 * Task page client component
 */
export default function TaskPage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;

  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState<TaskData | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [existingNotes, setExistingNotes] = useState("");
  const [nextLessonId, setNextLessonId] = useState<string | null>(null);
  const [lessonChapterId, setLessonChapterId] = useState<string>("");

  useEffect(() => {
    async function loadTask() {
      setLoading(true);

      // Load lesson from TypeScript content
      const located = locateLesson(moduleId, lessonId);

      if (!located) {
        setLoading(false);
        return;
      }

      const { lesson, chapterId } = located;
      setLessonChapterId(chapterId);

      // Extract task data from lesson
      const task = extractTaskFromLesson(lesson);

      if (!task) {
        setLoading(false);
        return;
      }

      setTaskData(task);

      // Calculate next lesson ID
      const nextId = getNextLessonId(moduleId, lessonId);
      setNextLessonId(nextId);

      // Check task completion status
      try {
        const progress = await getTaskProgress({
          lessonId,
          taskId: task.id,
        });

        if (progress) {
          setIsCompleted(true);
          setExistingNotes(progress.notes || "");
        }
      } catch (error) {
        // User might not be authenticated - that's ok, they can view the task
        console.warn("Could not fetch task progress:", error);
      }

      setLoading(false);
    }

    loadTask();
  }, [moduleId, lessonId]);

  /**
   * Handle task completion.
   *
   * After marking the task complete, also auto-completes the parent lesson
   * (fire-and-forget). The completeLesson RPC is idempotent so it's safe to
   * call even if the user already completed the lesson via the article flow.
   */
  const handleComplete = async (notes?: string) => {
    if (!taskData) return;

    try {
      const result = await completeTask({
        moduleId,
        lessonId,
        chapterId: lessonChapterId || undefined,
        taskId: taskData.id,
        notes,
      });
      if (result.success) {
        setIsCompleted(true);
        setExistingNotes(notes || "");
        // Auto-complete the parent lesson — idempotent, safe if already done
        void completeLesson({
          lessonId,
          moduleId,
          chapterId: lessonChapterId,
          xp: 50,
        });
      }
    } catch (error) {
      console.error("Failed to complete task:", error);
    }
  };

  /**
   * Handle back navigation
   */
  const handleBack = () => {
    router.push(`/platform/module/${moduleId}/lesson/${lessonId}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="h-full bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading task...</div>
      </div>
    );
  }

  // No task found
  if (!taskData) {
    return (
      <div className="h-full bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-foreground font-semibold mb-2">No Task Available</p>
          <p className="text-sm text-muted-foreground mb-6">
            This lesson doesn&apos;t have a task yet.
          </p>
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-colors"
          >
            Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-background overflow-y-auto">
      <TaskView
        task={taskData}
        lessonId={lessonId}
        moduleId={moduleId}
        isCompleted={isCompleted}
        existingNotes={existingNotes}
        onComplete={handleComplete}
        onBack={handleBack}
        nextLessonId={nextLessonId}
      />
    </div>
  );
}
