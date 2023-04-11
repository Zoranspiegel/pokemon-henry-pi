const { Router } = require("express");
const router = Router();
const mwSaveTypes = require('../middlewares/mwSaveTypes');
const getApiPokemons = require('../controllers/getApiPokemons');
const createPokemon = require('../controllers/createPokemon');

router.get('/',mwSaveTypes, getApiPokemons);

router.post('/',mwSaveTypes, createPokemon);

module.exports = router;