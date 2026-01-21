const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      min: 1,
      max: 200,
      required: true,
    },
    cognome: {
      type: String,
      min: 1,
      max: 250,
      required: true,
    },
    password: {
      type: String,
      min: 10,
      max: 200,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dataDiNascita: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        default: [],
      },
    ],
    avatar: {
      type: String,
      min: 1,
      required: false,
    },
  },
  { timestamps: true, strict: true },
);

module.exports = mongoose.model("author", authorSchema, "authors");
