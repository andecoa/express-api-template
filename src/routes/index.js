const router = require('express').Router();
const handleErrors = require('../middlware/handleErrors');

const genericItemRoute = require('./genericItem.route');

router.use('/genericItem', genericItemRoute);
router.use('/', handleErrors);

module.exports = router;
