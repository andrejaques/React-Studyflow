import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home/Home.jsx';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Profile from './components/profile/Profile';
import Players from './components/players/Players';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>React Router</h3>

        <BrowserRouter>
          <Route path="/home" component={Home} />
          {/* Other Way to import as a son of Route is:
          <Route path="/home"><Home /></Route> */}

          <Route path="/about" component={About} />
          {/* Can be used a general path like:
          <Route path="/" component={Home} /> 
          So everything that will come after path / will be renderized */}

          <Route path="/contact" component={Contact} />
          {/* Can be used the path with prefix exact before the patch, is useful to
          render strictly that component and not others the subpaths. */}
          {/* Other way to do this is applying the Switch component and passing
          the Routes components as tags of the Switch, like:
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/movies" component={Movies} />
            <Route path="/" component={Home} />
          </Switch> */}
          
          <Route path="/profile" render={() => <Profile name="Andre Jaques, WebDev" /> } />
          {/* Passing props throwght the Route */}
          {/* Can be passed a array of props and single props together like this:
          <Route path="/profile" render={(props) => <Profile {...props} name="Andre Jaques, WebDev" /> } />
          This method is usefull to acess history, location and match, functions of the router*/}

          <Route path="/players/:player" render={(props) => <Players {...props} nick="C3RB3RUS" /> } />

        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
