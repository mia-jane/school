import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./pages/Profile"
import Public from "./pages/Public"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Auth}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/public" component={Public}></Route>
      </Switch>
        {/* <Auth /> */}
    </div>
  );
}

export default App;
