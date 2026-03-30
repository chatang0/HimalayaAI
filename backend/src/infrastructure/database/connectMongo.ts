import mongoose from "mongoose";
import { config } from "../../config";

let mongoServer: any = null;

/**
 * Establishes a connection to MongoDB using Mongoose.
 * Falls back to an in-memory database if MONGODB_URI is not provided.
 */
export async function connectMongo(): Promise<void> {
  if (!config.mongodbUri) {
    console.warn("MONGODB_URI missing in environment variables. Database connection skipped.");
    return;
  }

  try {
    await mongoose.connect(config.mongodbUri);
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}


