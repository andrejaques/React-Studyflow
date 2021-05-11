import React, { Component } from "react";

class EstadoFavorito extends Component {

    render() {
        const { value, handleChange } = this.props;

        return (
            <label>
                Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem
                sabe!
                <textarea
                    name="estadoFavorito"
                    value={value}
                    onChange={handleChange}
                />
            </label>
        )
    }
}

export default EstadoFavorito;