import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export default function HomeClosing() {
  return (
    <section className="home-closing section-spacing">
      <div className="container-main home-closing__inner">
        <p className="home-kicker">05 / START A CONVERSATION</p>
        <h2>
          Have a problem
          <br />
          <span>worth solving?</span>
        </h2>
        <p className="home-closing__description">
          Interested in research, technical collaboration or building
          something meaningful? Let's connect.
        </p>

        <div className="home-closing__actions">
          <a href={`mailto:${siteConfig.contact.email}`}>
            GET IN TOUCH <span aria-hidden="true">↗</span>
          </a>
          <Link href="/contact">CONTACT DETAILS ↗</Link>
        </div>

        <div className="home-closing__email">
          {siteConfig.contact.email}
        </div>
      </div>
    </section>
  );
}
