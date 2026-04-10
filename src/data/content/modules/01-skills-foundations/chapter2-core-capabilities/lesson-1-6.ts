/**
 * Lesson 1.6: Turn Reading Into Listening With NotebookLM
 *
 * PURPOSE: Teach learners how to use NotebookLM to convert documents into audio overviews
 *
 * FORMAT: Article with sections, quizzes, and checkpoint
 *
 * KEY CONCEPTS:
 * - Upload documents, get AI-generated podcast
 * - Source-grounded (no hallucinations)
 * - Multi-document analysis
 * - Free Google tool
 *
 * Duration: 20 minutes
 * XP: Base 50 x 1.0 (10-20min) x 1.0 (Beginner) + 20 bonus = 70 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_1_6: Lesson = {
  id: "foundations-6",
  chapterId: "ch2-core-capabilities",
  moduleId: "01-skills-foundations",
  lessonCategory: "tutorial",
  title: "Turn Reading Into Listening With NotebookLM",
  description: "Use NotebookLM to turn documents into something easier to consume and review.",
  order: 7,
  estimatedMinutes: 20,
  format: "article",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "NotebookLM - Turn Anything Into a Podcast",
  xpReward: 70,
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/foundations-6-cover.webp",
        imageAlt: "NotebookLM interface showing document to audio conversion",
        title: "Turn Reading Into Listening With NotebookLM",
        subtitle: "Turn a stack of reading into something easier to review and absorb",
      },
    },

    // ==========================================================================
    // SECTION 1: WHAT IS NOTEBOOKLM
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "90 minutes of reading becomes 12 minutes of listening.",
          "",
          "Turn reading time into listening time.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What is NotebookLM?",
        paragraphs: [
          "A free Google tool. Upload documents. Get an AI-generated podcast. Two AI hosts discuss your content. They ask questions. Make connections. Highlight insights. Source-grounded (no hallucinations). Multi-document (analyzes everything together).",
        ],
      },
    },

    // ==========================================================================
    // TOOL ACCESS
    // ==========================================================================
    {
      id: "tool-access",
      type: "text",
      content: {
        title: "Access NotebookLM",
        paragraphs: [
          "**Go to notebooklm.google.com**",
          "",
          "It's free with any Google account. No setup required—just upload and start.",
          "",
          "**What you can upload:** PDFs, Google Docs, text files, website content.",
          "",
          "Upload any document to create an AI-powered study guide or audio overview.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: TEXT-TO-SPEECH VS NOTEBOOKLM
    // ==========================================================================
    {
      id: "section-3",
      type: "textWithBullets",
      content: {
        title: "Text-to-Speech vs NotebookLM",
        paragraphs: ["NotebookLM creates a conversation, not just reads text."],
        bullets: [
          "**Traditional Text-to-Speech:**",
          '"The report indicates that Q3 revenue increased by 15% year-over-year, driven primarily by strong performance in the enterprise segment..."',
          "Monotone. Mechanical. No engagement. Just reading.",
          "",
          "**NotebookLM Audio Overview:**",
          '"So I noticed something interesting here—their Q3 revenue jumped 15%. That\'s pretty significant, right?"',
          '"Yeah, and what struck me was that it\'s mostly coming from enterprise sales..."',
          "Two voices. Natural conversation. Asking questions.",
        ],
      },
    },

    // ==========================================================================
    // PRO TIP: CONVERSATION VS READING
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Pro Tip: It's a Podcast, Not an Audiobook",
        insights: [
          "The AI hosts don't read your document—they discuss it. They make connections, ask questions, and highlight surprising insights.",
          "This conversational format helps you retain information better than passive listening.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: SOURCE-GROUNDED
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "NotebookLM isn't text-to-speech. It's something entirely different.",
        quiz: {
          question: 'What does "source-grounded" mean in the context of NotebookLM?',
          options: [
            "The audio is grounded in bass frequencies",
            "It only discusses what's actually in your documents",
            "It requires an internet connection to work",
            "The AI hosts introduce themselves first",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 3: THREE SIMPLE STEPS
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Three Simple Steps",
        paragraphs: [
          'Step 1: Add Sources - Go to notebooklm.google.com and click "Add Source". Upload PDFs, link Google Docs, or paste text.',
          "",
          'Step 2: Generate Overview - Click "Generate" next to "Audio Overview". Wait 1-2 minutes.',
          "",
          "Step 3: Listen Anywhere - Play in browser or download MP3. Listen on commute, at gym, while doing chores.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: WHAT TO UPLOAD
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "What You Can Upload",
        paragraphs: [
          "PDF files (reports, papers, documentation), Google Docs (your own or shared), Website text (copy and paste), Text files and notes, Multiple related documents.",
          "",
          "**Best Practices:** Start with 2-5 sources (10-50 pages total). Use related content. Clean, well-structured text produces better results.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: WHAT IT SOUNDS LIKE
    // ==========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "What the Audio Sounds Like",
        paragraphs: [
          "The AI hosts feel like two people discussing your content. Natural, conversational, surprisingly human. They ask questions of each other, make connections between sources, highlight surprising insights, explore nuances or disagreements.",
          "",
          "Typically 8-15 minutes for a substantial document set.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT 1: BEST USE CASE
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "For which of the following tasks would NotebookLM be the BEST choice?",
        options: [
          "Writing an email to a client",
          "Generating a professional headshot image",
          "Converting 3 industry reports into an audio overview for your commute",
          "Creating a presentation from scratch",
        ],
        correctAnswer: 2,
        hint: "Think about what NotebookLM specializes in—documents to audio.",
      },
    },

    // ==========================================================================
    // SECTION 6: WHEN TO USE
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "When to Use NotebookLM",
        paragraphs: [
          "**Professional Development:** Industry reports, whitepapers, technical documentation, research papers.",
          "",
          "**Content Creation:** Review your own drafts via audio, research for articles, analyze competitor content.",
          "",
          "**Meeting Prep:** Background documents, board packets, strategy docs, project documentation.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 7: BEST PRACTICES
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Getting Better Audio Overviews",
        paragraphs: [
          "**DO:** Use focused, related sources, include 3-5 documents for depth, clean up formatting, regenerate if first overview isn't great.",
          "",
          "**DON'T:** Upload 20+ unrelated documents, expect good results from very short text, mix unrelated topics.",
        ],
      },
    },

    // ==========================================================================
    // PRO TIP: BATCH YOUR CONTENT
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Pro Tip: Batch Related Content Together",
        insights: [
          "Upload 3-5 related documents at once for the best overviews. The AI hosts will make connections between sources that you might miss when reading separately.",
          "Weekly reports, monthly summaries, or themed research work beautifully.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 8: BEYOND AUDIO
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Beyond Audio Overview",
        paragraphs: [
          "NotebookLM has more features:",
          "",
          "**Q&A:** Ask questions and get cited answers",
          "",
          "**Summary:** Auto-generated document summaries",
          "",
          "**Study Guide:** Creates study materials from academic content",
          "",
          "**FAQ Generation:** Extracts frequently asked questions",
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
        context: "Every tool has limitations. Knowing them helps you use the tool effectively.",
        quiz: {
          question: "What is a key limitation of NotebookLM's Audio Overview feature?",
          options: [
            "It can only process one document at a time",
            "It costs $20 per month to use",
            "Audio overviews are English-only",
            "It cannot handle PDF files",
          ],
          correctAnswer: 2,
        },
      },
    },

    // ==========================================================================
    // SECTION 9: WORKFLOW INTEGRATION
    // ==========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Integrate Into Your Workflow",
        paragraphs: [
          "Step 1: Collect Documents - Gather reports, papers. Don't let them pile up.",
          "",
          "Step 2: Upload and Generate - Add sources, generate while doing something else.",
          "",
          "Step 3: Listen During Dead Time - Commute, gym, chores.",
          "",
          "Step 4: Review Key Points - After listening, read specific sections that matter most.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 10: CLOSING
    // ==========================================================================
    {
      id: "section-11",
      type: "textWithImage",
      content: {
        title: "Turn Reading Into Listening",
        paragraphs: [
          "Start using NotebookLM today",
          "Upload documents. Get AI podcasts. Source-grounded accuracy.",
        ],
        imageUrl: "/images/courses/modules/01-skills-foundations/foundations-6-inline-1.webp",
        imageAlt: "NotebookLM success visualization",
      },
    },

    // ==========================================================================
    // TOOL REFERENCE
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "notebooklm",
        action: "Create your first audio overview",
        task: "Upload a document to NotebookLM and generate an AI podcast",
        feature: "Audio Overview generation",
        tip: "NotebookLM is completely free with your Google account - perfect for turning reading into listening",
      },
    },

    // ==========================================================================
    // MAIN CHALLENGE: ACTIONABLE TASK
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Create Your First AI Podcast",
        purpose:
          "Transform a document you've been meaning to read into an audio overview you can absorb anywhere.",
        instructions: [
          "Go to notebooklm.google.com",
          "Add a source - upload a PDF, Google Doc, or paste text (10+ pages works best)",
          "Generate an Audio Overview - click Generate and wait 1-2 minutes",
          "Listen to at least 3 minutes of the result",
          "Note 3 key insights from the audio",
        ],
        deliverable: "Document type/topic, audio length, 3 key insights, and your rating (1-5)",
        estimatedTime: "5-8 minutes",
        starterPrompt: "",
        successCriteria: [
          "You successfully uploaded a document and generated audio",
          "The audio was clear and engaging",
          "You extracted at least 3 useful insights",
          "You can see yourself using this for future reading",
        ],
      },
    },
  ],
};
