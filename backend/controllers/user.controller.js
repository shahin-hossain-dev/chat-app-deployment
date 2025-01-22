import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //$ne == not equal
    // get all user but logged in User;
    // .select(-password) accept password property for all user
    const filterUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filterUsers);
  } catch (error) {
    console.log("Error in getUserForSidebar Controller: ", error.message);
    res.status(500).json("Internal Server Error");
  }
};
