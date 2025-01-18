import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
  try {
    const token = req.token.jwt;

    next();
  } catch (error) {
    console.log("Error form protect middleware : ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export default protectRoute;
