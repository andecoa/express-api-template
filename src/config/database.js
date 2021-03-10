const mongoose = require('mongoose');

const initDatabase = async () => {
  mongoose.connection
    .on('error', () => {
      console.log(
        `Failed to connect to app database. Retrying in 10 seconds!`,
      );
      setTimeout(initDatabase, 10000);
    })
    .once('open', () => console.log('Connected to database!'));

  if (!process.env.MONGO_SRV) {
    throw new Error('Please set $MONGO_SRV');
  }

  await mongoose.connect(process.env.MONGO_SRV, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

module.exports = initDatabase;
