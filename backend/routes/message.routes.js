import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router(); //create router for express backend

// use controller and router system for more organize code
router.post("/send/:id", protectRoute, sendMessage);

export default router;
