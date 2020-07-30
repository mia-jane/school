import React from 'react';
import './App.css';
import Spot from "./Spot"
import vacationSpots from "./vacationSpots"

function App() {
  const spotComponent = vacationSpots.map(destination => <Spot key={destination.place} spot={destination} />)
  return (
    <div className="App">
      {spotComponent}
    </div>
  );
}

export default App;
