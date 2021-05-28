import React, { useState } from "react";
import "./input02.css";

import colors from '../colorsData/ColorsData';

export default function Input02() {
  const [text, setText] = useState("");

  const handleText = (e) => {
    return setText(e.target.value);
  };

  return (
    <div className="input02-container">
      <label htmlFor="functionInput">
        Function Input Component <br />
        <input id="functionInput" type="text" onChange={handleText} />

        <p>{text}</p>

        <ul>
          {colors.filter((item) => item.color.includes(text)).map((item, index) => {
            return <li key={index + 1} className={item.color} > { item.color } </li>
          })}
        </ul>
      </label>
    </div>
  );
}
