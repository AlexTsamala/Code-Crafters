// import starterPage from '../../starterPage/starterPage';

// import Button from '../shared/button/button';
import "./GamePlay.css";
// ქვედა ოთხი ხაზი ამოიღე კომენტარიდან
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Game from "./game/Game";
import Menu from "./Menu/Menu";
import { useEffect, useState } from 'react';


import SoloFinish from "./soloFinish/SoloFinish";


export default function GamePlay() {

const [timing, setTiming] = useState(0);
const [intervalId, setIntervalId] = useState(null);
const [stopGamePlays, setStopGamePlays ] = useState(false);
// აქ შეიშლება let დასჭირდეს
const numberOfMove = 0;

const stopGamePlaysHandler = () => {
  setStopGamePlays(true);
}

const numberOfMoveHandler = () => {
  numberOfMove + 1;
}




useEffect(() => {
const id = setInterval(() => {
   setTiming((preTime) => preTime + 1);
}, 1000)
setIntervalId(id);
return () => {clearInterval(id)};
},[]);


// result of time
if(stopGamePlays === true) {
     // eslint-disable-next-line no-undef
     clearInterval(intervalId);
}




const minutes = Math.floor(timing / 60);
const seconds = timing % 60;

  const [menuButtonActive, setMenuButtonActive] = useState(false);
  const menuButtonHandler = () => {
    setMenuButtonActive(!menuButtonActive);
  };

  return (
    <div className="gamePlay">

    {/* ქვედა დივი ამოიღე კომენტარიდან, სოლოფინიშ რომ გამომეჩინა ამიტომ გავაკეთე და გასასწორებელია, გაცენტრვა უნდა (გიორგი) */}
      <div className={`${menuButtonActive ? "opacity50" : "HeaderGameFooter"}`}>

      {/* ეს ბუთონი სტოპის ისე დავწერე, საცდელად */}
        <Header name={menuButtonHandler} />
        <Game />
        <Footer minutes={minutes} seconds={seconds} />
      </div>

      <Menu
        setMenuButtonActive={setMenuButtonActive}
        menuButtonActive={menuButtonActive}
        menuButtonHandler={menuButtonHandler}
      />

      {/* აქ solofinish რო გამოჩნდეს, მაშინ, menuButtonActive true-დ უნდა გავხადო და სხვა დანარჩენს opacity50 უნდა ჰქონდეს (გიორგი) */}
      <SoloFinish minutes={minutes} seconds={seconds} numberOfMove={numberOfMove} />

      
    </div>
  );
}
