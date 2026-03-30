import React, { useState } from "react";

/**
 * Professional header with centered logo and responsive navigation.
 * Three-column grid layout: nav-left | logo-center | nav-right (desktop/tablet)
 * On mobile: hamburger menu with slide-down panel.
 */
export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string): void => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-slate-800/30 bg-slate-950/20 backdrop-blur-md sticky top-0 z-50">
      <div className="section-inner py-3 md:py-4">
        {/* Desktop / Tablet layout: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Left nav */}
          <nav className="flex gap-5 text-sm text-slate-300">
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
              onClick={() => scrollTo("mission")}
            >
              Vision
            </button>
            <button
              type="button"
              className="hover:text-white transition-colors"
              onClick={() => scrollTo("roadmap")}
            >
              Roadmap
            </button>

          </nav>

          {/* Center logo */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-2 group"
              aria-label="Home"
            >
              <img src="/logo.png" alt="HimalayaAI Logo" className="h-20 w-auto object-contain" />

            </button>
          </div>

          {/* Right nav */}
          <nav className="flex justify-end gap-5 text-sm text-slate-300">
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
              onClick={() => scrollTo("team")}
            >
              Team
            </button>

            <button
              type="button"
              className="hover:text-white transition-colors"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between">
          {/* Hamburger button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

          {/* Center logo (mobile) */}
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center"
            aria-label="Home"
          >
            <img src="/logo.png" alt="HimalayaAI Logo" className="h-14 w-auto object-contain" />

          </button>

          {/* Right spacer / CTA */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm px-3 py-1.5 text-xs text-slate-200 hover:border-orange-500 hover:text-white transition-colors"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </div>

        {/* Mobile slide-down menu */}
        {menuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-slate-800/30 flex flex-col gap-3 pb-2 text-sm text-slate-300">
            <button
              type="button"
              className="text-left hover:text-white transition-colors py-1"
              onClick={() => scrollTo("hero")}
            >
              Overview
            </button>
            <button
              type="button"
              className="text-left hover:text-white transition-colors py-1"
              onClick={() => scrollTo("mission")}
            >
              Vision
            </button>
            <button
              type="button"
              className="text-left hover:text-white transition-colors py-1"
              onClick={() => scrollTo("roadmap")}
            >
              Roadmap
            </button>
            <button
              type="button"
              className="text-left hover:text-white transition-colors py-1"
              onClick={() => scrollTo("projects")}
            >
              Projects
            </button>
            <button
              type="button"
              className="text-left hover:text-white transition-colors py-1"
              onClick={() => scrollTo("team")}
            >
              Team
            </button>

            <button
              type="button"
              className="text-left hover:text-white transition-colors py-1"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
