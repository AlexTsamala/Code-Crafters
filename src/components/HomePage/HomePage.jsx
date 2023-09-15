import { useState } from "react"
import StarterPageButton from "../shared/Button/StarterPageButton"
import "./HomePage.css"



const HomePage = ({startGameHandler, infosHandler}) => {
    const [selectedTheme, setSelectedTheme] =  useState("Numbers") 
    const [selectedPlayers, setSelectedPlayers] =  useState("1") 
    const [selectedGridSize, setSelectedGridSize] =  useState("4x4") 

    return (
        <div className="main">
         <h1 className="title">memory</h1>
         <div className="box">
            <div className="first">
                <h2 className="select-theme">Select Theme</h2>
                <div className="buttons">
                <StarterPageButton description={"Numbers"} onClick={infosHandler[0]} backgroundColor={selectedTheme === "Numbers" ? "#304859" : "#BCCED9"} setChosenButton={setSelectedTheme}/>
                <StarterPageButton description={"Icons"} onClick={infosHandler[1]} backgroundColor={selectedTheme === "Icons" ? "#304859" : "#BCCED9"} setChosenButton={setSelectedTheme}/>
                </div>
                
            </div>
            <div className="second">
                <h2 className="numbers-of-players">Numbers of Players</h2>
                <div className="row">
                <StarterPageButton description={"1"} onClick={infosHandler[2]} backgroundColor={selectedPlayers === "1" ? "#304859" : "#BCCED9"} setChosenButton={setSelectedPlayers} className="numbers" />
                <StarterPageButton description={"2"} onClick={infosHandler[3]} backgroundColor={selectedPlayers === "2" ? "#304859" : "#BCCED9"} setChosenButton={setSelectedPlayers} className="numbers" />
                <StarterPageButton description={"3"} onClick={infosHandler[4]} backgroundColor={selectedPlayers === "3" ? "#304859" : "#BCCED9"} setChosenButton={setSelectedPlayers} className="numbers" />
                <StarterPageButton description={"4"} onClick={infosHandler[5]} backgroundColor={selectedPlayers === "4" ? "#304859" : "#BCCED9"} setChosenButton={setSelectedPlayers} className="numbers" />
                </div>
                
            </div>
            <div className="third">
                <h2 className="grid-size">Grid Size</h2>
                <div className="buttons row">
                <StarterPageButton description={"4x4"} onClick={infosHandler[6]} backgroundColor={selectedGridSize === "4x4" ? "#304859" : "#BCCED9"} setChosenButton={setSelectedGridSize}/>
                <StarterPageButton description={"6x6"} onClick={infosHandler[7]} backgroundColor={selectedGridSize === "6x6" ? "#304859" : "#BCCED9"} setChosenButton={setSelectedGridSize} />
                </div>
            </div>
            <button className="yellow-button" onClick={startGameHandler}>Start Game</button>
         </div>
        </div>
    )
}

export default HomePage