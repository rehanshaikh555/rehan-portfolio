import { researchObjectives } from "@/data/research-profile";

export default function ResearchObjectives() {
  return (
    <section className="research-objectives container-main">
      <div className="research-section-label">
        <span>03</span>
        <span>RESEARCH OBJECTIVES</span>
      </div>

      <div className="research-objectives__heading">
        <h2>What the study examines<span>.</span></h2>
        <p>
          The investigation is organised around four connected areas of
          measurement and interpretation.
        </p>
      </div>

      <div className="research-objectives__list">
        {researchObjectives.map((objective) => (
          <article className="research-objective" key={objective.number}>
            <span className="research-objective__number">
              /{objective.number}
            </span>
            <h3>{objective.title}</h3>
            <p>{objective.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
