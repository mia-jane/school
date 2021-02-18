import React, {useState} from 'react';
import CalculatorKey from './CalculatorKey'
import '../calculator.css'

function Calculator(props) {
  const [currentValue, setCurrentValue] = useState(0)
  const [nextValue, setNextValue] = useState("")
  const [operation, setOperation] = useState(null)
  const [result, setResult] = useState("0")

  const handleOperation = () => {
    console.log("key pressed")
  }
  return (
    <div className="theCalculator">
      <div className="result">{result}</div>
      <div className="punchButtons">
        <div className="calc-row">
          <CalculatorKey keyValue={"AC"} onClick={handleOperation} />
          <CalculatorKey keyValue={"+/-"} onClick={handleOperation} />
          <CalculatorKey keyValue={"%"} onClick={handleOperation} />
          <CalculatorKey keyValue={"/"} onClick={handleOperation} />
        </div>
        <div className="calc-row">
          <CalculatorKey keyValue={"7"} onClick={handleOperation} />
          <CalculatorKey keyValue={"8"} onClick={handleOperation} />
          <CalculatorKey keyValue={"9"} onClick={handleOperation} />
          <CalculatorKey keyValue={"x"} onClick={handleOperation} />
        </div>
        <div className="calc-row">
          <CalculatorKey keyValue={"4"} onClick={handleOperation} />
          <CalculatorKey keyValue={"5"} onClick={handleOperation} />
          <CalculatorKey keyValue={"6"} onClick={handleOperation} />
          <CalculatorKey keyValue={"-"} onClick={handleOperation} />
        </div>
        <div className="calc-row">
          <CalculatorKey keyValue={"1"} onClick={handleOperation} />
          <CalculatorKey keyValue={"2"} onClick={handleOperation} />
          <CalculatorKey keyValue={"3"} onClick={handleOperation} />
          <CalculatorKey keyValue={"+"} onClick={handleOperation} />
        </div>
        <div className="calc-row">
          <CalculatorKey className="zero" keyValue={"0"} onClick={handleOperation} />
          <CalculatorKey keyValue={"."} onClick={handleOperation} />
          <CalculatorKey keyValue={"="} onClick={handleOperation} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;