import React, { Suspense } from "react";
import { Layout } from "./common/components/Layout";
import { LabProfileSection } from "./features/lab-profile/components/LabProfileSection";
import { MissionSection } from "./features/mission/components/MissionSection";
import { ProjectsSection } from "./features/projects/components/ProjectsSection";
import { RoadmapSection } from "./features/roadmap/components/RoadmapSection";
import { TeamSection } from "./features/team/components/TeamSection";
import { ResourcesSection } from "./features/resources/components/ResourcesSection";
import { ContactForm } from "./features/contact/components/ContactForm";


/**
 * Root application component for the HARL landing page.
 */
const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<p className="text-sm text-slate-400">Loading…</p>}>
        <LabProfileSection />
        <MissionSection />
        <ProjectsSection />
        <RoadmapSection />
        <TeamSection />
        <ResourcesSection />

        <ContactForm />
      </Suspense>
    </Layout>
  );
};

export default App;

