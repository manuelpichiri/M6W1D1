const express = require("express");
const author = express.Router();
const authorController = require("./author.controller");
author.get("/author", authorController.findAll);
author.post("/author", authorController.create);
author.get("/author/:id", authorController.findById);
author.delete("/author/:id", authorController.deleteAuthor);
author.patch("/author/:id", authorController.updateAuthor);
module.exports = author;
