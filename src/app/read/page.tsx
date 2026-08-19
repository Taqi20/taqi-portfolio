import type { Metadata } from "next";

import { Read } from "@/components/pages/Read";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: `Read · Coming soon · ${site.shortName}`,
  description: "Engineering notes on systems, data pipelines, reliability, and deployment.",
};

export default function ReadPage() {
  return <Read />;
}
