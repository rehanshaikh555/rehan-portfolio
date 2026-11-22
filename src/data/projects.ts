export type ProjectStatus =
  | "Prototype"
  | "Research submitted"
  | "In development"
  | "Ongoing initiative";

export type ProjectItem = {
  number: string;
  name: string;
  category: string;
  status: ProjectStatus;
  description: string;
  problem: string;
  approach: string;
  technologies: string[];
  year: string;
  featured: boolean;
};

export const projects: ProjectItem[] = [
  {
    number: "01",
    name: "INOVIX",
    category: "Cybersecurity · Threat Intelligence",
    status: "Prototype",
    description:
      "A modular cybersecurity intelligence and detection platform exploring how security signals can be analysed, correlated and presented through a unified workflow.",
    problem:
      "Security signals can be fragmented across different tools and sources, making investigation and correlation difficult.",
    approach:
      "Developing a modular Python security engine with analysis, detection and threat-intelligence correlation capabilities, supported by a FastAPI backend.",
    technologies: ["Python", "FastAPI", "Security Analysis", "Threat Intelligence"],
    year: "2026",
    featured: true,
  },
  {
    number: "02",
    name: "SecureTrade",
    category: "Cybersecurity Research · Quantitative Finance",
    status: "Research submitted",
    description:
      "An experimental study of receiver-side HMAC authentication overhead and queue-replay behaviour under synthetic market-data workloads.",
    problem:
      "Security checks in latency-sensitive trading systems may affect message-processing performance and queue stability.",
    approach:
      "Evaluating receiver-side authentication cost and queue behaviour using controlled synthetic workloads and run-level measurements.",
    technologies: ["Python", "HMAC", "Synthetic Workloads", "Performance Analysis"],
    year: "2026",
    featured: true,
  },
  {
    number: "03",
    name: "Memorial Trust Management",
    category: "Software Engineering · SaaS",
    status: "In development",
    description:
      "A management platform designed to support a trust operating multiple mini-schools through a unified digital system.",
    problem:
      "Managing information and administrative workflows across multiple educational units can create fragmented processes.",
    approach:
      "Building a modular web application and API foundation with structured data models and a scalable backend architecture.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Next.js"],
    year: "2026",
    featured: true,
  },
  {
    number: "04",
    name: "CAMRS",
    category: "Independent Initiative · Cybersecurity",
    status: "Ongoing initiative",
    description:
      "An independent cybersecurity research and validation initiative focused on structured technical exploration.",
    problem:
      "Security ideas need systematic investigation and validation rather than relying only on assumptions or demonstrations.",
    approach:
      "Exploring research workflows, technical validation and structured documentation. The initiative is ongoing and is not presented as a registered organisation.",
    technologies: ["Cybersecurity Research", "Technical Validation", "Documentation"],
    year: "2026",
    featured: false,
  },
];
