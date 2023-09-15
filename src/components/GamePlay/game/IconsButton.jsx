import React, { useState } from "react";
import "./IconsButton.css";

function IconsButton({ importIcons, handleClickIcons, id, stat, iconsIsMini }) {
  return (
    <button
      className={iconsIsMini ? stat + "-mini" : stat}
      type="button"
      onClick={() => {
        if (stat === "active-icon") {
          return;
        }
        if (stat === "correct-icon") {
          return;
        }
        if (stat === "wrong-icon") {
          return;
        }
        handleClickIcons(id);
      }}
    >
      <img src={importIcons} alt="icons" />
    </button>
  );
}
export default IconsButton;
