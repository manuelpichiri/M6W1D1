const mongoose = require("mongoose");
const author = require("../author/author.routes");
const authorSchema = require("../author/author.schema");

const postSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      min: 1,
      max: 200,
      required: true,
    },
    title: {
      type: String,
      min: 1,
      max: 200,
      required: true,
    },
    cover: {
      type: String,
      required: false,
    },
    readTime: {
      value: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("post", postSchema, "posts");
