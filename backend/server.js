// package import
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

//file import
import authRoutes from "./routes/auth.routes.js"; //import auth router
import connectToMongoDB from "./database/connectMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

//config

//variables
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// use separate router system for organize code
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("MERN Chat Server is Running");
});

app.listen(PORT, () => {
  connectToMongoDB(); // connect mongodb
  console.log(`Server Running on PORT ${PORT}`);
});
