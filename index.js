const express = require("express");
const jwt = require("jsonwebtoken");
const authenticateToken = require("./middleware/auth");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.listen(5001, () => {
  console.log("Server started");
});

app.get("/protected", authenticateToken, (req, res) => {
  res.status(200).send("Access granted");
});

app.use(authRoutes);

