import Link from "next/link";

export default function AboutClosing() {
  return (
    <section className="about-closing section-spacing">
      <div className="container-main">
        <p className="about-kicker">06 / WHAT COMES NEXT</p>
        <h2>
          Still learning.
          <br />
          <span>Always building.</span>
        </h2>
        <p>
          The journey is ongoing. Every project, experiment and research
          question is another opportunity to understand technology more
          deeply.
        </p>
        <div className="about-closing__links">
          <Link href="/projects">EXPLORE MY WORK ↗</Link>
          <Link href="/contact">GET IN TOUCH ↗</Link>
        </div>
      </div>
    </section>
  );
}
