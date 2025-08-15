import serverless from "serverless-http";
import { createServer } from "../../server";

/**
 * Netlify serverless function entry point
 * Wraps our Express (or other) app in a serverless handler.
 */
const app = createServer();

// Basic logging middleware for debugging
app.use((req, res, next) => {
  console.log(`[API] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint for debugging
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Error handler to prevent unhandled promise rejections
app.use((err: any, req: any, res: any, next: any) => {
  console.error("API Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

export const handler = serverless(app);
