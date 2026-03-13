import dotenv from "dotenv";

dotenv.config();

/**
 * Backend runtime configuration loaded from environment variables.
 */
export const config = {
  /** Port for the HTTP server. */
  port: Number(process.env.PORT ?? 4000),
  /** Current node environment. */
  nodeEnv: process.env.NODE_ENV ?? "development",
  /** MongoDB connection string. */
  mongodbUri: process.env.MONGODB_URI ?? "",
  /** Allowed CORS origin for the frontend. */
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:5173"
};

