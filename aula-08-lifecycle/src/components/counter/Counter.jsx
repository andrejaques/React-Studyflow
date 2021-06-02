import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
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
    console.log("componentDidUpdate", this.state, prevState);
    console.log("------------------");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Counter</p>
        <button
          onClick={() =>
            this.setState((state) => ({ counter: state.counter - 1 }))
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            this.setState((state) => ({ counter: parseInt(Math.random() * 100) }))
          }
        >
          Random
        </button>
        <button
          onClick={() =>
            this.setState((state) => ({ counter: state.counter + 1 }))
          }
        >
          Increment
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
