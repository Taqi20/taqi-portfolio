export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Strengths", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Read", href: "/read" },
];

export const footerLinks: { label: string; links: NavLink[] }[] = [
  {
    label: "Sections",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Tech Stack", href: "#tech" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Core",
    links: [
      { label: "Full Stack", href: "#services" },
      { label: "Data Pipelines", href: "#services" },
      { label: "Serverless", href: "#services" },
      { label: "APIs", href: "#services" },
    ],
  },
  {
    label: "More",
    links: [
      { label: "Resume", href: "/resume" },
      { label: "GitHub", href: "https://github.com/Taqi20", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/taqi20",
        external: true,
      },
    ],
  },
];

export const sectionOrder: { id: string; label: string }[] = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Strengths" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Contact" },
];
