const { Router } = require("express");
const router = Router();
const getApiPokemons = require('../controllers/getApiPokemons');

router.get('/', getApiPokemons);

module.exports = router;