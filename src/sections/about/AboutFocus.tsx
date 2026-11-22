import { aboutProfile } from "@/data/about-profile";

const interests = [
  {
    number: "01",
    title: "CYBERSECURITY",
    description:
      "Understanding threats, detection methods, security architecture and the challenges of protecting digital systems.",
  },
  {
    number: "02",
    title: "SOFTWARE ENGINEERING",
    description:
      "Designing and developing applications, backend services, APIs and maintainable software systems.",
  },
  {
    number: "03",
    title: "CRYPTOGRAPHY",
    description:
      "Exploring cryptographic mechanisms and their practical implications for secure communication and system performance.",
  },
  {
    number: "04",
    title: "QUANTITATIVE RESEARCH",
    description:
      "Investigating measurable system behaviour through experiments, data analysis and technical evaluation.",
  },
  {
    number: "05",
    title: "EMERGING TECHNOLOGY",
    description:
      "Exploring new computing concepts and their possible applications through research and experimentation.",
  },
];

export default function AboutFocus() {
  return (
    <section className="about-focus section-spacing">
      <div className="container-main">
        <div className="about-section-heading">
          <div>
            <p className="about-kicker">03 / AREAS OF INTEREST</p>
            <h2 className="about-heading">
              Where my attention
              <br />
              <span>is directed.</span>
            </h2>
          </div>
          <p className="about-section-note">
            These are areas of ongoing learning, exploration and practical
            development — not a claim of mastery.
          </p>
        </div>

        <div className="about-interest-list">
          {interests.map((interest) => (
            <article className="about-interest" key={interest.number}>
              <span>{interest.number}</span>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>

        <div className="about-focus__current">
          <span className="about-card-label">CURRENT FOCUS</span>
          <div>
            {aboutProfile.currentFocus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
