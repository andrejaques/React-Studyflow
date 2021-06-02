import logo from './logo.svg';
import './App.css';

import Joker from './components/joker/Joker';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Joker />

        <Counter />
      </header>
    </div>
  );
}

export default App;
