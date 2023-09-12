import './Header.css';
import { useState, useEffect, useRef } from 'react';
export default function Header() {
    const [menuButtonActive, setMenuButtonActive] = useState(false);
    const menuBoxRef = useRef(null);

    const menuButtonHandler = () => {
        setMenuButtonActive(!menuButtonActive);
    }


    useEffect(() => {
        function handleClickOutside(event) {
            if(menuBoxRef.current && !menuBoxRef.current.contains(event.target)) {
                setMenuButtonActive(false);
            }
        }

        if (menuButtonActive) {
            document.addEventListener('mousedown', handleClickOutside);
          } else {
            document.removeEventListener('mousedown', handleClickOutside);
          }
      
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
    }, [menuButtonActive]);

    console.log( 'menuButtonActive: ' ,menuButtonActive);
    return (
        <>
            <div className="headerBox">
                <div className='headerDiscriptionBox'>
                    <p className="title fontFamily">memory</p>
                    <button className="menuButton fontFamily" onClick={menuButtonHandler}>Menu</button>
                    <div className='tabletMenu'>
                        <button style={{...styles.buttonStyles,...styles.tabletButtonStyles}} className='fontFamily buttonYellow'>Restart</button>
                        <button style={{...styles.buttonStyles,...styles.tabletButtonStyles}} className='fontFamily buttonsGray'>New Game</button>
                    </div>

                </div>
            </div>

            <div ref={menuBoxRef} className={menuButtonActive? 'menuBoxInside' : 'none'}>
                    <button className='fontFamily buttonYellow' style={{...styles.buttonStyles}} >Restart</button>
                    <button style={{ ...styles.buttonStyles}} className='fontFamily buttonsGray'>New Game</button>
                    <button style={{...styles.buttonStyles}} className='fontFamily buttonsGray' onClick={menuButtonHandler}>Resume Game</button>
            </div>
        </>
    )
}

const styles = {
    buttonStyles : {
        width: '279px',
        height: '48px',
        borderRadius: '20px',
        border: 'none',
        fontSize: '18px',
        outline: 'none',
        
    },

    tabletButtonStyles: {
        width: '127px',
        height: '52px',
        borderRadius: '30px',
        
    }
};