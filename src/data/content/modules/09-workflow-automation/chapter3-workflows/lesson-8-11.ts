/**
 * Lesson 8.11: Content Creation Sprints
 *
 * CHAPTER: 3 - Daily Productivity Workflows
 * LESSON: 4 of 5 - Create More Content in Less Time
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach rapid content creation workflows for various formats
 *
 * KEY RESPONSIBILITIES:
 * - Introduce the blog post workflow
 * - Show social media batching techniques
 * - Cover proposal and report templates
 * - Teach headline generation
 */

import type { Lesson } from "@/types/content";

export const lesson_8_11: Lesson = {
  id: "lesson-8-11",
  chapterId: "ch8-3-workflows",
  moduleId: "09-workflow-automation",
  title: "Content Creation Sprints",
  description: "Create blog posts, social content, and proposals in minutes, not hours",
  order: 11,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-11-cover.webp",
        imageAlt: "Content creation workspace with laptop",
        title: "Content Creation Sprints",
        subtitle: "Outline, draft, and polish content in under 5 minutes with the sprint method",
      },
    },
    // ===========================================================================
    // SECTION 1: The Blog Post Workflow
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Blog Post Workflow (2 Minutes)",
        paragraphs: [
          "Here's the complete workflow for creating a blog post from scratch:",
          "",
          "**Minute 1: Outline** - Generate a structured outline with key points",
          "",
          "**Minute 2: Draft** - Expand each section into full paragraphs",
          "",
          "**Bonus 30 seconds: Polish** - Ask for improvements to flow and clarity",
          "",
          "The result isn't perfect, but it's 80% done. You spend your time refining, not creating from nothing.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Blog Outline Prompt
    // ===========================================================================
    {
      id: "section-2",
      type: "quickPrompt",
      content: {
        heading: "Blog Outline Generator",
        description: "Create a structured outline for any blog post topic.",
        promptText: `Create a blog post outline:

**Topic:** [YOUR TOPIC]
**Target audience:** [who will read this]
**Goal:** [inform / persuade / entertain / educate]
**Length:** [short (500 words) / medium (1000 words) / long (2000+ words)]
**Tone:** [professional / casual / technical / conversational]

Provide:
1. 3-5 potential headlines
2. A compelling introduction hook
3. 4-6 main sections with key points
4. A strong conclusion with call-to-action`,
      },
    },
    // ===========================================================================
    // SECTION 3: Blog Draft Prompt
    // ===========================================================================
    {
      id: "section-3",
      type: "quickPrompt",
      content: {
        heading: "Blog Draft Expander",
        description: "Turn your outline into a complete draft.",
        promptText: `Expand this outline into a full blog post:

[PASTE YOUR OUTLINE]

Requirements:
- Target length: [1000 / 1500 / 2000 words]
- Include a compelling hook in the first paragraph
- Use subheadings for each section
- Include 2-3 concrete examples or data points
- End with a clear call-to-action
- Write in [first person / third person]

Don't use cliches or fluff. Every sentence should add value.`,
      },
    },
    // ===========================================================================
    // SECTION 4: Social Media Batching
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Social Media Batching Strategy",
        insights: [
          "Create a week's worth of LinkedIn posts in one 10-minute session",
          "Generate multiple Twitter/X threads from a single piece of content",
          "Adapt the same message for different platforms instantly",
          "A/B test headlines and hooks by generating variations",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: LinkedIn Post Prompt
    // ===========================================================================
    {
      id: "section-5",
      type: "quickPrompt",
      content: {
        heading: "LinkedIn Post Generator",
        description: "Create engaging LinkedIn posts that drive engagement.",
        promptText: `Write a LinkedIn post about:

**Topic:** [YOUR TOPIC]
**Key insight:** [the main point you want to make]
**Target audience:** [executives / professionals / industry peers]
**Goal:** [share expertise / start discussion / share news]

Requirements:
- Hook in the first line (make them stop scrolling)
- Keep it under 1300 characters
- Use line breaks for readability
- End with a question or call-to-action
- Include 3-5 relevant hashtags

Write 3 variations so I can choose the best one.`,
      },
    },
    // ===========================================================================
    // SECTION 6: Twitter Thread Prompt
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Twitter/X Thread Generator",
        description: "Turn any idea into an engaging thread.",
        promptText: `Create a Twitter/X thread based on:

**Source material:** [YOUR CONTENT, ARTICLE, OR IDEA]
**Number of tweets:** [5-10]
**Style:** [educational / storytelling / hot take / listicle]

Requirements:
- First tweet is the hook (needs to grab attention)
- Each tweet under 280 characters
- Clear progression from start to finish
- Last tweet summarizes and includes call-to-action
- Suggest hashtags for discoverability

Format each tweet clearly numbered (1/X, 2/X, etc.)`,
      },
    },
    // ===========================================================================
    // SECTION 7: Proposals and Reports
    // ===========================================================================
    {
      id: "section-7",
      type: "textWithImage",
      content: {
        title: "Proposals and Report Templates",
        paragraphs: [
          "Business documents follow predictable patterns. ChatGPT can generate 80% of any proposal or report in under a minute.",
          "",
          "**The key is structure:** Most business documents have standard sections. Once you know the template, you can generate content rapidly.",
          "",
          "**Common document types:**",
          "- Project proposals",
          "- Business cases",
          "- Status reports",
          "- Executive summaries",
          "- Meeting recaps",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-11-inline-1.webp",
        imageAlt: "Business documents and proposals",
      },
    },
    // ===========================================================================
    // SECTION 8: Proposal Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Project Proposal Template",
        description: "Generate a structured project proposal.",
        promptText: `Write a project proposal:

**Project name:** [NAME]
**Client/Stakeholder:** [WHO IT'S FOR]
**Problem statement:** [WHAT PROBLEM WE'RE SOLVING]
**Proposed solution:** [HOW WE'LL SOLVE IT]
**Timeline:** [DURATION]
**Budget range:** [IF RELEVANT]

Include sections for:
1. Executive Summary
2. Background / Context
3. Objectives
4. Approach / Methodology
5. Deliverables
6. Timeline
7. Investment / Resources
8. Next Steps

Keep it concise but comprehensive. Professional tone.`,
      },
    },
    // ===========================================================================
    // SECTION 9: Headline Generation
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Headline Generator",
        description: "Generate attention-grabbing headlines for any content.",
        promptText: `Generate 10 headlines for:

**Content topic:** [YOUR TOPIC]
**Content type:** [blog post / email / landing page / social post]
**Target audience:** [WHO WILL READ IT]
**Goal:** [clicks / engagement / shares / conversions]

Mix these styles:
- 2 curiosity-driven (makes reader want to know more)
- 2 benefit-focused (clear value proposition)
- 2 numbers/listicle (specific and scannable)
- 2 how-to (educational promise)
- 2 provocative (challenges assumptions)

Rate each headline 1-10 for click-through potential.`,
      },
    },
    // ===========================================================================
    // SECTION 10: Ad Copy Variations
    // ===========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Ad Copy Variations",
        description: "Generate multiple ad copy versions for A/B testing.",
        promptText: `Write ad copy variations for:

**Product/Service:** [WHAT YOU'RE PROMOTING]
**Key benefit:** [MAIN VALUE PROPOSITION]
**Target audience:** [WHO YOU'RE TARGETING]
**Platform:** [Facebook / Google / LinkedIn / Instagram]
**Call-to-action:** [WHAT THEY SHOULD DO]

Create 5 variations:
1. Feature-focused (highlights specific capabilities)
2. Benefit-focused (emphasizes outcomes)
3. Social proof (mentions results/customers)
4. Urgency-driven (time-sensitive)
5. Question-based (engages curiosity)

Keep each under platform character limits.`,
      },
    },
    // ===========================================================================
    // SECTION 11: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Generate content outlines and drafts rapidly",
        feature: "Fast content generation with templates",
        tip: "Use the sprint method: generate outline first, then expand section by section for best results",
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Content in a Sprint",
        purpose: "Use the sprint method to create a piece of content from outline to polish.",
        instructions: [
          "Choose a content type you need: blog post, LinkedIn post, or email",
          "Generate an outline with 3-5 key sections (30 seconds)",
          "Expand into a complete first draft (60 seconds)",
          "Polish with one refinement pass (30 seconds)",
          "Save as a template for future content of this type",
        ],
        deliverable: "A complete piece of content created in under 3 minutes",
        estimatedTime: "5-8 minutes",
        starterPrompt:
          "Create a [blog post/LinkedIn post/email] about [TOPIC]. Audience: [who]. Goal: [inform/persuade/etc.]. Tone: [professional/casual]. Start with an outline, then I'll ask you to expand.",
        successCriteria: [
          "Created outline, draft, and polished version sequentially",
          "Each phase completed in under the target time",
          "Final content is ready for review/publishing",
          "Saved prompt structure as reusable template",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Content Creation Unlocked",
        description:
          "You've mastered the sprint method for content creation. From blog posts to social media, proposals to ad copy, ChatGPT helps you create more in less time. Your blank page anxiety is gone. Time to create.",
        xpReward: 100,
        buttonText: "Complete & Continue",
      },
    },
  ],
};
