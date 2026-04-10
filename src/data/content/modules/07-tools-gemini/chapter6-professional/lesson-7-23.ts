/**
 * Lesson 7.23: Content Creation and Learning
 *
 * CHAPTER: 6 - Advanced Professional Applications
 * LESSON: 3 of 4 - Content Creation and Learning
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master content creation and accelerate learning with Gemini
 *
 * KEY RESPONSIBILITIES:
 * - Create blog posts and articles efficiently
 * - Generate social media content for business
 * - Develop presentation scripts and talking points
 * - Learn new topics efficiently
 * - Repurpose content across multiple formats
 */

import type { Lesson } from "@/types/content";

export const lesson_7_23: Lesson = {
  id: "lesson-7-23",
  chapterId: "ch7-6-professional",
  moduleId: "07-tools-gemini",
  title: "Content Creation and Learning",
  description: "Create compelling content and learn new topics faster with AI assistance",
  order: 3,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-23-cover.webp",
        imageAlt: "Content creation and writing workspace",
        title: "Content Creation and Learning",
        subtitle: "Create compelling content and learn new topics faster with AI assistance",
      },
    },
    // ===========================================================================
    // SECTION 1: The Content Creation Challenge
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Content Creation Reality",
        paragraphs: [
          "Creating consistent, high-quality content is one of the biggest challenges professionals face. Writer's block, time constraints, and the need to produce across multiple formats can feel overwhelming.",
          "",
          "Gemini doesn't replace your expertise or voice—it helps you overcome the blank page problem. You provide the ideas and direction; Gemini helps with structure, drafts, and variations.",
          "",
          "The goal: Spend less time staring at blank screens and more time on strategic thinking and final polish.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Blog Posts and Articles
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Blog Post Creation Workflow",
        paragraphs: [
          "A systematic approach to creating articles transforms the often frustrating writing process into a manageable workflow. Begin with an outline by asking Gemini to 'Create an outline for a blog post about [topic] for [audience].' This structural foundation ensures your content has logical flow and comprehensive coverage before you invest time in drafting.",
          "",
          "Research follows naturally. Ask 'What are the 3 most important points readers should know?' to identify the essential content that must appear in your article. This step helps you prioritize information and avoid getting lost in tangents. With outline and key points in hand, request a first draft: 'Write a first draft based on this outline, about 800 words.' Gemini generates structured content that you can then refine and personalize.",
          "",
          "The refinement step is where your expertise transforms AI-generated content into something valuable. Ask Gemini to 'Make the introduction more engaging and add a clear call-to-action' to strengthen specific sections. Finally, generate variations by requesting 'Create 3 alternative headlines and a meta description.' This gives you options to test and ensures your content is optimized for discovery. Throughout this workflow, Gemini handles the heavy lifting of structure and initial drafting while you add the insights, examples, and voice that make content genuinely useful.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Social Media Content
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Social Media Content Tips",
        insights: [
          "Adapt tone for each platform (LinkedIn is more formal than Twitter/X)",
          "Generate multiple variations to test what resonates",
          "Create content calendars by asking for 5 posts on a theme",
          "Always add your personal perspective before posting",
          "Use AI for ideas and drafts, not final copy",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Content Format Comparison
    // ===========================================================================
    {
      id: "section-4",
      type: "comparisonTable",
      content: {
        title: "Content Formats Compared",
        intro: "Different platforms require different approaches. Here's a quick guide:",
        columns: [
          { name: "Format", description: "Content type" },
          { name: "Length", description: "Typical size" },
          { name: "Tone", description: "Best approach" },
        ],
        rows: [
          {
            feature: "LinkedIn post",
            values: ["150-300 words", "Professional, insightful", "Thought leadership"],
          },
          {
            feature: "Twitter/X thread",
            values: ["3-5 tweets", "Conversational, punchy", "Engagement focused"],
          },
          {
            feature: "Blog article",
            values: ["800-1500 words", "Informative, structured", "SEO + value"],
          },
          {
            feature: "Email newsletter",
            values: ["300-500 words", "Personal, direct", "Relationship building"],
          },
          {
            feature: "Presentation script",
            values: ["Varies by format", "Clear, conversational", "Audience-focused"],
          },
        ],
        footer: "Always adapt your content to the specific platform and audience.",
      },
    },
    // ===========================================================================
    // SECTION 5: Presentation Scripts
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Presentation Scripts and Talking Points",
        paragraphs: [
          "Great presentations combine clear structure with compelling delivery. Gemini helps with both.",
          "",
          "Start with your key message, then ask Gemini to create an outline with a strong opening, logical flow, and memorable conclusion. Request speaker notes for each slide with talking points, transitions, and stories.",
          "",
          "The best presentations sound human—not scripted. Use Gemini's drafts as a foundation, then add your personal anecdotes, examples, and authentic voice.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-23-inline-1.webp",
        imageAlt: "Presentation preparation and public speaking",
      },
    },
    // ===========================================================================
    // SECTION 6: Learning New Topics
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Accelerated Learning",
        paragraphs: [
          "Need to quickly understand a new topic? Gemini excels at breaking down complex subjects:",
          "",
          "**Start broad**: 'Explain [topic] in simple terms with 3 key concepts'",
          "",
          "**Go deep**: 'What are the most important things a professional should know about [topic]?'",
          "",
          "**Get practical**: 'Give me 5 real-world applications of [topic] in [industry]'",
          "",
          "**Test understanding**: 'Quiz me on [topic] with 5 questions at a beginner level'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Content Repurposing
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Content Repurposing: One Idea, Many Formats",
        paragraphs: [
          "Maximizing the value of every piece of content means thinking beyond its original format. A well-crafted blog post can become a LinkedIn article for professional audiences, a Twitter thread for broader distribution, and an email newsletter for your direct subscribers. Each format reaches different audiences and serves different purposes, all from the same core ideas.",
          "",
          "Presentations offer particularly rich repurposing opportunities. A single slide deck can transform into a blog summary for those who missed the live session, social quotes that highlight key insights, and a video script for asynchronous viewing. Research reports similarly multiply in value when converted into executive summaries for busy leaders, infographic outlines for visual learners, and podcast talking points for audio audiences.",
          "",
          "Even routine content holds repurposing potential. A customer FAQ can become a blog series addressing common questions, social content that provides quick value, and help documentation that serves customers directly. Webinars can be recycled into blog recaps, quote graphics for social sharing, and follow-up email sequences that nurture leads. The key insight is that your best ideas deserve multiple lives across different channels and formats, reaching audiences wherever they prefer to consume content.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "section-8",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For content creation",
        task: "Use Gemini to draft content, create variations, and repurpose across multiple formats",
        feature: "Draft Generation + Iteration",
        tip: "Always specify your target audience and platform for better-tailored content",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt - Content Repurposing
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Repurpose Content",
        description: "Practice transforming one piece of content into multiple formats.",
        promptText:
          "Take this key message: 'AI tools are most effective when combined with human expertise and judgment, not when used to replace human thinking.' Create: 1) A LinkedIn post (professional tone), 2) A Twitter/X thread (3 tweets), 3) An email opening paragraph for a newsletter",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task (inline at end)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create and Repurpose Content",
        purpose:
          "Practice the content creation workflow by creating one piece of content and repurposing it for multiple formats.",
        instructions: [
          "Choose a key message or insight from your professional expertise",
          "Create a LinkedIn post (150-200 words) about this insight",
          "Repurpose the same message into a Twitter/X thread (3 tweets)",
          "Create an email opening paragraph for a newsletter on this topic",
          "Save your favorite version and note how you could use these in your work",
        ],
        deliverable: "One key message repurposed into 3 different content formats",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Take this key message: 'AI tools are most effective when combined with human expertise and judgment, not when used to replace human thinking.' Create: 1) A LinkedIn post (professional tone), 2) A Twitter/X thread (3 tweets), 3) An email opening paragraph for a newsletter",
        successCriteria: [
          "You created content in 3 different formats",
          "Each format is appropriately adapted for its platform",
          "You added your personal perspective to at least one version",
          "The content is ready to use or serves as a strong starting point",
          "You understand how repurposing multiplies content value",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "Content Creation Mastery Achieved",
        description:
          "You now have workflows for creating content efficiently and learning new topics quickly. Remember: AI helps you start and iterate faster, but your unique perspective, expertise, and voice are what make content valuable. Always add your personal touch.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
