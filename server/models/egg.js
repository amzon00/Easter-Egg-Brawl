const mongoose = require("mongoose");

const eggSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
  },
  img: {
    type: String,
    required: [true, "image must be provided"],
  },
});

module.exports = mongoose.model("Egg", eggSchema);
