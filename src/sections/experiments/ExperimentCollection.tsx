import { experiments } from "@/data/experiments";
import ExperimentCard from "./ExperimentCard";

export default function ExperimentCollection() {
  return (
    <section className="experiment-collection container-main">
      <div className="experiments-section-label">
        <span>01</span>
        <span>THE EXPLORATION INDEX</span>
      </div>

      <div className="experiment-collection__heading">
        <h2>Ideas in motion<span>.</span></h2>
        <p>
          Each experiment explores a technical concept through a small,
          focused demonstration.
        </p>
      </div>

      <div className="experiment-collection__grid">
        {experiments.map((experiment) => (
          <ExperimentCard
            key={experiment.number}
            experiment={experiment}
          />
        ))}
      </div>
    </section>
  );
}
