import type {
  CourseLandingData,
  CourseLandingRenderOptions,
  RelatedCourseItem,
} from "@/types/course-landing";
import LearnCourseBenefitRail from "./LearnCourseBenefitRail";
import LearnCourseCertificateSection from "./LearnCourseCertificateSection";
import LearnCourseDriverSection from "./LearnCourseDriverSection";
import LearnCourseFaq from "./LearnCourseFaq";
import LearnCourseHero from "./LearnCourseHero";
import LearnCourseProgramOverview from "./LearnCourseProgramOverview";
import LearnCourseRelatedRail from "./LearnCourseRelatedRail";
import LearnCourseSkillsGrid from "./LearnCourseSkillsGrid";
import LearnCourseWhyNow from "./LearnCourseWhyNow";

interface LearnCoursePageTemplateProps {
  course: CourseLandingData;
  relatedCourses: RelatedCourseItem[];
  renderOptions?: CourseLandingRenderOptions;
}

export default function LearnCoursePageTemplate({
  course,
  relatedCourses,
  renderOptions,
}: LearnCoursePageTemplateProps) {
  const showRelatedCourses = renderOptions?.showRelatedCourses ?? true;
  const totalLessons = course.chapters.reduce(
    (count, chapter) => count + chapter.lessons.length,
    0,
  );
  const totalHours = Math.round((course.estimatedMinutes / 60) * 10) / 10;

  return (
    <>
      <LearnCourseHero course={course} />
      <LearnCourseBenefitRail benefits={course.landingPage.benefits} />
      <LearnCourseSkillsGrid course={course} />
      <LearnCourseWhyNow course={course} />
      <LearnCourseProgramOverview
        course={course}
        totalLessons={totalLessons}
        totalHours={totalHours}
      />
      <LearnCourseDriverSection
        positioning={course.landingPage.platformPositioning}
        sections={course.landingPage.proofSections}
      />
      <LearnCourseCertificateSection course={course} />
      {showRelatedCourses ? (
        <LearnCourseRelatedRail
          currentSlug={course.landingPage.slug}
          relatedCourses={relatedCourses}
        />
      ) : null}
      <LearnCourseFaq items={course.landingPage.faqs} />
    </>
  );
}
