export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface Profile {
  name: string;
  wordmark: string;
  role: string;
  tagline: string;
  headline: {
    lead: string;
    accent: string;
    trail: string;
  };
  sub: string;
  bio: string[];
  email: string;
  location: string;
  timezone: string;
  responseTime: string;
  currentFocus: string;
  availability: "open" | "limited" | "closed";
  availabilityLabel: string;
  avatarUrl: string;
  resumeUrl: string;
  socials: SocialLink[];
  calendarUrl: string;
}

