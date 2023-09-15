import "./ResultPage.css"

const ResultPage = ({showGamePlayAfterRestartHandler, showHomePageAfterSetupHandler}) =>{
    return (
        <div className="container">
            <h1 className="result-title">Player 3 Wins!</h1>
            <h4 className="result fontFamily">Game over! Here are the results…</h4>
            <div className="first-result-box">
                <h2 className="player1">Player 1</h2>
                <h1 className="result-pairs">1 Pairs</h1>
            </div>
            <div className="second-result-box">
                <h2 className="player2">Player 2</h2>
                <h1 className="result-pairs">1 Pairs</h1>
            </div>
            <div className="third-result-box">
                <h2 className="player3">Player 3</h2>
                <h1 className="result-pairs">1 Pairs</h1>
            </div>
            <div className="four-result-box">
                <h2 className="player4">Player 4</h2>
                <h1 className="result-pairs">1 Pairs</h1>
            </div>
            <div className="button-part">
            <button onClick={showGamePlayAfterRestartHandler}  className="restart">Restart</button>
            <button onClick={showHomePageAfterSetupHandler} className="setup-new-game">Setup New Game</button>
            </div>
        </div>
    )
}
export default ResultPage