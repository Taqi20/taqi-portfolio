import type { TechCategory } from "@/types/tech";

export const techStack: TechCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "C" },
      { name: "SQL" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "API Integrations" },
      { name: "Serverless Systems" },
    ],
  },
  {
    id: "data",
    label: "Data & Cloud",
    items: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "AWS S3" },
      { name: "GCS" },
      { name: "Cloudflare Workers" },
    ],
  },
  {
    id: "systems",
    label: "Systems",
    items: [
      { name: "Node.js Streams" },
      { name: "Concurrency" },
      { name: "Rate Limiting" },
      { name: "Retry Strategies" },
      { name: "Authentication / JWT" },
      { name: "Scheduled Jobs" },
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    items: [
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Azure Repos" },
      { name: "Linux CLI" },
      { name: "Postman" },
    ],
  },
];
