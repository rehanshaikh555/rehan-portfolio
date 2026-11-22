import Link from "next/link";

export default function ExperimentsClosing() {
  return (
    <section className="experiments-closing container-main">
      <div className="experiments-closing__rule" />
      <p>THE LAB REMAINS OPEN</p>
      <h2>
        Test ideas.
        <br />
        <span>Challenge assumptions.</span>
      </h2>

      <div className="experiments-closing__footer">
        <span>EXPLORATION IS PART OF ENGINEERING.</span>
        <Link href="/projects">
          VIEW PROJECTS <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
