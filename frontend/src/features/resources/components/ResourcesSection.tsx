import React from "react";

/**
 * Resources and ways to connect with the lab.
 */
export const ResourcesSection: React.FC = () => {
  const resources = [
    {
      title: "GitHub organization",
      description: "Follow the corpus-building work, data scripts, and early utilities.",
      href: "https://github.com/HimalayaAI",
      label: "Open on GitHub"
    },
    {
      title: "HuggingFace hub",
      description: "A home for future Nepali models and dataset releases as they become ready.",
      href: "https://huggingface.co/himalaya-ai",
      label: "View on HuggingFace"
    },
    {
      title: "Research updates",
      description: "Follow along as we share milestones and early findings.",
      href: "https://x.com/HimalayaAILab",
      label: "Follow on X"
    },
    {
      title: "Collaborations",
      description: "Universities, labs, and organizations interested in Nepali LLMs and data.",
      href: "#contact",
      label: "Start a conversation"
    }
  ];

  return (
    <section className="section bg-slate-900">
      <div className="section-inner space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="inline-block h-0.5 w-10 rounded-full bg-orange-500" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Resources
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Explore and connect
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Everything we build is intended to be practical, inspectable, and easy to plug into your
            own workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target={resource.href.startsWith("#") ? undefined : "_blank"}
              rel={resource.href.startsWith("#") ? undefined : "noreferrer"}
              className="group h-full border border-slate-700 rounded-lg p-6 bg-slate-900/60 hover:border-orange-500 hover:bg-slate-900/80 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-orange-500 text-sm">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/80">
                    ⌘
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wide">
                    {resource.title}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed opacity-80">
                  {resource.description}
                </p>
              </div>
              <span className="mt-4 text-xs sm:text-sm font-medium text-orange-400 group-hover:text-orange-300">
                {resource.label} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

