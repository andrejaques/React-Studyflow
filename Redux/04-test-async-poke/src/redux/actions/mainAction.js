export const REQUEST_POKEMON = 'REQUEST_POKEMON'
export const REQUEST_POKEMON_SUCCESS = 'REQUEST_POKEMON_SUCCESS'
export const REQUEST_POKEMON_ERROR = 'REQUEST_POKEMON_ERROR'

const requestPokemon = (payload) => ({
  type: REQUEST_POKEMON,
  payload
})

const requestPokemonSuccess = (payload) => ({
  type: REQUEST_POKEMON_SUCCESS,
  payload
})

const requestPokemonError = (payload) => ({
  type: REQUEST_POKEMON_ERROR,
  payload
})

export const fetchPokemon = (pokemonInput) => (dispatch) => {
  dispatch(requestPokemon())
  return fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemonInput}`)
    .then((result) => result.json())
    .then((data) => dispatch(requestPokemonSuccess(data.cards[0])))
    .catch((error) => dispatch(requestPokemonError(error)))
}