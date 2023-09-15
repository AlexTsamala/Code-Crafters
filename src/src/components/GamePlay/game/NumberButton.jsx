import React from "react";
import "./NumberButton.css";

function NumberButton({ number, handleClick, id, stat, itemsIsMini }) {
  return (
    <button
      className={itemsIsMini ? stat + "-mini" : stat}
      type="button"
      onClick={() => {
        if (stat === "correct") {
          return;
        }
        if (stat === "active") {
          return;
        }
        if (stat === "wrong") {
          return;
        }
        handleClick(id);
      }}
    >
      <p>{number}</p>
    </button>
  );
}
export default NumberButton;
