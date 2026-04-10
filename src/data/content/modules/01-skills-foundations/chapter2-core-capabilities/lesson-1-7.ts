/**
 * Lesson 1.7: AI As Your Thinking Partner
 *
 * PURPOSE: Teach learners how to use AI for interactive thinking and decision support
 *
 * FORMAT: Article with sections, quizzes, and checkpoint
 *
 * KEY CONCEPTS:
 * - Moving beyond Q&A to dialogue-based AI interactions
 * - AI as thinking partner vs oracle
 * - Role-playing techniques
 * - Knowing when NOT to use AI for thinking
 *
 * Duration: 24 minutes
 * XP: Base 50 x 1.2 (20-30min) x 1.0 (Beginner) + 20 bonus = 80 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_1_7: Lesson = {
  id: "foundations-7",
  chapterId: "ch2-core-capabilities",
  moduleId: "01-skills-foundations",
  lessonCategory: "tutorial",
  title: "AI As Your Thinking Partner",
  description: "Use AI for ideas, trade-offs, and decisions instead of only direct answers.",
  order: 8,
  estimatedMinutes: 24,
  format: "article",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "AI as Your Thinking Partner",
  xpReward: 80,
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/foundations-7-cover.webp",
        imageAlt: "Person having a thoughtful conversation with AI",
        title: "AI As Your Thinking Partner",
        subtitle: "Move beyond quick answers and use AI to think through real problems",
      },
    },

    // ==========================================================================
    // SECTION 1: Q&A VS THINKING PARTNERSHIP
    // ==========================================================================
    {
      id: "section-1",
      type: "textWithBullets",
      content: {
        title: "Q&A vs Thinking Partnership",
        paragraphs: [
          "The difference: Dialogue builds clarity. One-shot downloads don't.",
          "",
          "Don't just get answers. Have conversations.",
        ],
        bullets: [
          "**Q&A Approach:**",
          'User: "What\'s the capital of Australia?"',
          'AI: "Canberra."',
          "One-shot answers. No exploration.",
          "",
          "**Thinking Partnership:**",
          'User: "I\'m struggling with a decision. Can you help me think through it?"',
          'AI: "Of course. What\'s the situation?"',
          "Dialogue, not one-shot. Exploration, not answers.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: IDEAL SCENARIOS
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Ideal Scenarios for Thinking Conversations",
        paragraphs: [
          "**Decision Making:** Choosing between options, weighing trade-offs, evaluating risks and benefits.",
          "",
          "**Problem Solving:** Unblocking stuck thinking, generating alternative approaches, finding blind spots.",
          "",
          "**Planning:** Project strategy, career decisions, complex coordination.",
          "",
          "**Analysis:** Understanding situations, identifying patterns, exploring implications.",
        ],
      },
    },

    // ==========================================================================
    // PRO TIP: WHEN TO USE THINKING CONVERSATIONS
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Pro Tip: The Best Use Case is Complexity",
        insights: [
          "Simple questions get simple answers. Thinking conversations shine when you're facing complexity, trade-offs, or decisions where there's no single right answer.",
          "If you know exactly what you need, ask directly. If you're exploring, have a conversation.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: BEST USE CASE
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Thinking conversations are for exploration, not quick answers.",
        quiz: {
          question: "Which of the following is BEST suited for an AI thinking conversation?",
          options: [
            "Finding the capital of Australia",
            "Exploring whether to accept a job offer with trade-offs",
            "Getting a quick definition of a term",
            "Writing a simple email template",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 3: HOW TO STRUCTURE
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "How to Structure Thinking Conversations",
        paragraphs: [
          '**Start:** "I need to think through something. Can you help me explore it?"',
          "",
          "**Context:** Describe the situation clearly—background, constraints, stakes.",
          "",
          '**The Ask:** "Don\'t just give me an answer. Ask me questions. Help me think through this."',
          "",
          "**The Exchange:** AI asks clarifying questions. You provide context. AI offers perspectives, not prescriptions. You react, refine, redirect.",
          "",
          "**The Outcome:** You reach a conclusion through dialogue—not receive one as a download.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: STARTER
    // ==========================================================================
    {
      id: "quick-prompt-starter",
      type: "quickPrompt",
      content: {
        heading: "Thinking Conversation Starter",
        description: "Use this to begin any thinking partnership conversation with AI",
        promptText:
          "I need to think through something. Can you help me explore it by asking me questions instead of just giving me answers?\n\nHere's the situation: [Describe your situation]\n\nWhat I'm struggling with: [What's unclear or difficult]\n\nPlease ask me questions to help me think through this.",
        placeholders: ["Describe your situation", "What's unclear or difficult"],
      },
    },

    // ==========================================================================
    // SECTION 4: REAL EXAMPLE
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Real Example: Career Decision",
        paragraphs: [
          'User: "I\'m offered a promotion. More pay and title, but much more stress and longer hours. Should I take it?"',
          "",
          "AI: \"Let me ask you some questions: What does 'more stress' look like specifically? How's your current work-life balance? What opportunities would this create 2-3 years out?\"",
          "",
          'User: "Stress means weekend work. Current balance is okay but bored long-term. This opens doors to director level."',
          "",
          "AI: \"Interesting—you're trading present comfort for future growth, but the cost is weekend time. What's one thing that would make this trade feel worth it?\"",
          "",
          "Notice: AI didn't decide. It helped clarify.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT 1: PRACTICE SCENARIO
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question:
          "You want to practice a sales pitch. How would you start the thinking conversation?",
        options: [
          "Write a sales pitch for me",
          "Can you roleplay as a skeptical customer? I'm going to pitch you my product, and I want you to raise the objections that real customers would have",
          "Tell me how to sell things",
          "Give me a list of sales techniques",
        ],
        correctAnswer: 1,
        hint: "Think about interactive practice vs. getting information.",
      },
    },

    // ==========================================================================
    // SECTION 5: ROLE-PLAYING
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Ask AI to Play a Role",
        paragraphs: [
          "**Devil's Advocate:** \"Be my devil's advocate. I'm considering [decision], and I want you to challenge my thinking and point out risks I might be ignoring.\"",
          "",
          '**Mentor:** "Act as my mentor. I\'m going to describe a work situation, and I want you to ask me the questions a good mentor would ask—not solve the problem for me."',
          "",
          '**Customer:** "Can you roleplay as a skeptical customer? I\'m going to pitch you my product, and I want you to raise the objections that real customers would have."',
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: ROLE-PLAYING
    // ==========================================================================
    {
      id: "quick-prompt-roleplay",
      type: "quickPrompt",
      content: {
        heading: "Role-Play Prompt Template",
        description: "Use this template to have AI play any role for practice or perspective",
        promptText:
          "Can you roleplay as [role type]? I want to [purpose].\n\nContext: [What situation are you practicing/exploring?]\n\nYour role: Act as [specific characteristics of the role]\n\nMy goal: [What do you want to learn or practice?]",
        placeholders: [
          "role type",
          "purpose",
          "What situation are you practicing/exploring?",
          "specific characteristics of the role",
          "What do you want to learn or practice?",
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: WHY DIALOGUE BEATS ONE-SHOT
    // ==========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Why Dialogue Beats One-Shot",
        paragraphs: [
          'One-shot: "How should I handle a conflict between two employees?" -> Gets generic advice.',
          "",
          "Dialogue: Multiple exchanges where AI asks for context you hadn't considered, identifies assumptions you're making, suggests angles you hadn't thought of.",
          "",
          "**The result:** You don't just get advice—you develop better judgment.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 7: WHAT NOT TO DO
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "What Not to Do",
        paragraphs: [
          '**Mistake 1:** Asking "What should I do?" -> "Help me think through my options."',
          "",
          '**Mistake 2:** Treating AI as oracle -> "You have perspective I don\'t. Help me see this from different angles."',
          "",
          "**Mistake 3:** One conversation and done -> ThinkingPartner is iterative.",
          "",
          "**Mistake 4:** Not doing your own thinking -> AI should augment your thinking, not replace it.",
        ],
      },
    },

    // ==========================================================================
    // PRO TIP: AI AUGMENTS, NOT REPLACES
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Pro Tip: AI Augments, Not Replaces",
        insights: [
          "The goal isn't to outsource your thinking to AI. It's to have a thinking partner that helps you see blind spots, consider alternatives, and reach your own conclusions.",
          "The best thinking conversations end with you having more clarity—not with AI telling you what to do.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: LIMITATIONS
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "AI has limitations. Knowing them prevents bad outcomes.",
        quiz: {
          question: "For which of the following should you NOT use AI as a thinking partner?",
          options: [
            "Exploring career options and trade-offs",
            "Thinking through a complex project strategy",
            "Deciding whether to end a long-term relationship",
            "Brainstorming solutions to a work problem",
          ],
          correctAnswer: 2,
        },
      },
    },

    // ==========================================================================
    // SECTION 8: KNOW THE LIMITS
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Know the Limits",
        paragraphs: [
          "**Don't use AI ThinkingPartner for:** Highly personal decisions (family, relationships), situations requiring human emotional intelligence, domain expertise you should develop yourself, time-sensitive crisis decisions.",
          "",
          "**Remember:** AI has no lived experience, no skin in the game, and no accountability for the outcome. Use it for thinking support, not outsourcing judgment.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 9: BEFORE/DURING/AFTER
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Before Your Next Thinking Conversation",
        paragraphs: [
          "**Before:** Define what you want to think through, gather relevant context, set aside 10-15 minutes minimum.",
          "",
          "**During:** Answer AI's questions honestly, push back when you disagree, ask for clarification, notice your own reactions.",
          "",
          "**After:** What new insight did you gain? What do you want to explore further? What action, if any, will you take?",
        ],
      },
    },

    // ==========================================================================
    // SECTION 10: CLOSING
    // ==========================================================================
    {
      id: "section-10",
      type: "textWithImage",
      content: {
        title: "Think WITH AI, Not Just TO AI",
        paragraphs: [
          "Start having thinking conversations today",
          "Dialogue builds clarity. One-shot answers don't.",
        ],
        imageUrl: "/images/courses/modules/01-skills-foundations/foundations-7-inline-1.webp",
        imageAlt: "Successful thinking partnership visualization",
      },
    },

    // ==========================================================================
    // TOOL REFERENCE
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "Start a thinking conversation",
        task: "Use Claude to think through a real decision or problem you're facing",
        feature: "Extended thinking mode",
        tip: "Claude excels at nuanced, thoughtful conversations - perfect for complex decisions and analysis",
      },
    },

    // ==========================================================================
    // MAIN CHALLENGE: ACTIONABLE TASK
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Have a Thinking Conversation",
        purpose:
          "Experience the difference between asking AI for answers and thinking with AI. You'll be surprised at what emerges.",
        instructions: [
          "Think of a real decision or problem you're facing",
          'Start with: "I need to think through something. Can you help me explore it by asking me questions?"',
          "Have at least 3 back-and-forth exchanges with AI",
          "Notice what insights emerge that you hadn't considered",
          "Reflect on what clarity you gained",
        ],
        deliverable:
          "Your topic, 2-3 insights from the conversation, and whether this approach was helpful",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "I need to think through something. Can you help me explore it by asking me questions instead of just giving me answers?\n\nHere's the situation: [Your situation]\n\nPlease ask me questions to help me think through this.",
        successCriteria: [
          "You had at least 3 exchanges with AI",
          "AI asked you questions rather than giving direct answers",
          "You gained at least one new insight or perspective",
          "You understand when this approach is useful vs. when to ask directly",
        ],
      },
    },
  ],
};
