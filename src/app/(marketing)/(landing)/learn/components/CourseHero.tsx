/**
 * CourseHero
 *
 * PURPOSE: Hero section for course landing pages with professional split layout.
 *
 * LAYOUT:
 * - Desktop: Two-column grid (content left, image right)
 * - Mobile: Stacked (content top, image below)
 *
 * DESIGN: Clean, professional, no emojis. Follows Codecademy/MasterClass patterns.
 */

"use client";

import { Award, BookOpen, Clock, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// TYPES
// ==========================================

export interface CourseHeroProps {
  title: string;
  tagline: string;
  imageUrl: string;
  color: {
    from: string;
    to: string;
  };
  stats: {
    duration: string;
    lessons: number;
    certificate: boolean;
    level: "Beginner" | "Intermediate" | "Advanced";
  };
}

// ==========================================
// COMPONENT
// ==========================================

const CourseHero = ({ title, tagline, imageUrl, color, stats }: CourseHeroProps) => {
  const scrollToSyllabus = () => {
    const syllabus = document.getElementById("syllabus");
    syllabus?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{
        background: `linear-gradient(180deg, ${color.from}08 0%, #ffffff 24%)`,
      }}
    >
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Content */}
          <div className="order-2 lg:order-1">
            {/* Breadcrumb */}
            <div className="mb-4">
              <Link
                href="/learn"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Courses
              </Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-sm text-gray-900 font-medium">{title}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              {title}
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-lg">{tagline}</p>

            {/* Stats Bar - Clean horizontal layout */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{stats.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gray-400" />
                <span>{stats.lessons} lessons</span>
              </div>
              {stats.certificate && (
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gray-400" />
                  <span>Certificate</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-gray-400" />
                <span>{stats.level}</span>
              </div>
            </div>

            {/* CTA Buttons - Professional styling */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-[#007AFF] hover:bg-[#0066DD] transition-all"
              >
                Start Free Quiz
              </Link>
              <button
                onClick={scrollToSyllabus}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-gray-700 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                View Syllabus
              </button>
            </div>
          </div>

          {/* RIGHT: Course Image - Smaller, professional */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src={imageUrl}
                alt={`${title} course`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
