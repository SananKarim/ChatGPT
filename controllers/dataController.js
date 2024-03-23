const db = require("../db/db.js");

module.exports.getAllUsers = async (req, res) => {
  try {
    if (!db.readyState) {
      return res
        .status(500)
        .json({ success: false, error: "Database connection failed" });
    }
    
    const usersCollection = db.collection("user");

    const users = await usersCollection.find().toArray();

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
