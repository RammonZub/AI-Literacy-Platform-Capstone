/**
 * Lesson 2.5: Document & Knowledge Management with NotebookLM (ARTICLE FORMAT)
 *
 * XP CALCULATION:
 * - Base: 75 XP
 * - Length: 26 min -> x1.0
 * - Difficulty: x1.2 (Intermediate)
 * - Quizzes: +20 XP
 * - Checkpoint: +5 XP
 * - Total: 115 XP
 *
 * Duration: 26 minutes
 * XP REWARD: 115 points
 */

import type { Lesson } from "@/types/content";

export const lesson_2_5: Lesson = {
  id: "lesson-2-5",
  chapterId: "ch2-2-workflows",
  moduleId: "02-skills-productivity",
  title: "Turn Documents Into Something Useful",
  description: "Learn how NotebookLM helps you organize and synthesize your files",
  order: 5,
  estimatedMinutes: 15,
  xpReward: 115,
  format: "article",
  lessonCategory: "tutorial",
  coverImage: "/images/courses/lessons/modules/email-automation-and-productivity.webp",
  coverTitle: "Turn Documents Into Something Useful",

  sections: [
    // ==========================================================================
    // HERO IMAGE
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/02-skills-productivity/lesson-2-5-cover.webp",
        imageAlt: "Document and knowledge management with AI",
        title: "Turn Documents Into Something Useful",
        subtitle: "Learn how NotebookLM helps you organize and synthesize your files",
      },
    },

    // ==========================================================================
    // SECTION 1: THE KNOWLEDGE MANAGEMENT PROBLEM
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Knowledge Management Problem",
        paragraphs: [
          "Documents scattered across Drive, Dropbox, Notion. You know you have that PDF somewhere. But where?",
          "Even when you find it, you can't remember what it said. Your knowledge is fragmented. Your insights are lost.",
          "Google's AI-powered research assistant. Upload documents. Ask questions. Get answers. Your personal knowledge expert.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: MARIA'S STORY
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Maria Used to Do",
        paragraphs: [
          'Maria needed to prepare for a client meeting using a competitive analysis from last month. Her first step was opening Google Drive and searching for "competitive analysis." The search returned 47 results. She started opening each one, quickly realizing most weren\'t what she needed. Not that one. Not that either.',
          "When she finally found the right document, she skimmed through 20 pages trying to recall the key insights. Then she realized she hadn't saved the source links that supported the analysis. Back to browser history, hunting for those original sources she'd looked at weeks ago.",
          "Forty-five minutes later, she was finally ready to prepare for her meeting. This scenario plays out every week for Maria—and for millions of professionals who manage knowledge in scattered systems. She desperately needs a better approach.",
        ],
      },
    },

    // ==========================================================================
    // TOOL REFERENCE: NotebookLM
    // ==========================================================================
    {
      id: "tool-ref-1",
      type: "toolReference",
      content: {
        tool: "notebooklm",
        action: "Visit notebooklm.google.com and create your first notebook",
        task: "Upload documents and ask questions to extract insights across your library",
        feature: "Generate Audio Overviews for podcast-style summaries of your documents",
        tip: "Upload all related documents together for better cross-document connections",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Key Insight
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "NotebookLM's Core Capabilities",
        insights: [
          "Upload PDFs, Google Docs, websites, and text files into unified knowledge bases",
          "Ask questions and get answers with source citations from your documents",
          "Generate Audio Overviews - podcast-style summaries of your entire library",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Check understanding of NotebookLM basics
    // ==========================================================================
    {
      id: "section-3",
      type: "quiz",
      content: {
        quiz: {
          question: "What is NotebookLM's core capability?",
          options: [
            "Generating images from text",
            "Creating searchable knowledge bases from uploaded documents",
            "Video editing and production",
            "Social media scheduling",
          ],
          correctAnswer: 1,
        },
        context:
          "NotebookLM's core capability is ingesting documents (PDFs, Google Docs, websites, text) and making them searchable and queryable with source citations. It builds knowledge graphs showing connections across your entire library.",
      },
    },

    // ==========================================================================
    // SECTION 3: AUDIO OVERVIEW - THE STAR FEATURE
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Audio Overview: The Star Feature",
        paragraphs: [
          "NotebookLM's Audio Overview is unlike anything else in AI. Imagine turning your collection of documents into a podcast where two AI hosts have a natural conversation about your content. They explain concepts, debate interpretations, and connect ideas across sources—just like listening to experts discuss your research.",
          "The synthesis is remarkably deep. NotebookLM reads all your uploaded sources, identifies recurring themes, notes where experts agree and where they disagree, and weaves everything into a coherent narrative. You get the equivalent of hours of reading compressed into 10-20 minutes of engaging audio.",
          "This enables passive learning during otherwise unproductive time. Listen while commuting, exercising, or doing chores. Instead of spending two hours reading through documents, invest 15 minutes listening to an Audio Overview that captures the essential insights. Then dive deeper only where needed.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual break
    // ==========================================================================
    {
      id: "text-image-1",
      type: "textWithImage",
      content: {
        title: "The Audio Overview Experience",
        paragraphs: [
          "Imagine turning your collection of research papers, meeting notes, and competitive analyses into a conversational podcast. That's what Audio Overview delivers.",
          "The two AI hosts don't just summarize - they have a natural conversation about your content, making connections and highlighting key points in an engaging way.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-5-inline-1.webp",
        imageAlt: "Audio learning experience",
        imageCaption: "Transform documents into podcast-style learning",
      },
    },

    // ==========================================================================
    // SECTION 4: GETTING STARTED WITH NOTEBOOKLM
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Creating Your First Notebook",
        paragraphs: [
          "Create your first notebook in five minutes with this straightforward process. Start by going to notebooklm.google.com and signing in with your Google account. The interface is clean and intuitive—you'll feel at home immediately.",
          'Create a notebook with a descriptive name. Something specific like "Competitive Research - Q1 2025" works far better than vague titles like "Research." Next, upload your sources—PDFs, Google Docs, websites, or paste text directly into the notebook. NotebookLM accepts multiple formats, so gather everything relevant to your topic.',
          "Wait for processing, which typically takes 30 seconds to 2 minutes depending on document size. Once complete, you can start asking questions immediately or generate an Audio Overview for a comprehensive introduction to your content. The whole setup takes less time than finding a single document in a disorganized Drive folder.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Good vs Bad Notebooks
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Notebook Best Practices",
        insights: [
          'BAD: "Research" - Too vague, no focus. GOOD: "Competitive Research - Q1 2025" - Specific and time-bounded',
          "BAD: 100 random documents - Unfocused, noisy results. GOOD: 20 related documents on one topic - Coherent and targeted",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Check understanding of notebook features
    // ==========================================================================
    {
      id: "section-6",
      type: "quiz",
      content: {
        quiz: {
          question: "When should you use Audio Overview?",
          options: [
            "Only for short documents under 10 pages",
            "For quick overview before deep diving into long documents",
            "When you need exact quotes",
            "Never, it's a waste of time",
          ],
          correctAnswer: 1,
        },
        context:
          "Audio Overview is perfect for getting the lay of the land before diving deep. It helps you understand the main themes, connections, and key points across all documents in 10-20 minutes of passive listening.",
      },
    },

    // ==========================================================================
    // SECTION 5: PROFESSIONAL USE CASES
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Professional Use Cases",
        paragraphs: [
          'NotebookLM excels in several professional scenarios where document synthesis adds tremendous value. For literature reviews, upload all relevant papers and ask questions like "What are the key debates in this field?" or "Where do sources agree or disagree?" Generate an Audio Overview first to understand the landscape before diving into specifics.',
          "Competitive analysis becomes dramatically faster. Upload competitor materials—annual reports, product documentation, news articles—and NotebookLM helps compare approaches, identify competitive advantages, and understand market positioning. The Audio Overview gives you the market landscape in minutes instead of hours.",
          "Meeting preparation transforms from frantic searching to focused readiness. Upload the agenda and background materials, then generate questions you should ask. Listen to an Audio Overview during your commute so you arrive informed and prepared. For fact-checking, verify claims against your document library instantly, cross-referencing multiple sources in seconds rather than hunting through folders.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Query Template for NotebookLM
    // ==========================================================================
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "NotebookLM Query Templates",
        description: "Use these prompts to extract maximum value from your document collections",
        promptText:
          "Based on all the sources in this notebook:\n\n1. What are the main themes and patterns?\n2. Where do the sources agree or disagree?\n3. What are the key insights I should remember?\n4. What questions remain unanswered?\n\nPlease cite specific sources for each point.",
        placeholders: [],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual break
    // ==========================================================================
    {
      id: "text-image-2",
      type: "textWithImage",
      content: {
        title: "Connecting Ideas Across Documents",
        paragraphs: [
          "The real power of NotebookLM emerges when you start asking questions that require connecting information across multiple documents. This is where the AI excels beyond simple search.",
          "Instead of hunting through 20 PDFs for a specific statistic, you can ask NotebookLM to synthesize trends, identify contradictions, or summarize consensus across your entire library.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-5-inline-2.webp",
        imageAlt: "Knowledge synthesis visualization",
        imageCaption: "From fragmented documents to unified understanding",
      },
    },

    // ==========================================================================
    // CHECKPOINT: Test comprehensive understanding
    // ==========================================================================
    {
      id: "section-8",
      type: "checkpoint",
      content: {
        question:
          "You're starting a new research project with 15 academic papers. Describe your NotebookLM setup strategy.",
        options: [
          "Upload all papers randomly without organization",
          "Create a specific, time-bounded notebook name, upload all papers at once for holistic processing, generate an Audio Overview for big-picture understanding, then use specific queries to dive deep",
          "Read all papers yourself first, then summarize",
          "Use a different tool for each paper",
        ],
        correctAnswer: 1,
        hint: "Think about NotebookLM's strengths: holistic processing, Audio Overview, and deep queries",
      },
    },

    // ==========================================================================
    // SECTION 6: BEST PRACTICES
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Best Practices",
        paragraphs: [
          "Follow these practices for effective knowledge management with NotebookLM. First, prioritize source quality. The principle of garbage in, garbage out applies directly here—upload high-quality, relevant documents only. A focused notebook with excellent sources produces far better insights than a cluttered one with mediocre materials.",
          'Ask specific questions to get specific answers. Vague questions like "summarize everything" produce vague responses. Instead, ask targeted questions: "What are the three main competitive advantages mentioned?" or "Where do these sources disagree about market sizing?" Precision in questioning yields precision in answers.',
          "Always verify what NotebookLM tells you by checking the citations. AI can misinterpret context or miss nuances that become obvious when you read the original source. The citations make verification easy—one click takes you to the exact passage. Finally, use Audio Overview first before diving deep. Get the big picture through passive listening, then explore specific areas with targeted queries.",
        ],
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK (Inline)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Knowledge Base Challenge",
        purpose:
          "Experience the power of AI-powered knowledge management by creating your first NotebookLM notebook and discovering insights across your documents.",
        instructions: [
          "Pick a topic with at least 5 related documents (PDFs, articles, notes)",
          "Go to notebooklm.google.com and create a new notebook",
          "Upload all your sources to the notebook",
          "Generate an Audio Overview and listen to it",
          "Ask 3 questions that connect information across multiple documents",
        ],
        deliverable:
          "Your topic choice, best insight from the Audio Overview, and a comparison to reading each document individually",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "What are the key themes across all these documents? Where do they agree or disagree? What insights connect multiple sources?",
        successCriteria: [
          "Created a notebook with at least 5 documents",
          "Generated and listened to an Audio Overview",
          "Asked 3 connecting questions across documents",
          "Can articulate the main themes identified",
        ],
      },
    },
  ],
};
