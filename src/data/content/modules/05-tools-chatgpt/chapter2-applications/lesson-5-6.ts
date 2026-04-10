/**
 * Lesson 5.6: The Art of Asking Questions
 *
 * CHAPTER: 2 - ChatGPT Applications
 * LESSON: 6 of 10 - The Art of Asking Questions
 *
 * DURATION: 15 minutes (practical prompting foundations)
 * XP REWARD: 120 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_5_6: Lesson = {
  id: "lesson-5-6",
  chapterId: "ch5-2-applications",
  moduleId: "05-tools-chatgpt",
  title: "The Art of Asking Questions",
  description: "Transform vague requests into powerful prompts that get results",
  order: 6,
  estimatedMinutes: 15,
  xpReward: 120,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE - Start of lesson
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-6-cover.webp",
        imageAlt: "Communication and asking questions",
        title: "The Art of Asking Questions",
        subtitle: "Transform vague requests into powerful prompts that get results",
      },
    },
    // ===========================================================================
    // TOOL REFERENCE - Where to practice
    // ===========================================================================
    {
      id: "section-tool",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this lesson",
        task: "Open ChatGPT to practice the prompting techniques you'll learn",
        feature: "New conversation",
        tip: "Start a fresh conversation for each exercise to get clean responses",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Difference Between Questions and Prompts",
        paragraphs: [
          "Most people talk to ChatGPT like they'd talk to a colleague: casually, assuming shared context, expecting the AI to fill in the blanks.",
          "",
          "This works for simple things. But for professional work, it's like driving a sports car in first gear—you're not getting what you paid for.",
          "",
          "The art of prompting isn't about being clever with words. It's about giving ChatGPT enough context to generate what you actually need.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Why Most Prompts Fall Short",
        paragraphs: [
          'Let\'s look at what happens when context is missing. A vague request like "Write me an email about the meeting" tells ChatGPT almost nothing. What it hears is: "Write a generic email about a meeting with no specific details, audience, or purpose." The result is a template that could work for any meeting—which means it doesn\'t work well for YOUR meeting. It lacks the specificity that makes communication effective.',
          "",
          "The fix is adding context, audience, and goal. Compare that vague request to this specific prompt: \"Write a follow-up email after my client meeting. The client is concerned about timeline delays. Audience: Project manager who needs reassurance but also reality. Goal: Confirm revised timeline and next steps. Tone: Professional but empathetic.\" This prompt produces an email that addresses the actual situation with appropriate tone. The difference isn't magic—it's information. Every detail you add narrows the possibilities and guides ChatGPT toward exactly what you need.",
        ],
      },
    },
    // ===========================================================================
    // HIGHLIGHT CARD - Key insight
    // ===========================================================================
    {
      id: "section-highlight",
      type: "highlightCard",
      content: {
        heading: "The Golden Rule of Prompting",
        insights: [
          "Context transforms ChatGPT from a generic tool into a specialized assistant",
          "The more specific you are about your situation, the better ChatGPT can match patterns to your needs",
          "Think of prompting as providing the background a colleague would need to help you",
        ],
      },
    },
    // ===========================================================================
    // SCENARIO CARD - Real-world example
    // ===========================================================================
    {
      id: "section-scenario",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Maria runs a web design agency. After three years without price changes, she needs to inform her long-term clients about a 10% rate increase.",
        challenge:
          "She's never written a price increase email before and is worried about damaging client relationships. Most of her clients have been with her for 2+ years.",
        context:
          "Her agency has added project management services and improved delivery speed since the last pricing update.",
        outcome:
          "Using the Context + Goal + Constraints formula, Maria crafted an email that announced the increase while emphasizing added value and expressing genuine appreciation. Two clients replied with congratulations on the agency's growth.",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "The Three Essential Elements",
        paragraphs: [
          "Every effective prompt needs three components. Miss one, and you'll get mediocre results. The first element is context—what's the situation? This includes who you are, what your role is, what's happening right now, and what background matters. Context gives ChatGPT the frame it needs to generate relevant content. Without it, responses feel generic because they're not anchored to your specific reality.",
          "",
          'The second element is goal—what do you want? Be clear about what the output should accomplish, what the desired outcome is, and what problem you\'re solving. A prompt without a clear goal is like asking someone to "write something"—they might produce excellent content that serves completely the wrong purpose.',
          "",
          "The third element is constraints—what should guide the response? This covers tone (professional, friendly, urgent), length (one paragraph, detailed, bullet points), format (email, outline, talking points, code), and what to avoid (don't mention X, keep it simple). Constraints focus the output and prevent common mistakes. Think of them as guardrails that keep ChatGPT on the path you want.",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Real Example: From Weak to Strong",
        paragraphs: [
          "Watch how adding context changes everything. Attempt 1 is too vague: \"Tell my clients we're raising prices.\" This produces a generic message that could work for any business, doesn't address the client relationship, and offers no explanation or justification. It's the kind of email that damages relationships because it feels impersonal and abrupt.",
          "",
          'Attempt 2 is better but still missing context: "Write an email announcing a 10% price increase for my web design clients." This is more specific but still impersonal. It doesn\'t acknowledge client loyalty or mention the value improvements that justify the increase. The result will feel like a transaction rather than a relationship.',
          "",
          "Attempt 3 applies the full formula: \"I run a web design agency. We're raising prices by 10% for the first time in 3 years because we've added project management and faster delivery. Most clients have been with us 2+ years. Write an email that: announces the increase, explains the added value they'll receive, expresses appreciation for their loyalty, and gives 60 days notice before it takes effect. Tone: Grateful but professional. Don't apologize for the increase.\" This prompt produces an email that acknowledges the specific situation, respects the client relationship, focuses on value rather than just price, and maintains clear, professional tone throughout.",
        ],
      },
    },
    // ===========================================================================
    // TEXT WITH IMAGE - Visual break
    // ===========================================================================
    {
      id: "section-image",
      type: "textWithImage",
      content: {
        title: "Context is Everything",
        paragraphs: [
          "The more context you provide, the better ChatGPT understands your unique situation. Think of it like onboarding a new team member - the more background you share, the better they can help.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-6-inline-1.webp",
        imageAlt: "Email communication and context",
      },
    },
    // ===========================================================================
    // QUICK PROMPT - Practice template
    // ===========================================================================
    {
      id: "section-quickprompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Transform Your Own Prompt",
        description:
          "Think of a task you do regularly at work. Write a weak prompt (what you'd normally ask), then transform it using Context + Goal + Constraints.",
        promptText:
          "I need to [task] for [audience]. Context: [your situation and background]. Goal: [what you want to achieve]. Constraints: [tone, length, format, what to avoid].",
        placeholders: [
          "task",
          "audience",
          "your situation",
          "what you want to achieve",
          "tone, length, format",
        ],
      },
    },
    // ===========================================================================
    // ACTIONABLE TASK - At END with full format
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Real Email Transformation",
        purpose:
          "Applying the prompting formula to a real email you've been avoiding proves the practical value of these skills and gives you a template for future difficult emails.",
        instructions: [
          "Think of a real email you've been putting off or dreading",
          "Write down what makes this email challenging",
          "Apply the Context + Goal + Constraints formula to create your prompt",
          "Test it in ChatGPT and refine the draft until you're satisfied",
        ],
        deliverable: "A completed email draft ready to send, plus the prompt template you used",
        estimatedTime: "10 minutes",
        starterPrompt:
          "I need to write an email to [recipient] about [topic]. Context: [your situation and relationship]. Goal: [what you want to achieve]. Constraints: [tone, length, what to include/avoid]. The challenging part is [why this is hard].",
        successCriteria: [
          "Used all three elements: Context, Goal, Constraints",
          "Addressed the specific challenge that made the email difficult",
          "The draft is ready to send (or needs only minor personal touches)",
        ],
      },
    },
    // ===========================================================================
    // CHECKPOINT - End-of-lesson
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What are the three essential elements every effective prompt needs?",
        options: [
          "Length, vocabulary, and creativity",
          "Context, Goal, and Constraints",
          "Keywords, format, and examples",
          "Speed, accuracy, and detail",
        ],
        correctAnswer: 1,
        hint: 'Review "The Three Essential Elements" and "Why Most Prompts Fall Short" sections if needed.',
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Your First Strong Prompt",
        description:
          "You've learned the formula that separates casual users from professionals who get consistent results from AI.",
        xpReward: 120,
        buttonText: "Complete Prompt Practice",
      },
    },
  ],
};
