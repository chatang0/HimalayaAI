import React from "react";
import { Card } from "../../../common/components/Card";

/**
 * Mission and pillars of the lab, displayed as feature cards.
 */
export const MissionSection: React.FC = () => {
  const features = [
    {
      title: "Open research",
      description:
        "Transparent corpus construction methods, cleaning pipelines, and documentation openly shared with the Nepali AI community."
    },
    {
      title: "Local-first",
      description: "Grounded in Nepali language, culture, and real-world use cases across the country."
    },
    {
      title: "Education",
      description:
        "Early resources and guides that help students, universities, and independent researchers work with Nepali text data."
    },
    {
      title: "Community growth",
      description:
        "A growing group of contributors, reviewers, and supporters who care about high-quality Nepali Devanagari data and responsible future models."
    }
  ];

  return (
    <section id="mission" className="section bg-slate-950/80">
      <div className="section-inner space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="inline-block h-0.5 w-10 rounded-full bg-orange-500" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Mission
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Our focus areas
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Himalaya AI Research Lab is dedicated to building a transparent, large-scale Nepali
            Devanagari corpus that can serve as the foundation for future Nepali LLMs and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="h-full p-6 flex flex-col justify-between bg-slate-800/60 hover:bg-slate-800/80 hover:shadow-xl transition-all"
            >
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/70 text-orange-500">
                  <span className="text-lg">⋀</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed opacity-80">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

