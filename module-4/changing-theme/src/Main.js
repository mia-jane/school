import React, { useContext } from 'react';
import {ThemeContext} from "./themeContext"

function Main() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <main className={`${theme}-main-theme`}>
            <h2>Click the button to change theme</h2>
            <button 
                onClick={toggleTheme} 
                className={`${theme}-button-theme`}
            >
            Switch Theme
            </button>
        </main>
    )
}

export default Main;