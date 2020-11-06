import React, {useContext} from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom"
import {UserContext} from "./context/UserProvider"

import Navbar from './components/Navbar'
import Auth from "./components/Auth"
import Read from "./pages/Read"
import Unread from "./pages/Unread"


function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className="App">
      <Navbar logout={logout} />
      <Switch>
          <Route exact path="/" render={() => token ? <Redirect to="/unread" /> : <Auth />} />
          <Route path="/read" render={() => <Read />} />
          <Route path="/unread" render={() => <Unread />} />
      </Switch>
    </div>
  );
}

export default App;
