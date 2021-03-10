const app = require('./app');
const database = require('./config/database');
const logger = require('./utils/logger');

app.listen(process.env.PORT, async () => {
  try {
    await database();
    logger.info(`Started app on port ${process.env.PORT}`);
  } catch (err) {
    logger.error(err);
  }
});
