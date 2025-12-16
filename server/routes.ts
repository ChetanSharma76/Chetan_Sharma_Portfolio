import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage.js";
import { insertContactMessageSchema } from "../shared/schema.js";
import { fetchCodingStats } from "./lib/stats.js";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chetansharma752005@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function registerRoutes(httpServer: Server, app: Express) {
  
  // API Route
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);

      // Email logic
      try {
        await transporter.sendMail({
          from: "chetansharma752005@gmail.com",
          to: "chetansharma752005@gmail.com",
          subject: `Portfolio Contact: ${validatedData.subject}`,
          html: `
            <h3>New Message</h3>
            <p><strong>From:</strong> ${validatedData.name} (${validatedData.email})</p>
            <p><strong>Message:</strong><br/>${validatedData.message}</p>
          `,
          replyTo: validatedData.email,
        });
      } catch (emailError) {
        console.error("Email failed:", emailError);
      }

      res.status(200).json({ success: true, message: "Message sent!" });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ success: false, error: validationError.message });
      } else {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
      }
    }
  });

  app.get("/api/stats", async (req, res) => {
    try {
      // REPLACE THESE WITH YOUR ACTUAL USERNAMES
      const usernames = {
        leetcode: "ChetanSharma1", 
        codeforces: "chetansharma7777",
        codechef: "chetansharma07"
      };

      const stats = await fetchCodingStats(usernames);
      res.json(stats);
    } catch (error) {
      console.error("Stats API Error:", error);
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  // We return the httpServer helper, though index.ts already has it.
  return httpServer;
}