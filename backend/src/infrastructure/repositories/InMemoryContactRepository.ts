import { ContactRepository } from "../../domain/repositories/ContactRepository";
import { Contact } from "../../domain/entities/Contact";

/**
 * Simple in-memory contact repository useful for tests.
 */
export class InMemoryContactRepository implements ContactRepository {
  /** Internal list of stored contacts. */
  private readonly items: Contact[] = [];

  /**
   * Persists a contact entry in memory.
   * @param input Contact data without id and createdAt.
   */
  async create(input: Omit<Contact, "id" | "createdAt">): Promise<Contact> {
    const contact: Contact = {
      id: String(this.items.length + 1),
      name: input.name,
      email: input.email,
      message: input.message,
      createdAt: new Date()
    };
    this.items.push(contact);
    return contact;
  }
}

