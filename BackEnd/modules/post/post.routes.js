const express = require("express");
const post = express.Router();
const postController = require("./post.controllers");
const { cloudUpload } = require("../../middlewares/uploads");

post.get("/post", postController.findAllPost);
post.get("/post/:id", postController.findPostById);
post.get("/post/:id/comments", postController.findAllCommentByPostId);

post.delete("/post/:id", postController.deletePost);

post.post("/post", postController.createPost);

post.patch("/post/:id", postController.updatePost);
post.patch(
  "/post/cover/:id",
  cloudUpload.single("cover"),
  postController.uploadFileOnCloudByID,
);

module.exports = post;
