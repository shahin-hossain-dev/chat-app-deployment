import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router(); //create router for express backend

// use controller and router system for more organize code
router.post("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

export default router;
