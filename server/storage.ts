import {
  type Contact, type InsertContact,
} from "@shared/schema";
import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: process.env.MYSQL_HOST,
  port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 60000
});

pool.getConnection()
  .then(connection => {
    console.log('Database connected successfully');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to the database:', err.message);
  });

export interface IStorage {
  createContactEntry(entry: InsertContact): Promise<Contact>;
  getContactEntries(): Promise<Contact[]>;
}

export class Storage implements IStorage {
  async createContactEntry(entry: InsertContact): Promise<Contact> {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
        [entry.name, entry.email, entry.phone || null, entry.subject, entry.message]
      );

      const insertId = (result as any).insertId;
      return {
        id: insertId,
        ...entry,
        createdAt: new Date()
      };
    } finally {
      connection.release();
    }
  }

  async getContactEntries(): Promise<Contact[]> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute('SELECT * FROM contacts ORDER BY created_at DESC');
      return rows as Contact[];
    } finally {
      connection.release();
    }
  }
}

export const storage = new Storage();
