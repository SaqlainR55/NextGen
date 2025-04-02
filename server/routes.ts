import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertWaitlistSchema, 
  insertContactSchema, 
  insertNewsletterSchema 
} from "@shared/schema";

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

  // API routes for contact form (Twilio removed)
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const entry = await storage.createContactEntry(validatedData);

      res.status(201).json({ 
        success: true, 
        message: "Message saved successfully", 
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
