import type { ProjectItem } from "@/data/projects";
import ProjectStatusLabel from "./ProjectStatus";

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__number">/{project.number}</span>
        <ProjectStatusLabel status={project.status} />
      </div>

      <div className="project-card__content">
        <p className="project-card__category">{project.category}</p>
        <h2 className="project-card__title">{project.name}</h2>
        <p className="project-card__description">{project.description}</p>
      </div>

      <div className="project-card__details">
        <div>
          <span className="project-card__label">THE CHALLENGE</span>
          <p>{project.problem}</p>
        </div>
        <div>
          <span className="project-card__label">THE APPROACH</span>
          <p>{project.approach}</p>
        </div>
      </div>

      <div className="project-card__footer">
        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <span className="project-card__year">{project.year}</span>
      </div>
    </article>
  );
}
