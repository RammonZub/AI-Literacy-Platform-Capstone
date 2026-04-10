/**
 * Lesson 4.6: Consistent Brand Voice
 *
 * PURPOSE: Learn to maintain brand voice consistency across all content using AI
 *
 * CONTEXT: Sixth lesson of Module 4 (Creation). Focuses on defining and
 * maintaining brand voice at scale with AI assistance.
 *
 * KEY RESPONSIBILITIES:
 * - Teach brand voice definition
 * - Show how to create voice guidelines
 * - Demonstrate training AI on your brand
 * - Explain maintaining consistency at scale
 * - Emphasize team alignment
 *
 * IMPLEMENTATION NOTES:
 * - 12-minute lesson converted from 22 slides to ~18 sections
 * - Focuses on the 5 dimensions of brand voice
 * - Uses system prompt examples
 * - XP Calculation: Base 125 × 1.0 (10-20min) × 1.1 (Intermediate) + 30 (2 quizzes × 10 + 1 checkpoint × 10) = 168 XP
 *
 * DEPENDENCIES:
 * - Module 1 (Foundation): Basic AI familiarity
 * - Lesson 4.1: AI as Writing Partner (prerequisite)
 * - Lesson 4.5: Human-AI Collaboration (related)
 *
 * @see lesson-4-1.ts - Prerequisite: basic AI writing collaboration
 * @see lesson-4-5.ts - Related: human-AI collaboration workflow
 * @created 2026-02-06
 * @modified 2026-02-23 - Added heroImage, lessonCategory, inline actionableTask, highlightCard, textWithImage, scenarioCard, quickPrompt sections
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_6: Lesson = {
  id: "lesson-4-6",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  title: "Consistent Brand Voice",
  description:
    "Create and maintain a consistent brand voice across all content while leveraging AI for scale and efficiency.",
  order: 6,
  estimatedMinutes: 12,
  xpReward: 168,
  format: "article",
  lessonCategory: "tutorial",
  coverImage: "/images/courses/lessons/modules/artist-palette-and-creative-tools.webp",
  coverTitle: "Consistent Brand Voice",
  sections: [
    // ==========================================================================
    // HERO IMAGE SECTION (at start)
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-6-cover.webp",
        imageAlt: "Brand voice consistency with AI tools",
        title: "Consistent Brand Voice",
        subtitle: "Master brand voice at scale with AI assistance",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction
    // ==========================================================================
    {
      id: "s1-intro",
      type: "text",
      content: {
        title: "Why Brand Voice Matters",
        paragraphs: [
          "Consistent brand voice builds recognition—people know it's you without seeing your logo. It builds trust—inconsistency feels unreliable. It creates connection—personality attracts like-minded customers. It enables efficiency—clear direction makes content creation faster.",
          "AI threatens consistency by default. With the right approach, AI can actually ENHANCE consistency.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Comparison
    // ==========================================================================
    {
      id: "s2-comparison",
      type: "text",
      content: {
        title: "The Impact of Consistency",
        paragraphs: [
          "The difference between inconsistent and consistent brand voice is dramatic. Understanding this contrast helps you appreciate why brand voice guidelines are worth the investment.",
          "Inconsistent brands suffer from a scattered identity. One email reads formal while the next feels casual. Social posts sound completely different from the website. Customers become confused about who you actually are. The brand feels scattered and unprofessional, undermining trust at every touchpoint.",
          "Consistent brands create a unified experience. Every channel sounds like the same brand, creating instant recognition. Customers recognize you immediately, whether they're reading an email, browsing your site, or scrolling social media. Trust builds through reliability—people know what to expect. A clear personality attracts the right people while repelling those who aren't a fit. AI makes this consistency achievable at scale, allowing you to maintain voice across hundreds of pieces of content.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Key Insight
    // ==========================================================================
    {
      id: "hc1-brand-impact",
      type: "highlightCard",
      content: {
        heading: "The Consistency Advantage",
        insights: [
          "Brand recognition increases by 80% with consistent voice",
          "Trust scores are 71% higher for consistent brands",
          "Content efficiency increases 300% with AI + clear guidelines",
        ],
      },
    },

    // ==========================================================================
    // SCENARIO CARD: Brand Voice Example
    // ==========================================================================
    {
      id: "scenario-brand-voice",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario: Brand Voice Gone Wrong",
        situation:
          "Sarah is the sole marketer at a growing startup. She's been creating content for 6 months, writing everything herself. Now the company is hiring more writers and Sarah needs to ensure everyone sounds like the same brand.",
        challenge:
          "Every writer has their own style. Without clear guidelines, the brand voice will fragment across channels. Customers might feel confused about who the company is.",
        context:
          "The startup's original voice was witty and approachable, but as they grew, the tone drifted toward generic corporate speak.",
        outcome:
          "Sarah creates a brand voice document with 3 defining adjectives, clear do's and don'ts, and 10 example sentences. She trains the AI on these guidelines. Now every writer—including AI—produces consistent, on-brand content.",
      },
    },

    // ==========================================================================
    // SECTION 4: Guidelines Prompt
    // ==========================================================================
    {
      id: "s4-guidelines",
      type: "quickPrompt",
      content: {
        heading: "Creating Brand Voice Guidelines",
        description: "Define your voice in 3 steps using this template:",
        promptText:
          "STEP 1 - DESCRIBE YOUR VOICE IN 3 WORDS: Example: \"Professional, approachable, witty\"\n\nSTEP 2 - DEFINE WHAT EACH MEANS:\nProfessional: We use proper grammar and complete sentences. No slang or text-speak.\nApproachable: We write like we're talking to a colleague. We avoid jargon.\nWitty: We occasionally use humor. We're playful, not silly.\n\nSTEP 3 - PROVIDE EXAMPLES: Show 3 examples of on-brand writing and 3 examples of off-brand writing.",
        placeholders: ["Your 3 adjectives", "Definitions", "Examples"],
      },
    },

    // ==========================================================================
    // SECTION 5: Brand Example
    // ==========================================================================
    {
      id: "s5-brand-example",
      type: "text",
      content: {
        title: "Brand Voice in Action",
        paragraphs: [
          "AI tends to generate generic output. Your job is aligning it with your brand voice through specific direction and editing. This example shows the transformation from generic AI output to brand-aligned content.",
          'For a professional software company, you\'d remove the excessive exclamation points that feel amateurish. You\'d cut empty words like "amazing" and "fantastic" that add nothing substantive. You\'d eliminate marketing fluff that obscures your actual message.',
          'Consider the contrast. The AI default reads: "Hello! We are excited to announce the launch of our amazing new product!!!" This sounds like every other marketing email, instantly forgettable. The brand-aligned version transforms it: "Introducing Atlas 2.0. After two years of development, we\'re launching the next generation of our project management platform." This version is specific, confident, and professional—exactly what a serious software company should sound like.',
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of brand voice importance
    // ==========================================================================
    {
      id: "q1-consistency",
      type: "quiz",
      content: {
        quiz: {
          question: "Why is consistent brand voice important?",
          options: [
            "It makes writing faster",
            "It builds recognition and trust",
            "AI requires it to function",
            "It simplifies decision making",
          ],
          correctAnswer: 1,
        },
        context: "Consistency creates recognition and builds trust with your audience.",
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual Break
    // ==========================================================================
    {
      id: "twi-voice-channels",
      type: "textWithImage",
      content: {
        title: "Consistency Across Channels",
        paragraphs: [
          "Your brand voice should adapt to each channel while staying recognizable.",
          "Website should be professional and polished. Email should be personal and direct. Social should be conversational and engaging. Blog should be educational and in-depth. Support should be empathetic and helpful.",
          "Same voice, different volume. AI handles the adaptation seamlessly when you provide channel-specific guidelines.",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-6-inline-1.webp",
        imageAlt: "Brand voice consistency across multiple channels",
      },
    },

    // ==========================================================================
    // SECTION 7: System Prompt Template
    // ==========================================================================
    {
      id: "s7-templates",
      type: "quickPrompt",
      content: {
        heading: "Brand Voice System Prompt",
        description: "Create a reusable prompt for all content:",
        promptText:
          "ROLE: You are a content writer for [Company Name], a [type of company] that helps [target customer] achieve [key benefit].\n\nVOICE: Write in a [tone] voice. Our brand is [3 adjectives]. We sound like [comparison].\n\nGUIDELINES:\nDO: [list 3-5 things you always do]\nDON'T: [list 3-5 things you never do]\n\nAUDIENCE: We're writing to [audience]. They care about [concerns]. Knowledge level: [beginner/intermediate/advanced].\n\nFORMAT: Structure as [format]. Keep it [length]. Include [required elements].",
        placeholders: ["Company", "Type", "Target", "Benefits", "Tone", "Adjectives"],
      },
    },

    // ==========================================================================
    // SECTION 8: Training AI on Your Brand
    // ==========================================================================
    {
      id: "s8-training",
      type: "text",
      content: {
        title: "Training AI on Your Brand",
        paragraphs: [
          "Training AI on your brand voice follows a five-step process that builds increasingly refined guidelines.",
          "Start by gathering examples—collect 10-20 pieces of your best content that truly represent how you want to sound. These become the reference material AI uses to understand your voice.",
          "Next, define your voice by documenting your 3-word voice description and what each adjective means in practice. This explicit definition helps AI understand the nuances behind your chosen words.",
          "Then create a system prompt—a reusable prompt that incorporates your voice guidelines, examples, and constraints. This becomes the foundation for every content request you make.",
          "After that, test outputs by generating content and checking for alignment with your brand. Note where AI gets it right and where it drifts. Finally, refine your guidelines by updating the prompt based on what works and what doesn't. This iterative improvement ensures your AI-generated content gets more on-brand over time.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT 1: Knowledge Check
    // ==========================================================================
    {
      id: "c1-checkpoint",
      type: "checkpoint",
      content: {
        question: "What is the minimum specificity needed for effective brand voice guidelines?",
        options: [
          'Just tell AI to "be professional"',
          "Provide 3 adjectives with examples of what each means",
          "Give AI 10 pages of instructions",
          "Let AI figure it out from your content",
        ],
        correctAnswer: 1,
        hint: "AI needs specific direction with examples to match your voice consistently.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Training Tips
    // ==========================================================================
    {
      id: "hc2-training-tips",
      type: "highlightCard",
      content: {
        heading: "Pro Tips for Training AI",
        insights: [
          "Show AI examples of both good AND bad content to learn from",
          "Update your system prompt monthly based on common corrections",
          "Create separate prompts for different content types (email, blog, social)",
        ],
      },
    },

    // ==========================================================================
    // SECTION 11: Brand Voice Review Checklist
    // ==========================================================================
    {
      id: "s11-checklist",
      type: "text",
      content: {
        title: "Brand Voice Review Checklist",
        paragraphs: [
          'Reviewing AI-generated content against your brand voice requires checking multiple dimensions. Start with the tone check—does this match our 3 adjectives? If your voice is "professional, warm, witty," the content should reflect all three qualities in balance.',
          "The language check ensures you're using approved vocabulary. Are there words or phrases that feel off-brand? Replace them with terms from your approved list. The perspective check confirms you're writing from the right point of view—first person, second person, or third person, depending on your brand standards.",
          "The personality check asks the crucial question: does this sound like us or generic AI output? Generic content lacks the unique perspective and voice that makes your brand recognizable. The consistency check compares this piece against your other content—would it fit seamlessly alongside what you've already published?",
          "Finally, the quality check ensures the content meets your standards regardless of voice. Even perfectly on-brand content needs to be accurate, well-structured, and valuable to your audience.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 12: Scaling Content with Consistent Voice
    // ==========================================================================
    {
      id: "s12-scaling",
      type: "text",
      content: {
        title: "Scaling Content with Consistent Voice",
        paragraphs: [
          "With clear guidelines, you can scale content production without losing consistency. The difference between having guidelines and not having them becomes increasingly apparent as your content volume grows.",
          "Without guidelines, scaling content creates chaos. Each output sounds different from the last, requiring heavy editing every time. Brand voice drifts over time as different writers interpret the brand differently. The team produces inconsistent work that confuses your audience.",
          "With clear guidelines, scaling becomes manageable. AI follows voice specifications exactly, producing consistent output every time. You need only minor edits rather than wholesale rewrites. Brand voice stays stable across all content. The whole team sounds the same, whether human or AI is writing. You can scale content dramatically without losing the consistency that makes your brand recognizable.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Team Alignment
    // ==========================================================================
    {
      id: "q2-team",
      type: "quiz",
      content: {
        quiz: {
          question: "How do you align a whole team on brand voice?",
          options: [
            "Let everyone develop their own style",
            "Create shared system prompts and example libraries",
            "Only let one person create content",
            "Don't use AI for content creation",
          ],
          correctAnswer: 1,
        },
        context: "Shared system prompts and examples ensure consistent voice across the team.",
      },
    },

    // ==========================================================================
    // SECTION 15: Start Today
    // ==========================================================================
    {
      id: "s15-actions",
      type: "text",
      content: {
        title: "Start Today: 3 Action Items",
        paragraphs: [
          "Building consistent brand voice starts with three concrete actions you can take today.",
          'First, define your 3 words by choosing 3 adjectives that describe your brand voice. These should be specific enough to guide content creation—"professional" is better than "good," and "witty but not silly" is even more precise.',
          'Second, gather examples by saving 5 pieces of content that perfectly capture your voice. These become your reference library for training AI and aligning team members on what "on-brand" actually looks like.',
          "Third, create a system prompt that incorporates your voice guidelines. This reusable prompt becomes the foundation for every AI content request, ensuring consistency without having to re-explain your voice every time.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual Break
    // ==========================================================================
    {
      id: "twi-closing",
      type: "textWithImage",
      content: {
        title: "Consistent Voice at Scale",
        paragraphs: [
          "Your brand voice is your fingerprint. It's how people recognize you.",
          "With clear guidelines and AI, you can maintain that voice while producing content at scale.",
          "Every piece. Every channel. Every time. On brand.",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-6-inline-1.webp",
        imageAlt: "Consistent brand voice across all content",
      },
    },

    // ==========================================================================
    // TOOL REFERENCE
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT or Claude to create your brand voice system prompt",
        task: "Train AI on your brand voice for consistent content generation",
        feature: "Custom Instructions (ChatGPT) or Projects (Claude) for persistent brand voice",
        tip: "Save your brand voice guidelines as a Custom Instruction so AI always knows your voice",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK SECTION (inline at end)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your Brand Voice Guidelines",
        purpose:
          "Build a reusable brand voice system that ensures consistency whether you or AI creates content.",
        instructions: [
          'Choose 3 adjectives that describe your desired voice (e.g., "Professional, warm, witty")',
          "For each adjective, write 2-3 sentences about what that means in practice",
          "Find 2-3 examples of content that matches your voice",
          "Create a system prompt using these guidelines and test it with AI",
          "Document what AI got right and what you needed to adjust",
        ],
        deliverable:
          "Your brand voice guidelines document with: 3 adjectives, definitions, examples, and a sample AI-generated output showing before/after your edits.",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "Write content for [your company] in a [adjective 1], [adjective 2], [adjective 3] voice.\n\nWe sound like [comparison brand or description].\n\nDO: [specific things you always do]\nDON'T: [specific things you never do]\n\nTopic: [your topic]",
        successCriteria: [
          "Three adjectives are specific and distinct (not synonyms)",
          "Each adjective has clear, actionable definition",
          "System prompt produces recognizable on-brand content",
          "You identified at least one adjustment needed to improve AI output",
        ],
      },
    },
  ] as LessonSection[],
};
