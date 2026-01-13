const express = require("express");
const post = express.Router();
const postController = require("./post.controllers");

post.get("/blog", postController.findAllPost);
post.post("/blog", postController.createPost);
post.get("/blog/:id", postController.findPostById);
post.delete("/blog/:id", postController.deletePost);
post.patch("/blog/:id", postController.updatePost);

module.exports = post;
