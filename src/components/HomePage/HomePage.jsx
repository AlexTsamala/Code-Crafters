import StarterPageButton from "../shared/Button/StarterPageButton"
import "./HomePage.css"



const HomePage = () => {
    return (
        <div className="main">
         <h1 className="title">memory</h1>
         <div className="box">
            <div className="first">
                <h2 className="select-theme">Select Theme</h2>
                <div className="buttons">
                <StarterPageButton description={"Numbers"} backgroundColor={"#BCCED9"} className="button-number"/>
                <StarterPageButton description={"Icons"} backgroundColor={"#BCCED9"} className="button-number"/>
                </div>
                
            </div>
            <div className="second">
                <h2 className="numbers-of-players">Numbers of Players</h2>
                <div className="row">
                <StarterPageButton description={"1"} backgroundColor={"#BCCED9"} className="numbers"/>
                <StarterPageButton description={"2"} backgroundColor={"#BCCED9"} className="numbers"/>
                <StarterPageButton description={"3"} backgroundColor={"#BCCED9"} className="numbers"/>
                <StarterPageButton description={"4"} backgroundColor={"#BCCED9"} className="numbers"/>
                </div>
                
            </div>
            <div className="third">
                <h2 className="grid-size">Grid Size</h2>
                <div className="buttons row">
                <StarterPageButton description={"4x4"} backgroundColor={"#BCCED9"} className="button-number"/>
                <StarterPageButton description={"6x6"} backgroundColor={"#BCCED9"} className="button-number"/>
                </div>
            </div>
            <button className="yellow-button">Start Game</button>
         </div>
        </div>
    )
}

export default HomePage