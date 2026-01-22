const express = require("express");
const auth = express.Router();
const authController = require("./auth.controller");

auth.post("/auth/login", authController.login);

module.exports = auth;
