import React from 'react';
import "../css/calcButton.css"

function CalcButton(props) {
  return (
    <div className={props.className}>
      <button className={`${props.btnType}`} onClick={() => props.onClick()}>{props.keyValue}</button>
    </div>
  );
}

export default CalcButton;