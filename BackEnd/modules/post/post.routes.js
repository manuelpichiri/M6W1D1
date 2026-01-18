const express = require("express");
const post = express.Router();
const postController = require("./post.controllers");
const { cloudUpload } = require("../../middlewares/uploads");

post.get("/post", postController.findAllPost);
post.post("/post", postController.createPost);
post.get("/post/:id", postController.findPostById);
post.delete("/post/:id", postController.deletePost);

post.patch("/post/:id", postController.updatePost);
post.patch(
  "/post/cover/:id",
  cloudUpload.single("cover"),
  postController.uploadFileOnCloudByID
);

module.exports = post;
