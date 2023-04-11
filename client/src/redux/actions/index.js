export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => (dispatch) => {
  fetch('http://localhost:3001/pokemons')
    .then(r => r.json())
    .then(rJSON => dispatch({ type: GET_POKEMONS, payload: rJSON }))
    .catch(error => console.log(error.message));
};
