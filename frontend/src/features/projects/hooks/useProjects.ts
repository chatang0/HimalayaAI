import { useEffect, useState } from "react";
import type { Project } from "../../../types";
import { fetchProjects } from "../api/projectsApi";

/**
 * React hook to load featured projects from the backend.
 */
export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      const response = await fetchProjects();
      if (!response.success) {
        setError(response.error ?? "Failed to load projects");
        setLoading(false);
        return;
      }
      setProjects(response.data ?? []);
      setLoading(false);
    };

    void run();
  }, []);

  return { projects, loading, error };
}

