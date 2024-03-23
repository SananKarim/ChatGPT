const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://vercel-admin-user-65fec38b7dd1410a8e3f8952:4GDm3Ptk4THu1QJA@cluster0.t9his3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the application if database connection fails
  });

module.exports = mongoose.connection;
