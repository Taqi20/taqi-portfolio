export interface Experience {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  stack: string[];
  impact?: {
    metric: string;
    label: string;
  }[];
  githubLinks?: {
    label: string;
    href: string;
  }[];
  link?: string;
}
