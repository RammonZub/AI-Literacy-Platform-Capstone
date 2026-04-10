/**
 * Centralized SEO Configuration
 *
 * PURPOSE: Single source of truth for all site-wide SEO metadata
 *
 * This file consolidates:
 * - Site config (name, description, URLs, social handles)
 * - Default metadata (OpenGraph, Twitter, robots)
 * - Page-specific overrides for consistent metadata
 *
 * USAGE:
 * - Import { siteConfig, defaultMetadata } for site-wide settings
 * - Import { getPageMetadata } for page-specific metadata generation
 * - Use { generatePageMetadata } helper for dynamic routes
 *
 * @see src/app/layout.tsx - Root metadata using this config
 * @see src/lib/seo/metadata.ts - Metadata generation utilities
 */

import type { Metadata } from "next";
import { SITE_BRAND_NAME, getSitePublicOrigin } from "@/lib/site-brand";

const publicOrigin = getSitePublicOrigin();

// ============================================
// SITE CONFIGURATION
// ============================================

/**
 * Core site configuration - single source of truth
 * Update these values to change site-wide branding
 */
export const siteConfig = {
  name: SITE_BRAND_NAME,
  title: `${SITE_BRAND_NAME} - Thesis Artifact`,
  description:
    "Evaluated microlearning platform for non-technical professionals, built as the software artifact for a capstone thesis on AI literacy.",
  shortDescription: "Capstone thesis artifact for AI-literacy microlearning.",
  url: publicOrigin,
  appUrl: publicOrigin,
  ogImage: "/og-image.png",
  ogImageWidth: 3600,
  ogImageHeight: 1890,

  // Social media handles (optional; may be set via environment variables)
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim() || "",
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL?.trim() || "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",

  // Branding
  author: SITE_BRAND_NAME,
  creator: SITE_BRAND_NAME,
  publisher: SITE_BRAND_NAME,

  // SEO keywords (exported for reuse in page metadata)
  keywords: [
    "AI literacy",
    "learn AI",
    "ChatGPT tutorial",
    "AI education",
    "artificial intelligence",
    "AI training",
    "prompt engineering",
    "AI productivity",
  ],

  // Verification codes
  facebookDomainVerification: "2tk3yyup233xgzy15pirx8czxq5pot",
} as const;

// ============================================
// DEFAULT METADATA
// ============================================

/**
 * Default metadata object used across all pages
 * Pages can override specific fields as needed
 */
export const defaultMetadata: Metadata = {
  // Title template (applied to all pages unless overridden)
  title: {
    default: siteConfig.title,
    template: `%s | ${SITE_BRAND_NAME}`,
  },

  // Description
  description: siteConfig.description,

  // Keywords
  keywords: [...siteConfig.keywords] as string[],

  // Authorship
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,

  // Icons (with shortcut icon for modern browsers)
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon-32x32.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL (overridden per-page)
  alternates: {
    canonical: siteConfig.url,
  },

  // OpenGraph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: siteConfig.title,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    ...(siteConfig.twitterHandle
      ? { site: siteConfig.twitterHandle, creator: siteConfig.twitterHandle }
      : {}),
    images: [siteConfig.ogImage],
  },

  // Format detection (disable auto-detection)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Verification codes
  other: {
    "facebook-domain-verification": siteConfig.facebookDomainVerification,
  },
};

// ============================================
// PAGE CONFIGURATION
// ============================================

/**
 * Page-specific metadata configurations
 * These override default metadata for specific pages
 */
export const pageConfigs = {
  // Marketing pages
  home: {
    title: "AI Literacy Platform — Evaluated Microlearning Prototype",
    description:
      "Capstone software artifact for evaluating onboarding, personalization, and microlearning-based AI-literacy training for non-technical professionals.",
    keywords: [
      "AI literacy thesis",
      "microlearning prototype",
      "cold-start personalization",
      "AI education artifact",
      "non-technical professionals",
    ],
    alternates: {
      canonical: siteConfig.url,
    },
  },

  quiz: {
    title: `Discover Your AI Learning Style — Free 2-Minute Quiz | ${SITE_BRAND_NAME}`,
    description:
      "Take our free 2-minute quiz to get a personalized AI learning plan tailored to your goals and experience level.",
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.url}/onboarding`,
    },
  },

  checkout: {
    robots: {
      index: false,
      follow: false,
    },
  },

  // Legal pages
  privacy: {
    title: `Privacy Policy | ${SITE_BRAND_NAME}`,
    description: `Learn how ${SITE_BRAND_NAME} collects, uses, and protects your data. Your privacy matters to us.`,
    alternates: {
      canonical: `${siteConfig.url}/privacy`,
    },
  },

  terms: {
    title: `Terms of Service | ${SITE_BRAND_NAME}`,
    description: `Read ${SITE_BRAND_NAME}'s terms of service. Understand your rights and responsibilities when using our platform.`,
    alternates: {
      canonical: `${siteConfig.url}/terms`,
    },
  },

  // Platform pages (authenticated)
  platform: {
    robots: {
      index: false,
      follow: false,
    },
  },

  // Blog pages
  blog: {
    title: `AI Learning Blog & Tutorials | ${SITE_BRAND_NAME}`,
    description:
      "Reference materials and supporting pages related to the AI-literacy learning platform.",
    keywords: [
      "AI tutorial",
      "AI guide",
      "AI tips",
      "ChatGPT tutorial",
      "Claude guide",
      "prompt engineering guide",
      "learn AI online",
    ],
    alternates: {
      canonical: `${siteConfig.url}/blog`,
    },
  },

  learn: {
    title: `Curriculum Overview | ${SITE_BRAND_NAME}`,
    description:
      "Curriculum overview for the modules and lessons included in the evaluated AI-literacy platform.",
    keywords: [
      "AI course",
      "AI training",
      "ChatGPT course",
      "Claude course",
      "prompt engineering course",
    ],
    alternates: {
      canonical: `${siteConfig.url}/learn`,
    },
  },

  glossary: {
    title: `AI Glossary - Learn AI Terms & Definitions | ${SITE_BRAND_NAME}`,
    description:
      "Complete AI glossary with definitions for LLM, RAG, prompt engineering, AI agents, and more.",
    keywords: ["AI terms", "AI definitions", "what is AI", "AI glossary", "AI dictionary"],
    alternates: {
      canonical: `${siteConfig.url}/glossary`,
    },
  },

} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate full metadata object for a specific page
 * Merges default metadata with page-specific overrides
 *
 * @param pageConfig - Page-specific metadata (overrides defaults)
 * @returns Complete Metadata object
 *
 * @example
 * ```ts
 * export const metadata = getPageMetadata(pageConfigs.quiz)
 * ```
 */
export function getPageMetadata(
  pageConfig: Partial<Metadata> = {},
  customOverrides: Partial<Metadata> = {},
): Metadata {
  // Deep merge function for nested metadata objects
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function deepMerge(target: any, source: any): any {
    if (typeof target !== "object" || target === null) return target;
    const result = { ...target };
    for (const key in source) {
      const sourceValue = source[key];
      const targetValue = result[key];
      if (typeof sourceValue === "object" && sourceValue !== null && !Array.isArray(sourceValue)) {
        result[key] = deepMerge(targetValue, sourceValue);
      } else if (sourceValue !== undefined) {
        result[key] = sourceValue;
      }
    }
    return result;
  }

  // Merge defaults -> page config -> custom overrides
  return deepMerge(deepMerge(defaultMetadata, pageConfig), customOverrides);
}

/**
 * Type-safe page config keys
 */
export type PageConfigKey = keyof typeof pageConfigs;

/**
 * Get metadata for a pre-configured page
 * Utility wrapper around getPageMetadata for pageConfigs
 *
 * @param pageKey - Key from pageConfigs object
 * @param customOverrides - Additional custom overrides
 * @returns Complete Metadata object
 *
 * @example
 * ```ts
 * export const metadata = getPageConfig("home")
 * export const metadata = getPageConfig("quiz", { twitter: { creator: "@custom" } })
 * ```
 */
export function getPageConfig(
  pageKey: PageConfigKey,
  customOverrides?: Partial<Metadata>,
): Metadata {
  // Convert readonly arrays to mutable arrays for Metadata typing
  const config = pageConfigs[pageKey] as Record<string, unknown>;
  const mutableConfig: Record<string, unknown> = {};

  for (const key in config) {
    const value = config[key];
    // Spread arrays to make them mutable
    if (Array.isArray(value)) {
      mutableConfig[key] = [...value];
    } else {
      mutableConfig[key] = value;
    }
  }

  return getPageMetadata(mutableConfig as Partial<Metadata>, customOverrides);
}
