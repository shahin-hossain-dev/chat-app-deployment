import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"; //import auth router
import connectToMongoDB from "./database/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.get("/", (req, res) => {
  res.send("MERN Chat Server is Running");
});

// use separate router system for organize code
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB(); // connect mongodb
  console.log(`Server Running on PORT ${PORT}`);
});
