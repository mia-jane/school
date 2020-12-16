import React from 'react';
import {Link} from "react-router-dom"

function Navbar(props) {
    return (
        <nav>
            <Link className="links" to="/read">Read</Link>
            <Link className="links" to="/unread">Unread</Link>
            <Link className="links" to="/add">Add Book</Link>
            <button className="logout-btn" onClick={props.logout}>Log Out</button>
        </nav>
    );
}

export default Navbar;