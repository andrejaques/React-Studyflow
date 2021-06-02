import React, { Component } from 'react';

export default class Joke extends Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.clearJokes = this.clearJokes.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parametro de setState(), a partir dele é que se carrega o segundo
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))

    this.fetchJoke();
  }

  clearJokes() {
    this.setState(({ storedJokes, jokeObj }) => ({
      jokeObj: "",
      storedJokes: [],
    }));
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Save Joke!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={ id }> { joke } </p>))}
        </span>

        <p>{ loading ? loadingElement : this.renderJokeElement() }</p>

        <button type="button" onClick={this.clearJokes} >
          Clear Jokes!
        </button>
      </div>
    );
  }
}
