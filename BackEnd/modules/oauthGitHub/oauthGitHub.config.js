const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const initGitHubPassport = () => {
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
};

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_CLIENT_SECRET,
      callbackURL: process.env.GH_CB_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("user profile", profile);

      return done(null, profile);
    },
  ),
);

module.exports = { initGitHubPassport };
