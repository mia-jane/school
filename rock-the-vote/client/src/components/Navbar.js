import React from 'react';
import { Link } from "react-router-dom"

function Navbar(props) {
    const {logout} = props
    return (
        <div className="navbar">
            <Link className="links" to="/profile">Profile</Link>
            <Link className="links" to="/public">Public</Link>
            <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
    );
}

export default Navbar;