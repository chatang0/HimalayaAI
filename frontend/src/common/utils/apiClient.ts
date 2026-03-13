import { frontendConfig } from "../../config";
import type { ApiResponse } from "../../types";

/**
 * Performs a JSON HTTP request to the backend API.
 * @param path Relative API path such as `/lab-profile`.
 * @param options Fetch options excluding `body`.
 * @param body Optional request body to be JSON-encoded.
 */
export async function apiRequest<T>(
  path: string,
  options: Omit<RequestInit, "body"> = {},
  body?: unknown
): Promise<ApiResponse<T>> {
  const url = `${frontendConfig.apiBaseUrl}${path}`;

  const init: RequestInit = {
    method: options.method ?? (body ? "POST" : "GET"),
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {})
    },
    ...options
  };

  if (body !== undefined) {
    init.body = JSON.stringify(body);
  }

  const response = await fetch(url, init);
  const json = (await response.json()) as ApiResponse<unknown>;

  if (!response.ok || !json.success) {
    const errorMessage = typeof json.error === "string" ? json.error : "Request failed";
    return {
      success: false,
      error: errorMessage
    } as ApiResponse<T>;
  }

  return {
    success: true,
    data: json.data as T
  };
}

