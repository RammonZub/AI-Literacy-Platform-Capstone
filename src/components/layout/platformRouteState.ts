const MODULE_ROUTE_PATTERN = /^\/platform\/module\/([^/]+)$/;
const LESSON_ROUTE_PATTERN =
  /^\/platform\/module\/[^/]+\/lesson\/[^/]+(?:\/.*)?$/;

export interface PlatformRouteState {
  moduleId: string | null;
  isModuleJourneyPage: boolean;
  isLessonExperience: boolean;
}

export function getPlatformRouteState(
  pathname: string | null,
): PlatformRouteState {
  if (!pathname) {
    return {
      moduleId: null,
      isModuleJourneyPage: false,
      isLessonExperience: false,
    };
  }

  const moduleMatch = MODULE_ROUTE_PATTERN.exec(pathname);

  return {
    moduleId: moduleMatch?.[1] ?? null,
    isModuleJourneyPage: Boolean(moduleMatch),
    isLessonExperience: LESSON_ROUTE_PATTERN.test(pathname),
  };
}
