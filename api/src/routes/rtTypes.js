const { Router } = require('express');
const mwSaveTypes = require('../middlewares/mwSaveTypes');
const getTypes = require('../controllers/getTypes');

const router = Router();

router.get('/', mwSaveTypes, getTypes);

module.exports = router;
