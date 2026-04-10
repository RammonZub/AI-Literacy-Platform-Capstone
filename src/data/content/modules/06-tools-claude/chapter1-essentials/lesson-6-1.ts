/**
 * Lesson 6.1: What is Claude?
 *
 * CHAPTER: 1 - Claude Essentials
 * LESSON: 1 of 5 - Welcome to Your AI Journey
 *
 * DURATION: 12 minutes (introductory)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce Claude with proper context, responsible AI awareness, and practical value
 *
 * KEY RESPONSIBILITIES:
 * - Set realistic expectations about Claude's capabilities
 * - Introduce Claude's unique approach (Constitutional AI) upfront
 * - Show immediate practical value for professional work
 * - Establish responsible AI mindset from day one
 */

import type { Lesson } from "@/types/content";

export const lesson_6_1: Lesson = {
  id: "lesson-6-1",
  chapterId: "ch6-1-essentials",
  moduleId: "06-tools-claude",
  title: "What is Claude?",
  description: "Meet the AI assistant designed to be helpful, harmless, and honest",
  order: 1,
  estimatedMinutes: 12,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-1-cover.webp",
        imageAlt: "Artificial intelligence assistant technology",
        title: "What is Claude?",
        subtitle: "Meet the AI assistant designed to be helpful, harmless, and honest",
      },
    },
    // ===========================================================================
    // SECTION 1: Why This Matters (Professional Hook)
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why This Matters to Your Work",
        paragraphs: [
          "Imagine having an AI assistant that not only helps you work faster but also respects your values, admits when it's wrong, and actively tries to avoid harm.",
          "",
          "That's Claude—an AI designed by Anthropic to be genuinely helpful while being constitutionally trained to be safe and honest.",
          "",
          "Unlike other AI tools, Claude was built from the ground up with a unique approach called 'Constitutional AI.' This means Claude has actual principles baked into its behavior, not just bolted-on safety filters.",
          "",
          "The result? An AI that's not just capable, but also more reliable, more transparent about limitations, and more aligned with human values.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Claude's Unique Origin Story
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Born from Safety Research",
        paragraphs: [
          "Claude was created by Anthropic, a company founded in 2021 by Dario Amodei (former OpenAI VP of Research) and Daniela Amodei. They left OpenAI with a conviction that AI safety shouldn't be an afterthought—it should be the foundation upon which AI systems are built.",
          "",
          "What makes Anthropic different is their mission-driven approach. The phrase 'AI safety research' isn't just marketing language for them—it's literally in the company's DNA and guides every decision they make about how Claude is developed and deployed.",
          "",
          "The key innovation is what Anthropic calls 'Constitutional AI.' Rather than training Claude solely through reinforcement learning from human feedback, they train Claude using a constitution—a set of principles that define how the AI should behave. This means Claude has actual values baked into its behavior, not just patterns learned from predicting human responses.",
          "",
          "Anthropic is also organized as a Public Benefit Corporation (PBC), which means they're legally required to balance profit with public good. This corporate structure reflects their commitment to building AI that benefits humanity broadly, not just shareholders.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: What Makes Claude Different
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Claude's Unique Approach",
        paragraphs: [
          "Most AI models are trained to: 'Respond helpfully to user requests.' Claude is trained to: 'Be helpful while being harmless and honest.'",
          "",
          "This sounds similar, but the difference shows up in important ways:",
          "",
          "**When Claude doesn't know something**, it will say so directly, rather than making up an answer.",
          "",
          "**When you ask about sensitive topics**, Claude provides thoughtful, nuanced responses that acknowledge complexity.",
          "",
          "**When Claude makes mistakes**, it's designed to be more transparent about uncertainty and limitations.",
          "",
          "Think of Claude as an AI colleague who's not just smart, but also thoughtful about being a good colleague.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Key Capabilities - HighlightCard
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Claude's Strengths",
        insights: [
          "Nuanced conversations and creative writing",
          "Analysis that requires careful reasoning",
          "Explaining complex topics clearly",
          "Being transparent about uncertainty",
          "Particularly good at tasks requiring thoughtfulness",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Real-World Scenario
    // ===========================================================================
    {
      id: "section-5",
      type: "scenarioCard",
      content: {
        title: "Real-World Example",
        situation:
          "Marcus is a project manager at a consulting firm. He needs to prepare a client presentation analyzing competitive options for a new technology deployment.",
        challenge:
          "He has 50 pages of technical documentation to synthesize and only 3 hours before the meeting. He's overwhelmed by the volume of information.",
        context: "This is his first major client presentation since his promotion.",
        outcome:
          "Marcus used Claude to help him identify the key themes across all documentation, draft a comparison framework, and prepare talking points. He delivered a confident presentation and the client praised his clear analysis.",
      },
    },
    // ===========================================================================
    // SECTION 6: Contextual Image - Claude's Brain
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Built for Thoughtful Assistance",
        paragraphs: [
          "Claude's architecture is designed to excel at nuanced reasoning and careful analysis. Unlike simpler AI systems that might rush to conclusions, Claude is trained to think through problems methodically and provide well-reasoned responses.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-1-inline-1.webp",
        imageAlt: "AI neural network and brain technology",
      },
    },
    // ===========================================================================
    // SECTION 7: Responsible AI Introduction
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Reality Check: What Claude Can and Can't Do",
        paragraphs: [
          "Claude is powerful, but understanding its boundaries helps you use it more effectively and responsibly. Setting realistic expectations from the start will make you a more effective Claude user.",
          "",
          "Claude is brilliant at nuanced analysis that requires careful reasoning, creative writing across many formats, explaining complex topics in accessible ways, providing thoughtful feedback on your ideas, and being transparent about its own uncertainty. These strengths make Claude a powerful thinking partner for knowledge work.",
          "",
          "However, Claude is not reliable for real-time information due to its knowledge cutoff date. It shouldn't be trusted for specific facts without independent verification, and it absolutely should not be used for legal, medical, or financial decisions without human review from qualified professionals. These limitations aren't weaknesses to work around—they're boundaries to respect.",
          "",
          "The transparency difference is crucial. Claude will often tell you when it's uncertain or when a topic requires specialist expertise. This isn't a bug—it's a feature of being honest about limitations. Many AI tools will confidently provide wrong answers; Claude is designed to acknowledge what it doesn't know.",
          "",
          "Your rule for using Claude: treat it as a thought partner and amplifier of your expertise, never as a replacement for professional judgment. Claude can help you think through problems, draft content, and explore ideas—but the final decisions and accountability remain with you.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Your First Conversation with Claude",
        description:
          "Open Claude and ask about ways it can help you be more effective at your work.",
        promptText:
          "Open Claude and ask: 'I'm a [your role]. What are three ways you could help me be more effective at my work?'",
      },
    },
    // ===========================================================================
    // SECTION 9: Tool Reference
    // ===========================================================================
    {
      id: "section-9",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For this lesson",
        task: "Open Claude and try your first conversation using the prompt above",
        feature: "New conversation",
        tip: "Start with a fresh conversation for each new topic to keep context clear",
      },
    },
    // ===========================================================================
    // SECTION 10: Quiz
    // ===========================================================================
    {
      id: "section-quiz",
      type: "quiz",
      content: {
        context: "Quick check on your understanding of Claude and its unique approach.",
        quiz: {
          question:
            "What makes Claude different from other AI assistants according to this lesson?",
          options: [
            "Claude is faster than all other AI tools",
            "Claude was built with Constitutional AI, designed to be helpful, harmless, and honest",
            "Claude is free to use without any limits",
            "Claude can access real-time information",
          ],
          correctAnswer: 1,
        },
      },
    },
    // ===========================================================================
    // SECTION 11: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-checkpoint",
      type: "checkpoint",
      content: {
        question: 'What is "Constitutional AI" in the context of Claude?',
        options: [
          "A legal framework for using AI in government",
          "Claude is trained using a set of principles (constitution) rather than just reinforcement learning",
          "A special version of Claude for lawyers only",
          "An American-specific version of Claude",
        ],
        correctAnswer: 1,
        hint: 'Review "Claude Unique Approach" and "Reality Check" sections if you need a refresher.',
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task (at END)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Explore Claude's Capabilities",
        purpose:
          "Get hands-on experience with Claude and understand its unique approach to AI assistance.",
        instructions: [
          "Create your Claude account at claude.ai if you haven't already",
          "Ask Claude: 'What are 3 things that make you different from other AI assistants?'",
          "Ask a follow-up question about something that interests you",
          "Note Claude's response style—does it acknowledge uncertainty?",
        ],
        deliverable: "Notes on Claude's responses and what surprised you about its approach",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "I'm curious about what makes you different from other AI assistants. What are 3 key differences I should know about?",
        successCriteria: [
          "You've created a Claude account",
          "You've had at least 2 exchanges with Claude",
          "You observed Claude's transparency about its capabilities",
          "You understand the concept of Constitutional AI",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Welcome to Constitutional AI",
        description:
          "You've just started learning about Claude, the AI assistant designed to be helpful, harmless, and honest. This foundation will help you use AI more responsibly and effectively throughout the course.",
        xpReward: 100,
        buttonText: "Complete First Introduction",
      },
    },
  ],
};
