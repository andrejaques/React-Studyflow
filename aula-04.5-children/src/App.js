import logo from "./logo.svg";
import "./App.css";

import Saudacao from "./components/saudacoes/Saudacoes";
import Colorize from "./components/colorize/Colorize";
import Navbar from "./components/Navbar/Navbar"
import Pai from './components/Pai/Pai';
import Filho from './components/Filho/Filho'

function App() {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <Saudacao />

                <Colorize />

                <Pai nome="Paulo" sobrenome="Silva">
                    <Filho nome="Ana" />
                    <Filho nome="Beatriz" sobrenome="Souza" />
                </Pai>
            </header>
        </div>
    );
}

export default App;
