export const config = {
  runtime: "nodejs18.x",
};

process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("🔥 Unhandled Rejection:", reason);
});


import "./env";
import { setupVite } from "./vite";
import { createServer } from "http";
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";

const app = express();

/* ------------------ RAW BODY SUPPORT ------------------ */
declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

/* ------------------ LOGGER ------------------ */
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

/* ------------------ REQUEST LOGGER ------------------ */
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      log(logLine);
    }
  });

  next();
});

/* ------------------ BOOTSTRAP ------------------ */
async function bootstrap() {
  const httpServer = createServer(app);

  await registerRoutes(httpServer, app);

  if (process.env.NODE_ENV === "development") {
    await setupVite(httpServer, app); // ✅ THIS WAS MISSING
  }

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  }

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  return httpServer;
}


/* ------------------ LOCAL DEV ONLY ------------------ */
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;

  bootstrap().then((server) => {
    server.listen(PORT, () => {
      log(`🚀 Server running locally on http://localhost:${PORT}`, "server");
    });
  });
} else {
  bootstrap();
}


/* ------------------ VERCEL EXPORT ------------------ */
export default app;
