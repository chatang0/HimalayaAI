import React from "react";
import { Card } from "../../../common/components/Card";
import { useProjects } from "../hooks/useProjects";

/**
 * Section that displays featured HARL projects.
 */
export const ProjectsSection: React.FC = () => {
  const { projects, loading, error } = useProjects();

  return (
    <section id="projects" className="py-10 sm:py-12">
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Featured projects</h2>
        <p className="text-sm text-slate-400 max-w-2xl">
          Open datasets, models, and tools for Nepali language technology. These projects are built
          openly so students and researchers can inspect, remix, and extend them.
        </p>
      </div>
      {loading && <p className="text-sm text-slate-400">Loading projects…</p>}
      {error && !loading && <p className="text-sm text-red-400">Failed to load projects: {error}</p>}
      {!loading && !error && (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">{project.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{project.description}</p>
                </div>
                <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                  ★ {project.stars.toLocaleString("en-US")} stars
                </span>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-slate-300 pt-1">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  View on GitHub →
                </a>
                {project.externalUrl && (
                  <a href={project.externalUrl} target="_blank" rel="noreferrer">
                    View on HuggingFace →
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

