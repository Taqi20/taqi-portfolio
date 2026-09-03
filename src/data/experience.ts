import type { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    company: "Fynd",
    role: "Software Development Engineer (SDE) Intern",
    start: "Nov 2025",
    end: "Present",
    current: true,
    summary:
      "Building and deploying production Node.js systems across data migration, order tracking, customer communication, and platform extensions.",
    achievements: [
      "Independently built and deployed a Node.js migration pipeline for 5M+ customer profiles, addresses, and reward balances, helping existing users retain their accounts on the new platform.",
      "Streamed CSV data from AWS S3 with chunked concurrency, validation, duplicate handling, API rate-limit controls, retries, and GCS archiving.",
      "Built and deployed a serverless order-tracking system processing 12K+ orders a day; scheduled Node.js work reads PostgreSQL-backed active orders, polls external status APIs concurrently, and updates customer-facing tracking data.",
      "Built the customer email flow across the order lifecycle from Figma designs using dynamic JavaScript templates and webhooks, plus recurring CSV export automation to AWS S3.",
      "Contributed production code across four projects, including delivery-partner assignment and refund extensions; raised Azure Repos PRs, deployed serverless components, and trained L1 support.",
    ],
    stack: [
      "Node.js",
      "JavaScript",
      "PostgreSQL",
      "AWS S3",
      "GCS",
      "Serverless",
      "REST APIs",
      "Node.js Streams",
      "Concurrency",
      "Retries",
      "Rate Limiting",
      "Azure Repos",
    ],
    impact: [
      { metric: "5M+", label: "Customer records migrated" },
      { metric: "12K+", label: "Orders tracked per day" },
      { metric: "4", label: "Production projects contributed to" },
    ],
  },
  {
    company: "VoltPay",
    role: "Personal Project · Peer-to-Peer Payment System",
    start: "Personal",
    end: "Project",
    summary:
      "A peer-to-peer payment system built around ACID transactions and a separate bank-webhook service for consistent balance updates.",
    achievements: [
      "Implemented peer-to-peer payment flows using ACID transactions.",
      "Kept balance updates consistent with a separate bank-webhook service.",
      "Built the system with Node.js, PostgreSQL, Prisma, and Docker.",
    ],
    stack: ["Node.js", "PostgreSQL", "Prisma", "Docker", "Webhooks", "ACID Transactions"],
    githubLinks: [
      { label: "VoltPay", href: "https://github.com/Taqi20/wallet" },
    ],
    impact: [
      { metric: "ACID", label: "Transaction consistency focus" },
      { metric: "P2P", label: "Payment flow" },
      { metric: "Docker", label: "Containerized setup" },
    ],
  },
  {
    company: "Madhyam",
    role: "Personal Project · AI Publishing Platform",
    start: "Personal",
    end: "Project",
    summary:
      "An edge-deployed publishing platform with Gemini-assisted draft generation and a workflow shaped around practical content creation.",
    achievements: [
      "Built Madhyam, an edge-deployed publishing platform with Gemini-assisted draft generation using TypeScript, React, and Cloudflare Workers.",
      "Used this project to practise product flow, API integration, data persistence, and full stack delivery.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Cloudflare Workers",
      "Gemini API",
    ],
    githubLinks: [
      { label: "Madhyam", href: "https://github.com/Taqi20/blog" },
    ],
    impact: [
      { metric: "1", label: "Full stack product" },
      { metric: "AI", label: "Assisted publishing workflow" },
      { metric: "Edge", label: "Cloudflare Workers deployment" },
    ],
  },
  {
    company: "TaskFlow",
    role: "Personal Project · Task Management Application",
    start: "Personal",
    end: "Project",
    summary:
      "A MERN task manager with category views, REST-backed MongoDB persistence, and a focused workflow for managing tasks.",
    achievements: [
      "Built TaskFlow, a MERN task manager with category views and REST-backed MongoDB persistence.",
      "Used this project to practise product flow, API integration, data persistence, and full stack delivery.",
    ],
    stack: [
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "REST APIs",
    ],
    githubLinks: [
      { label: "TaskFlow", href: "https://github.com/Taqi20/taskflow" },
    ],
    impact: [
      { metric: "1", label: "Full stack product" },
      { metric: "REST", label: "Application data flow" },
      { metric: "MERN", label: "Product stack" },
    ],
  },
];
