const router = require('express').Router();
const genericItemController = require('../controllers/genericItem.controller');
const validate = require('../middlware/validations/genericItem.validations');

router.post('/', [
  validate.validateGenericItemBody,
  genericItemController.createGenericItem,
]);

router.get('/:genericItemId', [
  validate.validateGenericItemId,
  genericItemController.getGenericItem,
]);

module.exports = router;
