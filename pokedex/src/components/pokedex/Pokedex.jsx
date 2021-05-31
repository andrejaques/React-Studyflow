import React from "react";
import "./pokedex.css";
import Pokemon from "../pokemon/Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        {this.props.pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
