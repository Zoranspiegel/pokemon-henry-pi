const { Pokemon, Type } = require('../db');
const axios = require('axios');
const isUUID = require('../utils/isUUID');

module.exports = async (req, res) => {
  //Destructuro 'id' de 'req.params'
  const { id } = req.params;
  //Establezco una condición comprobando si 'id' es o no un UUID para buscar en base de datos o en API
  if (isUUID(id)) {
    try {
      //Empleo el método 'findByPk' del modelo 'Pokemon' para buscar por id y defino la relación con el modelo 'Type' para coincidir con la data solicitada por el componente 'detail' de react
      const dbPokemonById = await Pokemon.findByPk(id, {
        include: [{
          model: Type,
          attributes: ['name'],
          through: {
            attributes: []
          }
        }]
      });
      //Si la respuesta es null lanzo error al catch
      if (!dbPokemonById) throw new Error('Pokemon not found!')
      //Respuesta OK
      res.status(200).json(dbPokemonById);
    } catch (error) {
      //Respuesta ERROR
      res.status(404).json({ error: error.message });
    }
  } else {
    try {
      //Llamado de axios a la url de pokeapi con el id como endpoint
      const response = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
      console.log(typeof(response));
      //Formateo de la respuesta para para coincidir con la data solicitada por el componente 'detail' de react
      const apiPokemonById = {
        id: response.id,
        name: response.name,
        img: response.sprites.other.dream_world.front_default,
        types: response.types.map(t => {
          return { name: t.type.name };
        }),
        health: response.stats.find(s => s.stat.name === 'hp').base_stat,
        attack: response.stats.find(s => s.stat.name === 'attack').base_stat,
        defense: response.stats.find(s => s.stat.name === 'defense').base_stat,
        speed: response.stats.find(s => s.stat.name === 'speed').base_stat,
        height: response.height,
        weight: response.weight
      };
      //Respuesta OK
      res.status(200).json(apiPokemonById);
    } catch (error) {
      //Respuesta ERROR
      res.status(404).json({ error: error.message });
    }
  }
};
