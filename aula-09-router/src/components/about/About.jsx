import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <p>About Us</p>
        <Link to="/home" className="App-link" > Back to Home </Link>
      </div>
    )
  }
}
