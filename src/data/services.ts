import {
  Boxes,
  Cloud,
  Database,
  Gauge,
  Layers,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "production-systems",
    name: "Production System Delivery",
    description:
      "Node.js services designed, deployed, and supported around real customer-facing workflows.",
    bullets: ["Node.js", "Production debugging", "Customer workflows"],
    icon: Layers,
  },
  {
    id: "data-migration",
    name: "Data Migration Pipelines",
    description:
      "Large-scale migration work built around validation, duplicate handling, rate controls, retries, and archival.",
    bullets: ["AWS S3", "5M+ records", "GCS archival"],
    icon: Workflow,
  },
  {
    id: "serverless",
    name: "Serverless Workflows",
    description:
      "Scheduled Node.js jobs that coordinate database reads, concurrent API polling, and customer updates.",
    bullets: ["Scheduled jobs", "PostgreSQL", "Concurrency"],
    icon: Zap,
  },
  {
    id: "integrations",
    name: "API Integrations",
    description:
      "REST and webhook integrations shaped around downstream state changes and dependable system boundaries.",
    bullets: ["REST APIs", "Webhooks", "Authentication / JWT"],
    icon: Terminal,
  },
  {
    id: "customer-lifecycle",
    name: "Customer Lifecycle Systems",
    description:
      "Order tracking, dynamic email flows, delivery-partner assignment, and refund-processing extensions.",
    bullets: ["Order tracking", "Dynamic email", "Extensions"],
    icon: Boxes,
  },
  {
    id: "reliability",
    name: "Reliability Controls",
    description:
      "Failure-aware processing through chunked concurrency, rate limiting, retry strategies, and validation.",
    bullets: ["Retries", "Rate limits", "Failure handling"],
    icon: Gauge,
  },
  {
    id: "data-cloud",
    name: "Data and Cloud",
    description:
      "Practical storage and data work across PostgreSQL, MongoDB, Redis, AWS S3, GCS, and Cloudflare Workers.",
    bullets: ["PostgreSQL", "AWS S3 / GCS", "Cloudflare Workers"],
    icon: Database,
  },
  {
    id: "full-stack",
    name: "Full Stack Products",
    description:
      "End-to-end applications spanning React interfaces, Node.js APIs, persistence, and deployment.",
    bullets: ["React", "Express", "MongoDB"],
    icon: Layers,
  },
  {
    id: "engineering",
    name: "Engineering Practice",
    description:
      "System-design thinking, production debugging, and problem solving informed by 350+ DSA questions.",
    bullets: ["System design", "DSA", "Team delivery"],
    icon: Cloud,
  },
];
