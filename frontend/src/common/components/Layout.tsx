import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobeBackground } from "./GlobeBackground";

/** Props for the `Layout` component. */
interface LayoutProps {
  /** Child elements to render within the layout. */
  children: React.ReactNode;
}

/**
 * Centered layout with interactive 3D globe background.
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-transparent text-slate-50 flex flex-col relative overflow-x-hidden">
      <GlobeBackground />
      <Header />
      <main className="flex-1 z-10">{children}</main>
      <Footer />
    </div>
  );
};

