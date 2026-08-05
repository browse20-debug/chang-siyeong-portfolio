import Link from "next/link";
import { HeroSlideshow } from "./HeroSlideshow";
import { homepageFeaturedProjects, profile, services } from "./content";

export default function Home() {
  return (
    <main>
      <header className="site-header site-header--home">
        <Link className="wordmark" href="/" aria-label="Chang Siyeong home">
          CHANG<br />SIYEONG
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/work">Work</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link href="/work">Work</Link>
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
        <p className="hero-statement">
          Fashion, lookbook, commerce and advertising—photographed with
          considered light and a quiet sense of movement.
        </p>
        <h1 className="hero-wordmark" id="hero-title">
          <span>CHANG</span>
          <span>SIYEONG</span>
        </h1>
        <div className="hero-meta" aria-label="Photographer information">
          <p>Photographer · Seoul</p>
          <p>© Chang Siyeong {new Date().getFullYear()}</p>
        </div>
      </section>

      <section
        className="home-featured"
        aria-labelledby="home-featured-title"
      >
        <div className="home-featured__heading" data-reveal>
          <h2 id="home-featured-title">Featured Works</h2>
          <p>
            Selected ·{" "}
            {String(homepageFeaturedProjects.length).padStart(2, "0")}
          </p>
        </div>

        <div className="home-featured__grid">
          {homepageFeaturedProjects.map((project, index) => (
            <Link
              className={`home-featured-card home-featured-card--${index + 1}`}
              href={`/projects/${project.slug}`}
              key={project.slug}
              data-reveal
            >
              <figure>
                <div 
                  className="home-featured-card__image" 
                  data-parallax
                  style={{ position: "relative" }}
                >
                  <img
                    src={project.cover}
                    alt={`${project.title} — ${project.category}`}
                    loading="lazy"
                  />
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="project-card__logo"
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                        width: "140px",
                        height: "auto",
                        maxHeight: "70px",
                        objectFit: "contain",
                        zIndex: 10,
                        pointerEvents: "none",
                        // logoTheme이 "dark"면 100% 순검정, 그 외(기본/light)는 100% 순백색 단색으로 처리
                        filter: project.logoTheme === "dark" 
                          ? "brightness(0)" 
                          : "brightness(0) invert(1)",
                      }}
                    />
                  )}
                  <span className="home-featured-card__view" aria-hidden="true">
                    View
                  </span>
                </div>
                <figcaption>
                  <span>{project.title}</span>
                  <small>
                    {project.category} · {project.year}
                  </small>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>

        <Link className="home-featured__all" href="/work" data-reveal>
          <span>View all work</span>
          <i aria-hidden="true">↗</i>
        </Link>
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