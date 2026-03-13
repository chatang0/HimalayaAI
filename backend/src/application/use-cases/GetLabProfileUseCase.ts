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
      tagline: "Building Nepal's open AI ecosystem.",
      mission:
        "Himalaya AI Research Lab advances open-source AI research for Nepali language and culture. " +
        "We build transparent datasets, models, and tools so that students, researchers, and builders " +
        "across Nepal can meaningfully participate in the next wave of AI innovation.",
      githubUrl: "https://github.com/HimalayaAI",
      xUrl: "https://x.com/HimalayaAILab",
      huggingFaceUrl: "https://huggingface.co/himalaya-ai"
    };
  }
}

