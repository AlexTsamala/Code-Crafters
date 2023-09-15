
import "./App.css";
import GamePlay from "./components/GamePlay/GamePlay";
import HomePage from "./components/HomePage/HomePage";
import ResultPage from "./components/ResultPage/ResultPage";
// import FooterMultiPlayer from "./components/GamePlay/FooterMultiPlayer/FooterMultiPlayer";
import { useState } from "react";

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const startGameHandler = () => {
    setStartGame(!startGame);
   };
  const [themeNumbers, setThemeNumbers] = useState(false);
  const [themeIcons, setThemeIcons] = useState(false);
  const [player1, setPlayer1] = useState(false);
  const [player2, setPlayer2] = useState(false);
  const [player3, setPlayer3] = useState(false);
  const [player4, setPlayer4] = useState(false);
  const [gridSize4, setGridSize4] = useState(false);
  const [gridSize6, setGridSize6] = useState(false);
  
  const [showGamePlayAfterRestart, setShowGamePlayAfterRestart] =
    useState(false);
  const showGamePlayAfterRestartHandler = () => {
    setShowGamePlayAfterRestart(true);
  };
  const [showHomePageAfterSetup, setShowHomePageAfterSetup] = useState(true);
  const showHomePageAfterSetupHandler = () => {
    setShowHomePageAfterSetup(true);
  };

  const themeNumbersHandler = () => {
    setThemeNumbers(!themeNumbers);
    setThemeIcons(false);
  };
  const themeIconsHandler = () => {
    setThemeNumbers(false);
    setThemeIcons(!themeIcons);
  };
  const player1Handler = () => {
    setPlayer1(!player1);
    setPlayer2(false);
    setPlayer3(false);
    setPlayer4(false);
  };
  const player2Handler = () => {
    setPlayer1(false);
    setPlayer2(!player2);
    setPlayer3(false);
    setPlayer4(false);
  };
const player3Handler = () => {
    setPlayer1(false);
    setPlayer2(false);
    setPlayer3(!player3);
    setPlayer4(false);
  };
  const player4Handler = () => {
    setPlayer1(false);
    setPlayer2(false);
    setPlayer3(false);
    setPlayer4(!player4);
  };
  const gridSize4Handler = () => {
    setGridSize4(!gridSize4);
    setGridSize6(false);
  };
  const gridSize6Handler = () => {
    setGridSize4(false);
    setGridSize6(!gridSize6);
  };

  const infosHandler = [
    themeNumbersHandler,
    themeIconsHandler,
    player1Handler,
    player2Handler,
    player3Handler,
    player4Handler,
    gridSize4Handler,
    gridSize6Handler,
  ];
  return (
    <div className="App">
    
    {!startGame ? (
        <HomePage
        
        startGameHandler={startGameHandler}
          infosHandler={infosHandler}
        />
      ) : (
        <GamePlay infosHandler={infosHandler} gridSize4={gridSize4} gridSize6={gridSize6} themeIcons={themeIcons} themeNumbers={themeNumbers} />
      )}

      
      
   
      {/* {showGamePlayAfterRestart ? (
        <GamePlay infosHandler={infosHandler} gridSize4={gridSize4} gridSize6={gridSize6} themeIcons={themeIcons} themeNumbers={themeNumbers} />
      ) : (
        <ResultPage
          showGamePlayAfterRestartHandler={showGamePlayAfterRestartHandler}
        />
      )} */}
      {/* {showHomePageAfterSetup ? (
        <HomePage
        
        showHomePageAfterSetupHandler={showHomePageAfterSetupHandler}
          infosHandler={infosHandler}
        />
      ) : (
        <ResultPage
          showHomePageAfterSetupHandler={showHomePageAfterSetupHandler}
        />
      )} */}
    </div>
  );
}

