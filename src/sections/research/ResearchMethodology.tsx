import { researchMethodology } from "@/data/research-profile";

export default function ResearchMethodology() {
  return (
    <section className="research-methodology">
      <div className="container-main">
        <div className="research-section-label">
          <span>04</span>
          <span>EXPERIMENTAL APPROACH</span>
        </div>

        <div className="research-methodology__heading">
          <h2>From workload to evidence<span>.</span></h2>
          <p>
            A structured experimental process for observing authentication
            overhead and receiver-side queue behaviour.
          </p>
        </div>

        <div className="research-methodology__steps">
          {researchMethodology.map((step) => (
            <article className="research-method" key={step.number}>
              <span className="research-method__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
