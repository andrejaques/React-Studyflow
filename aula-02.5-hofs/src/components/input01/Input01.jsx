import React, { Component } from "react";
import "./input01.css";

import colors from "../colorsData/ColorsData";

export default class Input01 extends Component {
  constructor() {
    super();

    this.state = {
      inputText: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  render() {
    const { inputText } = this.state;

    return (
      <div className="input01-container">
        <label htmlFor="classInput">
          {" "}
          Class Input Component <br />
          <input id="classInput" type="text" onChange={this.handleChange} />
        </label>

        <p>{this.state.inputText}</p>

        <ul>
          {colors.filter((item) => item.color.includes(inputText)).map((item, index) => {
            return <li key={index + 1} className={item.color} > { item.color } </li>
          })}
        </ul>
      </div>
    );
  }
}
