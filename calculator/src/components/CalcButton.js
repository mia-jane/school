import React from 'react';
import "../css/calcButton.css"

function CalcButton(props) {
  return (
    <div className="calcButton">{props.digit}</div>
  );
}

export default CalcButton;