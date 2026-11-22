import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsArchive() {
  return (
    <section className="projects-archive container-main" id="project-archive">
      <div className="projects-archive__header">
        <div>
          <span className="projects-archive__eyebrow">THE ARCHIVE</span>
          <h2>Selected work<span>.</span></h2>
        </div>
        <p>
          Each project represents a different question, challenge or area of
          technical exploration.
        </p>
      </div>

      <div className="projects-archive__grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
