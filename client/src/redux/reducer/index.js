import {
  GET_TYPES,
  GET_POKEMONS,
  PENDING_FETCH,
  ERROR_FETCH,
  GET_DETAILS,
  CLEAN_DETAILS,
  TYPE_FILTER
} from '../actions';

const initialState = {
  types: [],
  allPokemons: [],
  pokemons: [],
  status: { loading: 'idle', error: null },
  details: {},
  filter: 'all'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      return { ...state, types: action.payload };
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
    default:
      return { ...state };
  }
};

export default rootReducer;
