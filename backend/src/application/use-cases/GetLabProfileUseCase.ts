import { LabProfileEntity } from "../../domain/entities/LabProfile";

/**
 * Use case for retrieving the HARL lab profile.
 */
export class GetLabProfileUseCase {
  /**
   * Returns the static lab profile information.
   */
  async execute(): Promise<LabProfileEntity> {
    return {
      name: "Himalaya AI Research Lab (HARL)",
      tagline: "Building AI That Speaks Nepali",
      mission:
        "Building a foundation AI model called HimalayaGPT that fully understands and generates the Nepali language fluently. " +
        "We are dedicated to building Sovereign AI infrastructure for Nepal through datasets, models, and community-driven research.",
      githubUrl: "https://github.com/HimalayaGPT",
      xUrl: "https://x.com/HimalayaAILab",
      huggingFaceUrl: "https://huggingface.co/himalaya-ai"

    };
  }
}

