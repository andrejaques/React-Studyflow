import {
    REQUEST_POKEMON,
    REQUEST_POKEMON_SUCCESS,
    REQUEST_POKEMON_ERROR
  } from '../actions/mainAction'
  
  const INITIAL_STATE = {
    data: {},
    isLoading: false,
  }
  
  function pokemonCardReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case REQUEST_POKEMON:
        return {
          ...state,
          isLoading: true
        }
      case REQUEST_POKEMON_SUCCESS:
        return {
          ...state,
          data: action.payload,
          isLoading: false
        }
      case REQUEST_POKEMON_ERROR:
        return {
          ...state,
          isLoading: false
        }
      default:
        return state;
    }
  }
  
  export default pokemonCardReducer