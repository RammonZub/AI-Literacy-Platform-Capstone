/**
 * 06-Tools-Claude Course Image Manifest
 *
 * PURPOSE: Define image keywords for Module 6: Claude Mastery (metadata for lesson imagery).
 *
 *
 * IMAGE THEME:
 * - Hero images: Orange/terracotta gradient theme (Anthropic brand colors)
 * - Inline images: Content-based (PHOTOGRAPHY for tool tutorials, ILLUSTRATION for features,
 *   ABSTRACT for concepts)
 */

import type { CourseImageManifest } from "@/types/course-images";

export const MODULE06_IMAGE_MANIFEST: CourseImageManifest = {
  courseSlug: "06-tools-claude",
  createdAt: new Date().toISOString(),
  lessons: [
    // ========================================================================
    // CHAPTER 1: CLAUDE ESSENTIALS (Lessons 6.1-6.5)
    // ========================================================================

    {
      lessonId: "lesson-6-1",
      moduleId: "06-tools-claude",
      chapterId: "ch6-1-essentials",

      images: [
        {
          position: "cover",
          query: "abstract gradient orange terracotta warm bright minimal",
          alt: "What is Claude? - Constitutional AI assistant",
        },
        {
          position: "inline-1",
          query: "abstract neural network ai technology visualization orange warm",
          alt: "Claude's constitutional AI approach",
        },
        {
          position: "inline-2",
          query: "ai assistant conversation laptop screen warm bright",
          alt: "Claude interface and capabilities",
        },
      ],
    },

    {
      lessonId: "lesson-6-2",
      moduleId: "06-tools-claude",
      chapterId: "ch6-1-essentials",

      images: [
        {
          position: "cover",
          query: "abstract gradient coral peach warm bright minimal",
          alt: "Getting Started with Claude",
        },
        {
          position: "inline-1",
          query: "cloud document storage analysis clean interface bright",
          alt: "Claude web interface setup",
        },
        {
          position: "inline-2",
          query: "3D abstract account creation digital interface colorful modern",
          alt: "Claude account creation process",
        },
      ],
    },

    {
      lessonId: "lesson-6-3",
      moduleId: "06-tools-claude",
      chapterId: "ch6-1-essentials",

      images: [
        {
          position: "cover",
          query: "abstract gradient orange amber warm bright minimal",
          alt: "Effective Conversations with Claude",
        },
        {
          position: "inline-1",
          query: "3D abstract conversation dialogue bubbles colorful modern",
          alt: "Conversational context and dialogue",
        },
        {
          position: "inline-2",
          query: "abstract ideas exchange collaboration gradient modern",
          alt: "The power of dialogue and iteration",
        },
      ],
    },

    {
      lessonId: "lesson-6-4",
      moduleId: "06-tools-claude",
      chapterId: "ch6-1-essentials",

      images: [
        {
          position: "cover",
          query: "abstract gradient burnt orange terracotta bright minimal",
          alt: "Claude's Transparency and Limitations",
        },
        {
          position: "inline-1",
          query: "complex digital network advanced ai technology warm",
          alt: "Understanding AI boundaries and capabilities",
        },
        {
          position: "inline-2",
          query: "organized folders productivity workspace focused bright",
          alt: "Working within limitations effectively",
        },
      ],
    },

    {
      lessonId: "lesson-6-5",
      moduleId: "06-tools-claude",
      chapterId: "ch6-1-essentials",

      images: [
        {
          position: "cover",
          query: "abstract gradient rust orange warm bright minimal",
          alt: "Your First Claude Workflow",
        },
        {
          position: "inline-1",
          query: "3D abstract planning organization workflow colorful modern",
          alt: "Planning and project setup",
        },
        {
          position: "inline-2",
          query: "abstract project management optimization gradient modern",
          alt: "Iterative workflow and collaboration",
        },
      ],
    },

    // ========================================================================
    // CHAPTER 2: PROFESSIONAL APPLICATIONS (Lessons 6.6-6.10)
    // ========================================================================

    {
      lessonId: "lesson-6-6",
      moduleId: "06-tools-claude",
      chapterId: "ch6-2-applications",

      images: [
        {
          position: "cover",
          query: "abstract gradient clay orange warm bright minimal",
          alt: "Writing and Content Creation",
        },
        {
          position: "inline-1",
          query: "writing keyboard technology communication workspace bright",
          alt: "Professional writing assistance",
        },
        {
          position: "inline-2",
          query: "writing prompts creative content development bright warm",
          alt: "Tone adaptation and content refinement",
        },
      ],
    },

    {
      lessonId: "lesson-6-7",
      moduleId: "06-tools-claude",
      chapterId: "ch6-2-applications",

      images: [
        {
          position: "cover",
          query: "abstract gradient sienna orange warm bright minimal",
          alt: "Analysis and Research Assistance",
        },
        {
          position: "inline-1",
          query: "research analysis data synthesis documents bright",
          alt: "Research workflow and synthesis",
        },
        {
          position: "inline-2",
          query: "complex data visualization business intelligence warm",
          alt: "Data analysis and interpretation",
        },
      ],
    },

    {
      lessonId: "lesson-6-8",
      moduleId: "06-tools-claude",
      chapterId: "ch6-2-applications",

      images: [
        {
          position: "cover",
          query: "abstract gradient persimmon orange warm bright minimal",
          alt: "Problem-Solving and Brainstorming",
        },
        {
          position: "inline-1",
          query: "3D abstract strategic planning layers thinking colorful modern",
          alt: "Structured problem-solving approaches",
        },
        {
          position: "inline-2",
          query: "abstract creative thinking ideas colorful gradient modern",
          alt: "Collaborative brainstorming techniques",
        },
      ],
    },

    {
      lessonId: "lesson-6-9",
      moduleId: "06-tools-claude",
      chapterId: "ch6-2-applications",

      images: [
        {
          position: "cover",
          query: "abstract gradient ochre orange warm bright minimal",
          alt: "Learning and Skill Development",
        },
        {
          position: "inline-1",
          query: "learning education books knowledge growth bright",
          alt: "AI as personalized tutor",
        },
        {
          position: "inline-2",
          query: "skill development continuous learning modern warm",
          alt: "Practical learning patterns",
        },
      ],
    },

    {
      lessonId: "lesson-6-10",
      moduleId: "06-tools-claude",
      chapterId: "ch6-2-applications",

      images: [
        {
          position: "cover",
          query: "abstract gradient copper orange warm bright minimal",
          alt: "Professional Workflow Integration",
        },
        {
          position: "inline-1",
          query: "3D abstract workflow integration connections colorful modern",
          alt: "End-to-end workflow integration",
        },
        {
          position: "inline-2",
          query: "abstract productivity system organization gradient modern",
          alt: "Integrated productivity workflows",
        },
      ],
    },

    // ========================================================================
    // CHAPTER 3: ADVANCED FEATURES (Lessons 6.11-6.15)
    // ========================================================================

    {
      lessonId: "lesson-6-11",
      moduleId: "06-tools-claude",
      chapterId: "ch6-3-advanced",

      images: [
        {
          position: "cover",
          query: "abstract gradient tangerine orange warm bright minimal",
          alt: "Artifacts and Long-Form Content",
        },
        {
          position: "inline-1",
          query: "creative design workspace code content creation bright",
          alt: "Artifacts feature interface",
        },
        {
          position: "inline-2",
          query: "software development coding process screen bright",
          alt: "Document and code iteration",
        },
      ],
    },

    {
      lessonId: "lesson-6-12",
      moduleId: "06-tools-claude",
      chapterId: "ch6-3-advanced",

      images: [
        {
          position: "cover",
          query: "abstract gradient apricot orange warm bright minimal",
          alt: "Advanced Prompting Techniques",
        },
        {
          position: "inline-1",
          query: "brain thinking creative thought process neural warm",
          alt: "Advanced reasoning patterns",
        },
        {
          position: "inline-2",
          query: "brain memory thinking neural network bright",
          alt: "Multi-turn conversation strategies",
        },
      ],
    },

    {
      lessonId: "lesson-6-13",
      moduleId: "06-tools-claude",
      chapterId: "ch6-3-advanced",

      images: [
        {
          position: "cover",
          query: "abstract gradient coral salmon warm bright minimal",
          alt: "API and Integration Basics",
        },
        {
          position: "inline-1",
          query: "parallel processing server racks connection bright",
          alt: "API connections and integration",
        },
        {
          position: "inline-2",
          query: "growing business analytics scaling strategy bright",
          alt: "Getting started with Claude API",
        },
      ],
    },

    {
      lessonId: "lesson-6-14",
      moduleId: "06-tools-claude",
      chapterId: "ch6-3-advanced",

      images: [
        {
          position: "cover",
          query: "abstract gradient pumpkin orange warm bright minimal",
          alt: "Multi-Turn Conversations and Context",
        },
        {
          position: "inline-1",
          query: "3D abstract conversation context continuity colorful modern",
          alt: "Managing long conversations",
        },
        {
          position: "inline-2",
          query: "abstract context refresh refocusing gradient modern",
          alt: "Context refresh and refocusing",
        },
      ],
    },

    {
      lessonId: "lesson-6-15",
      moduleId: "06-tools-claude",
      chapterId: "ch6-3-advanced",

      images: [
        {
          position: "cover",
          query: "abstract gradient terracotta brown warm bright minimal",
          alt: "Responsible AI Use in Professional Settings",
        },
        {
          position: "inline-1",
          query: "3D abstract ethical guidelines principles colorful modern",
          alt: "Ethical AI guidelines",
        },
        {
          position: "inline-2",
          query: "abstract verification best practices gradient modern",
          alt: "Verification and best practices",
        },
      ],
    },

    // ========================================================================
    // CHAPTER 4: PROJECTS & KNOWLEDGE BASES (Lessons 6.16-6.20)
    // ========================================================================

    {
      lessonId: "lesson-6-16",
      moduleId: "06-tools-claude",
      chapterId: "ch6-4-projects",

      images: [
        {
          position: "cover",
          query: "abstract gradient orange coral warm bright minimal",
          alt: "Introduction to Claude Projects",
        },
        {
          position: "inline-1",
          query: "3D abstract workspace planning organization colorful modern",
          alt: "Project organization system",
        },
        {
          position: "inline-2",
          query: "abstract project folders management colorful gradient modern",
          alt: "Projects vs regular chats comparison",
        },
      ],
    },

    {
      lessonId: "lesson-6-17",
      moduleId: "06-tools-claude",
      chapterId: "ch6-4-projects",

      images: [
        {
          position: "cover",
          query: "abstract gradient ginger orange warm bright minimal",
          alt: "Creating Your First Project",
        },
        {
          position: "inline-1",
          query: "creating setting up new projects workspace bright",
          alt: "Project setup step by step",
        },
        {
          position: "inline-2",
          query: "custom instructions configuration settings bright",
          alt: "Custom instructions and knowledge files",
        },
      ],
    },

    {
      lessonId: "lesson-6-18",
      moduleId: "06-tools-claude",
      chapterId: "ch6-4-projects",

      images: [
        {
          position: "cover",
          query: "abstract gradient cayenne orange warm bright minimal",
          alt: "Building Knowledge Bases",
        },
        {
          position: "inline-1",
          query: "deep thinking complex reasoning visualization bright",
          alt: "What to upload and why",
        },
        {
          position: "inline-2",
          query: "document library organized knowledge base bright",
          alt: "Knowledge base organization",
        },
      ],
    },

    {
      lessonId: "lesson-6-19",
      moduleId: "06-tools-claude",
      chapterId: "ch6-4-projects",

      images: [
        {
          position: "cover",
          query: "abstract gradient paprika orange warm bright minimal",
          alt: "Project Workflows for Professionals",
        },
        {
          position: "inline-1",
          query: "3D abstract client project setup workflow colorful modern",
          alt: "Client project setup workflow",
        },
        {
          position: "inline-2",
          query: "abstract research content workflow gradient modern",
          alt: "Research and content workflows",
        },
      ],
    },

    {
      lessonId: "lesson-6-20",
      moduleId: "06-tools-claude",
      chapterId: "ch6-4-projects",

      images: [
        {
          position: "cover",
          query: "abstract gradient rust terracotta warm bright minimal",
          alt: "Advanced Project Techniques",
        },
        {
          position: "inline-1",
          query: "advanced project management optimization bright",
          alt: "Cross-project insights",
        },
        {
          position: "inline-2",
          query: "project template documentation reusable bright",
          alt: "Templates and maintenance",
        },
      ],
    },

    // ========================================================================
    // CHAPTER 5: ADVANCED FEATURES DEEP DIVE (Lessons 6.21-6.24)
    // ========================================================================

    {
      lessonId: "lesson-6-21",
      moduleId: "06-tools-claude",
      chapterId: "ch6-5-advanced",

      images: [
        {
          position: "cover",
          query: "abstract gradient burnt sienna orange warm bright minimal",
          alt: "Extended Thinking & Deep Reasoning",
        },
        {
          position: "inline-1",
          query: "deep thinking complex reasoning visualization bright",
          alt: "Extended thinking concept",
        },
        {
          position: "inline-2",
          query: "strategic planning workspace organized layers bright",
          alt: "Following Claude reasoning chain",
        },
      ],
    },

    {
      lessonId: "lesson-6-22",
      moduleId: "06-tools-claude",
      chapterId: "ch6-5-advanced",

      images: [
        {
          position: "cover",
          query: "abstract gradient caramel orange warm bright minimal",
          alt: "Artifacts Mastery",
        },
        {
          position: "inline-1",
          query: "advanced content creation document management bright",
          alt: "Iterative refinement workflow",
        },
        {
          position: "inline-2",
          query: "3D abstract document creation management colorful modern",
          alt: "Multi-artifact project strategies",
        },
      ],
    },

    {
      lessonId: "lesson-6-23",
      moduleId: "06-tools-claude",
      chapterId: "ch6-5-advanced",

      images: [
        {
          position: "cover",
          query: "abstract gradient chestnut orange warm bright minimal",
          alt: "Claude for Code",
        },
        {
          position: "inline-1",
          query: "code development programming workspace bright",
          alt: "Code generation capabilities",
        },
        {
          position: "inline-2",
          query: "software development coding process bright",
          alt: "Development project workflows",
        },
      ],
    },

    {
      lessonId: "lesson-6-24",
      moduleId: "06-tools-claude",
      chapterId: "ch6-5-advanced",

      images: [
        {
          position: "cover",
          query: "abstract gradient mahogany orange warm bright minimal",
          alt: "Claude Chrome Extension",
        },
        {
          position: "inline-1",
          query: "browser extension web browsing productivity bright",
          alt: "Chrome extension interface",
        },
        {
          position: "inline-2",
          query: "fast workflow automation quick processing bright",
          alt: "Writing assistance anywhere",
        },
      ],
    },

    // ========================================================================
    // CHAPTER 6: INTEGRATIONS & TEAM FEATURES (Lessons 6.25-6.30)
    // ========================================================================

    {
      lessonId: "lesson-6-25",
      moduleId: "06-tools-claude",
      chapterId: "ch6-6-integrations",

      images: [
        {
          position: "cover",
          query: "abstract gradient wine orange warm bright minimal",
          alt: "Claude Integrations & Automations",
        },
        {
          position: "inline-1",
          query: "complex data visualization multiple connections bright",
          alt: "Integration landscape",
        },
        {
          position: "inline-2",
          query: "growing business analytics scaling strategy bright",
          alt: "Building your Claude stack",
        },
      ],
    },

    {
      lessonId: "lesson-6-26",
      moduleId: "06-tools-claude",
      chapterId: "ch6-6-integrations",

      images: [
        {
          position: "cover",
          query: "abstract gradient brick orange warm bright minimal",
          alt: "Team & Enterprise Features",
        },
        {
          position: "inline-1",
          query: "3D abstract group collaboration connection colorful modern",
          alt: "Group collaboration features",
        },
        {
          position: "inline-2",
          query: "abstract security compliance protection gradient modern",
          alt: "Security and compliance",
        },
      ],
    },

    {
      lessonId: "lesson-6-27",
      moduleId: "06-tools-claude",
      chapterId: "ch6-6-integrations",

      images: [
        {
          position: "cover",
          query: "abstract gradient maroon orange warm bright minimal",
          alt: "Building Your Claude-Powered System",
        },
        {
          position: "inline-1",
          query: "3D abstract productivity system design colorful modern",
          alt: "Personal productivity system design",
        },
        {
          position: "inline-2",
          query: "abstract daily weekly routine gradient modern",
          alt: "Daily and weekly routines",
        },
      ],
    },

    {
      lessonId: "lesson-6-28",
      moduleId: "06-tools-claude",
      chapterId: "ch6-6-integrations",

      images: [
        {
          position: "cover",
          query: "abstract gradient gold orange warm bright minimal",
          alt: "Capstone: Your Claude Mastery System",
        },
        {
          position: "inline-1",
          query: "mastery achievement celebration bright warm",
          alt: "Complete Claude toolkit",
        },
        {
          position: "inline-2",
          query: "organized folders productivity workspace bright",
          alt: "Mastery checklist and implementation",
        },
      ],
    },

    {
      lessonId: "lesson-6-29",
      moduleId: "06-tools-claude",
      chapterId: "ch6-6-integrations",

      images: [
        {
          position: "cover",
          query: "abstract gradient amber terracotta warm bright minimal",
          alt: "Building Your AI Workflow System",
        },
        {
          position: "inline-1",
          query: "3D abstract integration architecture connections colorful modern",
          alt: "Integration architecture",
        },
        {
          position: "inline-2",
          query: "abstract workflow rhythm productivity gradient modern",
          alt: "Daily rhythm and success metrics",
        },
      ],
    },

    {
      lessonId: "lesson-6-30",
      moduleId: "06-tools-claude",
      chapterId: "ch6-6-integrations",

      images: [
        {
          position: "cover",
          query: "abstract gradient sunset orange warm bright minimal",
          alt: "Capstone: Your Claude-Powered Transformation",
        },
        {
          position: "inline-1",
          query: "transformation achievement celebration bright",
          alt: "Complete transformation journey",
        },
        {
          position: "inline-2",
          query: "deep thinking complex reasoning visualization bright",
          alt: "The Claude advantage",
        },
      ],
    },
  ],
};

// Export lesson ID to image map for easy lookup
export const LESSON_ID_TO_IMAGE_MAP: Record<string, string[]> = {
  "lesson-6-1": [
    "abstract gradient orange terracotta warm bright minimal",
    "abstract neural network ai technology visualization orange warm",
    "3D abstract account creation digital interface colorful modern",
  ],
  "lesson-6-2": [
    "abstract gradient coral peach warm bright minimal",
    "cloud document storage analysis clean interface bright",
    "3D abstract account creation digital interface colorful modern",
  ],
  "lesson-6-3": [
    "abstract gradient orange amber warm bright minimal",
    "3D abstract conversation dialogue bubbles colorful modern",
    "abstract ideas exchange collaboration gradient modern",
  ],
  "lesson-6-4": [
    "abstract gradient burnt orange terracotta bright minimal",
    "complex digital network advanced ai technology warm",
    "organized folders productivity workspace focused bright",
  ],
  "lesson-6-5": [
    "abstract gradient rust orange warm bright minimal",
    "3D abstract planning organization workflow colorful modern",
    "abstract project management optimization gradient modern",
  ],
  "lesson-6-6": [
    "abstract gradient clay orange warm bright minimal",
    "writing keyboard technology communication workspace bright",
    "writing prompts creative content development bright warm",
  ],
  "lesson-6-7": [
    "abstract gradient sienna orange warm bright minimal",
    "research analysis data synthesis documents bright",
    "complex data visualization business intelligence warm",
  ],
  "lesson-6-8": [
    "abstract gradient persimmon orange warm bright minimal",
    "3D abstract strategic planning layers thinking colorful modern",
    "abstract creative thinking ideas colorful gradient modern",
  ],
  "lesson-6-9": [
    "abstract gradient ochre orange warm bright minimal",
    "learning education books knowledge growth bright",
    "skill development continuous learning modern warm",
  ],
  "lesson-6-10": [
    "abstract gradient copper orange warm bright minimal",
    "3D abstract workflow integration connections colorful modern",
    "abstract productivity system organization gradient modern",
  ],
  "lesson-6-11": [
    "abstract gradient tangerine orange warm bright minimal",
    "creative design workspace code content creation bright",
    "software development coding process screen bright",
  ],
  "lesson-6-12": [
    "abstract gradient apricot orange warm bright minimal",
    "brain thinking creative thought process neural warm",
    "brain memory thinking neural network bright",
  ],
  "lesson-6-13": [
    "abstract gradient coral salmon warm bright minimal",
    "parallel processing server racks connection bright",
    "growing business analytics scaling strategy bright",
  ],
  "lesson-6-14": [
    "abstract gradient pumpkin orange warm bright minimal",
    "3D abstract conversation context continuity colorful modern",
    "abstract context refresh refocusing gradient modern",
  ],
  "lesson-6-15": [
    "abstract gradient terracotta brown warm bright minimal",
    "3D abstract ethical guidelines principles colorful modern",
    "abstract verification best practices gradient modern",
  ],
  "lesson-6-16": [
    "abstract gradient orange coral warm bright minimal",
    "3D abstract workspace planning organization colorful modern",
    "abstract project folders management colorful gradient modern",
  ],
  "lesson-6-17": [
    "abstract gradient ginger orange warm bright minimal",
    "creating setting up new projects workspace bright",
    "custom instructions configuration settings bright",
  ],
  "lesson-6-18": [
    "abstract gradient cayenne orange warm bright minimal",
    "deep thinking complex reasoning visualization bright",
    "document library organized knowledge base bright",
  ],
  "lesson-6-19": [
    "abstract gradient paprika orange warm bright minimal",
    "3D abstract client project setup workflow colorful modern",
    "abstract research content workflow gradient modern",
  ],
  "lesson-6-20": [
    "abstract gradient rust terracotta warm bright minimal",
    "advanced project management optimization bright",
    "project template documentation reusable bright",
  ],
  "lesson-6-21": [
    "abstract gradient burnt sienna orange warm bright minimal",
    "deep thinking complex reasoning visualization bright",
    "strategic planning workspace organized layers bright",
  ],
  "lesson-6-22": [
    "abstract gradient caramel orange warm bright minimal",
    "advanced content creation document management bright",
    "3D abstract document creation management colorful modern",
  ],
  "lesson-6-23": [
    "abstract gradient chestnut orange warm bright minimal",
    "code development programming workspace bright",
    "software development coding process bright",
  ],
  "lesson-6-24": [
    "abstract gradient mahogany orange warm bright minimal",
    "browser extension web browsing productivity bright",
    "fast workflow automation quick processing bright",
  ],
  "lesson-6-25": [
    "abstract gradient wine orange warm bright minimal",
    "complex data visualization multiple connections bright",
    "growing business analytics scaling strategy bright",
  ],
  "lesson-6-26": [
    "abstract gradient brick orange warm bright minimal",
    "3D abstract group collaboration connection colorful modern",
    "abstract security compliance protection gradient modern",
  ],
  "lesson-6-27": [
    "abstract gradient maroon orange warm bright minimal",
    "3D abstract productivity system design colorful modern",
    "abstract daily weekly routine gradient modern",
  ],
  "lesson-6-28": [
    "abstract gradient gold orange warm bright minimal",
    "mastery achievement celebration bright warm",
    "organized folders productivity workspace bright",
  ],
  "lesson-6-29": [
    "abstract gradient amber terracotta warm bright minimal",
    "3D abstract integration architecture connections colorful modern",
    "abstract workflow rhythm productivity gradient modern",
  ],
  "lesson-6-30": [
    "abstract gradient sunset orange warm bright minimal",
    "transformation achievement celebration bright",
    "deep thinking complex reasoning visualization bright",
  ],
};

/**
 * IMAGE KEYWORD GUIDELINES FOR 06-TOOLS-CLAUDE
 *
 * HERO IMAGES (cover position):
 * - Always use: "abstract gradient [orange/terracotta variant] warm bright minimal"
 * - Color theme: Orange/terracotta palette (Anthropic brand colors)
 * - Variants used: terracotta, coral, peach, sienna, rust, clay, amber, copper,
 *   persimmon, pumpkin, ochre, ginger, apricot, tangerine, salmon, paprika,
 *   burnt sienna, cayenne, caramel, chestnut, mahogany, wine, brick, maroon,
 *   gold, sunset
 * - Purpose: Consistent brand alignment with Anthropic/Claude identity
 *
 * INLINE IMAGES (inline-1, inline-2 positions):
 * - Always use ABSTRACT/3D ILLUSTRATION style (NO photography of people)
 *   Examples: "3D abstract [concept] colorful modern", "abstract [concept] gradient"
 *   - Conveys AI and reasoning concepts
 *   - Avoids representation issues and cultural context problems
 *
 * LESSON CATEGORIES:
 * - Theory: 6.1, 6.4
 * - Tutorial: 6.2, 6.3, 6.5-6.10, 6.11-6.27
 * - Challenge: 6.28, 6.30
 */
