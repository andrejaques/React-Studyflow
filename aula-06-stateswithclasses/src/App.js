import logo from './logo.svg';
import './App.css';

import MainOne from './components/mainOne/MainOne';
import MainTwo from './components/mainTwo/MainTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Did With Class:</span>

        <MainOne />

        <span>Did with Function and Hooks:</span>
        
        <MainTwo />
      </header>
    </div>
  );
}

export default App;
