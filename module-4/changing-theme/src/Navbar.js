import React, { useContext } from 'react';
import {ThemeContext} from "./themeContext"

function Navbar() {
    const {theme} = useContext(ThemeContext)
    return (
        <nav className={`${theme}-nav-theme`}>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </nav>
    );
}

export default Navbar;