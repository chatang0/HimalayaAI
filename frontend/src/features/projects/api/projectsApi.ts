import type { ApiResponse, Project } from "../../../types";
import { apiRequest } from "../../../common/utils/apiClient";

/**
 * Fetches the list of featured projects from the backend.
 */
export async function fetchProjects(): Promise<ApiResponse<Project[]>> {
  return apiRequest<Project[]>("/api/projects");
}

