import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { Navigation } from "./components/navigation/Navigation";
import { Routes } from './components/routes/Routes';

export const App = ({}) => (
  <div className="App">
    <Router>
      <div>
        <Navigation />
        <Routes />
      </div>
    </Router>
  </div>
);

export default App;
