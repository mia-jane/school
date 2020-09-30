import React from 'react';
import './App.css';
import Header from "./Header"
import Projects from "./Projects"
import Skills from "./Skills"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
        <Header />
        <Projects />
        <Skills />
        <Footer />
      </div>
  );
}

export default App;
