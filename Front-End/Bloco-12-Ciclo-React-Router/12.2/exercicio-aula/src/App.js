import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const URL = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(URL);
    const result = await response.json();
    this.setState({
      pokemons: result.results,
    })
    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((data) =>{
    //     this.setState({
    //       pokemons: data.results,
    //     })
    //   })
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div>
        {pokemons.length === 0 ? 'loading...' : 
          (<div> 
            { pokemons.map((pokemon) => 
              <div> {pokemon.name} </div>
            )}  
           </div>)
        }
      </div>
      )
    }
}


export default App;
