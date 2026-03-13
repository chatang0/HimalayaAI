import { Router } from "express";
import { createContactHandler } from "../controllers/ContactController";

/**
 * Router exposing the contact endpoint.
 */
export const contactRouter = Router();

contactRouter.post("/", (req, res) => {
  void createContactHandler(req, res);
});

