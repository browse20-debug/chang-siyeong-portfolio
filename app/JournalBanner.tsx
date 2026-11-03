"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Fixed selection: Journal uploads must not change these banner photographs.
// Change only when the owner explicitly requests a banner update.
const bannerPhotos = [
  "/photos/journal/open-road.jpg",
  "/photos/journal/after-dark.jpg",
  "/photos/journal/stone-and-light.jpg",
  "/photos/journal/the-winding-road.jpg",
];

export function JournalBanner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((index) => (index + 1) % bannerPhotos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);
  return (
    <section className="journal-banner" aria-label="Journal">
      <Link href="/journal" className="journal-banner__link">
        <div className="journal-banner__slides" aria-hidden="true">
          {bannerPhotos.map((src, index) => (
            <img key={src} src={src} alt="" className={index === active ? "is-active" : ""} loading="eager" />
          ))}
        </div>
        <div className="journal-banner__shade" />
        <div className="journal-banner__copy">
          <p>Journal</p>
          <h2>Somewhere, between.</h2>
          <span>View journal ↗</span>
        </div>
      </Link>
      <button type="button" className="journal-banner__pause" onClick={() => setPaused(!paused)} aria-label={paused ? "Resume banner slideshow" : "Pause banner slideshow"}>
        {paused ? "Play" : "Pause"}
      </button>
    </section>
  );
}
