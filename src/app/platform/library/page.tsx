/**
 * Library Page
 *
 * PURPOSE: Full grid view of all available modules with search/filter
 *
 * CONTEXT: Accessible via "See All" from Home page. Displays all modules
 * in a grid layout with client-side search functionality.
 *
 * KEY FEATURES:
 * - Search bar for filtering by title/description
 * - Grid layout for modules (3:4 portrait cards)
 * - Clean modern gem design
 */

import PlatformPageShell from "@/components/layout/PlatformPageShell";

// Client component for search functionality
import LibraryClient from "./LibraryClient";

export default function LibraryPage() {
  const defaultImage = "/images/module-placeholder.jpg";

  return (
    <PlatformPageShell>
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Modules</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Browse all modules and open the one you want to work on next.
        </p>
      </header>

      <section>
        <LibraryClient defaultImage={defaultImage} />
      </section>
    </PlatformPageShell>
  );
}
