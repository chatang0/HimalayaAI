/**
 * Project entity representing a featured HARL project.
 */
export interface ProjectEntity {
  /** Project name. */
  name: string;
  /** URL-friendly slug. */
  slug: string;
  /** Description text. */
  description: string;
  /** GitHub repository URL. */
  githubUrl: string;
  /** GitHub star count used for display. */
  stars: number;
  /** Optional external URL (e.g. HuggingFace). */
  externalUrl?: string;
}

