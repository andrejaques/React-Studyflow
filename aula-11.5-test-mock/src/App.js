// App.js
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: '',
      data: undefined
    }

    this.handleInputPokemon = this.handleInputPokemon.bind(this);
    this.handleApiPokemon = this.handleApiPokemon.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Responsible for putting in the state the value typed in the input
  handleInputPokemon(event) {
    const { target } = event
    this.setState({
      pokemon: target.value
    })
  }

  // Responsible for listener the event of press the enter key.
  handleKeyPress({ key }) {
    if (key === "Enter") {
      const pokemon = this.state.pokemon;
      this.handleApiPokemon(pokemon);
    }
  }

  // Responsible for fetch the API and bring the database.
  handleApiPokemon(pokemon) {
    fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
      .then((result) => result.json())
      .then((data) => this.setState({ data: data.cards }))
  }

  render() {
    const { pokemon, data } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pokemon Cards</h2>
          <div>
            <input onChange={(e) => this.handleInputPokemon(e)} data-testid="input-pokemon" onKeyPress={this.handleKeyPress} />
            <button onClick={() => this.handleApiPokemon(pokemon)} >Pesquisar</button>
          </div>
          <div>
            {data && (
              <div>
                <h3>{data.name}</h3>
                { data && data.map((card, index) => (
                  <img src={ card.imageUrl } key={ index } alt={card.name} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

}

export default App;