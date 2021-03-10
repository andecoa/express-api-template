const express = require('express');
const database = require('./config/database');

const app = express();

app.listen(process.env.PORT, async () => {
  try {
    await database();
  } catch (err) {
    console.log(err);
  }
});
