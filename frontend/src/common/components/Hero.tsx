import React from "react";
import type { LabProfile } from "../../types";

/** Props for the `Hero` component. */
interface HeroProps {
  /** Lab profile information to display. */
  profile: LabProfile;
}

/**
 * Clean, two-column hero for HARL.
 */
export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section
      id="hero"
      className="section bg-transparent relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <svg
          className="absolute bottom-[-20%] left-1/2 h-[360px] w-[720px] -translate-x-1/2 text-slate-800"
          viewBox="0 0 800 400"
          aria-hidden="true"
        >
          <path
            d="M0 260L90 210L170 240L260 180L340 220L430 150L520 210L610 140L700 200L800 160V400H0Z"
            fill="url(#mountainGradient)"
          />
          <defs>
            <linearGradient id="mountainGradient" x1="0" y1="200" x2="800" y2="0">
              <stop stopColor="#020617" stopOpacity="0.9" />
              <stop stopColor="#0f172a" stopOpacity="0.5" />
              <stop stopColor="#1e293b" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="section-inner relative z-10">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
              Early-stage Nepali AI data initiative
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl">
                {profile.tagline}
              </p>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {profile.mission}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-orange-500/30 hover:bg-orange-400 transition-colors"
              >
                Explore projects
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/70 px-8 py-3 text-sm font-medium text-slate-100 hover:border-orange-500 hover:text-white transition-colors"
              >
                View GitHub
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300 pt-1">
              <a
                href={profile.xUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-orange-500 hover:text-white transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href={profile.huggingFaceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-orange-500 hover:text-white transition-colors"
              >
                HuggingFace
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/40 bg-slate-950/20 backdrop-blur-md p-6 sm:p-8 space-y-5 shadow-xl shadow-slate-950/40">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Current focus
            </p>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              We are currently building a large-scale Nepali Devanagari corpus, with the goal of
              reaching 1 trillion tokens. Our long-term goal is to train strong Nepali large
              language models on this corpus once it is mature and well-documented.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
              <div className="rounded-lg border border-slate-800/40 bg-slate-950/10 p-3 sm:p-4 space-y-1.5">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Domains</p>
                <p className="leading-relaxed">Corpus, tokenization, LLMs, evaluation</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-3 sm:p-4 space-y-1.5">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Community</p>
                <p className="leading-relaxed">Open, transparent, locally grounded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

