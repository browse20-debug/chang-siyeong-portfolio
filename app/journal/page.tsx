import type { Metadata } from "next";
import Link from "next/link";
import { journalPhotographs } from "./content";

export const metadata: Metadata = {
  title: "Journal",
  description: "Personal photographs from the road by Chang Siyeong.",
};

export default function JournalPage() {
  return (
    <main className="journal-page">
      <header className="journal-nav">
        <Link href="/">Chang Siyeong</Link>
        <nav aria-label="Journal navigation">
          <Link href="/work">Work</Link>
          <Link href="/journal" aria-current="page">Journal</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>
      <section className="journal-heading" aria-labelledby="journal-title">
        <p className="journal-eyebrow">Journal / 01</p>
        <h1 id="journal-title">Somewhere, between.</h1>
      </section>
      <div className="journal-sequence">
        {journalPhotographs.map((photo, index) => (
          <figure key={photo.src}>
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading={index === 0 ? "eager" : "lazy"} />
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")} / {photo.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <footer className="journal-end"><Link href="/">← Back to Work</Link><p>Photographs by Chang Siyeong</p></footer>
    </main>
  );
}
