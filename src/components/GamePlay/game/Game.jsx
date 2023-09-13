import { useState } from "react";
import NumberButton from "./NumberButton";
import "./Game.css";
import numbers from "./Number";

function Game() {
  const [items, setItems] = useState(numbers);
  const [prev, setPrev] = useState(-1);
  const [hidden, setHidden] = useState(false);

  const check = (current) => {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setHidden(true);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
        setHidden(false);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (prev === -1) {
      items[id].stat = "active";
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className="Game">
      <div className="components">
        {items.map((item, index) => {
          return (
            <NumberButton
              key={index}
              number={item.content}
              handleClick={handleClick}
              id={index}
              stat={item.stat}
            />
          );
        })}
      </div>
      <div className={hidden ? "hidden" : ""}></div>
    </div>
  );
}

export default Game;
