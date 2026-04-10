/**
 * Tasks Portfolio Page
 *
 * PURPOSE: Portfolio view of all completed tasks with filtering and sorting
 *
 * CONTEXT: Part of the unified task system. This page displays all tasks
 * the user has completed in a grid layout with stats.
 *
 * KEY RESPONSIBILITIES:
 * - Fetch all completed tasks from Supabase
 * - Display stats summary (total completed)
 * - Grid of task cards linking back to original tasks
 * - Filter by module (optional)
 * - Sort by completion date
 * - Empty state when no tasks completed
 *
 * IMPLEMENTATION NOTES:
 * - Server component with data fetching on the server
 * - Uses getAllTaskProgress for data
 * - Fetches lesson data to get task details
 * - Uses iOS Blue (#007AFF) as primary color
 * - Matches design patterns from ChallengesClient
 *
 * DEPENDENCIES:
 * - next/navigation: Routing
 * - @/app/platform/progress/task-actions: Task progress data
 * - @/data/content: Lesson content for task details
 * - @/lib/routes/platform: Route helpers
 *
 * @module app/platform/tasks
 * @created 2026-02-23
 */

import { redirect } from "next/navigation";
import { getAllTaskProgress } from "@/app/platform/progress/actions";
import { getLessonById, getModuleById } from "@/data/content";
import { createClient } from "@/lib/supabase/server";
import TasksClient, { type TaskCardData } from "./TasksClient";

/**
 * Tasks page server component
 */
export default async function TasksPage() {
  const supabase = await createClient();

  // Check authentication
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch all completed tasks
  let taskProgress: TaskCardData[] = [];
  try {
    const progress = await getAllTaskProgress();

    // Enrich with lesson and module data
    taskProgress = progress.map((p) => {
      const lesson = getLessonById(p.moduleId, p.lessonId);
      const courseModule = getModuleById(p.moduleId);

      // Extract task data from lesson sections
      let taskTitle = "Task";
      let taskPurpose = "Complete this task to practice what you learned.";
      let estimatedTime = "10-15 minutes";

      if (lesson?.sections) {
        const taskSection = lesson.sections.find(
          (s) => s.type === "actionableTask" || s.type === "actionableChallenge",
        );
        if (taskSection) {
          const content = taskSection.content as {
            title: string;
            purpose: string;
            estimatedTime: string;
          };
          taskTitle = content.title;
          taskPurpose = content.purpose;
          estimatedTime = content.estimatedTime;
        }
      }

      // Also check lesson.task and lesson.challenge fields
      const taskDef = lesson?.task || lesson?.challenge;
      if (taskDef) {
        taskTitle = taskDef.title;
        taskPurpose = taskDef.purpose;
        estimatedTime = taskDef.estimatedTime || estimatedTime;
      }

      return {
        id: p.taskId,
        lessonId: p.lessonId,
        moduleId: p.moduleId,
        title: taskTitle,
        purpose: taskPurpose,
        estimatedTime,
        completedAt: p.completedAt?.toISOString() || new Date().toISOString(),
        notes: p.notes,
        xpReward: lesson?.xpReward || 50,
        moduleTitle: courseModule?.title,
        moduleDescription: courseModule?.description,
        moduleImageUrl: courseModule?.imageUrl,
        lessonTitle: lesson?.title,
      };
    });
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    taskProgress = [];
  }

  // Calculate stats
  const totalCompleted = taskProgress.length;
  const totalXP = taskProgress.reduce((sum, card) => sum + (card.xpReward || 0), 0);

  return <TasksClient tasks={taskProgress} totalCompleted={totalCompleted} totalXP={totalXP} />;
}
