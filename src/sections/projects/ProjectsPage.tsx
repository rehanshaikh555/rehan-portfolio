import ProjectsHero from "./ProjectsHero";
import ProjectsArchive from "./ProjectsArchive";
import ProjectsClosing from "./ProjectsClosing";
import "./projects.css";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <ProjectsHero />
      <ProjectsArchive />
      <ProjectsClosing />
    </div>
  );
}
