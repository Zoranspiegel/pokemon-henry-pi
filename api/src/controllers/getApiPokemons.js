const axios = require('axios');

module.exports = async (req, res) => {
  try {
    //Llamado de axios para traer los primeros 40 pokemons con sus urls
    const firstResponse = (await axios('https://pokeapi.co/api/v2/pokemon?limit=40')).data.results;
    //Mapeo de 'firstResponse' para obtener un array con solamente las 40 urls
    const urls = firstResponse.map(p => p.url);
    //Mapeo de 'urls' para obtener un arreglo con las 40 promesas sin resolver
    const promises = urls.map(url => axios(url));
    //Resolución de las 40 promesas en simultaneo usando Promise All
    const allRespones = await Promise.all(promises);
    //Formateo de allResponses para obtener array con los 40 pokemons y las propiedades de la ruta principal
    const pokemons = allRespones.map(r => {
      return {
        id: r.data.id,
        name: r.data.name,
        img: r.data.sprites.other['official-artwork'].front_default,
        types: r.data.types.map(t => {
          return { name: t.type.name };
        })
      };
    });
    //Respuesta OK
    res.status(200).json(pokemons);
  } catch (error) {
    //Respuesta ERROR
    res.status(404).json({ error: error.message });
  }
};
