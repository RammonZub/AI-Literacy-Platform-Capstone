/**
 * Lesson 7.11: Google Slides — Presentations That Impress
 *
 * CHAPTER: 3 - Gemini + Google Workspace
 * LESSON: 4 of 5 - AI-Powered Presentation Creation
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Transform presentation creation with Gemini in Google Slides
 *
 * KEY RESPONSIBILITIES:
 * - Teach presentation generation from outlines
 * - Show speaker notes creation
 * - Demonstrate document-to-presentation conversion
 * - Provide practical examples for professional slides
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 */

import type { Lesson } from "@/types/content";

export const lesson_7_11: Lesson = {
  id: "lesson-7-11",
  chapterId: "ch7-3-workspace",
  moduleId: "07-tools-gemini",
  title: "Google Slides — Presentations That Impress",
  description:
    "Create professional presentations in minutes with AI-powered slide generation and content creation",
  order: 4,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-11-cover.webp",
        imageAlt: "Professional presentation on a screen",
        title: "Google Slides — Presentations That Impress",
        subtitle: "Create stunning slides in minutes",
      },
    },
    // ===========================================================================
    // SECTION 1: The Presentation Challenge
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Presentation Time Sink",
        paragraphs: [
          "How long does it typically take you to create a presentation? If you're like most professionals, it's hours—sometimes days. You write, format, rewrite, adjust layouts, and stress about whether it looks professional.",
          "",
          "Gemini changes this equation. Instead of starting with a blank slide deck, you start with your ideas. Describe what you need, and Gemini generates slides with relevant content. You then customize and refine.",
          "",
          "A presentation that used to take 4 hours might now take 1—and the quality is often better because you can focus on your message instead of formatting.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Generate from Outline
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Generate Presentations from Outlines",
        paragraphs: [
          "The fastest way to create a presentation is to provide Gemini with your outline and let it build the initial slides. Start by clearly stating your topic, such as 'Create a presentation about our Q3 results.' This gives Gemini a clear focus for content generation.",
          "",
          "Next, add structure by specifying the sections you want included. For example, you might say 'Include sections for: executive summary, key wins, challenges, and next steps.' This organizational guidance helps Gemini create a logical flow through your presentation. Always specify your audience as well, since this shapes the appropriate level of detail and tone. Telling Gemini 'This is for the board of directors, so keep it high-level' produces very different content than 'This is for the engineering team, so include technical details.'",
          "",
          "Set a clear length expectation by specifying the number of slides you need. A request like 'Make it 10-12 slides total' helps Gemini allocate content appropriately across your presentation. Once the slides are generated, your job shifts to customization. Edit the generated content to add your specific data, real examples, and the insights that only you can provide. The AI gives you a solid foundation, but your expertise transforms it into a compelling presentation.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario - Document to Presentation
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Real-World Presentation Scenario",
        situation:
          "You've written a detailed report in Google Docs about your team's quarterly performance. Now your manager asks you to present it to leadership in two days.",
        challenge:
          "Converting a 10-page document into a compelling 15-minute presentation normally takes an entire afternoon.",
        context:
          "This document-to-presentation conversion is one of the most common professional tasks.",
        outcome:
          "You use Gemini to convert your Google Doc into a slide deck automatically. It extracts the key points, organizes them into logical slides, and even generates speaker notes. You spend your time refining and adding your personal touch instead of starting from scratch.",
      },
    },
    // ===========================================================================
    // SECTION 4: Speaker Notes
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Speaker Notes That Guide You",
        paragraphs: [
          "Great slides need great presenter notes. Gemini can generate speaker notes for each slide, giving you talking points, transitions, and key messages to emphasize.",
          "",
          'Select any slide and ask Gemini to "Add speaker notes for this slide." It creates notes based on the slide content, helping you deliver a confident presentation.',
          "",
          'You can also refine the notes: "Make these notes more conversational" or "Add a transition to the next slide."',
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-11-inline-1.webp",
        imageAlt: "Speaker presenting with confidence",
      },
    },
    // ===========================================================================
    // SECTION 5: Key Capabilities - HighlightCard
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Slides AI Capabilities",
        insights: [
          "Generate presentations from topics or outlines",
          "Convert Google Docs into slide decks",
          "Create speaker notes for each slide",
          "Suggest layouts and visual improvements",
          "Adapt content for different audiences",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Best Practices
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Presentation Best Practices with AI",
        paragraphs: [
          "Creating presentations that truly impress requires more than just generating slides. The most effective presenters use AI as a starting point, then add their unique perspective and expertise.",
          "",
          "Start with a clear sense of your key message before generating slides. Know what you want your audience to remember, and let that guide the structure. Once Gemini creates your initial slides, customize heavily—AI slides are starting points, not finished products. Replace generic content with your actual numbers, real examples, and specific insights only you can provide.",
          "",
          "Practice with the speaker notes Gemini generates, but don't read them verbatim. Make them your own. And remember the fundamental rule of great presentations: keep slides simple with less text and more visual impact. Put the detailed information in your speaker notes, not on the screen. Your audience came to hear you think, not to read your slides.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-7",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: 'Open Google Slides and look for the Gemini sparkle icon, or start a new presentation and use "Create slides with AI."',
        feature: "Create slides with AI & Speaker notes",
        tip: "The more specific you are about your audience and key messages, the better your generated slides will be.",
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Generate a Presentation",
        description:
          "Open Google Slides and create a presentation using Gemini's generation features.",
        promptText:
          "In Google Slides, try: 'Create a presentation about [topic]. Include slides for: [list 3-5 key sections]. Audience: [who will see this]. Length: [number of slides].'",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create a Presentation in Minutes",
        purpose:
          "Experience the speed of AI-powered presentation creation by building a real slide deck you can use.",
        instructions: [
          "Open Google Slides and start a new presentation",
          "Use Gemini to generate slides from a topic you need to present on",
          "Specify your audience and the key sections you want to cover",
          "Review the generated slides and customize at least 2 with your specific content",
          "Add speaker notes to at least one slide using Gemini's help",
        ],
        deliverable:
          "One complete presentation (minimum 5 slides) with customized content and speaker notes",
        estimatedTime: "12-15 minutes",
        starterPrompt:
          "In Google Slides, try: 'Create a presentation about [topic]. Include slides for: [list 3-5 key sections]. Audience: [who will see this]. Length: [number of slides].'",
        successCriteria: [
          "You have generated a complete presentation from your topic",
          "You have customized at least 2 slides with your specific content",
          "You have added speaker notes to at least one slide",
          "The presentation is ready for actual use or practice",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Presentation Skills Elevated",
        description:
          "You now know how to use Gemini in Google Slides to generate presentations, convert documents to decks, and create speaker notes. Your presentations will be faster to create and more polished to deliver.",
        xpReward: 100,
        buttonText: "Complete Slides Mastery",
      },
    },
  ],
};
