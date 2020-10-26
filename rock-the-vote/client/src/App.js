import React, {useContext} from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom"
import Navbar from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./pages/Profile"
import Public from "./pages/Public"
import ProtectedRoute from "./components/ProtectRoute"
import {UserContext} from "./context/UserProvider"
import CommentPage from './pages/CommentPage';

//if token is truthy, render the navbar (token && <Navbar />)
function App() {
  const { token, logout } = useContext(UserContext) // token will be truthy when logged in.  undef (falsey) when empty string (not logged in)
  return (
    <div className="App">
      { token && <Navbar logout={logout} />} 
      <Switch>
        <Route 
          exact path="/" 
          render={() => token ? <Redirect to="/profile" /> : <Auth />} />
        <ProtectedRoute 
          path="/profile" 
          component= {Profile}
          redirectTo="/"
          token={token} />
        <ProtectedRoute 
          path="/public" 
          component={Public}
          redirectTo="/"
          token={token} />
        <ProtectedRoute
          path="/comments"
          component= {CommentPage}
          redirectTo="/"
          token={token} />
      </Switch>
        {/* <Auth /> */}
    </div>
  );
}

export default App;
