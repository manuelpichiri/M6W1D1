const express = require("express");
const startServer = require("./config/db");

const port = 4545;

const authorRoute = require("./author/author.routes");

const server = express();
server.use(express.json());
server.use("/", authorRoute);
startServer(port, server);
