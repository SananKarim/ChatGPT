const mongoose = require("mongoose");

// const MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/chatGPT";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the application if database connection fails
  });

module.exports = mongoose.connection;
