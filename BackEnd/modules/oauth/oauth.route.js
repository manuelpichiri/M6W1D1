const express = require("express");
const oauth = express.Router();
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const session = require("express-session");

//imposta il middleware che gestisce la sessione lato server

oauth.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitailized: false,
  }),
);

//middlewares di passport

oauth.use(passport.initialize()); //passport.initialize() aggancia all'oggetto  Request, req.login e req.user ecc..
oauth.use(passport.session()); // abilitiamo il suppero alle sessioni: se esiste una sessione valida, passport popola req.user

//serialize e unserialize dello user
passport.serializeUser((user, done) => done(null, user)); // decide cosa salvare in sessione quando effettui il login
passport.deserializeUser((user, done) => done(null, user)); // decide come riscostruire req.user nelle richiese successive

//strategia di accesso
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_CLIENT_SECRET,
      callbackURL: process.env.GH_CB_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      //accessToken= token oauth, utilizzabile per chiamare Api di github per conto dell'utente. Es se nel nostro sito vogliamo visualizzare tutti i repositori relativi all'account possiamo farlo (rivedi)
      //refreshTokern= non sempre disponibile, si usa per refreshare un token scaduto
      // profile = oggetto con tutte le informazioni che ci ha ritornato il provider scelto (in questo caso GITHUB)
      //done = dice a passport di aver finito, e passa l'utente come argomento

      console.log("user profile", profile);

      return done(null, profile); //solitamente si passa solo l'id
    },
  ),
);

module.exports = oauth;
