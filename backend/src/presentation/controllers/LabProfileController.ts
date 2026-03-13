import { Request, Response } from "express";
import { Container } from "../../infrastructure/container";
import type { ApiResponse, LabProfile } from "../../../../shared/types";

const container = Container.getInstance();

/**
 * HTTP handler returning the HARL lab profile.
 */
export async function getLabProfileHandler(
  _req: Request,
  res: Response<ApiResponse<LabProfile>>
): Promise<void> {
  try {
    const profile = await container.labProfileUseCase.execute();
    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to load lab profile.";
    res.status(500).json({
      success: false,
      error: message
    });
  }
}

