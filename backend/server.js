import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"; //import auth router

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.get("/", (req, res) => {
  res.send("MERN Chat Server is Running");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
