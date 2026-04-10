/**
 * ============================================================================
 * LESSON JOURNEY CLIENT COMPONENT
 * ============================================================================
 * Client-side interactivity for the module journey page.
 * Receives pre-fetched data from server component to prevent flash.
 *
 * REDESIGN (v2):
 * - Honeycomb/Diamond Grid Pattern
 * - Grouped Lessons (Pairs and Singles)
 * - Row 1: Pair (Left, Right)
 * - Row 2: Center
 * - Row 3: Pair (Left, Right)
 * - Row 4: Center
 * - SINGLE TRAIL: L->R -> Center -> L->R -> Center...
 *
 * ============================================================================
 */

"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  generateCertificate,
  getCertificate,
} from "@/app/platform/certificates/actions";
import PlatformPageShell from "@/components/layout/PlatformPageShell";
import type { LessonFromAPI } from "@/components/platform/lessons";
import {
  CertificateSidebar,
  ChapterCard,
  LessonNode,
} from "@/components/platform/lessons";
import { platformPaths } from "@/lib/routes/platform";
import {
  isLastModule as checkIsLastModule,
  getNextModuleId,
} from "@/lib/utils/module-utils";
import type { LessonSlide } from "@/types/content";
import type { LessonCompletionStatus, LessonStatus } from "@/types/progress";

export interface LessonWithStatus {
  id: string;
  title: string;
  description: string;
  chapterId: string;
  status: LessonStatus;
  completionStatus?: LessonCompletionStatus;
}

interface Module {
  id: string;
  title: string;
  description: string | null;
  category: string;
  color: string | null;
  icon: string | null;
  totalLessons: number;
  estimatedMinutes: number;
  chapters: Array<{
    id: string;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      chapterId: string;
      description: string;
      estimatedMinutes: number;
      xpReward: number;
      status: string;
      slides: LessonSlide[];
    }>;
  }>;
}

interface LessonJourneyClientProps {
  module?: Module;
  lessonsWithStatus: LessonWithStatus[];
  completedCount: number;
  totalCount: number;
  moduleId: string;
  notFound?: boolean;
}

export function LessonJourneyClient({
  module,
  lessonsWithStatus,
  completedCount,
  totalCount,
  moduleId,
  notFound,
}: LessonJourneyClientProps) {
  const router = useRouter();

  const [selectedLesson, setSelectedLesson] = useState<LessonFromAPI | null>(
    null,
  );
  const [selectedLessonStatus, setSelectedLessonStatus] =
    useState<LessonStatus>("unlocked");

  // Certificate state
  const [certificateData, setCertificateData] = useState<{
    userName: string;
    moduleName: string;
    completedAt: Date;
    certificateId: string;
    xpEarned: number;
  } | null>(null);
  const [, setIsCertificateModalOpen] = useState(false);
  const [hasGeneratedCertificate, setHasGeneratedCertificate] = useState(false);

  // Refs for scrolling
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lessonNodeRefs = useRef<Map<string, HTMLButtonElement | null>>(
    new Map(),
  );
  const hasScrolledRef = useRef(false);

  // Check completion
  const isModuleComplete = completedCount === totalCount && totalCount > 0;

  // Auto-scroll
  useEffect(() => {
    if (hasScrolledRef.current) return;
    if (isModuleComplete) {
      hasScrolledRef.current = true;
      return;
    }

    const inProgressLesson = lessonsWithStatus.find(
      (l) => l.status === "in_progress",
    );
    const firstUnlockedLesson = lessonsWithStatus.find(
      (l) => l.status === "unlocked",
    );
    const targetLesson = inProgressLesson || firstUnlockedLesson;

    if (targetLesson) {
      hasScrolledRef.current = true;
      setTimeout(() => {
        lessonNodeRefs.current
          .get(targetLesson.id)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, [lessonsWithStatus, isModuleComplete]);

  const nextModuleId = useMemo(() => getNextModuleId(moduleId), [moduleId]);
  const isLastModuleVar = useMemo(
    () => checkIsLastModule(moduleId),
    [moduleId],
  );

  // Certificate Logic
  useEffect(() => {
    if (isModuleComplete && !hasGeneratedCertificate && module) {
      const generateAndShowCertificate = async () => {
        try {
          const result = await generateCertificate(moduleId);
          if (result.success && result.certificate) {
            setCertificateData({
              userName: "User",
              moduleName: result.certificate.moduleName,
              completedAt: new Date(result.certificate.completedAt),
              certificateId: result.certificate.certificateId,
              xpEarned: result.certificate.xpEarned,
            });
            setHasGeneratedCertificate(true);
            setTimeout(() => setIsCertificateModalOpen(true), 500);
          }
        } catch (error) {
          console.error(error);
        }
      };
      generateAndShowCertificate();
    }
  }, [isModuleComplete, hasGeneratedCertificate, moduleId, module]);

  useEffect(() => {
    if (!isModuleComplete) return;
    const fetchExistingCertificate = async () => {
      try {
        const certificate = await getCertificate(moduleId);
        if (certificate) {
          setCertificateData({
            userName: "User",
            moduleName: certificate.moduleName,
            completedAt: new Date(certificate.completedAt),
            certificateId: certificate.certificateId,
            xpEarned: certificate.xpEarned,
          });
          setHasGeneratedCertificate(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchExistingCertificate();
  }, [moduleId, isModuleComplete]);

  // Lookups - MUST be before early return (React hooks rules)
  const lessonIndexById = useMemo(
    () => new Map(lessonsWithStatus.map((l, i) => [l.id, i])),
    [lessonsWithStatus],
  );
  const nextLessonId = useMemo(
    () =>
      (
        lessonsWithStatus.find(
          (l) => l.status === "in_progress" || l.status === "unlocked",
        ) || null
      )?.id ?? null,
    [lessonsWithStatus],
  );

  if (notFound || !module) return <div>Module not found</div>;

  // Handlers
  const handleLessonClick = (lesson: LessonFromAPI, status: LessonStatus) => {
    if (selectedLesson?.id === lesson.id) {
      setSelectedLesson(null);
      setSelectedLessonStatus("unlocked");
    } else {
      setSelectedLesson(lesson);
      setSelectedLessonStatus(status);
    }
  };

  const handleStartLesson = () => {
    if (!selectedLesson) return;
    const restart = selectedLessonStatus === "completed";
    router.push(
      platformPaths.lesson(
        moduleId,
        selectedLesson.id,
        restart ? { restart: true } : undefined,
      ),
    );
    setSelectedLesson(null);
    setSelectedLessonStatus("unlocked");
  };

  const handleClosePopover = () => {
    setSelectedLesson(null);
    setSelectedLessonStatus("unlocked");
  };

  const handleChapterClick = (chapterIndex: number) => {
    chapterRefs.current[chapterIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Lookups
  const lessonStatusMap = new Map(
    lessonsWithStatus.map((l) => [l.id, l.status]),
  );
  const lessonCompletionStatusMap = new Map(
    lessonsWithStatus.map((l) => [l.id, l.completionStatus]),
  );

  // ==========================================
  // PATTERN & GROUPING LOGIC
  // ==========================================

  // Group lessons into rows: Pattern [2, 1, 2, 1...]
  // Returns: { type: 'pair' | 'single', lessons: LessonFromAPI[] }[]
  const groupLessonsIntoRows = (lessons: LessonFromAPI[]) => {
    const rows: { type: "pair" | "single"; lessons: LessonFromAPI[] }[] = [];
    let patternIndex = 0; // 0=Pair, 1=Single

    let i = 0;
    while (i < lessons.length) {
      if (patternIndex % 2 === 0) {
        // PAIR ROW
        const lesson1 = lessons[i];
        const lesson2 = lessons[i + 1];

        if (lesson2) {
          // Standard Pair
          rows.push({ type: "pair", lessons: [lesson1, lesson2] });
          i += 2;
        } else {
          // Orphan Pair (only 1 left but it's a Pair row)
          // We mark it as 'pair' so it renders on the Left (first slot of grid)
          rows.push({ type: "pair", lessons: [lesson1] });
          i += 1;
        }
      } else {
        // SINGLE ROW
        rows.push({ type: "single", lessons: [lessons[i]] });
        i += 1;
      }
      patternIndex++;
    }
    return rows;
  };

  // Helper to render connectors between rows
  const renderRowConnector = (
    rowIndex: number,
    rows: { type: "pair" | "single"; lessons: LessonFromAPI[] }[],
  ) => {
    if (rowIndex >= rows.length - 1) return null;

    const currentRow = rows[rowIndex];
    const nextRow = rows[rowIndex + 1];

    const isCurrentPair = currentRow.type === "pair";
    const isNextPair = nextRow.type === "pair";

    // Check if current pair is full (has 2 items) or orphaned (1 item, Left)
    const currentPairIsFull = isCurrentPair && currentRow.lessons.length === 2;
    const lineProps = {
      stroke: "#E5E7EB", // gray-200
      strokeWidth: "4",
      strokeDasharray: "0 12", // Dot with gap
      strokeLinecap: "round" as const,
      fill: "none",
    };

    return (
      <div
        className="absolute top-1/2 left-0 w-full h-32 pointer-events-none z-0"
        style={{ top: "50%" }}
      >
        <svg className="w-full h-full" width="100%" height="100%">
          {isCurrentPair && !isNextPair && (
            // Pair -> Center
            <>
              {/* Right connects to Center */}
              {currentPairIsFull && (
                <>
                  <line x1="75%" y1="0" x2="75%" y2="50%" {...lineProps} />
                  <line x1="75%" y1="50%" x2="50%" y2="50%" {...lineProps} />
                  <line x1="50%" y1="50%" x2="50%" y2="100%" {...lineProps} />
                </>
              )}
              {/* Orphaned Left connects to Center */}
              {!currentPairIsFull && (
                <>
                  <line x1="25%" y1="0" x2="25%" y2="50%" {...lineProps} />
                  <line x1="25%" y1="50%" x2="50%" y2="50%" {...lineProps} />
                  <line x1="50%" y1="50%" x2="50%" y2="100%" {...lineProps} />
                </>
              )}
            </>
          )}

          {!isCurrentPair && isNextPair && (
            // Center -> Pair (Left)
            <>
              <line x1="50%" y1="0" x2="50%" y2="50%" {...lineProps} />
              <line x1="50%" y1="50%" x2="25%" y2="50%" {...lineProps} />
              <line x1="25%" y1="50%" x2="25%" y2="100%" {...lineProps} />
            </>
          )}

          {!isCurrentPair && !isNextPair && (
            // Center -> Center
            <line x1="50%" y1="0" x2="50%" y2="100%" {...lineProps} />
          )}

          {isCurrentPair && isNextPair && (
            // Pair -> Pair (Orphan logic fallback)
            <>
              {currentPairIsFull ? (
                // Right -> Left (Zig-zag)
                <>
                  <line x1="75%" y1="0" x2="75%" y2="50%" {...lineProps} />
                  <line x1="75%" y1="50%" x2="25%" y2="50%" {...lineProps} />
                  <line x1="25%" y1="50%" x2="25%" y2="100%" {...lineProps} />
                </>
              ) : (
                // Left -> Left (Straight)
                <line x1="25%" y1="0" x2="25%" y2="100%" {...lineProps} />
              )}
            </>
          )}
        </svg>
      </div>
    );
  };

  // Helper for intra-row connectors (Left -> Right)
  const renderIntraRowConnector = () => {
    const lineProps = {
      stroke: "#E5E7EB", // gray-200
      strokeWidth: "4",
      strokeDasharray: "0 12", // Dot with gap
      strokeLinecap: "round" as const,
      fill: "none",
    };

    return (
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg className="w-full h-full" width="100%" height="100%">
          {/* L(25) -> R(75) at 50% height */}
          <line x1="25%" y1="50%" x2="75%" y2="50%" {...lineProps} />
        </svg>
      </div>
    );
  };

  return (
    <PlatformPageShell className="pb-20" railClassName="pt-6 relative">
      <div className="flex flex-col gap-0">
        {module.chapters.map((chapter, chapterIdx) => {
          const rows = groupLessonsIntoRows(chapter.lessons);

          return (
            <React.Fragment key={chapter.id}>
              {/* Chapter Header */}
              <div
                ref={(el) => {
                  chapterRefs.current[chapterIdx] = el;
                }}
                onClick={() => handleChapterClick(chapterIdx)}
                className="w-full py-6 cursor-pointer relative z-10"
              >
                <ChapterCard chapter={chapter} chapterIndex={chapterIdx} />
              </div>

              {/* Rows */}
              <div className="flex flex-col w-full pb-8">
                {rows.map((row, rowIdx) => {
                  const isPair = row.type === "pair";

                  return (
                    <div key={rowIdx} className="relative w-full h-32">
                      {/* Connector to Next Row */}
                      {renderRowConnector(rowIdx, rows)}

                      {/* Intra-Row Connector (Left -> Right) */}
                      {isPair &&
                        row.lessons.length === 2 &&
                        renderIntraRowConnector()}

                      {/* Nodes Container */}
                      <div className="absolute inset-0 w-full h-full">
                        {isPair ? (
                          // Pair Row (Left & Right)
                          <div className="w-full h-full grid grid-cols-2">
                            {/* Left Node */}
                            <div className="flex justify-center items-center relative">
                              <NodeRenderer
                                lesson={row.lessons[0]}
                                chapter={chapter}
                                lessonStatusMap={lessonStatusMap}
                                lessonCompletionStatusMap={
                                  lessonCompletionStatusMap
                                }
                                lessonIndexById={lessonIndexById}
                                selectedLesson={selectedLesson}
                                nextLessonId={nextLessonId}
                                handlers={{
                                  onClick: handleLessonClick,
                                  onStart: handleStartLesson,
                                  onClose: handleClosePopover,
                                  ref: lessonNodeRefs,
                                }}
                                position="left"
                              />
                            </div>
                            {/* Right Node (if exists) */}
                            <div className="flex justify-center items-center relative">
                              {row.lessons[1] ? (
                                <NodeRenderer
                                  lesson={row.lessons[1]}
                                  chapter={chapter}
                                  lessonStatusMap={lessonStatusMap}
                                  lessonCompletionStatusMap={
                                    lessonCompletionStatusMap
                                  }
                                  lessonIndexById={lessonIndexById}
                                  selectedLesson={selectedLesson}
                                  nextLessonId={nextLessonId}
                                  handlers={{
                                    onClick: handleLessonClick,
                                    onStart: handleStartLesson,
                                    onClose: handleClosePopover,
                                    ref: lessonNodeRefs,
                                  }}
                                  position="right"
                                />
                              ) : (
                                /* Empty spacer for grid alignment */
                                <div />
                              )}
                            </div>
                          </div>
                        ) : (
                          // Single Row (Center)
                          <div className="w-full h-full flex justify-center items-center relative">
                            <NodeRenderer
                              lesson={row.lessons[0]}
                              chapter={chapter}
                              lessonStatusMap={lessonStatusMap}
                              lessonCompletionStatusMap={
                                lessonCompletionStatusMap
                              }
                              lessonIndexById={lessonIndexById}
                              selectedLesson={selectedLesson}
                              nextLessonId={nextLessonId}
                              handlers={{
                                onClick: handleLessonClick,
                                onStart: handleStartLesson,
                                onClose: handleClosePopover,
                                ref: lessonNodeRefs,
                              }}
                              position="center"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <CertificateSidebar
        moduleId={moduleId}
        moduleName={module?.title || ""}
        completedCount={completedCount}
        totalCount={totalCount}
        isComplete={isModuleComplete}
        certificateData={certificateData}
        onViewCertificate={() =>
          certificateData && setIsCertificateModalOpen(true)
        }
        onNextModule={() =>
          nextModuleId && router.push(platformPaths.module(nextModuleId))
        }
        isLastModule={isLastModuleVar}
        hasNextModule={!!nextModuleId}
      />
    </PlatformPageShell>
  );
}

// NodeRenderer props interface
interface NodeRendererProps {
  lesson: LessonFromAPI;
  chapter: {
    id: string;
    title: string;
    lessons: Array<{ id: string }>;
  };
  lessonStatusMap: Map<string, LessonStatus>;
  lessonCompletionStatusMap: Map<string, LessonCompletionStatus | undefined>;
  lessonIndexById: Map<string, number>;
  selectedLesson: LessonFromAPI | null;
  nextLessonId: string | null;
  handlers: {
    ref: React.MutableRefObject<Map<string, HTMLButtonElement | null>>;
    onClick: (lesson: LessonFromAPI, status: LessonStatus) => void;
    onStart: () => void;
    onClose: () => void;
  };
  position: "left" | "center" | "right";
}

// Inline helper to render a node cleanly
function NodeRenderer({
  lesson,
  chapter,
  lessonStatusMap,
  lessonCompletionStatusMap,
  lessonIndexById,
  selectedLesson,
  nextLessonId,
  handlers,
  position,
}: NodeRendererProps) {
  const globalIndex = lessonIndexById.get(lesson.id) ?? 0;
  const status = lessonStatusMap.get(lesson.id) || "locked";
  const completionStatus = lessonCompletionStatusMap.get(lesson.id);
  const isSelected = selectedLesson?.id === lesson.id;
  const showStartTooltip = lesson.id === nextLessonId;
  const lessonIdxInChapter = chapter.lessons.findIndex(
    (l) => l.id === lesson.id,
  );

  // Apply z-index boost when selected to ensure tooltip appears above other elements
  // We apply this to the wrapper div returned here
  return (
    <div className={`relative ${isSelected ? "z-50" : "z-10"}`}>
      <LessonNode
        ref={(el) => {
          handlers.ref.current.set(lesson.id, el);
        }}
        lessonNumber={globalIndex + 1}
        title={lesson.title}
        status={status}
        isLast={false}
        onClick={() => handlers.onClick(lesson, status)}
        isActive={isSelected}
        showStartTooltip={showStartTooltip}
        description={lesson.description}
        onStartLesson={handlers.onStart}
        onClose={handlers.onClose}
        lessonIndexInChapter={lessonIdxInChapter + 1}
        totalLessonsInChapter={chapter.lessons.length}
        xpReward={lesson.xpReward ?? 10}
        completionStatus={completionStatus}
        position={position}
      />
    </div>
  );
}
