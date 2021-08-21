import React from 'react';

class MainOne extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return (
      <div className="mainTwo">
        <button onClick={this.handleClick}>Click to increment - { this.state.numeroDeCliques } </button>
      </div>
    )
  }

}

export default MainOne;