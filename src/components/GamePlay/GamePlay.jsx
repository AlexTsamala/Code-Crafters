// import starterPage from '../../starterPage/starterPage';

// import Button from '../shared/button/button';
import './GamePlay.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Game from './game/Game';
import Menu from './Menu/Menu';
import { useState } from 'react';


export default function GamePlay() {
    const [menuButtonActive, setMenuButtonActive] = useState(false);
    const menuButtonHandler = () => {
        setMenuButtonActive(!menuButtonActive);
    }
    
  

    return (

            <div className="gamePlay">
                <div className={`${menuButtonActive? 'opacity50': 'HeaderGameFooter' }`}>
                    <Header name={menuButtonHandler} />
                    <Game />
                    <Footer />
                </div>
                <Menu setMenuButtonActive={setMenuButtonActive} menuButtonActive={menuButtonActive} menuButtonHandler={menuButtonHandler} />
               
            </div>
    )
}
