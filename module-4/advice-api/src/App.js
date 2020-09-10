import React from 'react';
import './App.css';
import {Link, Switch, Route} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import FaveQuotes from "./pages/FaveQuotes"

function App() {
  return (
    <div className="App">
      <nav>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/about">About</Link>
        <Link className="links" to="/favequotes">Favorite Quotes</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/favequotes" component={FaveQuotes}></Route>
      </Switch>
      

    </div>
  );
}

export default App;
