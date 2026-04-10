/**
 * Lesson 8.26: Reusable Templates
 *
 * CHAPTER: 8 - Best Practices & Implementation
 * LESSON: 1 of 4 - Template Library
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Build a library of effective prompts for consistent, fast results
 *
 * KEY RESPONSIBILITIES:
 * - Explain why templates matter for consistency and speed
 * - Provide 10 essential template examples
 * - Show how to iterate and improve templates over time
 * - Enable team collaboration with shared templates
 */

import type { Lesson } from "@/types/content";

export const lesson_8_26: Lesson = {
  id: "lesson-8-26",
  chapterId: "ch8-8-best-practices",
  moduleId: "09-workflow-automation",
  title: "Reusable Templates",
  description: "Build a library of effective prompts for consistent results",
  order: 26,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-26-cover.webp",
        imageAlt: "Organized template library and documentation",
        title: "Reusable Templates",
        subtitle:
          "Cut your AI interaction time by 50% or more with copy-paste-customize prompt templates",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Templates Matter",
        paragraphs: [
          "Every time you craft a prompt from scratch, you are spending mental energy on something that could be standardized. Templates solve this problem elegantly.",
          "The professionals who get the most from AI are not necessarily the most creative prompters. They are the ones who have built reliable systems they can use without thinking.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Four Benefits of Templates",
        paragraphs: [
          "Templates transform AI from an occasional tool into a reliable productivity system. The first and most obvious benefit is consistency. When you use the same template for the same type of task, you get the same high-quality result every time. No more variability based on how tired you are or how well you happened to phrase things that day. Your templates encode your best practices so every interaction meets your standards.",
          "Speed is the second major benefit. The copy-paste-customize workflow beats writing from scratch every time. Instead of staring at a blank prompt box trying to remember how you phrased that email request last week, you just grab your template, swap in the specifics, and go. This friction reduction makes you more likely to actually use AI rather than defaulting to manual methods because they feel easier in the moment.",
          "Templates also enable continuous improvement. When you have a baseline that you use repeatedly, you can refine it based on what actually works. Notice that a certain phrasing consistently produces better results? Update the template. Find that you always need to add a specific constraint? Build it in. Your templates become living documents that get better over time. Finally, templates are shareable. When you discover something that works, you can help colleagues benefit from your learnings without them having to go through the same trial-and-error process you did.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Template Mindset",
        insights: [
          "If you have written the same type of prompt three times, it deserves a template",
          "Templates are living documents that improve with use",
          "Start simple and add complexity only when needed",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Template Library Structure",
        paragraphs: [
          "Organization is key to actually using your templates. A messy collection is just as useless as no templates at all.",
          "Create a simple note file or document with clear categories. Each template should include the prompt, when to use it, and which model works best.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Organizing Your Library",
        paragraphs: [
          "A practical structure that scales as you grow. Organize your templates by category such as Email, Research, Content, Analysis, and Meetings so you can find what you need without searching through a disorganized list. Include context notes with each template explaining when it works best, because a template that excels for internal communications might fail for client-facing messages.",
          "Note which model each template is optimized for: Llama 8B for speed-critical tasks where good enough is sufficient, or Maverick when quality matters more than instant results. Track version history as you refine templates over time, keeping notes about what you changed and why. This documentation transforms your template library from a static collection into a living resource that improves with use.",
        ],
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "10 Essential Templates",
        description:
          "Copy these templates to start your library. Customize the bracketed sections for your needs.",
        promptText: `1. EMAIL DRAFT
"Write a [professional/friendly/direct] email to [recipient] about [topic]. Keep it [brief/detailed] and include [specific points]."

2. MEETING SUMMARY
"Summarize this meeting transcript into: 1) Key Decisions, 2) Action Items with owners, 3) Open Questions, 4) Next Steps."

3. QUICK RESEARCH
"Explain [topic] like I'm new to this field. Cover: what it is, why it matters, and 3 practical applications."

4. TONE ADJUSTMENT
"Rewrite this to be more [professional/friendly/urgent/concise]: [paste your text]"

5. CONTENT OUTLINE
"Create an outline for a [blog post/proposal/report] about [topic] for [audience]. Include 5 main sections."

6. HEADLINE VARIATIONS
"Generate 10 [catchy/professional/thought-provoking] headlines for content about [topic]."

7. DIFFICULT RESPONSE
"Help me respond professionally to this challenging message. Be [firm but polite/empathetic/direct]: [paste message]"

8. DAILY BRIEFING
"Summarize today's news in [industry/topic]. Give me 3 key takeaways and 1 actionable insight."

9. DOCUMENT ANALYSIS
"Analyze this document and identify: main arguments, supporting evidence, gaps, and recommendations."

10. PROOFREADING CHECK
"Review this for: clarity, grammar, tone consistency, and persuasiveness. Suggest specific improvements."`,
        placeholders: ["[tone]", "[recipient]", "[topic]", "[paste content]"],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Iterating and Improving",
        paragraphs: [
          "Your templates should evolve. Track which ones produce consistently good results and which need refinement.",
          "When a template output is not quite right, do not just accept it. Note what was missing and update your template for next time.",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Template Optimization Practices",
        paragraphs: [
          "Turn good templates into great ones through systematic improvement. Track effectiveness by noting when template outputs need significant editing. If you find yourself making the same corrections repeatedly, that is a signal that the template itself needs updating. A/B test variations by trying two different versions and comparing which produces better results more consistently.",
          "Add constraints to your templates such as keeping responses under 200 words or using simple language appropriate for your audience. These guardrails prevent common problems before they occur. Include examples in your templates to show the AI exactly what format you want, because concrete demonstrations often communicate better than abstract instructions. Finally, refine based on failures. Every bad output teaches you something about what the template is missing or what instructions are ambiguous. Treat disappointments as data for improvement rather than reasons to abandon the template.",
        ],
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Team Collaboration",
        insights: [
          "Share your best templates with colleagues",
          "Build organization-wide best practices together",
          "A team template library multiplies everyone's productivity",
        ],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Create and test your personal template library",
        feature: "Instant feedback for template iteration and refinement",
        tip: "Start with the 10 essential templates provided, then customize based on your specific needs",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Start Your Template Library",
        purpose:
          "Create your personal template library with at least 5 prompts customized for your work.",
        instructions: [
          "Create a new document called 'My AI Templates'",
          "Copy the 10 essential templates from this lesson",
          "Customize 3 templates with your specific context (industry, audience, etc.)",
          "Add 2 new templates for tasks unique to your work",
          "Organize by category for easy retrieval",
        ],
        deliverable: "A personal template library document with 5+ customized prompts",
        estimatedTime: "10-12 minutes",
        starterPrompt:
          "Create a template for [my specific task type]. Context: [my situation]. The template should include placeholders for [variable elements]. Format it for easy copy-paste.",
        successCriteria: [
          "Created organized template library document",
          "Customized at least 3 templates for your context",
          "Added at least 2 original templates",
          "Library is organized for quick retrieval",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Lesson Complete: Reusable Templates",
        description:
          "You now understand how to build, organize, and improve a template library. Start with the 10 essential templates provided, then customize and expand based on your specific needs. Your templates will become one of your most valuable productivity assets.",
        xpReward: 100,
        buttonText: "Continue to Cost Optimization",
      },
    },
  ],
};
