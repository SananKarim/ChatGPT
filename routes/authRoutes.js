const express = require('express');
const authController = require("../controllers/authController");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.post("/login", authController.login_post);
router.post("/data", authController.data);

module.exports = router;
