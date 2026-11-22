import { aboutProfile } from "@/data/about-profile";

export default function AboutEducation() {
  const education = aboutProfile.education;

  return (
    <section className="about-education section-spacing">
      <div className="container-main">
        <p className="about-kicker">02 / EDUCATION</p>

        <div className="about-education__grid">
          <h2 className="about-heading">
            Academic
            <br />
            <span>foundation.</span>
          </h2>

          <article className="about-education__card">
            <span className="about-card-label">CURRENT EDUCATION</span>
            <h3>{education.program}</h3>
            <p>{education.institution}</p>

            <div className="about-education__details">
              <span>{education.level}</span>
              <span>{education.academicYear}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
