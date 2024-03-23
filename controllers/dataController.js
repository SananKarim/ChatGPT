const db = require("../db/db.js");
const User = require("../model/user.js");

module.exports.getAllUsers = async (req, res) => {
  try {
    if (!db.readyState) {
      return res
        .status(500)
        .json({ success: false, error: "Database connection failed" });
    }
    const users = await User.find();

    return res.status(200).json({ success: true, data: users });

    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching user data from database:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};
