import PlatformPageShell from "@/components/layout/PlatformPageShell";
import { ProfileSkeleton } from "@/components/platform/profile";

export default function ProfileLoading() {
  return (
    <PlatformPageShell railClassName="px-6 py-8">
      <ProfileSkeleton />
    </PlatformPageShell>
  );
}
