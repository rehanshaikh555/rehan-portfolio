import type { ProjectStatus } from "@/data/projects";

type ProjectStatusProps = {
  status: ProjectStatus;
};

const statusLabels: Record<ProjectStatus, string> = {
  Prototype: "PROTOTYPE",
  "Research submitted": "RESEARCH SUBMITTED",
  "In development": "IN DEVELOPMENT",
  "Ongoing initiative": "ONGOING INITIATIVE",
};

export default function ProjectStatusLabel({
  status,
}: ProjectStatusProps) {
  return (
    <span className="project-status">
      <span className="project-status__indicator" />
      {statusLabels[status]}
    </span>
  );
}
