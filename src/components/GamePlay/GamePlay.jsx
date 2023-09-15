import { useEffect, useState } from "react";
import "./GamePlay.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Game from "./game/Game";
import Menu from "./Menu/Menu";
import SoloFinish from "./soloFinish/SoloFinish";

export default function GamePlay() {
  const [numberOfMove, setNumberOfMove] = useState(0);
  const [timing, setTiming] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [stopGamePlays, setStopGamePlays] = useState(false);
  const [finishNumbers4x4, setFinishNumbers4x4] = useState(0);

  const stopGameTimeNumber4x4 = () => {
    setFinishNumbers4x4(finishNumbers4x4 + 1);
  };

  // Use useEffect to handle side effects when finishNumbers4x4 changes
  useEffect(() => {
    if (finishNumbers4x4 === 1) {
      setStopGamePlays(true);
      clearInterval(intervalId);
    }
  }, [finishNumbers4x4, intervalId]);

  const numberOfMoveHandler = () => {
    setNumberOfMove(numberOfMove + 1);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTiming((preTime) => preTime + 1);
    }, 1000);
    setIntervalId(id);
    return () => {
      clearInterval(id);
    };
  }, []);

  const minutes = Math.floor(timing / 60);
  const seconds = timing % 60;

  const [menuButtonActive, setMenuButtonActive] = useState(false);
  const menuButtonHandler = () => {
    setMenuButtonActive(!menuButtonActive);
  };

  return (
    <div className="gamePlay">
      <div className={`${menuButtonActive ? "opacity50" : "HeaderGameFooter"}`}>
        <Header name={menuButtonHandler} />
        {finishNumbers4x4 && (
          <SoloFinish
            minutes={minutes}
            seconds={seconds}
            numberOfMove={numberOfMove}
          />
        )}

        <Game
          stopGamePlaysHandler={() => setStopGamePlays(true)}
          numberOfMoveHandler={numberOfMoveHandler}
          stopGameTimeNumber4x4={stopGameTimeNumber4x4}
        />
        <Footer
          minutes={minutes}
          seconds={seconds}
          numberOfMove={numberOfMove}
        />
      </div>

      <Menu
        setMenuButtonActive={setMenuButtonActive}
        menuButtonActive={menuButtonActive}
        menuButtonHandler={menuButtonHandler}
      />
    </div>
  );
}
