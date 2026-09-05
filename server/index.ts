import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes.js"; // <--- Add .js here
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function setupApp() {
  const httpServer = createServer(app);

  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Setup Vite (Dynamic Import for ESM)
  if (process.env.NODE_ENV !== "production") {
    try {
      // Add .js here too
      const vite = await import("./vite.js"); 
      await vite.setupVite(httpServer, app);
    } catch (err) {
      console.error("Vite load failed:", err);
    }
  }

  return app;
}

// Local Dev Start
if (process.env.NODE_ENV !== "production") {
  setupApp().then((appInstance) => {
    const PORT = process.env.PORT || 5000;
    const httpServer = createServer(appInstance);
    httpServer.listen(PORT, () => {
      console.log(`🚀 Server running locally on http://localhost:${PORT}`);
    });
  });
}

export default setupApp;