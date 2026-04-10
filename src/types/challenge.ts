/**
 * Challenge Types
 *
 * PURPOSE: Type definitions for lesson challenges and challenge progress tracking
 *
 * WHY THIS EXISTS:
 * - Separates challenge concerns from general content types
 * - Provides type safety for challenge data structures
 * - Enables dedicated challenge pages with completion tracking
 *
 * ARCHITECTURE NOTES:
 * - LessonChallenge is attached to lessons via lesson.challenge field
 * - Challenges focus on actionable tasks with deliverables
 * - Progress tracking includes optional user notes
 *
 * USAGE:
 * ```tsx
 * import type { LessonChallenge, ChallengeProgress } from '@/types/challenge'
 * ```
 */

/**
 * Lesson challenge definition
 *
 * PURPOSE: Actionable task/challenge attached to a lesson
 *
 * DESIGN NOTES:
 * - Attached to lessons via optional lesson.challenge field
 * - purpose explains WHY this challenge matters
 * - instructions are step-by-step guidance
 * - deliverable defines what user produces
 * - successCriteria are measurable outcomes
 * - xpReward is optional for gamification
 *
 * COMPLETION REQUIREMENTS:
 * - User must complete challenge to finish lesson (if present)
 * - User can optionally add notes about their experience
 * - Progress tracked in challenge_progress table
 *
 * @example
 * const challenge: LessonChallenge = {
 *   id: 'lesson1-challenge',
 *   title: 'Craft Your First Prompt',
 *   purpose: 'Apply what you learned about prompt structure to create an effective prompt',
 *   instructions: [
 *     'Choose a task you want help with',
 *     'Write a prompt using the CONTEXT-GOAL-CONSTRAINTS framework',
 *     'Test your prompt with ChatGPT or Claude',
 *     'Refine based on the output'
 *   ],
 *   deliverable: 'A working prompt that produces useful results',
 *   estimatedTime: '15-20 minutes',
 *   starterPrompt: 'Help me write a prompt for...',
 *   successCriteria: [
 *     'Prompt includes clear context',
 *     'Goal is explicitly stated',
 *     'At least one constraint is specified',
 *     'AI output meets your needs'
 *   ],
 *   xpReward: 75
 * }
 */
export interface LessonChallenge {
  /** Unique challenge identifier */
  id: string;

  /** Challenge title displayed on challenge page */
  title: string;

  /** Why this challenge matters (learning value) */
  purpose: string;

  /** Step-by-step instructions for completing the challenge */
  instructions: string[];

  /** What the user should produce or accomplish */
  deliverable: string;

  /** Optional estimated time (not displayed) */
  estimatedTime?: string;

  /** Optional starting prompt to help users begin */
  starterPrompt?: string;

  /** Measurable criteria for successful completion */
  successCriteria: string[];

  /** Optional XP reward for completion */
  xpReward?: number;

  /** Difficulty level: 'Beginner' | 'Intermediate' | 'Advanced' */
  level?: string;

  /** Main skill being practiced */
  skill?: string;

  /** What the user will focus on */
  focus?: string;

  /** Future: Support for evidence uploads */
  // evidenceUpload?: boolean
}

/**
 * Challenge progress tracking
 *
 * PURPOSE: User's completion record for a specific challenge
 *
 * DESIGN NOTES:
 * - Stored in challenge_progress table with RLS
 * - notes are optional user reflections on their experience
 * - Unique constraint on (user_id, lesson_id, challenge_id)
 * - completedAt is set when user marks challenge complete
 *
 * USAGE:
 * - Created when user completes challenge
 * - Cannot be "uncompleted" - permanent record
 * - Used for challenge portfolio display
 *
 * @example
 * const progress: ChallengeProgress = {
 *   lessonId: 'lesson1',
 *   moduleId: 'module1',
 *   challengeId: 'lesson1-challenge',
 *   notes: 'I used the prompt to write a blog post outline. Worked great!',
 *   completedAt: new Date('2026-02-23T11:00:00Z')
 * }
 */
export interface ChallengeProgress {
  /** Lesson identifier */
  lessonId: string;

  /** Module identifier */
  moduleId: string;

  /** Challenge identifier from LessonChallenge.id */
  challengeId: string;

  /** Optional user notes about their experience */
  notes?: string;

  /** When challenge was completed */
  completedAt: Date;

  /** Future: URLs to evidence uploads */
  // evidenceUrls?: string[]
}
