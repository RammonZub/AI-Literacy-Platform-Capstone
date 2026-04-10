/**
 * Lesson 7.26: Fact-Checking, Bias, and Responsible Use
 *
 * CHAPTER: 7 - Privacy, Security, and Responsible AI
 * LESSON: 2 of 2 - Using AI Reliably and Ethically
 *
 * DURATION: 15 minutes (critical professional skill)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach learners how to verify AI outputs, recognize limitations,
 * and develop responsible AI usage habits for professional contexts
 *
 * KEY RESPONSIBILITIES:
 * - Explain why AI sometimes produces incorrect information (hallucinations)
 * - Provide practical verification techniques
 * - Help learners understand when to trust vs. verify
 * - Introduce bias awareness in AI responses
 * - Guide creation of a personal AI use policy
 */

import type { Lesson } from "@/types/content";

export const lesson_7_26: Lesson = {
  id: "lesson-7-26",
  chapterId: "ch7-7-privacy",
  moduleId: "07-tools-gemini",
  title: "Fact-Checking, Bias, and Responsible Use",
  description:
    "Learn why AI makes mistakes, how to verify information, and when to trust your AI assistant",
  order: 26,
  estimatedMinutes: 15,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-26-cover.webp",
        imageAlt: "Verification and fact-checking concept with magnifying glass",
        title: "Fact-Checking and Responsible AI Use",
        subtitle: "Trust but verify - the key to effective AI partnership",
      },
    },
    // ===========================================================================
    // SECTION 1: Why AI 'Hallucinates'
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why AI Sometimes Gets It Wrong",
        paragraphs: [
          "AI 'hallucination' sounds scary, but it simply means the AI sometimes generates information that sounds confident but isn't accurate.",
          "",
          "**Why this happens**: AI doesn't 'know' facts like we do. It generates responses based on patterns in its training data. Sometimes those patterns lead to plausible-sounding but incorrect answers.",
          "",
          "**Common hallucination types**:",
          "- Made-up statistics or studies that don't exist",
          "- Incorrect dates, names, or historical events",
          "- Fabricated quotes attributed to real people",
          "- Citations to sources that don't exist",
          "- Confident assertions about topics the AI has limited information about",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Highlight Card - Gemini's Advantage
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Gemini's Real-Time Search Advantage",
        insights: [
          "Gemini can search Google for current information",
          "Responses include source links for verification",
          "Better accuracy for recent events and news",
          "Still requires verification - AI isn't perfect even with search",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Simple Verification Techniques
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Simple Verification Techniques",
        paragraphs: [
          "Building reliable verification habits transforms AI from a potential source of misinformation into a trustworthy assistant. When Gemini provides source links, always click through to verify that the information actually exists and says what's claimed. This simple step catches many potential errors before they affect your work. Source links are one of Gemini's key advantages over other AI tools, so make the most of them.",
          "",
          "For critical information, cross-reference with a second source. This might be another AI tool, a traditional search engine, or a subject matter expert. Important decisions deserve multiple perspectives, and no single source should be trusted blindly. You can also prompt Gemini itself to acknowledge uncertainty by asking 'How confident are you about this? What are your sources?' This question often reveals caveats and limitations that a straightforward answer might not mention.",
          "",
          "Learn to recognize warning signs in AI responses. Vague claims without specifics are red flags that warrant extra scrutiny. Responses with specific, verifiable details deserve more trust than general assertions. Finally, trust your own expertise. If you know a topic well and something in an AI response seems off, verify it. Your professional judgment is a valuable filter that catches errors AI might make in your areas of expertise.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: When to Trust vs Verify
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "When to Trust vs. When to Verify",
        paragraphs: [
          "Not everything needs verification. Learn to calibrate:",
          "",
          "**Generally safe to trust AI for**:",
          "- Brainstorming and ideation",
          "- First drafts you'll review and edit",
          "- Explanations of well-established concepts",
          "- Writing assistance (grammar, tone, structure)",
          "- Coding help (you'll test the code anyway)",
          "",
          "**Always verify before using**:",
          "- Statistics and specific numbers for presentations",
          "- Legal, medical, or financial guidance",
          "- Claims about people, companies, or events",
          "- Anything that will be published or shared publicly",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-26-inline-1.webp",
        imageAlt: "Decision-making and verification process",
      },
    },
    // ===========================================================================
    // SECTION 5: Recognizing Bias
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Recognizing Potential Bias in AI Responses",
        paragraphs: [
          "AI models learn from human-created content, which means they can reflect biases present in that content. Being aware helps you use AI more thoughtfully.",
          "",
          "**Types of bias to watch for**:",
          "- **Cultural bias**: Responses may reflect Western/English-speaking perspectives more strongly",
          "- **Historical bias**: Training data reflects past inequalities and stereotypes",
          "- **Representation bias**: Some groups or viewpoints may be underrepresented",
          "- **Confirmation bias**: AI may reinforce common misconceptions",
          "",
          "**Practical approach**: When asking about sensitive topics, be aware that AI responses might not represent all perspectives equally. For important decisions, seek diverse sources beyond AI.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Bias in Practice
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Bias in Practice: What to Watch For",
        paragraphs: [
          "Understanding how bias manifests in AI responses helps you use these tools more thoughtfully. In leadership examples, AI might default to male pronouns when discussing CEOs, engineers, or executives, reflecting historical patterns in these roles. Being aware of this tendency helps you recognize when AI responses may not represent the full diversity of modern professional environments.",
          "",
          "Geographic assumptions often appear in seemingly neutral language. References to 'standard business hours' typically assume US time zones unless specified otherwise. Calendar references may center on Western workweeks and holidays. When working with international colleagues or global markets, these assumptions can create blind spots that affect your communication and planning.",
          "",
          "Cultural references frequently favor Western holidays, customs, and practices. Examples may draw from Western business contexts that don't translate globally. Historical narratives might be presented from dominant cultural perspectives rather than acknowledging multiple viewpoints. Career advice may reflect traditional paths over emerging alternatives, potentially overlooking newer industries or non-linear career trajectories. None of these biases make AI unusable, but awareness helps you critically evaluate responses and supplement AI information with diverse perspectives when important decisions are at stake.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Highlight Card - Your Personal AI Use Policy
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Creating Your Personal AI Use Policy",
        insights: [
          "Define what tasks you'll use AI for vs. tasks requiring human judgment",
          "Set your verification threshold: what requires double-checking?",
          "Establish attribution practices for your context",
          "Identify information types you'll never share with AI",
          "Create a review process for AI-assisted work before sharing",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Sample Policy Template
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Sample Personal AI Use Policy",
        paragraphs: [
          "Consider adapting this template for your own use:",
          "",
          "**My AI Usage Guidelines**",
          "",
          "**I will use AI for**: Drafting, brainstorming, research synthesis, formatting assistance, learning new topics, and improving my writing.",
          "",
          "**I will NOT use AI for**: Final decisions on legal, medical, or financial matters; anything requiring licensed professional expertise; generating content without review.",
          "",
          "**I will always verify**: Statistics cited in presentations; claims about specific people or companies; anything client-facing; technical specifications.",
          "",
          "**I will never share**: Passwords, client confidential information, employee data, financial account details, health information.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: The Golden Rule
    // ===========================================================================
    {
      id: "section-9",
      type: "textWithImage",
      content: {
        title: "The Golden Rule of AI Use",
        paragraphs: [
          "AI is an amplifier of your capabilities, not a replacement for your judgment.",
          "",
          "**Trust but verify** - especially for anything that matters.",
          "",
          "**Use AI as a starting point**, not a final answer.",
          "",
          "**Stay in the loop** - review, edit, and take ownership of AI-assisted work.",
          "",
          "The professionals who benefit most from AI are those who combine its speed and breadth with their own expertise, judgment, and ethical standards.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-26-inline-2.webp",
        imageAlt: "Professional judgment and ethical AI use",
      },
    },
    // ===========================================================================
    // SECTION 10: Quick Prompt Practice
    // ===========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Practice: Asking for Confidence",
        description: "Learn to prompt Gemini to acknowledge uncertainty when discussing facts:",
        promptText:
          "I need information about [topic]. Please provide what you know, indicate how confident you are in each point, and cite any sources. If you're uncertain about anything, please say so explicitly.",
      },
    },
    // ===========================================================================
    // SECTION 11: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-11",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this exercise",
        task: "Practice asking Gemini to show uncertainty and cite sources when providing factual information",
        feature: "Search with sources",
        tip: "Pay attention to the source links Gemini provides - click through to verify",
      },
    },
    // ===========================================================================
    // SECTION 12: Quiz (Knowledge Check)
    // ===========================================================================
    {
      id: "section-quiz",
      type: "quiz",
      content: {
        context: "Quick check on responsible AI use and verification practices.",
        quiz: {
          question: "When should you ALWAYS verify AI-generated information before using it?",
          options: [
            "Only when the AI says it's uncertain",
            "For statistics, claims about people/companies, and anything that will be published or shared publicly",
            "Never - AI is always accurate",
            "Only for personal projects",
          ],
          correctAnswer: 1,
        },
      },
    },
    // ===========================================================================
    // SECTION 13: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Draft Your Personal AI Use Policy",
        purpose:
          "Create a simple, practical policy that guides your AI use in professional settings",
        instructions: [
          "Copy the sample policy template from this lesson",
          "Customize each section for your specific role and industry",
          "Add 2-3 specific items unique to your work context",
          "Save it where you can reference it when using AI",
        ],
        deliverable: "Your personalized AI use policy document",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "My role is [YOUR ROLE] in [YOUR INDUSTRY]. Help me create a personal AI use policy that covers:\n1. Tasks I'll use AI for\n2. Tasks I won't delegate to AI\n3. What I'll always verify\n4. What I'll never share",
        successCriteria: [
          "Policy covers at least 4 use categories",
          "Guidelines are specific to your role",
          "Policy is saved somewhere accessible",
          "You've identified at least 2 verification checkpoints",
        ],
      },
    },
    // ===========================================================================
    // SECTION 14: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Chapter 7 Complete: Privacy and Responsible AI Mastery",
        description:
          "You've completed the crucial privacy and responsibility chapter. You now understand how to protect sensitive information, verify AI outputs, recognize potential bias, and create your own AI use guidelines. These skills will serve you throughout your AI journey - and they're increasingly valued in professional settings. You're ready to use Gemini confidently and responsibly.",
        xpReward: 100,
        buttonText: "Complete Privacy & Responsibility Chapter",
      },
    },
  ],
};
