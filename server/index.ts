import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Global variable to hold the initialized app so we don't rebuild it on every request
let appInitialized = false;

async function setupApp() {
  if (appInitialized) return app;

  const httpServer = createServer(app);

  // 1. Register API Routes
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
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  appInitialized = true;
  return app;
}

// Start Server (Only if running locally)
if (process.env.NODE_ENV !== "production") {
  setupApp().then((appInstance) => {
    const PORT = process.env.PORT || 5000;
    const httpServer = createServer(appInstance); // Re-create server wrapper for local
    httpServer.listen(PORT, () => {
      console.log(`🚀 Server running locally on http://localhost:${PORT}`);
    });
  });
}

// Export the SETUP function, not the app directly
export default setupApp;