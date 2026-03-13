import { ProjectEntity } from "../../domain/entities/Project";

/**
 * Use case for retrieving featured HARL projects.
 */
export class GetProjectsUseCase {
  /**
   * Returns a list of featured projects.
   */
  async execute(): Promise<ProjectEntity[]> {
    return [
      {
        name: "Nepali Corpus",
        slug: "nepali-corpus",
        description:
          "Open, carefully curated Nepali text corpus for training and evaluating language models. " +
          "Includes diverse domains such as news, literature, and conversational text.",
        githubUrl: "https://github.com/HimalayaAI/nepali-corpus",
        stars: 0,
        externalUrl: "https://huggingface.co/himalaya-ai"
      }
    ];
  }
}

