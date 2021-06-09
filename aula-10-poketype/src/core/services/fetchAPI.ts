import Axios from 'axios';

export const getPokemons = async () => {
  const response = await Axios.get("https://pokeapi.co/api/v2/pokemon/");
  const pokemons = response.data.results;
  
  return console.log(pokemons);
};