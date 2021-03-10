const mongoose = require('mongoose');

const GenericItemSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'title required'] },
  description: { type: String },
});

module.exports = mongoose.model('GenericItem', GenericItemSchema);
