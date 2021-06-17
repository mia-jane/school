import React from 'react';
import Emoji from "./Emoji"

function header(props) {
    return (
        <div className="header">
            <h1>Mia Stroud</h1>
            <span id="subtitle">Full-stack web developer</span>
            <p>Hi!  I am a full-stack web developer.  Building clean, elegant sites with equally clean and concise code makes me happy <Emoji symbol="😊" /></p>
        </div>
    );
}

export default header;