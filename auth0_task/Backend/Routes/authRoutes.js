const express = require("express");
const { verifyToken } = require("../Controllers/authController");
const Router = express.Router();

Router.post("/verify-token", verifyToken);
module.exports = Router;
