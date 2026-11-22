import { researchScope } from "@/data/research-profile";

export default function ResearchScope() {
  return (
    <section className="research-scope container-main">
      <div className="research-section-label">
        <span>05</span>
        <span>EXPERIMENTAL SCOPE</span>
      </div>

      <div className="research-scope__layout">
        <div>
          <h2>Inside the experiment<span>.</span></h2>
          <p>
            The study focuses on receiver-side processing rather than
            claiming to model every component of a live trading platform.
          </p>
        </div>

        <ul className="research-scope__list">
          {researchScope.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
