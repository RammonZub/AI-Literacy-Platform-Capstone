"use client";

/**
 * Quiz Page Client Component
 *
 * PURPOSE: Client-side quiz handling with horizontal step-through UX
 *
 * HANDLES:
 * - Quiz rendering with HorizontalQuiz component
 * - Progress saving via server actions
 * - Navigation back to lesson
 */

import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveQuizProgress } from "@/app/platform/progress/actions";
import { HorizontalQuiz, QuizResults } from "@/components/platform/lessons/quiz";
import type { QuizResultsType } from "@/components/platform/lessons/quiz";
import { platformPaths } from "@/lib/routes/platform";
import { createClient } from "@/lib/supabase/client";
import type { Lesson } from "@/types/content";

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

type QuizCompletionResult = QuizResultsType;

// ============================================================================
// CLIENT COMPONENT
// ============================================================================

export function QuizPageClient({
  lesson,
  chapterId,
  moduleId,
  lessonId,
}: {
  lesson: QuizLesson;
  chapterId: string;
  moduleId: string;
  lessonId: string;
}) {
  const router = useRouter();
  const supabase = createClient();
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<QuizCompletionResult | null>(null);

  // Check if quiz exists
  if (!lesson.quiz) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-foreground font-semibold mb-2">No Quiz Available</p>
          <p className="text-sm text-muted-foreground mb-6">
            This lesson doesn&apos;t have a quiz yet.
          </p>
          <button
            onClick={() => router.push(platformPaths.lesson(moduleId, lessonId))}
            className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-colors"
          >
            Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  /**
   * Handle quiz completion
   */
  const handleComplete = async (quizResults: QuizCompletionResult) => {
    setResults(quizResults);
    setShowResults(true);

    // Get current user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      // Anonymous user - just show results
      return;
    }

    // Save quiz progress
    try {
      await saveQuizProgress({
        moduleId,
        lessonId,
        chapterId,
        quizId: lesson.quiz!.id,
        score: quizResults.score,
        totalQuestions: quizResults.totalQuestions,
        answers: quizResults.answers,
        passed: quizResults.passed,
        xpEarned: quizResults.xpEarned,
      });
    } catch (error) {
      console.error("Failed to save quiz progress:", error);
    }
  };

  /**
   * Handle exit - return to lesson
   */
  const handleExit = () => {
    router.push(platformPaths.lesson(moduleId, lessonId));
  };

  /**
   * Handle retry - reset and restart quiz
   */
  const handleRetry = () => {
    setShowResults(false);
    setResults(null);
  };

  /**
   * Handle continue - return to lesson
   */
  const handleContinue = () => {
    router.push(platformPaths.lesson(moduleId, lessonId));
  };

  /**
   * Handle review mode - show quiz with answers
   */
  const handleReview = () => {
    // Will be implemented with review mode in HorizontalQuiz
    router.push(platformPaths.lesson(moduleId, lessonId));
  };

  // Show results if quiz is complete
  if (showResults && results) {
    return (
      <div className="min-h-screen bg-background">
        <QuizResults
          score={results.score}
          totalQuestions={results.totalQuestions}
          passed={results.passed}
          xpEarned={results.xpEarned}
          incorrectQuestions={results.incorrectQuestions}
          onRetry={lesson.quiz?.retryAllowed !== false ? handleRetry : undefined}
          onContinue={handleContinue}
          onReview={handleReview}
        />
      </div>
    );
  }

  return <HorizontalQuiz quiz={lesson.quiz} onComplete={handleComplete} onExit={handleExit} />;
}
