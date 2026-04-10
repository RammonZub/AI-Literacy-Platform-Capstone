/**
 * Lesson 9.4: Your First Image: The Magic Moment
 *
 * CHAPTER: 1 - Getting Started
 * LESSON: 4 of 5 - Creating Your First Image
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Guide learners through creating their first Midjourney image
 *
 * KEY RESPONSIBILITIES:
 * - Explain the /imagine command
 * - Show how to write a first prompt
 * - Explain the 4-image grid and options
 * - Cover upscaling and variations
 * - Celebrate the first creation
 */

import type { Lesson } from "@/types/content";

export const lesson_9_4: Lesson = {
  id: "lesson-9-4",
  chapterId: "ch9-1-essentials",
  moduleId: "08-tools-midjourney",
  title: "Your First Image: The Magic Moment",
  description: "Create your first Midjourney image and understand the results",
  order: 4,
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
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-4-cover.webp",
        imageAlt: "Magical creative moment representing the birth of AI-generated art",
        title: "Your First Image: The Magic Moment",
        subtitle: "This is the moment you've been waiting for—create your first AI-generated image",
      },
    },
    // ===========================================================================
    // SECTION 1: The /imagine Command
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The /imagine Command",
        paragraphs: [
          "Everything in Midjourney starts with the /imagine command. This tells the AI you want to generate an image.",
          "",
          "In any generation channel on Discord, type:",
          "",
          "/imagine",
          "",
          "Then wait for a popup to appear. This popup helps you construct your prompt properly. Type your description in the 'prompt' field that appears.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Writing Your First Prompt
    // ===========================================================================
    {
      id: "section-2",
      type: "quickPrompt",
      content: {
        heading: "Your First Prompt",
        description:
          "Let's start with something simple but beautiful. Type this exactly in Discord:",
        promptText:
          "A serene Japanese garden with cherry blossoms, koi pond, wooden bridge, morning mist, peaceful atmosphere --v 6",
      },
    },
    // ===========================================================================
    // SECTION 3: What Happens Next
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "What Happens When You Submit",
        paragraphs: [
          "After you press Enter, Midjourney begins processing your request. This typically takes 30 to 60 seconds, during which you'll see your image gradually appear on screen. The generation starts as a blurry, abstract form and progressively refines into a detailed image, giving you a fascinating glimpse into how the AI constructs visual information from your textual description.",
          "",
          "When generation completes, you'll receive a grid of four images, each representing a different interpretation of your prompt. These variations allow you to see multiple approaches Midjourney took with your description, some may be closer to your vision while others might surprise you with unexpected but appealing directions. Below this grid, you'll find a row of buttons labeled U1 through U4 and V1 through V4, which give you control over what happens next with each image.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Understanding the Grid
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Understanding Your 4-Image Grid",
        paragraphs: [
          "Midjourney always generates four images at once. They're numbered 1-4, reading left to right, top to bottom:",
          "",
          "**Image 1** = Top Left  |  **Image 2** = Top Right",
          "**Image 3** = Bottom Left  |  **Image 4** = Bottom Right",
          "",
          "Each image interprets your prompt differently. One might be exactly what you wanted. Another might surprise you with something better.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-4-inline-1.webp",
        imageAlt: "Grid layout showing four images",
      },
    },
    // ===========================================================================
    // SECTION 5: Upscaling (U1-U4)
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "The U Buttons: Upscaling",
        insights: [
          "U1 = Upscale image 1 (top left)",
          "U2 = Upscale image 2 (top right)",
          "U3 = Upscale image 3 (bottom left)",
          "U4 = Upscale image 4 (bottom right)",
          "Upscaling separates your chosen image from the grid and increases its resolution",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: When to Upscale
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "When to Upscale",
        paragraphs: [
          "Click a U button when you find an image you like. This does two things:",
          "",
          "1. **Separates the image**: Your chosen image appears alone, without the other three",
          "",
          "2. **Increases resolution**: The image becomes larger and more detailed",
          "",
          "After upscaling, you'll see new options for making variations, zooming out, or downloading the final image.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Variations (V1-V4)
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "The V Buttons: Variations",
        insights: [
          "V1-V4 = Create four NEW variations based on that specific image",
          "Use V when you like an image but want to see different takes on it",
          "Variations keep the same general style and composition but change details",
          "This is how you refine an image toward your vision",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Vary Strong vs Vary Subtle
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Vary (Strong) vs Vary (Subtle)",
        paragraphs: [
          "After upscaling an image, you'll gain access to additional variation options that give you more precise control over how your image evolves. Understanding the difference between these options will significantly improve your ability to refine your creations.",
          "",
          "Vary (Strong) creates significantly different interpretations of your image while maintaining the core concept. When you select this option, Midjourney takes more creative liberties, potentially changing lighting, composition details, color mood, and stylistic elements. This is the choice when you want to explore different directions, when your current image feels close but not quite right in a fundamental way, or when you're curious what other possibilities exist within your prompt's theme.",
          "",
          "Vary (Subtle) takes a gentler approach, creating minor tweaks and refinements to your existing image. The changes here are more like gentle adjustments rather than creative reinterpretations. Colors might shift slightly, small details may be refined, but the overall composition and feeling remains consistent. Choose this option when you're almost there but need small adjustments, when you love the image but want to see if slight variations might improve it, or when you're in the final stages of refinement.",
          "",
          "Vary (Region) offers a third, more advanced option that allows you to select a specific area of your image to modify while keeping everything else unchanged. This powerful technique enables targeted edits without affecting parts of the image you're happy with. We'll explore this advanced technique in detail in later chapters.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Saving Your Creation
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Saving Your First Creation",
        paragraphs: [
          "To save your image:",
          "",
          "1. Click on the upscaled image to open it full-size",
          "2. Right-click and select 'Save image as...' (or tap and hold on mobile)",
          "3. Choose where to save it on your device",
          "",
          "Your images are also saved in your Midjourney gallery if you have a subscription, but downloading ensures you always have a copy.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: What If You Don't Like the Results?
    // ===========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "When Results Disappoint",
        paragraphs: [
          "Not every prompt produces magic on the first try. This is completely normal and even experienced users regularly generate images that don't match their expectations. The key is understanding your options when results fall short of your vision.",
          "",
          "Your first option is simply to try again. Resubmitting the same prompt will produce different results each time because Midjourney introduces randomness into its generation process. What didn't work on the first attempt might yield something wonderful on the second or third try. This variability is actually a feature, giving you multiple chances to discover great results from a single prompt.",
          "",
          "If one image in your grid is close to what you wanted but not quite right, use the V (variation) button beneath that specific image. This tells Midjourney to create four new images that explore similar directions, refining the concept while maintaining the elements you liked. This iterative approach is often more effective than starting from scratch.",
          "",
          "When the results miss the mark entirely, it's time to adjust your prompt. Adding more specific details, changing key words, or being more descriptive about style and composition can dramatically shift your results. We'll dive deep into prompt crafting techniques in Chapter 2. Remember that iteration is fundamental to the creative process with AI tools. Even professional artists and designers rarely nail their vision on the first attempt. Each generation teaches you something about how Midjourney interprets language, building your intuition for future prompts.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: More Practice Prompts
    // ===========================================================================
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Practice Prompt 2",
        description: "Try this prompt to see a different style:",
        promptText:
          "A futuristic city skyline at night, neon lights reflecting on wet streets, cyberpunk aesthetic, cinematic lighting --v 6",
      },
    },
    {
      id: "section-11b",
      type: "quickPrompt",
      content: {
        heading: "Practice Prompt 3",
        description: "Now try something artistic:",
        promptText:
          "An oil painting of a woman reading a book by window light, warm golden hour glow, impressionist style --v 6",
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
        task: "Generate and save your first AI image",
        feature: "U1-U4 (upscale) and V1-V4 (variation) buttons",
        tip: "U buttons separate and enlarge your chosen image; V buttons create new variations of it",
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create and Save Your First Image",
        purpose:
          "This is the milestone moment - your first real AI image creation that you'll save and keep.",
        instructions: [
          "Go to a Midjourney generation channel on Discord",
          "Use the /imagine command with a prompt that excites you",
          "Wait for your 4-image grid to appear",
          "Select your favorite image and click the U button (U1, U2, U3, or U4) to upscale it",
          "Click on the upscaled image, then save it to your device",
        ],
        deliverable: "Your first saved AI-generated image",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "/imagine prompt: A serene Japanese garden with cherry blossoms, koi pond, wooden bridge, morning mist, peaceful atmosphere --v 6",
        successCriteria: [
          "You successfully generated a 4-image grid",
          "You upscaled at least one image from the grid",
          "You saved the upscaled image to your device",
          "You can find the saved image on your computer or phone",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-13",
      type: "completion",
      content: {
        title: "You Did It!",
        description:
          "You just created AI-generated art. That's a milestone worth celebrating. You now understand prompts, grids, upscaling, and variations. In the next lesson, we'll cover subscription plans so you can continue creating without limits.",
        xpReward: 100,
        buttonText: "Complete First Image",
      },
    },
  ],
};
