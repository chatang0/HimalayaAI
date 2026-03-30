import React from "react";
import { Card } from "../../../common/components/Card";

/**
 * Detailed section about our goals and national capabilities.
 */
export const MissionSection: React.FC = () => {
  const capabilities = [
    {
      title: "Government Services",
      description: "Nepali speakers access government services more easily with integration into apps such as Nagarik App and Hello Sarkar."
    },
    {
      title: "Education & Literacy",
      description: "Students and teachers benefit from the Nepali LLM companion that can localize context as per the local curriculum."
    },
    {
      title: "Healthcare Support",
      description: "Doctors and health workers in remote areas get AI support in fluent, technical, and conversational Nepali."
    },
    {
      title: "Startup Ecosystem",
      description: "Startups can build applications for ecommerce, ride-hailing, and food delivery hosting our model locally."
    },
    {
      title: "Cultural Preservation",
      description: "Ensuring Nepal preserves its language and unique cultural heritage in the rapidly evolving digital world."
    },
    {
      title: "Sovereign AI Safety",
      description: "A system with built-in safety guardrails and red-teaming aligned with national policies and security standards."
    },
    {
      title: "AI Export Economy",
      description: "Exporting AI services to Nepali-speaking populations outside of Nepal, including India, Bhutan, and Myanmar."
    },
    {
      title: "Indic AI Ecosystem",
      description: "Optimization for Devanagari makes us competitive in Maithili, Bhojpuri, Newari, Awadhi, and Hindi."
    }
  ];

  return (
    <section id="mission" className="section bg-transparent relative">
      <div className="section-inner space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block h-0.5 w-10 rounded-full bg-orange-500" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              What We Want to Do
            </p>
          </div>
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
              Our goal is simple: build an open-source AI model for the Nepali language made in Nepal, by Nepalis, for Nepal.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Our AI system will enable the following national capabilities, ensuring that all our work remains free and open for everyone to use.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <Card
              key={index}
              className="h-full p-6 flex flex-col justify-between border-slate-800/40 bg-slate-950/20 backdrop-blur-md hover:bg-slate-950/30 hover:border-orange-500/50 transition-all group"
            >
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/40 border border-slate-700/30 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                  <span className="text-lg">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="pt-6 border-t border-slate-800/50">
          <p className="text-sm text-slate-500 italic uppercase tracking-wider">
            All our work will be free and open for everyone to use.
          </p>
        </div>
      </div>
    </section>
  );
};
