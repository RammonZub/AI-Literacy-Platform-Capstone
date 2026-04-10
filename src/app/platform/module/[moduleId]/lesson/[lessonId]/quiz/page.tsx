/**
 * Quiz Page
 *
 * PURPOSE: Dedicated page for lesson quizzes with horizontal step-through UX
 *
 * CONTEXT: Separates quiz functionality from lesson content pages. Provides a focused
 * assessment environment with horizontal card-based navigation.
 *
 * ARCHITECTURE:
 * - Server component (this file) handles metadata and data fetching
 * - Client component (QuizPageClient) handles interactivity
 *
 * @see /lesson/[lessonId]/page.tsx - Lesson content page
 * @see /lesson/[lessonId]/challenge/page.tsx - Challenge page (parallel structure)
 */

import { notFound } from "next/navigation";
import { getModuleById } from "@/data/content";
import type { Lesson } from "@/types/content";
import { QuizPageClient } from "./QuizPageClient";

// ============================================================================
// TYPES
// ============================================================================

interface QuizLesson extends Lesson {
  quiz?: {
    id: string;
    title?: string;
    description?: string;
    questions: Array<{
      id: string;
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
      hint?: string;
      context?: string;
    }>;
    passingScore?: number;
    xpReward?: number;
    retryAllowed?: boolean;
  };
}

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Find a lesson + its chapterId within a module
 */
function locateLesson(
  moduleId: string,
  lessonId: string,
): { lesson: Lesson; chapterId: string } | null {
  const moduleData = getModuleById(moduleId);
  if (!moduleData) return null;

  for (const chapter of moduleData.chapters) {
    const lesson = chapter.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, chapterId: chapter.id };
  }

  return null;
}

// ============================================================================
// SERVER COMPONENT
// ============================================================================

/**
 * Quiz Page - Server Component
 *
 * Fetches lesson data and renders the quiz interface.
 */
export default async function QuizPage({
  params,
}: {
  params: Promise<{ moduleId: string; lessonId: string }>;
}) {
  const { moduleId, lessonId } = await params;

  // Load lesson from TypeScript content
  const located = locateLesson(moduleId, lessonId);

  if (!located) {
    notFound();
  }

  const { lesson, chapterId } = located;

  // Render client component
  return (
    <QuizPageClient
      lesson={lesson as QuizLesson}
      chapterId={chapterId}
      moduleId={moduleId}
      lessonId={lessonId}
    />
  );
}

// ============================================================================
// METADATA
// ============================================================================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ moduleId: string; lessonId: string }>;
}) {
  const { moduleId, lessonId } = await params;

  const located = locateLesson(moduleId, lessonId);

  if (!located) {
    return {
      title: "Quiz Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { lesson } = located;

  return {
    title: `Quiz: ${lesson.title}`,
    description: lesson.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}
