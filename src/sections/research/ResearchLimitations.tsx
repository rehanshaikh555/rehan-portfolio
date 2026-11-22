import { researchLimitations } from "@/data/research-profile";

export default function ResearchLimitations() {
  return (
    <section className="research-limitations">
      <div className="container-main research-limitations__layout">
        <div>
          <div className="research-section-label">
            <span>06</span>
            <span>LIMITATIONS & INTERPRETATION</span>
          </div>

          <h2>Evidence needs context<span>.</span></h2>
          <p className="research-limitations__intro">
            Experimental findings should be interpreted within the
            boundaries of the implementation and measurement environment.
          </p>
        </div>

        <ul>
          {researchLimitations.map((limitation) => (
            <li key={limitation}>{limitation}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
