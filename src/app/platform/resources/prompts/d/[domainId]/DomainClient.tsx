"use client";

/**
 * DomainClient Component
 *
 * PURPOSE: Client-side component for domain detail page.
 *
 * FEATURES:
 * - Hero section with gradient + emoji
 * - Search prompts within domain
 * - Filter by category, difficulty, and AI tool
 * - Prompts organized by category with collapsible sections
 * - Prompt cards with quick copy functionality
 *
 * @see src/app/platform/resources/prompts/d/[domainId]/page.tsx
 */

import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  ExternalLink,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import PlatformPageShell from "@/components/layout/PlatformPageShell";
import { getAIToolConfig, openInAITool } from "@/lib/ai-tools/urls";
import { resourcePaths } from "@/lib/routes/resources";
import { cn } from "@/lib/utils";
import type {
  AITool,
  Prompt,
  PromptDifficulty,
  PromptDomain,
} from "@/types/resources";

interface DomainClientProps {
  domain: PromptDomain;
  prompts: Prompt[];
}

// Difficulty badge variant mapping
const difficultyVariants: Record<
  PromptDifficulty,
  "default"
> = {
  beginner: "default",
  intermediate: "default",
  advanced: "default",
};

// Tool badge colors (custom styling)
const toolColors: Record<string, string> = {
  chatgpt: "bg-emerald-50 text-emerald-700 border-emerald-200",
  claude: "bg-orange-50 text-orange-700 border-orange-200",
  gemini: "bg-blue-50 text-blue-700 border-blue-200",
  midjourney: "bg-violet-50 text-violet-700 border-violet-200",
  any: "bg-slate-50 text-slate-600 border-slate-200",
};

/**
 * DomainClient component
 *
 * Displays all prompts in a domain with search, filters, and category organization.
 */
export default function DomainClient({ domain, prompts }: DomainClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<PromptDifficulty | null>(null);
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(domain.categories.map((c) => c.id)),
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter prompts
  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          prompt.title.toLowerCase().includes(query) ||
          prompt.description.toLowerCase().includes(query) ||
          prompt.tags?.some((tag) => tag.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategory && prompt.categoryId !== selectedCategory)
        return false;

      // Difficulty filter
      if (selectedDifficulty && prompt.difficulty !== selectedDifficulty)
        return false;

      // Tool filter
      if (
        selectedTool &&
        prompt.bestTool !== selectedTool &&
        prompt.bestTool !== "any"
      )
        return false;

      return true;
    });
  }, [
    prompts,
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    selectedTool,
  ]);

  // Group prompts by category
  const promptsByCategory = useMemo(() => {
    const grouped: Record<string, Prompt[]> = {};
    domain.categories.forEach((cat) => {
      grouped[cat.id] = filteredPrompts.filter((p) => p.categoryId === cat.id);
    });
    return grouped;
  }, [filteredPrompts, domain.categories]);

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  // Copy prompt to clipboard
  const copyPrompt = async (prompt: Prompt) => {
    try {
      await navigator.clipboard.writeText(prompt.promptText);
      setCopiedId(prompt.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Total filtered count
  const totalFiltered = filteredPrompts.length;

  return (
    <PlatformPageShell railClassName="py-0">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden border-b border-border -mx-4 px-4"
        style={{
          background: domain.color
            ? `linear-gradient(135deg, ${domain.color.from}15, ${domain.color.to}15)`
            : "linear-gradient(135deg, #3B82F615, #1D4ED815)",
        }}
      >
        {/* Gradient Bar at Top */}
        <div
          className="h-1 w-full"
          style={{
            background: domain.color
              ? `linear-gradient(90deg, ${domain.color.from}, ${domain.color.to})`
              : "linear-gradient(90deg, #3B82F6, #1D4ED8)",
          }}
        />

        <div className="py-8">
          {/* Back Button */}
          <Link href="/platform/resources/prompts">
            <Button variant="ghost" size="sm" className="mb-6 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Library
            </Button>
          </Link>

          {/* Domain Header */}
          <div className="flex items-start gap-4">
            {/* Emoji Icon */}
            <div
              className="w-16 h-16 rounded-md flex items-center justify-center text-3xl shrink-0 shadow-lg"
              style={{
                background: domain.color
                  ? `linear-gradient(135deg, ${domain.color.from}, ${domain.color.to})`
                  : "linear-gradient(135deg, #3B82F6, #1D4ED8)",
              }}
            >
              {domain.icon}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-foreground mb-1">
                {domain.title}
              </h1>
              <p className="text-sm text-muted-foreground mb-3">
                {domain.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="bg-white/80 px-2 py-0.5 rounded-md border">
                  {prompts.length} prompts
                </span>
                <span>•</span>
                <span>{domain.categories.length} categories</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mt-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={`Search ${domain.title.toLowerCase()} prompts...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-white"
            />
          </div>

          {/* Filter Pills - Category */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              variant={!selectedCategory ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-md"
            >
              All Categories
            </Button>
            {domain.categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "primary" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-md"
              >
                {category.title}
              </Button>
            ))}
          </div>

          {/* Filter Pills - Difficulty */}
          <div className="flex gap-2 mt-2 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              variant={!selectedDifficulty ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty(null)}
              className="rounded-md"
            >
              All Levels
            </Button>
            {(
              ["beginner", "intermediate", "advanced"] as PromptDifficulty[]
            ).map((diff) => (
              <Button
                key={diff}
                variant={selectedDifficulty === diff ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty(diff)}
                className="rounded-md capitalize"
              >
                {diff}
              </Button>
            ))}
          </div>

          {/* Filter Pills - Tool */}
          <div className="flex gap-2 mt-2 overflow-x-auto pb-3 scrollbar-hide">
            <Button
              variant={!selectedTool ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedTool(null)}
              className="rounded-md"
            >
              Any Tool
            </Button>
            {(["chatgpt", "claude", "gemini", "midjourney"] as AITool[]).map(
              (tool) => (
                <Button
                  key={tool}
                  variant={selectedTool === tool ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTool(tool)}
                  className="rounded-md capitalize"
                >
                  {tool}
                </Button>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-6">
        {/* Results Count */}
        {(searchQuery ||
          selectedCategory ||
          selectedDifficulty ||
          selectedTool) && (
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {totalFiltered} {totalFiltered === 1 ? "prompt" : "prompts"} found
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
                setSelectedDifficulty(null);
                setSelectedTool(null);
              }}
              className="text-xs"
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Prompts by Category */}
        {totalFiltered > 0 ? (
          <div className="space-y-3">
            {domain.categories.map((category) => {
              const categoryPrompts = promptsByCategory[category.id] || [];
              if (categoryPrompts.length === 0) return null;

              const isExpanded = expandedCategories.has(category.id);

              return (
                <Card key={category.id} className="overflow-hidden rounded-md">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-sm font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <Badge variant="default" className="text-xs rounded-md">
                        {categoryPrompts.length}
                      </Badge>
                    </div>
                    <div
                      className={cn(
                        "p-1 rounded-md transition-colors",
                        isExpanded ? "bg-muted" : "",
                      )}
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {/* Category Prompts */}
                  {isExpanded && (
                    <div className="border-t border-border divide-y divide-border">
                      {categoryPrompts.map((prompt) => (
                        <div
                          key={prompt.id}
                          className="p-4 hover:bg-muted/30 transition-colors group"
                        >
                          {/* Prompt Header */}
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <Link
                              href={resourcePaths.prompt(prompt.id)}
                              className="flex-1 min-w-0"
                            >
                              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                {prompt.title}
                              </h4>
                            </Link>
                            <Badge
                              variant={difficultyVariants[prompt.difficulty]}
                              className="shrink-0 text-[10px] capitalize rounded-md"
                            >
                              {prompt.difficulty}
                            </Badge>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                            {prompt.description}
                          </p>

                          {/* Tags and Actions */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge
                                variant="default"
                                className={cn(
                                  "text-[10px] rounded-md border",
                                  toolColors[prompt.bestTool],
                                )}
                              >
                                {prompt.bestTool === "any"
                                  ? "Any tool"
                                  : prompt.bestTool}
                              </Badge>
                              {prompt.tags?.slice(0, 2).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="default"
                                  className="text-[10px] rounded-md"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {/* Quick Actions */}
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => copyPrompt(prompt)}
                                title="Copy prompt"
                                className="rounded-md"
                              >
                                {copiedId === prompt.id ? (
                                  <Check className="w-3.5 h-3.5 text-green-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </Button>
                              {prompt.bestTool !== "any" && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    openInAITool(
                                      prompt.bestTool,
                                      prompt.promptText,
                                    )
                                  }
                                  title={`Open in ${getAIToolConfig(prompt.bestTool).name}`}
                                  className="rounded-md"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </Button>
                              )}
                              <Link href={resourcePaths.prompt(prompt.id)}>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="rounded-md h-7 text-xs"
                                >
                                  View
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <Card className="text-center py-16 rounded-md">
            <div className="pt-6">
              <div className="w-14 h-14 rounded-md bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="text-base mb-2 font-semibold">No prompts found</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-4">
                Try adjusting your search or filters to find what you&apos;re
                looking for.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                  setSelectedDifficulty(null);
                  setSelectedTool(null);
                }}
              >
                Clear all filters
              </Button>
            </div>
          </Card>
        )}
      </div>
    </PlatformPageShell>
  );
}
