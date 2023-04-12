export const GET_POKEMONS = 'GET_POKEMONS';
export const PENDING_FETCH = 'PENDING_FETCH';
export const ERROR_FETCH = 'ERROR_FETCH';
export const GET_DETAILS = 'GET_DETAILS';
export const CLEAN_DETAILS = 'CLEAN_DETAILS';

export const getPokemons = () => (dispatch) => {
  dispatch({ type: PENDING_FETCH });
  fetch('http://localhost:3001/pokemons')
    .then(r => {
      if (!r.ok) throw new Error('No response from the site!');
      return r.json();
    })
    .then(rJSON => dispatch({ type: GET_POKEMONS, payload: rJSON }))
    .catch(error => dispatch({ type: ERROR_FETCH, payload: error.message }));
};

export const getDetails = (id) => (dispatch) => {
  fetch(`http://localhost:3001/pokemons/${id}`)
    .then(r => {
      if (!r.ok) throw new Error('No response from the site!');
      return r.json();
    })
    .then(rJSON => dispatch({ type: GET_DETAILS, payload: rJSON }));
};

export const cleanDetails = () => {
  return { type: CLEAN_DETAILS };
};
