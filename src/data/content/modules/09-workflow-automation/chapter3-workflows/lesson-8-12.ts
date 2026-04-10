/**
 * Lesson 8.12: The 5-Minute Daily Power Routine
 *
 * CHAPTER: 3 - Daily Productivity Workflows
 * LESSON: 5 of 5 - Your Daily AI Productivity System
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Establish a daily workflow that maximizes ChatGPT's productivity benefits
 *
 * KEY RESPONSIBILITIES:
 * - Introduce morning news and priorities routine
 * - Show midday email triage workflow
 * - Cover afternoon document review
 * - Teach end-of-day planning
 */

import type { Lesson } from "@/types/content";

export const lesson_8_12: Lesson = {
  id: "lesson-8-12",
  chapterId: "ch8-3-workflows",
  moduleId: "09-workflow-automation",
  title: "The 5-Minute Daily Power Routine",
  description: "Build a daily workflow that compounds your productivity with AI",
  order: 12,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-12-cover.webp",
        imageAlt: "Productive daily routine workspace",
        title: "The 5-Minute Daily Power Routine",
        subtitle: "Small daily habits that compound into massive productivity gains",
      },
    },
    // ===========================================================================
    // SECTION 1: The Routine Overview
    // ===========================================================================
    {
      id: "section-1",
      type: "highlightCard",
      content: {
        heading: "The 5-Minute Power Routine",
        insights: [
          "Morning (1 min): News scan + priority setting",
          "Midday (1 min): Email triage + quick responses",
          "Afternoon (1 min): Document review + summaries",
          "End of Day (1 min): Wrap-up + tomorrow planning",
          "Weekly (1 min): Review + optimize your system",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Morning - News & Priorities
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Morning: News & Priorities (1 Minute)",
        paragraphs: [
          "Start your day with clarity, not chaos. Use ChatGPT to cut through the noise:",
          "",
          "**The Morning Prompt:**",
          "1. Paste headlines from industry news sources",
          "2. Ask ChatGPT to identify what matters to you",
          "3. Get a prioritized list of what to focus on",
          "",
          "This replaces 20 minutes of aimless scrolling with 60 seconds of focused awareness.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Morning News Prompt
    // ===========================================================================
    {
      id: "section-3",
      type: "quickPrompt",
      content: {
        heading: "Morning News Scan",
        description: "Cut through the noise and find what matters.",
        promptText: `I'm pasting today's headlines from my industry. Please:

1. Identify the 3 most important stories for someone in [YOUR ROLE/INDUSTRY]
2. Explain briefly why each matters
3. Flag any that might require my attention or action
4. Note any trends or patterns across the news

My priorities this week: [LIST YOUR KEY FOCUS AREAS]

Here are the headlines:
[PASTE HEADLINES OR NEWS SUMMARY]`,
      },
    },
    // ===========================================================================
    // SECTION 4: Morning Priorities Prompt
    // ===========================================================================
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Daily Priorities Reset",
        description: "Start each day with clear focus.",
        promptText: `Help me set my priorities for today:

**My goals this week:** [WEEKLY GOALS]
**Yesterday's incomplete tasks:** [WHAT YOU DIDN'T FINISH]
**Today's meetings/commitments:** [YOUR CALENDAR]
**Energy level:** [high / medium / low]
**Available focus time:** [NUMBER OF HOURS]

Please suggest:
1. My top 3 priorities for today (realistic)
2. The best order to tackle them
3. What I should defer or delegate
4. One thing I should absolutely not miss`,
      },
    },
    // ===========================================================================
    // SECTION 5: Midday - Email Triage
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Midday: Email Triage (1 Minute)",
        paragraphs: [
          "Don't let email run your day. Use ChatGPT to process your inbox efficiently:",
          "",
          "**The Batch Method:**",
          "- Process email 2-3 times per day, not continuously",
          "- Use ChatGPT to draft responses to multiple emails at once",
          "- Group similar emails and handle them together",
          "",
          "You'll respond to more emails in less time, with better quality.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-12-inline-1.webp",
        imageAlt: "Email management workflow",
      },
    },
    // ===========================================================================
    // SECTION 6: Email Triage Prompt
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Email Batch Processor",
        description: "Process multiple emails at once.",
        promptText: `Help me process these emails efficiently. For each, suggest:
- Whether to respond now, defer, or archive
- A draft response if needed
- Any action items it creates

Here are my pending emails:

---
EMAIL 1:
From: [SENDER]
Subject: [SUBJECT]
Content: [EMAIL BODY]
---

[Repeat for each email]

Prioritize by urgency and importance. Keep responses concise.`,
      },
    },
    // ===========================================================================
    // SECTION 7: Afternoon - Document Review
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Afternoon: Document Review (1 Minute)",
        paragraphs: [
          "The afternoon slump is perfect for document processing. When your energy naturally dips after lunch, let ChatGPT do the heavy lifting while you provide direction and judgment. Long reports that would normally take thirty minutes to read can be reduced to executive summaries in seconds, giving you the key insights without the time investment.",
          "Complex documents become manageable when you can ask for key takeaways and action items rather than trying to absorb every detail. This is particularly valuable for technical documents, legal briefs, or research papers where the signal-to-noise ratio is often low. You get exactly what you need without wading through jargon and filler.",
          "When you're dealing with multiple sources, ChatGPT excels at synthesizing them into unified notes that highlight common themes and contradictions. This is invaluable for competitive analysis, literature reviews, or any situation where you need to understand how different sources relate to each other. And when you need to respond to documents with feedback or comments, ChatGPT can help you draft thoughtful responses quickly, ensuring you meet deadlines without sacrificing quality.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Document Summary Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Document Quick Summary",
        description: "Extract the essence of any document.",
        promptText: `Summarize this document for me:

[PASTE DOCUMENT]

Please provide:
1. **One-sentence summary**: What's it about?
2. **Key points**: 3-5 main takeaways
3. **Action items**: What do I need to do?
4. **Questions**: What's unclear or needs follow-up?
5. **Relevance**: Why does this matter to [MY ROLE/CONTEXT]?

Keep it scannable. Highlight anything urgent.`,
      },
    },
    // ===========================================================================
    // SECTION 9: End of Day - Planning
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "End of Day: Planning (1 Minute)",
        paragraphs: [
          "End your day with clarity about tomorrow. This prevents the morning scramble and helps you disconnect:",
          "",
          "**The Evening Wind-Down:**",
          "1. Review what you accomplished today",
          "2. Identify what needs to roll to tomorrow",
          "3. Set your top 3 priorities for tomorrow",
          "4. Clear your mental RAM so you can rest",
          "",
          "One minute of planning saves an hour of confusion tomorrow.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Daily Wrap-Up Prompt
    // ===========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Daily Wrap-Up",
        description: "Close your day with clarity.",
        promptText: `Help me wrap up today and prepare for tomorrow:

**What I accomplished today:**
- [LIST YOUR COMPLETED TASKS]

**What I didn't finish:**
- [LIST INCOMPLETE ITEMS]

**Blockers or challenges:**
- [WHAT GOT IN YOUR WAY]

**Tomorrow's calendar:**
- [LIST MEETINGS/COMMITMENTS]

Please suggest:
1. What should roll to tomorrow vs. be delegated/dropped
2. My top 3 priorities for tomorrow
3. The best time to tackle my most important work
4. One thing I should celebrate from today`,
      },
    },
    // ===========================================================================
    // SECTION 11: Weekly Review
    // ===========================================================================
    {
      id: "section-11",
      type: "highlightCard",
      content: {
        heading: "Weekly Review Template",
        insights: [
          "Friday afternoon: Review your week's prompts and outputs",
          "Identify which prompts worked best for you",
          "Note any new workflow opportunities",
          "Refine your templates based on what you learned",
          "Set your intentions for next week",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Weekly Review Prompt
    // ===========================================================================
    {
      id: "section-12",
      type: "quickPrompt",
      content: {
        heading: "Weekly Review Generator",
        description: "Reflect on your week and plan ahead.",
        promptText: `Help me conduct a weekly review:

**This week's wins:**
- [WHAT WENT WELL]

**This week's challenges:**
- [WHAT WAS DIFFICULT]

**Progress on goals:**
- [HOW DID YOU PROGRESS ON KEY OBJECTIVES]

**New insights or learnings:**
- [WHAT YOU DISCOVERED]

Please help me:
1. Identify patterns in what worked and what didn't
2. Suggest improvements for next week
3. Set 3 intentions for next week
4. Name one thing to stop doing and one to start`,
      },
    },
    // ===========================================================================
    // SECTION 13: The Compound Effect
    // ===========================================================================
    {
      id: "section-13",
      type: "textWithImage",
      content: {
        title: "The Compound Effect",
        paragraphs: [
          "5 minutes a day = 30 hours a year saved. But the real magic isn't just time saved.",
          "",
          "**What compounds:**",
          "- You stay informed without overwhelm",
          "- Your inbox never spirals out of control",
          "- You end each day with clarity",
          "- You start each day with purpose",
          "",
          "**The ultimate benefit:** You're not just more productive. You're more present, less stressed, and in control of your work instead of it controlling you.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-12-inline-1.webp",
        imageAlt: "Peaceful productive workspace",
      },
    },
    // ===========================================================================
    // SECTION 14: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Build your daily productivity routine",
        feature: "Fast responses for repeated daily workflows",
        tip: "Create and save templates for morning scan, email triage, and daily wrap-up to use consistently",
      },
    },
    // ===========================================================================
    // SECTION 15: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your Daily Power Routine",
        purpose:
          "Create a personalized 5-minute daily AI routine with specific prompts for your workflow.",
        instructions: [
          "Identify your highest-friction morning task",
          "Create a prompt template for that task",
          "Identify your midday bottleneck and create a template",
          "Create your end-of-day wrap-up prompt",
          "Test all three prompts tomorrow and refine based on results",
        ],
        deliverable: "A personal 3-prompt daily routine ready to use tomorrow morning",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Create my morning productivity prompt: I need to [task]. My priorities are [list]. Give me a structured output with [specific elements].",
        successCriteria: [
          "Created prompts for morning, midday, and evening",
          "Each prompt has clear structure and expected output",
          "Tested at least one prompt with real data",
          "Routine takes under 5 minutes total to execute",
        ],
      },
    },
    // ===========================================================================
    // SECTION 16: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Daily Power Routine Mastered",
        description:
          "You now have a complete system for daily productivity with ChatGPT. Morning clarity, midday efficiency, afternoon processing, and evening planning. These 5 minutes compound into hours saved and a calmer, more controlled work life. Your AI productivity journey is just beginning.",
        xpReward: 100,
        buttonText: "Complete & Continue",
      },
    },
  ],
};
