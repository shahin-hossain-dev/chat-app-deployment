import express from "express";
import { login } from "../controllers/auth.controller.js";

const router = express.Router(); //create router for express backend

router.get("/signup", (req, res) => {
  res.send("Sign up Route");
});

router.get("/login", login);

router.get("/logout", (req, res) => {
  res.send("Logout Route");
});

export default router;
