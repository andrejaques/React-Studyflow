import React, { Component } from "react";
import "./Saudacoes.css";

class Saudacao extends Component {
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome,
    };

    setTipo(e) {
        this.setState({ tipo: e.target.value });
    }

    setNome(e) {
        this.setState({ nome: e.target.value });
    }

    render() {
        const { tipo, nome } = this.state;
        const excMark = !nome ? "" : "!";

        return (
            <div className="saudacao-container">
                <h1>
                    {tipo} {nome} {excMark}
                </h1>
                <hr />
                <input
                    type="text"
                    placeholder="Saudacão..."
                    value={tipo}
                    onChange={(e) => this.setTipo(e)}
                />
                <input
                    type="text"
                    placeholder="Nome..."
                    value={nome}
                    onChange={(e) => this.setNome(e)}
                />
            </div>
        );
    }
}

export default Saudacao;
