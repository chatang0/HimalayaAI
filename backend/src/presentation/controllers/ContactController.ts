import { Request, Response } from "express";
import { Container } from "../../infrastructure/container";
import type { ApiResponse, ContactFormData } from "../../../../shared/types";

const container = Container.getInstance();

/**
 * HTTP handler accepting and persisting contact form submissions.
 */
export async function createContactHandler(
  req: Request<unknown, unknown, ContactFormData>,
  res: Response<ApiResponse<{ id: string }>>
): Promise<void> {
  try {
    const contact = await container.createContactUseCase.execute(req.body);
    res.status(201).json({
      success: true,
      data: { id: contact.id }
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create contact.";
    res.status(400).json({
      success: false,
      error: message
    });
  }
}

