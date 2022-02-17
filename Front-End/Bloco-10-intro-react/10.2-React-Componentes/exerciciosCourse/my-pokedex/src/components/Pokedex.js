import React from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component{
  render() {
    return (
      <>
        {
          pokemons.map((pokemon) => <Pokemon pokemonData={pokemon} key={pokemon.id}/>)
        }
      </>
    )
  }
}

export default Pokedex