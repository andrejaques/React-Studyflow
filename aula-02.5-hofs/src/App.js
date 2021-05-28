import React from "react";
import "./App.css";

import logo from "./logo.svg";
import Input01 from "./components/input01/Input01";
import Input02 from "./components/input02/Input02";

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

     <Input01 />

     <Input02 />
    </div>
  );
}

export default App;
