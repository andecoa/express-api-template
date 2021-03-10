const express = require('express');
const database = require('./config/database');
const logger = require('./utils/logger');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use('/', routes);
app.use((req, res) => {
  res.json({
    error: {
      message: 'route not found',
      status: 404,
    },
  });
});

app.listen(process.env.PORT, async () => {
  try {
    await database();
    logger.info(`Started app on port ${process.env.PORT}`);
  } catch (err) {
    logger.error(err);
  }
});
