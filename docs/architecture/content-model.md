# Content Model

The curriculum is stored as typed TypeScript files rather than in a separate content management system. This approach ensures strong typing for lesson structure and metadata, enables version control for all curriculum changes, and eliminates dependencies on external editorial infrastructure.

## Hierarchy

The content is organized in a three-level hierarchy:

1. **Module** — A thematic unit of instruction (e.g., AI Fundamentals, Prompt Engineering, ChatGPT Mastery). The platform contains 10 modules with 214 total lessons.
2. **Chapter** — A logical grouping of lessons within a module, typically representing a subtopic or progression stage.
3. **Lesson** — The atomic unit of learning. Each lesson is approximately 15 minutes and contains article-based content with optional inline elements.

Each lesson belongs to exactly one chapter, and each chapter belongs to exactly one module.

## Lesson Composition

Lessons are composed of typed content sections. The primary format is article-based, consisting of:

- Text sections with Markdown rendering
- Image sections with contextual captions
- Inline quiz checkpoints for knowledge verification
- Task sections for applied practice
- XP rewards upon completion

Quizzes and tasks extend the article rather than replacing it. The content type definitions are declared in `src/types/content.ts`.

## Content Registry

The main content registry is defined in `src/data/content/index.ts`. It exports the complete module catalog and provides helper functions for looking up modules, chapters, and lessons by identifier. The personalization algorithm references module identifiers from this registry when constructing recommended paths.

Module content files are organized by directory under `src/data/content/modules/`, with one subdirectory per module containing chapter index files and individual lesson files.

## Code Locations

| Area | Path |
| ---- | ---- |
| Content registry and helpers | `src/data/content/index.ts` |
| Module definitions | `src/data/content/modules/` |
| Content type definitions | `src/types/content.ts` |
| Lesson rendering components | `src/components/platform/lessons/` |
