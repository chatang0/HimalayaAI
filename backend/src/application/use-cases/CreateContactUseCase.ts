import { ContactRepository } from "../../domain/repositories/ContactRepository";
import { Contact } from "../../domain/entities/Contact";
import { ContactFormData } from "../../../../shared/types";

/**
 * Use case responsible for validating and creating a new contact entry.
 */
export class CreateContactUseCase {
  /** Underlying repository implementation. */
  private readonly contactRepository: ContactRepository;

  /**
   * Creates a new instance of CreateContactUseCase.
   * @param contactRepository Repository used to persist contacts.
   */
  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  /**
   * Validates and persists the provided contact form data.
   * @param data Contact form data.
   */
  async execute(data: ContactFormData): Promise<Contact> {
    const name = data.name.trim();
    const email = data.email.trim();
    const message = data.message.trim();

    if (!name || !email || !message) {
      throw new Error("All fields are required.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
    if (!emailPattern.test(email)) {
      throw new Error("Invalid email address.");
    }

    const contact = await this.contactRepository.create({
      name,
      email,
      message
    });

    return contact;
  }
}

