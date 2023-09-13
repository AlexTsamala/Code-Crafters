// import starterPage from '../../starterPage/starterPage';

// import Button from '../shared/button/button';
import "./GamePlay.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Game from "./game/Game";
import Menu from "./Menu/Menu";
import { useState } from "react";
// import SoloFinish from './soloFinish/SoloFinish';
// იყოს ჩაკომენტარებული სანამ არ დავიწყებ აწყობას

import Game from "../game/Game";

export default function GamePlay() {
  const [menuButtonActive, setMenuButtonActive] = useState(false);
  const menuButtonHandler = () => {
    setMenuButtonActive(!menuButtonActive);
  };

  return (
    <div className="gamePlay">
      <Header />
      <Footer />
    </div>
  );
}
