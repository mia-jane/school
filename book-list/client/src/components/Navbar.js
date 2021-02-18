import React from 'react';
import {Link} from "react-router-dom"

function Navbar(props) {
    return (
        <nav>
            <Link className="links" to="/read">Read</Link>
            <Link className="links" to="/unread">Unread</Link>
            <button className="logout-btn" onClick={props.logout}>sign out</button>
        </nav>
    );
}

export default Navbar;