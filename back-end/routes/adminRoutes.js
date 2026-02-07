import express from "express";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import { createSomething } from "../controllers/adminController.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  authorizeRoles("admin", "manager"),   // ✅ both allowed
  createSomething
);

export default router;
