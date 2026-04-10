/**
 * Lesson 9.8: Practice Lab: Prompt Mastery
 *
 * CHAPTER: 2 - Prompt Engineering
 * LESSON: 3 of 3 - Hands-On Practice
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Provide hands-on practice transforming and building prompts
 *
 * KEY RESPONSIBILITIES:
 * - Practice transforming weak prompts into strong ones
 * - Explore subjects with different styles
 * - Build reusable prompt templates
 * - Teach reverse-engineering technique
 */

import type { Lesson } from "@/types/content";

export const lesson_9_8: Lesson = {
  id: "lesson-9-8",
  chapterId: "ch9-2-prompts",
  moduleId: "08-tools-midjourney",
  title: "Practice Lab: Prompt Mastery",
  description: "Transform weak prompts into powerful ones and build your personal prompt library",
  order: 8,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "exercise",
  sections: [
    // ===========================================================================
    // HERO IMAGE
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-8-cover.webp",
        imageAlt: "Organized practice workspace for hands-on prompt engineering",
        title: "Practice Lab: Prompt Mastery",
        subtitle:
          "Transform weak prompts into powerful ones and build your personal prompt library",
      },
    },
    // ===========================================================================
    // SECTION 1: Exercise 1 - Fix These Prompts
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Exercise 1: Fix These Weak Prompts",
        paragraphs: [
          "Below are common weak prompts. Your job is to transform them using the formula and vocabulary you've learned. We'll show you the weak version, then a strong version for comparison.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Weak Prompt 1
    // ===========================================================================
    {
      id: "section-2",
      type: "quickPrompt",
      content: {
        heading: "Weak: 'A nice house'",
        description: "This prompt is too vague. What kind of house? Where? What style?",
        promptText: "A nice house --v 6",
      },
    },
    {
      id: "section-2b",
      type: "quickPrompt",
      content: {
        heading: "Strong Version",
        description: "Now with specific details, environment, style, and lighting:",
        promptText:
          "A charming two-story Craftsman bungalow with a wraparound porch and dormer windows, nestled among mature oak trees on a tree-lined suburban street, golden autumn afternoon light, American residential neighborhood, architectural photography --v 6",
      },
    },
    // ===========================================================================
    // SECTION 3: Weak Prompt 2
    // ===========================================================================
    {
      id: "section-3",
      type: "quickPrompt",
      content: {
        heading: "Weak: 'A scary monster'",
        description: "What makes it scary? What kind of monster? Where is it?",
        promptText: "A scary monster --v 6",
      },
    },
    {
      id: "section-3b",
      type: "quickPrompt",
      content: {
        heading: "Strong Version",
        description: "Specific creature, environment, mood, and style:",
        promptText:
          "A towering shadow creature with elongated limbs and hollow glowing eyes, emerging from swirling dark fog in an abandoned Victorian manor, moonlight cutting through broken windows, dark fantasy horror art, cinematic atmosphere, ominous, threatening --v 6",
      },
    },
    // ===========================================================================
    // SECTION 4: Weak Prompt 3
    // ===========================================================================
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Weak: 'A flower'",
        description: "What flower? What setting? What mood?",
        promptText: "A flower --v 6",
      },
    },
    {
      id: "section-4b",
      type: "quickPrompt",
      content: {
        heading: "Strong Version",
        description: "Specific subject, environment, style, and lighting:",
        promptText:
          "A single perfect peony in soft blush pink, water droplets on delicate petals, resting in a ceramic bud vase on a weathered wooden windowsill, soft diffused morning light, still life photography, shallow depth of field, elegant and serene --v 6",
      },
    },
    // ===========================================================================
    // SECTION 5: Exercise 2 - A/B Testing
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Exercise 2: A/B Testing - Same Subject, Different Styles",
        paragraphs: [
          "One of the best ways to learn is to keep the subject identical and change only the style. Try these prompts and observe how dramatically the results differ:",
        ],
      },
    },
    {
      id: "section-5a",
      type: "quickPrompt",
      content: {
        heading: "Style A: Photorealistic",
        description: "Same subject, photorealistic style:",
        promptText:
          "A woman standing at the edge of a cliff overlooking the ocean, wind blowing through her hair, photorealistic, professional photography, natural lighting --v 6",
      },
    },
    {
      id: "section-5b",
      type: "quickPrompt",
      content: {
        heading: "Style B: Oil Painting",
        description: "Same subject, classical oil painting:",
        promptText:
          "A woman standing at the edge of a cliff overlooking the ocean, wind blowing through her hair, oil painting style, impressionist, visible brushstrokes, Romantic era art --v 6",
      },
    },
    {
      id: "section-5c",
      type: "quickPrompt",
      content: {
        heading: "Style C: Anime/Illustration",
        description: "Same subject, anime style:",
        promptText:
          "A woman standing at the edge of a cliff overlooking the ocean, wind blowing through her hair, anime illustration, Studio Ghibli style, vibrant colors, dreamy atmosphere --niji 6",
      },
    },
    {
      id: "section-5d",
      type: "quickPrompt",
      content: {
        heading: "Style D: Cyberpunk",
        description: "Same subject, cyberpunk style:",
        promptText:
          "A woman standing at the edge of a cliff overlooking the ocean, wind blowing through her hair, cyberpunk style, neon city lights in the distance below, digital art, futuristic atmosphere --v 6",
      },
    },
    // ===========================================================================
    // SECTION 6: Exercise 3 - Add One Element
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Exercise 3: Add One Element at a Time",
        paragraphs: [
          "Start simple and build up. This technique helps you understand how each word affects the final image:",
        ],
      },
    },
    {
      id: "section-6a",
      type: "quickPrompt",
      content: {
        heading: "Step 1: Basic Subject",
        description: "Start with just the subject:",
        promptText: "A coffee cup --v 6",
      },
    },
    {
      id: "section-6b",
      type: "quickPrompt",
      content: {
        heading: "Step 2: Add Environment",
        description: "Add where it is:",
        promptText: "A coffee cup on a wooden table in a cozy cafe --v 6",
      },
    },
    {
      id: "section-6c",
      type: "quickPrompt",
      content: {
        heading: "Step 3: Add Details",
        description: "Add specific details:",
        promptText:
          "A ceramic coffee cup with latte art on a rustic oak table in a cozy corner cafe --v 6",
      },
    },
    {
      id: "section-6d",
      type: "quickPrompt",
      content: {
        heading: "Step 4: Add Lighting",
        description: "Add atmosphere through light:",
        promptText:
          "A ceramic coffee cup with latte art on a rustic oak table in a cozy corner cafe, warm morning sunlight streaming through a window --v 6",
      },
    },
    {
      id: "section-6e",
      type: "quickPrompt",
      content: {
        heading: "Step 5: Add Style and Quality",
        description: "Add the final polish:",
        promptText:
          "A ceramic coffee cup with latte art on a rustic oak table in a cozy corner cafe, warm morning sunlight streaming through a window, lifestyle photography, Instagram aesthetic, cozy atmosphere, shallow depth of field --v 6",
      },
    },
    // ===========================================================================
    // SECTION 7: Reusable Templates
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Creating Reusable Templates",
        insights: [
          "Templates save time and ensure consistency",
          "Replace bracketed sections with your specific content",
          "Keep templates for styles you use frequently",
          "Refine templates over time based on results",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Template Examples
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Template: Portrait Photography",
        description: "Use this for professional-looking portraits:",
        promptText:
          "[Subject description], [pose/action], [setting/background], [lighting], professional portrait photography, [camera/lens details], [mood] --v 6",
      },
    },
    {
      id: "section-8b",
      type: "quickPrompt",
      content: {
        heading: "Template: Product Shot",
        description: "Use this for product-style images:",
        promptText:
          "[Product description] on [surface], [background color/texture], studio lighting, product photography, commercial quality, sharp focus, [angle] --v 6",
      },
    },
    {
      id: "section-8c",
      type: "quickPrompt",
      content: {
        heading: "Template: Landscape Scene",
        description: "Use this for environmental images:",
        promptText:
          "[Main subject] in [location], [time of day], [weather/atmosphere], [style] landscape photography, [mood], [quality terms] --v 6",
      },
    },
    {
      id: "section-8d",
      type: "quickPrompt",
      content: {
        heading: "Template: Fantasy Character",
        description: "Use this for character art:",
        promptText:
          "[Character type] with [distinctive features], wearing [clothing/armor], [pose/action], in [environment], [lighting/atmosphere], fantasy art, [art style], [quality terms] --v 6",
      },
    },
    // ===========================================================================
    // SECTION 9: Reverse Engineering
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Reverse-Engineering Images You Admire",
        paragraphs: [
          "When you see an image you love, train yourself to deconstruct it:",
          "",
          "**Ask yourself:**",
          "- What is the subject? How would I describe it specifically?",
          "- Where is it? What's in the background?",
          "- What style is this? Photography? Illustration? Painting?",
          "- What's the lighting like? Direction? Quality? Color?",
          "- What mood or emotion does it convey?",
          "",
          "Then try to recreate it with your own prompt. Compare results. Iterate. This is how you rapidly improve.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Documenting What Works
    // ===========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Documenting What Works",
        paragraphs: [
          "One of the most valuable habits you can develop is maintaining a personal reference library of your successful prompts. This collection becomes an increasingly powerful creative resource over time, allowing you to build on past successes rather than starting from scratch with each new project.",
          "",
          "Start by saving your best prompts in a dedicated document or note system. When a prompt produces exceptional results, capture not just the prompt itself but also the image it generated. This visual reference helps you remember exactly what each prompt achieved and makes it easier to adapt successful patterns to new subjects.",
          "",
          "As you iterate on prompts, document what you changed and how the results differed. This practice transforms random experimentation into systematic learning. You'll start to recognize patterns: which word changes had big impacts, which adjustments were subtle, and which modifications led you in unexpected but welcome directions. Over time, this documented history becomes a personalized textbook of what works for your style.",
          "",
          "Organize your library by category to make it practical for daily use. Group prompts by type: portraits, landscapes, products, abstract art, architectural renders, and so on. This organization means when you need to create a product shot, you can immediately reference your best product photography prompts rather than hunting through a disorganized collection.",
          "",
          "Always include the parameters you used alongside your prompts. The same words with different parameters can produce dramatically different results, and you'll want to remember whether that perfect image used --ar 16:9 or --ar 3:2, whether it was --v 6 or --niji 6, and what style settings were active. These technical details are easy to forget but essential for reproducing your successes.",
          "",
          "Finally, review your prompt library periodically. As your skills develop, you'll gain new insights that make your old prompts even better. You might notice patterns you missed before, discover combinations that work exceptionally well together, or find opportunities to streamline prompts that were unnecessarily complex. Your library is a living document that grows more valuable with each review.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Your Turn
    // ===========================================================================
    {
      id: "section-11",
      type: "text",
      content: {
        title: "Your Turn: Transform This Prompt",
        paragraphs: [
          "Take this weak prompt and make it powerful:",
          "",
          "**'A man reading a book'**",
          "",
          "Apply what you've learned:",
          "1. Add specific subject details",
          "2. Add environment",
          "3. Add style/medium",
          "4. Add lighting",
          "5. Add quality terms",
          "",
          "Then generate it and see your creation come to life!",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Chapter Summary
    // ===========================================================================
    {
      id: "section-12",
      type: "highlightCard",
      content: {
        heading: "Chapter 2 Complete: Key Takeaways",
        insights: [
          "Great prompts follow a formula: Subject + Environment + Style + Lighting + Quality",
          "Specific vocabulary beats generic terms every time",
          "Order matters—put the most important elements first",
          "A/B testing helps you understand how words affect results",
          "Templates save time and ensure consistency",
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
        task: "Create reusable prompt templates for consistent results",
        feature: "--ar (aspect ratio) and template structure",
        tip: "Templates save time and ensure consistency—keep them for styles you use frequently",
      },
    },
    // ===========================================================================
    // SECTION 13: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create a Prompt Template",
        purpose:
          "Build a reusable prompt template for your most common image type that you can use for future projects.",
        instructions: [
          "Think about what type of images you'll create most often (portraits, landscapes, products, etc.)",
          "Create a template with bracketed placeholders for each variable element",
          "Test your template by filling in the brackets with real values",
          "Generate an image using your filled template and evaluate the results",
        ],
        deliverable:
          "A reusable prompt template with at least 4 placeholder variables, plus one test image generated from it",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "/imagine prompt: [SUBJECT] in [SETTING], [STYLE DETAILS], [LIGHTING], [MOOD] --ar [ASPECT] --v 6",
        successCriteria: [
          "Your template has at least 4 distinct placeholder variables in brackets",
          "You tested the template by filling in all variables",
          "The generated image successfully reflected all your filled-in values",
          "You saved your template in a document or note for future use",
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
        title: "Prompt Engineering Mastered!",
        description:
          "You've completed the Prompt Engineering chapter. You now understand how to construct powerful prompts, have a rich vocabulary at your disposal, and have practiced transforming weak ideas into vivid descriptions. In the next chapters, you'll learn advanced techniques like parameters, image blending, and professional workflows.",
        xpReward: 100,
        buttonText: "Complete Chapter 2",
      },
    },
  ],
};
