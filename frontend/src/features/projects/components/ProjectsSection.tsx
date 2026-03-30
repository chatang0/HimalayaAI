import React from "react";
import { Card } from "../../../common/components/Card";
import { useProjects } from "../hooks/useProjects";

/**
 * Section that displays featured HARL projects.
 */
export const ProjectsSection: React.FC = () => {
  const { projects, loading, error } = useProjects();

  return (
    <section id="projects" className="section bg-transparent relative">
      <div className="section-inner space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="inline-block h-0.5 w-10 rounded-full bg-orange-500" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Open projects
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Early-stage projects
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Initial tooling and experiments that support our long-term goal of building a 1T-token
            Nepali Devanagari corpus. These projects are evolving and may change as the dataset
            matures.
          </p>
        </div>
        {/* Loading projects hidden per user request */}

        {error && !loading && (
          <p className="text-sm text-red-400">Failed to load projects: {error}</p>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.slug}
                className="h-full p-6 flex flex-col gap-4 border-slate-800/40 bg-slate-950/20 backdrop-blur-md hover:border-orange-500/70 hover:shadow-xl hover:shadow-slate-950/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-medium text-orange-200">
                    ★ {project.stars.toLocaleString("en-US")} stars
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-200 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-400"
                  >
                    View on GitHub →
                  </a>
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-orange-400"
                    >
                      HuggingFace →
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

