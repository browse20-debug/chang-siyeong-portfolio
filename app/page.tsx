import Link from "next/link";
import { HeroSlideshow } from "./HeroSlideshow";
import { WorkIndex } from "./WorkIndex";
import {
  brandHighlights,
  profile,
  projects,
  services,
} from "./content";

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 5);

  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Chang Siyeong home">
          CHANG<br />SIYEONG
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <HeroSlideshow
          images={profile.heroImages}
          intervalMs={profile.heroIntervalMs}
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Photographer · Seoul</p>
          <h1 id="hero-title">
            Images with
            <br />
            a quiet pulse.
          </h1>
          <p className="hero-korean">
            패션과 브랜드의 태도를
            <br />
            선명한 이미지로 기록합니다.
          </p>
        </div>
      </section>

      <section
        className="featured-section"
        aria-labelledby="featured-title"
      >
        <div className="featured-heading" data-reveal>
          <div>
            <p className="index">Selected</p>
            <h2 id="featured-title">Highlights</h2>
          </div>
          <p className="section-note">
            Selected · {String(featuredProjects.length).padStart(2, "0")}
          </p>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <Link
              className="featured-card"
              href={`/projects/${project.slug}`}
              key={project.slug}
              data-reveal
            >
              <figure>
                <div className="featured-image" data-parallax>
                  <img
                    src={project.cover}
                    alt={`${project.title} — ${project.category}`}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>
                    <i aria-hidden="true" />
                    {project.title}
                  </span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>

        <a className="featured-all" href="#work" data-reveal>
          View all work <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="work-intro" data-reveal>
          <p className="work-intro__trail">
            Chang Siyeong <span aria-hidden="true">→</span> Selected archive
          </p>
          <p className="work-intro__copy">
            Fashion, lookbook, commerce and advertising photography shaped
            with clear light and quiet detail.
          </p>
        </div>

        <div className="work-titlebar" data-reveal>
          <div>
            <p className="index">01</p>
            <h2 id="work-title">Work</h2>
          </div>
          <p className="section-note">
            {String(projects.length).padStart(2, "0")} projects
          </p>
        </div>

        <WorkIndex projects={projects} />
      </section>

      <section
        className="brand-highlights-section"
        aria-labelledby="brand-highlights-title"
      >
        <div className="brand-highlights-heading" data-reveal>
          <div>
            <p className="index">02</p>
            <h2 id="brand-highlights-title">Brand Highlights</h2>
          </div>
          <p className="section-note">Selected clients</p>
        </div>

        <ul className="brand-name-list" data-reveal>
          {brandHighlights.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading section-heading--light" data-reveal>
          <p className="index">03</p>
          <h2 id="about-title">About</h2>
          <p className="section-note">Chang Siyeong · Photographer</p>
        </div>

        <div className="about-grid">
          <p className="about-statement" data-reveal>
            {profile.statement}
          </p>
          <div className="about-details reveal-delay-1" data-reveal>
            <div>
              <p className="detail-label">Based in</p>
              <p>{profile.location}</p>
            </div>
            <div>
              <p className="detail-label">Available for</p>
              <p>{services.join(" · ")}</p>
            </div>
            <div>
              <p className="detail-label">Approach</p>
              <p>{profile.approach}</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" data-reveal>
        <p className="contact-kicker">Have a project in mind?</p>
        <a className="contact-link" href={`mailto:${profile.email}`}>
          Let&apos;s create
          <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-meta">
          <p>© {new Date().getFullYear()} Chang Siyeong</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
