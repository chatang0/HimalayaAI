import { Router } from "express";
import { labProfileRouter } from "./labProfileRouter";
import { projectsRouter } from "./projectsRouter";
import { contactRouter } from "./contactRouter";

/**
 * Root API router that mounts feature routers.
 */
export const apiRouter = Router();

apiRouter.use("/lab-profile", labProfileRouter);
apiRouter.use("/projects", projectsRouter);
apiRouter.use("/contact", contactRouter);

