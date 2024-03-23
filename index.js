const express = require("express");
const jwt = require("jsonwebtoken");
const authenticateToken = require("./middleware/auth");
const authRoutes = require("./routes/authRoutes");
body_parser = require("body-parser");


const app = express();
app.use(express.static("public"));
app.use(express.json());
app = express().use(body_parser.json());


app.get("/healthpoint",  (req, res) => {
  res.status(200).json("connected");
});

app.listen(3001 || 1337, () => {
  console.log("Server started");
});
// app.get("/protected", authenticateToken, (req, res) => {
//   res.status(200).send("Access granted");
// });

// app.use(authRoutes);

