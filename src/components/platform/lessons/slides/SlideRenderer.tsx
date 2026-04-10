/**
 * Slide Renderer Component
 *
 * PURPOSE: Renders slides with seamless progress bar
 *
 * CONTEXT: Routes to appropriate slide component based on slide type.
 * All slides share common props (progress, current slide, total slides).
 *
 * KEY RESPONSIBILITIES:
 * - Route to correct slide component based on type
 * - Pass common props to all slide components
 * - Handle default fallback for unknown types
 *
 * IMPLEMENTATION NOTES:
 * - Visual slides: cover, quote, complete, transition, interactive
 * - Content slides: text, list
 * - All slides use beige/cream theme colors
 */

import React, { memo } from "react";
import type { LessonSlide } from "@/types/content";
import ContentSlide from "./ContentSlide";
import VisualSlide from "./VisualSlide";
import ArticleSlide from "./variants/ArticleSlide";
import BeforeAfterEditSlide from "./variants/BeforeAfterEditSlide";
import ComparisonSlide from "./variants/ComparisonSlide";
import ConceptDemoSlide from "./variants/ConceptDemoSlide";
import ConversationSlide from "./variants/ConversationSlide";
import GridCardSlide from "./variants/GridCardSlide";
import HorizontalCardSlide from "./variants/HorizontalCardSlide";
import ImageStorySlide from "./variants/ImageStorySlide";
import InsightCardSlide from "./variants/InsightCardSlide";
import ProcessFlowSlide from "./variants/ProcessFlowSlide";
import QuizChoiceSlide from "./variants/QuizChoiceSlide";
import ScrollRevealSlide from "./variants/ScrollRevealSlide";
import StatCounterSlide from "./variants/StatCounterSlide";
import StatementSlide from "./variants/StatementSlide";
import StepActionSlide from "./variants/StepActionSlide";
import WorkflowSlide from "./variants/WorkflowSlide";

interface SlideRendererProps {
  slide: LessonSlide;
  className?: string;
  progress?: number;
  currentSlide?: number;
  totalSlides?: number;
}

const SlideRenderer = memo(function SlideRenderer({
  slide,
  className = "",
  progress = 0,
  currentSlide = 1,
  totalSlides = 1,
}: SlideRendererProps) {
  const commonProps = {
    slide,
    className,
    progress,
    currentSlide,
    totalSlides,
  };

  // Check specific variants first
  switch (slide.variant) {
    case "comparison":
      return <ComparisonSlide {...commonProps} />;
    case "cards":
      return <HorizontalCardSlide {...commonProps} />;
    case "grid-cards":
      return <GridCardSlide {...commonProps} />;
    case "stat-counter":
      return <StatCounterSlide {...commonProps} />;
    case "process-flow":
      return <ProcessFlowSlide {...commonProps} />;
    case "image-story":
      return <ImageStorySlide {...commonProps} />;
    case "quiz-choice":
      return <QuizChoiceSlide {...commonProps} />;
    case "article":
      return <ArticleSlide {...commonProps} />;
    case "statement":
      return <StatementSlide {...commonProps} />;
    case "scroll-reveal":
      return <ScrollRevealSlide {...commonProps} />;
    case "before-after-edit":
      return <BeforeAfterEditSlide {...commonProps} />;
    case "step-action":
      return <StepActionSlide {...commonProps} />;
    case "conversation":
      return <ConversationSlide {...commonProps} />;
    case "concept-demo":
      return <ConceptDemoSlide {...commonProps} />;
    case "workflow":
      return <WorkflowSlide {...commonProps} />;
    case "insight-card":
      return <InsightCardSlide {...commonProps} />;
  }

  // Fall back to type-based rendering when no specialized slide matches
  switch (slide.type) {
    case "visual":
      return <VisualSlide {...commonProps} />;
    case "content":
      return <ContentSlide {...commonProps} />;
    default:
      return <ContentSlide {...commonProps} />;
  }
});

export default SlideRenderer;
