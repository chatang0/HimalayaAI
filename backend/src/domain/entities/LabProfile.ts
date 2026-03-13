/**
 * Lab profile entity containing static HARL information.
 */
export interface LabProfileEntity {
  /** Lab name. */
  name: string;
  /** Short tagline. */
  tagline: string;
  /** Mission statement paragraph. */
  mission: string;
  /** GitHub profile URL. */
  githubUrl: string;
  /** X (Twitter) profile URL. */
  xUrl: string;
  /** HuggingFace profile URL. */
  huggingFaceUrl: string;
}

