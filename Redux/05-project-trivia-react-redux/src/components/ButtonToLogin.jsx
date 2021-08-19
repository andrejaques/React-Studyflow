import React, { Component } from 'react';
import { string, func, number, object, objectOf, oneOfType } from 'prop-types';

class ButtonToLogin extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { dataTestId } = this.props;
    return (
      <button
        type="button"
        onClick={ this.handleClick }
        data-testid={ dataTestId }
      >
        Jogar novamente
      </button>
    );
  }
}

ButtonToLogin.propTypes = {
  history: objectOf(oneOfType([func, string, number, object])).isRequired,
  dataTestId: string.isRequired,
};

export default ButtonToLogin;
