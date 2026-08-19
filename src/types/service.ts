import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  name: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
}

