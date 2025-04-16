const mongoose = require("mongoose");

const vanSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  price: Number,
  location: String,
  image: String,
  sleeps: Number,
  available: Boolean,
});

module.exports = mongoose.model("Van", vanSchema);
