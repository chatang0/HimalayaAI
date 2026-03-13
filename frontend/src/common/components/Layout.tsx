import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/** Props for the `Layout` component. */
interface LayoutProps {
  /** Child elements to render within the layout. */
  children: React.ReactNode;
}

/**
 * Page layout with shared header and footer.
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8">{children}</main>
      <Footer />
    </div>
  );
};

