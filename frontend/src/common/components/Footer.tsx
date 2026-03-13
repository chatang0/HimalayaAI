import React from "react";

/**
 * Site footer with external links.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 mt-8">
      <div className="section-inner py-8 text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Himalaya AI Research Lab. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/HimalayaAI"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://x.com/HimalayaAILab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            X (Twitter)
          </a>
          <a
            href="https://huggingface.co/himalaya-ai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            HuggingFace
          </a>
        </div>
      </div>
    </footer>
  );
};

