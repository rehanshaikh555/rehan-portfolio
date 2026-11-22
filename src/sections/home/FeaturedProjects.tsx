import Link from "next/link";
import { featuredProjects } from "@/data/featured-projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="home-projects section-spacing">
      <div className="container-main">
        <div className="home-section-heading">
          <div>
            <p className="home-kicker">02 / SELECTED WORK</p>
            <h2 className="home-heading">
              Built through
              <br />
              <span>experimentation.</span>
            </h2>
          </div>
          <Link className="home-text-link" href="/projects">
            VIEW PROJECT ARCHIVE <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="home-project-list">
          {featuredProjects.map((project) => (
            <article className="home-project" key={project.slug}>
              <span className="home-project__number">{project.number}</span>

              <div className="home-project__main">
                <p className="home-kicker">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="home-project__description">
                  {project.description}
                </p>
                <div className="home-project__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="home-project__aside">
                <span className="home-project__status">{project.status}</span>
                <Link
                  href={`/projects#${project.slug}`}
                  aria-label={`Explore ${project.name}`}
                  className="home-project__arrow"
                >
                  ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
