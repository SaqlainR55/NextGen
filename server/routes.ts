import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertWaitlistSchema, 
  insertContactSchema, 
  insertNewsletterSchema 
} from "@shared/schema";
import twilio from 'twilio';
import nodemailer from 'nodemailer';

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const BUSINESS_PHONE = '(877)-307-8131'; // Your business phone number

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for waitlist
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Successfully joined waitlist", 
        data: entry 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid data submitted",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  app.get("/api/waitlist", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      res.json({ success: true, data: entries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve waitlist entries",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // API routes for contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      console.log("Received contact form data:", req.body);
      const validatedData = insertContactSchema.parse({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        message: req.body.message
      });

      const entry = await storage.createContactEntry(validatedData);

      // Send email notification
      console.log('Email Configuration:', {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        // Don't log the password for security
      });
      
      const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false,
        auth: {
          user: '895fd1001@smtp-brevo.com',
          pass: 'bTM3jNLSmIWJPOwZ'
        },
        debug: true, // Enable debug logs
        logger: true // Log to console
      });

      // Verify connection configuration
      try {
        await transporter.verify();
        console.log('SMTP connection verified successfully');
      } catch (error) {
        console.error('SMTP connection verification failed:', error);
        throw error;
      }

      try {
        const info = await transporter.sendMail({
          from: `"NextGen MEP" <${process.env.SMTP_USER}>`,
          to: process.env.SMTP_USER, // Send to the same email for testing
          subject: `New Contact Form Submission: ${validatedData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message}</p>
          `
        });
        console.log('Email sent successfully:', info);
      } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
      }

      res.status(201).json({ 
        success: true,
        message: "Message sent successfully", 
        data: entry 
      });
    } catch (error) {
      console.error("Contact form validation error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid data submitted",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getContactEntries();
      res.json({ success: true, data: entries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact entries",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // API routes for newsletter
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const entry = await storage.createNewsletterEntry(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Successfully subscribed to newsletter", 
        data: entry 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid email submitted",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
