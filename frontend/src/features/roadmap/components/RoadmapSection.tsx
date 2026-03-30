import React from "react";

const phases = [
  {
    phase: "Phase 1",
    time: "Early 2026",
    title: "Dataset Scaling",
    description: "Grow our datasets to over 1 Trillion tokens and expand the contributor community."
  },
  {
    phase: "Phase 2",
    time: "Mid 2026",
    title: "Foundation Pre-training",
    description: "Start training HimalayaGPT (3B-8B parameters) with secured high-performance compute."
  },
  {
    phase: "Phase 3",
    time: "Late 2026",
    title: "Instruction Fine-tuning",
    description: "Fine-tune the model for Nepali tasks like translation, question answering, and formatting."
  },
  {
    phase: "Phase 4",
    time: "Early 2027",
    title: "Public Release (v1.0)",
    description: "Release HimalayaGPT v1.0 with open weights and open datasets for everyone to use."
  },
  {
    phase: "Phase 5",
    time: "2027 Onward",
    title: "Multi-modal & Dialects",
    description: "Add support for speech, images, and additional Nepali languages like Maithili and Newari."
  }
];

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="section bg-transparent relative overflow-hidden">
      <div className="section-inner space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-block h-0.5 w-10 rounded-full bg-orange-500" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Roadmap
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            The Path to HimalayaGPT
          </h2>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-10 py-4">
          {phases.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-slate-900 border-2 border-orange-500 group-hover:bg-orange-500 transition-colors shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">{item.phase}</span>
                  <span className="text-xs text-slate-500"> — {item.time}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
