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
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dataDiNascita: {
      type: String,

      required: true,
    },
    avatar: {
      type: String,
      min: 1,
      required: false,
    },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("author", authorSchema, "authors");
