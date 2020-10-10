import React from 'react';
import './App.css';
import Book from "./components/Book"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="lists">
        <h2>unread</h2>
          <Book />
      </div>
      <div className="lists">
        <h2>read</h2>
      </div>
    </div>
  );
}

export default App;
