import { researchProfile } from "@/data/research-profile";

export default function ResearchQuestion() {
  return (
    <section className="research-question">
      <div className="container-main research-question__inner">
        <div className="research-section-label">
          <span>02</span>
          <span>THE CENTRAL QUESTION</span>
        </div>

        <p className="research-question__kicker">
          THE QUESTION DRIVING THE EXPERIMENT
        </p>

        <h2>{researchProfile.question}</h2>
      </div>
    </section>
  );
}
