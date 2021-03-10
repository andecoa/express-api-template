const genericItemService = require('../services/genericItem.service');
const clientErrors = require('../utils/clientErrors');

const createGenericItem = async (req, res, next) => {
  try {
    const genericItemBody = req.body;
    const genericItem = await genericItemService.createGenericItem(
      genericItemBody,
    );
    return res.json(genericItem);
  } catch (err) {
    return next(err);
  }
};

const getGenericItem = async (req, res, next) => {
  try {
    const { genericItemId } = req.params;
    const genericItem = await genericItemService.getGenericItemById(
      genericItemId,
    );
    if (!genericItem) {
      throw clientErrors.NotFound('genericItem not found');
    }
    return res.json();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createGenericItem,
  getGenericItem,
};
