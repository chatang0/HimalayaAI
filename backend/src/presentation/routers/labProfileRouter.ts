import { Router } from "express";
import { getLabProfileHandler } from "../controllers/LabProfileController";

/**
 * Router exposing the lab profile endpoint.
 */
export const labProfileRouter = Router();

labProfileRouter.get("/", (req, res) => {
  void getLabProfileHandler(req, res);
});

