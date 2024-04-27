import React from "react";
import "../App.css";

const Buttons = ({onButtonCLick}) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div>
      <div className="buttons-container">
        {buttonsName.map((item) => (
          <button onClick={()=>onButtonCLick(item)}>{item }</button>
        ))}
      </div>
    </div>
  ); 
};

export default Buttons;
