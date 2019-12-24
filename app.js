const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

app.use('/awe', require('./routes/awe'))

module.exports = app;
