/**
 * Lesson 7.17: Mobile Workflows for Real Life
 *
 * CHAPTER: 4 - Mobile-First Mastery
 * LESSON: 5 of 5 - Practical Mobile Productivity
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Provide practical mobile workflows that integrate Gemini
 * into real-world professional scenarios
 *
 * KEY RESPONSIBILITIES:
 * - Demonstrate commute planning: traffic, calendar, priorities
 * - Show quick client research before meetings
 * - Cover capturing ideas anywhere via voice
 * - Explain business card capture and follow-up
 * - Guide real-time problem solving away from desk
 */

import type { Lesson } from "@/types/content";

export const lesson_7_17: Lesson = {
  id: "lesson-7-17",
  chapterId: "ch7-4-mobile",
  moduleId: "07-tools-gemini",
  title: "Mobile Workflows for Real Life",
  description: "Practical workflows that make Gemini essential to your daily routine",
  order: 5,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-17-cover.webp",
        imageAlt: "Professional working on mobile device on the go",
        title: "Mobile Workflows for Real Life",
        subtitle: "AI that fits your daily routine",
      },
    },
    // ===========================================================================
    // SECTION 1: Morning Commute Workflow
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Morning Commute Workflow",
        paragraphs: [
          "Turn travel time into preparation time with this hands-free workflow:",
          "",
          "**While driving or on transit, say:**",
          "",
          "'Hey Google, ask Gemini: What's on my calendar today, what's the traffic to my first meeting, and what should I prepare for my 10 AM?'",
          "",
          "Gemini will:",
          "1. Check your calendar and summarize your day",
          "2. Give you real-time traffic information",
          "3. Research your first meeting (if you've linked relevant info)",
          "4. Suggest talking points or preparation items",
          "",
          "Arrive informed and ready, without opening your laptop.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Scenario - Pre-Meeting Research
    // ===========================================================================
    {
      id: "section-2",
      type: "scenarioCard",
      content: {
        title: "Real-World Mobile Workflow",
        situation:
          "You have 10 minutes before a meeting with a new client. You're in the lobby and want to make a great impression by showing you understand their business.",
        challenge:
          "You don't have time to search multiple sources and read lengthy articles. You need the key points fast.",
        context: "Last-minute preparation is when mobile AI shines brightest.",
        outcome:
          "You say: 'Hey Google, give me a quick summary of [Company Name].' Then: 'What are their recent news?' and 'What questions should I ask them?' In 5 minutes, you sound like you've been following their business for months.",
      },
    },
    // ===========================================================================
    // SECTION 3: Voice Idea Capture - HighlightCard
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Capturing Ideas Anywhere via Voice",
        insights: [
          "Ideas don't wait for convenient moments. Capture them instantly with voice.",
          "Say: 'Gemini, I have an idea: [describe your thought]. Save this for later.'",
          "Ask Gemini to organize your idea into a note, outline, or next steps",
          "Review captured ideas at your desk and develop them further",
          "Never lose a good idea because you couldn't write it down",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Business Card Workflow
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Business Card Capture and Follow-Up",
        paragraphs: [
          "Networking events create a common problem: a stack of business cards and no time to process them. Here's the mobile solution:",
        ],
        bullets: [
          "**Capture**: Point your camera at the card and say 'Extract the information from this business card'",
          "**Understand**: Ask 'What does this company do?' if you need context",
          "**Draft follow-up**: Say 'Draft a personalized follow-up email mentioning [specific conversation point]'",
          "**Send or save**: Review the draft, edit if needed, and send or save for later",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-17-inline-1.webp",
        imageAlt: "Professional reviewing information on mobile before meeting",
      },
    },
    // ===========================================================================
    // SECTION 5: Real-Time Problem Solving
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Real-Time Problem Solving Away From Your Desk",
        paragraphs: [
          "Problems don't wait until you're at your computer. Here's how to handle issues on the go:",
          "",
          "**Scenario: You get an urgent question while away from your desk**",
          "",
          "1. Read the message (hands-free if needed with voice)",
          "2. Ask Gemini: 'Help me draft a response to this: [paste or summarize the question]'",
          "3. Review and refine the draft",
          "4. Send your response",
          "",
          "**Scenario: You need to make a decision without your usual resources**",
          "",
          "1. Explain the situation to Gemini: 'I need to decide between X and Y. Here's the context...'",
          "2. Ask for a pros/cons analysis",
          "3. Request a recommendation with reasoning",
          "4. Make your decision with confidence",
          "",
          "The key is having Gemini ready as your thinking partner, wherever you are.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-6",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: "Think about your daily routine and identify 2-3 moments when mobile AI could help. Create prompt templates for those situations.",
        feature: "Mobile Workflows",
        tip: "Save your best prompts as notes in your phone so you can quickly reuse them in similar situations.",
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Create Your First Mobile Workflow",
        description:
          "Think of a task you do regularly on the go. Create a prompt template for it that you can reuse.",
        promptText:
          "Create a workflow for: '[Your regular task]'. Break it into: 1) What I need to know, 2) What I need to produce, 3) The steps Gemini should help with.",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create and Test a Personal Mobile Workflow",
        purpose:
          "Design a reusable mobile workflow for a task you actually do regularly, then test it in a real scenario.",
        instructions: [
          "Identify a task you regularly do on the go (commute prep, client research, idea capture, etc.)",
          "Write down the 3-5 steps of your workflow with specific prompts for each step",
          "Test the workflow right now (or commit to testing it during your next opportunity)",
          "Note what worked well and what needs adjustment",
          "Save your workflow template for future use",
        ],
        deliverable: "One documented, tested mobile workflow template",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Create a workflow for: '[Your regular task]'. Break it into: 1) What I need to know, 2) What I need to produce, 3) The steps Gemini should help with.",
        successCriteria: [
          "You have identified a real recurring mobile task",
          "You have documented 3-5 steps with specific prompts",
          "You have tested the workflow (or committed to testing)",
          "You have saved the template for future use",
          "The workflow is practical and repeatable",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Completion
    // ===========================================================================
    {
      id: "section-9",
      type: "completion",
      content: {
        title: "You're a Mobile AI Power User",
        description:
          "You've completed the Mobile-First Mastery chapter. You now have practical workflows for commute preparation, meeting research, idea capture, networking follow-up, and real-time problem solving. Gemini has become an essential part of how you work on the go.",
        xpReward: 100,
        buttonText: "Complete Chapter 4",
      },
    },
  ],
};
