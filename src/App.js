import "./App.css";
import Tile from "./components/Tile/Tile";
import ResultField from "./components/ResultField/ResultField";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [operator, setOperator] = useState("");
  const [numberValue, setNumberValue] = useState(0);

  const getChar = (data) => {
    setDisplayValue(displayValue + data);
    if (data === "=") {
      if (operator === "+") {
        setOperator("");
        setDisplayValue(String(numberValue + parseInt(displayValue, 10)));
        setNumberValue(0);
      }
      if (operator === "-") {
        setOperator("");
        setDisplayValue(String(numberValue - parseInt(displayValue, 10)));
        setNumberValue(0);
      }
      if (operator === "/") {
        if (numberValue === 0 || displayValue === "0") {
          setDisplayValue("ERROR");
          
        } else {
          setOperator("");
          setDisplayValue(String(numberValue / parseInt(displayValue, 10)));
          setNumberValue(0);
        }
      }
      if (operator === "*") {
        setOperator("");
        setDisplayValue(String(numberValue * parseInt(displayValue, 10)));
        setNumberValue(0);
      }
    }

    if (data === "C") {
      setNumberValue(0);
      setDisplayValue("");
    }

    if (data === "+" || data === "-" || data === "*" || data === "/") {
      setOperator(operator + data);
      setNumberValue(numberValue + parseInt(displayValue, 10));
      setDisplayValue("");
    }
  };

  console.log(operator, " : operator");
  console.log(numberValue, " : numberValue");

  return (
    <div className="App">
      <div className="calculator">
        <ResultField displayValue={displayValue} />
        <div className="row">
          <div className="numbers-side">
            <Tile className="number" value="1" getChar={getChar} />
            <Tile className="number" value="2" getChar={getChar} />
            <Tile className="number" value="3" getChar={getChar} />
          </div>
          <div className="operators-side">
            <Tile className="small-operator" value="+" getChar={getChar} />
            <Tile className="small-operator" value="-" getChar={getChar} />
          </div>
        </div>

        <div className="row">
          <div className="numbers-side">
            <Tile className="number" value="4" getChar={getChar} />
            <Tile className="number" value="5" getChar={getChar} />
            <Tile className="number" value="6" getChar={getChar} />
          </div>
          <div className="operators-side">
            <Tile className="small-operator" value="*" getChar={getChar} />
            <Tile className="small-operator" value="/" getChar={getChar} />
          </div>
        </div>

        <div className="row">
          <div className="numbers-side">
            <Tile className="number" value="7" getChar={getChar} />
            <Tile className="number" value="8" getChar={getChar} />
            <Tile className="number" value="9" getChar={getChar} />
          </div>
          <div className="operators-side background-red">
            <Tile className="big-operator" value="=" getChar={getChar} />
          </div>
        </div>

        <div className="row">
          <div className="numbers-side">
            <Tile className="number" value="0" getChar={getChar} />
          </div>
          <div className="operators-side">
            <Tile className="big-operator" value="C" getChar={getChar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
