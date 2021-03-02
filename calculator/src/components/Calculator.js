import React from 'react';
import "../css/calculator.css"
import CalcButton from "./CalcButton"

function Calculator(props) {
  return (
    <div className="calculator">
      <div className="screen">
        <h1>0</h1>
      </div>
      <div className="keypad">
        <CalcButton className="calcButton" symbol="AC" />
        <CalcButton className="calcButton" symbol="+/-" />
        <CalcButton className="calcButton" symbol="%" />
        <CalcButton className="calcButton" btnType="operator" symbol="/" />
        <CalcButton className="calcButton" symbol="7" />
        <CalcButton className="calcButton" symbol="8" />
        <CalcButton className="calcButton" symbol="9" />
        <CalcButton className="calcButton" btnType="operator" symbol="x" />
        <CalcButton className="calcButton" symbol="4" />
        <CalcButton className="calcButton" symbol="5" />
        <CalcButton className="calcButton" symbol="6" />
        <CalcButton className="calcButton" btnType="operator" symbol="-" />
        <CalcButton className="calcButton" symbol="1" />
        <CalcButton className="calcButton" symbol="2" />
        <CalcButton className="calcButton" symbol="3" />
        <CalcButton className="calcButton" btnType="operator" symbol="+" />
        <CalcButton className="zero" symbol="0" />
        <CalcButton className="calcButton" symbol="." />
        <CalcButton className="calcButton" btnType="operator" symbol="=" />
      </div>
    </div>
  );
}

export default Calculator;