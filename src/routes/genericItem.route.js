const router = require('express').Router();
const genericItemController = require('../controllers/genericItem.controller');

router.post('/', [genericItemController.createGenericItem]);

router.get('/:genericItemId', [genericItemController.getGenericItem]);

module.exports = router;
