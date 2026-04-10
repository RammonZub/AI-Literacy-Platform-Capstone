import PlatformPageShell from "@/components/layout/PlatformPageShell";
import { ModuleJourneySkeleton } from "@/components/platform/modules";

export default function ModuleLoading() {
  return (
    <PlatformPageShell className="pb-20" railClassName="pt-6">
      <ModuleJourneySkeleton />
    </PlatformPageShell>
  );
}
