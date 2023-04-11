const { Router } = require("express");
const router = Router();
const mwSaveTypes = require('../middlewares/mwSaveTypes');
const getPokemons = require('../controllers/getPokemons');
const createPokemon = require('../controllers/createPokemon');

router.get('/',mwSaveTypes, getPokemons);

router.post('/',mwSaveTypes, createPokemon);

module.exports = router;