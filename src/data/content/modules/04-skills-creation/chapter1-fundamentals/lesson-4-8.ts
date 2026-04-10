/**
 * Lesson 4.8: Image Prompt Writing
 *
 * PURPOSE: Learn to write effective prompts for AI image generation
 *
 * KEY CONCEPTS:
 * - Image prompt structure
 * - Style and aesthetic control
 * - Brand-consistent visuals
 * - Iterative refinement
 * - Ethical considerations
 *
 * - Original: 18 slides → Converted to 15 sections
 * - Added 2 quizzes (after sections 5 and 10)
 * - Added 1 checkpoint (after section 13)
 * - XP: 125 (base) × 0.8 (10min) × 1.0 (intermediate) + 20 (quizzes) + 5 (checkpoint) = 125 XP
 *
 * @created 2025-02-03
 * @modified 2026-02-06 - Converted to article format with quizzes and checkpoint
 * @modified 2026-02-23 - Added heroImage, lessonCategory, inline actionableTask, highlightCard, textWithImage, quickPrompt sections
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_8: Lesson = {
  id: "lesson-4-8",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  title: "Image Prompt Writing",
  description:
    "Master the art of writing prompts for AI image generators to create on-brand visuals for your content.",
  order: 8,
  estimatedMinutes: 10,
  xpReward: 125,
  format: "article",
  lessonCategory: "tutorial",
  coverImage: "/images/courses/lessons/modules/artist-palette-and-creative-tools.webp",
  coverTitle: "Image Prompt Writing",

  sections: [
    // ==========================================================================
    // HERO IMAGE SECTION (at start)
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-8-cover.webp",
        imageAlt: "AI image generation and prompt writing",
        title: "Image Prompt Writing",
        subtitle: "Create stunning visuals with the right prompts",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Visuals Matter",
        paragraphs: [
          "Content with images gets 94% more views than text-only content.",
          "It generates 2.3x more engagement on social media.",
          "The brain processes visuals 60,000x faster than text.",
          "But custom imagery is expensive.",
          "AI changes that.",
          "For the cost of a prompt, you get unlimited unique visuals.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Visual Impact Stats
    // ==========================================================================
    {
      id: "hc1-visual-stats",
      type: "highlightCard",
      content: {
        heading: "The Power of Visual Content",
        insights: [
          "94% more views for content with images vs text-only",
          "2.3x more engagement on social media posts with visuals",
          "60,000x faster brain processing for images vs text",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Anatomy of an Image Prompt
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Anatomy of an Image Prompt",
        paragraphs: [
          "Effective image prompts include four key elements that work together to guide AI toward your vision. Understanding each element helps you construct prompts that produce consistent, high-quality results.",
          'The subject defines what the image depicts. Be specific: instead of "a person," specify "a professional woman in her 30s." The more precise your subject description, the closer AI gets to your mental image on the first attempt.',
          "The style determines the aesthetic approach. Are you looking for photorealistic, illustration, minimal, corporate, or artistic? Each style produces dramatically different results from the same subject. Without style guidance, AI defaults to a generic look.",
          "Composition controls how elements are arranged. Close-up versus wide angle, centered versus off-center, single subject versus scene—these choices affect the emotional impact and practical usability of the image.",
          "Details fill in the specifics: lighting conditions, color palette, mood and atmosphere, and technical specifications like camera lens or resolution. These refinements transform adequate images into exceptional ones.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Example Prompt
    // ==========================================================================
    {
      id: "section-3",
      type: "quickPrompt",
      content: {
        heading: "Complete Image Prompt Example",
        description: "See how all four elements come together in a professional prompt:",
        promptText:
          "Professional product shot of artisan coffee bag on rustic wooden table, warm morning light streaming from window, steam rising from cup nearby, depth of field, shallow focus, 85mm lens, rich brown tones, cozy café aesthetic, commercial photography style, high resolution, 4k",
        placeholders: ["Subject", "Setting", "Lighting", "Style", "Technical specs"],
      },
    },

    // ==========================================================================
    // SECTION 4: Vague vs. Specific Prompts
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Vague vs. Specific Prompts",
        paragraphs: [
          "The difference between vague and specific prompts is dramatic. This comparison shows why investing time in detailed prompts pays off in better results and fewer wasted attempts.",
          'A vague prompt like "A person working on a laptop" produces generic results. You get a random person in a random setting that may not match your brand or vision. You\'ll need many attempts to get something usable, wasting time and credits on trial and error.',
          'A specific prompt transforms the outcome: "Professional woman in her 30s working on laptop in modern home office, morning light through window, plants in background, wearing casual professional attire, focused expression, shallow depth of field, Canon 5D, 85mm, warm color palette." This produces results that match your vision exactly with a brand-consistent aesthetic. The first attempt is often usable, and when you need adjustments, the iteration process is straightforward because you started with a clear foundation.',
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of image prompt elements
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of image prompt elements.",
        quiz: {
          question: "What are the four key elements of an effective image prompt?",
          options: [
            "Subject, Style, Composition, Details",
            "Color, Size, Format, Resolution",
            "Title, Description, Tags, Category",
            "Lighting, Camera, Lens, tripod",
          ],
          correctAnswer: 0,
        },
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual Break
    // ==========================================================================
    {
      id: "twi-brand-visuals",
      type: "textWithImage",
      content: {
        title: "Creating Brand-Consistent Visuals",
        paragraphs: [
          "Follow this workflow to build your visual brand.",
          "First, define your style by creating a prompt template with your brand keywords. Test generate 10-20 images using your template. Select winners that best represent your brand. Refine the template by adding or removing keywords based on what worked.",
          "Save your template to reuse for consistent visuals across all content.",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-8-inline-1.webp",
        imageAlt: "Brand-consistent visual style examples",
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Brand Visual Template
    // ==========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Brand Visual Template Example",
        description: "Customize this template for your brand visual style:",
        promptText:
          "[SUBJECT], minimal flat vector illustration style, clean lines, simple shapes, [BRAND COLOR] accent color on white background, corporate Memphis style, professional yet friendly, scalable vector graphics, modern tech company aesthetic",
        placeholders: ["SUBJECT", "BRAND COLOR", "Style preference"],
      },
    },

    // ==========================================================================
    // SECTION 8: Iterative Prompt Refinement
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Iterative Prompt Refinement",
        paragraphs: [
          "Like text prompts, image prompts benefit from iteration. The journey from vague request to perfect image typically takes several refinements.",
          'Your first attempt might be something like "Generate an image for a blog post about time management." The result will likely be a generic clock and calendar image—technically relevant but cliché and uninteresting. This is the AI default when you don\'t provide specific direction.',
          'Your second attempt adds more context: "Too cliché. Try something more metaphorical. Maybe a person juggling multiple tasks but looking calm and in control." Now you get an illustration of a person juggling clocks—better, but still not quite right. The metaphor is there but the execution feels cartoonish.',
          'Your third attempt nails it: "Professional illustration style, business person in modern office, multiple tasks visible on screens but person looks organized and calm, warm lighting, sense of control and balance, not chaos." This produces a refined image that hits the brief exactly. The difference is specificity—each element of the prompt guides AI toward your vision rather than letting it default to generic choices.',
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Technical Keywords
    // ==========================================================================
    {
      id: "hc2-technical-keywords",
      type: "highlightCard",
      content: {
        heading: "Technical Keywords for Quality",
        insights: [
          'Lighting: "golden hour," "soft natural light," "studio lighting," "dramatic lighting"',
          'Camera: "shot on Canon EOS R5," "85mm lens," "f/1.8 aperture," "shallow depth of field"',
          'Resolution: "8k," "ultra detailed," "high resolution," "sharp focus"',
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Test understanding of technical keywords
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice using technical keywords.",
        quiz: {
          question: "Which technical keywords would you add for a professional portrait photo?",
          options: [
            "cartoon style, bright colors, simple shapes",
            "shot on Canon EOS R5, 85mm lens, f/1.8 aperture, shallow depth of field",
            "dark, moody, horror style, low resolution",
            "abstract, geometric, no specific camera settings",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 10: Setting the Right Mood
    // ==========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Setting the Right Mood",
        paragraphs: [
          "Mood keywords dramatically change the feel of your images. Understanding how to evoke specific emotions through word choice gives you precise control over your visual brand.",
          "For a professional mood, use keywords like clean, minimal, corporate, business, polished, and sophisticated. These terms produce images that feel appropriate for B2B contexts, financial services, or any situation requiring credibility and authority.",
          "For a friendly mood, try warm, inviting, approachable, casual, bright, and cheerful. These keywords create images that feel welcoming and accessible, perfect for consumer brands, community-focused content, or anything targeting a broad audience.",
          "For an innovative mood, incorporate futuristic, cutting edge, sleek, modern, tech-forward, and bold. These terms generate images that feel forward-thinking and dynamic, ideal for technology companies, startups, or content about new ideas and trends.",
          "For a trustworthy mood, use solid, stable, grounded, reliable, established, and traditional. These keywords produce images that feel dependable and secure, appropriate for financial institutions, healthcare, or any context where trust is paramount. The key is choosing mood keywords that match your brand personality and using them consistently across all your visual content.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual Break
    // ==========================================================================
    {
      id: "twi-pitfalls",
      type: "textWithImage",
      content: {
        title: "Image Prompt Pitfalls",
        paragraphs: [
          "Avoid these common mistakes when writing image prompts.",
          'Being too vague like "Office worker" will get you generic results. Get specific about role, setting, style, and action. Overloading with too many conflicting instructions confuses AI. Always specify the aesthetic style or AI will default to generic.',
          "Never ignore lighting—it makes or breaks images. And always specify your brand colors for consistency.",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-8-inline-1.webp",
        imageAlt: "Common image prompt mistakes and solutions",
      },
    },

    // ==========================================================================
    // CHECKPOINT: Final knowledge check
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the most important principle for writing effective image prompts?",
        options: [
          "Keep prompts as short as possible",
          "Be specific about subject, style, composition, and details",
          "Use as many technical keywords as possible",
          "Let the AI decide the style and mood",
        ],
        correctAnswer: 1,
        hint: "Think about the four key elements of an effective image prompt.",
      },
    },

    // ==========================================================================
    // SECTION 12: Complete Image Creation Workflow
    // ==========================================================================
    {
      id: "section-12",
      type: "text",
      content: {
        title: "Complete Image Creation Workflow",
        paragraphs: [
          "Following a consistent workflow for every image you create ensures quality and efficiency. This five-step process takes you from initial need to final polished asset.",
          "Start by defining your need. What image do you need and what purpose will it serve? A blog header has different requirements than a social media post or a presentation slide. Understanding the context helps you make better decisions about composition and style.",
          "Next, write your prompt using your brand template with specific details added for this particular image. Don't start from scratch each time—use your established template and customize the subject and situation.",
          "Then generate options by creating 3-5 variations to choose from. AI image generation has inherent randomness, so multiple attempts give you choices. The first result might be good, but the third or fourth might be perfect.",
          "Select the best option by picking the strongest image for your specific needs. Consider composition, mood, brand alignment, and practical factors like text overlay space. Finally, add any final polish by adding text overlays or making adjustments in design tools if needed. AI handles the image creation; you handle the refinement and integration into your content.",
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
        tool: "midjourney",
        action: "Generate custom brand visuals",
        task: "Create on-brand images for content using detailed prompts",
        feature: "High-quality image generation with precise style control",
        tip: "Save your best prompts as templates to maintain visual consistency across all content",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK SECTION (inline at end)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your Brand Visual Template",
        purpose:
          "Build a reusable image prompt template that ensures brand consistency across all your AI-generated visuals.",
        instructions: [
          "Choose a consistent style for your brand (photography, illustration, 3D, etc.)",
          "Define your brand colors and 3-5 aesthetic keywords",
          "Add technical specs (lighting, camera, resolution) appropriate to your style",
          "Create a base template prompt with all elements",
          "Test by generating 3-5 images and refine based on results",
        ],
        deliverable:
          "Your template prompt and a sample image it generated. Explain how you plan to use this for your content.",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "[SUBJECT], [style description], [color palette], [lighting], [composition], [technical specs], [mood/atmosphere]\n\nExample:\n[Your product/service], professional photography style, [brand color] accents with neutral background, soft natural lighting from side, centered composition with negative space, shot on Canon 5D, 50mm lens, high resolution, [your mood keywords]",
        successCriteria: [
          "Template includes all four key elements: subject, style, composition, details",
          "Brand colors are clearly specified",
          "Generated images are consistent in style across multiple subjects",
          "Template is specific enough to produce usable first attempts",
        ],
      },
    },
  ] as LessonSection[],
};
