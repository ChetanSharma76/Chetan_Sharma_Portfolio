import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

// Initialize Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chetansharma752005@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email to Chetan's Gmail
      try {
        await transporter.sendMail({
          from: "chetansharma752005@gmail.com",
          to: "chetansharma752005@gmail.com",
          subject: `New Contact Form Message: ${validatedData.subject}`,
          html: `
            <h2>New Message from Portfolio Contact Form</h2>
            <p><strong>From:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <hr>
            <h3>Message:</h3>
            <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>Message ID: ${message.id}</small></p>
          `,
          replyTo: validatedData.email,
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Still return success even if email fails, as message is saved
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        id: message.id 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          error: validationError.message 
        });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to send message. Please try again later." 
        });
      }
    }
  });

  // Optional: Get all messages (for future admin panel)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  return httpServer;
}
