import "./App.css";
import HomePage from "./components/HomePage/HomePage"
import ResultPage from "./components/ResultPage/ResultPage";
import { useState } from "react"

function App() {
  const [startGame, setStartGame] = useState(false)
  const startGameHandler = () => {
     setStartGame(!startGame);
     }
  return <>
  <HomePage/>
  startGameHandler={startGameHandler}
  <ResultPage/>
    </>;
}

export default App;
