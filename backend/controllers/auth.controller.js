// all auth controller here
import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "confirm password doesn't matched" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "user already exist" });
    }

    //HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //avatar link: https://avatar.iran.liara.run

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //Generate JWT Token
      generateTokenAndSetCookies(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error, Signup" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = await req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = bcrypt.compareSync(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookies(user._id, res);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(`Error in login controller: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("chat-access-token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    console.log(`Error in logout controller : ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
