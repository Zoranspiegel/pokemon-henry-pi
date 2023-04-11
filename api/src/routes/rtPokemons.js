const { Router } = require("express");
const router = Router();
const getApiPokemons = require('../controllers/getApiPokemons');
const createPokemon = require('../controllers/createPokemon');

router.get('/', getApiPokemons);

router.post('/', createPokemon);

module.exports = router;