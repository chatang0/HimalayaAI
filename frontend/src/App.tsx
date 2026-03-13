import React, { Suspense } from "react";
import { Layout } from "./common/components/Layout";
import { LabProfileSection } from "./features/lab-profile/components/LabProfileSection";
import { ProjectsSection } from "./features/projects/components/ProjectsSection";
import { ContactForm } from "./features/contact/components/ContactForm";

/**
 * Root application component for the HARL landing page.
 */
const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<p className="text-sm text-slate-400">Loading…</p>}>
        <LabProfileSection />
        <ProjectsSection />
        <ContactForm />
      </Suspense>
    </Layout>
  );
};

export default App;

