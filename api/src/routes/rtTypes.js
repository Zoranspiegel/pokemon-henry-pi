const { Router } = require('express');
const mwSaveTypes = require('../middlewares/mwSaveTypes');

const router = Router();

router.get('/', mwSaveTypes);

module.exports = router;
