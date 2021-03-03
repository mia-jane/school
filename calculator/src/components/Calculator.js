import React, {useState, useEffect} from 'react';
import "../css/calculator.css"
import CalcButton from "./CalcButton"

function Calculator(props) {
  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState("")
  const [op, setOp] = useState(null)
  const [result, setResult] = useState(0)

  const handleOperation = () => {
    console.log("hi")
  }

  return (
    <div className="calculator">
      <div className="screen">
        <h1 className="result">{result}</h1>
      </div>
      <div className="keypad">
        <CalcButton className="calcButton" keyValue={"AC"} onClick={handleOperation} />
        <CalcButton className="calcButton" keyValue={"+/-"} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={"%"} onClick={handleOperation}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"/"} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={7} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={8} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={9} onClick={handleOperation}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"x"} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={4} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={5} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={6} onClick={handleOperation}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"-"} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={1} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={2} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={3} onClick={handleOperation}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"+"} onClick={handleOperation}/>
        <CalcButton className="zero" keyValue={0} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={"."} onClick={handleOperation}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"="} onClick={handleOperation}/>
      </div>
    </div>
  );
}

export default Calculator;