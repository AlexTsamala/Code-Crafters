import "./App.css";
import GamePlay from "./components/GamePlay/GamePlay";
import StarterPage from "./components/starterPage/starterPage";


function App() {
//   const [startGame, setStartGame] = useState(false);
  return (
    <div className="App">   
      {/* <StarterPage /> */}
      <GamePlay />
    </div>
  );

}

export default App;
