const express = require("express");
const startServer = require("./config/db");
const cors = require("cors");

const port = 4545;
//rutes import
const authorRoute = require("./modules/author/author.routes");
const authRoute = require("./modules/auth/auth.route");
const postRoute = require("./modules/post/post.routes");
const commentRoute = require("./modules/comment/comment.routes");

//middleware imports
const verifyToken = require("./middlewares/auth/verifytoken");

const server = express();

//middlewares
server.use(verifyToken);

//route
server.use(express.json());
server.use(cors());
server.use("/", postRoute);
server.use("/", authorRoute);
server.use("/", commentRoute);
server.use("/", authRoute);
startServer(port, server);
