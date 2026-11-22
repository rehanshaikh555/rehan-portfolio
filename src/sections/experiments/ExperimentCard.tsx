import type { ExperimentItem } from "@/data/experiments";

type ExperimentCardProps = {
  experiment: ExperimentItem;
};

export default function ExperimentCard({
  experiment,
}: ExperimentCardProps) {
  return (
    <article className="experiment-card">
      <div className="experiment-card__top">
        <span>/{experiment.number}</span>
        <span className="experiment-card__status">
          <i />
          {experiment.status}
        </span>
      </div>

      <div className="experiment-card__body">
        <p className="experiment-card__category">{experiment.category}</p>
        <h3>{experiment.title}</h3>
        <p className="experiment-card__description">
          {experiment.description}
        </p>
      </div>

      <div className="experiment-card__concepts">
        {experiment.concepts.map((concept) => (
          <span key={concept}>{concept}</span>
        ))}
      </div>
    </article>
  );
}
