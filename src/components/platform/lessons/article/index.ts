/**
 * Lesson components exports
 *
 * Barrel export for all lesson components (article-style, now default)
 */

export type { LessonChallenge } from "@/types/challenge";
// LessonQuiz and LessonChallenge are re-exported from types/quiz and types/challenge
export type { LessonQuiz } from "@/types/quiz";
export type { ActionableTaskSectionContent } from "./ActionableTaskSection";
export { ActionableTaskSection } from "./ActionableTaskSection";
export type { CheckpointSectionContent } from "./CheckpointSection";
export { CheckpointSection } from "./CheckpointSection";
export type {
  ComparisonColumn,
  ComparisonRow,
  ComparisonTableSectionContent,
} from "./ComparisonTableSection";
export { ComparisonTableSection } from "./ComparisonTableSection";
export type { CompletionSectionContent } from "./CompletionSection";
export { CompletionSection } from "./CompletionSection";
export { ContinueButton } from "./ContinueButton";
export { FeedbackFlag } from "./FeedbackFlag";
export type { FeedbackModalProps } from "./FeedbackModal";
export { FeedbackModal } from "./FeedbackModal";
export type { HeroImageSectionContent } from "./HeroImageSection";
export { HeroImageSection } from "./HeroImageSection";
export type { HighlightCardSectionContent } from "./HighlightCardSection";
export { HighlightCardSection } from "./HighlightCardSection";
export type { KnowledgeCheckSectionContent } from "./KnowledgeCheckSection";
export { KnowledgeCheckSection } from "./KnowledgeCheckSection";
export { Lesson } from "./Lesson";
export { LessonCompletionOverlay } from "./LessonCompletionOverlay";
export type { ChallengeStatus, QuizStatus } from "./LessonCTAs";
export { LessonCTAs } from "./LessonCTAs";
export type { LessonSectionContent, LessonSectionType } from "./LessonSection";
export { LessonSection } from "./LessonSection";
export { InlineMarkdownRenderer, MarkdownRenderer } from "./MarkdownRenderer";
export { NextLessonHookModal } from "./NextLessonHookModal";
export type { ProgressIndicatorSectionContent } from "./ProgressIndicatorSection";
export { ProgressIndicatorSection } from "./ProgressIndicatorSection";
export type { QuickPromptSectionContent } from "./QuickPromptSection";
export { QuickPromptSection } from "./QuickPromptSection";
export type { QuizQuestion, QuizSectionContent } from "./QuizSection";
export { QuizSection } from "./QuizSection";
export type { ReflectionItem, ReflectionPromptSectionContent } from "./ReflectionPromptSection";
export { ReflectionPromptSection } from "./ReflectionPromptSection";
export type { ScenarioCardSectionContent } from "./ScenarioCardSection";
export { ScenarioCardSection } from "./ScenarioCardSection";
export type { TextSectionContent } from "./TextSection";
export { TextSection } from "./TextSection";
export type { TextWithBulletsSectionContent } from "./TextWithBulletsSection";
export { TextWithBulletsSection } from "./TextWithBulletsSection";
export type { TextWithImageSectionContent } from "./TextWithImageSection";
export { TextWithImageSection } from "./TextWithImageSection";
export type { ToolName, ToolReferenceSectionContent } from "./ToolReferenceSection";
export { ToolReferenceSection } from "./ToolReferenceSection";
