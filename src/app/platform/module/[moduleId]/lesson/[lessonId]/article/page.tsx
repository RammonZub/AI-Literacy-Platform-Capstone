/**
 * Article-style Lesson Page
 *
 * PURPOSE: Route page for article-style lesson format
 *
 * CONTEXT: This is an alternative lesson format inspired by Coursiv's design.
 * Content is revealed incrementally below previous sections when the user
 * clicks "Continue", rather than swiping through full-page slides.
 *
 * ROUTE: /module/[moduleId]/lesson/[lessonId]/article
 *
 * KEY RESPONSIBILITIES:
 * - Load lesson data from content files
 * - Handle lesson completion tracking
 * - Render the ArticleLesson component
 * - Handle error and loading states
 *
 * IMPLEMENTATION NOTES:
 * - This route exists alongside the slide-based route for comparison
 * - Slide-based: /module/[id]/lesson/[id]
 * * Article-style: /module/[id]/lesson/[id]/article
 * - Uses the same lesson data, just different rendering format
 * - Demonstration content is inlined here until this route loads from the shared content layer
 *
 * DEPENDENCIES:
 * - ArticleLesson: Main lesson component
 * - locateLesson: Helper to find lesson in content
 *
 * @see /app/(platform)/module/[moduleId]/lesson/[lessonId]/page.tsx - Slide-based route
 * @see docs/coursiv-analysis.md - Design inspiration
 */

"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import type { LessonSection } from "@/components/platform/lessons/article";
import { Lesson } from "@/components/platform/lessons/article";
import { platformPaths } from "@/lib/routes/platform";

/** Inline sections for the article-format demonstration route; replace with `locateLesson` output when integrated. */
const sampleArticleSections: LessonSection[] = [
  // Section 1: Introduction (text)
  {
    id: "section-1",
    type: "text",
    content: {
      title: "Meet Claude, Your AI Assistant",
      paragraphs: [
        "Claude is an AI assistant created by Anthropic to be helpful, harmless, and honest.",
        "Think of Claude as a knowledgeable colleague who can help you with writing, analysis, coding, math, and creative projects.",
        "Unlike traditional search engines, Claude doesn't just find information—it understands context, remembers details from your conversation, and helps you work through complex problems step by step.",
      ],
    },
  },

  // Section 2: Key insights (NEW: highlightCard component)
  {
    id: "section-2",
    type: "highlightCard",
    content: {
      heading: "Key Takeaways",
      icon: "💡",
      insights: [
        "Claude maintains context throughout your entire conversation",
        "Be specific and provide clear instructions for best results",
        "Claude is trained to be honest when it doesn't know something",
      ],
    },
  },

  // Section 3: Interactive prompt (NEW: quickPrompt component)
  {
    id: "section-3",
    type: "quickPrompt",
    content: {
      heading: "Try This Prompt",
      description:
        "Copy this prompt template and fill in the brackets with your own topic. It's a great way to start any conversation with Claude.",
      promptText:
        "Help me understand [topic] as if I'm new to it. Start with the basics and use simple language.",
      placeholders: ["topic"],
    },
  },

  // Section 4: Knowledge checkpoint (NEW: checkpoint component)
  {
    id: "section-4",
    type: "checkpoint",
    content: {
      question: "What's the best way to get good results from Claude?",
      options: [
        "Ask vague questions to see what happens",
        "Be specific and provide context about what you need",
      ],
      correctAnswer: 1,
      xpReward: 10,
      hint: "Think about how you'd explain a task to a new colleague",
    },
  },

  // Section 5: More info with bullets
  {
    id: "section-5",
    type: "textWithBullets",
    content: {
      title: "What Makes Claude Different",
      paragraphs: [
        "Claude is designed with a strong focus on being safe and beneficial to humanity. It's built to be a partner in your work, not just a tool.",
      ],
      bullets: [
        "Conversations that feel natural and human-like",
        "Can handle long, complex tasks without losing context",
        "Trained to be honest about uncertainty",
        "Built with safety guidelines to prevent harmful outputs",
      ],
    },
  },

  // Section 6: Visual example
  {
    id: "section-6",
    type: "textWithImage",
    content: {
      title: "Claude at Work",
      paragraphs: [
        "Whether you're writing an email, analyzing data, debugging code, or brainstorming ideas, Claude adapts to your needs.",
        "The key is to be specific about what you want. Claude works best when you give clear instructions and provide relevant context.",
      ],
      imageUrl: "/images/lessons/brain-neural-network.jpg",
      imageAlt: "Illustration of neural network representing AI",
    },
  },

  // Section 7: Full quiz
  {
    id: "section-7",
    type: "quiz",
    content: {
      quiz: {
        question: "What is Claude designed to be?",
        options: [
          "A replacement for search engines",
          "A helpful, harmless, and honest assistant",
          "A tool for automating repetitive tasks only",
          "An AI that can browse the internet on its own",
        ],
        correctAnswer: 1,
      },
      context: "Let's check your understanding of what makes Claude unique.",
    },
  },

  // Section 8: Conclusion
  {
    id: "section-8",
    type: "text",
    content: {
      title: "Ready to Start Using Claude",
      paragraphs: [
        "You now understand the basics of what makes Claude special. In the next lessons, we'll explore practical ways to use Claude in your daily work.",
        'Click "Finish" to complete this lesson and continue your AI learning journey.',
      ],
    },
  },
];

interface ArticleLessonPageProps {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
}

export default function ArticleLessonPage({ params }: ArticleLessonPageProps) {
  const router = useRouter();
  const { moduleId, lessonId } = use(params);

  /** Persist completion via the platform progress API when this route is fully integrated. */
  const handleComplete = () => {
    router.push(platformPaths.module(moduleId));
  };

  return (
    <Lesson
      sections={sampleArticleSections}
      moduleId={moduleId}
      lessonId={lessonId}
      onComplete={handleComplete}
      title="Claude Basics"
    />
  );
}
