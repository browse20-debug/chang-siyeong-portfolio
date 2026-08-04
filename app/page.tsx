import Link from "next/link";
import { HeroSlideshow } from "./HeroSlideshow";
import { profile, projects, services } from "./content";

export default function Home() {
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

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading" data-reveal>
          <p className="index">01</p>
          <h2 id="work-title">Work</h2>
          <p className="section-note">Brand archive · 03</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Link
              className={`project-card project-card--${project.size} reveal-delay-${index % 2}`}
              href={`/projects/${project.slug}`}
              key={project.slug}
              data-reveal
            >
              <figure>
                <div className="project-image" data-parallax>
                  <img
                    src={project.cover}
                    alt={`${project.title} — ${project.category}`}
                    loading={index > 1 ? "lazy" : "eager"}
                  />
                </div>
                <figcaption>
                  <p className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <p>{project.year}</p>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading section-heading--light" data-reveal>
          <p className="index">02</p>
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
