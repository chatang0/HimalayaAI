import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/** Props for the `Layout` component. */
interface LayoutProps {
  /** Child elements to render within the layout. */
  children: React.ReactNode;
}

/**
 * Simple centered layout with clean dark background.
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

