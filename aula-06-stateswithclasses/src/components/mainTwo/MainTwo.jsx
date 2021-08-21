import React, { useState } from "react";

export default function MainTwo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [counterThree, setCounterThree] = useState(0);

  const addCounter = (setCounter, counter) => {
    return setCounter(counter + 1);
  }

  return (
    <div className="mainTwo">
      <button onClick={() => addCounter(setCounterOne, counterOne)}>
        Click to increment: {counterOne}{"!"}
      </button>
      <button onClick={() => addCounter(setCounterTwo, counterTwo)}>
        Click to increment: {counterTwo}{"!"}
      </button>
      <button onClick={() => addCounter(setCounterThree, counterThree)}>
        Click to increment: {counterThree}{"!"}
      </button>
    </div>
  );
}
