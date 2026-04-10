/**
 * LessonSection
 *
 * PURPOSE: Router component that renders the appropriate section type
 *
 * CONTEXT: Each lesson consists of multiple sections of different types
 * (text, text+bullets, text+image, quiz, highlightCard, quickPrompt, checkpoint).
 * This component routes to the appropriate renderer based on the section.type property.
 *
 * KEY RESPONSIBILITIES:
 * - Determine section type from content.type
 * - Render the appropriate section component
 * - Handle unknown section types gracefully
 * - Pass through all content and props
 *
 * IMPLEMENTATION NOTES:
 * - Uses switch statement for type routing
 * - Falls back to TextSection for unknown types (graceful degradation)
 * - All section components share common props interface
 * - Memoized for performance (prevents re-renders)
 *
 * DEPENDENCIES:
 * - TextSection: Renders text-only sections
 * - TextWithBulletsSection: Renders text + bullets
 * - TextWithImageSection: Renders text + image
 * - QuizSection: Renders multiple choice questions
 * - HighlightCardSection: Renders key insight cards
 * - QuickPromptSection: Renders interactive prompt builder
 * - CheckpointSection: Renders knowledge checkpoint with XP
 *
 * @see Lesson.tsx - Parent component that iterates over sections
 */

import { memo } from "react";
import { ActionableTaskSection, type ActionableTaskSectionContent } from "./ActionableTaskSection";
import { CheckpointSection, type CheckpointSectionContent } from "./CheckpointSection";
import {
  ComparisonTableSection,
  type ComparisonTableSectionContent,
} from "./ComparisonTableSection";
import { CompletionSection, type CompletionSectionContent } from "./CompletionSection";
import { HeroImageSection, type HeroImageSectionContent } from "./HeroImageSection";
import { HighlightCardSection, type HighlightCardSectionContent } from "./HighlightCardSection";
import { KnowledgeCheckSection, type KnowledgeCheckSectionContent } from "./KnowledgeCheckSection";
import {
  ProgressIndicatorSection,
  type ProgressIndicatorSectionContent,
} from "./ProgressIndicatorSection";
import { QuickPromptSection, type QuickPromptSectionContent } from "./QuickPromptSection";
import { QuizSection, type QuizSectionContent } from "./QuizSection";
import {
  ReflectionPromptSection,
  type ReflectionPromptSectionContent,
} from "./ReflectionPromptSection";
import { ScenarioCardSection, type ScenarioCardSectionContent } from "./ScenarioCardSection";
import { TextSection, type TextSectionContent } from "./TextSection";
import {
  TextWithBulletsSection,
  type TextWithBulletsSectionContent,
} from "./TextWithBulletsSection";
import { TextWithImageSection, type TextWithImageSectionContent } from "./TextWithImageSection";
import { ToolReferenceSection, type ToolReferenceSectionContent } from "./ToolReferenceSection";

/**
 * Union type for all section content types
 */
export type LessonSectionContent =
  | TextSectionContent
  | TextWithBulletsSectionContent
  | TextWithImageSectionContent
  | QuizSectionContent
  | HighlightCardSectionContent
  | QuickPromptSectionContent
  | CheckpointSectionContent
  | CompletionSectionContent
  | ActionableTaskSectionContent
  | ProgressIndicatorSectionContent
  | ScenarioCardSectionContent
  | ToolReferenceSectionContent
  | ComparisonTableSectionContent
  | KnowledgeCheckSectionContent
  | ReflectionPromptSectionContent
  | HeroImageSectionContent;

/**
 * Lesson section type discriminator
 */
export type LessonSectionType =
  | "text"
  | "textWithBullets"
  | "textWithImage"
  | "quiz"
  | "highlightCard"
  | "quickPrompt"
  | "checkpoint"
  | "completion"
  | "actionableTask"
  | "actionableChallenge" // Alias for actionableTask - more engaging name
  | "progressIndicator"
  | "scenarioCard"
  | "toolReference"
  | "comparisonTable"
  | "knowledgeCheck"
  | "reflectionPrompt"
  | "heroImage";

/**
 * Complete lesson section interface
 */
export interface LessonSection {
  id: string;
  type: LessonSectionType;
  content: LessonSectionContent;
}

interface LessonSectionProps {
  /** Section object with type and content */
  section: LessonSection;

  /** Callback for quiz/checkpoint submissions */
  onQuizSubmit?: (isCorrect: boolean) => void;

  /** Optional additional CSS classes */
  className?: "";
}

/**
 * LessonSection router component
 *
 * Routes to the appropriate section renderer based on section.type.
 * This is the main component that determines how each section is displayed.
 *
 * @example
 * const section = {
 *   id: "section-1",
 *   type: "text",
 *   content: {
 *     paragraphs: ["Introduction paragraph here"]
 *   }
 * }
 * <LessonSection section={section} />
 */
function LessonSectionComponent({ section, onQuizSubmit, className }: LessonSectionProps) {
  switch (section.type) {
    case "text":
      return <TextSection content={section.content as TextSectionContent} className={className} />;

    case "textWithBullets":
      return (
        <TextWithBulletsSection
          content={section.content as TextWithBulletsSectionContent}
          className={className}
        />
      );

    case "textWithImage":
      return (
        <TextWithImageSection
          content={section.content as TextWithImageSectionContent}
          className={className}
        />
      );

    case "quiz":
      return (
        <QuizSection
          content={section.content as QuizSectionContent}
          onSubmit={onQuizSubmit}
          className={className}
        />
      );

    case "highlightCard":
      return (
        <HighlightCardSection
          content={section.content as HighlightCardSectionContent}
          className={className}
        />
      );

    case "quickPrompt":
      return (
        <QuickPromptSection
          content={section.content as QuickPromptSectionContent}
          className={className}
        />
      );

    case "checkpoint":
      return (
        <CheckpointSection
          content={section.content as CheckpointSectionContent}
          onSubmit={onQuizSubmit}
          className={className}
        />
      );

    case "completion":
      return (
        <CompletionSection
          content={section.content as CompletionSectionContent}
          className={className}
        />
      );

    case "actionableTask":
    case "actionableChallenge": // Alias - uses same component
      return (
        <ActionableTaskSection
          content={section.content as ActionableTaskSectionContent}
          className={className}
        />
      );

    case "progressIndicator":
      return (
        <ProgressIndicatorSection
          content={section.content as ProgressIndicatorSectionContent}
          className={className}
        />
      );

    case "scenarioCard":
      return (
        <ScenarioCardSection
          content={section.content as ScenarioCardSectionContent}
          className={className}
        />
      );

    case "toolReference":
      return (
        <ToolReferenceSection
          content={section.content as ToolReferenceSectionContent}
          className={className}
        />
      );

    case "comparisonTable":
      return (
        <ComparisonTableSection
          content={section.content as ComparisonTableSectionContent}
          className={className}
        />
      );

    case "knowledgeCheck":
      return (
        <KnowledgeCheckSection
          content={section.content as KnowledgeCheckSectionContent}
          className={className}
        />
      );

    case "reflectionPrompt":
      return (
        <ReflectionPromptSection
          content={section.content as ReflectionPromptSectionContent}
          className={className}
        />
      );

    case "heroImage":
      return (
        <HeroImageSection
          content={section.content as HeroImageSectionContent}
          className={className}
        />
      );

    default:
      // Graceful fallback - treat unknown types as text sections
      console.warn(`Unknown section type: ${section.type}, rendering as text section`);
      return <TextSection content={section.content as TextSectionContent} className={className} />;
  }
}

/**
 * Memoized LessonSection component
 *
 * Memoized to prevent unnecessary re-renders when parent updates.
 * Only re-renders if section.id or section.content changes.
 */
export const LessonSection = memo(LessonSectionComponent, (prevProps, nextProps) => {
  return (
    prevProps.section.id === nextProps.section.id &&
    prevProps.section.content === nextProps.section.content
  );
});

LessonSection.displayName = "LessonSection";
