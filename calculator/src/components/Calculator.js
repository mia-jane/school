import React from 'react';
import "../css/calculator.css"
import CalcButton from "./CalcButton"

function Calculator(props) {
  return (
    <div className="calculator">
      <div className="screen">
        <h1>0</h1>
        <CalcButton digit="0" />
      </div>
    </div>
  );
}

export default Calculator;