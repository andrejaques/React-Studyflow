import React, { Component } from 'react';
import { string, func, number, object, objectOf, oneOfType } from 'prop-types';
import GameHeader from '../components/GameHeader';
import ButtonToLogin from '../components/ButtonToLogin';

class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      assertions: 0,
      score: 0,
      text: '',
    };

    this.getPlayerFromLocalStorage = this.getPlayerFromLocalStorage.bind(this);
    this.feedbackRender = this.feedbackRender.bind(this);
  }

  componentDidMount() {
    this.getPlayerFromLocalStorage();
  }

  getPlayerFromLocalStorage() {
    const playerString = localStorage.getItem('state');
    const { assertions, score } = JSON.parse(playerString).player;
    this.setState(({
      score,
      assertions,
    }), () => this.feedbackRender());
  }

  feedbackRender() {
    const three = 3;
    const { assertions } = this.state;
    console.log(assertions);
    if (assertions < three) {
      this.setState({ text: 'Podia ser melhor...' });
    } else {
      this.setState({ text: 'Mandou bem!' });
    }
  }

  render() {
    const { history } = this.props;
    const { text, score, assertions } = this.state;
    return (
      <div>
        <GameHeader />
        <p data-testid="feedback-text">chegou</p>

        <div data-testid="feedback-text">{ text }</div>
        <div data-testid="feedback-total-score">{ score }</div>
        <div data-testid="feedback-total-question">{ assertions }</div>

        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ () => { history.push('/ranking'); } }
        >
          Ver Ranking
        </button>
        <ButtonToLogin history={ history } dataTestId="btn-play-again" />
      </div>
    );
  }
}

Feedback.propTypes = {
  history: objectOf(oneOfType([func, string, number, object])).isRequired,
};

export default Feedback;
