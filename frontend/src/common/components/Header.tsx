import React from "react";

/**
 * Site header with HARL branding and quick navigation.
 */
export const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-primary">
              Himalaya AI Research Lab
            </span>
            <span className="text-xs text-slate-400">Building Nepal&apos;s open AI ecosystem</span>
          </div>
        </div>
        <nav className="hidden sm:flex gap-4 text-xs text-slate-300">
          <button
            type="button"
            className="hover:text-white"
            onClick={() => {
              const hero = document.getElementById("hero");
              hero?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hero
          </button>
          <button
            type="button"
            className="hover:text-white"
            onClick={() => {
              const projects = document.getElementById("projects");
              projects?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </button>
          <button
            type="button"
            className="hover:text-white"
            onClick={() => {
              const contact = document.getElementById("contact");
              contact?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

