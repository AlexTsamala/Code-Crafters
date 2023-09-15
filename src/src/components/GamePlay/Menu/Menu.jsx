import "./Menu.css";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function Menu({
  setMenuButtonActive,
  menuButtonActive,
  menuButtonHandler,
}) {
  const menuBoxRef = useRef(null);
  // const [state1, setState1] = useState('goal');

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuBoxRef.current && !menuBoxRef.current.contains(event.target)) {
        setMenuButtonActive(false);
      }
    }

    if (menuButtonActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuButtonActive, setMenuButtonActive]);

  // console.log( 'menuButtonActive: ' ,menuButtonActive);

  return (
    <div className="MenuFolderBox">
      <div className={menuButtonActive ? "menuBoxInsideBigBox" : "none"}>
        <div
          ref={menuBoxRef}
          className={menuButtonActive ? "menuBoxInside" : "none"}
        >
          <button
            className="fontFamily buttonYellow"
            style={{ ...styles.buttonStyles }}
            // onClick={starterPage}
            // RESTARTის დაჭერისას სწორად დავწერე ??  App-ში state-ს განვსაზღვრავთ და მერე props-მივიღებ boolean
          >
            Restart
          </button>
          <button
            style={{ ...styles.buttonStyles }}
            className="fontFamily buttonsGray"
          >
            New Game
          </button>
          <button
            style={{ ...styles.buttonStyles }}
            className="fontFamily buttonsGray"
            onClick={menuButtonHandler}
          >
            Resume Game
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  buttonStyles: {
    width: "279px",
    height: "48px",
    borderRadius: "20px",
    border: "none",
    fontSize: "18px",
    outline: "none",
  },

  tabletButtonStyles: {
    width: "127px",
    height: "52px",
    borderRadius: "30px",
  },
};
