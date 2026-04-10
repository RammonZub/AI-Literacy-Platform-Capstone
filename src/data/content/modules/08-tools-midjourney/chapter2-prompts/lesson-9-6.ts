/**
 * Lesson 9.6: The Anatomy of a Great Prompt
 *
 * CHAPTER: 2 - Prompt Engineering
 * LESSON: 1 of 3 - Understanding Prompt Structure
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach the fundamental structure of effective Midjourney prompts
 *
 * KEY RESPONSIBILITIES:
 * - Break down prompt components (Subject, Environment, Style, Light, Quality)
 * - Explain why prompt order matters
 * - Show examples of prompts from simple to complex
 * - Introduce the prompt formula
 */

import type { Lesson } from "@/types/content";

export const lesson_9_6: Lesson = {
  id: "lesson-9-6",
  chapterId: "ch9-2-prompts",
  moduleId: "08-tools-midjourney",
  title: "The Anatomy of a Great Prompt",
  description:
    "Learn the five essential components that transform simple ideas into stunning images",
  order: 6,
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
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-6-cover.webp",
        imageAlt: "Writing prompts and creative text concepts for AI image generation",
        title: "The Anatomy of a Great Prompt",
        subtitle:
          "Learn the five essential components that transform simple ideas into stunning images",
      },
    },
    // ===========================================================================
    // SECTION 1: The Five Components
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Five Components of Every Great Prompt",
        paragraphs: [
          "Every effective Midjourney prompt contains up to five key elements:",
          "",
          "**Subject** + **Environment** + **Style/Medium** + **Lighting** + **Quality Boosters**",
          "",
          "Let's break down each one and see how they work together.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Component 1 - Subject
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "1. Subject: What You Want to See",
        insights: [
          "The core focus of your image—what the viewer looks at first",
          "Be specific: 'golden retriever puppy' not 'dog'",
          "Include details: pose, expression, clothing, accessories",
          "This is the foundation—everything else supports the subject",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Component 2 - Environment
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "2. Environment: Where It Happens",
        insights: [
          "The setting, background, or context for your subject",
          "Indoor/outdoor, urban/natural, specific locations",
          "Time of day, weather, season",
          "Environment sets the mood and tells a story",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Component 3 - Style/Medium
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "3. Style/Medium: How It Looks",
        insights: [
          "Art style: photorealistic, oil painting, watercolor, digital art, anime",
          "Photography style: portrait, landscape, macro, editorial, candid",
          "Design style: minimalist, vintage, modern, cinematic",
          "Medium defines the aesthetic of your image",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Component 4 - Lighting
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "4. Lighting: The Mood and Atmosphere",
        insights: [
          "Light quality: golden hour, blue hour, harsh midday, soft diffused",
          "Light direction: backlit, side-lit, front-lit, dramatic shadows",
          "Light color: warm, cool, colored gels, neon",
          "Lighting creates emotion and depth",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Component 5 - Quality Boosters
    // ===========================================================================
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "5. Quality Boosters: Resolution and Detail",
        insights: [
          "Technical terms: 4K, 8K, ultra-detailed, high resolution",
          "Quality descriptors: sharp focus, intricate details, masterpiece",
          "Rendering terms: octane render, unreal engine, ray tracing",
          "Use sparingly—too many can make images look artificial",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: The Prompt Formula
    // ===========================================================================
    {
      id: "section-7",
      type: "textWithImage",
      content: {
        title: "The Prompt Formula",
        paragraphs: [
          "Here's the structure that consistently produces great results:",
          "",
          "**[Specific Subject] + [Environment/Setting] + [Style/Medium] + [Lighting/Mood] + [Quality Terms]**",
          "",
          "Order matters. Midjourney pays more attention to words at the beginning of your prompt. Put the most important elements first.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-6-inline-1.webp",
        imageAlt: "Formula and structure concepts",
      },
    },
    // ===========================================================================
    // SECTION 8: Building a Prompt Step by Step
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Building a Prompt: Step by Step",
        paragraphs: [
          "Let's construct a prompt from scratch:",
          "",
          "**Start with subject**: 'a cat' → 'a fluffy white Persian cat'",
          "",
          "**Add environment**: 'a fluffy white Persian cat on a velvet cushion'",
          "",
          "**Add style**: 'a fluffy white Persian cat on a velvet cushion, oil painting style'",
          "",
          "**Add lighting**: 'a fluffy white Persian cat on a velvet cushion, oil painting style, soft window light'",
          "",
          "**Add quality**: 'a fluffy white Persian cat on a velvet cushion, oil painting style, soft window light, highly detailed, masterpiece'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Simple vs Complex Examples
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Basic Prompt",
        description: "A simple prompt with just a subject:",
        promptText: "A cat --v 6",
      },
    },
    {
      id: "section-9b",
      type: "quickPrompt",
      content: {
        heading: "Intermediate Prompt",
        description: "Subject + environment + basic style:",
        promptText: "A fluffy white Persian cat on a velvet cushion, oil painting style --v 6",
      },
    },
    {
      id: "section-9c",
      type: "quickPrompt",
      content: {
        heading: "Advanced Prompt",
        description: "Full formula with all components:",
        promptText:
          "A fluffy white Persian cat with blue eyes, sitting regally on a crimson velvet cushion in a vintage library, oil painting style, soft golden afternoon light streaming through dusty windows, highly detailed, masterpiece, classical art --v 6",
      },
    },
    // ===========================================================================
    // SECTION 10: Why Order Matters
    // ===========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Why Order Matters",
        paragraphs: [
          "Midjourney reads prompts left to right, giving more weight to earlier words. This is crucial:",
          "",
          "**Strong**: 'A majestic eagle soaring over snow-capped mountains'",
          "",
          "**Weak**: 'Snow-capped mountains with an eagle somewhere in the scene'",
          "",
          "In the first example, the eagle is clearly the focus. In the second, the mountains dominate and the eagle might be tiny—or missing entirely.",
          "",
          "Put your subject first. Always.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Practice Building Prompts
    // ===========================================================================
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Build Your Own Prompt",
        description:
          "Use this template to create a prompt. Replace each [bracket] with your choice:",
        promptText:
          "[specific subject] in [environment], [style/medium], [lighting], [quality terms] --v 6",
      },
    },
    // ===========================================================================
    // SECTION 12: Common Mistakes
    // ===========================================================================
    {
      id: "section-12",
      type: "text",
      content: {
        title: "Common Prompt Mistakes",
        paragraphs: [
          "Even with the formula in hand, beginners often make predictable mistakes that limit their results. Understanding these pitfalls will help you avoid them and accelerate your learning curve significantly.",
          "",
          "The most common mistake is being too vague with prompts like 'something cool' or 'a nice picture.' These tell Midjourney nothing useful about your vision. The AI has no way to know what you find cool or nice, so it defaults to generic interpretations. Always replace vague terms with specific, descriptive language that paints a clear picture of what you want to see.",
          "",
          "Word order matters tremendously in Midjourney. The AI reads prompts left to right and assigns more importance to words that appear earlier. When you put your subject last, you're telling Midjourney that everything else in your prompt is more important than what you actually want to see. This often results in your subject appearing small, simplified, or sometimes not appearing at all.",
          "",
          "Contradictory terms confuse the AI and produce unpredictable results. Prompts like 'dark and bright' or 'minimalist and detailed' pull the image generation in opposite directions. Midjourney tries to satisfy both conditions simultaneously, often resulting in images that satisfy neither. Pick a clear direction for each aspect of your prompt and commit to it.",
          "",
          "More words do not automatically mean better results. Overloaded prompts with dozens of descriptors can actually work against you by diluting the impact of your most important terms. Be comprehensive but focused, including everything that matters while cutting anything redundant or unnecessary.",
          "",
          "Finally, never forget essential parameters like --v 6. Without these, you're not taking full advantage of Midjourney's capabilities. Parameters control critical aspects of image generation and can dramatically improve your results when used correctly.",
        ],
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
        task: "Build a complete prompt using the five-component formula",
        feature: "Prompt structure (Subject + Environment + Style + Lighting + Quality)",
        tip: "Put your subject first—Midjourney pays more attention to words at the beginning",
      },
    },
    // ===========================================================================
    // SECTION 13: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build a Complete Prompt",
        purpose:
          "Practice the prompt formula to create a well-structured prompt that demonstrates all five components.",
        instructions: [
          "Choose a subject you'd like to create (person, animal, object, scene)",
          "Write down each component: Subject, Environment, Style, Lighting, Quality",
          "Combine them into a single prompt following the formula",
          "Generate your prompt and observe how each element appears in the result",
        ],
        deliverable: "One generated image created from your custom 5-component prompt",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: [specific subject] in [environment/setting], [style/medium], [lighting description], [quality terms] --v 6",
        successCriteria: [
          "Your prompt includes all five components (Subject, Environment, Style, Lighting, Quality)",
          "The subject is specific (not generic like 'a dog')",
          "The generated image reflects each element you described",
          "You saved your successful prompt for future reference",
        ],
      },
    },
    // ===========================================================================
    // SECTION 14: Completion
    // ===========================================================================
    {
      id: "section-14",
      type: "completion",
      content: {
        title: "Prompt Structure Mastered",
        description:
          "You now understand the five components of great prompts and how to order them. In the next lesson, we'll expand your vocabulary with descriptive language and style terms that will make your prompts even more powerful.",
        xpReward: 100,
        buttonText: "Continue to Descriptive Language",
      },
    },
  ],
};
