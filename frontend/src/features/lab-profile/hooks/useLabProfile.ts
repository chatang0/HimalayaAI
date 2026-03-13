import { useEffect, useState } from "react";
import type { LabProfile } from "../../../types";
import { fetchLabProfile } from "../api/labProfileApi";

/**
 * React hook that loads the lab profile on mount.
 */
export function useLabProfile() {
  const [profile, setProfile] = useState<LabProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      const response = await fetchLabProfile();
      if (!response.success) {
        setError(response.error ?? "Failed to load lab profile");
        setLoading(false);
        return;
      }
      setProfile(response.data ?? null);
      setLoading(false);
    };

    void run();
  }, []);

  return { profile, loading, error };
}

