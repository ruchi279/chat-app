import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const PORT = ENV.PORT || process.env.PORT || 3000;

app.use(express.json({ limit: "5mb" }));

app.use(
  cors({
    origin: ENV.CLIENT_URL || process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Chatify Backend is Running 🚀",
  });
});

// Start Server
server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});