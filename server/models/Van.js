const mongoose = require("mongoose");


const VanSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    location: String,
    image: String,
    sleeps: Number,
    available: Boolean,
    description: String,
    features: [String],
    specifications: {},
    images: [String]
});

module.exports = mongoose.model("Van", VanSchema);
