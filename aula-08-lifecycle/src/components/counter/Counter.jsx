import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("-----------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState);
    console.log("---------------------");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("------------------");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Counter</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Add
        </button>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter - 1 }))}
        >
          Sub
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
