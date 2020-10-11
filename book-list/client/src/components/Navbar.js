import React from 'react';
import {Link, Switch, Route} from "react-router-dom"

import Home from "../pages/Home"
import Read from "../pages/Read"
import Unread from "../pages/Unread"

function Navbar(props) {
    return (
        <div className="navbar">
            <nav>
                <Link className="links" to="/">Add</Link>
                <Link className="links" to="/read">Read</Link>
                <Link className="links" to="/unread">Unread</Link>
          </nav>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/read" component={Read}></Route>
              <Route path="/unread" component={Unread}></Route>
          </Switch>
        </div>
    );
}

export default Navbar;