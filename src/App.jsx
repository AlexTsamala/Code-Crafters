import "./App.css";
import GamePlay from "./components/GamePlay/GamePlay";
import HomePage from "./components/HomePage/HomePage";
import ResultPage from "./components/ResultPage/ResultPage";
import FooterMultiPlayer from "./components/GamePlay/FooterMultiPlayer/FooterMultiPlayer"
import { useState } from "react";

function App() {
  const [startGame, setStartGame] = useState(false);
  const startGameHandler = () => {
    setStartGame(true);
  };
  const [themeNumbers, setThemeNumbers] = useState(false);
  const [themeIcons, setThemeIcons] = useState(false);
  const [player1, setPlayer1] = useState(false);
  const [player2, setPlayer2] = useState(false);
  const [player3, setPlayer3] = useState(false);
  const [player4, setPlayer4] = useState(false);
  const [gridSize4, setGridSize4] = useState(false);
  const [gridSize6, setGridSize6] = useState(false);

  const [showGamePlayAfterRestart, setShowGamePlayAfterRestart] = useState(false);
   const showGamePlayAfterRestartHandler = () =>{
    setShowGamePlayAfterRestart(true)
   }
   const [showHomePageAfterSetup, setShowHomePageAfterSetup] = useState(false);
   const showHomePageAfterSetupHandler = () =>{
    setShowHomePageAfterSetup(true)
   }
  
  const themeNumbersHandler = () => {
    setThemeNumbers(true);
    setThemeIcons(false);
  };
  const themeIconsHandler = () => {
    setThemeNumbers(false);
    setThemeIcons(true);
  };
  const player1Handler = () => {
    setPlayer1(true);
    setPlayer2(false);
    setPlayer3(false);
    setPlayer4(false);
  };
  const player2Handler = () => {
    setPlayer1(false);
    setPlayer2(true);
    setPlayer3(false);
    setPlayer4(false);
  };
  const player3Handler = () => {
    setPlayer1(false);
    setPlayer2(false);
    setPlayer3(true);
    setPlayer4(false);
  };
  const player4Handler = () => {
    setPlayer1(false);
    setPlayer2(false);
    setPlayer3(false);
    setPlayer4(true);
  };
  const gridSize4Handler = () => {
    setGridSize4(true);
    setGridSize6(false);
  };
  const gridSize6Handler = () => {
    setGridSize4(false);
    setGridSize6(true);
  };

  const infosHandler = 
  [ themeNumbersHandler,
    themeIconsHandler,
    player1Handler,
    player2Handler,
    player3Handler,
    player4Handler,
    gridSize4Handler,
    gridSize6Handler, ]
  return (
    <div className="App">
      {/* eslint-disable-next-line react/jsx-no-undef */}
      {/* აქ, მე–10 ხაზზე, დატოვეთ კომენტარად (გიორგი) */}
      {/* // startGameHandler={startGameHandler}
      // სალომე, მე–18, მე–4, მე–9 ხაზზე რაც წერია ამოაკომენტარე. props-ად მიგაქვს, შენს კოდში
      // და start Games-ის ღილაკს რომ დააწვები, გააქრობს შენს გვერდს და გაეშვება GamePlay-ს კოდი (გიორგი)
    */}
      {/* {startGame ? (
        <GamePlay />
      ) : (
        <HomePage startGameHandler={startGameHandler} infosHandler={infosHandler} />
        <HomePage startGameHandler={startGameHandler} infosHandler={infosHandler} />
       
      )} */}
 <FooterMultiPlayer/>
      {/* <GamePlay/>
    <HomePage startGameHandler={startGameHandler}/> */}
{/* 
     {showGamePlayAfterRestart ? (
       <GamePlay />
       ) : (
         <ResultPage showGamePlayAfterRestartHandler={showGamePlayAfterRestartHandler}/>
      )}
        {showHomePageAfterSetup ? (
     <HomePage startGameHandler={startGameHandler} infosHandler={infosHandler} />
       ) : (
         <ResultPage showHomePageAfterSetupHandler={showHomePageAfterSetupHandler}/>
      )} */}
    </div>
  );
}

export default App;

