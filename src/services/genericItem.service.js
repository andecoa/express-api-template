const GenericItem = require('../models/genericItem.model');

/**
 * Create a genericItem
 * @params {Object} genericItemBody
 * @returns {Promise<GenericItem>} GenericItem object
 */
const createGenericItem = async (genericItemBody) =>
  GenericItem.create(genericItemBody);

/**
 * Get genericItem by ID
 * @params {ObjectId} id
 * @returns {Promise<GenericItem>} GenericItem object
 */
const getGenericItemById = async (id) => GenericItem.findById(id);

module.exports = {
  createGenericItem,
  getGenericItemById,
};
