import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfileSectionLayout({ children }: { children: ReactNode }) {
  return children;
}
