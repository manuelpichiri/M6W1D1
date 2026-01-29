const express = require("express");
const startServer = require("./config/db");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const port = 4545;
const server = express();

//rutes import
const authorRoute = require("./modules/author/author.routes");
const authRoute = require("./modules/auth/auth.route");
const postRoute = require("./modules/post/post.routes");
const commentRoute = require("./modules/comment/comment.routes");
const oauthGithubRoute = require("./modules/oauthGitHub/oauthGitHub.route");
const oauthGoogleRoute = require("./modules/oauthGoogle/oauthGoogle.route");
const {
  initGitHubPassport,
} = require("./modules/oauthGitHub/oauthGitHub.config");
const {
  initGooglePassport,
} = require("./modules/oauthGoogle/oauthGoogle.config");

//middleware imports

const errorHandler = require("./middlewares/errorHandler/errorHandler");

const responseTime = require("./middlewares/responseTime/responseTimeMiddleware");

server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

//middlewares
server.use(responseTime);
server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

//passport
server.use(passport.initialize());
server.use(passport.session());
initGooglePassport();
initGitHubPassport();

//route
server.use("/", authRoute);
server.use("/", oauthGithubRoute);
server.use("/", oauthGoogleRoute);

server.use("/", postRoute); // seguire quest'ordine e passare il verify token direttamente nelle route, passandolo singolarmente crea conflitto e
//  posizionando le route con il verifytoken sopra le altre che non lo hanno crea conflitto con costante errore 401
server.use("/", authorRoute);
server.use("/", commentRoute);

//error Handler
server.use(errorHandler);
startServer(port, server);
