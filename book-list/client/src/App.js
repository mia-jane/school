import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import axios from "axios"


function App() {
  // useEffect(() => {
  //   axios.get("/books")
  //     .then(res => console.log(res))
  //     .catch(console.log(err))
  // }, [])
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
