import { Contact } from "../entities/Contact";

/**
 * Repository abstraction for persisting contacts.
 */
export interface ContactRepository {
  /**
   * Persists a new contact entry.
   * @param input Contact data without id and createdAt fields.
   */
  create(input: Omit<Contact, "id" | "createdAt">): Promise<Contact>;
}

