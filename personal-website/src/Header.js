import React from 'react';
import Emoji from "./Emoji"

function header(props) {
    return (
        <div className="header">
            <h1>Mia Stroud</h1>
            <span id="subtitle">Full-stack web developer</span>
            <p>Hello.  I am a full-stack web developer, specializing in front-end web development.  Besides coding, I love studying biology (the genetic code in particular <Emoji symbol="😊" />) and I researched lung cancer in a biology lab for a couple years.  </p>
        </div>
    );
}

export default header;