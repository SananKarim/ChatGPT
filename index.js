const express = require("express");
const authenticateToken = require("./middleware/auth");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/healthpoint", (req, res) => {
  res.status(200).json("connected");
});

app.get("/protected", authenticateToken, (req, res) => {
  res.status(200).send("Access granted");
});

app.listen(3001 || 1337, () => {
  console.log("Server started");
});

app.get("/protected", authenticateToken, (req, res) => {
  res.status(200).send("Access granted");
});

app.use(authRoutes);
