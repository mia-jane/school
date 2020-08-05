import React from "react"

const Navbar = () => {
    // const dropButtonStyle = {
    //     cursor:"pointer"
    // }

    // const menuContentStyle = {
    //     display: "none",
    //     position: "absolute",
    //     backgroundColor: "white",
    //     minWidth: "160px",
    //     padding: "12px 16px",
    //     zIndex: "1"
    // }
    return (
        <nav>
            <span id="start-bootstrap">Start Bootstrap</span>
            <div className="dropdown">
                <button id="menu-button">MENU</button>
                <div className="dropdown-content">
                    <span>HOME</span>
                    <span>ABOUT</span>
                    <span>SAMPLE POST</span>
                    <span>CONTACT</span>
                </div>
            </div>
            <div className="full-menu">
                <span>HOME</span>
                <span>ABOUT</span>
                <span>SAMPLE POST</span>
                <span>CONTACT</span>
            </div>
        </nav>
    )
}

export default Navbar