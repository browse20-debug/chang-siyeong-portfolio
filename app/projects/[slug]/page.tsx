import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectViewer } from "../../ProjectViewer";
import { getProject, projects } from "../../content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="project-page">
      <header className="project-header project-header--viewer">
        <Link className="project-back" href="/#work" aria-label="작업 목록으로 돌아가기">
          <span aria-hidden="true">←</span>
          <span>Work</span>
        </Link>
        <div className="project-header__title">
          <strong>{project.title}</strong>
          <span aria-hidden="true">—</span>
        </div>
      </header>

      <section className="project-viewer-layout">
        <details className="project-info-panel">
          <summary>Info</summary>
          <div className="project-info-panel__body">
            <p className="project-info-panel__meta">
              {project.category} · {project.year}
            </p>
            <p>{project.description}</p>
            <dl>
              {project.credits.map((credit) => (
                <div key={credit.label}>
                  <dt>{credit.label}</dt>
                  <dd>{credit.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </details>

        <ProjectViewer
          images={project.gallery}
          title={project.title}
          key={project.slug}
        />
      </section>

      <Link
        className="next-project"
        href={`/projects/${nextProject.slug}`}
        data-reveal
      >
        <span>Next brand</span>
        <strong>{nextProject.title}</strong>
        <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
