import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    caption: "Languages used for systems, applications, and data work",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "C" },
      { name: "SQL" },
    ],
  },
  {
    id: "full-stack",
    label: "Full Stack",
    caption: "Interfaces, services, and application delivery",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Next.js" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "systems",
    label: "Systems & APIs",
    caption: "Asynchronous, concurrent, and integrated workflows",
    skills: [
      { name: "API Integrations" },
      { name: "Serverless Systems" },
      { name: "Scheduled Jobs" },
      { name: "Node.js Streams" },
      { name: "Concurrency" },
      { name: "Rate Limiting" },
      { name: "Retries" },
      { name: "Authentication / JWT" },
    ],
  },
  {
    id: "data-cloud",
    label: "Data & Cloud",
    caption: "Persistence, storage, caching, and edge runtime work",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "AWS S3" },
      { name: "GCS" },
      { name: "Cloudflare Workers" },
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    caption: "Containers, collaboration, and operational tooling",
    skills: [
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Azure Repos" },
      { name: "Linux CLI" },
      { name: "Postman" },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    caption: "How I reason about systems and delivery",
    skills: [
      { name: "Production Debugging" },
      { name: "Failure Handling" },
      { name: "System Design" },
      { name: "Data Structures & Algorithms" },
      { name: "Cross-Functional Delivery" },
      { name: "AI-Assisted Development" },
    ],
  },
];
