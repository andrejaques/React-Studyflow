import React, { Component } from "react";
import "./Form.css";

import EstadoFavorito from './sons/EstadoFavorito';

class Form extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: "",
            estadoFavorito: "",
            nome: "",
            idade: 0,
            vaiComparecer: false,
            palavraChaveFavorita: "",
        };
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className="form-container">
                <h1>
                    Estados e React: ferramenta incrível ou reagindo a
                    regionalismos?
                </h1>
                <form className="form">
                    
                    <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />

                    <label>
                        Email
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>

                    <label>
                        Nome
                        <input
                            type="text"
                            name="nome"
                            value={this.state.nome}
                            onChange={this.handleChange}
                        />
                    </label>
                </form>

                <label>
                    Idade
                    <input
                        type="number"
                        name="idade"
                        value={this.state.idade}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Vai comparecer à conferência?
                    <input
                        type="checkbox"
                        name="vaiComparecer"
                        value={this.state.vaiComparecer}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Escolha sua palavra favorita:
                    <select
                        name="palavraChaveFavorita"
                        value={this.state.palavraChaveFavorita}
                        onChange={this.handleChange}
                    >
                        <option value="estado">Estado</option>
                        <option value="evento">Evento</option>
                        <option value="props">Props</option>
                        <option value="hooks">Hooks</option>
                    </select>
                </label>
            </div>
        );
    }
}

export default Form;
