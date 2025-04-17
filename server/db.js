const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' }); 


const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI
    if (!url) {
      console.error("MONGO_URI is not defined in the .env file");
      process.exit(1); // Exit if the URI is not found
    }
    const conn = await mongoose.connect(url);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('Mongo connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;