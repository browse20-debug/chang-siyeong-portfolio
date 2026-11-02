import Link from "next/link";
import { HeroSlideshow } from "./HeroSlideshow";
import { homepageFeaturedProjects, profile } from "./content";

export default function Home() {
  return (
    <main className="home-page" style={{ position: "relative" }}>
      <header className="site-header site-header--home">
        <Link className="wordmark" href="/" aria-label="Chang Siyeong home">
          Chang Siyeong
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/work">Work</Link>
          <a href="#contact">Contact</a>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link href="/work">Work</Link>
              <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      {/* 1. 상단 배너: 스크롤 시 상단 고정 */}
      <section 
        className="hero" 
        aria-labelledby="hero-title"
        style={{ position: "sticky", top: 0, zIndex: 0 }}
      >
        <HeroSlideshow
          images={profile.heroImages}
          intervalMs={profile.heroIntervalMs}
        />
        <div className="hero-shade" />
        <div className="hero-identity">
          <p className="hero-kicker">Independent photographer / Seoul</p>
          <h1 className="hero-wordmark" id="hero-title">Chang Siyeong</h1>
        </div>
        <div className="hero-note">
          <p className="hero-statement">Fashion, people, and the moments in between.</p>
          <a className="hero-work-link" href="#home-featured-title">Explore the photographs <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-meta" aria-label="Photographer information">
          <p>Fashion · Editorial · Commissions</p>
          <p>© Chang Siyeong</p>
        </div>
      </section>

      {/* 2. Featured Works: 흰색 배경 */}
      <section
        className="home-featured"
        id="home-featured-title"
        aria-label="Photographs"
        style={{ position: "relative", zIndex: 10, backgroundColor: "#ffffff" }}
      >
        <div className="home-featured__grid">
          {homepageFeaturedProjects.map((project) => {
            const logoTheme = (project as Record<string, unknown>).logoTheme;

            return (
              <Link
                className="home-featured-card"
                href={`/projects/${project.slug}`}
                key={project.slug}
              >
                <figure>
                  <div 
                    className="home-featured-card__image" 
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
                          filter: logoTheme === "dark"
                            ? "brightness(0)"
                            : "brightness(0) invert(1)",
                        }}
                      />
                    )}
                  </div>
                  <figcaption>
                    <span>{project.title}</span>
                    <small>
                      {project.category}
                    </small>
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </div>

        <Link className="home-featured__all" href="/work" data-reveal>
          <span>Browse the archive</span>
          <i aria-hidden="true">↗</i>
        </Link>
      </section>

      {/* 4. Contact/Footer 영역: 기존 원본처럼 다시 흰색 배경(#ffffff)으로 지정 */}
      <footer 
        id="contact" 
        data-reveal
        style={{ position: "relative", zIndex: 10, backgroundColor: "#ffffff" }}
      >
        <p className="contact-intro">Seoul-based photographer · Fashion &amp; Editorial</p>
        <p className="contact-kicker">02 / Get in touch</p>
        <a className="contact-link" href={`mailto:${profile.email}`}>
          For the next frame.
          <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-meta">
          <p>© Chang Siyeong</p>
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