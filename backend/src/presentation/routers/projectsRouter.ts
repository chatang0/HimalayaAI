import { Router } from "express";
import { getProjectsHandler } from "../controllers/ProjectsController";

/**
 * Router exposing the projects endpoint.
 */
export const projectsRouter = Router();

projectsRouter.get("/", (req, res) => {
  void getProjectsHandler(req, res);
});

