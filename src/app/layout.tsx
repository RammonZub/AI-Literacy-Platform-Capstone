/**
 * Root Layout Component
 *
 * PURPOSE: Root layout with beige/red/blue theming system
 *
 * CONTEXT: This layout provides the foundation for the entire app's design system.
 * It sets up typography (DM Serif for headlines, Geist Sans for body) and the
 * ThemeProvider for dynamic theme switching.
 *
 * KEY RESPONSIBILITIES:
 * - Configure Google Fonts for consistent typography
 * - Apply theme variables via CSS custom properties
 * - Provide ThemeProvider for client-side theme switching
 * - Set up base metadata for the application
 *
 * IMPLEMENTATION NOTES:
 * - DM Serif Display: Used for headlines, section titles, branding (elegant, distinctive)
 * - DM Sans: Geometric sans-serif backup (readable, modern)
 * - Geist Mono: Used for code snippets, technical content (monospaced)
 * - Font variables are exposed as CSS custom properties for use in Tailwind
 *
 * DEPENDENCIES:
 * - next/font/google: Google Fonts integration for Next.js
 * - app/globals.css: Design system CSS variables
 */

import type { Metadata, Viewport } from "next";
import {
  DM_Sans,
  DM_Serif_Display,
  Inter,
  Montserrat,
  Mrs_Saint_Delafield,
  Plus_Jakarta_Sans,
  Space_Mono,
} from "next/font/google";
import { Suspense } from "react";
import { CookieConsent, SimplePageTracker } from "@/components/analytics";
import { ThemeProvider } from "@/components/providers";
import {
  SITE_BRAND_NAME,
  SITE_CREATOR_LABEL,
  SITE_TAGLINE,
} from "@/lib/site-brand";
import "./globals.css";

// ============================================
// FONTS CONFIGURATION
// ============================================

/**
 * DM Serif Display - Editorial serif font for landing page headlines
 * Provides an elegant, editorial feel that differentiates headlines from body text
 * Used for H1/H2 on landing pages for warmth and authority
 */
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif-display",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Plus Jakarta Sans - Display font for landing page headlines
 * Landing pages require bold, impactful typography that grabs attention
 */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

/**
 * Inter - Body font for landing page content
 * Optimized for readability on screens, excellent for UI text
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

/**
 * DM Sans - Platform font for main application
 * Used throughout the main platform interface
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

/**
 * Space Mono - Monospace font for code/technical content
 * Used for code snippets, technical labels, and data displays
 */
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

/**
 * Montserrat - Logo/brand font (landing Navbar, quiz header)
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
  display: "swap",
});

/**
 * Mrs Saint Delafield - Authentic signature font
 * Used in certificates for the signature field
 */
const signatureFont = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400"],
  display: "swap",
});

// ============================================
// METADATA
// ============================================

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_BRAND_NAME,
    template: `%s | ${SITE_BRAND_NAME}`,
  },
  description: SITE_TAGLINE,
  keywords: [
    "AI literacy",
    "learn AI",
    "microlearning",
    "AI education",
    "artificial intelligence",
  ],
  authors: [{ name: SITE_CREATOR_LABEL }],
  creator: SITE_CREATOR_LABEL,
  publisher: SITE_CREATOR_LABEL,
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: SITE_BRAND_NAME,
    title: SITE_BRAND_NAME,
    description: SITE_TAGLINE,
    images: [
      {
        url: "/og-image.png",
        width: 3600,
        height: 1890,
        alt: SITE_BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_BRAND_NAME,
    description: SITE_TAGLINE,
    images: ["/og-image.png"],
  },
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2563EB", // Blue brand color (matches favicon)
};

// ============================================
// ROOT LAYOUT
// ============================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${plusJakartaSans.variable} ${inter.variable} ${dmSans.variable} ${spaceMono.variable} ${montserrat.variable} ${signatureFont.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
        <CookieConsent />
        {/* First-party page telemetry */}
        <Suspense fallback={null}>
          <SimplePageTracker />
        </Suspense>
      </body>
    </html>
  );
}
