import { Button } from "bootstrap";
import "./App.css";
import { useState } from "react";
import Display from "./Component1/Display";
import Buttons from "./Component1/Buttons";
function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonCLick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <>
      <div className="calculator">
        <Display displayValue={calVal} />
        <Buttons onButtonCLick={onButtonCLick} />
      </div>
    </>
  );
}

export default App;
