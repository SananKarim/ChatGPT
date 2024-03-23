const express = require('express');
const authController = require("../controllers/authController");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.post("/login", authController.login_post);
router.post("/data", dataController.getAllUsers);

module.exports = router;
