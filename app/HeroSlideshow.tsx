"use client";

import { useEffect, useState, type CSSProperties } from "react";

type HeroSlideshowProps = {
  images?: string[];
  intervalMs?: number;
};

export function HeroSlideshow({
  images = [],
  intervalMs = 5000,
}: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div
      className="hero-media"
      data-parallax
      style={{ "--slide-duration": `${intervalMs}ms` } as CSSProperties}
      aria-hidden="true"
    >
      {images.map((src, index) => (
        <img
          className={`hero-slide ${index === activeIndex ? "is-active" : ""}`}
          src={src}
          alt=""
          key={`${src}-${index}`}
          loading={index < 2 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
        />
      ))}

      {images.length > 1 && (
        <div className="hero-pagination">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="hero-pagination__line" key={activeIndex}>
            <i />
          </span>
          <span>{String(images.length).padStart(2, "0")}</span>
        </div>
      )}
    </div>
  );
}
