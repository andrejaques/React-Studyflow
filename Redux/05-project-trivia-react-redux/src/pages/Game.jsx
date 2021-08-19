import React, { Component } from 'react';
import GameHeader from '../components/GameHeader';
import Questions from '../components/Questions';

class Game extends Component {
  render() {
    return (
      <div>
        <GameHeader />
        <Questions />
      </div>
    );
  }
}

export default Game;
