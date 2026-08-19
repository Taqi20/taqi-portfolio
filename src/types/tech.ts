export interface TechItem {
  name: string;
  hint?: string;
}

export interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

export interface Stat {
  metric: string;
  label: string;
  suffix?: string;
}

