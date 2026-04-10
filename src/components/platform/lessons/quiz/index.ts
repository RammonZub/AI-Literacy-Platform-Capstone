/**
 * Quiz Components Index
 *
 * PURPOSE: Centralized exports for quiz-related components
 *
 * EXPORTS:
 * - HorizontalQuiz: Step-by-step horizontal quiz component
 * - QuizResults: Quiz results display component
 * - QuizQuestion, LessonQuiz, QuizResults: Type definitions
 *
 * @see HorizontalQuiz.tsx - Main quiz component
 * @see QuizResults.tsx - Results display component
 */

// Type exports
export type {
  LessonQuiz,
  QuizQuestion,
  QuizResults as QuizResultsType,
} from "./HorizontalQuiz";
export { HorizontalQuiz } from "./HorizontalQuiz";
export { QuizResults } from "./QuizResults";
