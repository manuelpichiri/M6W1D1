const express = require("express");
const oauth = express.Router();
const passport = require("passport");
const oauthController = require("./oauthGitHub.controller");

oauth.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  oauthController.auth,
);
oauth.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  oauthController.manageOauthCallback,
);

module.exports = oauth;
