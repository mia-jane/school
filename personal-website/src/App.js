import React from 'react';
import './App.css';
import Header from "./Header"
import Profile from "./Profile"
import Skills from "./Skills"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <div className="grid-container">
        <Profile />
        <div id="projects-container">
        <h2 className="headings">Projects</h2>
          <div className="projects" id="project-1">
                <h2>Project no. 1</h2>
            </div>
            <div className="projects" id="project-2">
                <h2>Project no. 2</h2>
            </div>
            <div className="projects" id="project-3">
                <h2>Project no. 3</h2>
            </div>
        </div>
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
