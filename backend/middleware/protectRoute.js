import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.token.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Token Invalid" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.send(404).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error form protect middleware : ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export default protectRoute;
