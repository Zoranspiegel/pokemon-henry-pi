import {
  GET_POKEMONS,
  PENDING_FETCH,
  ERROR_FETCH,
  GET_DETAILS,
  CLEAN_DETAILS
} from '../actions';

const initialState = {
  pokemons: [],
  status: { loading: 'idle', error: null },
  details: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING_FETCH:
      return { ...state, status: { ...state.status, loading: 'pending' } };
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, status: { ...state.status, loading: 'succeded' } };
    case ERROR_FETCH:
      return { ...state, status: { loading: 'error', error: action.payload } };
    case GET_DETAILS:
      return { ...state, details: action.payload };
    case CLEAN_DETAILS:
      return { ...state, details: {} };
    default:
      return { ...state };
  }
};

export default rootReducer;
