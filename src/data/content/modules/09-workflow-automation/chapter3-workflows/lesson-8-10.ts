/**
 * Lesson 8.10: Research at Warp Speed
 *
 * CHAPTER: 3 - Daily Productivity Workflows
 * LESSON: 3 of 5 - Synthesize, Understand, Verify in Minutes
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach rapid research workflows using ChatGPT's synthesis capabilities
 *
 * KEY RESPONSIBILITIES:
 * - Introduce the pre-research pattern
 * - Show quick synthesis techniques
 * - Teach complex topic explanation
 * - Cover fact-checking workflows
 */

import type { Lesson } from "@/types/content";

export const lesson_8_10: Lesson = {
  id: "lesson-8-10",
  chapterId: "ch8-3-workflows",
  moduleId: "09-workflow-automation",
  title: "Research at Warp Speed",
  description: "Synthesize multiple sources and understand complex topics in minutes",
  order: 10,
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
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-10-cover.webp",
        imageAlt: "Research and analysis workspace",
        title: "Research at Warp Speed",
        subtitle: "Paste multiple sources, ask questions, and get synthesized answers in seconds",
      },
    },
    // ===========================================================================
    // SECTION 1: The Pre-Research Pattern
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Pre-Research Pattern",
        paragraphs: [
          "Before diving into research, use ChatGPT to understand the landscape:",
          "",
          "**Step 1: Frame your question** - What exactly do you need to know?",
          "",
          "**Step 2: Identify key concepts** - What terms, frameworks, or models are relevant?",
          "",
          "**Step 3: Map the territory** - What are the main perspectives or schools of thought?",
          "",
          "**Step 4: Generate research questions** - What specific questions will guide your search?",
          "",
          "This 2-minute investment saves hours of aimless searching.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Pre-Research Prompt
    // ===========================================================================
    {
      id: "section-2",
      type: "quickPrompt",
      content: {
        heading: "Pre-Research Framework",
        description: "Before you start researching, map the territory.",
        promptText: `I need to research: [TOPIC]

Please help me prepare by:
1. Explaining the key concepts I need to understand
2. Identifying the main perspectives or debates in this area
3. Suggesting 5-7 specific research questions to guide my search
4. Listing key terms and jargon I should know
5. Recommending what type of sources would be most reliable

My context: [why I'm researching this / what I need it for]
My expertise level: [beginner / intermediate / advanced]`,
      },
    },
    // ===========================================================================
    // SECTION 3: Quick Synthesis
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Quick Synthesis: The Multi-Source Method",
        insights: [
          "Paste 3-5 relevant articles or documents",
          "Ask ChatGPT to find common themes and differences",
          "Request a unified summary of key points",
          "Identify contradictions or gaps in the sources",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Synthesis Prompt
    // ===========================================================================
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Multi-Source Synthesis",
        description: "Combine multiple sources into one coherent summary.",
        promptText: `I'm pasting [X] sources about [TOPIC]. Please synthesize them into:

1. **Key Themes**: What are the 3-5 main points across all sources?
2. **Areas of Agreement**: Where do all sources agree?
3. **Areas of Disagreement**: Where do sources contradict or differ?
4. **Notable Insights**: What's unique or surprising in each source?
5. **Gaps**: What's missing or not addressed?

Here are the sources:

---
SOURCE 1:
[PASTE]
---
SOURCE 2:
[PASTE]
---
[Continue for all sources]`,
      },
    },
    // ===========================================================================
    // SECTION 5: Explaining Complex Topics
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Explaining Complex Topics",
        paragraphs: [
          "Need to understand something technical or complex? ChatGPT excels at breaking down difficult concepts.",
          "",
          "**The Feynman Technique with ChatGPT:**",
          "1. Ask ChatGPT to explain the topic simply",
          "2. Ask follow-up questions on confusing parts",
          "3. Request analogies to things you already understand",
          "4. Test your understanding by explaining it back",
          "",
          "This iterative approach builds real understanding, not just surface knowledge.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-10-inline-1.webp",
        imageAlt: "Complex concepts visualization",
      },
    },
    // ===========================================================================
    // SECTION 6: Explanation Prompt
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Explain Like I'm 5",
        description: "Break down complex topics into simple terms.",
        promptText: `Explain [TOPIC] to me as if I were a smart 12-year-old.

Please include:
1. A one-sentence definition
2. Why it matters (the 'so what?')
3. A simple analogy or real-world comparison
4. The 3 most important things to understand
5. Common misconceptions to avoid

After explaining, quiz me with 2-3 questions to check my understanding.`,
      },
    },
    // ===========================================================================
    // SECTION 7: Fact-Checking Workflow
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Fact-Checking Workflow",
        paragraphs: [
          "ChatGPT can help you think critically about claims and information, providing a structured approach to evaluating what you read and hear. The process begins by identifying the specific claims being made. Strip away the rhetoric and emotional language to find the core assertions. What exactly is the source claiming, and what evidence are they providing to support it?",
          "Once you have clarity on the claims, examine the underlying logic. Does the reasoning hold up under scrutiny? Look for logical fallacies, unsupported leaps, and assumptions presented as facts. Then consider what perspectives might be missing. Every argument comes from somewhere, and understanding the bias helps you weigh the information appropriately. What incentives might shape how this information is presented?",
          "The final steps involve verification. Ask yourself what evidence would confirm or refute these claims if you could find it. What specific facts would need to be true for the argument to hold? Then cross-reference against other sources to see if independent verification exists. Remember: ChatGPT can help you think through these questions, but always verify with original sources for high-stakes decisions.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Fact-Check Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Critical Analysis Prompt",
        description: "Analyze a claim or argument for strengths and weaknesses.",
        promptText: `Analyze this claim or argument:

[PASTE THE CLAIM, ARTICLE, OR ARGUMENT]

Please provide:
1. **The Core Claim**: What's the main assertion being made?
2. **Supporting Evidence**: What evidence is provided?
3. **Logical Analysis**: Does the reasoning follow?
4. **Potential Biases**: What perspectives or interests might be at play?
5. **What's Missing**: What questions aren't addressed?
6. **Verification Suggestions**: How could someone verify or refute this?
7. **Confidence Level**: How solid does this argument seem?`,
      },
    },
    // ===========================================================================
    // SECTION 9: Building Your Knowledge Base
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Building Your Knowledge Base",
        paragraphs: [
          "As you research topics with ChatGPT, you're building a personal knowledge base. Here's how to make it stick:",
          "",
          "**Save key summaries** - Create a document for each topic you research",
          "",
          "**Note open questions** - Track what you still want to learn",
          "",
          "**Connect concepts** - Link related topics in your notes",
          "",
          "**Revisit and refine** - Return to topics as you learn more",
          "",
          "The goal isn't to become an expert in everything. It's to have a reliable system for learning anything quickly.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Synthesize research from multiple sources",
        feature: "Fast multi-document analysis",
        tip: "Paste multiple sources at once and ask for synthesis to identify themes, agreements, and contradictions",
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Research a Topic in Under 5 Minutes",
        purpose: "Apply the pre-research and synthesis patterns to quickly understand a new topic.",
        instructions: [
          "Choose a topic you need to learn about for work or a project",
          "Run the pre-research framework prompt to map the territory",
          "Paste 2-3 relevant articles or sources you find",
          "Ask ChatGPT to synthesize them into key insights",
          "Create a one-page summary with main takeaways",
        ],
        deliverable:
          "A research summary with key concepts, main perspectives, and actionable insights",
        estimatedTime: "10-12 minutes",
        starterPrompt:
          "I need to research [TOPIC]. Help me by: 1) Explaining key concepts, 2) Identifying main perspectives or debates, 3) Suggesting 5 specific research questions. My context: [why I need this].",
        successCriteria: [
          "Mapped the topic with key concepts and questions",
          "Synthesized multiple sources into unified insights",
          "Identified at least 3 actionable takeaways",
          "Reduced research time by 50%+ compared to manual reading",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Research Superpower Acquired",
        description:
          "You've learned to research at warp speed: framing questions, synthesizing sources, understanding complexity, and thinking critically. These skills will serve you in every professional and personal learning challenge. Your next research project just got 10x faster.",
        xpReward: 100,
        buttonText: "Complete & Continue",
      },
    },
  ],
};
