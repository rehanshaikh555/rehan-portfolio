import { aboutProfile } from "@/data/about-profile";

export default function AboutProfile() {
  return (
    <section className="about-profile section-spacing">
      <div className="container-main about-two-column">
        <div>
          <p className="about-kicker">01 / INTRODUCTION</p>
          <h2 className="about-heading">
            Curiosity is where
            <br />
            <span>the work begins.</span>
          </h2>
        </div>

        <div className="about-profile__content">
          <p className="about-profile__lead">
            {aboutProfile.introduction}
          </p>
          <p>{aboutProfile.overview}</p>
          <p>{aboutProfile.approach}</p>
        </div>
      </div>
    </section>
  );
}
