import { aboutProfile } from "@/data/about-profile";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container-main">
        <p className="about-kicker">PERSONAL PROFILE / 001</p>

        <div className="about-hero__grid">
          <div>
            <h1>
              A little about
              <br />
              <span>the person behind the systems.</span>
            </h1>
          </div>

          <div className="about-hero__side">
            <span>BASED IN</span>
            <p>{aboutProfile.location}</p>
            <span>IDENTITY</span>
            <p>{aboutProfile.designation.join(" · ")}</p>
          </div>
        </div>

        <div className="about-hero__bottom">
          <span>ABOUT / REHAN SHAIKH</span>
          <span>INDEPENDENTLY LEARNING · BUILDING · RESEARCHING</span>
        </div>
      </div>
    </section>
  );
}
