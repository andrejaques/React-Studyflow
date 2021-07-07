import { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchPokemon } from "./redux/actions/mainAction";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: "",
            data: undefined,
        };
        this.handleInputPokemon = this.handleInputPokemon.bind(this);
        // this.handleApiPokemon = this.handleApiPokemon.bind(this)
    }

    // Será responsável por colocar no state o valor digitado no input.
    handleInputPokemon(event) {
        const { target } = event;
        this.setState({
            pokemon: target.value,
        });
    }

    // Será responsável por consumir a api e trazer os dados do card.
    // handleApiPokemon(pokemon) {
    //   fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
    //     .then((result) => result.json())
    //     .then((data) => this.setState({ data: data.cards[0] }))
    // }

    render() {
        const { carregando, data, pegaPokemon } = this.props;
        const { pokemon } = this.state;
        return (
            <div className="App">
                <h2>Pokémon Cards</h2>
                <h3>{carregando && "Carregando..."}</h3>
                <div>
                    <input
                        onChange={(e) => this.handleInputPokemon(e)}
                        data-testid="input-pokemon"
                    />
                    <button onClick={() => pegaPokemon(pokemon)}>
                        Pesquisar
                    </button>
                </div>
                <div>
                    {data && (
                        <div>
                            <h3>{data.name}</h3>
                            <img src={data.imageUrl} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.pokemonCardReducer.data,
        carregando: state.pokemonCardReducer.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pegaPokemon: (pokemonInput) => dispatch(fetchPokemon(pokemonInput)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
