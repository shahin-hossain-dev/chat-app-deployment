import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router(); //create router for express backend

// use controller and router system for more organize code
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage); // this id is receiverId

export default router;
