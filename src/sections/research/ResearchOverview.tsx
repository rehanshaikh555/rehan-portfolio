import { researchProfile } from "@/data/research-profile";

export default function ResearchOverview() {
  return (
    <section className="research-overview container-main">
      <div className="research-section-label">
        <span>01</span>
        <span>THE RESEARCH</span>
      </div>

      <div className="research-overview__content">
        <p className="research-overview__eyebrow">
          {researchProfile.shortTitle} / {researchProfile.conference}
        </p>

        <h2>{researchProfile.title}</h2>

        <p className="research-overview__abstract">
          {researchProfile.abstract}
        </p>

        <div className="research-overview__status">
          <span>SUBMISSION STATUS</span>
          <strong>{researchProfile.submissionStatus}</strong>
        </div>
      </div>
    </section>
  );
}
