/**
 * Lesson 2.2: Context Management (ARTICLE FORMAT)
 *
 * PURPOSE: Master long conversations, large documents, and AI memory
 *
 * XP CALCULATION:
 * - Base: 75 XP
 * - Length: 52 min -> x1.0
 * - Difficulty: x1.2 (Intermediate)
 * - Quizzes: +20 XP
 * - Checkpoint: +5 XP
 * - Total: 115 XP
 *
 * Duration: 52 minutes
 * XP REWARD: 115 points
 */

import type { Lesson } from "@/types/content";

export const lesson_2_2: Lesson = {
  id: "lesson-2-2",
  chapterId: "ch2-1-prompting",
  moduleId: "02-skills-productivity",
  lessonCategory: "tutorial",
  title: "Keep AI On Track With Good Context",
  description: "Learn how context, memory, and documents shape longer conversations",
  order: 2,
  estimatedMinutes: 15,
  xpReward: 115,
  format: "article",
  coverImage: "/images/courses/lessons/modules/email-automation-and-productivity.webp",
  coverTitle: "Keep AI On Track With Good Context",

  sections: [
    // ==========================================================================
    // HERO IMAGE SECTION
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/02-skills-productivity/lesson-2-2-cover.webp",
        imageAlt: "Context management workspace",
        title: "Keep AI On Track With Good Context",
        subtitle: "Learn how context, memory, and documents shape longer conversations",
      },
    },

    // ==========================================================================
    // SECTION 1: THE CONTEXT FRUSTRATION
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Context Frustration",
        paragraphs: [
          "You're having a great conversation with AI. It's nailing your project-remembering every detail. Suddenly, mid-way through, it forgets everything.",
          "This isn't a bug. It's how AI memory works. Understanding it saves hours of frustration.",
          "Context is the information AI \"remembers\" from your conversation. Your questions, AI's responses, documents you've uploaded, preferences you've expressed.",
          "Good context equals better responses. But context has limits.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: SARAH'S STORY
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Sarah Experienced",
        paragraphs: [
          'Sarah was analyzing a 50-page report with AI. She uploaded section 1, then section 2, then section 3. Mid-way through section 4, AI said: "I notice the context is getting quite long. I may start losing some details from the earlier sections."',
          "Panic set in. All that work, and it was going to forget everything. Sarah learned the hard way that AI has limits, and managing those limits is the difference between frustration and flow. Understanding how context works would have saved her hours of frustration.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: CONTEXT BASICS
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Understanding Context Limits",
        insights: [
          'Context is the information AI "remembers" from your conversation',
          "When context fills up, AI starts losing earlier information to make room for new information",
          "Managing these limits strategically is the key to complex AI work",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Check understanding of context basics
    // ==========================================================================
    {
      id: "section-3",
      type: "quiz",
      content: {
        quiz: {
          question: "What happens when AI context fills up?",
          options: [
            "AI crashes and loses everything",
            "AI starts losing earlier information to make room for new information",
            "AI automatically archives old conversations",
            "AI asks you to start a new conversation",
          ],
          correctAnswer: 1,
        },
        context:
          'When context fills up, AI uses a "sliding window" approach-older information gets dropped to accommodate new information. This is why managing context strategically is crucial for long conversations.',
      },
    },

    // ==========================================================================
    // SECTION 3: MODEL CONTEXT LIMITS
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Model Context Limits",
        paragraphs: [
          "Know your limits and plan accordingly. ChatGPT offers approximately 128K tokens, which translates to roughly 100 pages of text, making it good for long conversations. Claude provides about 200K tokens or roughly 150 pages of text, making it the best choice for very long documents. Claude Projects takes this further with 200K+ tokens permanently available, supporting unlimited documents and making it perfect for complex, multi-file work.",
          "Don't get hung up on tokens as a technical measure. Think in pages instead: 1 page of text equals approximately 500 tokens. So ChatGPT handles about 250 pages, Claude handles about 400 pages, and Claude Projects offers unlimited capacity. Most work never hits these limits, but for big projects, you need to know what you're working with.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: VISUAL BREAK
    // ==========================================================================
    {
      id: "visual-break-1",
      type: "textWithImage",
      content: {
        title: "Context Window Visualization",
        paragraphs: [
          "Think of context like a sliding window. As new information enters, older information may slide out. Understanding this helps you plan your conversations strategically.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-2-inline-1.webp",
        imageAlt: "Professional workspace with organized tools",
        imageCaption: "Organized context leads to organized outputs",
      },
    },

    // ==========================================================================
    // SECTION 4: FOUR CONTEXT MANAGEMENT TECHNIQUES
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Four Context Management Techniques",
        paragraphs: [
          "These techniques will help you manage context effectively. The first technique is Document Consolidation: upload everything at once, not in pieces. Multiple uploads result in fragmented context where AI may miss connections between ideas. A consolidated upload provides a single document where AI sees the full picture and can reference information easily across all sections.",
          'The second technique is Strategic Reference. Point back to key information instead of repeating it. An inefficient approach would be: "Remember what we said about the Q1 earnings..." A much better approach is: "As discussed in slide 3, the Q1 earnings showed..." Use file numbers, timestamps, anchors, and recaps to help AI locate and reference earlier information precisely.',
          'The third technique is Periodic Recaps. Summarize every 10-15 exchanges with a prompt like: "Let me recap what we\'ve covered so far: [key points]. Continue from there." This refreshes context and creates checkpoints you can reference later, preventing the loss of important details in long conversations.',
          "The fourth technique is using Claude Projects for complex work. With 200K+ tokens available, you can upload entire document libraries, add custom instructions, and set project goals. Claude remembers everything across the project with no context limits and no forgotten details. This is the gold standard for managing large, complex work.",
        ],
      },
    },

    // ==========================================================================
    // COMPARISON TABLE: CONTEXT TECHNIQUES
    // ==========================================================================
    {
      id: "comparison-1",
      type: "comparisonTable",
      content: {
        title: "Context Management Techniques",
        intro: "Choose the right technique based on your situation.",
        columns: [
          { name: "Technique", recommended: true },
          { name: "When to Use" },
          { name: "Key Benefit" },
        ],
        rows: [
          {
            feature: "Document Consolidation",
            values: ["Multiple related documents", "Single unified context"],
          },
          { feature: "Strategic Reference", values: ["Long conversations", "Precise retrieval"] },
          { feature: "Periodic Recaps", values: ["Extended sessions", "Refreshed memory"] },
          { feature: "Claude Projects", values: ["Complex multi-file work", "Unlimited context"] },
        ],
        footer:
          "Combine techniques for best results - e.g., use Claude Projects with periodic recaps for large research projects.",
      },
    },

    // ==========================================================================
    // QUICK PROMPT: RECAP TEMPLATE
    // ==========================================================================
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Periodic Recap Prompt",
        description: "Use this prompt to refresh context during long conversations.",
        promptText: `Let me recap what we've covered so far:

1. [Key point 1]
2. [Key point 2]
3. [Key point 3]

Current focus: [What we're working on now]

Please continue from there, keeping these points in mind.`,
        placeholders: ["Key point 1", "Key point 2", "Key point 3", "What we're working on now"],
      },
    },

    // ==========================================================================
    // SECTION 5: LONG DOCUMENT HANDLING - TOM'S RESEARCH
    // ==========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Long Document Handling: Tom's Research",
        paragraphs: [
          "Tom was conducting competitive analysis with three 50-page reports. His old Chunking Strategy involved breaking documents into sections, processing each separately, and manually synthesizing the results. The result was fragmented understanding with missed connections, taking 4 hours of manual synthesis.",
          "His new Full Document Strategy is radically different: upload the entire document at once, let AI process it holistically, and receive better connections and insights. The result is comprehensive understanding with cross-document connections discovered automatically, taking just 5 minutes of AI processing versus 4 hours of manual work.",
          "The lesson is clear: let AI do the heavy lifting. Uploading full documents allows AI to make connections you might miss when chunking manually. The holistic view reveals patterns and relationships that fragmentation obscures.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: DOCUMENT STRATEGY
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "The Full Document Advantage",
        insights: [
          "Chunking: Break into pieces, process separately, manually synthesize = 4 hours",
          "Full Document: Upload entirely, AI processes holistically = 5 minutes",
          "Uploading full documents allows AI to make connections you might miss when chunking manually",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Check understanding of context techniques
    // ==========================================================================
    {
      id: "section-7",
      type: "quiz",
      content: {
        quiz: {
          question: "For a 100-page research document, what's the best approach?",
          options: [
            "Break it into 10-page chunks and process each separately",
            "Upload the entire document at once for holistic processing",
            "Summarize it yourself first, then upload the summary",
            "Use a different AI tool for each section",
          ],
          correctAnswer: 1,
        },
        context:
          "Uploading full documents allows AI to make connections across sections and understand the complete narrative arc. Chunking manually is time-consuming and risks missing important cross-references.",
      },
    },

    // ==========================================================================
    // SECTION 6: CLAUDE PROJECTS - THE GAME-CHANGER
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Claude Projects: The Game-Changer",
        paragraphs: [
          "Claude Projects is fundamentally different from regular conversations. You can upload entire document libraries, add custom instructions, and set project goals. Claude remembers everything across the project with no context limits and no forgotten details. This makes it perfect for book analysis, research synthesis, technical documentation, and legal contract review.",
          "Setting up a project is straightforward. First, create a project with a descriptive name that clearly identifies its purpose. Second, upload all relevant documents to give Claude the complete picture. Third, add project instructions and context to guide Claude's responses. Fourth, start chatting with full context awareness of everything in your project.",
          "The investment is minimal but the return is enormous: five minutes of setup saves hours of context management frustration. Once you experience the power of persistent, unlimited context, you'll wonder how you ever worked without it.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: VISUAL BREAK 2
    // ==========================================================================
    {
      id: "visual-break-2",
      type: "textWithImage",
      content: {
        title: "Claude Projects Setup",
        paragraphs: [
          "Setting up a Claude Project takes just five minutes but saves hours of context management. Upload all your documents, add custom instructions, and chat with full context awareness.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-2-inline-2.webp",
        imageAlt: "Organized project workspace",
        imageCaption: "Five minutes of setup saves hours of frustration",
      },
    },

    // ==========================================================================
    // QUICK PROMPT: PROJECT SETUP
    // ==========================================================================
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Claude Project Instructions Template",
        description: "Use this template when setting up a Claude Project for complex work.",
        promptText: `Project: [Project Name]

Documents included:
- [Document 1 name and purpose]
- [Document 2 name and purpose]
- [Document 3 name and purpose]

My goals for this project:
1. [Primary objective]
2. [Secondary objective]

Context about my work:
- I am a [your role]
- I need [specific output type]
- My audience is [target audience]

When helping me:
- Focus on [priority areas]
- Use [preferred format/style]
- Avoid [what to exclude]`,
        placeholders: [
          "Project Name",
          "Document 1 name and purpose",
          "Document 2 name and purpose",
          "Document 3 name and purpose",
          "Primary objective",
          "Secondary objective",
          "your role",
          "specific output type",
          "target audience",
          "priority areas",
          "preferred format/style",
          "what to exclude",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT: Test comprehensive understanding
    // ==========================================================================
    {
      id: "section-9",
      type: "checkpoint",
      content: {
        question:
          "You're starting a complex research project with 20 documents (200 pages total). Describe your context management strategy.",
        options: [
          "Upload documents one at a time and process each separately",
          "Use Claude Projects for unlimited context, upload all documents at once, create clear project structure with custom instructions, and use strategic references during conversations",
          "Summarize all documents yourself first, then upload summaries",
          "Use a different AI tool for each batch of 5 documents",
        ],
        correctAnswer: 1,
        hint: "Think about which tool offers unlimited context and how to organize complex work",
      },
    },

    // ==========================================================================
    // SECTION 7: CONTEXT BEST PRACTICES
    // ==========================================================================
    {
      id: "section-10",
      type: "textWithBullets",
      content: {
        title: "Context Best Practices",
        paragraphs: ["Follow these practices to master context management."],
        bullets: [
          "Start Fresh: New task equals new chat. Clean slate prevents confusion.",
          'Be Specific: Refer clearly to previous context: "As mentioned in slide 3..."',
          "Use Projects: Complex work? Use Claude Projects. Worth it every time.",
          "Check Limits: Approaching limit? Summarize and archive old context.",
          "Context management separates beginners from pros. Master it, and AI becomes infinitely more powerful.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: BEST PRACTICES SUMMARY
    // ==========================================================================
    {
      id: "highlight-3",
      type: "highlightCard",
      content: {
        heading: "Context Management Checklist",
        insights: [
          "Start Fresh: New task = new chat for clean slate",
          'Be Specific: Reference clearly - "As mentioned in slide 3..."',
          "Use Projects: Complex work deserves Claude Projects",
          "Check Limits: Approaching limit? Summarize and archive",
        ],
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
        action: "Open Claude and upload multiple related documents",
        task: "Test multi-document synthesis with the long context experiment",
        feature: "Use Claude Projects for complex research with unlimited context",
        tip: "Upload documents together for holistic processing rather than one at a time",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK (INLINE SECTION)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Long Context Experiment",
        purpose: "Experience firsthand how AI handles multi-document context and synthesis.",
        instructions: [
          "Prepare 2-3 related documents (reports, articles, or PDFs)",
          "Upload all documents to Claude or ChatGPT with file upload capability",
          'Ask a synthesis question: "What are the main connections between these documents?"',
          "Observe how AI synthesizes information across files",
          "Note any connections AI made that you hadn't considered",
        ],
        deliverable:
          "What you uploaded, what question you asked, and how well AI connected information across documents",
        estimatedTime: "10-15 minutes",
        starterPrompt: `I've uploaded [X] documents about [topic].

Please analyze them and answer:
1. What are the main themes across all documents?
2. What connections do you see between them?
3. What contradictions or tensions exist?
4. What's missing that would complete the picture?`,
        successCriteria: [
          "Uploaded multiple related documents together",
          "Asked a question requiring cross-document synthesis",
          "AI successfully identified connections between documents",
          "You observed how context enables better synthesis",
        ],
      },
    },
  ],
};
