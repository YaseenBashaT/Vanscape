const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const url = 'mongodb+srv://yasenroycey6:N3mIiEPid1UZ38u7@vansdata.bcteh7y.mongodb.net/VansData'
    const conn = await mongoose.connect(url);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('Mongo connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;