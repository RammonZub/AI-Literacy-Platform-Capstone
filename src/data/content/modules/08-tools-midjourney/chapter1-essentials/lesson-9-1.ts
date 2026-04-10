/**
 * Lesson 9.1: Welcome: What This Course Will Do for You
 *
 * CHAPTER: 1 - Getting Started
 * LESSON: 1 of 5 - Welcome to Midjourney Mastery
 *
 * DURATION: 15 minutes (introductory)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce Midjourney, set expectations, and get learners excited
 *
 * KEY RESPONSIBILITIES:
 * - Explain what Midjourney is (and isn't)
 * - Set realistic expectations about AI limitations
 * - Preview business and personal possibilities
 * - Establish the "learn by doing" philosophy
 */

import type { Lesson } from "@/types/content";

export const lesson_9_1: Lesson = {
  id: "lesson-9-1",
  chapterId: "ch9-1-essentials",
  moduleId: "08-tools-midjourney",
  title: "Welcome: What This Course Will Do for You",
  description:
    "Discover what Midjourney can do for you and set expectations for your creative journey",
  order: 1,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    // ===========================================================================
    // HERO IMAGE
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-1-cover.webp",
        imageAlt: "Abstract colorful AI-generated art representing creative possibilities",
        title: "Welcome: What This Course Will Do for You",
        subtitle:
          "Unlock the ability to create stunning, professional-quality visuals without any design skills or artistic training",
      },
    },
    // ===========================================================================
    // SECTION 1: What is Midjourney?
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What is Midjourney?",
        paragraphs: [
          "Midjourney is an AI-powered image generation tool. You type a text description, and it creates images that match your vision.",
          "",
          "Think of it like having a professional illustrator, photographer, and designer available 24/7—except instead of explaining your ideas over meetings and revisions, you just describe what you want in text.",
          "",
          "Type 'a cozy coffee shop on a rainy day, warm lighting, cinematic' and within seconds, you have four unique interpretations to choose from.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: What This Course Will Do for You
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What You'll Achieve",
        paragraphs: [
          "This course is designed to take you from complete beginner to confident creator. By the end, you'll be equipped with a comprehensive skillset that transforms how you create visual content.",
          "",
          "You'll learn to create professional visuals for your business, brand, or personal projects without needing to hire designers. The course teaches you prompt engineering—the critical skill that separates amateur results from stunning ones. You'll understand Midjourney's full toolkit, from basic style parameters to advanced techniques like blending images and maintaining character consistency.",
          "",
          "Beyond the technical skills, you'll build a workflow that turns your ideas into polished visuals in minutes rather than hours. The course also covers legal and ethical considerations so you can use your creations confidently in any context, from social media posts to commercial products.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: What Midjourney is NOT
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "What Midjourney is NOT",
        insights: [
          "A replacement for human creativity—you provide the vision, Midjourney provides the execution",
          "Perfect at everything—text rendering, hands, and faces can still be challenging",
          "A magic button—the best results come from learning to communicate effectively with AI",
          "Free forever—subscription required for regular use (we'll cover plans in Lesson 5)",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Current Limitations (Honest Expectations)
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Current Limitations to Know",
        paragraphs: [
          "Let's be honest about what Midjourney struggles with right now. Understanding these helps you work smarter and set realistic expectations.",
          "",
          "First, text rendering remains a challenge. Midjourney doesn't reliably create readable text within images, so for text-heavy designs, you'll want to combine Midjourney with tools like Canva or Photoshop to add typography separately.",
          "",
          "Hands and fingers are another known difficulty. AI still struggles with hand anatomy, and you'll often see extra fingers or awkward positions. This is improving with each version but remains noticeable.",
          "",
          "When it comes to specific faces, Midjourney creates realistic-looking people, but they're entirely fictional. If you need to generate images of specific individuals, results will vary widely. Finally, while you can influence composition, precise layouts require iteration and sometimes post-processing to achieve pixel-perfect control.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Course Structure
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Your Learning Path",
        paragraphs: [
          "This course contains 27 lessons, each designed to take about 15 minutes. Every lesson builds on the previous one, so you're never overwhelmed.",
          "",
          "We follow a 'learn by doing' philosophy. You'll create images in your very first lesson—not just read about theory.",
          "",
          "Expect small wins early that build confidence, followed by increasingly sophisticated techniques that expand what's possible.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-1-inline-1.webp",
        imageAlt: "Person learning on laptop with creative graphics",
      },
    },
    // ===========================================================================
    // SECTION 6: No Need to Be "Creative" or "Technical"
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "You Don't Need to Be 'Creative' or 'Technical'",
        paragraphs: [
          "Here's something important: you don't need to consider yourself creative to excel with Midjourney.",
          "",
          "Traditional art requires years of technique development. Midjourney flips this—you need to develop the skill of describing what you want clearly.",
          "",
          "That's a learnable skill. This course teaches you the vocabulary, patterns, and frameworks that consistently produce great results.",
          "",
          "As for technical skills? If you can type a message and click buttons, you have all the technical ability needed.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Preview of Possibilities
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "What's Possible: A Preview",
        paragraphs: [
          "People just like you are creating remarkable things with Midjourney right now. The applications span from business essentials to deeply personal creative projects.",
          "",
          "Marketing materials represent one of the most common use cases. Users create social media graphics, blog headers, and presentation backgrounds without expensive stock photo subscriptions. Product visualization is equally popular, with entrepreneurs generating prototype concepts, packaging mockups, and mood boards for client presentations.",
          "",
          "Content creators use Midjourney for YouTube thumbnails, podcast covers, and newsletter illustrations. On the personal side, hobbyists create character art for stories, concept art for games, custom wallpapers, and unique gifts for friends. Professionals build portfolios with architectural concepts, fashion designs, logo variations, and brand mood boards—all without traditional design training.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Building Confidence Step by Step
    // ===========================================================================
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "Your First Win is Coming",
        insights: [
          "By the end of Lesson 4, you'll have created your first Midjourney image",
          "By the end of Chapter 2, you'll understand why some prompts work and others don't",
          "By course completion, you'll have a repeatable system for creating professional visuals",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Your First Task
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Prepare for Success",
        description:
          "Before moving on, take a moment to think about what YOU want to create. Write down 3 specific things you'd like to make with Midjourney:",
        promptText:
          "My Midjourney goals: 1) [first project idea] 2) [second project idea] 3) [third project idea]",
      },
    },
    // ===========================================================================
    // TOOL REFERENCE
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Prepare your creative goals before starting the course",
        feature: "/imagine command",
        tip: "Defining clear goals now will help you choose the right techniques throughout this course",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Set Your Midjourney Goals",
        purpose:
          "Defining your goals now will help you focus on the most relevant techniques throughout this course and stay motivated.",
        instructions: [
          "Open a note-taking app or grab a piece of paper",
          "Write down 3 specific projects you want to create with Midjourney",
          "For each project, note what you'll use it for (business, personal, social media, etc.)",
          "Keep this list handy - we'll reference your goals throughout the course",
        ],
        deliverable:
          "A written list of 3 specific Midjourney project goals with their intended use cases",
        estimatedTime: "5 minutes",
        starterPrompt:
          "My Midjourney goals:\n1. [First project: be specific about subject, style, and purpose]\n2. [Second project: describe what you want to create]\n3. [Third project: include where you'll use it]",
        successCriteria: [
          "You have written down 3 distinct project ideas",
          "Each idea includes what you want to create and why",
          "At least one goal relates to a real need you have (business or personal)",
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
        title: "Ready to Begin",
        description:
          "You now understand what Midjourney is, what it can do, and what to expect from this course. In the next lesson, we'll set up everything you need to start creating.",
        xpReward: 100,
        buttonText: "Start Your Journey",
      },
    },
  ],
};
