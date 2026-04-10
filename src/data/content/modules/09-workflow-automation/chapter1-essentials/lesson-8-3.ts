/**
 * Lesson 8.3: Your First Hands-On Workflows
 *
 * CHAPTER: 1 - Getting Started
 * LESSON: 3 of 4 - Practical Application
 *
 * DURATION: 18 minutes (hands-on practice)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Hands-on chat patterns that slot into multi-tool workflows (Module 9)
 *
 * KEY RESPONSIBILITIES:
 * - Teach the email drafting pattern
 * - Demonstrate quick summarization
 * - Practice simple brainstorming
 * - Show tone adjustment techniques
 * - Introduce the rewrite loop pattern
 */

import type { Lesson } from "@/types/content";

export const lesson_8_3: Lesson = {
  id: "lesson-8-3",
  chapterId: "ch8-1-essentials",
  moduleId: "09-workflow-automation",
  title: "Your First Hands-On Workflows",
  description:
    "Practice email, summary, brainstorm, tone, and rewrite patterns before multi-tool handoffs",
  order: 3,
  estimatedMinutes: 18,
  xpReward: 100,
  format: "article",
  lessonCategory: "exercise",
  sections: [
    // ===========================================================================
    // HERO IMAGE
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-3-cover.webp",
        imageAlt: "Professional workspace ready for productive work",
        title: "Your First Hands-On Workflows",
        subtitle:
          "Reusable prompt shapes for everyday professional tasks—then chain them with Module 9 handoffs",
      },
    },
    // ===========================================================================
    // SECTION 1: The Email Drafting Pattern
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Pattern 1: Email Drafting",
        paragraphs: [
          "The email drafting pattern is your go-to for any written communication. Here's the formula:",
          "",
          "**Context + Goal + Tone + Constraints = Great Draft**",
          "",
          "Most people just say 'write an email about X.' That produces generic output. Instead, always include:",
          "- **Context:** Who are you writing to? What's the relationship?",
          "- **Goal:** What do you want to happen after they read it?",
          "- **Tone:** Professional? Friendly? Firm? Casual?",
          "- **Constraints:** Length limit? Points to include? Points to avoid?",
          "",
          "With short micro-passes, you can iterate quickly; move long threads to Claude when the attachment list grows.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Email Prompt Example
    // ===========================================================================
    {
      id: "section-2",
      type: "quickPrompt",
      content: {
        heading: "Try This Email Prompt",
        description:
          "Copy this into ChatGPT and notice how the structured context produces better output:",
        promptText:
          "Draft an email to my team about moving our Wednesday meeting to Thursday.\n\nContext: We're a marketing team of 8 people. The meeting is usually a quick 30-minute sync.\nGoal: Get everyone to confirm they can make Thursday instead.\nTone: Friendly but professional, concise.\nConstraints: Keep it under 100 words. Don't explain why we're moving it (that's been discussed).",
      },
    },
    // ===========================================================================
    // SECTION 3: Quick Summarization
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Pattern 2: Quick Summarization",
        paragraphs: [
          "Summarization is ideal for quick iterations in any chat tool; escalate to Claude when documents sprawl across many pages or versions.",
          "",
          "The summarization pattern works best when you specify:",
          "- **Format:** Bullet points? Paragraph? Key insights only?",
          "- **Length:** One sentence? Three bullets? Executive summary?",
          "- **Audience:** For yourself? For your boss? For a client?",
          "- **Focus:** General summary? Specific aspect? Action items only?",
          "",
          "With instant responses, you can try different formats in seconds until you get exactly what you need.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Summarization Prompt Example
    // ===========================================================================
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Try This Summarization Prompt",
        description:
          "Paste any long text (article, document, email thread) and use this prompt structure:",
        promptText:
          "Summarize the following text in 3 bullet points focused on actionable insights. Write for a busy executive who needs the key takeaways in 30 seconds.\n\n[PASTE YOUR TEXT HERE]",
      },
    },
    // ===========================================================================
    // SECTION 5: Simple Brainstorming
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Pattern 3: Simple Brainstorming",
        paragraphs: [
          "Brainstorming with AI is like having a creative partner who never runs out of ideas. The key is to:",
          "",
          "1. **Start broad:** Get 10 ideas quickly",
          "2. **Pick promising directions:** Choose 2-3 to explore",
          "3. **Go deep:** Have AI expand on each",
          "4. **Combine and refine:** Mix elements from different ideas",
          "",
          "Fast micro-passes help you exhaust obvious ideas before tightening scope; switch tools when the thread gets long or you need heavier reasoning.",
          "",
          "Don't just accept the first output—run another pass with a clearer constraint.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-3-inline-1.webp",
        imageAlt: "Creative brainstorming session with sticky notes",
      },
    },
    // ===========================================================================
    // SECTION 6: Brainstorming Prompt Example
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Try This Brainstorming Prompt",
        description: "Pick something you're working on and use this pattern:",
        promptText:
          "I need 10 creative ideas for [YOUR PROJECT/PROBLEM].\n\nBackground: [Brief context about what you're trying to achieve]\nConstraints: [Any limitations: budget, time, resources]\n\nPlease format as a numbered list with one sentence each. After I review, I'll ask you to expand on the best ones.",
      },
    },
    // ===========================================================================
    // SECTION 7: Tone Adjustment
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Pattern 4: Tone Adjustment",
        insights: [
          "Take existing text and change its tone: professional to casual, formal to friendly, direct to diplomatic",
          "Always show the AI the original text and the target audience",
          "Specify what to keep: key information, structure, length",
          "Specify what to change: formality level, friendliness, urgency",
          "Try multiple tone variations in quick succession before pasting into email",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Tone Adjustment Prompt Example
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Try This Tone Adjustment Prompt",
        description: "Take something you've written (or had AI write) and transform it:",
        promptText:
          "Rewrite the following text to be more [casual/professional/friendly/urgent].\n\nKeep: All key information, the main points, approximate length\nChange: Make it sound like I'm talking to [audience type]\n\nOriginal text:\n[PASTE YOUR TEXT HERE]",
      },
    },
    // ===========================================================================
    // SECTION 9: The Rewrite Loop
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Pattern 5: The Rewrite Loop",
        paragraphs: [
          "The rewrite loop is iterative refinement:",
          "",
          "**Step 1:** Get a draft from AI",
          "**Step 2:** Identify what needs improvement",
          "**Step 3:** Ask for specific changes",
          "**Step 4:** Review the new version",
          "**Step 5:** Repeat until satisfied",
          "",
          "Short wait times help you stay in flow, but the habit matters most: specific edit requests beat vague “make it better.”",
          "",
          "The key is being specific about what to change. Don't say 'make it better.' Say 'make the third paragraph more concise and add a specific example to the introduction.'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Rewrite Loop Example
    // ===========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Practice the Rewrite Loop",
        description:
          "Try this sequence. Notice how the instant responses let you iterate without losing focus:",
        promptText:
          "First, write a 3-paragraph pitch for [YOUR IDEA/PRODUCT].\n\n[After reviewing, follow up with specific changes like:]\n'Keep the first paragraph but make it punchier. The second paragraph is too long, split it into two key benefits. Add a specific stat or example to the third paragraph.'",
      },
    },
    // ===========================================================================
    // TOOL REFERENCE
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT (or parallel chat tool)",
        task: "Practice the email drafting and rewrite loop patterns",
        feature: "Tight iteration loops before handoff",
        tip: "Use the Context + Goal + Tone + Constraints formula for better prompts",
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Practice the Rewrite Loop",
        purpose:
          "Master the iterative refinement pattern using a real email or document from your work.",
        instructions: [
          "Think of an email or document you need to write this week",
          "Use ChatGPT to generate a first draft with the starter prompt structure",
          "Review the output and identify one specific improvement",
          "Request that improvement with a follow-up prompt",
          "Continue until you have a polished, usable draft",
        ],
        deliverable: "A polished, ready-to-use email or document created through iteration",
        estimatedTime: "10-12 minutes",
        starterPrompt:
          "Draft an email to [recipient] about [topic]. Context: [situation]. Goal: [what you want to happen]. Tone: [professional/friendly/etc.]. Keep it under [word count].",
        successCriteria: [
          "Started with structured context (who, what, goal, tone)",
          "Completed at least 2 refinement iterations",
          "Each iteration made a specific, targeted improvement",
          "Final output is ready to use with minimal editing",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "You're Now Dangerous (In a Good Way)",
        description:
          "You've learned five practical patterns: email drafting, summarization, brainstorming, tone adjustment, and the rewrite loop. They slot into larger chains with Claude, Gemini, and Midjourney as your projects mature. Next, we tighten **routing**: which tool leads each step.",
        xpReward: 100,
        buttonText: "Complete Chapter 1",
      },
    },
  ],
};
