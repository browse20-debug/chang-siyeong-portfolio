import type { Metadata } from "next";
import Link from "next/link";
import { WorkIndex } from "../WorkIndex";
import { brandHighlights, profile, projects } from "../content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected fashion, lookbook, commerce and advertising photography by Chang Siyeong.",
};

export default function WorkPage() {
  return (
    <main className="work-archive-page">
      <header className="site-header site-header--archive">
        <Link className="wordmark" href="/" aria-label="Chang Siyeong home">
          CHANG
          <br />
          SIYEONG
        </Link>

        <nav className="desktop-nav" aria-label="Work navigation">
          <a href="#work">Work</a>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile work navigation">
            <a href="#work">Work</a>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </details>
      </header>

      <section
        className="work-section work-section--standalone"
        id="work"
        aria-labelledby="work-title"
      >
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
            <h1 id="work-title">Work</h1>
          </div>
          <p className="section-note">
            {String(projects.length).padStart(2, "0")} projects
          </p>
        </div>

        <WorkIndex projects={projects} />
      </section>

      <section
        className="brand-highlights-section"
        id="brands"
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
