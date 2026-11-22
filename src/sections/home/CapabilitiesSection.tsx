const capabilityGroups = [
  {
    number: "01",
    title: "SECURITY & RESEARCH",
    items: [
      "Cybersecurity fundamentals",
      "Threat analysis",
      "Security engine development",
      "Cryptography research",
      "Security validation",
    ],
  },
  {
    number: "02",
    title: "SOFTWARE ENGINEERING",
    items: [
      "Python development",
      "FastAPI & backend systems",
      "React & Next.js",
      "Database design",
      "API architecture",
    ],
  },
  {
    number: "03",
    title: "SYSTEMS & EXPLORATION",
    items: [
      "System architecture",
      "Technical prototyping",
      "Linux environments",
      "AI / ML exploration",
      "Research-driven problem solving",
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="home-capabilities section-spacing">
      <div className="container-main">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker">04 / TECHNICAL PRACTICE</p>
            <h2 className="home-heading">
              Areas of
              <br />
              <span>exploration.</span>
            </h2>
          </div>
          <p className="home-section-note">
            A developing skill set shaped by independent building, academic
            exploration and hands-on technical work.
          </p>
        </div>

        <div className="home-capabilities__grid">
          {capabilityGroups.map((group) => (
            <article className="home-capability" key={group.number}>
              <span className="home-capability__number">{group.number}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
