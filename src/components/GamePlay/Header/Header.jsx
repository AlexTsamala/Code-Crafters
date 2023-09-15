// import React from 'react';
// import react, { useState } from 'react';
// import starterPage from '../../starterPage/starterPage';
import "./Header.css";
// import { useState } from 'react';
// import PropTypes from 'prop-types';

export default function Header(props) {
  // გააკეთე ზომები ფუთერის, რომ გადმოიტანე menuinside ამიტომ აღარ გასტილულა, სტილებიც ჰედერში დარჩა
  // ასევე არ აკეთებს პროპსად ჩაწოდებას
  return (
    <>
      <div className="headerBox">
        <div className="headerDiscriptionBox">
          <p className="title fontFamily">memory</p>
          {/* eslint-disable-next-line react/prop-types */}
          <button className="menuButton fontFamily" onClick={props.name}>
            Menu
          </button>
          <div className="tabletMenu">
            <button
              style={{
                ...styles.buttonStyles,
                ...styles.tabletButtonStyles,
                transition: "0.3s ease-in-out",
              }}
              className="fontFamily buttonYellow"
            >
              Restart
            </button>
            <button
              style={{
                ...styles.buttonStyles,
                ...styles.tabletButtonStyles,
                transition: "0.3s ease-in-out",
              }}
              className="fontFamily buttonsGray"
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Header.propTypes = {
//     menuButtonHandler: PropTypes.func.isRequired,
// };

const styles = {
  buttonStyles: {
    width: "279px",
    height: "48px",
    borderRadius: "20px",
    border: "none",
    fontSize: "18px",
    outline: "none",
  },

  tabletButtonStyles: {
    width: "127px",
    height: "52px",
    borderRadius: "30px",
  },
};
