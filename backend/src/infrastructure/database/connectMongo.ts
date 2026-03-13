import mongoose from "mongoose";
import { config } from "../../config";

/**
 * Establishes a connection to MongoDB using Mongoose.
 */
export async function connectMongo(): Promise<void> {
  if (!config.mongodbUri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(config.mongodbUri);
}

