import {
  users, type User, type InsertUser,
  waitlist, type Waitlist, type InsertWaitlist,
  newsletter, type Newsletter, type InsertNewsletter
} from "@shared/schema";
import { createPool } from 'mysql2/promise';
import type { Contact, InsertContact } from '@shared/schema';

// Create MySQL connection pool
const pool = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Waitlist methods
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistEntries(): Promise<Waitlist[]>;

  // Contact methods
  createContactEntry(entry: InsertContact): Promise<Contact>;
  getContactEntries(): Promise<Contact[]>;

  // Newsletter methods
  createNewsletterEntry(entry: InsertNewsletter): Promise<Newsletter>;
  getNewsletterEntries(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, Waitlist>;
  private newsletterEntries: Map<number, Newsletter>;

  currentUserId: number;
  currentWaitlistId: number;
  currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.newsletterEntries = new Map();

    this.currentUserId = 1;
    this.currentWaitlistId = 1;
    this.currentNewsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Waitlist methods
  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const id = this.currentWaitlistId++;
    const waitlistEntry: Waitlist = {
      ...entry,
      id,
      createdAt: new Date()
    };
    this.waitlistEntries.set(id, waitlistEntry);
    return waitlistEntry;
  }

  async getWaitlistEntries(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values());
  }


  // Newsletter methods
  async createNewsletterEntry(entry: InsertNewsletter): Promise<Newsletter> {
    // Check for existing email to maintain uniqueness
    const exists = Array.from(this.newsletterEntries.values()).find(
      (newsletter) => newsletter.email === entry.email
    );

    if (exists) {
      return exists;
    }

    const id = this.currentNewsletterId++;
    const newsletterEntry: Newsletter = {
      ...entry,
      id,
      createdAt: new Date()
    };
    this.newsletterEntries.set(id, newsletterEntry);
    return newsletterEntry;
  }

  async getNewsletterEntries(): Promise<Newsletter[]> {
    return Array.from(this.newsletterEntries.values());
  }
}

export class Storage {
  async createContactEntry(contact: InsertContact): Promise<Contact> {
    const [result] = await pool.execute(
      'INSERT INTO contacts (name, email, phone, subject, message, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      [contact.name, contact.email, contact.phone, contact.subject, contact.message, new Date()]
    );

    return {
      id: (result as any).insertId,
      ...contact,
      createdAt: new Date()
    };
  }

  async getContactEntries(): Promise<Contact[]> {
    const [rows] = await pool.execute('SELECT * FROM contacts');
    return rows as Contact[];
  }
  async getUser(id: number): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  async getUserByUsername(username: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  async createUser(user: InsertUser): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    throw new Error("Method not implemented.");
  }
  async getWaitlistEntries(): Promise<Waitlist[]> {
    throw new Error("Method not implemented.");
  }
  async createNewsletterEntry(entry: InsertNewsletter): Promise<Newsletter> {
    throw new Error("Method not implemented.");
  }
  async getNewsletterEntries(): Promise<Newsletter[]> {
    throw new Error("Method not implemented.");
  }
}

export const storage = new Storage();