import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hi there!</h1>');
});

await connectToDatabase();

app.listen(3000, "0.0.0.0");
