import React from 'react';

function CalculatorKey(props) {
  return (
    <div className="calculatorKey">
      <button className={props.className}>{props.keyValue}</button>
    </div>
  );
}

export default CalculatorKey;