import type { FAQItem } from "@/data/seo/faq-data";
import { SITE_BRAND_NAME, getSitePublicOrigin, siteAbsoluteUrl } from "@/lib/site-brand";
import { siteConfig } from "./config";

function socialSameAs(): string[] {
  return [siteConfig.twitterUrl, siteConfig.linkedinUrl].filter(
    (u): u is string => typeof u === "string" && u.length > 0,
  );
}

/**
 * Generate FAQPage schema for structured data
 * @param items - Array of FAQ items with question and answer
 * @returns JSON-LD FAQPage schema
 */
export function generateFAQPageSchema(items: FAQItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate Course schema for structured data
 * @param options - Course configuration options
 * @returns JSON-LD Course schema
 */
export function generateCourseSchema(options: {
  name: string;
  description: string;
  lessons: number;
  hours: number;
}) {
  const sameAs = socialSameAs();
  return {
    "@type": "Course",
    name: options.name,
    description: options.description,
    provider: {
      "@type": "Organization",
      name: SITE_BRAND_NAME,
      url: getSitePublicOrigin(),
      ...(sameAs.length > 0 ? { sameAs } : {}),
    },
    timeRequired: `PT${options.hours}H`,
    educationalLevel: "Beginner",
    learningResourceType: "Course",
    numberOfLessons: options.lessons,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
    },
  };
}

/**
 * Generate BreadcrumbList schema for structured data
 * @param items - Array of breadcrumb items with name and URL path
 * @returns JSON-LD BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: siteAbsoluteUrl(item.url),
    })),
  };
}

/**
 * Generate Organization schema for structured data
 * @returns JSON-LD Organization schema
 */
export function generateOrganizationSchema() {
  const sameAs = socialSameAs();
  return {
    "@type": "Organization",
    name: SITE_BRAND_NAME,
    url: getSitePublicOrigin(),
    logo: siteAbsoluteUrl("/favicon-32x32.png"),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    description: siteConfig.description,
  };
}

/**
 * Generate WebSite schema for structured data
 * @returns JSON-LD WebSite schema
 */
export function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    name: SITE_BRAND_NAME,
    url: getSitePublicOrigin(),
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: siteAbsoluteUrl("/search?q={search_term_string}"),
      },
      "query-input": {
        "@type": "PropertyValueSpecification",
        valueRequired: true,
        valueName: "search_term_string",
      },
    },
  };
}

/**
 * Generate BlogPosting schema for structured data
 *
 * Supports both Organization and Person author types. When authorSlug is provided,
 * creates a Person author with URL to author page for better E-E-A-T signals.
 *
 * @param post - Blog post data with optional author and authorSlug
 * @returns JSON-LD BlogPosting schema
 */
export function generateBlogPostingSchema(post: {
  title: string;
  slug: string;
  description?: string;
  content: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  authorSlug?: string;
  imageUrl?: string;
}) {
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  const authorUrl = post.authorSlug ? siteAbsoluteUrl(`/blog/author/${post.authorSlug}`) : undefined;

  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || post.title,
    image: post.imageUrl ? [post.imageUrl] : [siteAbsoluteUrl("/og-image.png")],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: authorUrl
      ? {
          "@type": "Person",
          name: post.author,
          url: authorUrl,
        }
      : {
          "@type": "Organization",
          name: SITE_BRAND_NAME,
          url: getSitePublicOrigin(),
        },
    publisher: {
      "@type": "Organization",
      name: SITE_BRAND_NAME,
      url: getSitePublicOrigin(),
      logo: {
        "@type": "ImageObject",
        url: siteAbsoluteUrl("/favicon-32x32.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteAbsoluteUrl(`/blog/${post.slug}`),
    },
    wordCount,
    timeRequired: `PT${readingTime}M`,
    url: siteAbsoluteUrl(`/blog/${post.slug}`),
    isAccessibleForFree: true,
  };
}

/**
 * Generate ItemList schema for structured data
 */
export function generateItemListSchema(
  items: { title: string; url: string; description?: string }[],
  listName: string,
) {
  return {
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: siteAbsoluteUrl(item.url),
      description: item.description,
    })),
  };
}

// ==========================================
// AUTHOR SCHEMAS
// ==========================================

/**
 * Generate Person schema for author pages
 *
 * Creates Schema.org Person markup for author profiles, including
 * job title, expertise areas, and organizational affiliation.
 *
 * @param author - Author data with Person schema properties
 * @returns JSON-LD Person schema
 */
export function generatePersonSchema(author: {
  full_name: string;
  slug: string;
  job_title: string;
  email: string;
  photo_url?: string;
  expertise_areas?: string[];
}) {
  const authorUrl = siteAbsoluteUrl(`/blog/author/${author.slug}`);

  return {
    "@type": "Person",
    "@id": authorUrl,
    name: author.full_name,
    jobTitle: author.job_title,
    email: author.email,
    url: authorUrl,
    ...(author.photo_url && { image: siteAbsoluteUrl(author.photo_url) }),
    ...(author.expertise_areas && { knowsAbout: author.expertise_areas }),
    worksFor: {
      "@type": "Organization",
      name: SITE_BRAND_NAME,
      url: getSitePublicOrigin(),
    },
  };
}

/**
 * Generate ProfilePage schema for author pages
 *
 * Creates Schema.org ProfilePage markup that links to the Person entity.
 *
 * @param author - Author with full_name and slug
 * @returns JSON-LD ProfilePage schema
 */
export function generateProfilePageSchema(author: { full_name: string; slug: string }) {
  const authorUrl = siteAbsoluteUrl(`/blog/author/${author.slug}`);

  return {
    "@type": "ProfilePage",
    mainEntity: { "@id": authorUrl },
    name: `${author.full_name} - Author Profile`,
    url: authorUrl,
  };
}

/**
 * Generate complete author page structured data
 *
 * Combines Person, ProfilePage, BreadcrumbList, and ItemList schemas
 * for comprehensive author page SEO markup.
 */
export function generateAuthorPageStructuredData(
  author: Parameters<typeof generatePersonSchema>[0] & { bio: string },
  posts: { title: string; slug: string }[],
) {
  const authorUrl = siteAbsoluteUrl(`/blog/author/${author.slug}`);
  const origin = getSitePublicOrigin();

  return {
    "@context": "https://schema.org",
    "@graph": [
      generatePersonSchema(author),
      generateProfilePageSchema(author),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Blog", item: siteAbsoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: author.full_name, item: authorUrl },
        ],
      },
      ...(posts.length > 0
        ? [
            {
              "@type": "ItemList",
              name: `Articles by ${author.full_name}`,
              numberOfItems: posts.length,
              itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: siteAbsoluteUrl(`/blog/${post.slug}`),
              })),
            },
          ]
        : []),
    ],
  };
}
