const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

// Make a connection to MongoDB
module.exports = async () => {
  await mongoose.connect(MONGO_URI);
  // eslint-disable-next-line no-console
  console.log('MongoDB connected');
};
