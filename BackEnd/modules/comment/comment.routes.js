const express = require("express");
const comment = express.Router();
const commentController = require("./comment.controller");

comment.get("/comment", commentController.findAll);
comment.get("/comment/:id", commentController.findById);

comment.post("/comment", commentController.create);

comment.patch("/comment/:id", commentController.updateComment);

comment.delete("/comment/:id", commentController.deleteComment);

module.exports = comment;
