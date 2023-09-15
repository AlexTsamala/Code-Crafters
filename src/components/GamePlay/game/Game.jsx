import { useState } from "react";
import NumberButton from "./NumberButton";
import "./Game.css";
import { numbers, numbersMini } from "./Number";
import { icons, iconsMini } from "./Icons";
import IconsButton from "./IconsButton";

function Game({
  stopGamePlaysHandler,
  numberOfMoveHandler,
  stopGameTimeNumber4x4,
}) {
  const [itemsIsMini, setItemsIsMini] = useState(true);
  const [items, setItems] = useState(itemsIsMini ? numbersMini : numbers);
  const [iconsIsMini, setIconsIsMini] = useState(true);
  const [importIcons, setImportIcons] = useState(
    iconsIsMini ? iconsMini : icons
  );
  const [prev, setPrev] = useState(-1);
  const [hidden, setHidden] = useState(false);
  const [numberIsTrue, setNumberIsTrue] = useState(true);

  const check = (current) => {
    if (items[current].id == items[prev].id) {
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

  const checkIcons = (current) => {
    if (importIcons[current].id == importIcons[prev].id) {
      numberOfMoveHandler();
      importIcons[current].stat = "correct-icon";
      importIcons[prev].stat = "correct-icon";
      setItems([...importIcons]);
      setPrev(-1);
    } else {
      numberOfMoveHandler();
      importIcons[current].stat = "wrong-icon";
      importIcons[prev].stat = "wrong-icon";
      setItems([...importIcons]);
      setHidden(true);
      setTimeout(() => {
        importIcons[current].stat = "";
        importIcons[prev].stat = "";
        setItems([...importIcons]);
        setPrev(-1);
        setHidden(false);
      }, 1000);
    }
  };

  const handleClickIcons = (id) => {
    if (prev === -1) {
      importIcons[id].stat = "active-icon";
      setPrev(id);
    } else {
      checkIcons(id);
    }
  };

  return (
    <div className="Game">
      {numberIsTrue ? (
        <div className="">
          <div className={itemsIsMini ? "components-mini" : "components"}>
            {items.map((item, index) => {
              return (
                <NumberButton
                  key={index}
                  number={item.content}
                  handleClick={handleClick}
                  id={index}
                  stat={item.stat}
                  itemsIsMini={itemsIsMini}
                />
              );
            })}
          </div>
          <div className={hidden ? "hidden" : ""}></div>
        </div>
      ) : (
        <div className="">
          <div className={iconsIsMini ? "components-mini" : "components"}>
            {importIcons.map((icon, index) => {
              return (
                <IconsButton
                  key={index}
                  importIcons={icon.content}
                  handleClickIcons={handleClickIcons}
                  id={index}
                  stat={icon.stat}
                  iconsIsMini={iconsIsMini}
                />
              );
            })}
          </div>
          <div className={hidden ? "hidden" : ""}></div>
        </div>
      )}
    </div>
  );
}

export default Game;
