import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { createNewMessage } from "../controllers/messageController.js";

// init router from express
const router = express.Router();

// routing
router.post("/new-message", authMiddleware, createNewMessage);

// export default
export default router;
