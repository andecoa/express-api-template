const express = require('express');
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

module.exports = app;
