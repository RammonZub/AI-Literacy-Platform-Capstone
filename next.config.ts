import type { NextConfig } from "next";

/**
 * Security headers to protect against XSS, clickjacking, and other attacks.
 * Applied to all routes.
 */
const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://*.supabase.co https://api.stripe.com",
      "font-src 'self' data:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Fix Turbopack workspace root inference issue that causes absolute paths in chunk names
  // This prevents chunk names like "Desktop_Software_AI-Literacy_src_..." which can fail to load
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Allow query strings for local images (e.g., for cache-busting)
    localPatterns: [
      {
        pathname: "/logos/**",
      },
      {
        pathname: "/images/**",
      },
      {
        // High-res “L” literacy mark source (design export; optional in UI)
        pathname: "/literacy-mark-source.png",
      },
      {
        // Favicon files in public directory
        pathname: "/favicon*.png",
      },
      {
        // Apple touch icon
        pathname: "/apple-touch-icon.png",
      },
      {
        // PWA icons
        pathname: "/icon-*.png",
      },
    ],
  },
  // Security headers - applied to all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/welcome",
        destination: "/checkout/welcome",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
