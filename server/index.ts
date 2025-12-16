import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Helper to start the server
async function bootstrap() {
  const httpServer = createServer(app);

  // 1. Register API Routes (pass app and server)
  await registerRoutes(httpServer, app);

  // 2. Setup Error Handling
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // 3. Setup Vite (ONLY in Development)
  if (process.env.NODE_ENV !== "production") {
    // DYNAMIC IMPORT: This prevents the crash in production
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  return httpServer;
}

// 4. Start Server (Only if running locally)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  bootstrap().then((server) => {
    server.listen(PORT, () => {
      console.log(`🚀 Server running locally on http://localhost:${PORT}`);
    });
  });
}

// 5. Export app for Vercel
export default app;