import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 1. Define the setup function (Lazy Loading)
async function setupApp() {
  const httpServer = createServer(app);

  // Register API Routes
  await registerRoutes(httpServer, app);

  // Error Handling
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Setup Vite (ONLY IN LOCAL DEV)
  // Vercel will ignore this block completely
  if (process.env.NODE_ENV !== "production") {
    try {
      const { setupVite } = await import("./vite");
      await setupVite(httpServer, app);
    } catch (err) {
      console.error("Failed to load Vite (this is fine in production):", err);
    }
  }

  return app;
}

// 2. Start the Listener (ONLY IN LOCAL DEV)
// This block will NEVER run on Vercel because NODE_ENV is "production"
if (process.env.NODE_ENV !== "production") {
  (async () => {
    const appInstance = await setupApp();
    const PORT = process.env.PORT || 5000;
    const httpServer = createServer(appInstance);
    httpServer.listen(PORT, () => {
      console.log(`🚀 Server running locally on http://localhost:${PORT}`);
    });
  })();
}

// 3. Export the setup function for Vercel
export default setupApp;