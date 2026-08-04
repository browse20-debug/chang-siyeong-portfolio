"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "./content";

type WorkIndexProps = {
  projects: Project[];
};

const ALL_PROJECTS = "All";

export function WorkIndex({ projects }: WorkIndexProps) {
  const [activeFilter, setActiveFilter] = useState(ALL_PROJECTS);
  const filters = [
    ALL_PROJECTS,
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];
  const visibleProjects =
    activeFilter === ALL_PROJECTS
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div
        className="work-toolbar"
        role="group"
        aria-label="Filter projects by category"
        data-reveal
      >
        {filters.map((filter) => (
          <button
            className={filter === activeFilter ? "is-active" : ""}
            type="button"
            aria-pressed={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-grid" aria-live="polite" key={activeFilter}>
        {visibleProjects.map((project) => (
          <Link
            className={`project-card project-card--${project.size}`}
            href={`/projects/${project.slug}`}
            key={project.slug}
            data-reveal
          >
            <figure>
              <figcaption>
                <div className="project-title">
                  <span className="project-dot" aria-hidden="true" />
                  <h3>{project.title}</h3>
                </div>
                <p className="project-number">
                  {String(projects.indexOf(project) + 1).padStart(2, "0")}
                </p>
              </figcaption>

              <div className="project-image" data-parallax>
                <img
                  src={project.cover}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                />
                <span className="project-view-label" aria-hidden="true">
                  View project ↗
                </span>
              </div>

              <div className="project-meta">
                <p>{project.category}</p>
                <p>{project.year}</p>
                <p>
                  {String(project.gallery.length).padStart(2, "0")} images
                </p>
              </div>
            </figure>
          </Link>
        ))}
      </div>
    </>
  );
}
