import React, {useContext} from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom"
import Navbar from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./pages/Profile"
import Public from "./pages/Public"
import {UserContext} from "./context/UserProvider"

function App() {
  const { token, logout } = useContext(UserContext) // token will be truthy when logged in.  undef (falsey) when empty string (not logged in)
  return (
    <div className="App">
      <Navbar logout={logout} />
      <Switch>
        <Route 
          exact path="/" 
          render={() => token ? <Redirect to="/profile" /> : <Auth />} />
        <Route 
          path="/profile" 
          render={() => <Profile />} />
        <Route 
          path="/public" 
          render={() => <Public />} />
      </Switch>
        {/* <Auth /> */}
    </div>
  );
}

export default App;
