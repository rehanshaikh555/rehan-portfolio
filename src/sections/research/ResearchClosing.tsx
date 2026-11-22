import Link from "next/link";

export default function ResearchClosing() {
  return (
    <section className="research-closing container-main">
      <div className="research-closing__rule" />
      <p>RESEARCH IS AN ITERATIVE PROCESS</p>
      <h2>
        Measure carefully.
        <br />
        <span>Question continuously.</span>
      </h2>

      <div className="research-closing__footer">
        <span>SECURITY · SYSTEMS · EXPERIMENTATION</span>
        <Link href="/contact">
          DISCUSS AN IDEA <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
