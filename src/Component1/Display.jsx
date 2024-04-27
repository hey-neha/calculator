import React from "react";
import "../App.css";
const Display = ({ displayValue }) => {
  return (
    <div>
      <input type="text" className="display" value={displayValue} readOnly />
    </div>
  );
};

export default Display;
