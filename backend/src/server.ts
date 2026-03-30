import express from "express";
import cors from "cors";
import { json } from "express";
import { config } from "./config";
import { apiRouter } from "./presentation/routers";
import { connectMongo } from "./infrastructure/database/connectMongo";

/**
 * Creates and configures the Express application.
 */
async function createApp() {
  const app = express();
  
  // Connect to MongoDB
  await connectMongo();

  app.use(
    cors({
      origin: config.corsOrigin,
      credentials: false
    })
  );
  app.use(json());

  app.get("/health", (_req, res) => {
    res.json({ success: true, data: { status: "ok" } });
  });

  app.use("/api", apiRouter);

  return app;
}

/**
 * Boots the HTTP server.
 */
async function bootstrap(): Promise<void> {
  try {
    const app = await createApp();
    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`HARL backend listening on port ${config.port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

void bootstrap();

