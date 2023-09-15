/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  { useState } from "react";
import React from "react";
import "./StarterPageButton.css";

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