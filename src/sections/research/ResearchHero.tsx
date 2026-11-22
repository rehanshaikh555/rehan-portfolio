import { researchProfile } from "@/data/research-profile";

export default function ResearchHero() {
  return (
    <section className="research-hero container-main">
      <div className="research-hero__eyebrow">
        <span />
        RESEARCH / {researchProfile.year}
      </div>

      <div className="research-hero__main">
        <p className="research-hero__index">01 — RESEARCH DOSSIER</p>
        <h1>
          Questions
          <br />
          <span>worth measuring.</span>
        </h1>
        <p className="research-hero__intro">
          Investigating the intersection of cybersecurity, cryptography
          and performance-sensitive systems through experimental work.
        </p>
      </div>

      <div className="research-hero__footer">
        <span>{researchProfile.domain}</span>
        <span>INDEPENDENT RESEARCH</span>
      </div>
    </section>
  );
}
