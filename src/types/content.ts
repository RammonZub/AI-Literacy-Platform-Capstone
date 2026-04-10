/**
 * Content Type Definitions
 *
 * Type definitions for lesson/module content.
 * Includes modules, chapters, lessons, slides, challenges, and user progress tracking.
 */

// Import article lesson types for use in Lesson interface
import type {
  LessonSection,
  LessonSectionContent,
  LessonSectionType,
} from "@/components/platform/lessons/article";
import type { LessonChallenge } from "@/types/challenge";
// Import LessonStatus from centralized types/progress for use in interfaces
import type { LessonStatus } from "@/types/progress";
// Import lesson quiz and challenge types
import type { LessonQuiz } from "@/types/quiz";

// Import lesson task type
import type { LessonTask } from "@/types/task";

// Re-export for central import location
export type {
  LessonSection,
  LessonSectionContent,
  LessonSectionType,
} from "@/components/platform/lessons/article";
export type { LessonChallenge } from "@/types/challenge";
// Re-export LessonStatus from centralized types/progress
export type { LessonStatus } from "@/types/progress";
// Re-export lesson quiz and challenge types for convenience
export type { LessonQuiz } from "@/types/quiz";

// Re-export lesson task type for convenience
export type { LessonTask } from "@/types/task";

/**
 * Step item for workflow and step-action slides
 */
export interface StepItem {
  number?: number;
  label: string;
  detail?: string;
  icon?: string;
  completed?: boolean; // Whether this step is completed (for step-action slides)
}

/**
 * Available slide types for lesson content
 */
export type SlideType =
  | "visual" // Visual slides: cover, quotes, images with gradients
  | "content" // Content slides: text, lists, key points
  | "input"; // Interactive input slides

/**
 * Module categories for organization
 */
export type ModuleCategory = "AI Tools" | "Skills" | "Productivity" | "Strategy" | "Challenge";

/**
 * Module course types - defines the learning format/purpose
 */
export type ModuleCourseType =
  | "standard" // Regular module with lessons
  | "challenge" // Time-bound challenge (e.g., 28-day)
  | "tools-mastery" // Focused on mastering specific tools
  | "skills" // Skill-building course
  | "certification" // Prep for certification
  | "workshop"; // Hands-on workshop format

/**
 * Individual lesson slide with flexible content structure
 */
export interface LessonSlide {
  id: string;
  type: SlideType;
  order: number;
  variant?:
    | "cover"
    | "quote"
    | "text"
    | "list"
    | "complete"
    | "transition"
    | "interactive"
    | "comparison" // Side-by-side comparison
    | "cards" // Horizontal scrolling cards
    | "grid-cards" // Grid layout cards
    | "stat-counter" // Animated statistics
    | "process-flow" // Step-by-step flow
    | "workflow" // NEW: Visual workflow diagram with arrows and steps
    | "image-story" // Full bleed image with overlay
    | "quiz-choice" // Multiple choice quiz
    | "timeline" // Timeline view
    | "article" // Article-style with scrollable content
    | "statement" // Clean text statement without cards
    | "prompt-template" // Interactive copyable prompt template (Notion-style code block)
    | "cinema" // NEW: Cinematic title slide (movie poster style)
    | "conversation" // NEW: Chat-style dialogue (iMessage/WhatsApp style)
    | "insight-card" // NEW: Key insights/learnings displayed as clean cards (no expand/collapse)
    | "concept-demo" // NEW: Before/after demonstration of AI concepts
    | "step-action" // NEW: Sequential steps with visual indicators for action-oriented content
    | "scroll-reveal" // NEW: Scroll-based sequential reveal (centered layout)
    | "before-after-edit" // NEW: Before/after editing demonstration
    | "cinema"; // NEW: Cinematic title slide (movie poster style)

  gradient?: string; // Gradient background (visual slides)
  content: {
    title?: string;
    subtitle?: string;
    body?: string;
    imageUrl?: string;
    imagePosition?: "top" | "bottom" | "left" | "right" | "center"; // For image-story
    overlay?: "gradient" | "solid" | "none"; // For image-story
    textPosition?: "top" | "bottom" | "center"; // For image-story
    coverStyle?: "full-bleed" | "rounded-overlay"; // For image-story cover layout

    bullets?: string[];
    quote?: string;
    author?: string;
    xp?: number;
    metadata?: {
      readTime?: string;
      difficulty?: string;
      keyPoints?: number;
    };

    // Transition slide specific fields
    duration?: string;
    lessonNumber?: number;
    totalLessons?: number;
    lessonSummary?: string;
    nextLesson?: string;

    // Interactive/Input slide specific fields
    inputPlaceholder?: string;
    inputHint?: string;
    quizData?: QuizData;

    // Comparison slide specific fields
    leftSide?: {
      label: string;
      items: string[];
      image?: string;
      reveal?: boolean;
      badge?: string;
    };
    rightSide?: {
      label: string;
      items: string[];
      image?: string;
      reveal?: boolean;
      badge?: string;
    };

    // Cards slide specific fields
    cards?: Array<{
      front: { title: string; icon?: string; stat?: string };
      back: { detail: string };
    }>;

    // Stat counter specific fields
    stats?: Array<{
      label: string;
      value: number;
      unit: string;
      color?: "primary" | "secondary" | "success" | "warning" | "info";
      highlight?: boolean;
      context?: string; // Additional context text
    }>;
    visual?: "circles" | "bars" | "timeline";
    caption?: string;

    // Process flow specific fields
    direction?: "horizontal" | "vertical";
    steps?: Array<{
      number: number;
      label: string;
      detail: string;
      icon?: string;
    }>;

    // Timeline specific fields
    timelineEvents?: Array<{
      year?: string;
      title: string;
      description: string;
      icon?: string;
    }>;

    // Article specific fields
    paragraphs?: Array<{
      type: "text" | "heading" | "image" | "list" | "prompt-card";
      content?: string;
      src?: string;
      caption?: string;
      items?: string[];
      // Prompt card specific fields (when type === 'prompt-card')
      promptSections?: Array<{
        label: string;
        content: string;
        color: "blue" | "green" | "orange" | "purple" | "gray";
        explanation?: string;
      }>;
    }>;

    // Quiz/Choice specific fields
    question?: string;
    options?: Array<{
      text: string;
      correct: boolean;
      explanation?: string;
    }>;

    // Prompt Template specific fields
    promptText?: string; // The full prompt text to display
    promptSections?: Array<{
      // Optional: break prompt into color-coded sections
      label: string; // e.g., "CONTEXT", "GOAL", "CONSTRAINTS"
      content: string; // The actual text for this section
      color?: "blue" | "green" | "orange" | "purple" | "gray"; // Color coding
      icon?: string; // Optional icon
      explanation?: string; // Explanation shown on click
    }>;
    copyButtonText?: string; // Custom copy button text (default: "Copy")
    promptIntroduction?: string; // Text before the prompt block (renamed to avoid duplicate with insight-card)

    // Cinema slide specific fields (NEW)
    overlayOpacity?: number; // Gradient overlay opacity (default 0.5)
    textPositionCinema?: "center" | "bottom-center" | "bottom-left"; // Text positioning

    // Scroll Reveal slide specific fields (NEW)
    revealItems?: Array<{
      title: string; // Bold heading displayed above detail
      detail: string; // Body text with full explanation
      icon?: string; // Optional emoji icon for visual interest
    }>;

    // Conversation slide specific fields (NEW)
    messages?: Array<{
      role: "user" | "ai";
      text: string;
      time?: string;
    }>;

    // Insight Card slide specific fields (NEW)
    insights?: Array<{
      title: string; // Short heading for the insight
      body: string; // Main insight text
      icon?: string; // Optional emoji or icon
      highlight?: boolean; // Whether this card should be highlighted
    }>;
    introduction?: string; // Optional intro text before the cards
    conclusion?: string; // Optional conclusion text after the cards

    // Concept Demo slide specific fields (NEW)
    before?: {
      label?: string; // Optional label (e.g., "Before", "Bad Example")
      content: string; // The example content
      commentary?: string; // Optional explanation
    };
    after?: {
      label?: string; // Optional label (e.g., "After", "Good Example")
      content: string; // The example content
      commentary?: string; // Optional explanation
    };

    // Before-After-Edit slide specific fields (NEW)
    edits?: {
      label?: string; // Optional label for the edits section
      items: string[]; // List of human edits made to the content
    };
  };
}

/**
 * Quiz data for interactive slides
 */
export interface QuizData {
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  type: "true-false" | "multiple-choice" | "fill-blank" | "text-input";
  question: string;
  options?: string[]; // For multiple choice
  correctAnswer: string | string[];
  explanation?: string;
}

/**
 * Actionable task for lessons
 */
export interface ActionableTask {
  title: string;
  instructions: string;
  type: "input" | "quiz" | "checklist";
}

/**
 * Single lesson within a chapter
 *
 * SUPPORTS TWO FORMATS:
 * 1. Slide-based: Uses slides array for scroll-snap lessons
 * 2. Article-style: Uses sections array for incremental reveal lessons
 *
 * Format detection: Check if lesson has 'format: "article"' and 'sections' array
 *
 * QUIZ & CHALLENGE SEPARATION:
 * - Lessons can have optional quiz and challenge fields
 * - These render as separate pages (/lesson/id/quiz, /lesson/id/challenge)
 * - Also supports inline quiz/actionableTask sections
 */
export interface Lesson {
  id: string;
  chapterId: string;
  moduleId: string;
  title: string;
  description: string;
  order: number;
  estimatedMinutes: number;
  xpReward?: number; // XP awarded for completing the lesson
  slides?: LessonSlide[]; // Made optional for article format
  actionableTask?: ActionableTask;

  // Article-style lesson fields
  format?: "article" | "slide";
  sections?: LessonSection[];
  coverImage?: string;
  coverTitle?: string;

  // Lesson category for content organization (tutorial, theory, exercise, challenge, review)
  lessonCategory?: "tutorial" | "theory" | "exercise" | "challenge" | "review";

  // Image search terms for Unsplash integration (2-3 terms per lesson)
  imageSearchTerms?: string[];

  // NEW: Separate quiz and challenge (optional)
  // When present, these render as dedicated pages instead of inline sections
  quiz?: LessonQuiz;
  challenge?: LessonChallenge;

  // Task field for the unified task system
  // Replaces/extends challenge for actionable tasks
  task?: LessonTask;
}

/**
 * Chapter - A collection of related lessons within a module
 * Displayed as visual separator cards in the journey
 */
export interface Chapter {
  id: string;
  moduleId: string;
  title: string;
  description?: string;
  order: number;
  lessons: Lesson[];
}

/**
 * Module - A complete learning unit organized by chapters
 */
export interface Module {
  id: string;
  title: string;
  description: string;
  category: ModuleCategory;
  /** Course type defines the learning format (challenge, skills, tools-mastery, etc.) */
  courseType?: ModuleCourseType;
  /** Duration in days for challenge-type courses */
  durationDays?: number;
  imageUrl: string;
  color: {
    from: string;
    to: string;
  };
  order: number;
  chapters: Chapter[];
  estimatedMinutes: number;
}

/**
 * Lesson reference for challenges - points to existing lessons
 */
export interface LessonReference {
  day: number;
  moduleId: string;
  chapterId: string;
  lessonId: string;
}

/**
 * Challenge - A structured learning path combining multiple module lessons
 * (e.g., 28-day structured challenge)
 */
export interface Challenge {
  id: string;
  title: string;
  description: string;
  durationDays: number;
  lessonRefs: LessonReference[];
  /** Optional cover image for the challenge card */
  imageUrl?: string;
}

/**
 * Challenge lesson with status - used in challenge journey views
 * Combines lesson data with user progress status for sequential unlocking
 */
export interface ChallengeLessonWithStatus {
  day: number;
  id: string;
  title: string;
  description: string;
  moduleId: string;
  chapterId: string;
  status: LessonStatus;
  estimatedMinutes: number;
  xpReward: number;
}

/**
 * User progress tracking for a specific lesson
 */
export interface UserProgress {
  userId: string;
  lessonId: string;
  moduleId: string;
  chapterId: string;
  completedAt?: Date;
  startedAt: Date;
  currentSlide: number;
  totalSlides: number;
}

/**
 * Overall user learning statistics
 */
export interface UserStats {
  totalLessonsCompleted: number;
  totalModulesStarted: number;
  totalModulesCompleted: number;
  currentStreak: number;
  longestStreak: number;
  totalMinutesLearned: number;
  lastActivityDate: Date;
}

/**
 * Module progress summary
 */
export interface ModuleProgress {
  moduleId: string;
  totalLessons: number;
  completedLessons: number;
  inProgressLessons: number;
  percentComplete: number;
  lastAccessedAt?: Date;
}

// ============================================================================
// ARTICLE-STYLE LESSON TYPES (Coursiv-inspired format)
// ============================================================================

/**
 * Article section type discriminator
 *
 * NOTE: Added interactive components to differentiate from Coursiv while keeping clean aesthetic
 */
export type ArticleSectionType =
  | "text"
  | "textWithBullets"
  | "textWithImage"
  | "quiz"
  | "highlightCard" // NEW: Key insight card with subtle animation
  | "quickPrompt" // NEW: Interactive prompt builder
  | "checkpoint"; // NEW: Knowledge checkpoint with XP preview

/**
 * Base interface for all article section content types
 */
export interface BaseArticleSectionContent {
  title?: string; // Optional section heading
  paragraphs: string[]; // 1-3 short paragraphs
}

/**
 * Text-only section content
 */
export type TextSectionContent = BaseArticleSectionContent;

/**
 * Text with bullet points section content
 */
export interface TextWithBulletsSectionContent extends BaseArticleSectionContent {
  bullets: string[]; // 3-5 bullet points
}

/**
 * Text with image section content
 */
export interface TextWithImageSectionContent extends BaseArticleSectionContent {
  imageUrl: string; // Image URL or path
  imageAlt: string; // Alt text for accessibility
}

/**
 * Quiz question for article-style lessons
 */
export interface ArticleQuizQuestion {
  question: string; // The question prompt
  options: string[]; // 3-4 answer choices
  correctAnswer: number; // Index of correct answer
}

/**
 * Quiz section content
 */
export interface QuizSectionContent {
  quiz: ArticleQuizQuestion;
  context?: string; // Optional context before question
}

/**
 * Highlight card section content (NEW)
 *
 * Displays a key insight/concept in a highlighted card with subtle hover effect
 */
export interface HighlightCardSectionContent {
  heading: string; // Card heading
  insights: string[]; // 1-3 key insights
  icon?: string; // Optional emoji icon
}

/**
 * Quick prompt section content (NEW)
 *
 * Interactive prompt builder where users can copy a pre-written prompt template
 */
export interface QuickPromptSectionContent {
  heading: string; // Section heading
  description: string; // Brief explanation
  promptText: string; // The prompt template to copy
  placeholders?: string[]; // Optional: list of placeholders to fill in
}

/**
 * Checkpoint section content (NEW)
 *
 * Knowledge checkpoint with XP preview - gamified but not overdone
 */
export interface CheckpointSectionContent {
  question: string; // Checkpoint question
  options: string[]; // 2-3 answer choices
  correctAnswer: number; // Index of correct answer
  hint?: string; // Optional hint
}

/**
 * Union type for all article section content types
 */
export type ArticleSectionContentUnion =
  | TextSectionContent
  | TextWithBulletsSectionContent
  | TextWithImageSectionContent
  | QuizSectionContent
  | HighlightCardSectionContent
  | QuickPromptSectionContent
  | CheckpointSectionContent;

/**
 * Individual article section
 */
export interface ArticleSection {
  id: string;
  type: ArticleSectionType;
  content: ArticleSectionContentUnion;
}

/**
 * Article-style lesson (alternative to slide-based format)
 * Inspired by Coursiv's incremental reveal approach
 */
export interface ArticleLesson {
  id: string;
  chapterId: string;
  moduleId: string;
  title: string;
  description: string;
  order: number;
  estimatedMinutes: number;
  sections: ArticleSection[]; // Sections instead of slides
  format: "article"; // Explicit format marker
  coverImage?: string; // Hero/cover image URL displayed at lesson start
  coverTitle?: string; // Optional title overlay on cover image
}

// ============================================================================
// CERTIFICATE TYPES
// ============================================================================

/**
 * Certificate of completion earned when user finishes a module (100% progress)
 *
 * PURPOSE: Represents a certificate awarded to users for completing a module
 *
 * WHY this type exists:
 * - Centralizes certificate data structure for type safety
 * - Used in certificate generation and display
 * - Mirrors the enriched certificate shape used by the app layer on top of the
 *   `certificates` table
 *
 * DESIGN DECISIONS:
 * - certificateId is UUID v4 for uniqueness and verification
 * - completedAt is Date for flexible formatting
 * - xpEarned is total XP from all lessons in module
 * - moduleId links back to the completed module
 */
export interface Certificate {
  /** Module identifier (e.g., "module1-foundation") */
  moduleId: string;

  /** Human-readable module name (e.g., "AI Foundations") */
  moduleName: string;

  /** When the user completed the module */
  completedAt: Date;

  /** Unique certificate identifier (UUID v4) for verification */
  certificateId: string;

  /** Total XP earned from all lessons in the module */
  xpEarned: number;
}

/**
 * Certificate display props (subset of Certificate for component)
 *
 * PURPOSE: Props for Certificate component display
 *
 * WHY separate from Certificate:
 * - Component needs display-specific props only
 * - Keeps component interface clean
 * - Maps to Certificate type directly
 */
export interface CertificateDisplayProps {
  /** User's full name to display on certificate */
  userName: string;

  /** Module name they completed */
  moduleName: string;

  /** When they completed the module */
  completedAt: Date;

  /** Unique certificate identifier */
  certificateId: string;

  /** Total XP earned during the module */
  xpEarned: number;
}
