import React from "react";

/**
 * Minimal header with HARL branding and simple nav.
 */
export const Header: React.FC = () => {
  const scrollTo = (id: string): void => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-sm">
      <div className="section-inner py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-semibold text-orange-500">
            HARL
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold tracking-tight">
              Himalaya AI Research Lab
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400">
              Open AI research for Nepali language &amp; culture
            </span>
          </div>
        </div>
        <nav className="hidden sm:flex gap-6 text-xs sm:text-sm text-slate-300">
          <button
            type="button"
            className="hover:text-white transition-colors"
            onClick={() => scrollTo("hero")}
          >
            Overview
          </button>
          <button
            type="button"
            className="hover:text-white transition-colors"
            onClick={() => scrollTo("projects")}
          >
            Projects
          </button>
          <button
            type="button"
            className="hover:text-white transition-colors"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </nav>
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200 hover:border-orange-500 hover:text-white transition-colors"
          onClick={() => scrollTo("contact")}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

