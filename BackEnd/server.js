const express = require("express");
const startServer = require("./config/db");
const cors = require("cors");

const port = 4545;

const authorRoute = require("./modules/author/author.routes");
const postRoute = require("./modules/post/post.routes");
const commentRoute = require("./modules/comment/comment.routes");
const server = express();
server.use(express.json());
server.use(cors());
server.use("/", postRoute);
server.use("/", authorRoute);
server.use("/", commentRoute);
startServer(port, server);
