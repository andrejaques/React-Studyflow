import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    const { player } = this.props.match.params;

    return (
      <div>
        <p>Player nick: {this.props.nick}, of the player {player} </p>
      </div>
    )
  }
}
