import React from "react";
import { Hero } from "../../../common/components/Hero";
import { useLabProfile } from "../hooks/useLabProfile";

/**
 * Container component that loads and renders the lab profile hero section.
 */
export const LabProfileSection: React.FC = () => {
  const { profile, loading, error } = useLabProfile();

  if (loading) {
    return (
      <section id="hero" className="py-10">
        {/* Loading state hidden per user request */}
      </section>
    );
  }


  if (error || !profile) {
    return (
      <section id="hero" className="py-10">
        <p className="text-sm text-red-400">Failed to load lab profile: {error}</p>
      </section>
    );
  }

  return <Hero profile={profile} />;
};

