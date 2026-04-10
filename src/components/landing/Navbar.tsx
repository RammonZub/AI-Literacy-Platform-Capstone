/**
 * Navbar Component
 *
 * PURPOSE: Sticky navigation header with logo, navigation links, and authentication CTAs
 *
 * CONTEXT: Top navigation bar that stays visible while scrolling, providing
 * quick access to key actions (Sign in, Get Started) and navigation sections
 *
 * KEY RESPONSIBILITIES:
 * - Display the current platform wordmark
 * - Provide navigation links (Course, Why Us, Challenge, Certificate, FAQ) on desktop
 * - Provide mobile hamburger menu with sidebar navigation on mobile devices
 * - Provide Sign in and Get Started action buttons
 * - Change appearance on scroll (transparent to blur effect)
 * - Maintain sticky positioning at top of viewport
 * - Lock body scroll when mobile menu is open
 *
 * IMPLEMENTATION NOTES:
 * - Uses 'use client' directive for scroll event listeners and menu state
 * - Wordmark uses the current platform lettering component
 * - Text: Montserrat font, all caps, extra bold
 * - Alignment: items-center for proper vertical alignment
 * - Transition effect between transparent and blurred background
 * - 64px height matches HeroSection's pt-[64px] offset
 * - Passive event listener for better scroll performance
 * - Mobile menu: backdrop overlay (z-[9998]) with sidebar panel (z-[9999])
 * - Body scroll lock prevents background scrolling when menu is open
 * - Escape key closes the mobile menu for better UX
 *
 * DEPENDENCIES:
 * - React hooks (useState, useEffect) for scroll state and menu state management
 * - Montserrat font for geometric sans-serif logo text
 * - Next.js Link and useRouter for navigation
 * - lucide-react icons (Menu, X) for mobile menu UI
 */

"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PlatformWordmarkLetters } from "@/components/shared/PlatformWordmarkLetters";

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Escape key handler to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Helper function to handle nav link clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex items-center justify-between h-[64px]">
          {/* Logo - start */}
          <Link href="/" className="flex items-center shrink-0">
            <h1>
              <PlatformWordmarkLetters size="md" includeAI={false} />
            </h1>
          </Link>

          {/* Center nav links - desktop only, grouped together */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center gap-5 lg:gap-7">
              <a
                href="#course"
                className="font-body text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Course
              </a>
              <a
                href="#why-us"
                className="font-body text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Why Us
              </a>
              <a
                href="#challenge"
                className="font-body text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Challenge
              </a>
              <a
                href="#certificate"
                className="font-body text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Certificate
              </a>
              <a
                href="#faq"
                className="font-body text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* End: hamburger on mobile, auth buttons on desktop */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-7 h-7" />
            </button>
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login" className="btn-navbar-secondary" aria-label="Sign in">
                Sign in
              </Link>
              <button
                onClick={() => router.push("/onboarding")}
                type="button"
                className="btn-navbar-primary"
                aria-label="Get Started"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-9998 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Sidebar panel */}
          <div
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-9999 shadow-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2>
                <PlatformWordmarkLetters size="sm" includeAI={false} />
              </h2>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links - larger tap targets */}
            <nav className="flex-1 overflow-y-auto py-6 px-4">
              <a
                href="#course"
                onClick={(e) => handleNavClick(e, "#course")}
                className="block w-full text-left px-5 py-5 text-2xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                Course
              </a>
              <a
                href="#why-us"
                onClick={(e) => handleNavClick(e, "#why-us")}
                className="block w-full text-left px-5 py-5 text-2xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                Why Us
              </a>
              <a
                href="#challenge"
                onClick={(e) => handleNavClick(e, "#challenge")}
                className="block w-full text-left px-5 py-5 text-2xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                Challenge
              </a>
              <a
                href="#certificate"
                onClick={(e) => handleNavClick(e, "#certificate")}
                className="block w-full text-left px-5 py-5 text-2xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                Certificate
              </a>
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, "#faq")}
                className="block w-full text-left px-5 py-5 text-2xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                FAQ
              </a>
            </nav>

            {/* Auth buttons at bottom - larger for mobile */}
            <div className="p-5 border-t border-gray-100 space-y-4">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-navbar-secondary block w-full text-center py-5 text-2xl font-semibold"
              >
                Sign in
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push("/onboarding");
                }}
                type="button"
                className="btn-navbar-primary block w-full text-center py-5 text-2xl font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
