/**
 * LearnCourseProgramOverview
 *
 * PURPOSE: Premium wrapper for the course syllabus accordion.
 *
 * CONTEXT:
 * This section uses native disclosure UI so the landing page stays largely
 * server-rendered and ships less hydration work on high-intent routes.
 */

import type { CourseLandingData } from "@/types/course-landing";
import LearnCourseSectionIntro from "./LearnCourseSectionIntro";

interface LearnCourseProgramOverviewProps {
  course: CourseLandingData;
  totalLessons: number;
  totalHours: number;
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0 && mins > 0) return `${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h`;
  return `${mins}m`;
}

export default function LearnCourseProgramOverview({
  course,
  totalLessons,
  totalHours,
}: LearnCourseProgramOverviewProps) {
  const getChapterTags = (lessonTitles: string[]) =>
    lessonTitles
      .slice(0, 4)
      .map((title) => title.replace(/[:,-].*$/, "").trim())
      .filter(Boolean);

  return (
    <section id="program-overview" className="bg-white py-18 scroll-mt-24">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-[#F4F8FC]/10 bg-[#16140C] px-6 py-9 text-[#F4F8FC] shadow-[0_18px_40px_rgba(15,23,42,0.16)] sm:px-8 md:px-9 md:py-10">
          <LearnCourseSectionIntro
            eyebrow={course.landingPage.programOverview.eyebrow}
            title={course.landingPage.programOverview.heading}
            body={`${course.landingPage.programOverview.body} ${totalLessons} lessons across about ${totalHours} hours of learning.`}
            theme="dark"
          />

          <div className="mt-8 divide-y divide-white/14 border-t border-white/14">
            {course.chapters.map((chapter, index) => {
              const chapterMinutes = chapter.lessons.reduce(
                (sum, lesson) => sum + lesson.estimatedMinutes,
                0,
              );
              const chapterTags = getChapterTags(chapter.lessons.map((lesson) => lesson.title));

              return (
                <details
                  key={chapter.id}
                  className="group py-6"
                  open={index === 0}
                >
                  <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                    <div className="grid gap-4 text-left md:grid-cols-[62px_minmax(0,1fr)]">
                      <span className="font-serif-display text-3xl leading-none text-[#F4F8FC]/92">
                        {index + 1}
                      </span>

                      <div>
                        <h3 className="text-[1.25rem] font-medium leading-tight tracking-tight text-[#F4F8FC]">
                          {chapter.title}
                        </h3>
                        <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#F4F8FC]/70">
                          {chapter.lessons.length} lessons · {formatDuration(chapterMinutes)}
                        </p>
                        {chapter.description ? (
                          <p className="mt-4 max-w-3xl text-base leading-7 text-[#F4F8FC]/82">
                            {chapter.description}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-start md:justify-end">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#007AFF] text-2xl font-light text-white shadow-[0_0_0_1px_rgba(0,122,255,0.24)] transition-transform duration-150 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </summary>

                  <div className="mt-5 pl-0 md:pl-[62px]">
                      <div className="mb-5 flex flex-wrap gap-2">
                        {chapterTags.map((tag) => (
                          <span
                            key={`${chapter.id}-${tag}`}
                            className="rounded-full border border-[#F4F8FC]/10 bg-[#F4F8FC]/7 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#F4F8FC]/78"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {chapter.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lesson.id}
                          className="grid gap-3 border-t border-[#F4F8FC]/10 px-0 py-3 md:grid-cols-[64px_minmax(0,1fr)_90px] md:items-center"
                        >
                          <span className="text-sm font-medium text-[#F4F8FC]/60">
                            {index + 1}.{lessonIndex + 1}
                          </span>
                          <span className="text-base text-[#F4F8FC]/92">{lesson.title}</span>
                          <span className="text-sm text-[#F4F8FC]/68">
                            {formatDuration(lesson.estimatedMinutes)}
                          </span>
                        </div>
                      ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
