import { GET_POKEMONS, PENDING_FETCH, ERROR_FETCH } from '../actions';

const initialState = {
  pokemons: [],
  status: { loading: 'idle', error: null }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING_FETCH:
      return { ...state, status: { ...state.status, loading: 'pending' } };
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, status: { ...state.status, loading: 'succeded' } };
    case ERROR_FETCH:
      return { ...state, status: { loading: 'error', error: action.payload } };
    default:
      return { ...state };
  }
};

export default rootReducer;
