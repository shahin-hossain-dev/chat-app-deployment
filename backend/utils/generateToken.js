import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    // maxAge: 15 * 24 * 60 * 60 * 1000, //milliseconds
    // httpOnly: true, //prevent XSS attacks cross-site scripting attacks
    // sameSite: "strict", //CSRF attacks cross-site request forgery attacks

    httpOnly: true, // Prevent access via JavaScript
    secure: false, // Use true if you're running over HTTPS
    sameSite: "strict", // Required for cross-origin cookies
  });
};

export default generateTokenAndSetCookies;
