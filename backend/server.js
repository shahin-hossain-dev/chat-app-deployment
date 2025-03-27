// package import
import path from "path";
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

//file import
import authRoutes from "./routes/auth.routes.js"; //import auth router
import connectToMongoDB from "./database/connectMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

//config

//variables
// const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); //it will get the root path of the chat-app

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:5000/"],
    credentials: true,
  })
);

// use separate router system for organize code
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist"))); // from root get frontend/dist folder for deployment

//for client side routing and send index.html file to client
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.get("/", (req, res) => {
  res.send("MERN Chat Server is Running");
});

server.listen(PORT, () => {
  connectToMongoDB(); // connect mongodb
  console.log(`Server Running on PORT ${PORT}`);
});
