/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import NumberButton from "./NumberButton";
import IconsButton from "./IconsButton";
import "./Game.css";
import { numbers, numbersMini } from "./Number";
import { icons, iconsMini } from "./Icons";

function Game({
  // eslint-disable-next-line react/prop-types
  stopGamePlaysHandler,
  // eslint-disable-next-line react/prop-types
  numberOfMoveHandler,
  // eslint-disable-next-line react/prop-types
  stopGameTimeNumber4x4,
  // eslint-disable-next-line react/prop-types

  gridSize4,
  // eslint-disable-next-line no-unused-vars
  
  themeNumbers,
   
}) {
  const [itemsIsMini, setItemsIsMini] = useState(false);
  const [items, setItems] = useState(itemsIsMini ? numbersMini : numbers);
  const [prev, setPrev] = useState(-1);
  const [hidden, setHidden] = useState(false);
  const [numberIsTrue, setNumberIsTrue] = useState(false);

  if(gridSize4 === true) {
    itemsIsMini(true);
  }
  
  if(themeNumbers === true) {
    setNumberIsTrue(true);
  }

  
  

  const check = (current) => {
    if (items[current].id === items[prev].id) {
      stopGamePlaysHandler();
      stopGameTimeNumber4x4();
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      numberOfMoveHandler();
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setHidden(true);
      numberOfMoveHandler();
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
      {numberIsTrue ? (
        <div className="">
          <div className={itemsIsMini ? "components-mini" : "components"}>
            {items.map((item, index) => (
              <NumberButton
                key={index}
                number={item.content}
                handleClick={() => handleClick(index)}
                id={index}
                stat={item.stat}
                itemsIsMini={itemsIsMini}
              />
            ))}
          </div>
          <div className={hidden ? "hidden" : ""}></div>
        </div>
      ) : (
        <div className="">
          <div className={itemsIsMini ? "components-mini" : "components"}>
            {items.map((item, index) => (
              <IconsButton
                key={index}
                importIcons={item.content}
                handleClickIcons={() => handleClick(index)}
                id={index}
                stat={item.stat}
                itemsIsMini={itemsIsMini}
              />
            ))}
          </div>
          <div className={hidden ? "hidden" : ""}></div>
        </div>
      )}
    </div>
  );
}

export default Game;
