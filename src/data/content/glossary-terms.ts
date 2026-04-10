/**
 * AI Glossary Terms Data
 *
 * PURPOSE: Central data source for all glossary term definitions
 *
 * STRUCTURE:
 * - Each term has a definition, why it matters, example, and related terms
 * - Categories: fundamentals, tools, advanced
 * - Slugs are URL-friendly identifiers
 *
 * @see docs/SEO/mini-plans/01-ai-glossary.md for term priorities
 */

// ==========================================
// TYPES
// ==========================================

export type GlossaryCategory = "fundamentals" | "tools" | "advanced";

export interface GlossaryTerm {
  /** The glossary term */
  term: string;
  /** URL-friendly slug */
  slug: string;
  /** Short definition (1-2 sentences) */
  definition: string;
  /** Why this term matters to learners */
  whyItMatters: string;
  /** Practical example of the term */
  example: string;
  /** Related term slugs for internal linking */
  relatedTerms: string[];
  /** Category for organization */
  category: GlossaryCategory;
}

// ==========================================
// GLOSSARY DATA
// ==========================================

/**
 * All glossary terms
 *
 * NOTE: This array will be populated with 200+ terms by Agent 7 (Content).
 * Sample terms included below for development and testing.
 */
export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "LLM",
    slug: "llm-large-language-model",
    definition:
      "A Large Language Model (LLM) is an AI system trained on vast amounts of text data to understand and generate human-like language. Examples include GPT-4, Claude, and Gemini.",
    whyItMatters:
      "LLMs power the AI tools you use daily, from chatbots to writing assistants. Understanding how they work helps you use them more effectively.",
    example:
      "When you ask ChatGPT to write an email, the LLM analyzes your request and generates a response based on patterns learned from millions of similar texts.",
    relatedTerms: ["gpt", "claude", "gemini", "prompt-engineering"],
    category: "fundamentals",
  },
  {
    term: "Prompt Engineering",
    slug: "prompt-engineering",
    definition:
      "Prompt engineering is the practice of crafting effective instructions to get the best results from AI models. It involves structuring your requests clearly and providing the right context.",
    whyItMatters:
      "Good prompt engineering can dramatically improve AI outputs. A well-crafted prompt can turn a mediocre response into exactly what you need.",
    example:
      'Instead of asking "Write a marketing email," a prompt engineer might say "Write a friendly but professional marketing email for a fitness app, targeting busy professionals aged 30-45, highlighting time efficiency."',
    relatedTerms: ["llm-large-language-model", "context-window", "token"],
    category: "fundamentals",
  },
  {
    term: "RAG",
    slug: "rag-retrieval-augmented-generation",
    definition:
      "Retrieval-Augmented Generation (RAG) is a technique that combines AI language models with external knowledge sources, allowing the AI to access up-to-date or private information beyond its training data.",
    whyItMatters:
      "RAG enables AI to answer questions about your specific documents, recent events, or proprietary data - making it far more useful for real-world applications.",
    example:
      "A company might use RAG to let employees query their internal documentation through an AI assistant, getting accurate answers based on actual company policies rather than generic responses.",
    relatedTerms: ["llm-large-language-model", "embedding", "vector-database"],
    category: "advanced",
  },
  {
    term: "ChatGPT",
    slug: "chatgpt",
    definition:
      "ChatGPT is an AI chatbot developed by OpenAI that uses large language models to conduct conversations, answer questions, and assist with various tasks.",
    whyItMatters:
      "ChatGPT popularized AI assistants for everyday use. It's one of the most accessible entry points for learning to work with AI.",
    example:
      "You can use ChatGPT to draft emails, brainstorm ideas, explain complex topics, write code, or even plan a vacation itinerary.",
    relatedTerms: ["gpt", "openai", "llm-large-language-model"],
    category: "tools",
  },
  {
    term: "Claude",
    slug: "claude",
    definition:
      "Claude is an AI assistant developed by Anthropic, known for its helpfulness, honesty, and ability to handle long conversations with detailed, nuanced responses.",
    whyItMatters:
      "Claude excels at thoughtful analysis, writing, and tasks requiring careful reasoning. Its large context window makes it ideal for working with long documents.",
    example:
      "Claude can analyze a 50-page report, summarize key findings, and help you draft a presentation based on its contents - all while maintaining context throughout.",
    relatedTerms: ["anthropic", "llm-large-language-model", "context-window"],
    category: "tools",
  },
  // ==========================================
  // TERMS FROM BLOG POST 4: "WHAT IS AI?"
  // ==========================================
  {
    term: "Artificial Intelligence",
    slug: "artificial-intelligence",
    definition:
      "Artificial Intelligence (AI) is software that can learn from examples, understand language, and help you complete tasks faster. Unlike traditional software that follows fixed rules, AI adapts and improves based on the data it processes.",
    whyItMatters:
      "AI is already woven into daily life—from email autocomplete to Netflix recommendations. Understanding what AI actually is (and isn't) helps you use it effectively and separate hype from reality.",
    example:
      "When your email app suggests how to finish a sentence, or when Spotify creates a playlist based on songs you've liked, that's AI recognizing patterns and making predictions.",
    relatedTerms: ["narrow-ai", "general-ai", "machine-learning", "llm-large-language-model"],
    category: "fundamentals",
  },
  {
    term: "Narrow AI",
    slug: "narrow-ai",
    definition:
      "Narrow AI (also called Weak AI) is AI designed for specific tasks. It excels at one thing—like language, images, or navigation—but can't do everything a human can do. This is the only type of AI that exists today.",
    whyItMatters:
      "All AI tools you'll encounter—ChatGPT, Claude, Midjourney, Google Maps—are narrow AI. Understanding this helps set realistic expectations about what AI can and cannot do.",
    example:
      "ChatGPT handles language tasks brilliantly but can't drive a car. Google Maps predicts traffic patterns but can't write poetry. Each narrow AI is really good at its specific job.",
    relatedTerms: ["artificial-intelligence", "general-ai", "chatgpt", "claude", "gemini"],
    category: "fundamentals",
  },
  {
    term: "General AI",
    slug: "general-ai",
    definition:
      "General AI (also called AGI or Strong AI) is a hypothetical future AI that could perform any intellectual task a human can do. It would reason, learn, and adapt across any domain—not just one specific task.",
    whyItMatters:
      "General AI doesn't exist yet and may not for decades. Understanding the difference between today's narrow AI and theoretical general AI helps you focus on practical, available tools rather than sci-fi scenarios.",
    example:
      "A general AI could theoretically write code, perform surgery, compose music, and negotiate contracts—all with human-level capability. Today's AI can only do each task separately, with varying skill levels.",
    relatedTerms: ["artificial-intelligence", "narrow-ai"],
    category: "advanced",
  },
  {
    term: "Gemini",
    slug: "gemini",
    definition:
      "Gemini is Google's AI assistant, designed to help with research, writing, and tasks that benefit from integration with Google's ecosystem. It connects seamlessly with Google Workspace tools like Docs, Sheets, and Gmail.",
    whyItMatters:
      "If you work primarily in Google's ecosystem, Gemini offers the smoothest AI integration. It can access your Google Calendar, read your Docs, and work within your existing workflows.",
    example:
      "You could ask Gemini to summarize a Google Doc, draft an email in Gmail, or create a presentation in Slides—all while pulling information from your other Google files.",
    relatedTerms: ["chatgpt", "claude", "llm-large-language-model"],
    category: "tools",
  },
  {
    term: "Machine Learning",
    slug: "machine-learning",
    definition:
      "Machine learning is the technique that makes AI work. It's how AI systems learn patterns from data and improve over time. Think of it as the engine inside the car—essential, but you don't need to understand it to drive.",
    whyItMatters:
      "Machine learning is why AI gets smarter the more people use it. Every interaction helps the system recognize patterns and make better predictions. You don't need to be a data scientist to benefit from this.",
    example:
      "Netflix's recommendation engine uses machine learning. When you watch shows and rate them, the system learns your preferences and suggests content you're likely to enjoy. The more you watch, the better it gets.",
    relatedTerms: ["artificial-intelligence", "llm-large-language-model", "training-data"],
    category: "fundamentals",
  },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get all glossary terms
 */
export function getAllGlossaryTerms(): GlossaryTerm[] {
  return glossaryTerms;
}

/**
 * Get a term by its slug
 */
export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}

/**
 * Get all term slugs for static generation
 */
export function getAllGlossarySlugs(): string[] {
  return glossaryTerms.map((term) => term.slug);
}

/**
 * Get terms by category
 */
export function getGlossaryTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossaryTerms.filter((term) => term.category === category);
}

/**
 * Get terms starting with a specific letter
 */
export function getGlossaryTermsByLetter(letter: string): GlossaryTerm[] {
  return glossaryTerms.filter((term) => term.term.toUpperCase().startsWith(letter.toUpperCase()));
}

/**
 * Get available letters that have terms
 */
export function getAvailableLetters(): Set<string> {
  const letters = new Set<string>();
  for (const term of glossaryTerms) {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (firstLetter.match(/[A-Z]/)) {
      letters.add(firstLetter);
    }
  }
  return letters;
}

/**
 * Get related terms by slug references
 */
export function getRelatedTermsBySlugs(slugs: string[]): GlossaryTerm[] {
  return slugs
    .map((slug) => getGlossaryTermBySlug(slug))
    .filter((term): term is GlossaryTerm => term !== undefined);
}
