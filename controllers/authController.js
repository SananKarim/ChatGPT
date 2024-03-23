const jwt = require("jsonwebtoken");
const User = require("../model/user.js");
const db = require("../db/db.js");

module.exports.login_post = async (req, res) => {
  const { email, pin } = req.body;

  if (!db.readyState) {
    return res
      .status(500)
      .json({ success: false, error: "Database connection failed" });
  }

  try {
 
    const user = await User.findOne({ email, pin });
    console.log(user);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid credentials" });
    }

    const accessToken = jwt.sign({ email: user.email }, 'testing', { expiresIn: "2m" });
    const refreshToken = jwt.sign({ email: user.email }, 'testing', { expiresIn: "10m" });
    
    return res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    // Log the detailed error message
    console.error("Error fetching user from database:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message, // Include the error message in the response
    });
  }
};
