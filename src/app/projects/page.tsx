import type { Metadata } from "next";
import ProjectsPage from "@/sections/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore cybersecurity projects, software engineering work and research experiments by Rehan Shaikh.",
};

export default function ProjectsRoute() {
  return <ProjectsPage />;
}
