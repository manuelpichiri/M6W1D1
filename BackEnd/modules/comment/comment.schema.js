const mongoose = require("mongoose");

const comment = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post", //il nome del modello, ovvero quello
      //  che abbiamo passato per primo nell'export dello schema, in questo caso post.
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
    },
  },
  { timestamps: true, strict: true },
);

module.exports = mongoose.model("Comment", comment, "comments");
