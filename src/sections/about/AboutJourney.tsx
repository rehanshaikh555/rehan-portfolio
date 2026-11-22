import { journeyItems } from "@/data/about-journey";

export default function AboutJourney() {
  return (
    <section className="about-journey section-spacing">
      <div className="container-main">
        <p className="about-kicker">05 / THE JOURNEY</p>

        <div className="about-section-heading">
          <h2 className="about-heading">
            An evolving
            <br />
            <span>technical journey.</span>
          </h2>
          <p className="about-section-note">
            A thematic overview of the direction my learning and independent
            work have taken.
          </p>
        </div>

        <div className="about-journey__timeline">
          {journeyItems.map((item) => (
            <article className="about-journey__item" key={item.number}>
              <span className="about-journey__number">{item.number}</span>
              <div>
                <span className="about-card-label">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
