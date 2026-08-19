import type { Metadata } from "next";
import { NotFound } from "@/components/pages/NotFound";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: `404 · Not found · ${site.shortName}`,
  description: "The page you were looking for doesn't exist.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
