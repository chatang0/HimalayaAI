import React from "react";

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="section bg-transparent relative">
      <div className="section-inner space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-block h-0.5 w-10 rounded-full bg-orange-500" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Our Team
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Built by Volunteers
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
            HARL is a volunteer-driven community of researchers, students, and software developers 
            from Nepal and across the globe. We are open to anyone who wants to contribute and 
            share our work publicly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-slate-800/40 bg-slate-950/20 backdrop-blur-md p-6 space-y-3">
            <h3 className="text-lg font-semibold text-white">Researchers</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              ML engineers and academic researchers focusing on Devanagari tokenization and pre-training datasets.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/40 bg-slate-950/20 backdrop-blur-md p-6 space-y-3">
            <h3 className="text-lg font-semibold text-white">Developers</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Software engineers and full-stack developers building the data pipelines and open-source infrastructure.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/40 bg-slate-950/20 backdrop-blur-md p-6 space-y-3">
            <h3 className="text-lg font-semibold text-white">Students</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Graduates and students from universities across Nepal contributing to data collection and cleaning.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/40 bg-slate-950/20 backdrop-blur-md p-6 space-y-3">
            <h3 className="text-lg font-semibold text-white">Linguists</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Language and data experts ensuring the quality and diversity of the Nepali Devanagari corpus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
