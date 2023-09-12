


import React, { useState } from "react";
import "./Button.css";

const StarterPageButton = ({
  description,
  buttonWidth,
  buttonHeight,
  className,
}) => {
  const [backgroundColor, setBackgroundColor] = useState('#BCCED9');

  const handleBackgroundColorChange = () => {
    const changedColor = '#304859';
    setBackgroundColor(changedColor);
  };

  return (
    <button
      type="button"
      style={{
        width: buttonWidth,
        height: buttonHeight,
        backgroundColor: backgroundColor,
      }}
      className={`${className}`}
      onClick={handleBackgroundColorChange}
    >
      {description}
    </button>
  );
};

export default StarterPageButton;
