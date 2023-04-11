const { Router } = require("express");
const router = Router();
const mwSaveTypes = require('../middlewares/mwSaveTypes');
const getPokemons = require('../controllers/getPokemons');
const createPokemon = require('../controllers/createPokemon');
const getPokemonById = require("../controllers/getPokemonById");

router.get('/',mwSaveTypes, getPokemons);
router.get('/:id', getPokemonById);

router.post('/',mwSaveTypes, createPokemon);

module.exports = router;