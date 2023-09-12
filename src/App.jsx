import "./App.css";
import GamePlay from "./components/GamePlay/GamePlay";
import StarterPage from "./components/starterPage/starterPage";
// import { useState } from "react";



function App() {
  // const [startGame, setStartGame] = useState(false);
  // const startGameHandler = () => {
  //   setStartGame(!startGame);
  // }
  return (
    <div className="App">   
      {/* eslint-disable-next-line react/jsx-no-undef */}
      {/* აქ, მე–10 ხაზზე, დატოვეთ კომენტარად (გიორგი) */}
      <StarterPage
      // startGameHandler={startGameHandler}
      // სალომე, მე–18, მე–4, მე–9 ხაზზე რაც წერია ამოაკომენტარე. props-ად მიგაქვს, შენს კოდში
      // და start Games-ის ღილაკს რომ დააწვები, გააქრობს შენს გვერდს და გაეშვება GamePlay-ს კოდი (გიორგი)
      />
      <GamePlay />
    </div>
  );

}

export default App;
