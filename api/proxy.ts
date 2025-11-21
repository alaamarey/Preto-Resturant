import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_BASE = "https://freeapi.gerasim.in/api/zomato/";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Remove "/proxy/" from the path
  const targetUrl = API_BASE + req.url!.replace("/api/proxy/", "");

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.json();

    // Allow CORS (very important)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    return res.status(response.status).json(data);

  } catch (err: any) {
    return res.status(500).json({
      error: "Proxy Error",
      details: err.message,
    });
  }
}
