import { Request, Response } from "express";
import { Container } from "../../infrastructure/container";
import type { ApiResponse, Project } from "../../../../shared/types";

const container = Container.getInstance();

/**
 * HTTP handler returning featured HARL projects.
 */
export async function getProjectsHandler(
  _req: Request,
  res: Response<ApiResponse<Project[]>>
): Promise<void> {
  try {
    const projects = await container.projectsUseCase.execute();
    res.status(200).json({
      success: true,
      data: projects
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to load projects.";
    res.status(500).json({
      success: false,
      error: message
    });
  }
}

