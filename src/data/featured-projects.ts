export type FeaturedProject = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  slug: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    name: "INOVIX",
    category: "CYBERSECURITY / THREAT INTELLIGENCE",
    description:
      "A modular security detection platform exploring threat analysis, indicator correlation and structured risk assessment.",
    technologies: ["Python", "FastAPI", "Threat Intelligence"],
    status: "PROTOTYPE / ONGOING",
    slug: "inovix",
  },
  {
    number: "02",
    name: "MEMORIAL TRUST",
    category: "SOFTWARE ENGINEERING / SAAS",
    description:
      "A multi-school trust management platform designed to bring administrative workflows and institutional data into one system.",
    technologies: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Next.js"],
    status: "IN DEVELOPMENT",
    slug: "memorial-trust",
  },
  {
    number: "03",
    name: "CAMRS",
    category: "CYBERSECURITY / RESEARCH",
    description:
      "An independent cybersecurity research and validation initiative focused on exploring security problems and practical approaches.",
    technologies: ["Security Research", "Analysis", "Prototyping"],
    status: "ONGOING INITIATIVE",
    slug: "camrs",
  },
];
