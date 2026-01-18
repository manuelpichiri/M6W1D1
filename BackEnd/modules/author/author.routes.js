const express = require("express");
const author = express.Router();
const authorController = require("./author.controller");
const { cloudUpload } = require("../../middlewares/uploads");

author.get("/author", authorController.findAll);
author.post("/author", authorController.create);
author.get("/author/:id", authorController.findById);
author.delete("/author/:id", authorController.deleteAuthor);

author.patch("/author/:id", authorController.updateAuthor);
author.patch(
  "/author/:id/avatar",
  cloudUpload.single("avatar"),
  authorController.updateAuthor
);
module.exports = author;
