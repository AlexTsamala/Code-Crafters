import React, { useState } from "react";
import "./Button.css";

const StarterPageButton = ({
  description,
  buttonWidth,
  buttonHeight,
  className,
  setChosenButton,
  backgroundColor
}) => {
 
  const handleBackgroundColorChange = () => {

    setChosenButton(description);
  };

  return (
    <button
      type="button"
      style={{
        width: buttonWidth,
        height: buttonHeight,
        backgroundColor: backgroundColor,
      }}
      className={`shared-buttons ${className}`}
      onClick={handleBackgroundColorChange}
    >
      {description}
    </button>
  );
};

export default StarterPageButton;
