const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();

const { PORT } = process.env;
const connectDB = require('./db');
const schema = require('./graphql/schema');

connectDB();
const app = express();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

// Allow cross-origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
