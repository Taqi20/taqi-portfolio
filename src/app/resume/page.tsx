import type { Metadata } from "next";
import { Resume } from "@/components/pages/Resume";
import { site } from "@/constants/site";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Resume — ${profile.name} · ${site.shortName}`,
  description: `One-page résumé for ${profile.name}, ${profile.role}.`,
};

export default function ResumePage() {
  return <Resume />;
}
