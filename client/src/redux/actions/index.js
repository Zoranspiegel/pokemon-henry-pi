export const GET_TYPES = 'GET_TYPES';
export const GET_POKEMONS = 'GET_POKEMONS';
export const PENDING_FETCH = 'PENDING_FETCH';
export const ERROR_FETCH = 'ERROR_FETCH';
export const GET_DETAILS = 'GET_DETAILS';
export const CLEAN_DETAILS = 'CLEAN_DETAILS';
export const TYPE_FILTER = 'TYPE_FILTER';
export const SEARCH_NAME = 'SEARCH_NAME';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SET_SORT = 'SET_SORT';

export const getTypes = () => (dispatch) => {
  fetch('http://localhost:3001/types')
    .then(r => {
      // if (!r.ok) throw new Error('No response from the site!');
      return r.json();
    })
    .then(rJSON => dispatch({ type: GET_TYPES, payload: rJSON }));
};

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
      // if (!r.ok) throw new Error('No response from the site!');
      return r.json();
    })
    .then(rJSON => dispatch({ type: GET_DETAILS, payload: rJSON }));
};

export const cleanDetails = () => {
  return { type: CLEAN_DETAILS };
};

export const typeFilter = (filter) => {
  return { type: TYPE_FILTER, payload: filter };
};

export const searchName = (name) => (dispatch) => {
  fetch(`http://localhost:3001/pokemons?name=${name}`)
    .then(r => {
      // if (!r.ok) throw new Error('No response from the site!');
      return r.json();
    })
    .then(rJSON => dispatch({ type: SEARCH_NAME, payload: rJSON }));
};

export const clearSearch = () => {
  return { type: CLEAR_SEARCH };
};

export const setSort = (sort) => {
  return { type: SET_SORT, payload: sort };
};
