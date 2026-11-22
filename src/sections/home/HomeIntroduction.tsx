export default function HomeIntroduction() {
  return (
    <section id="intro" className="home-intro section-spacing">
      <div className="container-main home-intro__grid">
        <div>
          <p className="home-kicker">01 / THE APPROACH</p>
          <h2 className="home-heading">
            Beyond the interface.
            <br />
            <span>Into the system.</span>
          </h2>
        </div>

        <div className="home-intro__body">
          <p className="home-intro__lead">
            Researching ideas. Engineering solutions. Exploring what makes
            digital systems more intelligent, reliable and secure.
          </p>
          <p>
            I am an independent researcher and software developer interested
            in cybersecurity, system design and emerging technologies. My
            work moves between research questions, practical prototypes and
            the engineering decisions behind them.
          </p>
          <p>
            This portfolio documents that process — including the work in
            progress, the experiments and the lessons learned along the way.
          </p>
          <a className="home-text-link" href="/about">
            MORE ABOUT MY APPROACH <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
