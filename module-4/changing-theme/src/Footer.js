import React, { useContext } from 'react';
import {ThemeContext} from "./themeContext"

function Footer() {
    const {theme} = useContext(ThemeContext)
    return (
        <footer className={`${theme}-footer-theme`}>
            <h5>Hooray this is the footer</h5>
        </footer>
    );
}

export default Footer;