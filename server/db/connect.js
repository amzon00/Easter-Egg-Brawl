const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
};

// Why is it showing 0 even though the data is arriving.
console.log(`Ready state: ${mongoose.connection.readyState}`);

module.exports = connectDB;

// Ready states:

// 0: disconnected
// 1: connected
// 2: connecting
// 3: disconnecting
