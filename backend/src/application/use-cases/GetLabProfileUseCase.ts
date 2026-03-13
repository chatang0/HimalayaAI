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
      tagline: "Working towards a 1T-token Nepali Devanagari corpus.",
      mission:
        "Himalaya AI Research Lab is an early-stage, open initiative focused on building a high-quality " +
        "Nepali Devanagari text dataset at the 1 trillion token scale. Our current work is centered on " +
        "corpus collection, cleaning, and documentation so that future Nepali large language models (LLMs) " +
        "and tools can be trained on transparent, locally grounded data.",
      githubUrl: "https://github.com/HimalayaAI",
      xUrl: "https://x.com/HimalayaAILab",
      huggingFaceUrl: "https://huggingface.co/himalaya-ai"
    };
  }
}

