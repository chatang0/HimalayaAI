import React from "react";
import type { LabProfile } from "../../types";

/** Props for the `Hero` component. */
interface HeroProps {
  /** Lab profile information to display. */
  profile: LabProfile;
}

/**
 * Hero section showing lab name, tagline, and mission.
 */
export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="hero" className="py-10 sm:py-16 lg:py-20">
      <div className="flex flex-col gap-6 sm:gap-8">
        <div>
          <span className="inline-flex items-center rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
            Nepal&apos;s open AI ecosystem
          </span>
        </div>
        <div className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.3fr)] items-start">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300">{profile.tagline}</p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{profile.mission}</p>
            <div className="flex flex-wrap gap-3 pt-3 text-xs text-slate-300">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 hover:border-primary hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                GitHub
              </a>
              <a
                href={profile.xUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 hover:border-primary hover:text-white"
              >
                X (Twitter)
              </a>
              <a
                href={profile.huggingFaceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 hover:border-primary hover:text-white"
              >
                HuggingFace
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950 p-4 sm:p-5 shadow-lg shadow-slate-950/60">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
              What we do
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              We focus on open-source datasets, models, and tooling for Nepali language and culture:
              from corpus curation and tokenization to instruction-tuned LLMs and evaluation
              benchmarks tailored for Nepali speakers and creators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

