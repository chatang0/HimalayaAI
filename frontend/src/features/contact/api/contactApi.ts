import type { ApiResponse, ContactFormData } from "../../../types";
import { apiRequest } from "../../../common/utils/apiClient";

/**
 * Sends a contact form submission to the backend.
 * @param payload Contact form data to send.
 */
export async function submitContact(
  payload: ContactFormData
): Promise<ApiResponse<{ id: string }>> {
  return apiRequest<{ id: string }>("/api/contact", { method: "POST" }, payload);
}

