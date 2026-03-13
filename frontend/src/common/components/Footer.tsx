import React from "react";

/**
 * Site footer with external links.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 mt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Himalaya AI Research Lab. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/HimalayaAI" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://x.com/HimalayaAILab" target="_blank" rel="noreferrer">
            X (Twitter)
          </a>
          <a href="https://huggingface.co/himalaya-ai" target="_blank" rel="noreferrer">
            HuggingFace
          </a>
        </div>
      </div>
    </footer>
  );
};

