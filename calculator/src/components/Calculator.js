import React, {useState, useEffect} from 'react';
import "../css/calculator.css"
import CalcButton from "./CalcButton"

function Calculator(props) {
  const [prevValue, setPrevValue] = useState(0);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => [op, nextValue, prevValue]);

  const handleNum = (number) => setNextValue(nextValue === "0" ? `${number}` : `${nextValue}${number}`);
  const insertDecimal = () => !/\./.test(nextValue) && setNextValue(nextValue + ".");
  const clear = () => {
    setNextValue("0")
    setPrevValue(null)
  }
  const handlePercent = (op) => {
    setOp(op)
    setNextValue(nextValue / 100)
  }
  const toggleSign = () => +nextValue < 0 ? setNextValue(`${Math.abs(+nextValue)}`) : setNextValue(`${0 - +nextValue}`);

  const handleOperation = (value) => {
    setNextValue(prevResult => parseInt(`${prevResult}${value}`, 10));
  }

  return (
    <div className="calculator">
      {console.log(+nextValue > 0)}
      <div className="screen">
        <h2 className="result">{nextValue}</h2>
      </div>
      <div className="keypad">
        <CalcButton className="calcButton" keyValue={"AC"} onClick={clear} />
        <CalcButton className="calcButton" keyValue={"+/-"} onClick={toggleSign}/>
        <CalcButton className="calcButton" keyValue={"%"} onClick={handlePercent}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"/"} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={7} onClick={handleNum}/>
        <CalcButton className="calcButton" keyValue={8} onClick={handleNum}/>
        <CalcButton className="calcButton" keyValue={9} onClick={handleNum}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"x"} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={4} onClick={handleNum}/>
        <CalcButton className="calcButton" keyValue={5} onClick={handleNum}/>
        <CalcButton className="calcButton" keyValue={6} onClick={handleNum}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"-"} onClick={handleOperation}/>
        <CalcButton className="calcButton" keyValue={1} onClick={handleNum}/>
        <CalcButton className="calcButton" keyValue={2} onClick={handleNum}/>
        <CalcButton className="calcButton" keyValue={3} onClick={handleNum}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"+"} onClick={handleOperation}/>
        <CalcButton className="zero" keyValue={0} onClick={handleNum}/>
        <CalcButton className="calcButton" keyValue={"."} onClick={insertDecimal}/>
        <CalcButton className="calcButton" btnType="operator" keyValue={"="} onClick={handleOperation}/>
      </div>
    </div>
  );
}

export default Calculator;