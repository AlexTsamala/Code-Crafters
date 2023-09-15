import "./starterPage.css"
import Button from "../shared/button/button"

const starterPage = ({startGameHandler}) => {
    return (
        <div className="main">
         <h1 className="title">memory</h1>
         <div className="box">
            <div className="first">
                <h2 className="select-theme">Select Theme</h2>
               <Button description={"numbers"} backgroundColor={"#BCCED9;"} buttonHeight={"40px"} buttonWidth={"134px"}/>
            </div>
            <div className="second">
                <h2 className="numbers-of-players">Numbers of Players</h2>
            </div>
            <div className="third">
                <h2 className="grid-size">Grid Size</h2>
            </div>
            <button className="Yellow-button" onClick={startGameHandler}>Start Game</button>
         </div>
        </div>
    )
}

export default starterPage