const mongoose = require("mongoose");
const author = require("../author/author.routes");

const comment = new mongoose.Schema({
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
});
