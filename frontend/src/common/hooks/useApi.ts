import { useEffect, useState } from "react";
import type { ApiResponse } from "../../types";
import { apiRequest } from "../utils/apiClient";

/**
 * React hook for loading data from a backend API endpoint.
 * @param path Relative API path such as `/lab-profile`.
 * @param immediate Whether to fetch immediately on mount.
 */
export function useApi<T>(path: string, immediate: boolean = true) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    const result: ApiResponse<T> = await apiRequest<T>(path);
    if (!result.success) {
      setError(result.error ?? "Unknown error");
      setLoading(false);
      return;
    }
    setData(result.data ?? null);
    setLoading(false);
  };

  useEffect(() => {
    if (immediate) {
      void fetchData();
    }
  }, [path, immediate]);

  return { data, loading, error, refetch: fetchData };
}

