import type { LabProfile, ApiResponse } from "../../../types";
import { apiRequest } from "../../../common/utils/apiClient";

/**
 * Fetches the lab profile from the backend API.
 */
export async function fetchLabProfile(): Promise<ApiResponse<LabProfile>> {
  return apiRequest<LabProfile>("/api/lab-profile");
}

