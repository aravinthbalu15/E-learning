import "dotenv/config"; // MUST be first
import "./config/passport.js";

import express from "express";
import cors from "cors";
import passport from "passport";
import DB from "./config/db.js";

// routes
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

DB();

const app = express();

// ---------------- MIDDLEWARE ----------------
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));


app.use(express.json({ limit: "10mb" }));

// 🔥 REQUIRED for passport OAuth
app.use(passport.initialize());

// ---------------- HEALTH CHECK ----------------
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ---------------- ROUTES ----------------
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// ---------------- 404 ----------------
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ---------------- SERVER ----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
