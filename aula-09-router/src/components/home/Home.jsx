import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <p>Home</p>
        <Link to="/about" className="App-link" > About </Link>
    </div>
    )
  }
}
