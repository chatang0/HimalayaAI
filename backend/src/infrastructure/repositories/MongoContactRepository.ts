import { ContactRepository } from "../../domain/repositories/ContactRepository";
import { Contact } from "../../domain/entities/Contact";
import { ContactModel } from "../models/ContactModel";

/**
 * MongoDB-backed contact repository using Mongoose.
 */
export class MongoContactRepository implements ContactRepository {
  /**
   * Creates a new contact document in MongoDB.
   * @param input Contact data without id and createdAt.
   */
  async create(input: Omit<Contact, "id" | "createdAt">): Promise<Contact> {
    const created = await ContactModel.create({
      name: input.name,
      email: input.email,
      message: input.message
    });

    return {
      id: created._id.toString(),
      name: created.name,
      email: created.email,
      message: created.message,
      createdAt: created.createdAt
    };
  }
}

