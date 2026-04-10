/**
 * Lesson 1.5A: Reading Images And Documents With AI
 *
 * PURPOSE: Teach learners how AI can "see" and interpret visual content
 *
 * FORMAT: Article with sections, quizzes, and checkpoint
 *
 * KEY CONCEPTS:
 * - AI can process images through ChatGPT, Claude, Gemini
 * - Four capabilities: Document OCR, Screenshot Analysis, Image Understanding, Diagram Interpretation
 * - Upload. Ask. Done. workflow saves hours of manual work
 * - Practical applications: receipts, error messages, diagrams
 * - Limitations: handwriting, low-quality images, privacy considerations
 *
 * Duration: 18 minutes
 * XP: Base 50 x 1.2 (18min, >15min multiplier) x 1.0 (Beginner) + 20 bonus = 80 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_1_5_a: Lesson = {
  id: "l1-5-a-ai-vision",
  chapterId: "ch2-core-capabilities",
  moduleId: "01-skills-foundations",
  lessonCategory: "tutorial",
  title: "Reading Images And Documents With AI",
  description: "See how AI helps with receipts, screenshots, and other visual information.",
  order: 5,
  estimatedMinutes: 18,
  format: "article",
  xpReward: 80,
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "AI Vision - Reading Images & Documents",

  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/l1-5-a-ai-vision-cover.webp",
        imageAlt: "AI analyzing and reading visual content",
        title: "Reading Images And Documents With AI",
        subtitle: "Upload. Ask. Done. A practical look at how AI handles visual information.",
      },
    },

    // ==========================================================================
    // SECTION 1: THE PROBLEM
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "Receipts. Business cards. Forms. Whiteboards.",
          "",
          "All that information exists visually. To use it, you type. One field at a time.",
          "",
          "12 receipts = 15 minutes of typing.",
          "",
          "One typo = wrong data.",
          "",
          "Tired eyes = missed entries.",
          "",
          "What if you could just...",
          "",
          "Upload. Ask. Done.",
        ],
      },
    },

    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Sarah Faces Every Month",
        paragraphs: [
          'Sarah just returned from a business trip with 12 receipts to log. At 9:00 AM, she\'s thinking, "Here we go again..." But this time, she tries something different. She asks AI for help, and the response surprises her: "Upload the receipts and I\'ll extract all the data for you."',
          "",
          "Wait—AI can read receipts? Actually extract the merchant, date, and amount? Yes. Even better, she can upload all 12 at once, and AI will format everything as a table ready to copy directly into her expense system. What used to take 15-20 minutes now takes 30 seconds. This is the power of AI vision, and it's available right now in the tools you already have.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: AI CAN SEE
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        paragraphs: [
          "Most people think of AI as text-only.",
          "",
          "You type. It responds with text.",
          "",
          "But modern AI can also process images.",
          "",
          "ChatGPT. Claude. Gemini.",
          "",
          "They all have vision.",
          "",
          "Built in. No extra tools.",
          "",
          "Just upload and ask.",
        ],
      },
    },

    {
      id: "section-4",
      type: "text",
      content: {
        title: "Four Things AI Vision Does Well",
        paragraphs: [
          "AI vision isn't one thing. It's four distinct capabilities, each useful for different tasks.",
          "",
          "**Document OCR** reads text from images. Receipts, business cards, forms, handwritten notes, and whiteboards all become editable text that AI extracts and organizes for you.",
          "",
          "**Screenshot Analysis** turns visual confusion into clarity. Upload an error message, dashboard, or competitor website, then ask questions and get answers about what you're seeing.",
          "",
          "**Image Understanding** goes beyond reading text to identifying objects, describing scenes, recognizing products, and analyzing style. Upload any image, ask what it is, and get detailed explanations.",
          "",
          "**Diagram Interpretation** makes complex visuals accessible. Flowcharts, graphs, infographics, and technical schematics get translated into plain language, with insights you might otherwise miss.",
        ],
      },
    },

    // ==========================================================================
    // PRO TIP: CHOOSE THE RIGHT CAPABILITY
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Pro Tip: Match the Capability to Your Task",
        insights: [
          "Each capability has a sweet spot. OCR for text extraction, screenshot analysis for troubleshooting, image understanding for 'what is this?', diagram interpretation for complex visuals.",
          "Knowing which to use speeds up your workflow dramatically.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: AI VISION CAPABILITIES
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context:
          "AI vision has four main capabilities. Understanding which one to use is key to getting results.",
        quiz: {
          question:
            "You have a photo of a whiteboard from a team meeting. Which AI vision capability would you use to extract the action items?",
          options: [
            "Image Understanding",
            "Diagram Interpretation",
            "Document OCR",
            "Screenshot Analysis",
          ],
          correctAnswer: 2,
        },
      },
    },

    // ==========================================================================
    // SECTION 3: CAPABILITY 1 - DOCUMENT OCR
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Capability 1: Document OCR",
        paragraphs: [
          'OCR stands for Optical Character Recognition. It\'s fancy talk for "reading text from images." What used to require specialized software now works in ChatGPT, Claude, and Gemini.',
          "",
          "You can use OCR on receipts and invoices, business cards, filled forms and applications, screenshots of documents, handwritten notes when they're legible, whiteboard photos, and book pages or articles. The AI extracts the text and makes it editable, searchable, and ready to use.",
        ],
      },
    },

    {
      id: "section-6",
      type: "text",
      content: {
        title: "Why OCR Matters",
        paragraphs: [
          "Expense tracking used to mean: Open receipt photo, type merchant, type date, type amount, type line items, move to next receipt. Repeat 12 times. Total time: 15-20 minutes.",
          "",
          'With AI vision, you upload all 12 receipts, prompt "Extract merchant, date, total, line items. Format as table," and copy to spreadsheet. Total time: 30 seconds.',
          "",
          "The power comes from batch processing. You can upload multiple documents at once, specify the exact format you need whether that's a table, JSON, or CSV, extract specific fields or capture all text, and work with both printed and handwritten text as long as it's legible.",
        ],
      },
    },

    {
      id: "quick-prompt-ocr",
      type: "quickPrompt",
      content: {
        heading: "Receipt Data Extraction Prompt",
        description: "Use this prompt to extract data from receipt or invoice photos",
        promptText:
          "Extract the merchant name, date, total amount, and line items from this receipt. Format as a table with columns for Item, Quantity, and Price.",
        placeholders: [],
      },
    },

    {
      id: "section-7",
      type: "text",
      content: {
        title: "How to Extract Receipt Data",
        paragraphs: [
          "Follow these steps to automatically extract information from receipt photos:",
          "",
          "**Step 1: Take a Clear Photo** - Capture the receipt in good lighting. Ensure all text is readable and the receipt is flat. Avoid glare and shadows.",
          "",
          "**Step 2: Upload to AI** - Open ChatGPT, Claude, or Gemini. Click the attachment or paperclip icon and select your receipt photo.",
          "",
          '**Step 3: Use the Extraction Prompt** - "Extract the merchant name, date, total amount, and line items. Format as a table with columns for Item, Quantity, and Price."',
          "",
          "**Step 4: Copy to Your System** - Review the extracted data for accuracy, then copy the table into your expense tracking system or spreadsheet.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT 1: DOCUMENT OCR
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question:
          "You have 15 business cards from a networking event. You want to add them to your contacts. What's the most efficient approach using AI vision?",
        options: [
          "Type each card manually into your phone",
          "Upload all card photos at once with a prompt to extract name, email, phone, and company",
          "Use a specialized business card scanning app",
          "Take photos and store them without extracting data",
        ],
        correctAnswer: 1,
        hint: "Think about batch processing with AI vision.",
      },
    },

    // ==========================================================================
    // SECTION 4: CAPABILITY 2 - SCREENSHOT ANALYSIS
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Capability 2: Screenshot Analysis",
        paragraphs: [
          "We spend hours staring at screens. Error messages. Dashboards. Competitor websites. AI can analyze screenshots and extract insights faster than manual review.",
          "",
          "For troubleshooting, upload an error screenshot and ask what it means and how to fix it. For data extraction, upload a dashboard and request key metrics and trend summaries. For interface understanding, share a software screenshot and have AI explain what each section does. You can even get design feedback by uploading a website for strengths and weaknesses analysis, or conduct competitor research by asking what audience a site targets.",
        ],
      },
    },

    {
      id: "section-9",
      type: "text",
      content: {
        paragraphs: [
          "Instead of searching documentation or guessing what an error means, upload the screenshot. AI explains the issue, suggests solutions, and provides next steps—all from one image.",
          "",
          "This is especially powerful for debugging. Error codes, stack traces, confusing interfaces—AI reads them all and explains in plain language.",
        ],
      },
    },

    {
      id: "quick-prompt-screenshot",
      type: "quickPrompt",
      content: {
        heading: "Screenshot Troubleshooting Prompt",
        description: "Use this prompt when you encounter an error message",
        promptText: "What does this error mean? What caused it, and what are the steps to fix it?",
        placeholders: [],
      },
    },

    {
      id: "section-10",
      type: "text",
      content: {
        title: "How to Troubleshoot with Screenshots",
        paragraphs: [
          "Get instant help for error messages and confusing interfaces:",
          "",
          "**Step 1: Capture the Error** - Take a screenshot of the full error message, including any error codes and context. On Mac use Cmd+Shift+4, on Windows use Win+Shift+S.",
          "",
          "**Step 2: Upload to AI** - Open your AI tool and attach the screenshot. Include context about what you were doing when the error occurred.",
          "",
          '**Step 3: Ask for Help** - "What does this error mean? What caused it, and what are the steps to fix it?" Include relevant details like your software version.',
          "",
          "**Step 4: Follow the Solution** - AI will explain the error in plain language and provide step-by-step solutions. Follow the recommended fix.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: SCREENSHOT ANALYSIS
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context:
          "Screenshot analysis turns confusing technical messages into plain language explanations.",
        quiz: {
          question:
            "You see an error message you don't understand while coding. What's the fastest way to understand and fix it?",
          options: [
            "Search the error code on Google and read through documentation",
            "Post on a forum and wait for responses",
            "Upload a screenshot to AI and ask what it means and how to fix it",
            "Try random fixes until something works",
          ],
          correctAnswer: 2,
        },
      },
    },

    // ==========================================================================
    // SECTION 5: CAPABILITIES 3 & 4
    // ==========================================================================
    {
      id: "section-11",
      type: "text",
      content: {
        title: "Capability 3: Image Understanding",
        paragraphs: [
          "Beyond reading text, AI can understand what's IN an image. Objects, people, scenes, actions, and context are all analyzable through AI vision.",
          "",
          'Use it for product identification by asking "What is this? Where can I buy something similar?" For style analysis, try "Describe the design style of this room. What elements make it work?" It handles educational questions like "What type of plant is this? Tell me how to care for it," accessibility needs such as describing an image for someone who can\'t see it, and quality checks like asking what could be improved about a photo composition.',
        ],
      },
    },

    {
      id: "section-12",
      type: "text",
      content: {
        paragraphs: [
          "The key distinction: Image search tools find similar images. AI vision explains what's IN the image and answers questions about it.",
          "",
          'Search: "Find images like this one."',
          "",
          'AI Vision: "This is a mid-century modern living room with walnut furniture, warm lighting, and geometric patterns. The design works because..."',
        ],
      },
    },

    {
      id: "section-13",
      type: "text",
      content: {
        title: "Capability 4: Diagram Interpretation",
        paragraphs: [
          "Flowcharts. Org charts. Technical schematics. Infographics. These visuals contain dense information that's hard to digest. AI vision makes them accessible.",
          "",
          "The capability explains diagrams in simple terms, extracts trends from charts and graphs, summarizes dense infographics, converts visual processes into text descriptions, and answers questions about complex diagrams. What used to require careful study now takes a single upload and question.",
        ],
      },
    },

    {
      id: "section-14",
      type: "text",
      content: {
        paragraphs: [
          'Real example: Upload a 20-page technical spec filled with diagrams. Prompt: "Explain each diagram and summarize the key process flows."',
          "",
          "What took 60 minutes of careful study now takes 5 minutes of AI-assisted review.",
          "",
          'This is powerful for learning. Complex concepts become accessible. You can ask follow-up questions: "What happens if this step fails?" or "Why does the flow branch here?"',
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: LIMITATIONS & BEST PRACTICES
    // ==========================================================================
    {
      id: "section-15",
      type: "text",
      content: {
        title: "What AI Vision Can't Do (Yet)",
        paragraphs: [
          "AI vision is powerful but not perfect. Knowing the limitations helps you use it effectively.",
          "",
          "**Handwriting** works with clear text, but messy cursive may not be recognized. The more legible, the better the results.",
          "",
          "**Low-quality images** reduce accuracy significantly. Blurry, dark, or small images struggle. Good lighting and focus matter.",
          "",
          "**Privacy** is a real consideration. Images are processed on company servers, so don't upload confidential information.",
          "",
          "**Accuracy** isn't perfect. Think of AI vision as a fast, capable assistant. Verify important outputs. Use it for 90% accuracy, not 100%.",
        ],
      },
    },

    {
      id: "quick-prompt-vision",
      type: "quickPrompt",
      content: {
        heading: "Vision Prompting Templates",
        description: "Use these templates for different vision tasks",
        promptText:
          'For OCR/Data Extraction:\n"Extract [specific fields] from this [document type] and format as [desired structure]."\n\nFor Analysis:\n"Analyze this [image type] focusing on [specific aspect]. What should I learn?"\n\nFor Explanation:\n"Explain this [diagram/chart] in simple terms. What\'s the main point?"',
        placeholders: [
          "specific fields",
          "document type",
          "desired structure",
          "image type",
          "specific aspect",
          "diagram/chart",
        ],
      },
    },

    // ==========================================================================
    // PRO TIP: START SIMPLE
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Pro Tip: Start with Your Biggest Pain Point",
        insights: [
          "Pick the most annoying manual data entry task in your workflow. That's your first AI vision use case.",
          "The time savings are immediate and measurable—perfect for building the habit.",
        ],
      },
    },

    {
      id: "section-16",
      type: "text",
      content: {
        title: "Try AI Vision Today",
        paragraphs: [
          "Pick one practical task and test the capability:",
          "",
          "**Option A**: Digitize a receipt or invoice and extract the data into a structured format.",
          "",
          "**Option B**: Analyze a screenshot of an error message or dashboard to understand what you're seeing.",
          "",
          "**Option C**: Upload a diagram or flowchart and ask for a plain-language explanation.",
          "",
          "**Option D**: Upload a photo and ask AI to identify what's in the image and provide details.",
        ],
      },
    },

    {
      id: "section-17",
      type: "text",
      content: {
        paragraphs: [
          "Take or find the image. Upload and use one of the prompt templates from this lesson. Be specific about what you want to extract or learn.",
          "",
          "Review the result. If it's wrong, refine your prompt with more context. AI vision improves with specific instructions.",
        ],
      },
    },

    {
      id: "section-18",
      type: "text",
      content: {
        paragraphs: [
          "You now know AI vision.",
          "",
          "Four capabilities. One upload.",
          "",
          "Document OCR for receipts and forms.",
          "",
          "Screenshot analysis for troubleshooting.",
          "",
          "Image understanding for descriptions.",
          "",
          "Diagram interpretation for complex visuals.",
          "",
          "This lesson covered INPUT—extracting information FROM images.",
          "",
          "Coming next: Image Creation—generating professional visuals FROM text.",
          "",
          "For now? Master vision.",
          "",
          "It's the capability that saves hours of manual work.",
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
        tool: "gemini",
        action: "Test AI vision",
        task: "Upload an image to Gemini and extract useful information using the vision capabilities",
        feature: "Image upload button (paperclip icon)",
        tip: "Gemini excels at image analysis - it's free and handles receipts, screenshots, and documents well",
      },
    },

    // ==========================================================================
    // MAIN CHALLENGE: ACTIONABLE TASK
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Test AI Vision",
        purpose:
          "Experience the 'Upload. Ask. Done.' workflow firsthand with a real image from your work or life.",
        instructions: [
          "Pick ONE type of image to test with (receipt, screenshot, document, or diagram)",
          "Take or find an image to work with",
          "Upload to ChatGPT, Claude, or Gemini",
          "Use the appropriate prompt template from this lesson",
          "Review the result and rate accuracy",
        ],
        deliverable: "Your image type, prompt used, AI output, and accuracy rating (1-5)",
        estimatedTime: "3-5 minutes",
        starterPrompt:
          "Extract [specific information] from this [image type]. Format as [table/list/summary].",
        successCriteria: [
          "You successfully uploaded an image and extracted useful information",
          "The result required minimal verification",
          "You can see how this saves time compared to manual extraction",
        ],
      },
    },
  ],
};
