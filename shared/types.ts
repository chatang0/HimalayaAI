/**
 * Shared types between frontend and backend.
 */

/** Generic API response wrapper used for all HTTP responses. */
export interface ApiResponse<T> {
  /** Indicates whether the request was successful. */
  success: boolean;
  /** Response data when successful. */
  data?: T;
  /** Error message when the request fails. */
  error?: string;
}

/** Contact form payload sent from the frontend. */
export interface ContactFormData {
  /** Full name of the sender. */
  name: string;
  /** Email address of the sender. */
  email: string;
  /** Message body from the sender. */
  message: string;
}

/** Lab profile information displayed in hero and mission sections. */
export interface LabProfile {
  /** Name of the research lab. */
  name: string;
  /** Short tagline for the lab. */
  tagline: string;
  /** Mission statement paragraph. */
  mission: string;
  /** Lab GitHub profile URL. */
  githubUrl: string;
  /** Lab X (Twitter) profile URL. */
  xUrl: string;
  /** Lab HuggingFace profile URL. */
  huggingFaceUrl: string;
}

/** Project metadata shown in the projects section. */
export interface Project {
  /** Human-readable name of the project. */
  name: string;
  /** URL-friendly slug identifier. */
  slug: string;
  /** Project description text. */
  description: string;
  /** GitHub repository URL. */
  githubUrl: string;
  /** GitHub star count for display purposes. */
  stars: number;
  /** Optional external URL e.g. HuggingFace model card. */
  externalUrl?: string;
}

