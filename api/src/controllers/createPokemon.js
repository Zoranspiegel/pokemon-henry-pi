const { Pokemon } = require('../db');

module.exports = async (req, res) => {
  try {
    //Uso el método 'create' del modelo 'Pokemon' para crear una nueva entidad pasando el body como argumento
    const newPokemon = await Pokemon.create(req.body);
    //Respuesta OK
    res.status(201).json({
      message: 'Pokemon successfully created',
      new_pokemon: newPokemon
    });
  } catch (error) {
    //Respuesta ERROR
    res.status(400).json({ error: error.message });
  }
};