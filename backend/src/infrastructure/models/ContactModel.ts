import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Mongoose document type representing a contact.
 */
export interface ContactDocument extends Document {
  /** Sender full name. */
  name: string;
  /** Sender email address. */
  email: string;
  /** Sender message body. */
  message: string;
  /** Creation timestamp. */
  createdAt: Date;
}

const ContactSchema = new Schema<ContactDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

/**
 * Mongoose model for contacts collection.
 */
export const ContactModel: Model<ContactDocument> =
  mongoose.models.Contact || mongoose.model<ContactDocument>("Contact", ContactSchema);

