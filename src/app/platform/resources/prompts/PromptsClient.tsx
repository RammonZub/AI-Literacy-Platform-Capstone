"use client";

/**
 * PromptsClient Component
 *
 * PURPOSE: Client-side component for the Prompt Library page.
 *
 * FEATURES:
 * - Search prompts by query
 * - Filter by difficulty and tool
 * - Browse domains (horizontal scroll with bg images)
 * - View prompts in grid layout
 *
 * @see src/app/platform/resources/prompts/page.tsx - Parent page
 */

import {
  ArrowRight,
  BarChart2,
  BarChart3,
  Bot,
  Briefcase,
  DollarSign,
  FileText,
  GraduationCap,
  Handshake,
  Heart,
  LayoutDashboard,
  Mail,
  Megaphone,
  Palette,
  Scale,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import PlatformPageShell from "@/components/layout/PlatformPageShell";
import {
  filterPrompts,
  getAllPromptDomains,
  getAllPrompts,
} from "@/data/content/resources";
import { resourcePaths, resourceRoutes } from "@/lib/routes/resources";
import type {
  AITool,
  PromptDifficulty,
  PromptFilters,
} from "@/types/resources";

// ==========================================
// DOMAIN IMAGE & ICON MAPPING
// ==========================================

const DOMAIN_IMAGES: Record<string, string> = {
  productivity: "/images/courses/lessons/abstract-data-flow.jpg",
  "email-communication": "/images/courses/lessons/connection-web.jpg",
  "document-writing": "/images/courses/lessons/digital-structure.jpg",
  "marketing-content": "/images/courses/lessons/colorful-gradient.jpg",
  "data-research": "/images/courses/lessons/particles-flow.jpg",
  "strategy-decision": "/images/courses/lessons/geometric-depth.jpg",
  "hr-people": "/images/courses/lessons/layered-depth.jpg",
  "finance-accounting": "/images/courses/lessons/abstract-blue.jpg",
  "sales-client": "/images/courses/lessons/wave-pattern.jpg",
  "health-wellness": "/images/courses/lessons/light-rays.jpg",
  "education-learning": "/images/courses/lessons/geometric-shapes.jpg",
  "creative-personal": "/images/courses/lessons/digital-circuit.jpg",
  "legal-compliance": "/images/courses/lessons/brain-neural-network.jpg",
  "freelancer-consultant": "/images/courses/lessons/robot-writing.jpg",
  "ai-meta-prompts": "/images/courses/lessons/abstract-data-flow.jpg",
};

const DOMAIN_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  productivity: LayoutDashboard,
  "email-communication": Mail,
  "document-writing": FileText,
  "marketing-content": Megaphone,
  "data-research": BarChart3,
  "strategy-decision": Target,
  "hr-people": Users,
  "finance-accounting": DollarSign,
  "sales-client": Handshake,
  "health-wellness": Heart,
  "education-learning": GraduationCap,
  "creative-personal": Palette,
  "legal-compliance": Scale,
  "freelancer-consultant": Briefcase,
  "ai-meta-prompts": Bot,
};

/**
 * PromptsClient component
 *
 * Displays the main Prompt Library interface with search, filters, and prompt cards.
 */
export default function PromptsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<PromptDifficulty | null>(null);
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

  // Get domains and prompts
  const domains = getAllPromptDomains();
  const allPrompts = getAllPrompts();

  // Filter prompts based on current filters
  const filters: PromptFilters = {};
  if (searchQuery) filters.searchQuery = searchQuery;
  if (selectedDifficulty) filters.difficulty = selectedDifficulty;
  if (selectedTool) filters.tool = selectedTool;
  const filteredPrompts = filterPrompts(filters);

  // Difficulty filter options
  const difficultyOptions: { value: PromptDifficulty; label: string }[] = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  return (
    <PlatformPageShell className="pb-20" railClassName="py-0">
      {/* Hero Header */}
      <div className="bg-linear-to-b from-primary/5 to-background border-b border-border -mx-4 px-4">
        <div className="py-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Prompt Library
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {allPrompts.length > 0
              ? `Browse ${allPrompts.length} copy-ready prompts across ${domains.length} domains.`
              : "Browse AI prompts for productivity, communication, and more"}
          </p>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a prompt..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base bg-white shadow-sm border-muted-foreground/20 focus-visible:ring-primary"
            />
          </div>

          {/* Filter Pills - Difficulty */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              variant={!selectedDifficulty ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty(null)}
              className="rounded-full px-4"
            >
              All Levels
            </Button>
            {difficultyOptions.map((option) => (
              <Button
                key={option.value}
                variant={
                  selectedDifficulty === option.value ? "primary" : "outline"
                }
                size="sm"
                onClick={() => setSelectedDifficulty(option.value)}
                className="rounded-full px-4"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8">
        {/* Domains Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-foreground">
              Browse by Domain
            </h2>
            <Link
              href="#"
              className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Domain Cards - Horizontal Scroll */}
          <div className="flex gap-4 overflow-x-auto overflow-y-visible pb-4 -mx-4 px-4 scrollbar-hide">
            {domains.map((domain) => {
              const IconComponent = DOMAIN_ICONS[domain.id] || LayoutDashboard;
              const bgImage =
                DOMAIN_IMAGES[domain.id] ||
                "/images/courses/lessons/abstract-data-flow.jpg";

              return (
                <Link
                  key={domain.id}
                  href={resourcePaths.promptDomain(domain.id)}
                  className="shrink-0 w-52 group"
                >
                  <Card className="h-full border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                    {/* Image Top */}
                    <div className="h-24 w-full relative overflow-hidden">
                      <Image
                        src={bgImage}
                        alt={domain.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                      <IconComponent className="absolute bottom-3 right-3 w-6 h-6 text-white drop-shadow-md" />
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {domain.categories.length} categories
                      </p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Prompts Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">
              {searchQuery || selectedDifficulty || selectedTool
                ? `Results (${filteredPrompts.length})`
                : "Recommended for you"}
            </h2>
            {(searchQuery || selectedDifficulty || selectedTool) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty(null);
                  setSelectedTool(null);
                }}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Clear filters
              </Button>
            )}
          </div>

          {/* Prompts Grid - Compact 2-column layout */}
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {filteredPrompts.map((prompt) => (
                <Link
                  key={prompt.id}
                  href={resourcePaths.prompt(prompt.id)}
                  className="group"
                >
                  <Card className="h-full border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200 overflow-hidden">
                    <div className="p-3">
                      <h3 className="text-sm font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {prompt.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {prompt.description}
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <BarChart2 className="w-3 h-3" />
                          <span className="capitalize">
                            {prompt.difficulty}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            /* Empty State */
            <Card className="text-center py-16 rounded-lg border-dashed">
              <div className="pt-6">
                <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg mb-2 font-semibold">No prompts found</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                  Try adjusting your search or filters to find what you&apos;re
                  looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDifficulty(null);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            </Card>
          )}

          {/* View More Button (Bottom of section) */}
          <div className="mt-8 flex justify-center">
            <Link href={resourceRoutes.prompts} className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 group"
              >
                View more prompts
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PlatformPageShell>
  );
}
