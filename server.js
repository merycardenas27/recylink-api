const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT } = process.env;
const connectDB = require('./db');

connectDB();
const app = express();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

// Allow cross-origin
app.use(cors());
