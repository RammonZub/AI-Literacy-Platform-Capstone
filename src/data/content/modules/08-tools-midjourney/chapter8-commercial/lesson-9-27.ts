/**
 * Lesson 9.27: Your Next Steps and Continued Learning
 *
 * CHAPTER: 8 - Commercial Usage, Rights, and Next Steps
 * LESSON: 3 of 3 - CAPSTONE/FINAL LESSON
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Celebrate course completion and guide continued growth as a visual creator
 *
 * KEY RESPONSIBILITIES:
 * - Review key concepts from entire course
 * - Provide resources for continued learning
 * - Celebrate learner achievement
 * - Guide next steps and portfolio building
 */

import type { Lesson } from "@/types/content";

export const lesson_9_27: Lesson = {
  id: "lesson-9-27",
  chapterId: "ch9-8-commercial",
  moduleId: "08-tools-midjourney",
  title: "Your Next Steps and Continued Learning",
  description: "Celebrate your journey and plan your continued growth as a visual creator",
  order: 27,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "review",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-27-cover.webp",
        imageAlt: "Celebration and achievement concept with colorful balloons",
        title: "Your Next Steps and Continued Learning",
        subtitle: "Celebrate how far you have come and prepare for the journey ahead",
      },
    },
    {
      id: "section-journey",
      type: "highlightCard",
      content: {
        heading: "Your Journey Complete",
        insights: [
          "Chapter 1-2: Getting Started & Prompt Fundamentals",
          "Chapter 3-4: Parameters & Business Applications",
          "Chapter 5-6: Personal Projects & Advanced Techniques",
          "Chapter 7-8: Workflows & Commercial Usage",
          "27 lessons • 405 minutes • 2,700 XP earned",
        ],
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Skills You Now Possess",
        paragraphs: [
          "Look at what you've learned. You can craft prompts that produce exactly what you imagine. You understand parameters like aspect ratio, stylize, and chaos—and when to adjust them.",
          "You've mastered advanced techniques: style references for consistent aesthetics, character references for recurring subjects, inpainting for precise edits. You know how to upscale, zoom, and pan to refine your work.",
          "Perhaps most importantly, you understand the professional side: workflows for efficiency, rights and licensing for commercial use, and preparation for real-world output.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Course Concepts Cheat Sheet",
        insights: [
          "Prompt Structure: [SUBJECT] + [STYLE] + [DETAILS] + [PARAMETERS]",
          "Key Parameters: --ar (aspect), --s (stylize), --c (chaos), --v 6 (version)",
          "References: --sref (style), --cref (character), --iw (weight)",
          "Refinement: U1-U4 (upscale), V1-V4 (variations), Zoom, Pan",
          "Advanced: Inpainting (Vary Region), blend, describe, shorten",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Troubleshooting Quick Reference",
        paragraphs: [
          "When common issues arise in your generations, these solutions will help you get back on track quickly. If your image appears too dark or bright, add lighting direction to your prompt using terms like 'golden hour' or 'soft diffused light' to guide Midjourney toward better illumination. When the aspect ratio comes out wrong, explicitly use the --ar parameter with values like 16:9 for wide formats, 9:16 for tall formats, or 1:1 for square compositions.",
          "Style inconsistency between images can be solved by using --sref with a reference image that matches your desired aesthetic, creating visual continuity across your project. If you're getting too much variety when you want predictability, lower your --c (chaos) value to keep results closer to the default interpretation. Conversely, if results feel too predictable and you want more creativity, raise the chaos value or try creative upscale mode for unexpected elements. When characters keep changing across generations, use --cref with your base character image to lock in consistent features.",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Staying Current with Midjourney",
        paragraphs: [
          "Midjourney evolves rapidly. New versions, features, and parameters arrive regularly. Here's how to stay current:",
          "**Official channels**: Follow Midjourney's Discord announcements and official documentation at docs.midjourney.com.",
          "**Community**: The Midjourney Discord is a goldmine. Browse 'new' and 'top' channels for techniques others are using.",
          "**Experiment**: When new features launch, play with them immediately. Build muscle memory while the feature is fresh.",
          "**This course**: We update content as major features release. Check back for refreshers.",
        ],
      },
    },
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Resources Worth Following",
        insights: [
          "Midjourney Official Discord: Primary source for updates and community",
          "Midjourney Documentation: docs.midjourney.com for official guides",
          "YouTube creators: Search 'Midjourney tutorial' for visual walkthroughs",
          "Twitter/X AI art community: #midjourney for trending techniques",
          "Reddit r/midjourney: Community discussions and shared discoveries",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Advanced Applications to Explore",
        paragraphs: [
          "You've built a strong foundation. Here are directions for deeper exploration:",
          "**Animation**: Combine Midjourney images with animation tools for motion graphics.",
          "**3D Integration**: Use AI-generated textures and backgrounds in 3D software.",
          "**Game Assets**: Create characters, environments, and items for game development.",
          "**Storytelling**: Build graphic narratives with consistent characters and scenes.",
          "**Product Visualization**: Rapid prototyping for product concepts and marketing.",
          "**Architecture/Interior Design**: Visualize spaces before committing to execution.",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Building Your Portfolio",
        paragraphs: [
          "Your best work deserves to be seen by audiences who will appreciate it. Consider these platforms for showcasing your creations and building your reputation as a visual creator. A personal website offers full control over presentation and branding, allowing you to craft a cohesive experience that reflects your unique style. Behance and Dribbble provide design-focused communities with professional exposure, connecting you with potential clients and collaborators who value quality visual work.",
          "Instagram and Twitter serve as social platforms where visual content spreads organically, helping you build an audience through shares and engagement. ArtStation caters specifically to illustration and concept art, making it ideal if your focus leans toward those disciplines. Redbubble and Society6 let you turn your best work into products without managing inventory or fulfillment. LinkedIn functions as a professional showcase for commercial capabilities, positioning you for business opportunities and freelance work.",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Turning Skills into Income",
        paragraphs: [
          "If monetization interests you, consider these paths:",
          "**Freelance image creation**: Offer custom Midjourney services on Fiverr, Upwork, or directly.",
          "**Print-on-demand**: Upload designs to platforms that handle printing and shipping.",
          "**Stock imagery**: Some platforms now accept AI content (check current policies).",
          "**Client work**: Integrate AI imagery into design, marketing, or content services.",
          "**Teaching**: Share your knowledge through tutorials, courses, or consulting.",
          "**Digital products**: Sell prompt packs, style guides, or template collections.",
        ],
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Where to Get Help",
        insights: [
          "Midjourney Discord #support channel: Official help with technical issues",
          "Midjourney Discord #getting-started: Beginner-friendly community help",
          "Documentation: docs.midjourney.com for reference",
          "Google: 'midjourney [your question]' often finds answers",
          "This course: Revisit any lesson when you need a refresher",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "A Final Word",
        paragraphs: [
          "You started this course unable to create visual content without design skills. You're ending it with the ability to generate professional-quality imagery for any purpose—personal projects, business applications, or commercial products.",
          "The gap between imagination and execution has narrowed dramatically. Your ideas can now become visuals in minutes, not months. That's a superpower.",
          "Use it thoughtfully. Create things that matter. Push boundaries. Share your discoveries. And remember: every expert was once a beginner who refused to stop learning.",
        ],
      },
    },
    {
      id: "section-celebration",
      type: "highlightCard",
      content: {
        heading: "Congratulations, Visual Creator!",
        insights: [
          "You've completed all 27 lessons of Midjourney Mastery",
          "You can now create stunning visuals without traditional design skills",
          "You understand both creative techniques and professional workflows",
          "You're equipped to use AI imagery ethically and commercially",
          "Go forth and create amazing things!",
        ],
      },
    },
    {
      id: "section-action",
      type: "quickPrompt",
      content: {
        heading: "Your First Post-Course Creation",
        description:
          "Now that you've completed the course, create something using your new skills. Describe what you'll make:",
        promptText:
          "My first creation as a Midjourney graduate: [description of your project] using techniques: [list the parameters/techniques you'll apply]",
      },
    },
    {
      id: "knowledge-check",
      type: "knowledgeCheck",
      content: {
        question: "What is the correct structure for an effective Midjourney prompt?",
        options: [
          "[PARAMETERS] + [STYLE] + [SUBJECT]",
          "[SUBJECT] + [STYLE] + [DETAILS] + [PARAMETERS]",
          "[STYLE] + [DETAILS] + [PARAMETERS]",
          "[SUBJECT] only - the AI figures out the rest",
        ],
        correctAnswer: 1,
        explanation:
          "The most effective prompt structure starts with your subject, adds style details, then specific descriptors, and finally parameters like --ar or --s.",
      },
    },
    {
      id: "section-actionable-task",
      // NOTE: Capstone lesson - no separate actionable task needed, the lesson itself is comprehensive
      type: "text",
      content: {
        title: "Your Creative Future",
        paragraphs: [
          "This course has equipped you with the skills to create stunning visuals without design expertise. From basic prompts to advanced techniques—you now have a comprehensive toolkit.",
          "",
          "The best creators aren't those who know every parameter. They're those who experiment, iterate, and develop their own style. Go create something amazing.",
          "",
          "Your journey as a visual creator starts now.",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Course Complete: Midjourney Mastery",
        description:
          "You've completed all 27 lessons of Midjourney Mastery. From your first image to advanced techniques like sref, cref, and inpainting—you're now a confident visual creator. Go forth and create stunning professional visuals without design skills!",
        xpReward: 100,
        buttonText: "Complete Midjourney Mastery",
      },
    },
  ],
};
