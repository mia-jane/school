import React from 'react';
import './App.css';
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Services}></Route>
        </Switch>
        <Footer />
    </div>
  )
}

export default App;
