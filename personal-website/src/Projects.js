import React from 'react';
import blogpicture from "./blogpicture.png"
import advicepicture from "./advicepicture.png"

function Projects(props) {
    return (
        <div id="projects-container">
            <h2 className="headings">Projects</h2>
            <div className="projects">
                <h2 className="projectName">blog props</h2>
                <img src={blogpicture} alt="blogpicture" />
                <p>This is a static mimic of this (link) website</p>
            </div>
            <div className="projects">
                <h2 className="projectname">Book database</h2>
            </div>
            <div className="projects">
                <h2 className="projectName">Quote API</h2>
                <img src={advicepicture} alt="advicepic"/>
                <p>A random quote generator that collects favorited quotes</p>
            </div>
        </div>
    );
}

export default Projects;