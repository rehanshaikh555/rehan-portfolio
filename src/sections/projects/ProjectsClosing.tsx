import Link from "next/link";

export default function ProjectsClosing() {
  return (
    <section className="projects-closing container-main">
      <div className="projects-closing__rule" />
      <p className="projects-closing__eyebrow">BEYOND THE CURRENT BUILD</p>
      <h2>
        Still exploring.
        <br />
        <span>Still engineering.</span>
      </h2>
      <div className="projects-closing__bottom">
        <p>
          The work continues through research, experimentation and the
          discipline of improving what already exists.
        </p>
        <Link href="/research" className="projects-closing__link">
          EXPLORE RESEARCH <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
