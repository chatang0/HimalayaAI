import { PrismaClient, Contact as PrismaContact } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { ContactRepository } from '../../domain/repositories/ContactRepository';
import { Contact } from '../../domain/entities/Contact';
import path from 'path';

// For SQLite, Prisma 7 expects the URL in the adapter configuration
const dbPath = `file:${path.resolve(process.cwd(), 'dev.db')}`;
const adapter = new PrismaBetterSqlite3({ url: dbPath });

const prisma = new PrismaClient({
  adapter,
});

/**
 * SQLite implementation of the ContactRepository using Prisma.
 */
export class PrismaContactRepository implements ContactRepository {
  /**
   * Stores a new contact submission in the SQLite database.
   */
  async create(contact: Contact): Promise<Contact> {
    const created = await prisma.contact.create({
      data: {
        name: contact.name,
        email: contact.email,
        message: contact.message,
        createdAt: contact.createdAt,
      }
    });

    return {
      id: created.id,
      name: created.name,
      email: created.email,
      message: created.message,
      createdAt: created.createdAt,
    };
  }

  /**
   * Retrieves all contact submissions from the database.
   */
  async findAll(): Promise<Contact[]> {
    const contacts = await prisma.contact.findMany();
    return contacts.map(c => ({
      id: c.id,
      name: c.name,
      email: c.email,
      message: c.message,
      createdAt: c.createdAt,
    }));
  }
}
