const principles = [
  {
    number: "01",
    title: "Understand before building",
    description:
      "A good implementation starts with a clear understanding of the problem, its constraints and the people affected by it.",
  },
  {
    number: "02",
    title: "Evidence over assumptions",
    description:
      "Technical decisions should be investigated and evaluated. Results, limitations and uncertainties deserve honest documentation.",
  },
  {
    number: "03",
    title: "Build to learn",
    description:
      "Prototypes and experiments turn abstract ideas into something that can be observed, tested and improved.",
  },
  {
    number: "04",
    title: "Security as a foundation",
    description:
      "Security should be considered throughout system design and development, rather than treated as an afterthought.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="about-principles section-spacing">
      <div className="container-main">
        <p className="about-kicker">04 / WORKING PHILOSOPHY</p>

        <h2 className="about-heading">
          The principles
          <br />
          <span>behind the process.</span>
        </h2>

        <div className="about-principles__grid">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
