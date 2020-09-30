import React from 'react';
import './App.css';
import Header from "./Header"
// import Profile from "./Profile"
import Skills from "./Skills"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
        <Header />
      <div className="grid-container">
        <div id="projects-container">
        <h2 className="headings">Projects</h2>
          <div className="projects" id="project-1">
                <h2>blog props</h2>
            </div>
            <div className="projects" id="project-2">
                <h2>Book database</h2>
            </div>
            <div className="projects" id="project-3">
                <h2>Quote API</h2>
            </div>
        </div>
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
