/**
 * Lesson 3.6: Example-Based Learning (Few-Shot Prompting)
 *
 * PURPOSE: Teach how to guide AI with concrete examples
 *
 * - Original: 8 slides -> Converted to 7 sections
 * - Added 2 quizzes (after sections 3 and 5)
 * - Added 1 checkpoint (after section 6)
 * - XP: 121 (explicitly set)
 *
 * - Fixed moduleId to '03-skills-prompting'
 * - Added lessonCategory: 'tutorial'
 * - Added heroImage section at start
 * - Converted actionableTask to inline actionableTask section
 * - Added highlightCard sections
 * - Added quickPrompt sections
 * - Added textWithImage sections
 * - Added comparisonTable for Zero-shot vs Few-shot vs Many-shot
 *
 * @created 2026-02-03
 * @modified 2026-02-06 - Converted to article format with quizzes and checkpoint
 * @modified 2026-02-23 - Restructured with new section types
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_3_6: Lesson = {
  id: "3-6",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "Show AI An Example",
  description: "Use concrete examples to guide style and quality.",
  order: 6,
  estimatedMinutes: 12,
  xpReward: 121,
  format: "article",
  lessonCategory: "tutorial",
  coverImage:
    "/images/courses/lessons/modules/creative-brainstorming-session-with-sticky-notes.webp",
  coverTitle: "Show AI An Example",

  sections: [
    // HERO IMAGE - Visual opener
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-6-cover.webp",
        imageAlt: "Creative brainstorming session with examples",
        title: "Show AI An Example",
        subtitle: "Show what good looks like instead of overexplaining it",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Power of Examples",
        paragraphs: [
          "Abstract instructions leave room for interpretation.",
          "Concrete examples show exactly what you mean.",
          '"Write like we do" is vague.',
          '"Here are 3 examples of our style" is precise.',
          "Examples teach AI patterns that descriptions can't capture.",
          "Show 2-3 examples, get perfect output every time.",
        ],
      },
    },
    // COMPARISON TABLE - Zero-shot vs Few-shot vs Many-shot
    {
      id: "comparison-table",
      type: "comparisonTable",
      content: {
        title: "Zero-Shot vs Few-Shot vs Many-Shot",
        intro: "The number of examples you provide dramatically affects output quality.",
        columns: [
          { name: "Zero-Shot", description: "No examples" },
          { name: "Few-Shot", description: "2-3 examples", recommended: true },
          { name: "Many-Shot", description: "5+ examples" },
        ],
        rows: [
          { feature: "Example Count", values: ["0", "2-3", "5+"] },
          { feature: "AI Guesswork", values: ["High", "Low", "Very Low"] },
          {
            feature: "Output Consistency",
            values: ["Inconsistent", "Consistent", "Very Consistent"],
          },
          { feature: "Prompt Length", values: ["Short", "Medium", "Long"] },
          { feature: "Best For", values: ["Simple tasks", "Style matching", "Complex patterns"] },
        ],
        footer: "Few-shot (2-3 examples) is the sweet spot for most business tasks.",
      },
    },
    // HIGHLIGHT CARD - Key insight
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Why Examples Beat Descriptions",
        insights: [
          "**Examples show patterns** - AI learns from seeing the actual format and style",
          "**Examples remove ambiguity** - No need to describe what 'professional' means when you show it",
          "**Examples save tokens** - One good example can replace paragraphs of explanation",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "How Few-Shot Prompting Works",
        paragraphs: [
          "The number of examples you provide dramatically affects output quality. This spectrum from zero to many examples represents a fundamental tradeoff between convenience and consistency.",
          'Zero-shot prompting means asking AI to perform a task without any examples. When you say "Write product descriptions," AI guesses at your style and format. Results are inconsistent because the AI has no reference point for what you consider good output. It might write something brilliant or something completely off-target—you won\'t know until you see it.',
          'One-shot prompting provides a single example to guide AI. When you say "Write like this: [example]," AI matches the pattern but may not catch all nuances. One example gives AI a direction, but it can\'t distinguish between essential patterns and coincidental features of that single example.',
          'Few-shot prompting with 2-3 examples delivers the sweet spot for most business tasks. When you say "Here are 3 examples of our style: [examples]. Write 2 more in the same style," AI extrapolates the pattern perfectly. Multiple examples reveal the consistent elements across different contexts, allowing AI to identify what truly matters in your preferred output.',
        ],
      },
    },
    // QUICK PROMPT - Interactive template
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Few-Shot Prompt Template",
        description:
          "Use this template to guide AI with examples. Replace the placeholders with your actual content.",
        promptText:
          'Write [content type] about [topic]. Here are 3 examples of our style:\n\nExample 1:\n"[your first example]"\n\nExample 2:\n"[your second example]"\n\nExample 3:\n"[your third example]"\n\nWrite one more in this style.',
        placeholders: [
          "content type",
          "topic",
          "your first example",
          "your second example",
          "your third example",
        ],
      },
    },
    // TEXT WITH IMAGE - Visual break
    {
      id: "text-image-1",
      type: "textWithImage",
      content: {
        title: "Example-Based Prompt in Action",
        paragraphs: [
          "See how examples guide AI to match your style. When you provide concrete examples, the AI can identify patterns in tone, structure, and content that would be impossible to describe in words.",
          "The key is consistency: all your examples should demonstrate the same pattern you want AI to replicate.",
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-6-inline-1.webp",
        imageAlt: "Writing examples demonstration",
        imageCaption: "Examples create patterns that AI can follow",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Example-Based Prompt in Action",
        paragraphs: [
          "See how examples guide AI to match your style. When you provide concrete examples, the AI identifies patterns that would be impossible to describe in words alone.",
          "Consider this real prompt: \"Write LinkedIn posts about AI productivity. Here are 3 examples of our style: Example 1: 'Spent 2 hours on a report. AI: 10 minutes. Same quality.' Example 2: 'Used to dread monthly metrics. Now AI drafts the analysis.' Example 3: 'Client presentation deadline looming. AI outlined the deck in 5 minutes.' Write one more in this style.\"",
          "The AI response reveals how it processed your examples: \"Based on your examples, I'll write a post that follows the pattern: problem statement -> AI solution -> time saved -> strategic benefit. 'Just reviewed 20 pages of research. AI summarized key insights in 3 minutes.'\" The AI didn't just copy your examples—it extracted the underlying structure and applied it to create something new that fits your pattern perfectly.",
        ],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of few-shot prompting.",
        quiz: {
          question:
            "How many examples should you provide for best results with few-shot prompting?",
          options: [
            "Zero examples",
            "One example",
            "2-3 examples that show the pattern you want",
            "At least 10 examples",
          ],
          correctAnswer: 2,
        },
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Business Use Cases for Example-Based Prompting",
        paragraphs: [
          "Examples work across all business communication scenarios, transforming vague style requests into precise pattern matching. The key insight is that examples capture nuances that descriptions cannot.",
          "For company voice and tone, providing 3 examples of your company's communication style allows AI to match it perfectly. The examples reveal your preferred sentence length, formality level, use of humor, and technical depth. AI internalizes these patterns and applies them consistently to new content.",
          "Data formatting benefits enormously from examples. Show 2 examples of how you want data presented, and AI follows the pattern for new data. This works for tables, lists, summaries, and reports—the structure becomes clear through demonstration rather than lengthy description.",
          "Report structure can be standardized through example sections from 2-3 similar reports. AI creates new ones with matching structure, maintaining consistency across your team's documentation without requiring detailed style guides.",
          "Email templates become more effective when you provide examples for different scenarios: follow-ups, introductions, proposals. Each example teaches AI the appropriate level of formality, typical length, and key elements to include for that specific communication type.",
        ],
      },
    },
    // HIGHLIGHT CARD - Use cases
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Perfect Use Cases for Few-Shot",
        insights: [
          "**Brand voice guidelines** - Show 3 examples of your company's tone",
          "**Data formatting** - Demonstrate exactly how you want tables/lists structured",
          "**Email sequences** - Provide templates for follow-ups, introductions, requests",
        ],
      },
    },
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice applying example-based prompting.",
        quiz: {
          question:
            "You want AI to write emails in your company's style. What's the best approach?",
          options: [
            "Say 'write like us do'",
            "Provide 2-3 examples of your company's actual emails and ask AI to match the style",
            "Describe your style as 'professional'",
            "Let AI guess the style",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "You Can Now Use Examples Effectively",
        paragraphs: [
          "You know examples beat descriptions.",
          "You understand few-shot prompting.",
          "You have a template for example-based prompts.",
          "In the next lesson, you'll learn structured outputs: how to specify exact formats for emails, reports, lists, and tables.",
        ],
      },
    },
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the key to creating good examples for few-shot prompting?",
        options: [
          "Use descriptions instead of actual examples",
          "Show real output with a consistent pattern across all examples",
          "Use random, unrelated examples",
          "Provide only one example",
        ],
        correctAnswer: 1,
        hint: "Think about showing AI exactly what you want, not describing it.",
      },
    },
    // TOOL REFERENCE: Practice with ChatGPT or Claude
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Practice prompting",
        task: "Use few-shot prompting with 2-3 examples",
        feature: "Example-based learning with concrete samples",
        tip: "Keep all examples consistent in style and format for best pattern matching",
      },
    },
    // ACTIONABLE TASK - Inline at end
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Example-Based Practice",
        purpose:
          "Apply few-shot prompting to a task you do regularly and see how examples improve your results.",
        instructions: [
          "Pick a type of content you create regularly (emails, reports, posts)",
          "Gather 3 examples of your ideal style/format",
          "Write a few-shot prompt using those examples",
          "Test it and see how well AI matches the pattern",
          "Refine your examples if needed",
        ],
        deliverable: "Your before/after comparison showing how examples improved the output",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          'Write [content type] for [purpose]. Here are 3 examples of the style I want:\n\nExample 1:\n"[paste your first example]"\n\nExample 2:\n"[paste your second example]"\n\nExample 3:\n"[paste your third example]"\n\nNow write [specific request] in this same style.',
        successCriteria: [
          "All 3 examples show a consistent pattern in tone and structure",
          "The prompt clearly states what you want AI to create",
          "AI output matches the style of your examples",
        ],
      },
    },
  ] as LessonSection[],
};
