import {
  GET_TYPES,
  GET_POKEMONS,
  PENDING_FETCH,
  ERROR_FETCH,
  GET_DETAILS,
  CLEAN_DETAILS,
  TYPE_FILTER,
  SEARCH_NAME,
  CLEAR_SEARCH
} from '../actions';

const initialState = {
  types: [],
  allPokemons: [],
  pokemons: [],
  status: { loading: 'idle', error: null },
  details: {},
  search: [],
  filter: 'all'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      return {
        ...state,
        types: action.payload.filter(t => {
          if (t.name === 'shadow' || t.name === 'unknown') return false;
          else return true;
        }).slice(0, 18)
      };
    case PENDING_FETCH:
      return { ...state, status: { ...state.status, loading: 'pending' } };
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        status: { ...state.status, loading: 'succeded' },
        allPokemons: action.payload
      };
    case ERROR_FETCH:
      return { ...state, status: { loading: 'error', error: action.payload } };
    case GET_DETAILS:
      return { ...state, details: action.payload };
    case CLEAN_DETAILS:
      return { ...state, details: {} };
    case TYPE_FILTER:
      if (action.payload === 'all') {
        return { ...state, pokemons: state.allPokemons, filter: action.payload };
      } else {
        return {
          ...state,
          filter: action.payload,
          pokemons: state.allPokemons.filter(p => {
            return p.types.filter(t => t.name === action.payload).length;
          })
        };
      }
    case SEARCH_NAME:
      return { ...state, search: action.payload };
    case CLEAR_SEARCH:
      return { ...state, search: [] };
    default:
      return { ...state };
  }
};

export default rootReducer;
