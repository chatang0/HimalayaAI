import React from "react";

/**
 * Resources and ways to connect with the lab.
 */
export const ResourcesSection: React.FC = () => {
  const resources = [
    {
      title: "GitHub organization",
      description: "Follow our pre-training scripts, tokenization research, and data pipelines.",
      href: "https://github.com/HimalayaGPT",
      label: "Open on GitHub"
    },
    {
      title: "HuggingFace hub",
      description: "The official home for HimalayaGPT model weights and the 1T-token Nepali corpus.",
      href: "https://huggingface.co/himalaya-ai",
      label: "View on HuggingFace"
    },
    {
      title: "Government & AI Partnership",
      description: "Collaborating with MoEST and national bodies on Sovereign AI and digital sovereignty.",
      href: "#contact",
      label: "Partner with us"
    },
    {
      title: "Compute Sponsorship",
      description: "We are seeking GPU clusters and international grants to train Nepali models from scratch.",
      href: "#contact",
      label: "Sponsor compute"
    }

  ];

  return (
    <section className="section bg-transparent relative">
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
              className="group h-full border border-slate-800/40 rounded-xl p-6 bg-slate-950/20 backdrop-blur-md hover:border-orange-500/50 hover:bg-slate-950/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-orange-500 text-sm">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/40 border border-slate-700/30">
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

