const GenericItem = require('../models/genericItem.model');

/**
 * Create a genericItem
 * @params {Object} genericItemBody
 * @returns {Promise<GenericItem>}
 */
const createGenericItem = async (genericItemBody) => {
  const genericItem = await GenericItem.create(genericItemBody);
  return genericItem;
};

/**
 * Get genericItem by ID
 * @params {ObjectId} id
 * @returns {Promise<GenericItem>}
 */
const getGenericItemById = async (id) => {
  const genericItem = await GenericItem.findById(id);
  return genericItem;
};

module.exports = {
  createGenericItem,
  getGenericItemById,
};
