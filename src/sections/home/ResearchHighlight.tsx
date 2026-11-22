import Link from "next/link";
import { researchHighlights } from "@/data/research-highlights";

export default function ResearchHighlight() {
  return (
    <section id="research" className="home-research section-spacing">
      <div className="container-main">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker">03 / RESEARCH & INQUIRY</p>
            <h2 className="home-heading">
              Questions first.
              <br />
              <span>Evidence always.</span>
            </h2>
          </div>
          <p className="home-section-note">
            Exploring technical questions through structured investigation,
            implementation and evaluation.
          </p>
        </div>

        <div className="home-research__grid">
          {researchHighlights.map((item) => (
            <article className="home-research-card" key={item.number}>
              <div className="home-research-card__top">
                <span>{item.number} / RESEARCH NOTE</span>
                <span>{item.field}</span>
              </div>

              <h3>{item.title}</h3>
              <p className="home-research-card__question">{item.question}</p>
              <p className="home-research-card__description">
                {item.description}
              </p>

              <div className="home-research-card__bottom">
                <span>{item.status}</span>
                <Link href={item.href} aria-label={`Read about ${item.title}`}>
                  EXPLORE ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
