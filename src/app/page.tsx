import type { Metadata } from "next";
import { Landing } from "@/components/pages/Landing";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function Home() {
  return <Landing />;
}
