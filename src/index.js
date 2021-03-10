const express = require('express');
const database = require('./config/database');
const logger = require('./utils/logger');

const app = express();

app.listen(process.env.PORT, async () => {
  try {
    await database();
    logger.info(`Started app on port ${process.env.PORT}`);
  } catch (err) {
    logger.error(err);
  }
});
