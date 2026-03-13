import React from "react";

/** Props for the `Card` component. */
interface CardProps {
  /** Main content of the card. */
  children: React.ReactNode;
  /** Optional additional CSS class names. */
  className?: string;
}

/**
 * Simple card component used across sections.
 */
export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`rounded-xl border border-slate-800 bg-slate-900/50 shadow-lg shadow-slate-950/40 ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

