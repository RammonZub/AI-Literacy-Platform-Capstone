/**
 * Lesson 7.5: Quick Wins to Try Today
 *
 * CHAPTER: 1 - Getting Started — Your AI Partner at Work
 * LESSON: 5 of 5 - Immediate Practical Applications
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Provide immediate, practical applications learners can use today
 *
 * KEY RESPONSIBILITIES:
 * - Give 8 concrete use cases with ready-to-use prompts
 * - Build confidence through immediate wins
 * - Create personal reference card for future use
 * - Set up habits for ongoing Gemini use
 */

import type { Lesson } from "@/types/content";

export const lesson_7_5: Lesson = {
  id: "lesson-7-5",
  chapterId: "ch7-1-essentials",
  moduleId: "07-tools-gemini",
  title: "Quick Wins to Try Today",
  description:
    "Eight practical ways to use Gemini immediately—pick your favorites and start saving time",
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-5-cover.webp",
        imageAlt: "Checklist and productivity concept",
        title: "Quick Wins to Try Today",
        subtitle: "8 practical ways to use Gemini immediately",
      },
    },
    // ===========================================================================
    // SECTION 1: Introduction
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "You've learned what Gemini is, how to access it, and how to choose modes. Now let's get practical. Here are eight things you can do with Gemini TODAY that will immediately save you time and effort.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Tool Reference
    // ===========================================================================
    {
      id: "section-2",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For all quick wins",
        task: "Keep Gemini open in a browser tab or on your phone for easy access throughout the day",
        tip: "Create a keyboard shortcut or home screen icon for one-tap access",
      },
    },
    // ===========================================================================
    // SECTION 3: Quick Win 1 - Summarizing Email Threads
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "1. Summarize a Long Email Thread",
        paragraphs: [
          "**The problem**: You've been cc'd on a 20-email thread and need to understand what happened.",
          "",
          "**The solution**: Copy the email text into Gemini.",
          "",
          "**Try this prompt:**",
          '"Summarize this email thread in 3 bullet points. What was decided? What action items were assigned?"',
          "",
          "**Time saved**: 10-15 minutes of reading to 30 seconds of understanding",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Quick Win 2 - Quick Explanations
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "2. Get Quick Explanations of Any Topic",
        insights: [
          "Need to understand a concept quickly? Ask Gemini to explain it",
          "Request simple language for complex topics",
          "Ask for examples to make it concrete",
          "Follow up with 'Tell me more' or 'Give me an example'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Quick Win 2 continued
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        paragraphs: [
          "**Try this prompt:**",
          '"Explain [topic] to me like I\'m smart but not an expert. Give me the key points I need to know in 2 minutes."',
          "",
          "**Great for**: Industry jargon, technical concepts, acronyms, new regulations, competitor products",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Quick Win 3 - Draft Response Emails
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "3. Draft a Response Email",
        paragraphs: [
          "**The problem**: You know what you want to say but staring at a blank screen.",
          "",
          "**Try this prompt:**",
          '"Draft a professional email responding to this situation: [describe the situation]. The tone should be [friendly/firm/apologetic/confident]. The key points I want to make are: [list points]."',
          "",
          "**Pro tip**: Always review and personalize Gemini's draft before sending.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Win 4 - Meeting Notes to Action Items
    // ===========================================================================
    {
      id: "section-7",
      type: "textWithImage",
      content: {
        title: "4. Convert Meeting Notes to Action Items",
        paragraphs: [
          "**The problem**: You have messy notes from a meeting and need a clean action list.",
          "",
          "**Try this prompt:**",
          '"Here are my meeting notes. Please extract and organize: 1) Key decisions made, 2) Action items with suggested owners, 3) Open questions that need follow-up."',
          "",
          "**Time saved**: 15-20 minutes of organizing to instant clarity",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-5-inline-1.webp",
        imageAlt: "Team meeting and notes concept",
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Win 5 - Comparing Options
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "5. Compare Options (Products, Approaches, Decisions)",
        paragraphs: [
          "**The problem**: You're choosing between options and need a structured comparison.",
          "",
          "**Try this prompt:**",
          '"I\'m trying to decide between [Option A] and [Option B] for [purpose]. Create a comparison table showing: features, pros, cons, and cost. Then give me your recommendation based on [your priorities]."',
          "",
          "**Use Thinking Mode for**: Complex decisions with many factors",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Win 6 - Rewriting in Different Tone
    // ===========================================================================
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "6. Rewrite Something in a Different Tone",
        insights: [
          "Have a draft that's too formal? Too casual? Too long?",
          "Gemini can rewrite while keeping your key message",
          "Specify the target tone: professional, friendly, concise, detailed",
          "Great for adapting one message for different audiences",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Quick Win 6 continued
    // ===========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        paragraphs: [
          "**Try this prompt:**",
          '"Rewrite this text to be more [professional/friendly/concise/persuasive]. Keep the key message but adjust the tone: [paste your text]"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Quick Win 7 - Brainstorming Ideas
    // ===========================================================================
    {
      id: "section-11",
      type: "text",
      content: {
        title: "7. Brainstorm Ideas for a Project",
        paragraphs: [
          "**The problem**: You need creative ideas and your brain is stuck.",
          "",
          "**Try this prompt:**",
          '"I need 10 creative ideas for [project/goal]. The constraints are: [any limitations]. Think outside the box and explain each idea briefly."',
          "",
          "**Pro tip**: Ask Gemini to expand on the best 2-3 ideas with more detail.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Quick Win 8 - Research Before a Call
    // ===========================================================================
    {
      id: "section-12",
      type: "textWithImage",
      content: {
        title: "8. Research Before a Meeting or Call",
        paragraphs: [
          "**The problem**: You have a call in 10 minutes and need quick background on a company, person, or topic.",
          "",
          "**Try this prompt:**",
          '"I\'m meeting with [company/person] in 10 minutes. Give me: 1) Key background information, 2) Recent news or developments, 3) Good questions to ask, 4) Topics to be prepared for."',
          "",
          "**Gemini's advantage**: Real-time search means current information, not outdated data.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-5-inline-2.webp",
        imageAlt: "Business meeting preparation",
      },
    },
    // ===========================================================================
    // SECTION 13: Create Your Quick Reference Card
    // ===========================================================================
    {
      id: "section-13",
      type: "text",
      content: {
        title: "Your Quick Reference Card",
        paragraphs: [
          "Pick the 3 quick wins that are most valuable for YOUR work. Write them down. These are your starter prompts—the first things you'll try when you open Gemini.",
          "",
          "**Your favorites might be:**",
          "- The one that saves you the most time",
          "- The one you'll use most often",
          "- The one that solves your biggest frustration",
          "",
          "In the next chapter, you'll learn the 5-Step Prompting Framework to make these prompts even more powerful.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 14: Quick Prompt
    // ===========================================================================
    {
      id: "section-14",
      type: "quickPrompt",
      content: {
        heading: "Choose Your Top 3",
        description: "Which 3 quick wins will you try first? Write them down:",
        promptText: "My top 3 quick wins to try this week: 1) _____ 2) _____ 3) _____",
      },
    },
    // ===========================================================================
    // SECTION 15: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Complete Three Quick Wins This Week",
        purpose:
          "Turn knowledge into action by completing three of the quick wins from this lesson. Real experience builds confidence faster than any amount of reading.",
        instructions: [
          "From the 8 quick wins presented, select your top 3 that are most relevant to your work",
          "Open Gemini and complete at least ONE quick win right now",
          "For your chosen task, use the exact prompt provided (customize as needed)",
          "Review Gemini's output and note what worked well and what you'd change",
          "Schedule 10 minutes in your calendar to complete the other 2 quick wins this week",
        ],
        deliverable:
          "At least one completed quick win task, plus a calendar reminder for the remaining two",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Choose one:\n(1) 'Summarize this email thread in 3 bullet points. What was decided? What action items were assigned?'\n(2) 'Draft a professional email responding to this situation: [describe]. The tone should be [friendly/firm].'\n(3) 'I need 10 creative ideas for [project]. Think outside the box.'",
        successCriteria: [
          "You have completed at least ONE quick win task in Gemini",
          "You have identified your other 2 quick wins to try this week",
          "You have scheduled time to complete the remaining tasks",
          "You have saved useful prompts for future reference",
        ],
      },
    },
    // ===========================================================================
    // SECTION 16: Chapter Completion
    // ===========================================================================
    {
      id: "section-16",
      type: "completion",
      content: {
        title: "Chapter 1 Complete: Your AI Partner is Ready",
        description:
          "You've completed the Getting Started chapter. You now understand AI literacy, know what makes Gemini special, have it set up on your devices, understand the modes, and have 8 practical quick wins to try immediately. Take a break before continuing to Chapter 2, where you'll learn the 5-Step Prompting Framework.",
        xpReward: 100,
        buttonText: "Complete Chapter 1",
      },
    },
  ],
};
