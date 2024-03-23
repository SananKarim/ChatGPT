const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://vercel-admin-user-65fec3f408f2a92ee20a382b:ZluLczPX9fCeh2Uy@cluster0.t9his3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); 
  });

module.exports = mongoose.connection;
