import React from 'react';
import Axios from 'axios';
import './App.css';

import { getPokemons } from './core/services/fetchAPI';

function App() {
  return (
    <div className="App">
      <button type="button" onClick={getPokemons} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Pokemons
      </button>
    </div>
  );
}

export default App;
