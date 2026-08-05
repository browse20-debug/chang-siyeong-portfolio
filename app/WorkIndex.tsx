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

              {/* relative 스타일을 직접 주어 로고의 위치 기준점으로 지정 */}
              <div
                className="project-image"
                data-parallax
                style={{ position: "relative", overflow: "hidden" }}
              >
                <img
                  src={project.cover}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                />

                {/* 로고가 커버 이미지 위에 뜨도록 인라인 스타일 및 단색 테마 적용 */}
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
                      filter: (project as any).logoTheme === "dark" 
                        ? "brightness(0)" 
                        : "brightness(0) invert(1)",
                    }}
                  />
                )}

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